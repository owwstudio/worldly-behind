---
title: "Papersky: Keputusan Project"
description: "Keputusan scope showcase, demo tanpa login, data fixture, URL filters, motion, dan delivery Papersky."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> **Catatan sumber:** `docs/project-history-and-handoff.md`, disusun 10 November 2026. Implementasi, deployment, dan pengujian yang disebut merupakan catatan historis, bukan pemeriksaan production terbaru.

## 3. Keputusan penting dan alasannya

| Keputusan aktif | Alasan / implikasi |
| --- | --- |
| Scope showcase, frontend terlebih dahulu | Mencegah backend, auth, organisasi, dan admin menjadi pekerjaan tambahan tanpa kebutuhan portfolio yang nyata. |
| Dashboard produk utama, landing marketing | Prioritas flow/data berada di dashboard; landing menjelaskan dan mengarahkan pengguna ke demo. |
| Demo publik tanpa login | Memudahkan pengunjung portfolio menjelajahi produk; tidak menyimulasikan keamanan akun yang sebenarnya belum tersedia. |
| Dummy data dan CSV lokal terpisah | Pengguna meminta data analytics tetap; CSV menunjukkan pengalaman validasi/import tanpa mengklaim provider sync atau persistensi. |
| Customers = pembeli marketplace | Memenuhi kebutuhan customer baru/lama dan riwayat belanja; subscription/billing Papersky tidak termasuk. |
| Reuse presentation cards dari landing | Bahasa visual konsisten dan menghindari duplikasi komponen yang serupa. |
| URL menyimpan committed filter | Refresh, direct URL, Back/Forward mempertahankan reporting/filter/search/page; draft UI tetap di React state. |
| Data lama tetap terlihat ketika refetch | Menghindari seluruh halaman berubah menjadi loading dan menjaga konteks periode asal tetap jelas. |
| Tidak memakai dummy sebagai fallback API | Saat ini service memang demo lokal. Jika API ditambah, kegagalan tidak boleh diam-diam diganti fixture. |
| Hero memakai gambar alam statis + vertical glass | Video dan eksperimen background bergerak belum memenuhi kualitas visual pengguna. |
| Sticky/overlap hanya sesuai storyboard yang disetujui | Membentuk satu pengalaman landing yang konsisten tanpa mengubah section approved secara sepihak. |
| Desktop navbar menu belum diberi tujuan | Pengguna belum menentukan redirect; jangan menganggap semua menu marketing sudah fungsional. CTA Get Started tetap aktif. |
| Tidak mengubah marketing copy saat transisi marketplace | Instruksi eksplisit pengguna; konsistensi narasi landing-dashboard tetap menjadi pekerjaan editorial terpisah. |
| Main → artifact CI → VPS | Build berasal dari GitHub; server menerima artifact terverifikasi, bukan source plus install dependency. |
| Dedicated deploy account dan forced command | Membatasi operasi pada Papersky dan menghindari gangguan project lain di VPS. |
| SVG favicon di root | URL standar `/favicon.svg` menghindari asumsi JS/CSS pada validator entrypoint `/assets`; file diverifikasi HTTPS, MIME, dan byte hash secara terpisah. Validator lama belum diperbaiki. |

### Keputusan historis yang sudah diganti

- MRR/Subscriptions merupakan fase historis, bukan definisi produk aktif.
- CTA awal Join waitlist tetap berupa form demo; Get Started sekarang menuju dashboard.
- Usulan tiga area publik/dashboard/admin belum berarti tiga aplikasi sudah dibangun. Hanya publik dan dashboard yang tersedia.
- Video hero, parallax tiga card Built, dan carousel Built tidak menjadi perilaku final.
- Dots link hover dan garis bawah tab aktif sudah dihapus.
- Catatan lama “deployment belum diizinkan/aktif” tidak berlaku setelah aktivasi pipeline dan persetujuan rilis.

