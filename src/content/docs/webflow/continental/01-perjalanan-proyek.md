---
title: "Continental: Perjalanan Proyek dan Keputusan"
description: "Riwayat project Continental dari discovery Figma dan fondasi Webflow hingga keputusan layout, motion, hero, dan preloader final."
sidebar:
  label: "Perjalanan Proyek"
  order: 1
---

**Hasil website:** [Lihat website Continental](https://continentals.webflow.io/).

> **Dokumentasi Continental.** Sumber: `01-perjalanan-proyek.md`.

[Kembali ke indeks](/webflow/continental/)

Dokumen ini mengikuti urutan kerja proyek. Tujuannya memberi tim alasan di balik bentuk situs sekarang, termasuk gagasan yang sempat dicoba tetapi kemudian dibatalkan. Ini bukan log setiap klik Webflow.

## 1. Discovery dan fondasi

Pekerjaan dimulai dengan audit read-only Webflow: mencari site **Continental**, memeriksa page, variable, component, CMS, breakpoint, dan style yang sudah ada. Selanjutnya frame utama [Figma 77:2051](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-2051&m=dev) dianalisis sebagai implementation specification: urutan section, hierarchy, komponen reusable, typography, warna, spacing, container, grid, breakpoint, dan aset.

Implementasi sengaja dimulai dari fondasi, bukan langsung dari halaman: color, typography, spacing, radius, global container, section spacing, dan **Button Base**. Prinsipnya menggunakan ulang variable dan class agar tidak muncul duplikasi. Setelah itu [Navbar](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-2195&m=dev) serta [Footer](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-2423&m=dev) dibuat sebagai komponen reusable.

## 2. Slicing layout

Section kemudian dibangun bertahap berdasarkan Figma dan screenshot, termasuk frame yang belum menggunakan auto layout. Struktur yang diminta konsisten: **section → container → content**. Section yang kini terlihat di halaman Home adalah hero, logo-loop, quote, Flavor System, Product System, Philosophy, dan Footer. Koreksi konten kecil turut dilakukan, misalnya label `inline4` di `philosophy-topics` diganti menjadi **Identity**.

Urutan ini memungkinkan visual dasar diperiksa sebelum motion yang lebih kompleks ditambahkan. Frame rujukan per section tercatat di [struktur halaman](/webflow/continental/02-struktur-dan-design-system/#urutan-halaman-live).

## 3. Eksplorasi bahasa visual dan 3D

Inspirasi awal header adalah gambar kaleng dengan dots/ASCII yang bereaksi pada cursor. Tim mendiskusikan alur gratis image-to-3D dan memilih Tripo3D sebagai alat yang akan dipakai untuk eksplorasi aset. Ide video loop, ASCII converter, shader/WebGL, dan Three.js juga dibicarakan. Beberapa efek dots interaktif pada header diuji, tetapi keterbacaan heading dan arah kreatifnya belum terasa matang. **Keputusan final:** header memakai gambar statis `header__bg`; efek WebGL/Three.js pada header ditinggalkan. Dengan demikian user tidak perlu menyiapkan video atau model 3D untuk hero saat ini.

Aset 3D justru dipusatkan pada cerita produk: varian Flavor System dan gerak objek yang menghubungkan quote dengan section gelap. Model dikirim secara bertahap, sehingga Raspberry & Pomegranate sempat dikeluarkan dari daftar lalu dimasukkan lagi begitu aset tersedia. Lima varian akhirnya dipertahankan.

## 4. Pola motion yang terbentuk

Animasi pertama pada quote dan Flavor System diuji dengan reveal/hover biasa, lalu direvisi menjadi bahasa visual yang lebih dekat ke halftone dan tipografi eksperimental. Efek decode awal terasa seperti teks ditumpuk, sehingga diganti menjadi decode yang benar-benar merekonstruksi karakter. Masalah layout shift dan sisa karakter decode pada tombol dibenahi. Font quote dan beberapa angka/label yang sempat jatuh ke Arial dipulihkan ke keluarga Inter.

Dari situ muncul pola yang dipakai berulang: decode teks, stagger item, border yang tumbuh kiri-ke-kanan, dan objek yang merespons scroll tanpa memindahkan layout. Flavor nutrition row, list item, bottom text, intro aside, serta lab meta mengikuti pola ini. Product System dan Philosophy kemudian memakai bahasa yang sama, dengan intensitas yang disesuaikan konteks masing-masing.

## 5. Flavor System sebagai scroll story

Awalnya varian kaleng dipilih dengan hover pada daftar mirip accordion; panah aktif lalu dicoba diganti dengan **signal rail**. Konsep ini berkembang: satu kaleng Lime & Coconut bergerak dari belakang area points/quote, tetap terlihat di tengah viewport saat scroll, miring ke kanan dan berputar sesuai delta scroll, kemudian turun menuju slot display Flavor System. Bila user scroll balik, lintasannya harus sama secara terbalik. Sesudah sampai di display sticky, progres scroll mengendalikan lima varian dan angka `01 / 05` sampai `05 / 05`.

Beberapa iterasi penting memperbaiki timing kemunculan di quote, posisi kaleng terhadap heading, clipping bayangan, garis overflow di atas model, jalur reverse-scroll, dan gerak yang overshoot setelah varian kelima. Tujuan akhirnya adalah transisi yang terbaca sebagai satu perjalanan objek, bukan pergantian gambar yang terpisah.

## 6. Product System, Philosophy, dan brand rail

Product System mendapat reveal tipografi dan komposisi kemasan yang masuk dari kanan, berputar mengikuti scroll, tidak saling menembus, lalu berhenti sekitar tengah layar—bukan terus melintas di belakang kolom lain. Visual tiga kaleng disesuaikan dengan [frame Figma 224:2590](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=224-2590&m=dev). Philosophy dibuat sebagai komposisi editorial tiga kolom dengan card kaleng sentral, band hitam horizontal, dan decode pada elemen teks. `logo-loop` kemudian diberi dinamika yang senada dengan `philosophy-band`.

## 7. Hero dan preloader final

Hero dikembalikan ke gambar, dibuat setinggi `100vh`, dan diletakkan sticky di bawah section setelahnya. Heading diposisikan ke zona gelap aset agar tetap terbaca; pada CSS live desktop heading berada di `top: 140px` dan arrow CTA sekitar `top: 500px` (permintaan awal menyebut sekitar 550px, lalu penempatan aktual disetel di Designer/CSS). Ini alasan kita tidak boleh menganggap setiap angka brainstorming sebagai spesifikasi akhir.

Preloader melewati beberapa konsep: **System Calibration**, dots membentuk kata, **Dither Bloom**, **Halftone Gate**, **Access Hatch** dengan tombol masuk, dan variasi decode. Arah final memakai struktur [logo empat vector](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-1787&m=dev): empat bagian dapat terbaca sebagai lingkaran ketika dibalik, lalu menyatu menjadi mark. Tidak ada tombol, angka loading, atau ornamen lain. Logo beralih ke ukuran/posisi Navbar, wordmark muncul, lalu veil hitam pecah menjadi dot halftone dan menghilang ke hero. Bug preloader yang hanya muncul sekali serta page yang bisa di-scroll di balik preloader ditangani; perilaku yang disetujui adalah tampil setiap refresh dengan scroll terkunci selama animasi.

## 8. Penyelesaian micro-interaction

Simbol `***` pada `flavor-system-product-mark` diberi loop lembut: tiga bintang berjarak lalu berkumpul, tanpa trigger. Interaksi sejenis ditambahkan pada `product-system-count` sambil menjaga reveal parent-nya. Navbar juga berubah kontras: mark dan teks putih di latar gelap, hitam di area putih. Pendekatan `mix-blend-mode` sempat tidak stabil karena stacking context, lalu diganti dengan deteksi elemen/latar di belakang Navbar.

## Keputusan yang *bukan* bagian build final

| Eksplorasi | Status akhir |
| --- | --- |
| Cursor menggerakkan dots gambar hero via WebGL/Three.js | Ditunda; hero kembali menjadi gambar statis. |
| Hero sebagai video/ASCII Magic | Tidak dipakai pada build sekarang. |
| Dua model 3D untuk transisi quote | Disederhanakan; tidak menjadi syarat build. |
| Flavor selection utama hanya melalui hover | Diganti dengan progres scroll/sticky untuk pengalaman utama. |
| Preloader Access Hatch dengan tombol masuk | Dibatalkan; preloader otomatis. |
| Angka progress pada preloader | Tidak dipakai agar logo tetap menjadi fokus. |

## Prinsip kreatif yang perlu dipertahankan

Gerak harus punya hubungan dengan konten dan scroll, tidak sekadar dekorasi. Tipografi tetap stabil saat decode; layout tidak boleh bergeser. Dots/grain adalah bahasa visual, namun tidak boleh mengorbankan keterbacaan. Eksperimen harus memiliki perilaku mobile dan reduced-motion yang masuk akal, terutama pada 3D dan preloader.
