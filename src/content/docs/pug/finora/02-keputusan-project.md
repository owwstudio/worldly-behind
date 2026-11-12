---
title: "Finora: Keputusan Project"
description: "Keputusan scope showcase, fidelity, motion, data demo, AI read-only, dan delivery Finora."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 4. Keputusan penting dan alasannya

| Keputusan | Alasan / konsekuensi |
|---|---|
| Showcase yang serius, tanpa overengineering | Fokus pada visual, interaksi, konsistensi data; menunda infra bisnis yang belum dibutuhkan |
| Layout kembali mengikuti Figma | Eksperimen mengecilkan layout tidak sesuai harapan; interaksi dipakai untuk mengatur perjalanan |
| Hero dashboard DOM/SVG | Dibutuhkan animasi grafik, angka, dan wrapper per elemen |
| Motion mengikuti storyboard pengguna | Eksperimen dekoratif tanpa arah ditolak; identitas berasal dari gradient, grain, grafik, dan morphing bentuk |
| Navbar normal flow | Sticky/fixed dan hide/show mengganggu orkestrasi landing |
| Surface continuity untuk morph | Menghindari dua background/quote wrapper yang terlihat double |
| URL untuk filter/rentang | Refresh dan Back/Forward mempertahankan state yang perlu dibagikan/dipulihkan |
| Query invalidation setelah mutasi | Tabel, statistik, grafik, dan relasi harus konsisten |
| Tidak ada fallback demo diam-diam untuk kegagalan Gemini | Error harus jelas; Local assistant adalah pilihan eksplisit |
| AI read-only | Tindakan diarahkan ke form agar pengguna meninjau sebelum menyimpan |
| Angka kartu dihitung aplikasi | Narasi Gemini bisa keliru; model tidak menjadi sumber angka atau score |
| History browser, bukan akun cloud | Sesuai scope portofolio; tetap perlu mengatasi konflik antar tab |
| Rilis frontend/API dalam satu commit | Meminimalkan ketidaksesuaian versi dan mendukung rollback keduanya |
| Dedicated deploy/service/runtime | Membatasi dampak terhadap aplikasi VPS lain |

