---
title: "Auralink: Implementasi Teknis"
description: "Peta file theme, lifecycle, motion, library lokal, commerce, dan pemeriksaan historis. Dokumentasi Auralink."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 5. Implementasi teknis yang tercatat

### 5.1 Peta file utama

| File/area | Tanggung jawab |
| --- | --- |
| `sections/auralink-hero.liquid` | Hero radio dan content/settings section |
| `sections/header.liquid` | Header/navbar dan integrasi native controls |
| `assets/auralink-hero-scroll.js` | Hero scroll behavior; keberadaannya pernah dikonfirmasi walaupun IDE menunjukkan dugaan missing asset |
| `assets/auralink-bento-motion.js` | Bento stage sequence, counters, controlled reveals, per-instance cleanup |
| `assets/section-auralink-bento.css` | Bento layout, static image treatment; hover akhirnya dihapus |
| `sections/auralink-impact.liquid` | Impact content dan merchant configuration |
| `assets/auralink-cta-motion.js` | CTA animation; nama terlihat dalam source/diagnostic screenshot |
| `assets/section-auralink-cta.css` | CTA layout/motion styles |
| `assets/auralink-section-lifecycle.js` | Shared loading, DOM-order refresh dan section lifecycle |
| `assets/auralink-smooth-scroll.js` | Lenis initialization, GSAP clock, resize/lock handling |
| `layout/theme.liquid` | Shared script loading; section lifecycle dimuat sebelum smooth scroll |
| `snippets/facets-mobile.liquid` | Mobile facets drawer hasil extraction |
| `.theme-check.yml` | Theme Check configuration; MatchingTranslations diaktifkan |
| `.vscode/` | Extension recommendation, duplicate-validator setting dan pinned check task |
| `docs/theme-standards.md` | Coding, accessibility dan performance rules |
| `docs/theme-store-checklist.md` | Bukti verifikasi serta pekerjaan yang masih pending |
| `docs/scroll-responsive-audit.md` | Scope dan matrix pemeriksaan scroll/responsive yang tercatat |

Peta ini berasal dari riwayat pengerjaan. Tim tetap perlu membuka file terbaru sebelum mengedit karena repository dapat berubah setelah audit.

### 5.2 Shared lifecycle dan loader

Implementasi yang dilaporkan:

- Refresh priorities dihitung dari urutan section di DOM, bukan urutan hard-coded.
- `load`, `unload`, `reorder`, image/font load dan resize dikoordinasikan.
- Shared local library loader melakukan deduplication, timeout 8 detik, retry dan fallback.
- Bootstrap editor hanya memuat known component scripts yang belum terdaftar.
- Duplicate hero tidak mengeksekusi ulang global GSAP/ScrollTrigger libraries.
- Radio events milik root masing-masing; section lain tidak menunggu global radio state.
- Radio di bawah fold menunggu visibility sebelum cinematic intro.
- Hanya hero pertama pada posisi awal halaman yang memiliki kontrol terhadap navbar hero.
- Unload membersihkan timers, observers, listeners, animation resources dan controlled reveals.

Cinematic pinning sengaja memakai readable/static fallback pada mobile, reduced motion, dan Theme Editor sesuai implementasi yang tercatat. Merchant editor content harus tetap dapat dilihat walaupun animasi cinematic tidak dijalankan.

### 5.3 Lenis dan ScrollTrigger

Sumber masalah yang ditemukan adalah gabungan independent clocks, redundant refresh, dan resize yang mereset scroll target.

Perubahan yang tercatat:

- Lenis `autoRaf: false`, `autoResize: false`, `lerp: 0.1`.
- Satu prioritized GSAP ticker callback; waktu detik dikonversi menjadi milidetik.
- `lagSmoothing(0)` mengikuti official Lenis/GSAP integration.
- Native RAF fallback berjalan hanya sebelum GSAP tersedia, kemudian dibatalkan.
- Time origin direset ketika berganti clock.
- ScrollTrigger memakai direct scrub saat Lenis aktif agar tidak menambah smoothing layer kedua.
- Dimensions dibandingkan sebelum public `resize()` dipanggil.
- Saat content height bertambah, outstanding wheel destination dipertahankan dengan opsi bundled Lenis yang sesuai.
- Lock status dicache setelah perubahan class/style/viewport, bukan dihitung ulang untuk setiap wheel event.
- Shared service menunda full refresh selama scrolling aktif dan menggabungkan permintaan setelah idle.
- Scroll limit memakai full document termasuk footer; tidak menggunakan transformed body atau fixed-height content wrapper.
- Ordinary radio wheel meneruskan page scroll; Alt-wheel dipakai untuk zoom.

