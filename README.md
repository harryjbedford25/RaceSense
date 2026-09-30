# RSWebsite3

A modern React application built with Vite, React, and Tailwind CSS, deployed on Cloudflare Pages.

## Prerequisites

- Node.js 20 or higher
- npm or yarn

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

Build the production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

### GitHub Actions (Recommended)

The project is configured to automatically deploy to Cloudflare Pages via GitHub Actions when you push to the `main` branch.

To set up:

1. Create a Cloudflare account at https://dash.cloudflare.com/
2. Get your Cloudflare API Token from https://dash.cloudflare.com/profile/api-tokens
3. Get your Account ID from your Cloudflare dashboard
4. Add the following secrets to your GitHub repository:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

Push to the `main` branch to trigger automatic deployment.

### Manual Deployment with Wrangler

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
wrangler pages deploy dist --project-name=rswebsite3
```

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `pages/` - Page components
  - `lib/` - Utility functions and configurations
  - `api/` - API client code
- `public/` - Static assets
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Radix UI components
- React Router
- TanStack Query
