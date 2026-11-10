---
title: "Kindsight: Perjalanan Project"
description: "Perjalanan Kindsight dari migrasi React, API dan MySQL hingga motion, deployment VPS, serta insiden API."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> **Catatan sumber:** `docs/project-summary-handoff-id.md`, dirangkum 10 November 2026. Status MVP, pengujian, deployment, dan insiden merupakan catatan historis, bukan pemeriksaan live terbaru.

## 2. Perjalanan Project Secara Kronologis

Tanggal awal project dan setiap tahap desain tidak seluruhnya tersedia. Urutan berikut mengikuti percakapan dan catatan implementasi.

### 2.1 Arah produk

Disepakati software fundraising organisasi dengan pemisahan publik, portal, dan admin. Flow donasi/payment ditunda; CTA publik berorientasi pemasaran dan permintaan demo.

### 2.2 Migrasi React SPA

Frontend dipindahkan ke React + Vite + TypeScript. Pekerjaan dilakukan bertahap dengan QC pengguna. Section landing: Navbar, Footer, Hero, Partners, Difference, About, Solutions, Testimonials, Missions, dan Sectors.

Seluruh section landing diterima pengguna. Kontrol preview/QC dan catatan migrasi dihapus dari halaman publik; `/foundation` tetap utilitas terpisah.

### 2.3 API dan MySQL

Setelah fase backend diizinkan, service dihubungkan ke REST API/MySQL: autentikasi, dashboard, CRUD fundraising, sepuluh section CMS, upload logo, permintaan demo, organisasi, dan akun.

Data contoh tidak dipakai sebagai fallback diam-diam ketika API gagal.

### 2.4 Role dan organisasi

Role dasar `organization_user` dan `platform_admin`. Data fundraising lama ditempatkan pada Kindsight Showcase; ID/password lama dipertahankan melalui migrasi tambahan. Portal memakai `/app/*`, admin internal `/admin/*`.

### 2.5 Motion landing

Revisi mencakup intro logo orange aperture, scroll reveal, smooth accordion Difference, overlap antar section, carousel Testimonials, Missions, Sectors, state active kartu, angka Total Donation/progress bar, dan Footer overlap/fullscreen pada viewport yang muat.

Reduced motion, direct anchor, cleanup animation, dan fallback mobile dipertahankan.

### 2.6 Dashboard dan CMS

Custom dropdown dan sliding active pill diterapkan pada portal, admin, dan tab CMS. Hover line dihapus sesuai revisi. Animasi Total Raised/grafik saat refresh dan Daily–Monthly dicoba; pengguna belum cocok dan meminta eksperimen dashboard di-pause.

### 2.7 Percobaan Vercel

Frontend pernah dihubungkan ke https://kindsight-blond.vercel.app/. Pengguna melaporkan section tidak ter-load. Deployment kemudian beralih ke VPS untuk frontend, API, dan database. Status deployment Vercel terbaru belum diverifikasi.

### 2.8 Deployment awal VPS — 26 Oktober 2026

Paket di-upload dan diextract ke `/www/wwwroot/kindsight`. Frontend dilayani dari `dist`; backend dibuat sebagai Node.js Project.

Tahap ini mencakup environment, import database, startup API, DNS subdomain, SSL, Nginx routing/proxy, serta login admin dan perubahan CMS live.

### 2.9 Automatic deployment

Dibuat alur GitHub Actions: **test → build → audit → package → transfer → staging → preflight → activation → health check**.

Scope dibatasi ke Kindsight karena server menjalankan aplikasi lain. Masalah yang ditemukan:

1. Audit dependency memblokir deployment.
2. Cache npm global aaPanel tidak dapat ditulis oleh `www`.
3. Instalasi awal tidak memiliki `package-lock.json`.
4. Helper diperbaiki dan dipasang ulang pengguna melalui root Terminal aaPanel.

Saat kegagalan aktivasi lockfile, rollback otomatis benar-benar memulihkan versi sebelumnya. Setelah revisi helper, deployment manual dan pemicu push `main` berhasil.

### 2.10 Feedback CMS

Tombol Save and publish mendapat spinner pending, tombol sukses, dan toast nama section setelah API sukses. Live diuji dengan menyimpan ulang Navbar tanpa mengubah copy; respons publik tetap sama, revisi penyimpanan berubah.

### 2.11 Favicon

`src/assets/brand/favicon.png` dipasang, di-push ke `main`, dan ter-deploy otomatis. File live dicocokkan dengan export brand.

### 2.12 Pause MVP

Pengguna menyatakan MVP selesai dan berpindah ke project lain. Pengembangan berikutnya di-pause.

### 2.13 Insiden section hilang — 9 November 2026

Frontend tetap terbuka, tetapi API loopback `3101` berhenti. Endpoint publik mengembalikan `502`, PID file tidak tersedia, dan tidak ada incomplete activation journal. Uptime server sekitar 109 hari: tidak ada bukti reboot baru.

Pengguna menyalakan `kindsight_api` melalui aaPanel. Setelah itu health/readiness, database, dan sepuluh endpoint konten kembali normal; section kembali tersedia di browser.

Penyebab proses berhenti belum terkonfirmasi. Pengguna menghentikan investigasi dan meminta asumsi bahwa admin lain menghentikan proses. Asumsi tersebut bukan bukti teknis. Tidak ada deployment kode baru yang tercatat untuk pemulihan insiden ini.

