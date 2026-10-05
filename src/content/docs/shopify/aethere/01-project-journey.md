---
title: "Aethere: Perjalanan Proyek"
description: "Perjalanan pengembangan Aethere dari Shopify Dawn, implementasi desain Figma dan data produk hingga revisi responsif dan motion."
sidebar:
  label: "Perjalanan Proyek"
  order: 1
---

> **Dokumentasi Aethere.** Sumber: `01-project-journey.md`.

## 1. Titik awal

Proyek dimulai dari Shopify Dawn, dengan tujuan mengubah homepage menjadi pengalaman Aethere yang mengikuti desain Figma tanpa kehilangan kemampuan commerce bawaan Shopify.

Permintaan awal adalah menganalisis desain Figma tanpa mengubah workspace. Setelah arah visual dipahami, lingkup berubah menjadi implementasi bertahap. Pendekatan yang dipilih sejak awal adalah:

- mempertahankan fungsi Dawn yang sudah teruji;
- mengganti lapisan visual sesuai Figma;
- mengisolasi fitur baru dalam section, snippet, dan asset Aethere;
- menghindari perubahan file yang tidak berhubungan;
- menguji dengan Theme Check setelah implementasi.

Referensi Figma utama:

- [Homepage/header/hero/points — node `2:3`](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=2-3&m=dev).
- [Footer — node `33:10`](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=33-10&m=dev).
- [About — node `37:96`](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=37-96&m=dev).
- [Ingredients — node `40:164`](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=40-164&m=dev).
- [Product catalog — node `43:340`](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=43-340&m=dev).

## 2. Fondasi homepage: header, hero, dan points

Tahap pertama membangun top navigation, navbar, hero, dan points. Dawn tetap menjadi fondasi untuk navigation menu, account, search, cart, dan accessibility. Visual header diubah menjadi bahasa Aethere melalui wordmark, layout utility, spacing, dan asset icon khusus.

Hero dan points dibuat sebagai Shopify sections agar merchant dapat mengubah teks dan konten melalui Theme Editor. Seiring revisi, section utama diberi batas maksimum 1440px agar layout tidak melebar tanpa kontrol pada monitor besar.

Pada mobile, points awalnya horizontal-scroll. Setelah evaluasi, pola tersebut diubah menjadi susunan vertikal agar pembacaan lebih natural dan tidak bersaing dengan gesture halaman.

## 3. Footer dan responsive navigation

Footer dibuat dari desain yang belum sepenuhnya menggunakan auto layout. Struktur dirapikan memakai CSS Grid/Flexbox, kemudian dibuat responsive. Newsletter tetap menggunakan Shopify newsletter form agar submission dan feedback bawaan tetap berfungsi.

Navigasi mobile dan desktop kemudian direvisi menjadi fullscreen menu. Hamburger bukan lagi sidebar standar; menu muncul sebagai panel putih dengan backdrop blur. Icon menggunakan tiga `span` dan berubah menjadi X secara smooth. Beberapa iterasi diperlukan untuk memperbaiki ketebalan line, gap icon terhadap label CLOSE, intensitas blur, dan utility search.

Social links dari desain juga ditambahkan ke menu/footer dengan data yang dapat dikelola melalui settings.

## 4. About dan sistem typography

Section About dibangun mengikuti node Figma dan dibuat responsive. Setelah section berjalan, ditemukan bahwa typography proyek belum konsisten dengan desain. Font lokal kemudian diintegrasikan melalui `@font-face`:

- Neue Haas Unica Pro untuk body dan heading utama;
- Denton Condensed Test untuk aksen italic/editorial.

Font awalnya ditempatkan dalam subfolder `assets/fonts`, yang menyebabkan preview error karena Shopify theme assets tidak mendukung pemanggilan nested asset dengan cara yang sama seperti web project biasa. File font akhirnya diletakkan langsung di `assets/` dan direferensikan menggunakan `asset_url`.

Input konten juga disederhanakan secara bertahap:

- wordmark primary dan italic digabung menjadi rich text;
- heading hero digabung menjadi rich text;
- eyebrow, heading, dan description About memakai rich text sesuai kebutuhan;
- image caption opening dan bagian italic dikembalikan setelah sempat terlewat.

## 5. Ingredients, testimonials, dan product catalog

Ingredients dibangun sebagai scene editorial dengan background, produk utama, tiga ingredient callout, dan featured product card. Link produk hanya ditempatkan pada button arrow, bukan membungkus seluruh card.

Testimonials dibangun sebagai carousel yang terdiri dari:

- satu slide utama;
- satu preview untuk slide berikutnya;
- dots;
- next/previous controls;
- status live untuk accessibility.

Karena desain hanya menyediakan satu contoh, data dummy dibuat untuk menguji carousel. Di mobile, preview next slide disembunyikan dan tinggi image dikurangi.

Product catalog dimulai dari dummy cards, lalu berevolusi menjadi collection-driven loop. Keputusan ini penting karena menghindari merchant menyambungkan produk satu per satu. Section sekarang membaca Shopify collection, membuat card melalui snippet reusable, dan menggunakan data hasil loop untuk:

