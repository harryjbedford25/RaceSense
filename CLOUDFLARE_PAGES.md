# Cloudflare Pages Deployment Guide

Since you're using GitHub integration with environment variables, **Cloudflare Pages** is the right choice (not Workers Sites).

## Setup Steps

### 1. Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create application**
3. Select **Pages** → **Connect to Git**
4. Select your GitHub repository: `harryjbedford25/RaceSense`
5. Click **Begin setup**

### 2. Configure Build Settings

In the Cloudflare Pages setup:

- **Project name**: racesense (or your preferred name)
- **Production branch**: master
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`

### 3. Add Environment Variables

Scroll down to **Environment variables** and add:

**For Production:**
```
VITE_SUPABASE_URL = https://crnwdzjzevkruwzgezrb.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybndkemp6ZXZrcnV3emdlenJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyOTMyNzksImV4cCI6MjEwNjg2OTI3OX0.Zzg39bKQu_qzfrh27kERCCeb6Alaxn3cQJQswcvsYi4
```

**For Preview (optional - for pull requests):**
Add the same variables to the Preview section.

### 4. Deploy

Click **Save and Deploy**. Cloudflare will:
- Build the project automatically
- Deploy to their global CDN
- Set up automatic deployments on push to master

### 5. Custom Domain (Optional)

After deployment, you can add a custom domain:
- Go to your Pages project → Custom domains
- Add your domain (e.g., racesense.com)
- Update DNS as instructed

## Why Cloudflare Pages?

- ✅ Full GitHub integration
- ✅ Environment variables support
- ✅ Automatic deployments
- ✅ Preview deployments for PRs
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ DDoS protection

Workers Sites is better for manual deployment with Wrangler CLI, but Pages is superior for GitHub integration.
