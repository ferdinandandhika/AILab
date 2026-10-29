-- =========================================================
-- Schema: Web Training "Pengolahan Kata Berbasis AI"
-- Jalankan di Supabase > SQL Editor (sekali saja)
-- =========================================================

create table if not exists sessions (
  id          bigint generated always as identity primary key,
  no          text not null unique,
  title       text not null,
  time_range  text,
  duration    int,
  slides      text,
  activities  text[] default '{}',
  sort        int default 0,
  created_at  timestamptz default now()
);

create table if not exists prompts (
  id          bigint generated always as identity primary key,
  session_id  bigint references sessions(id) on delete cascade,
  label       text not null,
  prompt      text not null,
  sort        int default 0,
  copy_count  int default 0,
  created_at  timestamptz default now()
);

create table if not exists files (
  id          bigint generated always as identity primary key,
  code        text unique,
  name        text not null,
  path        text not null,      -- path di folder /files (Vercel) atau URL Supabase Storage
  description text,
  download_count int default 0
);

create table if not exists session_files (
  session_id bigint references sessions(id) on delete cascade,
  file_id    bigint references files(id) on delete cascade,
  primary key (session_id, file_id)
);

-- ---------- Row Level Security: publik hanya boleh BACA ----------
alter table sessions      enable row level security;
alter table prompts       enable row level security;
alter table files         enable row level security;
alter table session_files enable row level security;

drop policy if exists "public read" on sessions;
drop policy if exists "public read" on prompts;
drop policy if exists "public read" on files;
drop policy if exists "public read" on session_files;
create policy "public read" on sessions      for select using (true);
create policy "public read" on prompts       for select using (true);
create policy "public read" on files         for select using (true);
create policy "public read" on session_files for select using (true);

-- ---------- Fungsi hitung klik copy & download (aman, tanpa akses tulis langsung) ----------
create or replace function increment_copy(p_id bigint)
returns void language sql security definer set search_path = public as $$
  update prompts set copy_count = copy_count + 1 where id = p_id;
$$;

create or replace function increment_download(f_id bigint)
returns void language sql security definer set search_path = public as $$
  update files set download_count = download_count + 1 where id = f_id;
$$;

grant execute on function increment_copy(bigint)     to anon;
grant execute on function increment_download(bigint) to anon;
