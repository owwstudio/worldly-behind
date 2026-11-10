---
title: "MAKA Studio: Maintenance dan Handoff"
description: "Panduan development, pemeriksaan perubahan motion, preview, handoff Vercel, dan review MAKA Studio."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> **Catatan sumber:** `project-history-maka.md`, disusun 10 November 2026. Status implementasi dan pengujian di sini merupakan catatan saat dokumentasi dibuat, bukan audit terbaru.

## 8. Maintenance dan handoff

### Menjalankan dan membangun

Perintah operasional berikut merupakan panduan, bukan kutipan prompt pengguna.

```sh
npm ci
npm run dev
```

Buka URL yang dicetak Vite. Untuk melihat build production lokal:

```sh
npm run build
npm run preview
```

`npm run dev` memperbarui source melalui HMR; `npm run preview` membaca hasil build terakhir. Setelah source berubah, build ulang jika yang dilihat adalah preview/dist. Jangan mengedit file bundle ber-hash di `dist/assets/`.

Versi Node.js yang dijalankan tim belum dicatat atau dipin di project. Cocokkan dengan persyaratan versi Vite yang dipasang saat menyiapkan mesin/CI.

### Checklist perubahan motion

1. Baca `AGENTS.md` dan instruksi lingkungan yang tersedia sebelum mengedit.
2. Identifikasi modul, hook `data-*`, wrapper, dan pemilik properti animasi. Jangan menambah tween transform pada target yang sudah dimiliki sistem lain.
3. Ubah angka khusus fitur di modulnya; jangan membuat global state di window atau menambah framework.
4. Jika menambah resource/listener/observer/ticker/async, tambahkan cleanup dan guard callback setelah destroy.
5. Pertahankan markup asli/focus/ARIA saat membuat efek teks. Pengecualian label Project/Year ada di selector testimonial.
6. Uji scroll turun-naik, reload dari section bawah, anchor footer, dialog, accordion, resize desktop↔mobile, HMR, dan perubahan reduced motion ketika halaman terbuka.
7. Saat mengubah proyek morph, periksa frame awal full, oval tengah, perpindahan tetap oval, handoff tanpa blink, dan final grid. Refresh layout di tengah scene untuk mendeteksi state cache salah.
8. Setelah tinggi layout berubah, minta refresh melalui scheduler bersama; jangan refresh per frame.
9. Periksa console, aset gagal, horizontal overflow, dan state inert yang tertinggal.
10. Jalankan build, lalu periksa hasil preview. Untuk perubahan dokumentasi saja, build aplikasi tidak wajib.

### Target pemeriksaan visual

Baseline desktop 1440px; periksa pula 1920, 1024, 768, 390, dan 360px. Ukuran dari screenshot yang di-resize tidak boleh dipakai langsung sebagai ukuran CSS. Ambil screenshot saat animasi benar-benar selesai jika memeriksa fidelity final.

### Handoff Vercel

Konfigurasi yang sesuai dengan struktur saat ini: framework preset **Vite**, build command `npm run build`, output directory `dist`, root directory adalah folder yang berisi package.json. Ini panduan handoff, bukan bukti project sudah terdeploy dengan pengaturan tersebut. Verifikasi Node.js, branch deployment, domain, dan status build langsung di project Vercel sebelum release. Tidak ada kebutuhan environment variable yang teridentifikasi dari pembahasan ini.

### Git dan review

Tinjau diff source dan hasil browser sebelum commit. Jangan menyertakan node_modules, output dist, atau skrip sementara dari `/private/tmp`. Commit/push hanya sesuai instruksi tim/pengguna. Catat perubahan yang mengubah timing, aksesibilitas, atau perilaku anchor agar revisi berikutnya tidak mengembalikan bug lama.

