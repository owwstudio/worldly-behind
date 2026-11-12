---
title: "Finora: Perjalanan Project"
description: "Kronologi Finora dari fondasi landing dan motion hingga dashboard keuangan, API Gemini, dan deployment VPS."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 3. Perjalanan kronologis

### 3.1 Brief, batas scope, dan pembacaan desain

Pengguna meminta pola kerja seperti Kindsight: rumuskan produk/flow, desain dahulu, implementasi bertahap, QC, integrasi backend yang diizinkan, kemudian deployment otomatis. Fitur fundraising Kindsight tidak boleh disalin.

Setelah itu scope dipertegas menjadi showcase/portofolio yang serius, tanpa overengineering. Referensi mencakup landing, dashboard desktop, UI elements, dan tiga frame mobile. Permintaan awal adalah melihat desain tanpa mengubah file.

### 3.2 Fondasi landing dan layout bertahap — awal November 2026

Urutan percakapan: font → navbar/footer → hero → section berikutnya → dua section terakhir. Link yang belum memiliki halaman diarahkan ke 404 atas keputusan pengguna. Inter Display dipastikan mengikuti desain; PP Editorial New diberikan melalui ZIP lokal.

Pengguna sempat meminta skala layout diperkecil, lalu mengoreksi gutter/container, dan akhirnya meminta layout dikembalikan seperti Figma. Keputusan akhir: ukuran desain dipertahankan; persoalan pengalaman scroll diselesaikan melalui interaksi.

Footer dibuat satu viewport pada kondisi yang didukung, dropdown dibuat smooth, dan tombol Subscribe mendapat gradient bergerak. Fokus/input dan pointer berulang kali direvisi mengikuti QC.

### 3.3 Storyboard dan motion landing — sekitar 3–6 November 2026

Arah awal reveal heading tidak memuaskan pengguna. Eksperimen yang dinilai terlalu dekoratif ditolak. Pengguna kemudian memberi storyboard serta background video blue fabric.

Storyboard berkembang menjadi:

1. Video background dan logo preloader.
2. Logo berputar dan morph menjadi bidang putih.
3. Bidang putih melebar fullscreen.
4. Dashboard terbentuk lewat DOM/SVG, bukan satu image yang tidak bisa dianimasikan per elemen.

Kontrol awal disepakati: intro otomatis, grafik/dashboard mengikuti scroll. Setelah QC, dashboard diubah menjadi reveal biasa; ekspansi hero memiliki pin yang dilepas setelah selesai agar tidak menyisakan perjalanan scroll ketika kembali dari footer.

Perbaikan penting: preloader muncul setiap refresh, menahan scroll agar tidak ter-skip, menghapus flash frame putih, memperlambat pembacaan logo, menjaga video tetap diam saat bidang putih melebar, dan menjaga navbar tetap berada dalam bidang putih.

Navbar akhirnya berada dalam normal document flow, tanpa sticky/fixed atau hide/show berdasarkan arah scroll. Reveal intro navbar tetap smooth; border bawah terisi kiri ke kanan.

Features memiliki loop spesifik pada ilustrasi bar dan pergantian rekomendasi budget. Tombol pause loop dihapus atas permintaan pengguna. Use Case memakai accordion chapter berbasis scroll, backdrop bergerak, dan tinggi area accordion dijaga konstan.

Transisi Features → Use Case mengikuti storyboard tiga card kosong yang menyatu lalu melebar menjadi surface Use Case. Surface Use Case selanjutnya melebar menjadi background testimonial; accordion kembali ke state netral sebelum morph menjadi quote card.

Arah testimonial sempat horizontal → vertikal → horizontal kembali. Keputusan terakhir menggunakan input scroll vertikal yang menggerakkan rail horizontal. Proxy accordion diserahkan ke quote pada geometri yang sama untuk menghindari dua wrapper putih terlihat bersamaan. Foto muncul setelah bidang quote tiba, dengan reveal yang dipercepat sesuai QC.

Pricing dipadatkan agar muat satu viewport desktop tanpa mengubah susunan utama. Pergantian billing akhirnya memakai loading wordmark “Finora”, dengan tiga card keluar selama loading. Tempo dipendekkan setelah QC; hover card mengikuti style desain, dan card tengah tidak lagi selalu berada pada state hover.

Landing kemudian dipause. Tidak semua ide motion footer atau revisi hero lanjutan telah diselesaikan.

### 3.4 Dashboard: layout dahulu, fungsi bertahap — sekitar 6–10 November 2026

