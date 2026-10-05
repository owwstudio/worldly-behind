---
title: "Aethere: Implementasi Teknis"
description: "Arsitektur theme Aethere, section, snippet, font, product catalog, cart, motion, dan aksesibilitas."
sidebar:
  label: "Implementasi Teknis"
  order: 3
---

> **Dokumentasi Aethere.** Sumber: `03-technical-implementation.md`.

## 1. Arsitektur

Theme memakai struktur Shopify Online Store 2.0 dan tetap berbasis Dawn:

- `layout/theme.liquid` memuat token global, font, global scripts, cart assets, dan homepage motion dependencies.
- `templates/index.json` menyusun urutan homepage.
- `sections/` menyimpan UI dan schema Theme Editor.
- `snippets/` menyimpan unit reusable seperti product card, cart icon, wordmark, preloader, dan drawer.
- `assets/` menyimpan font, image, SVG, CSS/JS Dawn, serta motion modules Aethere.

Urutan homepage saat ini:

1. `aethere-hero`
2. `aethere-points`
3. `aethere-about`
4. `aethere-products`
5. `aethere-ingredients`
6. `aethere-testimonials`
7. footer group

## 2. Typography

Font dideklarasikan di `layout/theme.liquid` menggunakan Shopify `asset_url`.

Token utama:

```css
--font-body-family: 'Neue Haas Unica Pro', Arial, sans-serif;
--font-heading-family: 'Neue Haas Unica Pro', Arial, sans-serif;
--font-accent-family: 'Denton Condensed Test', Georgia, serif;
```

File font harus berada langsung di `assets/`. Jangan membuat referensi seperti `assets/fonts/font.ttf` karena asset Shopify dipanggil berdasarkan nama file dalam asset pipeline.

## 3. Global layout

`layout/theme.liquid` memberi section langsung di dalam `#MainContent`:

- width 100%;
- max-width 1440px;
- margin inline auto;
- overflow terkontrol.

Section tetap memiliki padding internal masing-masing untuk desktop/tablet/mobile.

## 4. Header dan navigation

File utama:

- `sections/header.liquid`
- `snippets/header-drawer.liquid`
- `snippets/aethere-cart-icon.liquid`
- `snippets/aethere-wordmark.liquid`
- `snippets/header-search.liquid`
- `snippets/cart-drawer.liquid`

Fungsi Dawn yang dipertahankan:

- Shopify navigation linklist;
- nested navigation;
- search/predictive search;
- account link;
- cart count;
- keyboard focus;
- ARIA state;
- body scroll locking dan drawer lifecycle.

Perubahan Aethere:

- menu drawer fullscreen;
- panel putih dengan blurred backdrop;
- hamburger tiga span berubah menjadi X;
- utility menu/search/account/social links;
- mini cart mengikuti bahasa visual menu;
- cart label berubah menjadi CLOSE ketika drawer terbuka;
- header fixed/sticky sesuai homepage settings;
- micro echo pada MENU/CART label.

## 5. Hero dan preloader

File:

- `sections/aethere-hero.liquid`
- `snippets/aethere-preloader.liquid`
- `assets/aethere-hero-motion.js`
- `assets/gsap.min.js`

Preloader hanya digunakan di homepage. Huruf Aethere:

1. dimulai dari posisi terpisah;
2. mengorbit tanpa berputar pada poros sendiri;
3. menyatu menjadi wordmark;
4. bergerak menuju logo navbar;
5. background putih fade keluar.

Hero menggunakan sticky layering dan overlay gelap ketika section lain melintas di atasnya. Padding hero berubah dari framed state menjadi 0 saat scroll ke bawah dan kembali saat arah scroll berbalik.

## 6. Points

File:

- `sections/aethere-points.liquid`
- `assets/aethere-points-motion.js`

Desktop memakai reveal/focus interaction. Mobile memakai stack vertikal, bukan horizontal carousel.

## 7. About

File:

- `sections/aethere-about.liquid`
- `assets/aethere-about-motion.js`

Fitur:

- rich text untuk heading/description/caption;
- heading dipecah per kata untuk reveal;
- image dan orbit pointer parallax;
- padding vertikal responsive;
- CTA link memakai underline collapse, character scatter, dan glow;
- focus-visible tetap menggunakan outline yang jelas.

## 8. Product catalog

File:

- `sections/aethere-products.liquid`
- `snippets/aethere-product-card.liquid`
- `assets/aethere-product-catalog.js`
- `assets/aethere-cart-button-motion.js`
- `assets/aethere-interactions.css`
- `assets/aethere-interactions.js`
- `assets/product-form.js`

