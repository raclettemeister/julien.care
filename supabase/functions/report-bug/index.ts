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
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Bug Report <julien@julien.care>",
            to: ["staycreative@julien.care"],
            subject: "🐛 New bug report from Chez Julien Simulator",
            text: `New bug report!\n\nReport ID: ${data.id}\n\nGame state:\n${game_state || "Not captured"}\n\nBrowser:\n${browser_info || "Not captured"}\n\nRecent errors:\n${recent_errors || "None"}\n\nTime: ${timestamp || new Date().toISOString()}\n\n---\nPlayer may add a description shortly.\nView all reports in Supabase dashboard.`,
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
      JSON.stringify({ error: err.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
