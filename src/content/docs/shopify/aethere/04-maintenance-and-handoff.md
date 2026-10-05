---
title: "Aethere: Maintenance dan Handoff"
description: "Panduan perawatan Aethere melalui Theme Editor, produk, collection, font, motion, Theme Check, dan checklist deployment."
sidebar:
  label: "Maintenance dan Handoff"
  order: 4
---

> **Dokumentasi Aethere.** Sumber: `04-maintenance-and-handoff.md`.

## 1. Menjalankan theme secara lokal

Theme lokal tidak memiliki Shopify Admin sendiri. Local preview terhubung ke development store atau store yang dipilih melalui Shopify CLI.

Alur umum:

```bash
shopify theme dev --store your-store.myshopify.com
```

Gunakan browser preview yang diberikan Shopify CLI. Data produk, collection, menu, dan policy tetap berasal dari store tersebut.

## 2. Menambahkan produk

Produk tidak ditambahkan melalui file theme.

Tambahkan produk melalui:

- Shopify Admin → Products;
- Shopify Admin API;
- import CSV;
- aplikasi Shopify yang memiliki izin product write.

Setelah produk dibuat:

1. pastikan produk aktif pada Online Store sales channel;
2. masukkan ke collection yang digunakan Aethere Products;
3. isi product type untuk category filter;
4. tambahkan tag `best-seller` jika badge diperlukan;
5. tambahkan featured image;
6. tambahkan short description metafield bila tersedia, atau description biasa sebagai fallback.

## 3. Menghubungkan collection

Di Shopify Theme Editor:

1. buka homepage;
2. pilih section **Aethere products**;
3. pilih **Product collection**;
4. atur **Products to show**;
5. simpan.

Search dan filter otomatis mengikuti produk yang di-loop dari collection tersebut.

## 4. Badge Best Seller

Gunakan tag, bukan checkbox theme:

```text
best-seller
```

Nama tag yang dicari dapat diubah melalui setting **Best seller product tag** pada section. Tag harus cocok dengan nilai setting.

## 5. Mengubah loading Add to Cart

Di setting Aethere Products, ubah **Add to cart loading label**.

Contoh:

- `WAIT`
- `LOADING`
- `ADDING`

JavaScript membagi label menjadi huruf dekoratif secara otomatis. Label accessibility pada button utama tetap berasal dari product form.

## 6. Mengelola konten Theme Editor

Konten berikut telah dibuat editable:

- hero heading dan copy;
- points content;
- About rich text, description, image, caption, CTA;
- Products search placeholder/label, collection, badge tag, loading label, empty state;
- Ingredients heading, image, callouts, featured product/fallback;
- Testimonials image, quote, author, preview;
- Footer heading, contact, menu blocks, social links, newsletter text, policy links.

Rich text digunakan ketika bagian italic perlu diatur dalam satu field. Jangan kembali memecah sentence menjadi terlalu banyak input kecuali layout memang memerlukan struktur berbeda.

## 7. Mengganti font

1. Taruh file font langsung di `assets/`.
2. Tambahkan atau ubah deklarasi `@font-face` di `layout/theme.liquid`.
3. Gunakan `asset_url`, bukan path file relatif.
4. Perbarui token `--font-body-family`, `--font-heading-family`, atau `--font-accent-family`.
5. Uji italic, font weight, dan fallback.

Jangan menyimpan font hanya di `assets/fonts/` lalu mengharapkan URL nested biasa bekerja di Shopify theme pipeline.

## 8. Mengubah motion

Setiap section memiliki motion asset sendiri. Hindari menambahkan semua behavior ke satu global file.

Saat menambah motion:

1. scope selector ke section;
2. gunakan `requestAnimationFrame` untuk scroll/pointer update;
3. gunakan passive scroll listener;
4. bersihkan listener saat `shopify:section:unload`;
5. hormati `prefers-reduced-motion`;
6. jangan mengubah state commerce hanya untuk keperluan visual;
7. jangan memakai autoplay agresif pada testimonial;
8. uji mouse, touch, keyboard, dan Theme Editor.

## 9. Responsive checklist

Periksa minimal pada:

- 1440px dan lebih lebar;
- 1280px;
- 990px breakpoint;
- 750px breakpoint;
- 390px/375px mobile.

Area penting:

- wordmark tetap center;
- MENU/CART tidak bertabrakan;
- fullscreen menu dapat discroll;
- cart drawer tidak menutup control penting;
- points menjadi vertical stack di mobile;
- product grid memiliki 16px edge padding;
- filter dapat digunakan ketika label panjang;
- testimonial next preview hidden di mobile;
- ingredients callout tidak overflow;
- footer newsletter tetap usable;
- footer padding scroll kembali saat user scroll naik.

## 10. Commerce regression checklist

Sebelum deploy, uji:

1. navigation link dan nested menu;
2. menu open/close dengan mouse dan keyboard;
3. search submit dan predictive search bila aktif;
4. account link;
5. cart drawer open/close;
6. Add to Cart single variant;
7. Choose Options multi variant;
8. sold-out state;
9. cart count setelah add/remove;
10. live search dan filter bersamaan;
11. product link membuka produk yang benar;
12. newsletter success/error state;
13. Shopify Theme Editor block select pada testimonials;
14. reduced-motion mode.

## 11. Theme Check

Jalankan:

```bash
shopify theme check
```

Pada akhir pengembangan, Theme Check berhasil tanpa error. Terdapat 8 warning lama Dawn pada 7 file:

- `layout/password.liquid`: `UndefinedObject` untuk `scheme_classes`;
- `layout/theme.liquid`: `UndefinedObject` untuk `scheme_classes`;
- `sections/main-article.liquid`: `VariableName` untuk `anchorId`;
- `sections/main-list-collections.liquid`: `VariableName` untuk `moduloResult`;
- `sections/main-product.liquid`: `UnusedAssign` untuk `seo_media`;
- `sections/main-product.liquid`: `UndefinedObject` untuk `continue`;
- `sections/main-search.liquid`: `UnusedAssign` untuk `product_settings`;
- `snippets/quick-order-product-row.liquid`: `OrphanedSnippet`.

Warning tersebut bukan berasal dari section Aethere yang dibangun pada proyek ini. Tetap evaluasi kembali jika Dawn di-upgrade.

## 12. Deployment checklist

- Backup/publish ke unpublished theme terlebih dahulu.
- Pastikan seluruh asset font/image ikut ter-upload.
- Pilih menu, collection, product, dan policy link pada Theme Editor.
- Pastikan featured product default Dawn disembunyikan bila tidak digunakan.
- Jalankan Theme Check.
- Preview desktop/mobile.
- Uji cart dan checkout handoff.
- Periksa console browser untuk error asset/JavaScript.
- Publish hanya setelah theme settings tersimpan dan produk live benar.

## 13. Known design decisions

- Hero sticky; Ingredients tidak sticky penuh.
- Navbar tetap fixed untuk menjaga akses utility saat layering.
- Filter active state stabil, tidak looping animation.
- Product badge memakai tag.
- Product catalog memakai collection loop.
- Next-slide preview testimonials disembunyikan di mobile.
- Global hover eksperimen dibatalkan; interaction discope berdasarkan section/fungsi.
- Motion dibuat eksperimental tetapi tidak boleh memperlambat jalur belanja.

