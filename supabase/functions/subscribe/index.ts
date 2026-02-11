import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const WELCOME_EMAIL_HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta name="x-apple-disable-message-reformatting" />
</head>
<body style="background-color:#ffffff;font-family:Georgia,Times New Roman,serif;margin:0;padding:0;">
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;margin:0 auto;padding:40px 24px;">
  <tbody>
    <tr>
      <td>
        <p style="font-size:13px;color:#999999;margin:0 0 32px 0;letter-spacing:2px;text-transform:uppercase;">julien.care</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <p style="font-size:20px;line-height:1.6;margin:0 0 8px 0;color:#1a1a1a;">Hey you!</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 8px 0;color:#333333;">I got your email address now. What a privilege!</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 8px 0;color:#333333;">I swear to use it for good, and nothing but the good.</p>
        <p style="font-size:16px;line-height:1.6;margin:0;color:#333333;">Until unsubscribe do us part.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <p style="font-size:16px;line-height:1.6;margin:0;color:#333333;">In the meantime, here is my first blog post.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:0;" />
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <p style="font-size:16px;line-height:1.6;margin:0 0 8px 0;color:#333333;">It's about cutting magazines with scissors. Scarcity versus abundance. Finding your way. And playing wild.</p>
        <p style="font-size:16px;line-height:1.6;margin:0;color:#333333;">Enjoy.</p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <a href="https://accelerating.lovable.app/essays/vision-board" style="display:block;text-decoration:none;border:1px solid #e5e5e5;padding:16px;color:inherit;">
          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody><tr>
              <td style="vertical-align:top;padding-right:16px;">
                <p style="font-size:11px;color:#999999;margin:0 0 4px 0;letter-spacing:1px;text-transform:uppercase;">Latest essay</p>
                <p style="font-size:16px;color:#1a1a1a;margin:0 0 4px 0;font-weight:bold;">Who do you think you are?</p>
                <p style="font-size:14px;color:#666666;margin:0;">Vision board collage, a creativity journey</p>
              </td>
            </tr></tbody>
          </table>
        </a>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:0;" />
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
          <tbody><tr>
            <td style="vertical-align:top;padding-right:12px;">
              <p style="font-size:16px;color:#1a1a1a;margin:0 0 4px 0;">— Julien</p>
              <p style="font-size:13px;color:#999999;margin:0;line-height:1.5;">Shop owner. Writer. Collage beginner.<br/>Brussels, Belgium</p>
            </td>
          </tr></tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 24px 0;">
        <p style="font-size:14px;line-height:1.6;margin:0;color:#666666;font-style:italic;">P.S. One of my first subscribers! I consider you family now! (If you are not already anyway.)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p style="font-size:12px;color:#cccccc;margin:0;">You just subscribed at julien.care — welcome aboard.</p>
      </td>
    </tr>
  </tbody>
</table>
</body>
</html>`;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()
    console.log('Subscribe request received for:', email)

    if (!email || !email.includes('@') || !email.includes('.')) {
      console.log('Invalid email:', email)
      return new Response(
        JSON.stringify({ status: 'error', message: 'invalid_email' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error: dbError } = await supabase
      .from('subscribers')
      .upsert({ email }, { onConflict: 'email' })

    if (dbError) {
      console.log('Database error:', dbError.message)
    } else {
      console.log('Saved to database')
    }

    const resendKey = Deno.env.get('RESEND_API_KEY')
    if (!resendKey) {
      console.log('ERROR: RESEND_API_KEY secret not found')
      return new Response(
        JSON.stringify({ status: 'error', message: 'server_config_error' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    console.log('Fetching Resend audiences...')
    const audiencesRes = await fetch('https://api.resend.com/audiences', {
      headers: { 'Authorization': `Bearer ${resendKey}` }
    })
    const audiencesData = await audiencesRes.json()
    console.log('Audiences response:', JSON.stringify(audiencesData))

    if (!audiencesData.data || audiencesData.data.length === 0) {
      console.log('ERROR: No audiences found in Resend')
      return new Response(
        JSON.stringify({ status: 'error', message: 'no_audience' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    const audienceId = audiencesData.data[0].id
    console.log('Using audience:', audienceId)

    const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, unsubscribed: false })
    })
    const contactData = await contactRes.json()
    console.log('Resend contact response:', JSON.stringify(contactData))

    if (!contactRes.ok) {
      console.log('Resend API error:', contactRes.status)
      return new Response(
        JSON.stringify({ status: 'error', message: 'resend_error' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // Send welcome email (non-blocking)
    console.log('Sending welcome email to:', email);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Julien <julien@julien.care>',
          to: [email],
          subject: 'My first blog post is about collage. Who would have known?',
          html: WELCOME_EMAIL_HTML,
        }),
      });
      const emailResult = await emailResponse.json();
      console.log('Welcome email result:', JSON.stringify(emailResult));
    } catch (emailError) {
      console.error('Welcome email failed (non-blocking):', emailError);
    }

    console.log('Successfully subscribed:', email)
    return new Response(
      JSON.stringify({ status: 'ok', message: 'subscribed' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (err) {
    console.log('Unexpected error:', err.message)
    return new Response(
      JSON.stringify({ status: 'error', message: 'server_error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