- live search;
- category filter;
- badge Best Seller;
- product URL;
- harga, title, image, type, vendor, tags, dan short description.

Badge Best Seller diputuskan memakai product tag `best-seller`, bukan metafield boolean. Alasannya: lebih cepat dikelola secara massal, mudah difilter, dan tidak membutuhkan definisi metafield tambahan.

## 6. Penyempurnaan commerce

Beberapa revisi menjaga pengalaman belanja tetap benar:

- product card tidak dibungkus satu link besar;
- hanya image/title/arrow yang menjadi link sesuai konteks;
- Add to Cart memakai Dawn `product-form` dan endpoint cart bawaan;
- produk dengan beberapa variant menggunakan Choose Options;
- cart icon membuka mini cart/drawer;
- ketika cart drawer terbuka, label CART berubah menjadi CLOSE dan icon menjadi X;
- loading button disambungkan ke lifecycle request Add to Cart, bukan timer palsu;
- setelah berhasil, dot bergerak menuju cart lalu cart drawer diperbarui;
- error state tetap memiliki feedback.

Produk Shopify tidak dibuat dari theme code. Data produk harus dibuat melalui Shopify Admin atau API yang memiliki otorisasi store. Local theme preview hanya menampilkan data dari store development yang sedang dihubungkan Shopify CLI.

## 7. Eksperimen preloader dan hero

Setelah visual statis selesai, proyek masuk ke tahap motion. GSAP ditambahkan secara lokal dan preloader dibuat sebagai eksperimen utama.

Preloader melalui beberapa iterasi:

1. Text `Aethere` looping sederhana.
2. Huruf terpisah kemudian menyatu di tengah.
3. Huruf acak mengorbit, bergerak lebih cepat, lalu berkumpul.
4. Blur dikurangi agar tidak terasa seperti layer menghilang ke atas.
5. Huruf tidak berotasi pada porosnya; hanya orbit yang bergerak.
6. Setelah menyatu, wordmark bergerak menuju posisi logo navbar.
7. Background diubah menjadi putih dan menghilang melalui fade perlahan.

Interaksi hero setelah preloader sempat diuji dengan beberapa efek. Karena hasilnya terasa terlalu ramai, motion background hero dikembalikan ke versi yang lebih tenang. Keputusan desain ini menjadi prinsip penting: eksperimen dipertahankan hanya jika memperjelas pengalaman, bukan sekadar menunjukkan animasi.

## 8. Scroll layering dan section motion

Hero kemudian dibuat sticky sehingga points dan section berikutnya bergerak di atasnya. Overlay gelap progresif digunakan ketika hero berada di bawah section lain untuk menegaskan perbedaan kedalaman.

Padding hero juga menjadi micro-interaction: hero berangkat dengan frame/padding, lalu melebar menjadi full screen ketika user scroll ke bawah, dan kembali saat scroll ke atas.

Motion diterapkan per section dengan karakter berbeda:

- **Points:** reveal bertahap dan focus antar-item.
- **About:** heading per kata, image/orbit parallax ringan, tempo diperlambat agar terlihat.
- **Products:** reveal cards, hover image, live search/filter loader, dan Add to Cart motion.
- **Ingredients:** living diagram; main bottle, background, dan callout bergerak dalam layer kedalaman berbeda. Sticky penuh sengaja tidak dipakai agar tidak mengulang pola hero.
- **Testimonials:** story handoff; slide lama keluar sesuai arah, slide baru masuk dengan counter-motion, quote terbentuk per kata, orbit merespons pointer.
- **Footer:** padding 14px/8px berkurang progresif menjadi 0 ketika footer masuk viewport sehingga footer terasa melebar penuh.

## 9. Sistem hover dan micro-interaction

Eksperimen hover global sempat dicoba pada seluruh link dan button. Setelah dilihat dalam konteks commerce, efek tersebut terlalu luas. Scope kemudian dipersempit ke product section dan akhirnya dibentuk menjadi sistem intensitas:

- utility header memakai micro echo/glow;
- Add to Cart memakai letter scatter dan glow;
- Choose Options dan filter memakai variasi letter scatter;
- About CTA memakai versi paling ekspresif;
- footer links memakai shift, diamond, dan split underline;
- icon-only controls memakai rotasi/translation kecil.

Filter aktif sengaja tidak terus-menerus beranimasi. Active state dibuat stabil karena animasi yang terus berjalan bisa terbaca sebagai loading dan mengurangi kejelasan kategori terpilih.

## 10. Hasil akhir

Hasil akhirnya adalah theme Dawn yang masih mempertahankan kontrak Shopify, tetapi memiliki identitas visual dan motion Aethere sendiri. Fokus proyek bukan hanya meniru screenshot Figma, melainkan menerjemahkan desain menjadi sistem yang:

- dapat dikelola merchant;
- responsive;
- menggunakan produk live;
- tetap accessible;
- memiliki fallback untuk preview;
- tidak merusak cart/navigation flow;
- dapat dipelihara melalui section-specific assets.
