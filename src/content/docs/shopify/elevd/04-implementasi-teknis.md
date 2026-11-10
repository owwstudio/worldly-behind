---
title: "Elevd: Implementasi Teknis"
description: "Struktur theme Shopify Elevd, font, preloader, scene ruangan, integrasi library, dan verifikasi historis."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> Dokumentasi ini merangkum percakapan project Elevd. Status theme, konfigurasi lokal, dan repository di bawah merupakan kondisi terakhir yang tercatat dalam percakapan, bukan hasil audit terbaru.

## 5. Implementasi Teknis

### 5.1. Struktur theme

File utama yang tercatat:

```text
layout/theme.liquid
templates/index.json
sections/elevd-header.liquid
sections/elevd-hero.liquid
sections/elevd-partners.liquid
sections/elevd-day.liquid
assets/elevd.css
assets/elevd-day.css
assets/elevd-scroll.js
assets/elevd-intro.css
assets/elevd-intro.js
snippets/elevd-intro-head.liquid
snippets/elevd-intro.liquid
snippets/elevd-scroll-head.liquid
```

Homepage menggunakan section Elevd. Struktur Dawn untuk route lain tetap menjadi fondasi project.

### 5.2. Font

Weight yang disiapkan:

| Font | Weight tercatat |
|---|---:|
| Thin | 265 |
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Bold | 700 |
| ExtraBold | 800 |
| Black | 900 |

Sumber file berasal dari direktori pengguna:

```text
/Users/anticumlaudeclub/Downloads/Goobly/helvetica-now-display/
```

Lisensi dan ketentuan distribusi font belum didokumentasikan dalam percakapan.

### 5.3. Preloader

Perilaku yang diimplementasikan:

- Background gelap dengan logo di tengah viewport.
- Logo bergerak menuju navbar.
- Warna wordmark menyesuaikan tampilan akhir.
- Hero muncul setelah intro.
- Intro berjalan sekali per tab session.
- Tersedia Skip dan tombol Escape.
- Konten utama dibuat inert selama intro.
- Terdapat fallback untuk perubahan viewport, page lifecycle, dan watchdog.
- Intro dilewati pada reduced motion, Shopify Theme Editor, serta kondisi navigasi tertentu.

Parameter replay untuk pengujian:

```text
?elevd_intro=replay
```

### 5.4. Section suasana ruangan

Aset yang tercatat:

```text
assets/elevd-room-morning.webp
assets/elevd-room-focus.webp
assets/elevd-room-evening.webp
```

Desktop menggunakan pinned stage dengan crossfade gambar dan deskripsi mengikuti scroll. Navigasi chapter memungkinkan pengguna menuju suasana tertentu.

Mobile menggunakan tiga card berurutan dengan native scrolling.

Shopify Theme Editor dan reduced motion menampilkan seluruh suasana tanpa pinned animation.

Teks, urutan scene, dan gambar dapat disesuaikan melalui section schema.

### 5.5. Integrasi library

Versi yang tercatat saat implementasi:

```text
GSAP 3.15.0
ScrollTrigger 3.15.0
Lenis 1.3.26
```

Library disimpan lokal di theme assets.

Integrasi menggunakan GSAP ticker untuk menjalankan Lenis dan memperbarui ScrollTrigger. Lenis dimulai setelah intro selesai.

Scroll dikendalikan agar tetap sesuai dengan drawer atau modal Dawn. Lifecycle section Shopify ditangani dengan context yang dapat dibersihkan saat section dimuat ulang.

### 5.6. Verifikasi yang pernah dilakukan

- Shopify Theme Check: 0 error, 9 warning bawaan Dawn.
- Pemeriksaan desktop dan mobile.
- Pemeriksaan overflow horizontal.
- Ketiga gambar berhasil dimuat.
- Scroll maju dan mundur mengubah scene.
- Navigasi chapter diuji.
- Resize menghapus pin sesuai breakpoint.
- Reduced motion menampilkan semua scene.
- Integrasi preloader dan Lenis diuji.
- Live website pernah diverifikasi setelah deployment.

Hasil tersebut menggambarkan versi yang diuji saat itu, bukan jaminan terhadap perubahan setelahnya.

