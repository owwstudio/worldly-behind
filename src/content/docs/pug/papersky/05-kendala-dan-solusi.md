---
title: "Papersky: Kendala dan Solusi"
description: "Kendala desain, motion, data, deployment, serta backlog Papersky yang perlu disepakati."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> **Catatan sumber:** `docs/project-history-and-handoff.md`, disusun 10 November 2026. Implementasi, deployment, dan pengujian yang disebut merupakan catatan historis, bukan pemeriksaan production terbaru.

## 6. Kendala, solusi, dan pekerjaan belum selesai

| Kendala | Solusi / status |
| --- | --- |
| Figma tidak memakai auto layout rapi | Implementasi disesuaikan dengan stack/layout native; slicing dan QC bertahap berdasarkan node/screenshot. |
| MCP Figma beberapa kali membutuhkan reauthentication | Reconnect pengguna; untuk favicon akhirnya memakai file lokal yang diberikan. Koneksi saat ini belum diuji ulang. |
| Hero desktop terlalu tinggi | Penyesuaian hero agar muat 100vh. |
| Foto preloader terdistorsi, nature bergeser/shift, blink setelah intro | Ratio/crop, center anchor, transisi dan handoff diperbaiki bertahap. |
| Nature tampak bocor di bawah foto preloader mobile | `overflow: hidden` per slide; frame sebenarnya sudah sama ukurannya. |
| Video hero kurang HD / procedural effect tidak cocok | Kembali ke static nature dengan vertical glass; versi video baru bukan requirement aktif. |
| Mask reveal sudutnya tidak sesuai card | Radius mask mengikuti bidang card; text mask tidak diberi radius. |
| Who stats menutup heading / tampak menyusut / timing tidak sesuai | Intro stat disembunyikan sebelum waktunya; stripe full-size ditutup white sweep; layer angka dan stagger direvisi. Sisa pan kecil Who pernah disebut pengguna dan dibiarkan sementara. |
| Fitur SaaS tidak sesuai perubahan arah produk | Migrasi bertahap ke marketplace; modul historis dapat tersisa di source tetapi tidak dipakai Overview aktif. |
| Warna angka berubah saat number animation | Selector label dipersempit ke direct child agar nested animated numbers tidak ikut warna muted. |
| Upload macOS menghasilkan AppleDouble | `COPYFILE_DISABLE=1`; validator tidak dilonggarkan. |
| Bootstrap Nginx gagal pada regex `{1,10}` | Regex diquote; rollback mempertahankan site lama; ditambah tes Nginx nyata di CI. |
| Release success marker root-owned | Perbaikan ownership exact file, bukan chmod recursive. |
| Known hosts secret belum tersedia | Menggunakan entri ED25519 dengan fingerprint yang sudah diverifikasi; tidak menonaktifkan strict host checking. |
| SVG favicon ditolak health check | Validator lama hanya mengenali CSS/JS untuk entrypoint `/assets`. Deployment rollback berhasil. Favicon dipindah ke root dan diverifikasi terpisah. Generalisasi MIME validator belum dilakukan. |
| Main bundle sekitar 598 kB | Warning build masih ada; code splitting/performance audit belum menjadi batch tersendiri. |
| Dokumen lama memiliki status deployment usang | Gunakan ringkasan ini, source workflow, dan catatan terbaru. Sinkronisasi menyeluruh README/deployment docs belum dikerjakan dalam tugas dokumentasi ini. |

### Backlog yang harus disepakati sebelum implementasi

1. QC menyeluruh di VPS: desktop/mobile, keyboard, overflow, scroll reverse, direct URL, refresh, Back/Forward, accessibility dan performance.
2. Penyelarasan Active Users dengan ledger buyers/orders dan definisi follower/new/returning yang konsisten.
3. Keputusan filter global marketplace/toko; filter tabel saat ini tidak mengubah seluruh KPI.
4. Bila diperlukan: import CSV menjadi sumber analytics dan persistensi; ini bukan perilaku sekarang.
5. Penyesuaian copy landing ke marketplace, tujuan menu desktop marketing, dan real waitlist submission.
6. Performance/code splitting serta uji OS reduced motion, screen reader penuh, slow/error resource injection dan browser compatibility lebih luas.
7. Review favicon pada light/dark browser chrome bila diperlukan. SVG asli mempunyai lapisan putih di atas gradient dan dipertahankan apa adanya; belum ada varian dark/light atau ICO/touch icon.
8. Backend, auth/session/CSRF, MySQL/migrations, organisasi/otorisasi, CMS/admin, billing dan marketplace connectors hanya bila scope baru disetujui. Jangan menganggapnya kelanjutan otomatis showcase.
9. Kepemilikan operasional, penanggung jawab tim, SLA, serta lisensi/distribusi font/foto/desain belum ditentukan lengkap dalam percakapan.

