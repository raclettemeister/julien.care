import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function json(body: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return json({ status: "error", message: "Invalid email address" }, 400);
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Insert into Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase
      .from("subscribers")
      .insert({ email: trimmedEmail });

    let alreadySubscribed = false;
    if (insertError) {
      // Unique constraint violation = already subscribed
      if (insertError.code === "23505") {
        alreadySubscribed = true;
      } else {
        console.error("Insert error:", insertError);
        return json({ status: "error", message: "Database error" }, 500);
      }
    }

    // Add contact to Resend audience
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      try {
        // Get first audience
        const audRes = await fetch("https://api.resend.com/audiences", {
          headers: { Authorization: `Bearer ${resendKey}` },
        });
        const audData = await audRes.json();
        const audienceId = audData?.data?.[0]?.id;

        if (audienceId) {
          await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: trimmedEmail, unsubscribed: false }),
          });
        }
      } catch (e) {
        console.error("Resend error:", e);
        // Don't fail the whole request if Resend fails
      }
    }

    return json({
      status: "ok",
      message: alreadySubscribed ? "already_subscribed" : "subscribed",
    });
  } catch (e) {
    console.error("Unexpected error:", e);
    return json({ status: "error", message: "Something went wrong" }, 500);
  }
});
