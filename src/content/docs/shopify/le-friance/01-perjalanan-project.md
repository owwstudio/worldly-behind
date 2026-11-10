---
title: "Le Friance: Perjalanan Project"
description: "Kronologi pengembangan desain, fitur storefront, motion, revisi, dan pemeriksaan project. Dokumentasi Le Friance."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> **Catatan sumber:** `project-history-le-friance.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 2. Perjalanan proyek secara kronologis

### 2.1 Analisis Figma dan penyiapan workflow

Pengguna awalnya meminta pemeriksaan Figma serta analisis folder tema. Scope kemudian berkembang menjadi perapian `AGENTS.md` dan dokumentasi agar pekerjaan bisa diberikan melalui Markdown, lalu dijalankan dengan instruksi singkat seperti “eksekusi task”.

Workflow akhirnya dibuat fleksibel: link section Figma atau instruksi chat yang jelas dapat menjadi target langsung. Pengguna tidak harus mengedit status task atau mengingat ID sebelum meminta implementasi.

Plugin Shopify sempat diminta dalam percakapan. Arahan berikutnya menegaskan bahwa kepatuhan Shopify lebih penting dan workflow tidak boleh bergantung pada plugin tertentu. **Tidak ada bukti dalam rangkuman ini bahwa plugin tersebut berhasil dipasang.**

### 2.2 Foundation dan implementasi awal

Pengguna meminta pengunduhan tema dasar, menjalankan T00, kemudian T01 beserta pemeriksaan error. Dokumentasi mencatat official Skeleton telah diimpor dan diadaptasi; catatan foundation/T00 merujuk 26 Oktober 2026.

Implementasi berkembang ke header, navbar, hero, global settings, typography, color schemes, container, cart, dan card. Error editor berikut menjadi salah satu masalah awal:

> `To preview your changes, color schemes must be defined in settings_data and settings_schema files.`

Perbaikannya diarahkan pada definisi color schemes di schema dan data settings, bukan menyembunyikan pesannya.

Ada permintaan `git push` dan troubleshooting Git credentials/OS X Keychain. Keberhasilan push tertentu, commit SHA, dan branch pada tahap tersebut **belum diketahui dari percakapan yang tersedia**.

### 2.3 Homepage dan data produk nyata

Section dibangun bertahap dari target Figma: Material Story, Collection Collage, Featured Collections, Journal, newsletter dan footer. CSS diminta tetap rapi dan terbaca manusia.

Sempat terjadi salah pemahaman antara empat gambar dari satu produk, variant, dan empat produk berbeda. Pengguna kemudian memperjelas bahwa empat kursi yang berbeda harus berjajar sebagai kartu produk:

- Walnut Accent Chair.
- Sculpted Wood Lounge Chair.
- Modern Walnut Armchair.
- Contour Upholstered Chair.

Keputusan akhirnya memakai katalog merchant yang nyata, bukan menggandakan satu produk sebagai empat produk palsu. Swatch warna dihubungkan ke data Shopify; metadata warna tidak diperlakukan sebagai bukti variant atau stok.

### 2.4 Product detail dan halaman pendukung

Product detail diarahkan ke Figma `3713:1522`. Revisi mencakup thumbnail radius 10.66px, quantity stepper, variant radio, blok yang dapat diatur ulang, serta styling kartu katalog dan heading koleksi.

Ada permintaan styling accelerated checkout agar menyerupai tombol coklat. Standar proyek kemudian menegaskan bahwa brand styling native accelerated checkout tidak boleh dimodifikasi secara tidak sah. Periksa kode aktual dan aturan Shopify sebelum melanjutkan bagian ini; permintaan visual lama bukan bukti kepatuhan.

Halaman pendukung seperti collection list, page, contact, blog/article, search, cart, 404, dan password mendapat styling yang mengikuti homepage. Contact form diminta maksimal 800px dengan heading di atas form.

### 2.5 Cart, mobile navigation, dan penyederhanaan docs

Cart disediakan dalam tiga presentation: drawer, page, dan floating panel/popover. Revisi mencakup tombol quantity minus/plus, foto radius 10px, empty state yang terpusat, serta menyembunyikan View cart saat kosong.

Divider tertentu diseragamkan ke `#E5E3D3`. Ornament footer tetap memakai warna dan gradasinya sendiri.

Mobile navigation diubah menjadi hamburger dan fullscreen menu. Search/account/localization pernah dipindahkan ke menu. Audit berikutnya mencatat native account tetap perlu terlihat pada header desktop dan mobile.

Dokumentasi disederhanakan karena pengguna merasa terlalu banyak file dan pembacaan berulang memboroskan token. Git menjadi sumber riwayat; task aktif dijaga ringkas. Dokumen riwayat ini dibuat atas permintaan eksplisit pengguna pada 10 November 2026.

### 2.6 Library motion dan hero loading

Catatan vendor menandai migrasi Swiper dan Lenis pada 27 Oktober 2026. Selanjutnya GSAP, SplitText, dan ScrollTrigger digunakan untuk animasi hero serta section scroll.

Hero mengalami banyak revisi urutan:

