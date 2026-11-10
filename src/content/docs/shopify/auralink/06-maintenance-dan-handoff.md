---
title: "Auralink: Maintenance dan Handoff"
description: "Workflow maintenance, area rawan regresi, validasi, merchant editing, dan handoff release. Dokumentasi Auralink."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 7. Panduan maintenance dan handoff

### 7.1 Sebelum mengubah kode

1. Baca `AGENTS.md` terbaru dan instruksi lokal yang dirujuknya, termasuk `/Users/macbook-oww/.codex/RTK.md` bila tersedia.
2. Baca `docs/theme-standards.md`; lihat checklist untuk masalah yang sudah diketahui.
3. Periksa `git status`, branch dan origin; jangan menimpa perubahan pengguna.
4. Tentukan section instance dan stage yang bermasalah; bedakan load animation, scroll scrub, timed transition dan hover.
5. Untuk implementasi desain, ambil context, screenshot dan tokens dari Figma. Jika tidak tersedia, jelaskan keterbatasannya.
6. Verifikasi perubahan Liquid/schema/Shopify behavior melalui official docs sebelum coding.

### 7.2 Aturan animation ownership

- Satu owner untuk progress tiap effect; hindari menjalankan `play()` one-shot bersamaan dengan scrubbed render untuk elemen yang sama.
- Pisahkan transform milik entrance timeline dari hover transform pada child; Bento hover saat ini memang dihapus.
- Jangan menangkap translated/animated geometry sebagai baseline baru saat refresh.
- Jangan menambahkan independent Lenis RAF ketika GSAP ticker sudah menjadi clock.
- Hindari `ScrollTrigger.refresh()` berulang langsung dari setiap component; gunakan shared lifecycle service bila tersedia.
- Jangan memakai global event untuk mengontrol semua duplicate instances.
- Wajib cleanup ketika section di-unload; gunakan script guards untuk menghindari duplicate global listeners.
- Pertahankan native/static fallback untuk reduced motion, editor, mobile dan dependency failure.

### 7.3 Pemeriksaan regresi yang tersedia

Command berikut adalah **panduan maintenance**, bukan prompt atau command asli yang dijamin dijalankan pada tanggal dokumen ini.

```sh
node tests/asset-references.cjs
node tests/section-lifecycle.cjs
node tests/hero-instances.cjs
node tests/bento-instances.cjs
node tests/impact-motion.cjs
node tests/mobile-components.cjs
node tests/scroll-integration.cjs
node --check assets/auralink-bento-motion.js
git diff --check
shopify theme check --fail-level warning --output json
```

Pastikan versi `shopify` yang aktif sesuai versi check task proyek. Audit historis memakai CLI 4.9.4; global CLI lama sempat melewatkan warnings. Sebelum upgrade checker/dependency, review official release behavior dan ulangi relevant tests.

### 7.4 Matrix browser QA

| Skenario | Yang diperiksa |
| --- | --- |
| First load, slow asset loading | Konten tidak permanen hidden, radio sequence tidak blink, shadow timing |
| Scroll turun dan naik berulang | Heading/counter/overlay/slider reverse tanpa duplicate reveal |
| Resize di tengah dan akhir animasi | Baseline tidak rusak, playhead dan layout pulih |
| Two identical sections | Tidak berbagi state, event atau cleanup |
| Section reordered/deleted | Trigger positions mengikuti DOM, navbar ownership tidak tertinggal |
| Slider diganti lalu reverse | Fullscreen memakai center slide terkini |
| Search/cart/menu terbuka | Background scroll terkunci, nested scroll dan close/focus berfungsi |
| Mobile/touch/reduced motion | Native scroll, readable content, tidak overflow horizontal |
| Footer dengan content panjang | Dapat mencapai bagian paling bawah setelah images/fonts loaded |
| Theme Editor | Add/remove/reorder/settings update aman, cinematic fallback tetap readable |

### 7.5 Handoff release

- Catat commit SHA, branch, checker version, dan command hasil tes.
- Perbarui checklist hanya untuk item yang benar-benar diverifikasi.
- Lampirkan screenshot desktop/mobile dan catatan viewport.
- Pisahkan known issue, requested behavior, implemented behavior dan deployed behavior.
- Jangan menyebut seluruh proyek “bersih” berdasarkan satu checker atau fixture.
- Jangan publish/push berdasarkan permintaan historis saja; ikuti instruksi release aktif dari pengguna.
- Pertahankan routes, localization, responsive images, native Shopify controls dan section group integration.
- Hindari hard-coded merchant content, external script hosts, unlicensed assets, dan fake social proof.

