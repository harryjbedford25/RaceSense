# RaceSense - Driver Profile Platform

A modern driver profile platform built with React, Vite, Supabase, and deployed on Cloudflare Pages.

## Features

- **Driver Profiles**: Create and manage racing driver profiles with stats, results, and links
- **Race Results**: Track and display race performance data
- **Authentication**: Email/password authentication via Supabase Auth
- **Responsive Design**: Beautiful UI with Tailwind CSS and Radix UI components
- **Fast Performance**: Deployed on Cloudflare Pages for global CDN delivery

## Tech Stack

- **Frontend**: React 18, Vite, React Router
- **Backend**: Supabase (PostgreSQL database, Auth, Storage)
- **Deployment**: Cloudflare Workers Sites
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: React Query (TanStack Query)

## Prerequisites

1. Node.js 18+ installed
2. A Supabase project (free tier is sufficient)
3. Git repository for deployment

## Quick Start

### 1. Set Up Supabase

Follow the [Supabase Setup Guide](./SUPABASE_SETUP.md) to:
- Create a Supabase project
- Run the database schema from `supabase/schema.sql`
- Configure authentication
- Set up storage for avatars
- Get your API credentials

### 2. Configure Environment Variables

Copy the example environment file and add your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking

### Project Structure

```
src/
├── api/              # API client configuration
├── components/       # React components
│   ├── driver/      # Driver-specific components
│   ├── racesense/   # Landing page components
│   └── ui/          # Reusable UI components
├── lib/             # Utility functions and clients
├── pages/           # Page components
└── main.jsx         # Application entry point
```

## Deployment

### Deploy to Cloudflare Workers Sites

Follow the [Deployment Guide](./DEPLOYMENT.md) to:
- Install and configure Wrangler CLI
- Set up environment variables
- Deploy locally or to production
- Set up GitHub Actions for automatic deployments

Quick deploy:
```bash
npm run deploy
```

## Database Schema

The application uses three main tables:

- **profiles**: User profiles (extends Supabase auth)
- **drivers**: Driver profile data
- **race_results**: Race performance data

See `supabase/schema.sql` for the complete schema including RLS policies.

## Authentication

The app uses Supabase Auth with email/password authentication:
- Sign up with email and password
- Email confirmation required (configurable in Supabase)
- Password reset functionality
- Protected routes for authenticated users

## File Uploads

Avatar images are stored in Supabase Storage:
- Bucket name: `avatars`
- Public access for displaying images
- Authenticated users can upload their own avatars

## Troubleshooting

### Common Issues

**Environment variables not loading:**
- Ensure `.env.local` is in the project root
- Variable names must start with `VITE_`
- Restart the dev server after adding variables

**Supabase connection errors:**
- Verify Supabase URL and anon key are correct
- Check Supabase project is not paused
- Ensure RLS policies are configured correctly

**Build failures:**
- Run `npm run lint` and `npm run typecheck` to catch errors
- Check all dependencies are installed
- Verify Node.js version is 18+

## License

This project is proprietary. All rights reserved.

## Support

For issues or questions:
- Check the [Supabase Setup Guide](./SUPABASE_SETUP.md)
- Check the [Deployment Guide](./DEPLOYMENT.md)
- Review Supabase documentation: https://supabase.com/docs
- Review Cloudflare Workers documentation: https://developers.cloudflare.com/workers/
