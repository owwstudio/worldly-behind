---
title: "Papersky"
description: "Ringkasan Papersky: marketing landing dan dashboard marketplace demo berbasis React, TypeScript, Vite, serta riwayat keputusan dan handoff."
sidebar:
  label: "Ringkasan"
  order: 0
---


**Disusun:** 10 November 2026, Asia/Jakarta.  
**Basis dokumentasi:** percakapan project yang tersedia, `AGENTS.md`, source code, dokumen `docs/`, dan riwayat Git lokal.  
**Commit terakhir saat penyusunan:** `d3e23730a485fd0298a8c54e273328ccabd249ba` — `Remove active dashboard tab underline`.

> Dokumen ini merangkum keadaan terakhir yang diketahui, bukan laporan pengujian production baru pada 10 November. Deployment dan browser QC terakhir yang tercatat dilakukan pada 2 November 2026. Tidak ada kode aplikasi, konfigurasi server, atau deployment baru yang dijalankan untuk menyusun dokumen ini.

## 1. Identitas, tujuan, dan platform

**Nama:** Papersky.  
**Bentuk:** website marketing publik dan dashboard aplikasi berbasis web.  
**Tujuan akhir yang disepakati:** showcase/portofolio yang dikerjakan serius, dengan perhatian pada desain, motion, responsivitas, interaksi, dan kualitas implementasi frontend; hindari overengineering.

Deskripsi awal produk adalah SaaS analytics untuk revenue, subscriptions, dan customer insights. Dalam perjalanan project, dashboard berubah menjadi analitik kumpulan toko pengguna di **Shopee, TikTok Shop, Tokopedia, dan Lazada**. Dashboard adalah produk utama; landing merupakan website marketing dashboard.

**Kondisi saat ini:** static Single Page Application (SPA), demo publik tanpa login. Semua data marketplace merupakan fixture fiktif. Tidak ada backend, database, autentikasi nyata, billing, atau koneksi API marketplace. Copy SaaS pada landing tetap dipertahankan sesuai arahan pengguna, meskipun arah dashboard sudah marketplace analytics.

### Stack terpasang

Versi di bawah dibaca dari `package.json` saat dokumentasi disusun; bukan rekomendasi versi terbaru.

| Lapisan | Teknologi / versi | Fungsi |
| --- | --- | --- |
| UI | React 19.3.1 | Landing dan dashboard |
| Build | Vite 8.3.5 | Dev server dan build static |
| Bahasa | TypeScript 7.0.2, strict | Type checking |
| Routing | React Router 8.5.0 | Route, navigasi, URL search params |
| Async state | TanStack Query 5.105.0 | Resource demo dan cache in-memory |
| Styling | Sass 1.106.1, SCSS BEM, CSS variables | Layout, tokens, responsive, interaction states |
| Grafik | Chart.js 4.6.1, lazy loaded | Grafik dashboard |
| Landing motion | GSAP 3.15.0 / ScrollTrigger, Lenis 1.3.27 | Scroll storyboard dan smooth scroll |
| Micro interaction | CSS dan Web Animations API (WAAPI) | Hover, dialog, tabel, feedback |
| Font | Suisse Intl lokal | Aset diberikan pengguna |
| Runtime build | Node.js 24 melalui `.nvmrc` | Tooling lokal dan CI; bukan API di VPS |
| Hosting | Nginx, VPS aaPanel/CentOS 9, HTTPS | Menyajikan `dist` |
| Source / delivery | Private GitHub repo, GitHub Actions | CI, artifact, deployment otomatis |

Stack backend **acuan untuk fase yang belum dibangun**: Node.js + Express + TypeScript, REST `/api/v1`, MySQL + `mysql2`, migrasi tercatat. Tidak ada ORM, Redux, SSR, PWA, atau library UI besar yang ditambahkan.

## Bab Dokumentasi

1. [Perjalanan Project](/pug/papersky/01-perjalanan-project/) — Kronologi Papersky dari landing SaaS dan motion hingga dashboard marketplace demo, CI, dan deployment VPS.
2. [Keputusan Project](/pug/papersky/02-keputusan-project/) — Keputusan scope showcase, demo tanpa login, data fixture, URL filters, motion, dan delivery Papersky.
3. [Prompt Asli dan Hasil](/pug/papersky/03-prompt-dan-hasil/) — Pilihan prompt asli Papersky, prompt image enhancement, ringkasan permintaan, dan hasil implementasi.
4. [Implementasi Teknis](/pug/papersky/04-implementasi-teknis/) — Route, struktur React, data metrik, async state, CSV, search, dan motion Papersky beserta cuplikan kode asli.
5. [Kendala dan Solusi](/pug/papersky/05-kendala-dan-solusi/) — Kendala desain, motion, data, deployment, serta backlog Papersky yang perlu disepakati.
6. [Maintenance dan Handoff](/pug/papersky/06-maintenance-dan-handoff/) — Development lokal, pemeriksaan, pipeline CI, deployment VPS, health, rollback, dan checklist handoff Papersky.
7. [Link dan Referensi](/pug/papersky/07-link-dan-referensi/) — Website, dashboard, repository, workflow CI, Figma, dan path dokumentasi repository Papersky.

## 9. Batas kepastian dokumentasi

Dokumen ini tidak mengganti transkrip lengkap atau keputusan bisnis baru. Tanggal mulai project, seluruh prompt tool awal, prompt Google Veo final, daftar pemilik operasional, serta kelengkapan lisensi aset belum diketahui. Snapshot desain Figma bisa berubah setelah dibaca. Source dan workflow terakhir diperiksa secara lokal; status server setelah pemeriksaan 2 November tidak diasumsikan tetap sama tanpa verifikasi baru.

Status “sudah live” di atas berarti rilis tertentu pernah lolos workflow/health dan pemeriksaan publik yang tercatat. Itu tidak berarti backend selesai, semua metrik sudah konsisten, QC menyeluruh selesai, atau produk siap production.
