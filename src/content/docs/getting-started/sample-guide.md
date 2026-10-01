---
title: "Contoh panduan: Tambahkan halaman dokumentasi"
description: Contoh panduan untuk menunjukkan alur kontribusi dokumentasi tim.
sidebar:
  order: 1
  badge: Contoh
---

> **Contoh panduan.** Halaman ini menunjukkan format panduan dengan halaman
> sementara. Contoh ini bukan catatan project tim yang telah selesai.

## Tujuan

Buat halaman Markdown yang muncul dalam kategori Workflow, lalu pastikan
website berhasil dibangun.

## Prasyarat

- Repository sudah diinstal secara lokal menggunakan `npm ci`.
- Branch kerja untuk perubahan dokumentasi sudah tersedia.
- Topik dan cara memeriksa instruksinya sudah ditentukan.

## Langkah

### 1. Salin template panduan

Jalankan dari root repository:

```sh
cp templates/guide.md src/content/docs/workflows/my-first-guide.md
```

### 2. Tulis halaman

Ganti judul, deskripsi, dan placeholder di dalam kurung siku. Tuliskan tujuan,
prasyarat, langkah, hasil yang diharapkan, serta pemecahan masalah. Hapus
`draft: true` saat halaman siap ditampilkan.

### 3. Tinjau hasil

```sh
npm run dev
```

Buka alamat dari `npm run dev:status`, masuk ke kategori Workflow, lalu pilih
halaman baru. Periksa heading, code block, dan tautannya.

### 4. Periksa dan ajukan review

Hentikan dev server dengan `npm run dev:stop` sebelum build.

```sh
npm run check
npm run build
```

Buat pull request dengan tujuan halaman dan hasil pemeriksaan. Hentikan
background server dengan `npm run dev:stop` saat selesai.

## Hasil yang diharapkan

Halaman muncul di kategori Workflow dan alamat `/workflows/my-first-guide/`.
Pemeriksaan lulus, dan production build memasukkan halaman ke indeks pencarian Starlight.

## Pemecahan masalah

- **Halaman tidak muncul:** pastikan file berada di `src/content/docs/workflows/`,
  berakhiran `.md`, dan tidak lagi memiliki `draft: true`.
- **Build gagal:** baca file dan error yang dilaporkan; periksa indentasi
  frontmatter serta field wajib `title` sebelum mencoba lagi.

## Bersihkan contoh

Jika panduan ini hanya diikuti untuk mencoba workflow, hapus
`src/content/docs/workflows/my-first-guide.md` sebelum membuat pull request.
