// =====================================================
// KONFIGURASI SUPABASE
// Isi dari Supabase > Project Settings > API
// Jika dikosongkan, web tetap jalan memakai data cadangan (assets/data.js)
// Anon key AMAN ditaruh di frontend karena tabel dilindungi RLS (read-only).
// =====================================================
window.APP_CONFIG = {
  SUPABASE_URL: "",       // contoh: "https://abcdefgh.supabase.co"
  SUPABASE_ANON_KEY: "",  // contoh: "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
};
