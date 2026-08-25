export async function onRequestGet(context) {
  return new Response(JSON.stringify({ 
    message: 'Cloudflare Functions are working!',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}