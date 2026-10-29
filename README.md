# Web Training – Pengolahan Kata Berbasis AI

Website untuk peserta training: **download file Word latihan** dan **copy prompt dengan satu klik**.
Stack: **HTML/CSS/JS statis** → **GitHub** → **Vercel**, data dari **Supabase**.

```
ai-training-web/
├── index.html            ← halaman utama
├── vercel.json           ← setting Vercel (file di /files otomatis ter-download)
├── assets/
│   ├── style.css         ← desain (tema gelap–merah Solusi)
│   ├── app.js            ← logika: ambil data, copy, search, hitung klik
│   ├── config.js         ← ISI URL & ANON KEY SUPABASE DI SINI
│   ├── data.js           ← data cadangan (web tetap jalan tanpa Supabase)
│   └── logo.png
├── files/                ← file Word latihan + zip semua file
└── supabase/
    ├── schema.sql        ← buat tabel + keamanan (RLS)
    └── seed.sql          ← isi 11 sesi & 32 prompt
```

---

## LANGKAH 1 – Supabase (database)

1. Buka https://supabase.com → **New project** (pilih region **Singapore** biar cepat).
2. Masuk **SQL Editor** → **New query** → paste isi `supabase/schema.sql` → **Run**.
3. New query lagi → paste isi `supabase/seed.sql` → **Run**.
4. Cek di **Table Editor**: tabel `sessions` (11 baris), `prompts` (32 baris), `files` (5 baris).
5. Buka **Project Settings → API**, salin:
   - **Project URL**
   - **anon public key**
6. Buka `assets/config.js`, isi:
   ```js
   SUPABASE_URL: "https://xxxx.supabase.co",
   SUPABASE_ANON_KEY: "eyJhbGciOi...",
   ```
   > Anon key aman ditaruh di frontend. Tabel dikunci RLS: publik hanya bisa **baca**,
   > dan hanya bisa menambah hitungan copy/download lewat fungsi khusus.
   > **Jangan pernah** memasukkan `service_role` key.

## LANGKAH 2 – GitHub

```bash
cd ai-training-web
git init
git add .
git commit -m "Web training Pengolahan Kata Berbasis AI"
git branch -M main
git remote add origin https://github.com/USERNAME/ai-training-web.git
git push -u origin main
```
(Atau pakai **GitHub Desktop** / upload folder lewat web GitHub → *Add file → Upload files*.)

## LANGKAH 3 – Vercel

1. Buka https://vercel.com → login pakai GitHub.
2. **Add New → Project** → pilih repo `ai-training-web` → **Import**.
3. Framework Preset: **Other**. Build Command & Output Directory: **kosongkan**.
4. **Deploy** → selesai, dapat link `https://ai-training-web.vercel.app`.
5. Setiap `git push` berikutnya, Vercel otomatis update.

---

## Cara update konten

| Mau ubah | Caranya |
|---|---|
| Teks prompt / tambah prompt | Supabase → Table Editor → `prompts` → edit/insert. **Langsung tampil**, tanpa deploy ulang. |
| Judul / aktivitas sesi | Tabel `sessions` |
| Tambah file Word | Taruh file di folder `files/`, push ke GitHub, lalu tambah baris di tabel `files` (kolom `path` = `files/nama-file.docx`) dan hubungkan ke sesi di tabel `session_files`. |

## Lihat prompt yang paling sering di-copy

```sql
select s.no, s.title, p.label, p.copy_count
from prompts p join sessions s on s.id = p.session_id
order by p.copy_count desc limit 10;

select name, download_count from files order by download_count desc;
```

## Test di laptop sebelum deploy

```bash
cd ai-training-web
python -m http.server 8000
```
Buka http://localhost:8000

> Tombol **Copy** butuh HTTPS atau localhost. Di Vercel otomatis HTTPS, jadi aman.
