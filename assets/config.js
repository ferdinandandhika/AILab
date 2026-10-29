// =====================================================
// KONFIGURASI SUPABASE
// Isi dari Supabase > Project Settings > API
// Jika dikosongkan, web tetap jalan memakai data cadangan (assets/data.js)
// Anon key AMAN ditaruh di frontend karena tabel dilindungi RLS (read-only).
// =====================================================
window.APP_CONFIG = {
  SUPABASE_URL: "https://alqliprjiflaxxuwchjm.supabase.co",       // contoh: "https://abcdefgh.supabase.co"
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscWxpcHJqaWZsYXh4dXdjaGptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNTg5OTUsImV4cCI6MjEwODgzNDk5NX0.0cpfwpBlcZsF_jtgTKB3Ax41eNxDfU5u2JjrmLdIogI",  // contoh: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
};
