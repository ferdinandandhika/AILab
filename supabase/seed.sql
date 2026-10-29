-- Seed data training: Pengolahan Kata Berbasis AI
truncate prompts, session_files, sessions, files restart identity cascade;

insert into files (code,name,path,description) values ('f1','Dokumen Kebijakan Kerja Hybrid','files/01-dokumen-kebijakan-kerja-hybrid.docx','Untuk latihan meringkas & bertanya ke isi dokumen');
insert into files (code,name,path,description) values ('f2','Catatan Rapat Mentah','files/02-catatan-rapat-mentah.docx','Untuk latihan membuat notulen formal');
insert into files (code,name,path,description) values ('f3','Teks Latihan','files/03-teks-latihan.docx','Untuk latihan menulis ulang & merapikan struktur');
insert into files (code,name,path,description) values ('f4','Thread Email Dummy','files/04-thread-email-dummy.docx','Untuk latihan meringkas & membalas email');
insert into files (code,name,path,description) values ('f5','Kumpulan Prompt (Handout)','files/kumpulan-prompt-handout.docx','Semua prompt dalam satu dokumen');

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('01','Pembukaan & Agenda','0:00 – 0:05',5,'1–2',ARRAY['Sapa peserta & perkenalan singkat','Pertanyaan pemantik: "Berapa lama biasanya bikin satu surat resmi?"','Tampilkan 8 topik yang akan dibahas']::text[],1);

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('02','Pengenalan AI untuk Pengolahan Kata','0:05 – 0:09',4,'3',ARRAY['Bahas tantangan menulis: lama, berulang, kurang konsisten','Jelaskan peran AI: asisten menulis, bukan pengganti','Kalimat kunci: "AI itu asisten, kita tetap editornya"']::text[],2);
insert into prompts (session_id,label,prompt,sort) select id,'Perkenalan AI','Jelaskan dalam 3 kalimat sederhana bagaimana AI bisa membantu staf administrasi menulis dokumen dan email.',1 from sessions where no='02';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('03','Membuat Draf Dokumen','0:09 – 0:16',7,'4',ARRAY['Demo prompt surat undangan rapat','Revisi bertahap: "lebih singkat", "tambahkan agenda 3 poin"','Ubah catatan rapat berantakan menjadi notulen formal']::text[],3);
insert into prompts (session_id,label,prompt,sort) select id,'Draf surat','Buatkan surat undangan rapat koordinasi untuk seluruh kepala divisi, hari Senin pukul 10.00 di ruang meeting lt. 3. Bahasa formal, maksimal 150 kata.',1 from sessions where no='03';
insert into prompts (session_id,label,prompt,sort) select id,'Revisi 1','Buat lebih singkat dan tambahkan agenda rapat sebanyak 3 poin.',2 from sessions where no='03';
insert into prompts (session_id,label,prompt,sort) select id,'Draf dari catatan','Ubah catatan rapat berikut menjadi notulen formal dengan bagian: Informasi Rapat, Pembahasan, Keputusan, dan Tindak Lanjut.',3 from sessions where no='03';
insert into prompts (session_id,label,prompt,sort) select id,'Draf memo','Buatkan memo internal tentang perubahan jam operasional kantor selama bulan Ramadan, ditujukan untuk seluruh karyawan, nada informatif dan ramah.',4 from sessions where no='03';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='03' and f.code='f2';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('04','Meringkas & Memahami Dokumen','0:16 – 0:23',7,'5',ARRAY['Buka dokumen kebijakan panjang','Jalankan 3 prompt: ringkas, tanya isi, ambil action item','Ingatkan: tetap cek angka & tanggal di dokumen asli']::text[],4);
insert into prompts (session_id,label,prompt,sort) select id,'Ringkas','Ringkas dokumen ini menjadi 5 poin penting yang mudah dipahami karyawan baru.',1 from sessions where no='04';
insert into prompts (session_id,label,prompt,sort) select id,'Tanya isi','Berapa hari maksimal karyawan boleh bekerja dari rumah dalam satu minggu, dan apa syaratnya?',2 from sessions where no='04';
insert into prompts (session_id,label,prompt,sort) select id,'Action item','Buat tabel action item dari dokumen ini dengan kolom: Tugas, PIC, Deadline.',3 from sessions where no='04';
insert into prompts (session_id,label,prompt,sort) select id,'Ringkas untuk atasan','Buat ringkasan eksekutif dokumen ini maksimal 100 kata untuk direktur.',4 from sessions where no='04';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='04' and f.code='f1';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('05','Menulis Ulang & Menyempurnakan Teks','0:23 – 0:29',6,'6',ARRAY['Tempel kalimat "Sebelum" dari slide','Ubah ke versi formal, santai, singkat, dan bahasa Inggris','Tunjukkan isi tetap sama, hanya gaya yang berubah']::text[],5);
insert into prompts (session_id,label,prompt,sort) select id,'Formal','Ubah kalimat berikut menjadi bahasa formal dan sopan untuk atasan.',1 from sessions where no='05';
insert into prompts (session_id,label,prompt,sort) select id,'Santai','Buat versi santai untuk dikirim ke rekan kerja satu tim.',2 from sessions where no='05';
insert into prompts (session_id,label,prompt,sort) select id,'Singkat','Singkatkan menjadi satu kalimat tanpa menghilangkan maksudnya.',3 from sessions where no='05';
insert into prompts (session_id,label,prompt,sort) select id,'Perbaiki','Perbaiki tata bahasa dan ejaan pada paragraf berikut, lalu tandai bagian yang diubah.',4 from sessions where no='05';
insert into prompts (session_id,label,prompt,sort) select id,'Terjemahan','Terjemahkan ke bahasa Inggris bisnis yang natural, bukan terjemahan kata per kata.',5 from sessions where no='05';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='05' and f.code='f3';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('06','Merapikan Struktur Dokumen','0:29 – 0:34',5,'7',ARRAY['Ubah teks pembagian tugas menjadi tabel','Susun teks panjang tanpa judul menjadi berjudul & berpoin']::text[],6);
insert into prompts (session_id,label,prompt,sort) select id,'Teks ke tabel','Ubah teks berikut menjadi tabel dengan kolom Nama, Tugas, dan Deadline, urutkan berdasarkan deadline.',1 from sessions where no='06';
insert into prompts (session_id,label,prompt,sort) select id,'Poin-poin','Ubah paragraf ini menjadi daftar poin yang ringkas.',2 from sessions where no='06';
insert into prompts (session_id,label,prompt,sort) select id,'Struktur','Susun ulang teks berikut dengan judul, subjudul, dan poin-poin agar mudah dibaca.',3 from sessions where no='06';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='06' and f.code='f3';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('07','Menulis Email dengan Bantuan AI','0:34 – 0:42',8,'8',ARRAY['Ringkas thread email panjang','Draf balasan menolak meeting dengan sopan','Cek nada & kejelasan draf email sebelum dikirim']::text[],7);
insert into prompts (session_id,label,prompt,sort) select id,'Ringkas thread','Ringkas thread email ini: keputusan yang sudah diambil, pertanyaan yang belum terjawab, dan siapa harus melakukan apa.',1 from sessions where no='07';
insert into prompts (session_id,label,prompt,sort) select id,'Balas menolak','Buatkan balasan email untuk menolak permintaan meeting hari Jumat dengan sopan, lalu tawarkan dua alternatif jadwal minggu depan.',2 from sessions where no='07';
insert into prompts (session_id,label,prompt,sort) select id,'Follow-up','Buatkan email follow-up yang sopan kepada klien yang belum membalas penawaran kami selama satu minggu.',3 from sessions where no='07';
insert into prompts (session_id,label,prompt,sort) select id,'Cek email','Periksa nada dan kejelasan email berikut. Beri saran perbaikan dan versi yang sudah diperbaiki.',4 from sessions where no='07';
insert into prompts (session_id,label,prompt,sort) select id,'Email sulit','Balas email klien yang komplain soal keterlambatan pengiriman dengan nada empatik, minta maaf, dan berikan solusi.',5 from sessions where no='07';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='07' and f.code='f4';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('08','Teknik Prompt','0:42 – 0:47',5,'9–10',ARRAY['Jelaskan Rumus Prompt: Tujuan + Konteks + Sumber + Format','Tampilkan prompt lemah, minta peserta memperbaiki','Jalankan prompt lemah vs efektif untuk membandingkan hasil']::text[],8);
insert into prompts (session_id,label,prompt,sort) select id,'Lemah','Buat surat.',1 from sessions where no='08';
insert into prompts (session_id,label,prompt,sort) select id,'Efektif','Buatkan surat permohonan cuti 3 hari untuk atasan, bahasa formal, maksimal 120 kata.',2 from sessions where no='08';
insert into prompts (session_id,label,prompt,sort) select id,'Rumus lengkap','Buatkan surat penawaran untuk klien baru di bidang retail, berdasarkan daftar harga berikut, maksimal 200 kata dan sertakan tabel harga.',3 from sessions where no='08';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('09','Tips & Trik + Etika AI','0:47 – 0:52',5,'11–12',ARRAY['Demo 3 tips: beri peran, minta beberapa versi, minta AI bertanya','Checklist validasi & hal yang harus dihindari']::text[],9);
insert into prompts (session_id,label,prompt,sort) select id,'Beri peran','Bertindaklah sebagai sekretaris direksi yang berpengalaman. Buatkan surat ucapan terima kasih kepada mitra atas kerja sama selama satu tahun.',1 from sessions where no='09';
insert into prompts (session_id,label,prompt,sort) select id,'Beberapa versi','Berikan 3 versi pembuka email penawaran: formal, ramah, dan singkat.',2 from sessions where no='09';
insert into prompts (session_id,label,prompt,sort) select id,'AI bertanya balik','Saya ingin membuat proposal kegiatan. Sebelum membuat draf, tanyakan dulu informasi apa saja yang kamu butuhkan.',3 from sessions where no='09';
insert into prompts (session_id,label,prompt,sort) select id,'Contoh gaya','Berikut contoh surat kami sebelumnya. Buat surat baru dengan gaya bahasa dan struktur yang sama.',4 from sessions where no='09';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('10','Latihan Peserta','0:52 – 0:57',5,'13',ARRAY['Peserta memilih satu dari tiga tantangan','1–2 peserta berbagi prompt dan hasilnya']::text[],10);
insert into prompts (session_id,label,prompt,sort) select id,'Tantangan 1','Buat surat pemberitahuan libur kantor untuk seluruh karyawan, formal, maksimal 150 kata.',1 from sessions where no='10';
insert into prompts (session_id,label,prompt,sort) select id,'Tantangan 2','Ringkas notulen rapat, lalu ubah action item menjadi tabel Nama, Tugas, Deadline.',2 from sessions where no='10';
insert into prompts (session_id,label,prompt,sort) select id,'Tantangan 3','Balas email klien yang komplain soal keterlambatan, dengan nada empatik dan solusi.',3 from sessions where no='10';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='10' and f.code='f2';
insert into session_files (session_id,file_id) select s.id,f.id from sessions s, files f where s.no='10' and f.code='f4';

insert into sessions (no,title,time_range,duration,slides,activities,sort) values ('11','Penutup & Q&A','0:57 – 1:00',3,'14',ARRAY['Ulangi 3 poin kunci','Sesi tanya jawab','Ajak peserta mencoba 1 prompt di pekerjaan besok']::text[],11);
