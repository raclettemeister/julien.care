import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, PATCH, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json();

    // === POST: Create new bug report ===
    if (req.method === "POST") {
      const { game_state, browser_info, recent_errors, timestamp } = body;

      const { data, error } = await supabase
        .from("bug_reports")
        .insert({
          game_state: game_state || null,
          browser_info: browser_info || null,
          recent_errors: recent_errors || null,
          status: "new",
        })
        .select("id")
        .single();

      if (error) throw error;

      // Email notification via Resend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
      if (RESEND_API_KEY) {
        // Parse game state for clean display
        let gameInfo: { day: string; timeOfDay: string; bank: number | string; monthlySales: number | string; stress: number | string; concept: string; gameOver: boolean } = { day: "?", timeOfDay: "?", bank: "?", monthlySales: "?", stress: "?", concept: "?", gameOver: false };
        try {
          if (game_state) {
            const gs = JSON.parse(game_state);
            gameInfo = {
              day: gs.day ?? gs.currentDay ?? "?",
              timeOfDay: gs.timeOfDay ?? gs.time ?? "?",
              bank: gs.bank ?? gs.money ?? gs.balance ?? "?",
              monthlySales: gs.monthlySales ?? gs.sales ?? "?",
              stress: gs.stress ?? gs.stressLevel ?? "?",
              concept: gs.concept ?? gs.shopConcept ?? "?",
              gameOver: gs.gameOver ?? gs.isGameOver ?? false,
            };
          }
        } catch { /* keep defaults */ }

        // Parse browser info for one-liner
        let browserLine = browser_info || "Not captured";
        try {
          if (browser_info) {
            const bi = JSON.parse(browser_info);
            browserLine = [bi.browser || bi.userAgent, bi.screenSize || bi.screen, bi.platform || bi.os].filter(Boolean).join(" · ") || browser_info;
          }
        } catch { /* use raw string */ }

        const stressVal = typeof gameInfo.stress === "number" ? `${gameInfo.stress}%` : gameInfo.stress;
        const bankVal = typeof gameInfo.bank === "number" ? `€${gameInfo.bank.toLocaleString()}` : gameInfo.bank;
        const salesVal = typeof gameInfo.monthlySales === "number" ? `€${gameInfo.monthlySales.toLocaleString()}` : gameInfo.monthlySales;

        const html = `
<div style="font-family:-apple-system,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
  <h2 style="margin:0 0 16px">🐛 Bug Report <span style="font-weight:normal;color:#888;font-size:14px">#${data.id.slice(0,8)}</span></h2>

  <table style="width:100%;border-collapse:collapse;font-size:15px;margin-bottom:20px">
    <tr><td style="padding:6px 12px 6px 0;color:#666;width:120px">Day</td><td style="padding:6px 0;font-weight:600">${gameInfo.day} (${gameInfo.timeOfDay})</td></tr>
    <tr style="background:#f9f9f9"><td style="padding:6px 12px 6px 0;color:#666">Money</td><td style="padding:6px 0;font-weight:600">${bankVal}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#666">Monthly Sales</td><td style="padding:6px 0;font-weight:600">${salesVal}</td></tr>
    <tr style="background:#f9f9f9"><td style="padding:6px 12px 6px 0;color:#666">Stress</td><td style="padding:6px 0;font-weight:600">${stressVal}</td></tr>
    <tr><td style="padding:6px 12px 6px 0;color:#666">Concept</td><td style="padding:6px 0;font-weight:600">${gameInfo.concept}</td></tr>
    <tr style="background:#f9f9f9"><td style="padding:6px 12px 6px 0;color:#666">Game Over</td><td style="padding:6px 0;font-weight:600">${gameInfo.gameOver ? "🔴 Yes" : "🟢 No"}</td></tr>
  </table>

  <p style="font-size:13px;color:#666;margin:0 0 4px">🖥 <strong>Browser:</strong> ${browserLine}</p>

  ${recent_errors && recent_errors !== "None" ? `<div style="margin-top:16px"><p style="font-size:13px;color:#c00;margin:0 0 4px">⚠️ <strong>Recent Errors</strong></p><pre style="background:#fff5f5;border:1px solid #fcc;padding:10px;font-size:12px;border-radius:4px;overflow-x:auto;white-space:pre-wrap">${recent_errors}</pre></div>` : ""}

  <p style="font-size:13px;color:#999;margin:20px 0 8px">Player may add a description shortly.</p>

  <details style="margin-top:24px">
    <summary style="font-size:12px;color:#aaa;cursor:pointer">Raw data (for debugging)</summary>
    <pre style="background:#f5f5f5;color:#999;padding:10px;font-size:11px;border-radius:4px;overflow-x:auto;white-space:pre-wrap;margin-top:8px">${JSON.stringify({ game_state, browser_info, recent_errors, timestamp }, null, 2)}</pre>
  </details>
</div>`;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Bug Report <julien@julien.care>",
            to: ["staycreative@julien.care"],
            subject: `🐛 Bug report — Day ${gameInfo.day} · ${stressVal} stress`,
            html,
          }),
        });
      }

      return new Response(
        JSON.stringify({ id: data.id, status: "created" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    // === PATCH: Add description to existing report ===
    if (req.method === "PATCH") {
      const { id, description } = body;

      if (!id || !description) {
        return new Response(
          JSON.stringify({ error: "Missing id or description" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      const { error } = await supabase
        .from("bug_reports")
        .update({ description })
        .eq("id", id);

      if (error) throw error;

      await new Promise((resolve) => setTimeout(resolve, 1500));

      const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
      if (RESEND_API_KEY) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Bug Report <julien@julien.care>",
            to: ["staycreative@julien.care"],
            subject: "🐛 Bug report updated with description",
            text: `Player added a description.\n\nReport ID: ${id}\n\nDescription: ${description}\n\n---\nView in Supabase dashboard.`,
          }),
        });
      }

      return new Response(
        JSON.stringify({ status: "updated" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 405 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
