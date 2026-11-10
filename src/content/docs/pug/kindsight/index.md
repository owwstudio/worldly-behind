---
title: "Kindsight"
description: "Ringkasan software fundraising Kindsight: website publik, portal organisasi, admin, migrasi Pug ke React, API MySQL, dan handoff tim."
sidebar:
  label: "Ringkasan"
  order: 0
---


**Tanggal rangkuman:** 10 November 2026  
**Status:** MVP telah diterima pengguna dan tersedia di website live. Pengembangan lanjutan sedang di-pause.  
**Catatan:** MVP selesai tidak berarti seluruh aspek production readiness telah diselesaikan.

Dokumentasi disusun dari percakapan dan catatan project. Informasi yang belum diketahui ditandai secara eksplisit. Kredensial, private key, dan password tidak disertakan. Pemeriksaan live terakhir yang dibahas berlangsung pada 9 November 2026; penyimpanan dokumen ini bukan pemeriksaan ulang website.

## 1. Identitas, Tujuan, dan Stack

| Item | Keterangan |
|---|---|
| Nama | Kindsight |
| Jenis | Website publik, portal organisasi, dan admin internal |
| Tujuan | Software fundraising untuk organisasi |
| Website live | https://kindsight.owwteam.dev/ |
| Repository | https://github.com/AjiwahyuIN/kindsight |
| Branch deployment | `main` |
| Hosting aktif | VPS dengan aaPanel dan Nginx |
| Workspace pengembangan | `/Users/anticumlaudeclub/Documents/ChatGPT/Kindsight` |

### Pemisahan produk

1. **Website publik:** pemasaran, informasi produk, ilustrasi fundraising, dan permintaan demo. Konten dikelola melalui CMS.
2. **Portal organisasi:** dashboard, donors, campaigns, dan donations. Data dibatasi berdasarkan organisasi pengguna.
3. **Admin internal:** CMS, permintaan demo, organisasi, dan akun organisasi. Tidak otomatis memiliki akses ke ledger organisasi.

Website donasi langsung/payment ditunda. Angka marketing, ilustrasi, AI, dan scoring tidak boleh dianggap sebagai hasil perhitungan ledger.

### Stack aktif

| Layer | Teknologi |
|---|---|
| Frontend | React, Vite, TypeScript |
| Routing | React Router |
| Server state | TanStack Query |
| Styling | SCSS, BEM, CSS variables |
| Grafik | Chart.js |
| Motion | GSAP, ScrollTrigger, Lenis |
| Backend | Node.js, Express, TypeScript dengan modul JavaScript legacy |
| Database | MySQL, `mysql2` |
| Runtime VPS saat setup | Node.js `22.22.2` |
| Web server | Nginx |
| Deployment | GitHub Actions, artifact ZIP, SSH, scoped deployment helper |
| Panel | aaPanel |

Frontend sebelumnya memakai Pug dan Vanilla JavaScript. Jalur legacy dipertahankan sebagai referensi dan kompatibilitas selama transisi. Jangan mengklaim seluruh backend legacy sudah TypeScript.

## Bab Dokumentasi

1. [Perjalanan Project](/pug/kindsight/01-perjalanan-project/) — Perjalanan Kindsight dari migrasi React, API dan MySQL hingga motion, deployment VPS, serta insiden API.
2. [Keputusan Project](/pug/kindsight/02-keputusan-project/) — Keputusan arsitektur SPA, organisasi, data, migrasi, motion, dan deployment Kindsight.
3. [Prompt Asli dan Hasil](/pug/kindsight/03-prompt-dan-hasil/) — Prompt asli Kindsight untuk interaksi, feedback CMS, favicon, dan insiden API beserta hasilnya.
4. [Implementasi Teknis](/pug/kindsight/04-implementasi-teknis/) — Routing, state, autentikasi, migrasi, CMS, motion, Nginx, dan deployment helper Kindsight.
5. [Kendala dan Solusi](/pug/kindsight/05-kendala-dan-solusi/) — Kendala Kindsight, solusi historis, serta pekerjaan tertunda dan batas production readiness.
6. [Maintenance dan Handoff](/pug/kindsight/06-maintenance-dan-handoff/) — Development, build, pengujian, update live, health check, pemulihan API, backup, dan rollback Kindsight.
7. [Link dan Referensi](/pug/kindsight/07-link-dan-referensi/) — Website, login, repository, workflow deployment, dan referensi dokumentasi Kindsight.

## 9. Status Handoff Terakhir

- MVP diterima; website dan automatic deployment pernah diverifikasi.
- Favicon dan feedback CMS sudah live.
- API pulih pada9 November2026 setelah Start melalui aaPanel.
- Sepuluh endpoint konten kembali normal pada pemeriksaan terakhir.
- Penyebab proses berhenti belum diketahui; asumsi penghentian admin lain diminta pengguna.
- Tidak ada restart otomatis atau deployment perbaikan baru yang tercatat untuk insiden tersebut.
- Pekerjaan berikutnya mengikuti instruksi pengguna.
