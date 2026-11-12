---
title: "Finora: Maintenance dan Handoff"
description: "Workflow perubahan, validasi, pembaruan AI, release, recovery, dan perubahan lokal yang dikecualikan di Finora."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 8. Maintenance dan handoff

### 8.1 Mulai bekerja

1. Baca `AGENTS.md` untuk keputusan aktif; bedakan catatan historis yang sudah digantikan.
2. Baca dokumen fitur terkait di `docs/dashboard/`, kontrak di `docs/api/`, serta `docs/deployment.md` sampai bagian pembaruan terakhir. Bagian awal deployment masih mengandung status frontend-only yang bersifat historis.
3. Periksa branch, working tree, serta artifact/health terakhir. Jangan commit perubahan pengguna yang tidak termasuk scope.
4. Siapkan environment lokal dari `.env.example`, tanpa menyalin credential ke chat/log/Git.
5. Jalankan frontend dan API lokal; verifikasi halaman yang diubah.

### 8.2 Verifikasi perubahan

Jalankan typecheck/build sebelum handoff. Tambahkan tes untuk perilaku berisiko seperti perhitungan, URL parser, persistence, validation dan rollback; hindari tes yang hanya meniru markup.

QC minimal: desktop/mobile, keyboard, overflow, direct URL/refresh, Back/Forward, loading/empty/error/pending/success, reduced motion dan cleanup. Untuk mutasi, periksa tabel/statistik/chart/relasi yang terdampak. Laporkan batas pemeriksaan secara eksplisit.

### 8.3 Memperbarui AI

Ubah fakta produk di `shared/finoraGuide.ts`, generate ulang panduan, lalu jalankan tes guide/API dan build frontend/API. Uji pertanyaan nyata bilingual, comparison, follow-up ambigu, data kosong, deadline, timeout/Stop/Retry, history conflict dan stale answer.

Jangan mengklaim fine-tuning atau reasoning yang tervalidasi hanya karena prompt diperpanjang. Pertahankan angka/tautan terstruktur dari kode, validasi input server, serta larangan mutation tools tanpa scope baru.

### 8.4 Rilis dan recovery

Push ke `main` memicu rilis jika deployment flag aktif. Pantau Actions hingga selesai; cocokkan SHA `/health.json` dan `/api/v1/health`. Periksa API/assets 404, deep links, serta kesehatan aplikasi VPS lain.

Jangan mengubah DNS lain, global permission, atau restart service aplikasi lain. Untuk rollback gunakan script Finora dengan commit release retained yang valid dan strict host checking. Periksa kapasitas disk; directory `.user.ini` terlindungi dapat melewati retensi normal dan memerlukan review manual. Tidak ada reset/reseed database otomatis.

Akses operasional, pemilik credential, jadwal backup data browser, dan penanggung jawab maintenance perlu ditetapkan tim; nama PIC formal belum diketahui.

### 8.5 Perubahan lokal yang dikecualikan

Saat rilis terakhir, `src/components/landing/HeroDashboardPreview.tsx` masih memiliki edit pengguna yang mengganti greeting `Watson` menjadi `Gone`. Edit tersebut sengaja tidak ikut commit rilis dashboard. Verifikasi working tree terbaru sebelum menyentuh atau menerbitkannya.

