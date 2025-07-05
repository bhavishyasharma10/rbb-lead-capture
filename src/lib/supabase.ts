import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Client Setup
 *
 * Initializes and exports a Supabase client using environment variables for URL and anon key.
 * Used throughout the app for database and authentication operations.
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 