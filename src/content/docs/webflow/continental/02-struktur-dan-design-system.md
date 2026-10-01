---
title: "Continental: Struktur Halaman dan Design System"
description: "Struktur halaman Continental, komponen Webflow, token visual, layout, breakpoint, dan aksesibilitas berdasarkan dokumentasi sumber."
sidebar:
  label: "Struktur dan Design System"
  order: 2
---

**Hasil website:** [Lihat website Continental](https://continentals.webflow.io/).

> **Dokumentasi Continental.** Sumber: `02-struktur-dan-design-system.md`.

[Kembali ke indeks](/webflow/continental/)

## Urutan halaman live

Satu-satunya halaman terdaftar adalah **Home**. Urutan section berikut diverifikasi dari markup situs live pada 1 Oktober 2026. Nama class di kolom terakhir berguna untuk mencari elemen di Webflow Designer.

| Urutan | Peran dan konten utama | Rujukan Figma | Class akar |
| --- | --- | --- | --- |
| 1. Hero | Gambar kemasan `header__bg`, H1 “Flavor Systems Designed with – Intention”, CTA arrow, label penunjang | [77:2062](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-2062&m=dev) | `.section__header` |
| 2. Brand/points rail | Label kategori produk dalam band gelap bergerak | [77:2206](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-2206&m=dev) | `.logo-loop` |
| 3. Quote | Statement “Every blend…”; lima pill navigasi; teaser kaleng yang memulai perjalanan scroll | [162:2495](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=162-2495&m=dev) | `.quote-section` |
| 4. Flavor System | Panel hitam, headline, dua-kaleng image, lima rasa/model 3D, daftar varian, Inside Continen, tabel nutrisi | [176:2576](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=176-2576&m=dev) | `.flavor-system-section` |
| 5. Product System | Statement desain produk, tag navigasi, visual tiga kaleng dan motion scroll | [169:2571](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=169-2571&m=dev) | `.product-system-section` |
| 6. Philosophy | Kolom copy–card kaleng–heading, band hitam, doctrine, dan topik | [169:2522](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=169-2522&m=dev) | `.philosophy-section` |
| 7. Footer | Brand, social, CTA, beberapa kolom link, wordmark, legal | [77:2423](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-2423&m=dev) | `.footer` |

Navbar berada di atas konten sebagai komponen global; preloader adalah lapisan penuh layar sebelum konten terlihat. Pada sebagian desain, nama “section points” digunakan untuk area setelah hero; di DOM live area label tersebut memakai class `.logo-loop`.

## Hierarchy dan pola layout

Prinsip dasar slicing adalah `section → .container → .*-content → blok konten`. Quote, Flavor System, dan Product System mengikuti struktur ini secara eksplisit. Hero membutuhkan lapisan visual/background tersendiri karena sticky dan overlay, sedangkan band Philosophy memakai elemen full-bleed yang sengaja melampaui lebar container. Jangan meratakan seluruh struktur menjadi satu wrapper; layer dan `z-index` adalah bagian dari koreografi scroll.

Ringkasan hierarchy:

```text
Navbar (reusable component)
Main
├─ Hero / .section__header
│  ├─ background image
│  └─ overlay: H1, arrow CTA, supporting labels
├─ Logo loop / points rail
├─ Quote / .container / .quote-content
│  ├─ eyebrow + heading
│  ├─ pill links
│  └─ bottom labels + transisi objek ke Flavor
├─ Flavor System / .container / .flavor-system-content
│  ├─ topline + image dua kaleng
│  └─ dark panel
│     ├─ intro, tags, lab meta
│     ├─ selector: product card/model + flavor list
│     ├─ inside: statement, volume, nutrition
│     └─ bottom rail
├─ Product System / .container / .product-system-content
│  ├─ meta + heading
│  └─ grid copy, tags, visual tiga kaleng
├─ Philosophy / .container
│  ├─ kicker
│  ├─ grid: copy, card, heading
│  ├─ full-bleed black band
│  └─ doctrine + topic navigation
└─ Footer (reusable component)
```

## Reusable component dan class dasar

Tiga komponen Webflow yang terdaftar pada site saat dokumentasi:

| Komponen | Group | Tanggung jawab |
| --- | --- | --- |
| Button Base | Foundation | CTA dasar berbasis `.button-base`, dipakai lagi sebagai varian pill/arrow sesuai class tambahan. |
| Navbar | — | Logo, wordmark, CTA; kontras logo/teks adaptif terhadap area terang/gelap. |
| Footer | Layout | Navigasi akhir, social, CTA, wordmark, legal; responsif. |

Class lintas-section yang perlu dipertahankan: `.section`, `.container`, `.button-base`, `.quote-pill`, serta class khusus setiap section. Sebelum membuat style baru, cari nama class/variable yang sudah ada di Designer; beberapa class juga menjadi selector script interaksi, sehingga rename tanpa pembaruan script dapat memutus animasi.

## Token visual yang terbaca pada CSS live

Ini adalah nilai CSS hasil publish, bukan daftar lengkap panel Webflow Variables. Periksa panel Variables untuk ID, mode, dan alias sebelum mengubahnya.

| Kategori | Nilai yang terverifikasi |
| --- | --- |
| Warna dasar | `--color--black: #000`, `--color--white: #fff`; tersedia opacity putih 12%, 16%, 40% |
| Font | `--font--family--body: Inter`; `--font--family--display: Interdisplay, Arial, sans-serif` |
| Skala spacing | `8, 12, 16, 20, 24, 32, 40, 56, 64, 96, 128px` |
| Radius | small `8px`, card `16px`, pill `999px` |
| Ukuran tipe token | label `12px`, body-small `14px`, body `16px`, body-large `20px`, brand `18px`, heading `32px`, hero `80px`, display `316px` |
| Line height token | solid `1`, heading `1.06`, display `1.2`, body `1.4` |
| Tracking token | tight `-0.02em` |

Contoh penerapan aktual: `.container` memiliki `width: 100%`, `max-width: 1680px`, dan padding inline `--space--8`. `.button-base` memakai latar hitam, teks putih uppercase, border hitam 1px, radius pill, dan font display. Heading quote dan Product System pada desktop publish bernilai `40px / 1.4`, weight `500`; hero H1 menggunakan `clamp(52px, 5.56vw, 80px)` dan warna putih agar terbaca di area gelap gambar. Nilai section-specific boleh berbeda dari token dasar bila disetel untuk komposisi Figma.

## Grid, container, dan breakpoint

- Container global maksimum `1680px`; section yang full-bleed (hero, brand rail, philosophy band) sengaja bisa melampaui batas ini.
- Flavor selector pada desktop berupa grid dua kolom: product card sekitar `252px` dan daftar `minmax(0, 1fr)`.
- Philosophy memakai grid tiga kolom desktop: kira-kira `minmax(217px, 316px)`, `minmax(280px, 316px)`, dan `minmax(360px, 1fr)`. Band hitam melebar `100vw` di belakang/silang card.
- CSS publish memiliki aturan responsive pada `max-width: 991px`, `767px`, dan `479px`; beberapa aturan khusus berlaku pada `min-width: 1440px`. Ini adalah breakpoint yang terlihat di output CSS, bukan jaminan semua viewport di antaranya sudah diuji ulang.
- Pada tablet/mobile, jaga urutan baca teks → produk → informasi pendukung, hindari overflow horizontal, dan jangan mengandalkan hover untuk memahami varian aktif. Motion kompleks perlu fallback yang mempertahankan konten meskipun 3D gagal memuat.

## Semantik dan aksesibilitas dasar

Home mempunyai satu H1 di hero; section utama memakai H2 dan `aria-labelledby`. Flavor list di markup live memberi `role="button"`, `tabindex="0"`, `aria-label`, serta `aria-pressed` untuk state varian. Ini harus tetap sinkron dengan model/count ketika logic diubah. Gambar dekoratif sebaiknya `alt=""`; kemasan yang menyampaikan produk perlu alt deskriptif. Pastikan CTA yang terlihat sebagai link berujung ke tujuan nyata sebelum kampanye publik.