1. Thumbnail dan caption tampil pada loading screen.
2. Bidang hijau mengecil; cutout sofa muncul di tengah.
3. Sofa bergerak ke kanan bawah di depan display text.
4. Display text dan navbar muncul.
5. Background furnished room melakukan crossfade setelah sofa tiba.

Aset berkembang dari `hero-motion-pre.jpg` menuju `bg-header-center.png`; cutout sofa berganti dari `green-sofa-front` menjadi `sofa-full`. Thumbnail loading akhirnya memakai `hero-detail-blurred.png` hasil export Figma.

Pengguna awalnya meminta character reveal mengikuti real loading progress tanpa simulated progress. Setelah mengeluhkan reveal terlalu cepat atau tidak terlihat ketika cache aktif, pengguna meminta replay dan delay visual yang lebih terasa. Keputusan terakhir di dokumentasi memisahkan:

- Loading line: resource-readiness milestones, bukan persentase byte download.
- Caption fill: animasi dekoratif dengan delay 0.35s dan durasi 2.4s.
- Hold sebelum transisi: 0.8s setelah readiness dan caption selesai.

Ini adalah perubahan arah dibanding permintaan sinkronisasi ketat awal, bukan implementasi yang tetap sepenuhnya progress-driven.

### 2.7 Scroll scenes dan masalah browser macet

Material Story, Collection Collage, Featured Collections, dan Journal mendapat scroll-driven animation. Pengguna melaporkan loading lambat dan screenshot **Page Unresponsive**.

Perbaikan yang dicatat meliputi native CSS sticky, menghindari pin/reparenting custom elements, mengurangi refresh berulang, lazy initialization setelah hero, dan menonaktifkan Swiper parent mutation observers pada komponen terkait.

**Penyebab browser macet belum dibuktikan dengan live profiling.** Tes lokal tidak boleh disebut sebagai pembuktian akar masalah atau jaminan bahwa freeze sudah hilang.

### 2.8 Audit commerce dan perbaikan — catatan 2 November 2026

Audit memperluas fitur native Shopify: filters/sort, predictive search, pickup availability, recommendations, unit pricing, variant swatches, gift card recipient, QR gift card, article comment feedback, native account dan Follow on Shop.

Handling produk dengan lebih dari 250 variants memakai `option_values` dan Section Rendering API. Kegagalan fetch menonaktifkan pembelian variant lama dan menyediakan retry.

Nama tema `lafrience` dikonfirmasi, tetapi author dan URL dokumentasi/support milik tim belum diberikan.

### 2.9 Footer dan perbaikan responsive — catatan 2–3 November 2026

Footer berulang kali direvisi: wordmark LE FRIANCE besar dan terpotong di bawah, newsletter editable, ornament, gambar kanan, serta animasi.

Reveal semula memakai scroll scrub. Setelah pengguna melaporkan animasi belum berjalan/selesai, perilakunya disederhanakan menjadi autoplay timeline saat footer masuk viewport: garis 0–100%, lalu konten naik dari bawah. Wordmark dianimasikan sebagai satu HTML wrapper agar SVG tetap utuh.

Bug `gsap.matchMedia` ditemukan: callback hanya memiliki query reduced motion sehingga tidak berjalan saat query tersebut tidak cocok. Kondisi `all: "all"` kemudian ditambahkan.

Mobile newsletter akhirnya diurutkan menjadi email → heading besar → brand copy kecil, dengan padding bawah 20px.

Slider footer akhirnya memakai empat aset Journal. Tombol terlihat dihapus atas permintaan pengguna; pagination menjadi indikator noninteraktif. Autoplay tidak bekerja pada implementasi awal karena bundle Swiper belum menyertakan modul Autoplay. Modul tersebut kemudian benar-benar ditambahkan dan bundle dibangun ulang.

Perbaikan lain pada 3 November meliputi wrapper Apps, konsistensi lebar untuk layar 2K/4K, penghapusan nested scroll kartu Journal, footer motion hanya di homepage, serta reverse animation Journal yang mempertahankan active slide.

### 2.10 Product recommendations dan order note — 4 November 2026

Recommendations sebelumnya tidak mengeluarkan markup kartu sebelum API Shopify memberi hasil. Perbaikan menambahkan server-rendered fallback dari produk merchant/katalog untuk tipe related, lalu mengutamakan hasil native ketika tersedia.

Pengguna juga bertanya lokasi order note. Pemeriksaan kode menunjukkan note dikirim melalui Update cart atau checkout form biasa; belum ada autosave saat mengetik. Catatan dijelaskan sebagai data order untuk merchant di Shopify Admin. **Belum ada perubahan kode autosave atau tes pesanan end-to-end yang dikonfirmasi.**

### 2.11 Penyusunan handoff — 10 November 2026

Pengguna mengonfirmasi bahwa ini adalah riwayat chat LE FRIANCE, kemudian meminta dokumentasi untuk tim. Pemeriksaan saat penyusunan mengonfirmasi remote GitHub dan keberadaan implementasi utama dalam repository. Pemeriksaan ini tidak menjalankan ulang seluruh test suite atau audit Shopify.

