---
title: Mulai di Sini
description: Jalankan Worldly Behind secara lokal dan tambahkan halaman dokumentasi pertama.
sidebar:
  label: Ringkasan
  order: 0
---

## Setup lokal

Gunakan Node.js 22.12.0 atau lebih baru dan npm 9.6.5 atau lebih baru.
Jalankan dari root project:

```sh
npm ci
npm run dev
```

Dev server berjalan di background, biasanya pada `http://localhost:4321`.
Gunakan `npm run dev:status` untuk melihat alamatnya, `npm run dev:logs` untuk
membaca log, dan `npm run dev:stop` untuk menghentikannya.

## Tambahkan dokumentasi

1. Pilih kategori yang sesuai dengan topik.
2. Salin file Markdown dari folder `templates/` di root ke
   `src/content/docs/<kategori>/<nama-halaman>.md`. Untuk dokumentasi project,
   kumpulkan halaman dalam subfolder project, seperti `pug/verity/`.
3. Ganti semua placeholder, tulis deskripsi yang jelas, dan hapus `draft: true`
   saat halaman siap dipublikasikan.
4. Tinjau halaman beserta tautannya, lalu jalankan pemeriksaan di bawah.
5. Buat pull request yang menjelaskan perubahan dan hasil pemeriksaan.

Sidebar otomatis menampilkan halaman yang dipublikasikan pada setiap kategori.
Atur `sidebar.order` di frontmatter jika urutan baca perlu ditentukan.

## Periksa perubahan

Hentikan dev server dengan `npm run dev:stop` sebelum menjalankan build agar
kedua proses tidak menulis cache yang sama secara bersamaan.

```sh
npm run check
npm run build
```

Type-check memeriksa kode project. Build memvalidasi frontmatter dokumentasi
serta menghasilkan website statis dan indeks pencarian dalam `dist/`.
Jalankan kembali `npm run dev` jika ingin melanjutkan preview di dev server.

Lihat [contoh panduan](/getting-started/sample-guide/) untuk langkah lengkap dan
[Dasar-Dasar](/fundamentals/) untuk pedoman project.
