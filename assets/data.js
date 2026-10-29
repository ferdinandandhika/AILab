// Data cadangan (dipakai jika Supabase belum diatur)
window.FALLBACK_DATA = {
 "sessions": [
  {
   "no": "01",
   "title": "Pembukaan & Agenda",
   "time_range": "0:00 – 0:05",
   "duration": 5,
   "slides": "1–2",
   "activities": [
    "Sapa peserta & perkenalan singkat",
    "Pertanyaan pemantik: \"Berapa lama biasanya bikin satu surat resmi?\"",
    "Tampilkan 8 topik yang akan dibahas"
   ],
   "file_ids": [],
   "prompts": []
  },
  {
   "no": "02",
   "title": "Pengenalan AI untuk Pengolahan Kata",
   "time_range": "0:05 – 0:09",
   "duration": 4,
   "slides": "3",
   "activities": [
    "Bahas tantangan menulis: lama, berulang, kurang konsisten",
    "Jelaskan peran AI: asisten menulis, bukan pengganti",
    "Kalimat kunci: \"AI itu asisten, kita tetap editornya\""
   ],
   "file_ids": [],
   "prompts": [
    {
     "label": "Perkenalan AI",
     "prompt": "Jelaskan dalam 3 kalimat sederhana bagaimana AI bisa membantu staf administrasi menulis dokumen dan email."
    }
   ]
  },
  {
   "no": "03",
   "title": "Membuat Draf Dokumen",
   "time_range": "0:09 – 0:16",
   "duration": 7,
   "slides": "4",
   "activities": [
    "Demo prompt surat undangan rapat",
    "Revisi bertahap: \"lebih singkat\", \"tambahkan agenda 3 poin\"",
    "Ubah catatan rapat berantakan menjadi notulen formal"
   ],
   "file_ids": [
    "f2"
   ],
   "prompts": [
    {
     "label": "Draf surat",
     "prompt": "Buatkan surat undangan rapat koordinasi untuk seluruh kepala divisi, hari Senin pukul 10.00 di ruang meeting lt. 3. Bahasa formal, maksimal 150 kata."
    },
    {
     "label": "Revisi 1",
     "prompt": "Buat lebih singkat dan tambahkan agenda rapat sebanyak 3 poin."
    },
    {
     "label": "Draf dari catatan",
     "prompt": "Ubah catatan rapat berikut menjadi notulen formal dengan bagian: Informasi Rapat, Pembahasan, Keputusan, dan Tindak Lanjut."
    },
    {
     "label": "Draf memo",
     "prompt": "Buatkan memo internal tentang perubahan jam operasional kantor selama bulan Ramadan, ditujukan untuk seluruh karyawan, nada informatif dan ramah."
    }
   ]
  },
  {
   "no": "04",
   "title": "Meringkas & Memahami Dokumen",
   "time_range": "0:16 – 0:23",
   "duration": 7,
   "slides": "5",
   "activities": [
    "Buka dokumen kebijakan panjang",
    "Jalankan 3 prompt: ringkas, tanya isi, ambil action item",
    "Ingatkan: tetap cek angka & tanggal di dokumen asli"
   ],
   "file_ids": [
    "f1"
   ],
   "prompts": [
    {
     "label": "Ringkas",
     "prompt": "Ringkas dokumen ini menjadi 5 poin penting yang mudah dipahami karyawan baru."
    },
    {
     "label": "Tanya isi",
     "prompt": "Berapa hari maksimal karyawan boleh bekerja dari rumah dalam satu minggu, dan apa syaratnya?"
    },
    {
     "label": "Action item",
     "prompt": "Buat tabel action item dari dokumen ini dengan kolom: Tugas, PIC, Deadline."
    },
    {
     "label": "Ringkas untuk atasan",
     "prompt": "Buat ringkasan eksekutif dokumen ini maksimal 100 kata untuk direktur."
    }
   ]
  },
  {
   "no": "05",
   "title": "Menulis Ulang & Menyempurnakan Teks",
   "time_range": "0:23 – 0:29",
   "duration": 6,
   "slides": "6",
   "activities": [
    "Tempel kalimat \"Sebelum\" dari slide",
    "Ubah ke versi formal, santai, singkat, dan bahasa Inggris",
    "Tunjukkan isi tetap sama, hanya gaya yang berubah"
   ],
   "file_ids": [
    "f3"
   ],
   "prompts": [
    {
     "label": "Formal",
     "prompt": "Ubah kalimat berikut menjadi bahasa formal dan sopan untuk atasan."
    },
    {
     "label": "Santai",
     "prompt": "Buat versi santai untuk dikirim ke rekan kerja satu tim."
    },
    {
     "label": "Singkat",
     "prompt": "Singkatkan menjadi satu kalimat tanpa menghilangkan maksudnya."
    },
    {
     "label": "Perbaiki",
     "prompt": "Perbaiki tata bahasa dan ejaan pada paragraf berikut, lalu tandai bagian yang diubah."
    },
    {
     "label": "Terjemahan",
     "prompt": "Terjemahkan ke bahasa Inggris bisnis yang natural, bukan terjemahan kata per kata."
    }
   ]
  },
  {
   "no": "06",
   "title": "Merapikan Struktur Dokumen",
   "time_range": "0:29 – 0:34",
   "duration": 5,
   "slides": "7",
   "activities": [
    "Ubah teks pembagian tugas menjadi tabel",
    "Susun teks panjang tanpa judul menjadi berjudul & berpoin"
   ],
   "file_ids": [
    "f3"
   ],
   "prompts": [
    {
     "label": "Teks ke tabel",
     "prompt": "Ubah teks berikut menjadi tabel dengan kolom Nama, Tugas, dan Deadline, urutkan berdasarkan deadline."
    },
    {
     "label": "Poin-poin",
     "prompt": "Ubah paragraf ini menjadi daftar poin yang ringkas."
    },
    {
     "label": "Struktur",
     "prompt": "Susun ulang teks berikut dengan judul, subjudul, dan poin-poin agar mudah dibaca."
    }
   ]
  },
  {
   "no": "07",
   "title": "Menulis Email dengan Bantuan AI",
   "time_range": "0:34 – 0:42",
   "duration": 8,
   "slides": "8",
   "activities": [
    "Ringkas thread email panjang",
    "Draf balasan menolak meeting dengan sopan",
    "Cek nada & kejelasan draf email sebelum dikirim"
   ],
   "file_ids": [
    "f4"
   ],
   "prompts": [
    {
     "label": "Ringkas thread",
     "prompt": "Ringkas thread email ini: keputusan yang sudah diambil, pertanyaan yang belum terjawab, dan siapa harus melakukan apa."
    },
    {
     "label": "Balas menolak",
     "prompt": "Buatkan balasan email untuk menolak permintaan meeting hari Jumat dengan sopan, lalu tawarkan dua alternatif jadwal minggu depan."
    },
    {
     "label": "Follow-up",
     "prompt": "Buatkan email follow-up yang sopan kepada klien yang belum membalas penawaran kami selama satu minggu."
    },
    {
     "label": "Cek email",
     "prompt": "Periksa nada dan kejelasan email berikut. Beri saran perbaikan dan versi yang sudah diperbaiki."
    },
    {
     "label": "Email sulit",
     "prompt": "Balas email klien yang komplain soal keterlambatan pengiriman dengan nada empatik, minta maaf, dan berikan solusi."
    }
   ]
  },
  {
   "no": "08",
   "title": "Teknik Prompt",
   "time_range": "0:42 – 0:47",
   "duration": 5,
   "slides": "9–10",
   "activities": [
    "Jelaskan Rumus Prompt: Tujuan + Konteks + Sumber + Format",
    "Tampilkan prompt lemah, minta peserta memperbaiki",
    "Jalankan prompt lemah vs efektif untuk membandingkan hasil"
   ],
   "file_ids": [],
   "prompts": [
    {
     "label": "Lemah",
     "prompt": "Buat surat."
    },
    {
     "label": "Efektif",
     "prompt": "Buatkan surat permohonan cuti 3 hari untuk atasan, bahasa formal, maksimal 120 kata."
    },
    {
     "label": "Rumus lengkap",
     "prompt": "Buatkan surat penawaran untuk klien baru di bidang retail, berdasarkan daftar harga berikut, maksimal 200 kata dan sertakan tabel harga."
    }
   ]
  },
  {
   "no": "09",
   "title": "Tips & Trik + Etika AI",
   "time_range": "0:47 – 0:52",
   "duration": 5,
   "slides": "11–12",
   "activities": [
    "Demo 3 tips: beri peran, minta beberapa versi, minta AI bertanya",
    "Checklist validasi & hal yang harus dihindari"
   ],
   "file_ids": [],
   "prompts": [
    {
     "label": "Beri peran",
     "prompt": "Bertindaklah sebagai sekretaris direksi yang berpengalaman. Buatkan surat ucapan terima kasih kepada mitra atas kerja sama selama satu tahun."
    },
    {
     "label": "Beberapa versi",
     "prompt": "Berikan 3 versi pembuka email penawaran: formal, ramah, dan singkat."
    },
    {
     "label": "AI bertanya balik",
     "prompt": "Saya ingin membuat proposal kegiatan. Sebelum membuat draf, tanyakan dulu informasi apa saja yang kamu butuhkan."
    },
    {
     "label": "Contoh gaya",
     "prompt": "Berikut contoh surat kami sebelumnya. Buat surat baru dengan gaya bahasa dan struktur yang sama."
    }
   ]
  },
  {
   "no": "10",
   "title": "Latihan Peserta",
   "time_range": "0:52 – 0:57",
   "duration": 5,
   "slides": "13",
   "activities": [
    "Peserta memilih satu dari tiga tantangan",
    "1–2 peserta berbagi prompt dan hasilnya"
   ],
   "file_ids": [
    "f2",
    "f4"
   ],
   "prompts": [
    {
     "label": "Tantangan 1",
     "prompt": "Buat surat pemberitahuan libur kantor untuk seluruh karyawan, formal, maksimal 150 kata."
    },
    {
     "label": "Tantangan 2",
     "prompt": "Ringkas notulen rapat, lalu ubah action item menjadi tabel Nama, Tugas, Deadline."
    },
    {
     "label": "Tantangan 3",
     "prompt": "Balas email klien yang komplain soal keterlambatan, dengan nada empatik dan solusi."
    }
   ]
  },
  {
   "no": "11",
   "title": "Penutup & Q&A",
   "time_range": "0:57 – 1:00",
   "duration": 3,
   "slides": "14",
   "activities": [
    "Ulangi 3 poin kunci",
    "Sesi tanya jawab",
    "Ajak peserta mencoba 1 prompt di pekerjaan besok"
   ],
   "file_ids": [],
   "prompts": []
  }
 ],
 "files": [
  {
   "id": "f1",
   "name": "Dokumen Kebijakan Kerja Hybrid",
   "path": "files/01-dokumen-kebijakan-kerja-hybrid.docx",
   "description": "Untuk latihan meringkas & bertanya ke isi dokumen"
  },
  {
   "id": "f2",
   "name": "Catatan Rapat Mentah",
   "path": "files/02-catatan-rapat-mentah.docx",
   "description": "Untuk latihan membuat notulen formal"
  },
  {
   "id": "f3",
   "name": "Teks Latihan",
   "path": "files/03-teks-latihan.docx",
   "description": "Untuk latihan menulis ulang & merapikan struktur"
  },
  {
   "id": "f4",
   "name": "Thread Email Dummy",
   "path": "files/04-thread-email-dummy.docx",
   "description": "Untuk latihan meringkas & membalas email"
  },
  {
   "id": "f5",
   "name": "Kumpulan Prompt (Handout)",
   "path": "files/kumpulan-prompt-handout.docx",
   "description": "Semua prompt dalam satu dokumen"
  }
 ]
};
