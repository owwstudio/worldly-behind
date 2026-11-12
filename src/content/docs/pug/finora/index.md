---
title: "Finora"
description: "Ringkasan Finora: showcase dashboard keuangan personal, marketing landing, React, Vite, API Gemini, serta riwayat project dan handoff tim."
sidebar:
  label: "Ringkasan"
  order: 0
---


Tanggal penyusunan: 12 November 2026 (Asia/Jakarta).

## 1. Tujuan dan cara membaca dokumen

Finora adalah showcase/portofolio dashboard keuangan personal dengan landing page marketing. Target kualitasnya adalah tampilan yang mengikuti Figma, interaksi yang dipikirkan secara serius, dan fungsi demo yang konsisten. Finora belum dinyatakan sebagai aplikasi keuangan production atau layanan yang terhubung ke rekening bank.

Dokumen ini merangkum percakapan yang tersedia dan catatan repository. Ini **bukan transkrip lengkap**: sebagian respons asisten dari fase awal tidak tersedia dalam konteks percakapan, tetapi implementasi dan catatan QC tersimpan di repository. Kutipan berlabel **Prompt asli** disalin dari pesan pengguna yang tersedia, termasuk ejaan aslinya. Bagian berlabel **Ringkasan prompt** merupakan parafrasa, bukan kutipan. Tidak semua prompt pendek berulang dicantumkan.

Tanggal fase awal mengikuti catatan project; tanggal tiap pesan tidak seluruhnya diketahui. Hasil teknis harus dibaca bersama batas QC, bukan sebagai jaminan semua browser/perangkat sudah diuji. Kredensial, private key, serta URL sesi panel berisi token sengaja tidak disertakan.

## 2. Identitas, platform, dan stack

| Aspek | Implementasi / keputusan |
|---|---|
| Nama | Finora |
| Platform | Web: public landing dan dashboard responsif |
| Frontend | React, Vite, TypeScript strict |
| Routing | React Router |
| Server state | TanStack Query; filter yang relevan disimpan dalam URL search params |
| Styling | SCSS, BEM, CSS variables; mengikuti aset Figma |
| Typography | Inter Display dan PP Editorial New untuk aksen editorial |
| Motion | GSAP/ScrollTrigger untuk landing, Lenis smooth scroll landing; CSS/WAAPI/RAF terarah untuk dashboard |
| API | Node.js + Express + TypeScript, prefix `/api/v1` |
| AI | Gemini API melalui backend; API key tidak berada di frontend |
| Storage demo | Ledger/Goals dalam memori tab; profil/preferences dan history memiliki storage browser tersendiri |
| History chat | IndexedDB, kontrol konflik revisi dan sinkronisasi perubahan antar tab |
| Draft chat | sessionStorage; bertahan navigasi/refresh dalam tab yang sama |
| Database server | MySQL/mysql2 merupakan acuan awal; **belum diintegrasikan** pada rilis ini |
| Deployment | GitHub Actions → artifact frontend/API → VPS, Nginx + dedicated systemd API service |

Chart dashboard memakai implementasi SVG/custom sesuai kebutuhan desain. Chart.js disebut sebagai opsi awal, bukan dependency yang terpasang. Tidak menambah Redux, SSR, PWA, ORM, atau library UI besar.

Admin internal, CMS, autentikasi akun sungguhan, billing sungguhan, dan multi-organisasi belum menjadi implementasi aktif yang terverifikasi. Kebutuhan isolasi organisasi pada brief awal tetap menjadi syarat jika scope itu diaktifkan kelak.

## Bab Dokumentasi

1. [Perjalanan Project](/pug/finora/01-perjalanan-project/) — Kronologi Finora dari fondasi landing dan motion hingga dashboard keuangan, API Gemini, dan deployment VPS.
2. [Keputusan Project](/pug/finora/02-keputusan-project/) — Keputusan scope showcase, fidelity, motion, data demo, AI read-only, dan delivery Finora.
3. [Prompt Asli dan Hasil](/pug/finora/03-prompt-dan-hasil/) — Prompt asli dan ringkasan prompt Finora untuk desain, motion, dashboard, Gemini, serta publikasi.
4. [Implementasi Teknis](/pug/finora/04-implementasi-teknis/) — Struktur frontend, data demo, Messages dan API Gemini, motion, serta deployment Finora.
5. [Kendala dan Solusi](/pug/finora/05-kendala-dan-solusi/) — Kendala, solusi historis, batas verifikasi, dan pekerjaan Finora yang belum selesai.
6. [Maintenance dan Handoff](/pug/finora/06-maintenance-dan-handoff/) — Workflow perubahan, validasi, pembaruan AI, release, recovery, dan perubahan lokal yang dikecualikan di Finora.
7. [Link dan Referensi](/pug/finora/07-link-dan-referensi/) — Website, Messages, repository, rilis, Figma, dan referensi Gemini untuk Finora.
8. [Kode Asli dan Perintah](/pug/finora/08-kode-dan-perintah/) — Salinan scripts npm, perhitungan Financial Performance, dan kontrak chat Finora dari dokumen sumber.
