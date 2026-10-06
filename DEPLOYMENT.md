# Cloudflare Workers Sites Deployment Guide

This guide explains how to deploy the RaceSense website to Cloudflare Workers Sites using Wrangler CLI.

## Prerequisites

1. A Cloudflare account (free tier is sufficient)
2. Wrangler CLI installed
3. Supabase project configured (see SUPABASE_SETUP.md)

## Installation

Install Wrangler CLI globally:

```bash
npm install -g wrangler
```

Authenticate with Cloudflare:

```bash
wrangler login
```

This will open a browser window to authorize Wrangler with your Cloudflare account.

## Configuration

### 1. Set Up Environment Variables

Edit `wrangler.toml` and add your Supabase credentials:

```toml
[vars]
VITE_SUPABASE_URL = "https://your-project-id.supabase.co"
VITE_SUPABASE_ANON_KEY = "your-anon-key-here"

[env.production.vars]
VITE_SUPABASE_URL = "https://your-project-id.supabase.co"
VITE_SUPABASE_ANON_KEY = "your-anon-key-here"
```

### 2. Configure Worker Name

The worker name in `wrangler.toml` is set to `racesense`. You can change this to your preferred name:

```toml
name = "your-worker-name"
```

## Local Development

To test the worker locally before deploying:

```bash
wrangler dev
```

This will:
- Build the project
- Start a local server
- Open a browser at `http://localhost:8787`

## Deployment

### Development Deployment

Deploy to your development environment:

```bash
npm run deploy
```

This deploys to the default environment (development).

### Production Deployment

Deploy to production:

```bash
npm run deploy:production
```

Or manually:

```bash
wrangler deploy --env=production
```

## GitHub Integration (Optional)

If you want to deploy automatically from GitHub:

### 1. Install GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: deploy --env=production
```

### 2. Add Secrets to GitHub

Add the following secrets to your GitHub repository:

- `CLOUDFLARE_API_TOKEN`: Get from https://dash.cloudflare.com/profile/api-tokens
- `CLOUDFLARE_ACCOUNT_ID`: Get from your Cloudflare dashboard sidebar

### 3. Get API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use the "Edit Cloudflare Workers" template
4. Grant permissions for Account > Workers Scripts > Edit
5. Set resource to "Include > All accounts" or specific account
6. Create token and copy it

### 4. Get Account ID

Your account ID is visible in the Cloudflare dashboard sidebar when you select Workers & Pages.

## Custom Domain (Optional)

To use a custom domain with your worker:

1. In Cloudflare dashboard, go to Workers & Pages
2. Select your worker
3. Go to Settings > Triggers > Custom Domains
4. Click "Add custom domain"
5. Enter your domain (e.g., `racesense.com`)
6. Follow the DNS instructions

## Environment Variables

Environment variables can be set in three ways:

### 1. wrangler.toml (Recommended)

```toml
[vars]
VITE_SUPABASE_URL = "your-url"
VITE_SUPABASE_ANON_KEY = "your-key"
```

### 2. Command Line

```bash
wrangler deploy --var VITE_SUPABASE_URL:your-url --var VITE_SUPABASE_ANON_KEY:your-key
```

### 3. Secrets (for sensitive data)

```bash
wrangler secret put VITE_SUPABASE_URL
wrangler secret put VITE_SUPABASE_ANON_KEY
```

Secrets are encrypted and not visible in the dashboard.

## Troubleshooting

### Build Failures

```bash
# Check build locally first
npm run build

# Verify wrangler configuration
wrangler whoami
wrangler deploy --dry-run
```

### Environment Variables Not Working

- Ensure variables are in `wrangler.toml` under `[vars]` section
- Check variable names match exactly (case-sensitive)
- For secrets, use `wrangler secret list` to verify

### Worker Not Loading

- Check worker logs: `wrangler tail`
- Verify the build output in `dist/` folder
- Ensure `wrangler.toml` has correct `bucket = "./dist"`

### SPA Routing Issues

The worker in `src/worker.js` handles SPA routing by serving `index.html` for missing files. If routes aren't working:

1. Check the worker logic in `src/worker.js`
2. Verify the worker is deployed: `wrangler deployments list`
3. Test locally: `wrangler dev`

## Performance

Cloudflare Workers Sites automatically:
- Caches static assets globally
- Provides automatic HTTPS
- Enables HTTP/3
- Compresses assets (Brotli, Gzip)
- Provides DDoS protection

## Additional Resources

- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Workers Sites Documentation](https://developers.cloudflare.com/workers/platform/sites/)
- [Environment Variables](https://developers.cloudflare.com/workers/configuration/environment-variables/)
- [Custom Domains](https://developers.cloudflare.com/workers/configuration/custom-domains/)
