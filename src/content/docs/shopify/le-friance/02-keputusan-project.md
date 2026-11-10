---
title: "Le Friance: Keputusan Project"
description: "Keputusan arsitektur, platform Shopify, data merchant, motion, dan validasi project. Dokumentasi Le Friance."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> **Catatan sumber:** `project-history-le-friance.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 3. Keputusan penting dan alasannya

| Keputusan akhir | Alasan / dampak maintenance |
| --- | --- |
| Tetap memakai official Skeleton | Foundation sudah ada; reinitialization dapat menimpa pekerjaan |
| Tidak menyalin Dawn/Horizon | Menjaga originalitas arsitektur dan arahan tema; rujukan perilaku tidak berarti izin menyalin kode |
| Shopify requirements mengungguli Figma | Desain harus diadaptasi ketika bertentangan dengan behavior platform, accessibility atau performance |
| Native Liquid/CSS/JS dan vendor lokal | Menjaga struktur tema, kontrol dependency, dan menghindari runtime CDN baru |
| Shopify font picker | Custom Open Sauce One pernah diminta, tetapi aturan proyek mengarahkan font dari library Shopify |
| Sections/blocks editable | Merchant dapat mengubah konten dan komposisi melalui Theme Editor |
| Data katalog nyata | Tidak membuat produk, variant, stok, review, atau swatch palsu demi meniru screenshot |
| Native sticky untuk scroll scenes | Menghindari pin wrapper/reparenting dan risiko lifecycle custom element |
| Satu pengelola smooth scroll | Lenis tidak diberi RAF tambahan dari GSAP; lock intro/modal/menu dibagi |
| Journal memakai activeIndex/realIndex | Reverse animation harus mengikuti slide aktif, bukan kembali ke default 02 |
| Footer motion homepage-only | Halaman lain langsung statis; manual gallery interaction tetap tersedia |
| Native recommendations diprioritaskan | Katalog fallback menjaga related cards tersedia tanpa mengarang relasi complementary |
| App compatibility melalui slot native | Tidak menjadikan app tertentu dependency wajib tema |
| Docs aktif singkat | Mengurangi pembacaan berulang dan konflik catatan; instruksi terbaru serta kode aktual menjadi acuan |
| Local pass dipisahkan dari live pass | Theme Check dan mock tests tidak membuktikan tampilan browser, checkout backend atau Theme Store approval |

