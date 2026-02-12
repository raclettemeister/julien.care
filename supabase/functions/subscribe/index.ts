import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const WELCOME_EMAIL_HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My first blog post is about collage. Who would have known?</title></head><body style="margin:0; padding:0; background-color:#f5f0eb; font-family:Georgia, 'Times New Roman', serif;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f0eb;"><tr><td align="center" style="padding:30px 15px;"><table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;"><tr><td style="padding:0 0 25px 0; border-bottom:1px solid #d4c9bc;"><span style="font-size:14px; color:#8a7e72; letter-spacing:2px; text-transform:uppercase;">julien.care</span></td></tr><tr><td style="padding:35px 0 0 0;"><p style="font-size:18px; line-height:1.7; color:#2c2420; margin:0 0 20px 0;">Hey you!</p><p style="font-size:18px; line-height:1.7; color:#2c2420; margin:0 0 20px 0;">I got your email address now. What a privilege!</p><p style="font-size:18px; line-height:1.7; color:#2c2420; margin:0 0 12px 0;">I swear to use it for good, and nothing but the good.</p><p style="font-size:18px; line-height:1.7; color:#2c2420; margin:0 0 25px 0; font-style:italic;">Until unsubscribe do us part.</p></td></tr><tr><td style="padding:20px 0 15px 0;"><p style="font-size:18px; line-height:1.7; color:#2c2420; margin:0;">In the meantime, here is my first blog post.</p></td></tr><tr><td style="padding:0 0 15px 0;" align="center"><img src="https://vmhwyzwuwfshlqgdunkd.supabase.co/storage/v1/object/public/images//wolfdancer.png" alt="Wolf dancers" width="340" style="display:block; margin:0 auto;" /></td></tr><tr><td style="padding:5px 0 20px 0;"><p style="font-size:18px; line-height:1.7; color:#2c2420; margin:0 0 15px 0;">It's about cutting magazines with scissors. Scarcity versus abundance. Finding your way. And playing wild.</p><p style="font-size:20px; line-height:1.7; color:#2c2420; margin:0; font-style:italic;">Enjoy.</p></td></tr><tr><td style="padding:0 0 10px 0;" align="center"><a href="https://julien.care/essays/vision-board-creative-thinking-through-collage" style="text-decoration:none; display:block;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0ebe5; border-radius:6px; overflow:hidden;"><tr><td><img src="https://vmhwyzwuwfshlqgdunkd.supabase.co/storage/v1/object/public/images//thunbnail-essai-1.jpg" alt="Vision board collage thumbnail" width="600" style="max-width:100%; height:auto; display:block; border-radius:6px 6px 0 0;" /></td></tr><tr><td style="padding:18px 22px 22px 22px;"><p style="font-size:11px; line-height:1.4; color:#8a7e72; margin:0 0 6px 0; letter-spacing:1.5px; text-transform:uppercase;">Latest essay</p><p style="font-size:20px; line-height:1.4; color:#2c2420; margin:0 0 6px 0; font-weight:bold;">Who do you think you are?</p><p style="font-size:15px; line-height:1.5; color:#6b5e52; margin:0;">Vision board collage, a creativity journey</p></td></tr></table></a></td></tr><tr><td style="border-top:1px solid #d4c9bc; padding:25px 0 0 0;"></td></tr><tr><td><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle; width:70px;"><img src="https://vmhwyzwuwfshlqgdunkd.supabase.co/storage/v1/object/public/images//meforblog.jpg" alt="Julien" width="60" height="60" style="display:block; border-radius:50%; object-fit:cover;" /></td><td style="vertical-align:middle; padding-left:15px;"><p style="font-size:18px; line-height:1.4; color:#2c2420; margin:0 0 3px 0;">&mdash; Julien</p><p style="font-size:14px; line-height:1.4; color:#8a7e72; margin:0;">Shop owner. Writer. Collage beginner.<br>Brussels, Belgium</p></td></tr></table></td></tr><tr><td style="padding:10px 0;"></td></tr><tr><td style="padding:0 0 30px 0; border-bottom:1px solid #d4c9bc;"><p style="font-size:15px; line-height:1.6; color:#6b5e52; margin:0; font-style:italic;">P.S. One of my first subscribers! I consider you family now! (If you are not already anyway.)</p></td></tr><tr><td style="padding:20px 0 0 0;" align="center"><p style="font-size:12px; line-height:1.5; color:#a89e93; margin:0;">You just subscribed at <a href="https://julien.care" style="color:#8a7e72;">julien.care</a> &mdash; welcome aboard.</p></td></tr></table></td></tr></table></body></html>`;

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

    // Notify ntfy.sh
    try {
      await fetch('https://ntfy.sh/mylifeos-projects', {
        method: 'POST',
        body: `New subscriber: ${email}`,
      });
      console.log('ntfy.sh notified');
    } catch (ntfyErr) {
      console.error('ntfy.sh failed (non-blocking):', ntfyErr);
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
