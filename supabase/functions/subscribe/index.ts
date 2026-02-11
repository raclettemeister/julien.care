import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

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
