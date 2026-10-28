import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL || '';
const cleanUrl = rawUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  cleanUrl && 
  supabaseAnonKey && 
  cleanUrl !== 'https://your-project.supabase.co' &&
  !cleanUrl.includes('placeholder')
);

export const supabase = isSupabaseConfigured
  ? createClient(cleanUrl, supabaseAnonKey)
  : null;

/**
 * Saves a prototype inquiry or lead submission
 */
export async function saveInquiry({ businessName, industry, phone, targetUrl, notes = '' }) {
  if (!isSupabaseConfigured || !supabase) {
    // Defensive logging: Never disclose customer PII (phone/name) in client browser console
    console.info('[Client Telemetry] Staging inquiry processed locally');
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
