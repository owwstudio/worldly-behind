---
title: "MAKA Studio: Keputusan Project"
description: "Keputusan layout, fidelity, arsitektur modular, kepemilikan animasi, dan reduced motion MAKA Studio."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> **Catatan sumber:** `project-history-maka.md`, disusun 10 November 2026. Status implementasi dan pengujian di sini merupakan catatan saat dokumentasi dibuat, bukan audit terbaru.

## 4. Keputusan penting dan alasannya

### Layout dan fidelity

- Semua section selebar 100%. `.layout-container` standar memakai max-width 1440px, padding-inline 32px, margin-inline auto, dengan border-box.
- Header adalah pengecualian full viewport. About juga disetujui full-width: label basis 359px, paragraf basis/max 911px, gap minimal 48px, dan `justify-content: space-between`.
- Tipografi desktop paragraf About: Inter normal 400, 56px, line-height 110%, letter-spacing -3.92px, warna #2A2A2A. Mobile memakai ukuran responsif.
- Komposisi akhir animasi harus kembali ke desain. Whitespace, foto asimetris, metadata kecil, wordmark besar, dan aksen merah dipertahankan.
- Mobile merupakan adaptasi; frame mobile Figma khusus belum tersedia dalam percakapan.

### Arsitektur dan motion

- Satu GSAP ticker menjadi sumber frame bersama. Lenis memakai `autoRaf: false`; tidak ditambah loop RAF terpisah untuk efek.
- Swiper memiliki transform track/slide. Morph foto memakai overlay sendiri; preloader dan scroll hero memakai wrapper berbeda untuk menghindari perebutan transform.
- Tidak memindahkan foto hero ke overlay preload: reparenting sebelumnya mengubah stacking dan menimbulkan blink pada wordmark.
- Refresh layout digabung melalui `requestRefresh()`. Hindari `ScrollTrigger.refresh()` pada setiap frame.
- Reduced motion memulihkan konten statis/native scroll. Efek dekoratif tidak boleh menjadi syarat membaca konten.
- Preset cursor tetap memakai `quality: 'low'` meskipun tautan revisi terakhir tidak mencantumkan quality; keputusan ini disebut dalam jawaban dan source.
- `colorSpeed` dipertahankan dari preset. Karena palette hanya satu warna dan rainbow false, parameter tersebut tidak menghasilkan pergantian warna secara visual.
- Link tanpa tujuan sah tidak direkayasa menjadi URL baru.