Pengguna memprioritaskan seluruh layout tampil terlebih dahulu; QC detail dan animasi menyusul. Saat akses Figma perlu autentikasi ulang, pengguna meminta memakai hasil analisis sebelumnya. Akses desain dan kesesuaian detail kemudian ditinjau lagi.

Layout berkembang menjadi Overview, Analytics, Transactions, Goals, Settings, FAQs, Pricing, dan Messages. Angka/grafik mula-mula diminta sama dengan Figma sebelum fungsi diaktifkan.

Pekerjaan fungsi mencakup:

- Overview mengikuti ledger demo dan bulan terpilih.
- Transactions CRUD, Incoming/Outgoing sebagai filter dropdown, pencarian, kategori, tanggal, nominal, sort, pagination, dan CSV.
- Goals memiliki halaman sendiri, CRUD, dan Add savings.
- Settings memiliki My profile, Preferences, dan Demo workspace dengan isi masing-masing; tidak diam-diam mengembalikan semua tab ke profile.
- Reset demo dengan konfirmasi dan invalidation data terkait.
- FAQs dan Pricing dashboard dengan current plan/upgrade preview, bukan pembayaran aktif.
- Custom dropdown, pointer/hover, transisi antar menu, card/dialog/chat micro interactions.

Analytics beberapa kali direvisi: slider yang awalnya mengubah rentang bulan/posisi cursor diubah menjadi rentang hari dalam bulan yang dipilih. Spending by category harus memakai bulan yang sama. Grafik memiliki transisi out ke baseline lalu masuk dari bawah, tanpa mengganti ukuran layout.

Global search berubah dari popup/sidebar menu search menjadi input langsung dengan hasil lintas dashboard, highlight ungu, dan tujuan spesifik.

### 3.5 Publikasi dan API Gemini — sekitar 9–11 November 2026

Finora dipublikasikan melalui GitHub dan VPS pengguna dengan domain khusus. DNS diarahkan hanya untuk Finora; aplikasi lain tidak boleh terganggu.

Deployment awal hanya frontend. Ketika chat Gemini dan rekomendasi Financial Score ditambahkan, pipeline diperluas untuk bundle API, dedicated Node runtime, dedicated service, dan scoped Nginx proxy.

Aktivasi sempat tertahan izin direktori penanda API; izin parent khusus Finora diperbaiki tanpa membuka file environment. Rilis berikutnya aktif tetapi pipeline gagal pada retensi karena `.user.ini` yang dilindungi aaPanel. Solusinya mempertahankan directory terlindungi dan melaporkan warning, bukan melemahkan proteksi panel.

Frontend/API akhirnya memakai commit yang sama dan health check berhasil. Kindsight/Papersky tetap merespons HTTPS 200 pada pemeriksaan rilis.

### 3.6 Upgrade Overview dan Messages — 12 November 2026

Goals Progress: persentase, arc ungu, marker, dan nominal mengikuti selected goal. Arc hitam menjadi pembanding goal lain. Animasi 750 ms menyinkronkan perubahan tanpa mengubah dimensi kartu. Seed goal semuanya 88%; perpindahan di antara seed itu memang tidak mengubah panjang arc sampai data diubah.

Financial Performance: ilustrasi 74% diganti net savings rate `(income − expenses) / income × 100`, badge memakai percentage points terhadap bulan sebelumnya, dan dialog menjelaskan cash flow. Tanpa income, rate tidak dipalsukan menjadi nol.

Monthly Expenses: bar mengikuti share tiap kategori, nominal dan bar bertransisi bersama, tooltip menampilkan nominal/share, dan link membuka Transactions dengan month/type/category yang benar.

Goals: status In progress/Completed/Overdue, deadline inclusive, sisa waktu, filter All/Active/Completed di URL, serta feedback saat target tercapai. Active mencakup overdue. Shared dialog juga dipakai Overview.

Messages: konteks deadline/today, optional comparison bulan sebelumnya, kartu perbandingan deterministik, unfinished goal filtering, draft persistence, stale notice, dan batching streaming per frame. Gemini hanya membaca/menjelaskan data; tidak mengeksekusi transaksi atau mutasi Goals.

Rilis terakhir yang dikonfirmasi dalam percakapan: `e9f4a529813d21a2f091e17a2a631684084c9826`. GitHub Actions verify/deploy sukses; public frontend/API health menunjukkan commit yang sama. Dokumen ini dibuat setelah rilis tersebut dan belum otomatis termasuk artifact rilis itu.

