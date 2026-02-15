/**
 * Cloudflare Worker entry point.
 * This script handles incoming requests and serves the static assets
 * configured in wrangler.toml.
 */

export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Optional: Add custom logic here (e.g., API redirects or headers)
    
    // Pass the request to the static assets handler
    return await env.ASSETS.fetch(request);
  },
};
