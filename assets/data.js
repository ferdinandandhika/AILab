// Data cadangan (dipakai jika Supabase belum diatur)
window.FALLBACK_DATA = {
  files: [
    { id: "f1", name: "Dokumen Kebijakan Kerja Hybrid", path: "files/01-dokumen-kebijakan-kerja-hybrid.docx", description: "Untuk latihan meringkas & bertanya ke isi dokumen" },
    { id: "f2", name: "Catatan Rapat Mentah", path: "files/02-catatan-rapat-mentah.docx", description: "Untuk latihan membuat notulen formal" },
    { id: "f3", name: "Teks Latihan", path: "files/03-teks-latihan.docx", description: "Untuk latihan menulis ulang & merapikan struktur" },
    { id: "f4", name: "Thread Email Dummy", path: "files/04-thread-email-dummy.docx", description: "Untuk latihan meringkas & membalas email" },
    { id: "f5", name: "Kumpulan Prompt (Handout)", path: "files/kumpulan-prompt-handout.docx", description: "Semua prompt dalam satu dokumen" }
  ],
  sessions: [
    {
      no: "01", title: "Pengenalan AI untuk Pengolahan Kata",
      description: "Kenali bagaimana AI membantu pekerjaan menulis sehari-hari, dari dokumen sampai email.",
      file_ids: [],
      prompts: [
        { label: "Kenalan dengan AI", prompt: "Jelaskan dalam 3 kalimat sederhana bagaimana AI bisa membantu staf administrasi menulis dokumen dan email." }
      ]
    },
    {
      no: "02", title: "Membuat Draf Dokumen",
      description: "Buat surat, memo, dan notulen dalam hitungan detik, lalu perbaiki hasilnya secara bertahap.",
      file_ids: ["f2"],
      prompts: [
        { label: "Draf Surat", prompt: "Buatkan surat undangan rapat koordinasi untuk seluruh kepala divisi, hari Senin pukul 10.00 di ruang meeting lt. 3. Bahasa formal, maksimal 150 kata." },
        { label: "Revisi Draf", prompt: "Buat lebih singkat dan tambahkan agenda rapat sebanyak 3 poin." },
        { label: "Notulen dari Catatan", prompt: "Ubah catatan rapat berikut menjadi notulen formal dengan bagian: Informasi Rapat, Pembahasan, Keputusan, dan Tindak Lanjut." },
        { label: "Draf Memo", prompt: "Buatkan memo internal tentang perubahan jam operasional kantor selama bulan Ramadan, ditujukan untuk seluruh karyawan, nada informatif dan ramah." }
      ]
    },
    {
      no: "03", title: "Meringkas & Memahami Dokumen",
      description: "Pahami dokumen panjang dengan cepat: ringkas, tanya isinya, dan ambil daftar tugasnya.",
      file_ids: ["f1"],
      prompts: [
        { label: "Ringkas", prompt: "Ringkas dokumen ini menjadi 5 poin penting yang mudah dipahami karyawan baru." },
        { label: "Tanya Isi Dokumen", prompt: "Berapa hari maksimal karyawan boleh bekerja dari rumah dalam satu minggu, dan apa syaratnya?" },
        { label: "Daftar Tugas", prompt: "Buat tabel action item dari dokumen ini dengan kolom: Tugas, PIC, Deadline." },
        { label: "Ringkasan untuk Atasan", prompt: "Buat ringkasan eksekutif dokumen ini maksimal 100 kata untuk direktur." }
      ]
    },
    {
      no: "04", title: "Menulis Ulang & Menyempurnakan Teks",
      description: "Ubah gaya bahasa, perbaiki kalimat, dan terjemahkan tanpa mengubah maksud tulisan.",
      file_ids: ["f3"],
      prompts: [
        { label: "Jadi Formal", prompt: "Ubah kalimat berikut menjadi bahasa formal dan sopan untuk atasan." },
        { label: "Jadi Santai", prompt: "Buat versi santai untuk dikirim ke rekan kerja satu tim." },
        { label: "Persingkat", prompt: "Singkatkan menjadi satu kalimat tanpa menghilangkan maksudnya." },
        { label: "Perbaiki Tata Bahasa", prompt: "Perbaiki tata bahasa dan ejaan pada paragraf berikut, lalu tandai bagian yang diubah." },
        { label: "Terjemahkan", prompt: "Terjemahkan ke bahasa Inggris bisnis yang natural, bukan terjemahan kata per kata." }
      ]
    },
    {
      no: "05", title: "Merapikan Struktur Dokumen",
      description: "Ubah teks yang berantakan menjadi tabel, poin-poin, atau dokumen berjudul yang rapi.",
      file_ids: ["f3"],
      prompts: [
        { label: "Teks ke Tabel", prompt: "Ubah teks berikut menjadi tabel dengan kolom Nama, Tugas, dan Deadline, urutkan berdasarkan deadline." },
        { label: "Jadi Poin-poin", prompt: "Ubah paragraf ini menjadi daftar poin yang ringkas." },
        { label: "Rapikan Struktur", prompt: "Susun ulang teks berikut dengan judul, subjudul, dan poin-poin agar mudah dibaca." }
      ]
    },
    {
      no: "06", title: "Menulis Email dengan Bantuan AI",
      description: "Ringkas thread panjang, buat balasan dengan nada yang tepat, dan cek email sebelum dikirim.",
      file_ids: ["f4"],
      prompts: [
        { label: "Ringkas Thread", prompt: "Ringkas thread email ini: keputusan yang sudah diambil, pertanyaan yang belum terjawab, dan siapa harus melakukan apa." },
        { label: "Menolak dengan Sopan", prompt: "Buatkan balasan email untuk menolak permintaan meeting hari Jumat dengan sopan, lalu tawarkan dua alternatif jadwal minggu depan." },
        { label: "Follow-up", prompt: "Buatkan email follow-up yang sopan kepada klien yang belum membalas penawaran kami selama satu minggu." },
        { label: "Cek Email", prompt: "Periksa nada dan kejelasan email berikut. Beri saran perbaikan dan versi yang sudah diperbaiki." },
        { label: "Balas Komplain", prompt: "Balas email klien yang komplain soal keterlambatan pengiriman dengan nada empatik, minta maaf, dan berikan solusi." }
      ]
    },
    {
      no: "07", title: "Teknik Prompt",
      description: "Gunakan Rumus Prompt (Tujuan + Konteks + Sumber + Format) agar hasil AI tepat sasaran.",
      file_ids: [],
      prompts: [
        { label: "Contoh Prompt Efektif", prompt: "Buatkan surat permohonan cuti 3 hari untuk atasan, bahasa formal, maksimal 120 kata." },
        { label: "Contoh Rumus Lengkap", prompt: "Buatkan surat penawaran untuk klien baru di bidang retail, berdasarkan daftar harga berikut, maksimal 200 kata dan sertakan tabel harga." }
      ]
    },
    {
      no: "08", title: "Tips & Trik AI",
      description: "Kebiasaan kecil yang membuat hasil AI jauh lebih baik.",
      file_ids: [],
      prompts: [
        { label: "Beri Peran", prompt: "Bertindaklah sebagai sekretaris direksi yang berpengalaman. Buatkan surat ucapan terima kasih kepada mitra atas kerja sama selama satu tahun." },
        { label: "Minta Beberapa Versi", prompt: "Berikan 3 versi pembuka email penawaran: formal, ramah, dan singkat." },
        { label: "Minta AI Bertanya Dulu", prompt: "Saya ingin membuat proposal kegiatan. Sebelum membuat draf, tanyakan dulu informasi apa saja yang kamu butuhkan." },
        { label: "Ikuti Contoh Gaya", prompt: "Berikut contoh surat kami sebelumnya. Buat surat baru dengan gaya bahasa dan struktur yang sama." }
      ]
    },
    {
      no: "09", title: "Latihan Mandiri",
      description: "Pilih satu tantangan, coba sendiri, lalu bandingkan hasilnya dengan teman.",
      file_ids: ["f2", "f4"],
      prompts: [
        { label: "Tantangan 1 – Surat Resmi", prompt: "Buat surat pemberitahuan libur kantor untuk seluruh karyawan, formal, maksimal 150 kata." },
        { label: "Tantangan 2 – Ringkas & Tabel", prompt: "Ringkas catatan rapat berikut, lalu ubah action item menjadi tabel Nama, Tugas, Deadline." },
        { label: "Tantangan 3 – Email Sulit", prompt: "Balas email klien yang komplain soal keterlambatan, dengan nada empatik dan solusi." }
      ]
    }
  ]
};
