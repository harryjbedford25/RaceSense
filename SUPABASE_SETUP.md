# Supabase Setup Guide

This guide will help you set up Supabase for the RaceSense website migration.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose your organization (or create one)
5. Fill in the project details:
   - **Name**: racesense (or your preferred name)
   - **Database Password**: Generate a strong password and save it securely
   - **Region**: Choose the region closest to your users
6. Click "Create new project"
7. Wait for the project to be provisioned (usually 1-2 minutes)

## Step 2: Configure Authentication

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Disable Google OAuth (we're using email/password only)
3. Enable **Email** provider if not already enabled
4. Configure email settings (optional - Supabase provides default email templates)

## Step 3: Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the contents of `supabase/schema.sql` from this repository
4. Paste it into the SQL Editor
5. Click "Run" to execute the schema
6. Verify that all tables were created successfully

## Step 4: Get Your Credentials

1. In your Supabase dashboard, go to **Project Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like `https://xxxxxxxx.supabase.co`)
   - **anon public** key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)
3. Save these credentials - you'll need them for the `.env.local` file

## Step 5: Set Up Storage (for avatar uploads)

**IMPORTANT: You must create the 'avatars' bucket for profile images to work**

1. In your Supabase dashboard, go to **Storage**
2. Click "Create a new bucket"
3. Name it: `avatars`
4. Make it **Public** (so avatar images can be displayed)
5. Click "Create bucket"
6. Configure bucket policies:
   - **Public** bucket: Allow read access to everyone
   - **Authenticated** users: Allow upload (if you want users to upload their own avatars)

**RLS Policy for avatars bucket:**
- Go to the avatars bucket → Policies
- Add a new policy to allow authenticated users to upload:
  - Policy name: "Allow authenticated uploads"
  - Allowed operations: INSERT
  - Target roles: authenticated
  - USING expression: `auth.role() = 'authenticated'`

## Step 6: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Replace the values with the credentials you copied in Step 4.

## Step 7: Test the Connection

After setting up the environment variables, run:

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` and verify:
- You can navigate to the home page
- You can access the /drivers page
- You can sign up and log in
- You can create a driver profile

## Troubleshooting

### Connection Issues
- Verify your `.env.local` file is in the project root
- Check that the Supabase URL and key are correct
- Ensure the project is not paused in Supabase dashboard

### Authentication Issues
- Check that Email provider is enabled in Supabase Auth settings
- Verify RLS policies are correctly set in the database
- Check browser console for error messages

### Database Issues
- Ensure the SQL schema was executed successfully
- Check that all tables exist in the Table Editor
- Verify RLS policies are enabled

## Security Notes

- Never commit `.env.local` to git
- The `anon` key is safe to use in frontend code
- For admin operations, you would need the `service_role` key (never use this in frontend)
- Row Level Security (RLS) policies protect your data
