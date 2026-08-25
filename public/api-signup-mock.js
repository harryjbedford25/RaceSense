// Simple mock API for local testing
// This simulates the EmailOctopus signup for local development

export async function onRequestPost(context) {
  try {
    const { email } = await context.request.json();
    
    console.log('MOCK API: Received signup request for:', email);
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Simulate successful signup
    console.log('MOCK API: Successfully signed up:', email);
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email signed up (mock mode - not actually sent to EmailOctopus)' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('MOCK API: Signup error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}