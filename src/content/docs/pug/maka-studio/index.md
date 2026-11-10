---
title: "MAKA Studio"
description: "Ringkasan landing page creative agency MAKA Studio: desain Figma, HTML, CSS BEM, vanilla JavaScript, Vite, GSAP, Lenis, dan handoff tim."
sidebar:
  label: "Ringkasan"
  order: 0
---

Tanggal penyusunan: **10 November 2026**, zona waktu Asia/Jakarta.

## 1. Ruang lingkup dan sumber dokumentasi

Dokumen ini merangkum percakapan project **MAKA Studio** dan mencocokkannya dengan source di workspace. Ini bukan transkrip lengkap semua percakapan. Sebagian konteks awal hanya tersedia sebagai ringkasan; tanggal masing-masing tahap tidak tersedia. Urutan di bawah mengikuti urutan percakapan, bukan perkiraan tanggal.

- **Prompt asli**: kutipan pesan pengguna yang tersedia, dipertahankan dalam fenced code block tanpa memperbaiki ejaan atau istilahnya.
- **Ringkasan prompt**: parafrasa yang diberi label; tidak boleh dianggap kutipan langsung.
- **Kode asli**: cuplikan source saat dokumentasi dibuat, termasuk indentasi dan baris aslinya. Source tetap menjadi acuan jika kemudian berubah.
- **Hasil**: implementasi yang tercatat dalam percakapan dan/atau ditemukan di source. Laporan pengujian historis tidak berarti semua pengujian dijalankan ulang saat menyusun dokumen.
- Project **La Frinece** hanya disebut dalam pertanyaan tentang riwayat. Brief, source, repository, dan percakapannya tidak tersedia di konteks ini; tidak dicampurkan ke dokumentasi MAKA.

Snapshot repository saat pemeriksaan: commit lokal `a643619` dengan pesan `add: animate to page`. Status sinkronisasi dengan remote tidak diperiksa melalui fetch.

## 2. Identitas, tujuan, dan stack

| Aspek | Keterangan |
| --- | --- |
| Nama | MAKA Studio |
| Produk | Satu landing page creative agency |
| Tujuan | Mengubah desain Figma menjadi website editorial yang presisi, responsif, mudah dipelihara, dengan interaksi berkarakter |
| Arah kualitas | Craft dan motion terinspirasi website unggulan Awwwards; bukan klaim penghargaan atau sertifikasi |
| Platform | Browser desktop dan mobile; rencana hosting di Vercel |
| Markup dan styling | HTML semantik, CSS modern dengan BEM |
| JavaScript | Vanilla JavaScript, ES modules, hybrid OOP dan functional programming |
| Tooling | npm dan Vite |
| Motion | GSAP dan ScrollTrigger |
| Smooth scrolling | Lenis |
| Gallery | Swiper core dengan modul yang diperlukan |
| Cursor | WebGL2 fluid simulation, adaptasi React Bits SplashCursor ke vanilla JS |
| Font lokal | Inter dan Bricolage Grotesque |

Versi dependency diambil dari `package.json`, bukan perkiraan versi terbaru.

### Kode asli — package.json

```json
{
  "name": "maka-studio",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "gsap": "3.15.0",
    "lenis": "1.3.27",
    "swiper": "14.4.0"
  },
  "devDependencies": {
    "vite": "8.3.5"
  }
}
```

Node.js digunakan untuk tooling Vite/npm saat development dan build. Website hasil build tidak membutuhkan server Node.js untuk menjalankan landing page statis di browser. GSAP dan Lenis berjalan di browser. Gulp, React, framework UI, dan router tambahan tidak digunakan.

## Bab Dokumentasi

1. [Perjalanan Project](/pug/maka-studio/01-perjalanan-project/) — Kronologi implementasi MAKA Studio dari desain Figma, layout editorial, dan gallery hingga motion dan revisi interaksi.
2. [Keputusan Project](/pug/maka-studio/02-keputusan-project/) — Keputusan layout, fidelity, arsitektur modular, kepemilikan animasi, dan reduced motion MAKA Studio.
3. [Katalog Prompt dan Hasil](/pug/maka-studio/03-prompt-dan-hasil/) — Katalog prompt asli MAKA Studio beserta hasil implementasi dan ringkasan prompt yang diberi label.
4. [Implementasi Teknis](/pug/maka-studio/04-implementasi-teknis/) — Struktur source, lifecycle JavaScript, Lenis, GSAP, preloader, cipher, morph, Splash Cursor, dan aset MAKA Studio.
5. [Kendala dan Validasi](/pug/maka-studio/05-kendala-dan-validasi/) — Kendala dan solusi MAKA Studio, pengujian historis, batasan validasi, serta pekerjaan yang belum selesai.
6. [Maintenance dan Handoff](/pug/maka-studio/06-maintenance-dan-handoff/) — Panduan development, pemeriksaan perubahan motion, preview, handoff Vercel, dan review MAKA Studio.
7. [Link dan Referensi](/pug/maka-studio/07-link-dan-referensi/) — Repository, desain Figma, sumber kode, preset cursor, dan referensi motion MAKA Studio.
