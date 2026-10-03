import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project.supabase.co' &&
  !supabaseUrl.includes('placeholder')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Saves a prototype inquiry or lead submission
 */
export async function saveInquiry({ businessName, industry, phone, targetUrl, notes = '' }) {
  if (!isSupabaseConfigured || !supabase) {
    console.log('[Offline Fallback] Staging inquiry received:', { businessName, industry, phone, targetUrl });
    return { success: true, offline: true };
  }

  try {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          business_name: businessName,
          industry,
          phone,
          target_url: targetUrl,
          notes,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err) {
    console.warn('[Supabase Warning] Could not save inquiry to database:', err.message);
    // Return success to never block the client experience
    return { success: true, fallback: true, error: err.message };
  }
}