Pengurangan DPR radio ke 1.5 desktop/1.25 coarse pointer juga tercatat sebagai performance tradeoff; kualitas raster bisa sedikit berkurang. Lighthouse setelah patch belum diukur.

### 5.4 Bento reversible reveal dan refresh

One-shot `headingPlayed` dihapus. Heading serta subtitle memakai `AuraLinkLiquidReveal.createControlled`, lalu progress dirender melalui GSAP timeline yang sama dengan perpindahan heading.

Timing yang tercatat pada patch terakhir:

- Heading reveal duration 0.85 timeline units.
- Subtitle offset 0.08.
- Heading centered-to-top dimulai pada 0.25 dengan duration 0.9.
- Stat card mulai muncul pada 1.05; counter 0–99 dimulai sekitar 1.1.
- Pair/stacked stage sekitar 2.1; final composition sekitar 3.4.

Angka tersebut adalah timeline units, bukan durasi wall-clock tetap ketika scrubbed oleh scroll. Mengubah satu stage dapat memengaruhi keseluruhan feel dan perlu reverse/refresh test.

Refresh corruption sebelumnya terjadi karena translated state ditangkap ulang sebagai initial state. Perbaikan: simpan playhead, rewind, measure/reinitialize, lalu restore playhead. Prinsip yang sama diterapkan pada Impact; fixed 0–1 scroll driver tidak boleh sembarangan di-invalidate sehingga endpoint berubah menjadi current progress.

### 5.5 Assets dan diagnostics

Perbaikan asset yang tercatat:

- `icon-error` menjadi `icon-error.svg` di password header.
- Dua referensi `icon-3d-model` menjadi `icon-3d-model.svg` di product media.
- Fallback asset filenames dibatasi melalui schema select dan validasi Liquid.
- Custom `image_picker` tetap menjadi sumber prioritas.
- Unknown legacy fallback tidak menghasilkan URL asset yang tidak ada; gunakan fallback yang valid, omit optional image, atau static content sesuai component.

Audit warning mencatat:

- Mobile facets drawer diekstrak dengan parameter eksplisit.
- Placeholder product lookups disederhanakan; production product path dipertahankan.
- `icon-cart-aura.liquid` dan `quick-order-product-row.liquid` dihapus setelah dinyatakan unreferenced pada audit tersebut.
- 76 missing schema translations diperbaiki pada 19 locale files.
- Obsolete `TemplateLength` configuration dihapus.
- `@app` entry tetap type-only; tidak ditambahkan `name` demi memuaskan validator yang salah.
- `.vscode/settings.json` menonaktifkan duplicate schema validation milik Sissel, sementara official Shopify validation tetap aktif.

### 5.6 Regression tests dan bukti historis

| Test | Scope yang tercatat |
| --- | --- |
| `tests/asset-references.cjs` | Literal/dynamic asset dan snippet references; block/app schema invariants |
| `tests/section-lifecycle.cjs` | Reorder, duplicate, delete, first insertion, loader dedup/failure/retry, coalesced refresh |
| `tests/hero-instances.cjs` | Hero isolation, empty text, navbar/radio ownership, unload/editor insertion |
| `tests/bento-instances.cjs` | Duplicate instances, optional structure, refresh/reverse, counter, reversible heading/subtitle, cleanup |
| `tests/impact-motion.cjs` | Timeline stages, repeated refresh, reverse, resize, counters, cleanup |
| `tests/mobile-components.cjs` | Zero/one slide, invalid index safety, reconnect dan component lifecycle |
| `tests/scroll-integration.cjs` | Actual bundled Lenis, inertia, single clock, footer limits, lock/native/BFCache behavior |

Audit sebelumnya melaporkan 496 literal asset references, 164 snippet references, dan 143 selected/generated asset names tanpa missing references. Angka tersebut adalah snapshot, bukan jumlah yang dijamin tetap.

Audit syntax sebelumnya mencakup 59 JavaScript/test files, 76 CSS assets, dan 111 JSON/schema documents. Render comparison sementara menggunakan LiquidJS melaporkan 163 equivalent cases setelah whitespace normalization. Ini bukan bukti Shopify server rendering atau checkout end-to-end.

Theme Check CLI 4.9.4 dengan fail level warning terakhir dilaporkan menghasilkan `[]`. Jangan memakai hasil tersebut sebagai pengganti check setelah perubahan baru.

