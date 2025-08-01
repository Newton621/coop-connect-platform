// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://etzbafcnpwepsgydzljp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0emJhZmNucHdlcHNneWR6bGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjY2NzIsImV4cCI6MjA2NzUwMjY3Mn0.CRuKUSAgzSkkhpkFOwISVp1HCESs3NQaJcBF8KO5vuc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});