---
title: "Auralink: Keputusan Project"
description: "Keputusan arsitektur, platform Shopify, data merchant, motion, dan validasi project. Dokumentasi Auralink."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 3. Keputusan penting dan alasan

| Keputusan | Alasan / implikasi |
| --- | --- |
| Shopify compliance lebih tinggi dari desain | Theme Store requirements adalah hard gate; adaptasi Figma harus dilaporkan |
| Skeleton sebagai foundation | Persyaratan proyek melarang kode turunan tema lain |
| Local assets/libraries | Menghindari external script hosts dan menjaga kontrol dependency/license |
| Global liquid reveal | Menjaga konsistensi entrance dan menghindari efek berbeda per section |
| Controlled progress untuk Bento heading | One-shot RAF tidak dapat rewind bersama scroll timeline |
| Hapus hover Bento | Keputusan eksplisit pengguna setelah flicker; bukan sekadar menurunkan intensitas efek |
| Section putih + animated overlay | Bidang warna dapat benar-benar menyusut menjadi kotak tanpa kehilangan warna |
| Per-instance ownership | Duplicate/reorder/delete tidak boleh mengendalikan section tetangga |
| Satu GSAP clock untuk Lenis | Menghindari independent update clocks dan lapisan smoothing berulang |
| Coalesced refresh service | Mengurangi duplicate layout reconstruction dan gangguan saat scroll aktif |
| CLI 4.9.4 untuk audit tercatat | CLI lama tidak mencakup seluruh warning yang terlihat di IDE |
| Tidak menambah `name` ke `@app` | Shopify app block entry mendukung `type`; warning berasal dari duplicate validator |
| Native fallback | Mobile, reduced motion, editor, dan kegagalan dependency tetap harus menampilkan konten |
| Tidak menyamakan tes lokal dengan browser QA | Fixture tidak membuktikan painting, compositing, frame rate, atau checkout sebenarnya |

