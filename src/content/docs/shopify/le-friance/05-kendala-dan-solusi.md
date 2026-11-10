---
title: "Le Friance: Kendala dan Solusi"
description: "Kendala, solusi yang tercatat, batas verifikasi, serta pekerjaan project yang masih terbuka. Dokumentasi Le Friance."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> **Catatan sumber:** `project-history-le-friance.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 6. Kendala, solusi, dan status terbuka

| Kendala | Solusi / keputusan | Status bukti |
| --- | --- | --- |
| Color scheme error di preview | Definisi schema/data disesuaikan | Riwayat perbaikan; perlu preview toko saat release |
| Salah memahami gambar/variant/produk | Pakai empat product records yang diperjelas pengguna | Data toko saat ini perlu diperiksa ulang |
| Loading/reveal terlalu cepat atau hanya sekali | Pisahkan readiness dan visual caption; replay setiap reload | Implementasi/catatan lokal; browser pending |
| Page Unresponsive | Perbaikan lifecycle/sticky/refresh/observer | Akar masalah live belum dibuktikan |
| Footer callback tidak berjalan | Tambah kondisi `all` pada GSAP matchMedia | Actual GSAP regression dilaporkan lulus |
| Footer autoplay tidak berjalan | Tambah modul Autoplay ke bundle Swiper pinned | Actual bundled module diuji enam perpindahan; layout browser belum diuji |
| Caption slide selanjutnya kosong | Isi caption empat blok dan sediakan default/fallback | Data/schema diperiksa lokal |
| Komposisi 2K/4K tidak proporsional | Shared width dan capped motion-stage height; refreshable geometry | Model 63 kombinasi dan GSAP regression dilaporkan lulus; visual pending |
| Angka Journal hilang saat reverse | Paint ink/fill dari reversible state | Regression lokal lulus |
| Brown plane kembali ke posisi default | Collapse mengikuti activeIndex | Regression 04/06/01 dilaporkan lulus |
| Garis tipis di samping angka | Solid background pada endpoint fill | Pixel rendering belum dikonfirmasi |
| Scroll tertangkap di text card | `overflow:clip` dan hapus Lenis prevent | Browser wheel/touch pending; long copy berisiko terpotong |
| Recommendations kosong | Server fallback dan native API upgrade | Actual Liquid + mocked loader lulus; API toko live belum dipastikan |
| Password Git/Keychain berulang | Penjelasan login keychain vs Git credential | Resolusi autentikasi akhir belum diketahui |
| Banyak docs/token | Docs on demand, task aktif ringkas, Git untuk history | Prinsip kerja; persentase penghematan RTK tidak diukur |

### 6.1 Gate yang masih terbuka

- Live Theme Editor: add/remove/reorder/edit/live preview.
- Native cart, error/update, form, checkout, gift recipient dan accelerated checkout end-to-end.
- Recommendations, pickup, account, Follow on Shop dan app integration dengan data toko nyata.
- Mobile, desktop 1440/1920/2560/3840, keyboard, focus, screen reader dan reduced motion.
- Lighthouse dengan konten nyata. Target proyek: Performance ≥60 dan Accessibility ≥90 untuk halaman relevan; ini bukan skor yang telah dicapai.
- Profiling laporan freeze/Page Unresponsive.
- Hak distribusi Figma, foto, generated images, font dan seluruh third-party assets.
- Author tema, URL dokumentasi dan URL support resmi tim.
- Demo store, Theme Store listing, originalitas dan full submission checklist.
- Verifikasi bahwa development/local code yang diuji memang versi yang terlihat di toko.

Saat penyusunan, `theme_name` adalah `lafrience`, tetapi metadata author masih `Shopify` dan URL support/documentation masih generik Shopify. **Itu belum menjadi identitas final tim.**

### 6.2 Pelajaran dari proses

Asisten beberapa kali menyatakan implementasi selesai berdasarkan kode dan mock tests, sementara visual browser belum diperiksa. Pengguna kemudian melaporkan hasil tidak sesuai berulang kali.

Pelajaran untuk tim:

1. Jangan samakan “test lokal lulus” dengan “sama dengan desain”.
2. Periksa modul vendor asli, bukan hanya mock API-nya; bug Autoplay lolos karena mock mempunyai method yang bundle nyata belum punya.
3. Uji animasi bolak-balik dan ganti slide sebelum reverse; test happy path awal saja tidak cukup.
4. Pastikan perbaikan mencapai preview/theme yang sedang diuji pengguna.
5. Jangan menyebut RTK sebagai penyebab tanpa bukti. RTK merangkum output terminal; detail yang hilang harus dibaca ulang. Penghematan persentase belum diukur.
6. Dokumentasikan keterbatasan visual/live dengan jelas dan lanjutkan QA yang tersedia.

