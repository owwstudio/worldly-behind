---
title: "Auralink"
description: "Ringkasan theme Shopify Auralink: identitas, stack, perjalanan project, prompt, implementasi, dan handoff tim."
sidebar:
  label: "Ringkasan"
  order: 0
---


Tanggal penyusunan: **10 November 2026**. Bahasa dokumentasi: Indonesia; istilah teknis dipertahankan dalam English jika lebih jelas.

## Tentang dokumen ini

Dokumen ini merangkum percakapan pengembangan Auralink Shopify beserta laporan pemeriksaan yang tercatat. Ini bukan transkrip lengkap, audit release terbaru, atau bukti bahwa semua perubahan telah dipublikasikan ke toko.

Dasar informasi:

- Instruksi, prompt, screenshot, dan link yang diberikan pengguna dalam percakapan.
- Hasil implementasi dan pemeriksaan yang dilaporkan selama pengerjaan.
- Catatan di `docs/theme-store-checklist.md`.
- URL `origin` repository yang dibaca saat penyusunan.

Status dibedakan sebagai berikut:

- **Permintaan/desain target:** perilaku yang diminta pengguna; belum otomatis terbukti berjalan.
- **Dilaporkan diimplementasikan:** perubahan tercatat dalam pengerjaan sebelumnya.
- **Dilaporkan lulus tes lokal:** pernah lolos pemeriksaan sintaks, Theme Check, atau regression test; bukan pengganti browser QA.
- **Belum diverifikasi:** belum ada bukti pemeriksaan yang memadai.
- **Belum diketahui:** informasi tidak tersedia dalam percakapan.

Tanggal awal banyak permintaan tidak tersedia. Urutan berikut mengikuti percakapan; tanggal audit adalah tanggal catatan, bukan tanggal pasti setiap fitur dibuat. Tes historis tidak dijalankan ulang untuk penyusunan dokumen ini.

**Batas konteks:** tab IDE terbaru menampilkan `index.html`, `README.md`, `PROJECT-HISTORY.md`, serta `js/interactions/splash-cursor.js`. Hubungannya dengan Auralink belum dikonfirmasi. File tersebut tidak dijadikan bukti stack Auralink. Dokumentasi Le Friance adalah proyek terpisah walaupun link Figma yang pernah digunakan berasal dari file yang sama.

## 1. Identitas, tujuan, dan platform/stack

| Aspek | Keterangan |
| --- | --- |
| Nama proyek | Auralink / AURALINK |
| Tujuan | Tema Shopify orisinal untuk merchant smart-home devices, dengan pengalaman produk visual dan animasi yang tetap dapat diedit merchant |
| Target distribusi | Shopify Theme Store; kelulusan submission belum diketahui |
| Foundation yang diwajibkan | Official Shopify Skeleton Theme; dilarang menyalin Dawn, Horizon, atau tema turunannya |
| Workspace pada percakapan | `/Users/macbook-oww/Downloads/auralink-shopify` |
| Platform | Shopify Online Store, Liquid, JSON templates, sections, blocks, snippets, section groups |
| Frontend | Native CSS dan JavaScript; progressive enhancement |
| Animasi | GSAP dan ScrollTrigger; versi persisnya tidak dikonfirmasi dalam ringkasan ini |
| Smooth scrolling | Lenis 1.3.27, di-host lokal |
| Hero 3D | Radio dengan Three.js; versi Three.js belum diketahui |
| Text effect | Global liquid text reveal berbasis SVG filter dan controlled progress |
| Sumber visual | Screenshot pengguna dan Figma file Speedtest |
| Validasi | Shopify Theme Check, JavaScript/CSS/JSON checks, regression fixtures dengan GSAP/Lenis lokal |
| Repository | https://github.com/briankusuma/auralink-shopify |
| Toko yang tercatat | https://auralink-oneweekwonders.myshopify.com/ |
| Status deployment terbaru | Belum dikonfirmasi; remote storefront tidak membuktikan working-tree patch terbaru sudah terpasang |

## Bab Dokumentasi

1. [Perjalanan Project](/shopify/auralink/01-perjalanan-project/) — Kronologi pengembangan desain, fitur storefront, motion, revisi, dan pemeriksaan project.
2. [Keputusan Project](/shopify/auralink/02-keputusan-project/) — Keputusan arsitektur, platform Shopify, data merchant, motion, dan validasi project.
3. [Prompt Asli dan Hasil](/shopify/auralink/03-prompt-dan-hasil/) — Pilihan prompt asli, ringkasan hasil implementasi, dan batas bukti yang tersedia.
4. [Implementasi Teknis](/shopify/auralink/04-implementasi-teknis/) — Peta file theme, lifecycle, motion, library lokal, commerce, dan pemeriksaan historis.
5. [Kendala dan Solusi](/shopify/auralink/05-kendala-dan-solusi/) — Kendala, solusi yang tercatat, batas verifikasi, serta pekerjaan project yang masih terbuka.
6. [Maintenance dan Handoff](/shopify/auralink/06-maintenance-dan-handoff/) — Workflow maintenance, area rawan regresi, validasi, merchant editing, dan handoff release.
7. [Link dan Referensi](/shopify/auralink/07-link-dan-referensi/) — Website, repository, Figma, referensi teknis, dan dokumen lokal project.
