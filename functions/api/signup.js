// EMAIL SERVICE CONFIGURATION
// Choose one service and configure its API key

// Option 1: EmailOctopus (Recommended - Free: 2,500 subscribers)
const EMAIL_SERVICE = 'emailoctopus';
const EMAILOCTOPUS_API_KEY = 'eo_9db6ca29e3f6db168a41ea41c3c988002354ef94ac9a6bf6fe08d358224d99c1';
const EMAILOCTOPUS_LIST_ID = '6829a614-a08e-11f1-a99b-a1d0611d2415';

// Option 2: MailerLite (Free: 1,000 subscribers)
// const EMAIL_SERVICE = 'mailerlite';
// const MAILERLITE_API_KEY = 'your-mailerlite-api-key';
// const MAILERLITE_GROUP_ID = 'your-mailerlite-group-id';

// Option 3: Brevo (Free: 300 emails/day)
// const EMAIL_SERVICE = 'brevo';
// const BREVO_API_KEY = 'your-brevo-api-key';
// const BREVO_LIST_ID = 'your-brevo-list-id';

export async function onRequestPost(context) {
  // Add CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight requests
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }
  try {
    const { email } = await context.request.json();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Check if API keys are configured
    const keysConfigured = EMAIL_SERVICE === 'emailoctopus' 
      ? EMAILOCTOPUS_API_KEY !== 'your-emailoctopus-api-key' && EMAILOCTOPUS_LIST_ID !== 'your-emailoctopus-list-id'
      : false;

    if (!keysConfigured) {
      // Fallback: Log the email if API keys aren't configured
      console.log('New signup (API keys not configured):', email);
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Email logged - configure API keys for actual integration' 
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // EmailOctopus integration
    if (EMAIL_SERVICE === 'emailoctopus') {
      console.log('Attempting EmailOctopus API call for:', email);
      console.log('List ID:', EMAILOCTOPUS_LIST_ID);
      console.log('API Key:', EMAILOCTOPUS_API_KEY.substring(0, 10) + '...');
      
      const response = await fetch(
        `https://api.emailoctopus.com/api/1.6/lists/${EMAILOCTOPUS_LIST_ID}/contacts`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${EMAILOCTOPUS_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            tags: ['website-signup']
          })
        }
      );

      console.log('EmailOctopus response status:', response.status);
      
      const responseData = await response.json();
      console.log('EmailOctopus response data:', responseData);

      if (response.ok) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      } else {
        return new Response(JSON.stringify({ 
          error: responseData.error?.message || 'Failed to subscribe to mailing list',
          details: responseData
        }), {
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // Add other services here if needed...

  } catch (error) {
    console.error('Signup error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}