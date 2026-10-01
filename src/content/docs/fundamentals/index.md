---
title: Dasar-Dasar
description: Stack, pemisahan konten dan kode, serta pedoman penulisan Worldly Behind.
sidebar:
  label: Ringkasan
  order: 0
---

## Stack

Worldly Behind menggunakan Astro dan Starlight dengan strict TypeScript.
Starlight menyediakan sidebar, navigasi responsif, pencarian, daftar isi,
syntax highlighting, dan tautan halaman sebelumnya/selanjutnya.
Website dibangun menjadi file statis untuk Vercel.

## Konten dan kode

- Tulis dokumentasi dalam Markdown di `src/content/docs/`.
- Kumpulkan dokumentasi project dalam subfolder kategori, seperti `pug/verity/`.
- Gunakan MDX hanya jika halaman memerlukan komponen interaktif.
- Simpan komponen UI yang dapat digunakan ulang di `src/components/` dan impor ke MDX.
- Simpan modul interaksi vanilla JavaScript yang kecil di `src/scripts/`.
  JavaScript ikut diperiksa oleh type-check; gunakan JSDoc jika tipe perlu dinyatakan jelas.
- Simpan CSS khusus di `src/styles/custom.css`. Komponen tema Windows 95 yang
  dapat digunakan ulang berada di `src/components/theme/`, terpisah dari konten.
- Simpan template penulisan di folder `templates/` pada root agar tidak
  dipublikasikan atau masuk indeks pencarian.

## Pedoman penulisan

Gunakan Bahasa Indonesia sebagai bahasa utama. Pertahankan nama tool dan istilah
teknis dalam Bahasa Inggris jika lebih jelas, seperti prompt, workflow, deployment,
frontmatter, dan code block. Pertahankan kode serta prompt sumber saat mengimpor dokumen.

Berikan judul dan ringkasan yang jelas pada setiap halaman. Gunakan heading agar
mudah dipindai, tulis prasyarat sebelum langkah kerja, dan jelaskan cara memeriksa
hasilnya. Bedakan contoh dari prosedur tim yang sudah disetujui.

Jangan sertakan kredensial, informasi privat klien, atau klaim hasil tanpa bukti.
Catat sumber dan tanggal saat mendokumentasikan perilaku yang bergantung pada versi.

## Template

Gunakan `templates/guide.md` untuk panduan, `templates/prompt.md` untuk prompt,
dan `templates/case-study.md` untuk evaluasi project. Ganti semua placeholder
dan hapus penanda draft sebelum publikasi.
