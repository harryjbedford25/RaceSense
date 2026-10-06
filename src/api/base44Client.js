import { supabase } from '@/lib/supabaseClient';

// Legacy compatibility layer - the app will be migrated to use supabase directly
export const db = supabase;
export const base44 = supabase;
export default supabase;