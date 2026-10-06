/**
 * Cloudflare Worker for serving static assets via Workers Sites
 * This worker forwards all requests to the static assets in the dist folder
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle API requests or other dynamic routes if needed
    // For now, this is a static site, so we serve the index.html for SPA routing

    // Try to serve the requested file
    try {
      const response = await env.ASSETS.fetch(request);
      return response;
    } catch (e) {
      // If the file doesn't exist, serve index.html for SPA routing
      const notFoundResponse = await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));
      return notFoundResponse;
    }
  },
};