### Data flow

1. Merchant memilih collection pada setting section.
2. Liquid melakukan loop atas `collection.products`.
3. Setiap produk dirender melalui `aethere-product-card`.
4. Card menyimpan normalized data untuk category dan live search.
5. JavaScript hanya memfilter card yang sudah dirender; tidak membuat sumber data baru.

Fallback product blocks tetap tersedia ketika collection belum dipilih. Fallback ditujukan untuk preview/design, bukan production catalog.

### Search dan filter

- Search memakai title, description, category/type, vendor, dan tags.
- Filter category menggunakan `product.type`.
- Update diberi debounce.
- Loader Aethere ditampilkan selama update visual.
- Empty state dan live status diperbarui.

### Badge

Best Seller menggunakan product tag. Nilai default setting adalah `best-seller`. Pencocokan tag mengikuti nilai exact pada section setting.

### Add to Cart

- Single-variant product memakai Dawn product form.
- Multi-variant product menampilkan Choose Options dan menuju product detail.
- Loading label dapat diubah melalui setting `button_loading_label`, default `WAIT`.
- Loading animation mengikuti request sebenarnya.
- Success menampilkan transfer dot menuju cart dan state Added.
- Error menampilkan motion error tanpa memalsukan success.

## 9. Ingredients

File:

- `sections/aethere-ingredients.liquid`
- `assets/aethere-ingredients-motion.js`

Scene tidak dibuat sticky penuh. Sebagai gantinya:

- background, main bottle, dan callout bergerak dengan depth berbeda;
- heading reveal per kata;
- callout masuk stagger;
- pointer hover memfokuskan satu ingredient dan meredupkan lainnya;
- product card memiliki image lift dan arrow motion;
- mobile tidak menjalankan pointer parallax.

## 10. Testimonials

File:

- `sections/aethere-testimonials.liquid`
- `assets/aethere-testimonials.js`

Custom element `aethere-testimonials` mengatur:

- active slide;
- next preview;
- dots;
- next/previous actions;
- arrow-key navigation;
- Shopify block selection dalam Theme Editor;
- `aria-hidden`, `aria-current`, dan live status.

Motion menggunakan directional handoff. Previous dan next memiliki arah berbeda. Quote dipecah per kata, image memakai counter-motion, preview icon hanya bergeser ke kanan, dan previous control bergerak ke arah atas.

## 11. Footer

File:

- `sections/footer.liquid`
- `assets/aethere-footer-motion.js`
- `snippets/social-icons.liquid`

Newsletter tetap memakai `{% form 'customer' %}` milik Shopify.

Footer menu hover memakai:

- translate horizontal kecil;
- diamond indicator;
- underline dari tengah.

Scroll motion membaca posisi footer dengan `requestAnimationFrame` dan menginterpolasi outer padding:

- desktop: 14px → 0;
- mobile: 8px → 0.

Ketika user scroll menjauh, padding kembali. Pada reduced motion, padding tetap pada nilai default.

## 12. Motion dan accessibility

Semua motion module utama memeriksa:

```js
window.matchMedia('(prefers-reduced-motion: reduce)')
```

Prinsip implementasi:

- motion adalah progressive enhancement;
- konten tetap dirender server-side;
- screen reader memakai text asli/`aria-label`, bukan decorative split letters;
- decorative letters memakai `aria-hidden="true"`;
- keyboard focus tidak bergantung pada hover;
- interaction desktop yang membutuhkan pointer dinonaktifkan pada touch/mobile;
- listener dibersihkan saat Shopify section unload.

## 13. Asset motion map

| Asset | Tanggung jawab |
|---|---|
| `aethere-hero-motion.js` | Preloader, hero scroll state, sticky overlay, padding direction |
| `aethere-points-motion.js` | Points reveal dan focus |
| `aethere-about-motion.js` | About reveal, parallax, CTA letter motion |
| `aethere-product-catalog.js` | Search, filter, result loader/reveal |
| `aethere-cart-button-motion.js` | Add to Cart loading/success/error/transfer dot |
| `aethere-interactions.js` | Product-scoped reusable hover interaction |
| `aethere-ingredients-motion.js` | Ingredients depth, reveal, callout focus |
| `aethere-testimonials.js` | Carousel state, accessibility, directional transition |
| `aethere-footer-motion.js` | Scroll-driven footer padding |

