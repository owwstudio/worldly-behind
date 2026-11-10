---
title: "Le Friance: Implementasi Teknis"
description: "Peta file theme, lifecycle, motion, library lokal, commerce, dan pemeriksaan historis. Dokumentasi Le Friance."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> **Catatan sumber:** `project-history-le-friance.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 5. Implementasi teknis dan peta file

### 5.1 Struktur utama

| Area | File utama |
| --- | --- |
| Layout global | `layout/theme.liquid` |
| Theme settings | `config/settings_schema.json`, `config/settings_data.json` |
| CSS tokens | `snippets/css-variables.liquid`, `assets/foundation.css` |
| Header | `sections/header.liquid`, `sections/header-group.json`, `assets/header.css` |
| Hero/intro | `sections/hero-editorial.liquid`, `assets/hero-editorial.css`, `assets/hero-intro.js` |
| Material Story | `sections/material-story.liquid`, `assets/material-story.css`, `assets/material-story.js` |
| Collection Collage | `sections/collection-collage.liquid`, CSS/JS dengan nama sama |
| Featured Collections | `sections/featured-collections.liquid`, CSS/JS dengan nama sama |
| Journal | `sections/journal-stories.liquid`, CSS/JS dengan nama sama |
| Shared motion | `assets/theme-motion.js`, `assets/theme-motion.css`, vendor files |
| Footer | `sections/footer.liquid`, `sections/footer-group.json`, `assets/footer-editorial.css`, `assets/footer-reveal.js`, `assets/footer-gallery.js` |
| Product detail | `sections/main-product.liquid`, `assets/product-detail.css` dan komponen terkait |
| Product card | `snippets/product-card.liquid`, `snippets/price.liquid`, `assets/commerce.css` |
| Cart | `sections/main-cart.liquid`, `sections/cart-drawer.liquid`, `snippets/cart-content.liquid`, `assets/commerce.js` |
| Product recommendations | `sections/product-recommendations.liquid`, `assets/product-features.js`, `templates/product.json` |
| Filters | `snippets/catalog-filters.liquid`, `assets/theme-features.css` |
| Predictive search | `sections/predictive-search.liquid`, `assets/predictive-search.js` |
| App wrapper | `sections/apps.liquid` |
| Halaman pendukung | `assets/section-foundation.css` dan section `main-*` terkait |

Nama file aktual mengungguli nama yang disebut pada rencana lama. `blocks/container.liquid` adalah wrapper komposisi; keberadaannya bukan berarti semua custom section otomatis menerima app blocks.

### 5.2 Motion dan slider

- Swiper mengelola slider dan loop positions; GSAP mengelola komposisi/scroll animation.
- Journal mempertahankan gap 21px dan neighboring cards saat brown band mengecil ke center card.
- `realIndex`/activeIndex mengikuti item logis ketika Swiper melakukan reorder loop.
- Parent mutation observers Swiper dimatikan pada komponen terkait agar perubahan style animasi tidak terus memicu update.
- Gunakan lifecycle cleanup saat custom element disconnect, Theme Editor selection, dan preference change.
- Reduced motion dan static fallback tetap harus diperiksa ketika mengubah motion.
- Tinggi empat motion stages dibatasi berdasarkan lebar konten; background dapat full width.
- Hero intro dan footer reveal adalah mekanisme berbeda. Footer reveal tidak memakai SplitText lagi.

### 5.3 Cuplikan kode asli: gating footer homepage

**Salinan dari `sections/footer.liquid` saat penyusunan; bukan pseudocode.**

```liquid
{% liquid
  assign footer_reveal = false
  assign footer_autoplay = false
  if request.page_type == 'index'
    assign footer_reveal = section.settings.enable_scroll_reveal
    assign footer_autoplay = section.settings.gallery_autoplay
  endif
  assign media_blocks = section.blocks | where: 'type', 'media'
%}
```

Dengan gating ini, reveal dan autoplay footer hanya aktif di homepage, mengikuti settings merchant. Halaman lain tetap dapat memakai manual gallery interaction.

### 5.4 Cuplikan kode asli: modul Swiper

**Salinan lengkap `docs/vendor/swiper-entry.js` saat penyusunan.**

```javascript
// Build with Swiper 14.3.0 and esbuild; see motion-libraries.md.
import Swiper from 'swiper';
import { A11y, Autoplay, EffectFade, Navigation } from 'swiper/modules';
Swiper.use([A11y, Autoplay, EffectFade, Navigation]);
window.Swiper = Swiper;
```

Menambahkan opsi `autoplay` ke adapter saja tidak cukup jika modul tidak ada dalam bundle. Ketika vendor diubah, perbarui build entry, bundle readable, license, integrity/hash dan catatan ukuran.

### 5.5 Cuplikan kode asli: app wrapper

**Bagian markup asli `sections/apps.liquid`; schema tidak disalin di bawah.**

```liquid
<div class="apps-section color-{{ section.settings.color_scheme }}">
  <div class="{% if section.settings.constrain_width %}container {% endif %}{% if section.settings.add_spacing %}section-content{% endif %}">
    {% for block in section.blocks %}
      {% case block.type %}
        {% when '@app' %}
          {% render block %}
        {% when 'custom_liquid' %}
          <div {{ block.shopify_attributes }}>{{ block.settings.code }}</div>
      {% endcase %}
    {% endfor %}
  </div>
</div>
```

Schema menyediakan `@app`, preset, Custom Liquid, warna, width dan vertical spacing. Main product sudah memiliki slot `@app`. Tidak semua custom homepage section memiliki slot internal app. Featured product section belum ditemukan pada pemeriksaan sebelumnya; jangan menandainya selesai hanya karena main product mendukung app.

### 5.6 Cuplikan kode asli: pemilihan sumber recommendations

**Bagian asli `sections/product-recommendations.liquid` saat penyusunan.**

```liquid
{% liquid
  assign recommendation_source = 'empty'
  assign recommendation_products = recommendations.products
  if recommendations.performed? and recommendations.products_count > 0
    assign recommendation_source = 'native'
  elsif section.settings.fallback_products != blank
    assign recommendation_products = section.settings.fallback_products
    assign recommendation_source = 'selected'
  elsif section.settings.intent == 'related' and section.settings.use_catalog_fallback
    assign fallback_collection = section.settings.fallback_collection | default: collections.all
    assign recommendation_products = fallback_collection.products
    assign recommendation_source = 'fallback'
  endif
  assign scan_limit = section.settings.limit | plus: 1
  assign card_count = 0
%}
```

Native recommendations didahulukan. Jika kosong, merchant product list digunakan. Generic catalog fallback berlaku untuk related saja. Complementary harus berasal dari native assignment atau pilihan merchant. Empty catalog tidak menghasilkan kartu palsu.

### 5.7 Commerce dan global settings

- Color schemes ada di schema/data; warna diteruskan melalui CSS custom properties.
- Product blocks mendukung reorder/add/remove sesuai jenisnya; app block dan Custom Liquid tersedia di main product.
- Variant picker radio, quantity controls dan gallery mengikuti data produk.
- Native swatch diprioritaskan; category metafield `shopify.color-pattern` dipakai sebagai metadata warna.
- Cart panel adalah rendering section global; settings cart sudah berada di Theme settings. Memindahkan rendering menjadi setting saja tidak menggantikan section update mechanism.
- Order note menggunakan `name="note"` dan `cart.note`; autosave/accelerated flow masih perlu diperiksa.
- App installation dilakukan melalui Shopify Admin; wrapper tema tidak memasang app maupun membuktikan semua third-party app kompatibel.

