---
title: "Elevd — Dokumentasi Project dan Handoff Tim"
description: "Dokumentasi showcase smart home Elevd berbasis Shopify Dawn: perjalanan project, prompt asli, preloader, scroll interaction, keputusan teknis, dan handoff tim."
sidebar:
  label: "Ringkasan"
  order: 0
---

> Dokumentasi ini merangkum percakapan project Elevd. Status theme, konfigurasi lokal, dan repository di bawah merupakan kondisi terakhir yang tercatat dalam percakapan, bukan hasil audit terbaru.

## 1. Identitas dan Tujuan Project

| Item | Keterangan |
|---|---|
| Nama project | Elevd |
| Brand pada desain | elevd.ai |
| Tujuan | Showcase dan perkenalan konsep rumah pintar |
| Platform | Shopify development store |
| Base theme | Dawn |
| Arah visual | Tipografi besar, fotografi arsitektur, warna oranye dan hitam |
| Target pengalaman | Interaksi dan animasi dengan aspirasi kualitas Awwwards |
| Repository tim | `owwstudio/elevd` |
| Akun GitHub yang disebut pengguna | `ajiwahyuin` |

Project ditujukan untuk showcase, bukan implementasi bisnis rumah pintar yang sebenarnya. Integrasi perangkat IoT, transaksi, dan backend rumah pintar belum dibahas.

### Stack yang tercatat

- Shopify Liquid, JSON templates, CSS, dan JavaScript.
- Shopify CLI untuk development dan deployment theme.
- GSAP dan ScrollTrigger untuk animasi berbasis scroll.
- Lenis untuk smooth scroll.
- Web Animations API untuk signature preloader.
- Helvetica Now Display sebagai custom font.
- Git dan GitHub untuk version control.
- VS Code sebagai editor.
- Figma sebagai sumber desain.
- ChatGPT Images untuk pembuatan variasi gambar ruangan.

## 2. Perjalanan Project

Tanggal setiap tahap tidak tersedia secara lengkap. Urutan berikut mengikuti percakapan.

### 2.1. Penentuan konsep

Pengguna memperkenalkan Elevd sebagai showcase rumah pintar berbasis Shopify. Project dimulai dari Dawn, kemudian dibangun per section sesuai desain Figma.

Pada tahap awal, pengguna meminta saran interaksi dan referensi website dengan aspirasi kualitas Awwwards. Daftar referensi eksternal yang akhirnya dipilih tidak tersedia dalam catatan percakapan.

### 2.2. Memulai development

Pengguna menyetujui dimulainya project dan memberikan development store:

[Elevd Shopify](https://elevd-ai.myshopify.com/)

Implementasi awal mencakup custom header, hero, dan partner logos berdasarkan desain.

### 2.3. Implementasi font

Pengguna menyediakan tujuh file Helvetica Now Display dan meminta font diterapkan terlebih dahulu.

Font dikonversi menjadi WOFF2 dan diterapkan pada body serta heading. Weight Regular dan Bold dipreload.

### 2.4. Menunda slicing untuk membahas interaksi

Pengguna meminta slicing dihentikan sementara agar tim dapat menentukan interaksi yang sesuai dengan konsep smart home.

Fokus pembahasan meliputi:

- Preloader.
- Interaction pattern.
- Micro interaction.
- Identitas visual oranye dan hitam.

### 2.5. Menentukan signature preloader

Pengguna menetapkan permintaan khusus: logo harus tampil di preloader, kemudian bergerak menuju posisi akhirnya di navbar.

Interaksi ini dimaksudkan menjadi ciri khas project.

Pengguna kemudian memberikan Figma node logo dan mengizinkan penggunaan dummy text untuk konten yang belum tersedia.

### 2.6. Pembuatan tiga suasana ruangan

Tiga variasi gambar ruangan dibuat untuk:

1. Morning.
2. Focus.
3. Evening.

Ketiganya menggunakan komposisi ruangan yang serupa dengan perubahan pencahayaan dan suasana.

### 2.7. Implementasi scroll experience

Pengguna menanyakan penempatan gambar karena belum terlihat di live website, kemudian secara eksplisit meminta GSAP, ScrollTrigger, dan Lenis.

Hasilnya adalah section **“A day with elevd.”** setelah partner logos, dengan pergantian suasana ruangan berdasarkan scroll.

### 2.8. Workflow VS Code dan Shopify

Pengguna membuka project di VS Code dan meminta panduan untuk memperbarui theme melalui Shopify CLI.

Folder project yang tercatat:

```text
/Users/anticumlaudeclub/Documents/Framer Codex Test/Elevd
```

### 2.9. Menghubungkan GitHub

Tim `owwstudio` menyediakan repository. Pengguna mencoba push branch `codex/elevd-setup`, tetapi mengalami error remote unpack.

Masalah ditelusuri ke clone Dawn yang masih berupa shallow repository. Setelah history dilengkapi, push berhasil.

### 2.10. Menyepakati penggunaan theme tetap

Pengguna mempertanyakan banyaknya theme di dashboard.

Kesepakatan workflow berikutnya:

- Seluruh section ditambahkan secara kumulatif ke theme yang sama.
- Gunakan satu live theme dan satu draft tetap.
- Tidak membuat theme baru untuk setiap section.

### 2.11. Hubungan dengan Codex di VS Code

Dijelaskan bahwa file project dapat digunakan bersama melalui folder lokal yang sama.

Namun, chat Codex di VS Code dan chat ini merupakan sesi terpisah. Percakapan dan instruksi tidak otomatis tersinkron.

## 3. Keputusan Penting dan Alasannya

| Keputusan | Alasan |
|---|---|
| Menggunakan Dawn | Menjadi fondasi Shopify yang kemudian dikustomisasi per section |
| Membangun per section | Memudahkan penyesuaian bertahap terhadap Figma |
| Menggunakan Helvetica Now Display | Mengikuti font yang disediakan pengguna |
| Logo berpindah dari preloader ke navbar | Menjadi signature interaction Elevd |
| Menggunakan elemen logo navbar yang sebenarnya | Menghindari perpindahan visual antara logo tiruan dan logo navbar |
| Menambahkan tiga suasana ruangan | Mendukung narasi rumah yang beradaptasi sepanjang hari |
| Menggunakan GSAP, ScrollTrigger, dan Lenis | Memenuhi arahan pengguna untuk scroll-based interaction |
| Desktop menggunakan pinned scene | Memberi ruang untuk transisi Morning → Focus → Evening |
| Mobile menggunakan stacked cards | Menjaga keterbacaan dan native touch scrolling |
| Mengakomodasi reduced motion | Menyediakan pengalaman yang tetap dapat diakses tanpa animasi intensif |
| Menggunakan dummy text | Konten yang belum tersedia di Figma tetap dapat diprototipekan |
| Menggunakan satu draft tetap | Menghindari penumpukan theme baru untuk setiap section |

Target Awwwards merupakan aspirasi kualitas. Tidak ada catatan submission, penilaian, atau penghargaan.

## 4. Prompt Asli dan Hasilnya

Kutipan berikut merupakan prompt asli pengguna. Ringkasan hasil ditulis terpisah.

### 4.1. Brief awal

**Prompt asli:**

```text
saya ingin memulai project baru "Elevd" di shopify dev, karena hanya untuk showcase saja, bukan untuk real project. saya ingin memulai dari theme dawn lalu kita tambahkan per section sesuai design.


tapi sebelum mulai saya ingin menanyakan bagusnya website ini memakai interaksi bagaimana, karena saya ingin membuat project ini standar awwward, jadi harus memiliki interaksi dan animasi yang unik.

jika bisa sertakan website referensi yang kamu tahu yang style-nya bisa kita implementasi di project ini.
```

**Hasil:** Arah project ditetapkan sebagai showcase smart home berbasis Dawn, dengan implementasi bertahap mengikuti Figma.

### 4.2. Implementasi font

**Prompt asli:**

```text
ini file font helvetica now display, tolong di implementasi dulu.
```

**Hasil:** Tujuh weight Helvetica Now Display disiapkan sebagai webfont dan diterapkan pada theme.

### 4.3. Eksplorasi interaksi

**Prompt asli:**

```text
sementara slicing sampai disini dulu, kita berpikir untuk interaksi yang cocok dulu, dengan konsep website yang seperti ini, website yang berfokus pada showoff / perkenalan rumah pintar. dengan warna utama oranye dan hitam. adakah saran preloader,  pattern interaction dan micro interactionnya nanti bagaimana.
```

**Hasil:** Fokus beralih sementara dari slicing menuju konsep interaksi.

### 4.4. Signature preloader

**Prompt asli:**

```text
baik, kamu butuh apa saja biar saya siapkan.

dan untuk preloader saya punya request yang agar preloader harus ada logo, dan nanti logo berjalan dari prelaoder menuju tempatnya di navbar, saya ingin menjadikan interaction itu sebagai interaction ciri khas dari project yang saya buat.
```

**Hasil:** Implementasi intro dengan logo di tengah viewport yang bergerak dan mengecil menuju navbar, diikuti reveal hero.

### 4.5. Dummy text

**Prompt asli:**

```text
dan untuk text deskripsi atau apapun yang kamu butuhkan tapi tidak ada di figma, kamu bisa pakai dummy text dulu.
```

**Hasil:** Dummy copy digunakan untuk melengkapi prototype. Copy tersebut belum dianggap sebagai konten final.

### 4.6. Scroll-based interaction

**Prompt asli:**

```text
dan untuk ketiga gambar ( morning,fokus, evening) dipasang dimana? saya lihat mereka belum muncul di live website. dan untuk website saya ingin dipasang gsap untuk scroll trigger dan lenis untuk smooth scroll. karena saya ingin fokus untuk interaction berbasis scroll.
```

**Hasil:** Gambar dipasang pada section “A day with elevd.” dengan ScrollTrigger dan Lenis.

### 4.7. Prompt image generation

**Ringkasan prompt, bukan kutipan asli:** Membuat satu interior rumah modern, kemudian menghasilkan variasi Morning, Focus, dan Evening dengan komposisi yang konsisten.

Teks prompt lengkap tidak disalin dalam percakapan yang tersedia. Lokasi penyimpanannya yang tercatat:

```text
design/room-scenes/prompts.md
```

Jangan menggunakan ringkasan di atas sebagai pengganti prompt asli untuk reproduksi aset.

## 5. Implementasi Teknis

### 5.1. Struktur theme

File utama yang tercatat:

```text
layout/theme.liquid
templates/index.json
sections/elevd-header.liquid
sections/elevd-hero.liquid
sections/elevd-partners.liquid
sections/elevd-day.liquid
assets/elevd.css
assets/elevd-day.css
assets/elevd-scroll.js
assets/elevd-intro.css
assets/elevd-intro.js
snippets/elevd-intro-head.liquid
snippets/elevd-intro.liquid
snippets/elevd-scroll-head.liquid
```

Homepage menggunakan section Elevd. Struktur Dawn untuk route lain tetap menjadi fondasi project.

### 5.2. Font

Weight yang disiapkan:

| Font | Weight tercatat |
|---|---:|
| Thin | 265 |
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Bold | 700 |
| ExtraBold | 800 |
| Black | 900 |

Sumber file berasal dari direktori pengguna:

```text
/Users/anticumlaudeclub/Downloads/Goobly/helvetica-now-display/
```

Lisensi dan ketentuan distribusi font belum didokumentasikan dalam percakapan.

### 5.3. Preloader

Perilaku yang diimplementasikan:

- Background gelap dengan logo di tengah viewport.
- Logo bergerak menuju navbar.
- Warna wordmark menyesuaikan tampilan akhir.
- Hero muncul setelah intro.
- Intro berjalan sekali per tab session.
- Tersedia Skip dan tombol Escape.
- Konten utama dibuat inert selama intro.
- Terdapat fallback untuk perubahan viewport, page lifecycle, dan watchdog.
- Intro dilewati pada reduced motion, Shopify Theme Editor, serta kondisi navigasi tertentu.

Parameter replay untuk pengujian:

```text
?elevd_intro=replay
```

### 5.4. Section suasana ruangan

Aset yang tercatat:

```text
assets/elevd-room-morning.webp
assets/elevd-room-focus.webp
assets/elevd-room-evening.webp
```

Desktop menggunakan pinned stage dengan crossfade gambar dan deskripsi mengikuti scroll. Navigasi chapter memungkinkan pengguna menuju suasana tertentu.

Mobile menggunakan tiga card berurutan dengan native scrolling.

Shopify Theme Editor dan reduced motion menampilkan seluruh suasana tanpa pinned animation.

Teks, urutan scene, dan gambar dapat disesuaikan melalui section schema.

### 5.5. Integrasi library

Versi yang tercatat saat implementasi:

```text
GSAP 3.15.0
ScrollTrigger 3.15.0
Lenis 1.3.26
```

Library disimpan lokal di theme assets.

Integrasi menggunakan GSAP ticker untuk menjalankan Lenis dan memperbarui ScrollTrigger. Lenis dimulai setelah intro selesai.

Scroll dikendalikan agar tetap sesuai dengan drawer atau modal Dawn. Lifecycle section Shopify ditangani dengan context yang dapat dibersihkan saat section dimuat ulang.

### 5.6. Verifikasi yang pernah dilakukan

- Shopify Theme Check: 0 error, 9 warning bawaan Dawn.
- Pemeriksaan desktop dan mobile.
- Pemeriksaan overflow horizontal.
- Ketiga gambar berhasil dimuat.
- Scroll maju dan mundur mengubah scene.
- Navigasi chapter diuji.
- Resize menghapus pin sesuai breakpoint.
- Reduced motion menampilkan semua scene.
- Integrasi preloader dan Lenis diuji.
- Live website pernah diverifikasi setelah deployment.

Hasil tersebut menggambarkan versi yang diuji saat itu, bukan jaminan terhadap perubahan setelahnya.

## 6. Kendala, Solusi, dan Pekerjaan Terbuka

### 6.1. GitHub push gagal

**Error asli:**

```text
remote: fatal: did not receive expected object 83d5e6b4094d8019820bffafe04b242d0602ffe2
error: remote unpack failed: index-pack failed
To https://github.com/owwstudio/elevd.git
 ! [remote rejected] codex/elevd-setup -> codex/elevd-setup (failed)
error: failed to push some refs to 'https://github.com/owwstudio/elevd.git'
```

Penyebab yang ditemukan: repository berasal dari shallow clone Dawn.

**Perintah perbaikan yang tercatat:**

```bash
git fetch --unshallow upstream
git push --no-thin -u origin codex/elevd-setup
```

Setelah perbaikan, repository tidak lagi shallow, pemeriksaan object berhasil, dan branch berhasil dipush.

### 6.2. Background preloader tersembunyi

Rule global Dawn untuk elemen kosong menyebabkan curtain preloader tidak tampil.

Solusi: memberikan rule `display: block` pada curtain secara spesifik.

### 6.3. Navigasi chapter ditimpa Lenis

Klik navigasi chapter masih diproses oleh handler Lenis meskipun default event sudah dicegah.

Solusi: handler chapter juga menghentikan propagasi event.

### 6.4. Theme bertambah di dashboard

Theme preview dibuat untuk pengujian terpisah. Pengguna kemudian meminta alur yang lebih sederhana.

Solusi workflow: gunakan satu draft tetap dan satu live theme.

Belum ada catatan penghapusan theme lama.

### 6.5. Hal yang belum selesai atau belum diketahui

- Slicing seluruh desain Figma belum selesai.
- Section About, features, dark story, user stories, dan footer belum tercatat selesai dalam pekerjaan chat ini.
- Kehadiran theme “Elevd About Preview” tidak membuktikan implementasi About sudah selesai.
- Micro interaction untuk seluruh website belum ditetapkan.
- Dummy copy belum seluruhnya diganti.
- Final acceptance tim belum tercatat.
- Status repository, branch, dan theme terbaru perlu diperiksa sebelum melanjutkan.
- Detail perubahan yang dibuat melalui sesi Codex lain tidak otomatis tersedia di chat ini.

## 7. Maintenance dan Handoff

### 7.1. Folder dan repository

Folder lokal yang digunakan:

```text
/Users/anticumlaudeclub/Documents/Framer Codex Test/Elevd
```

Remote yang tercatat:

```text
origin   https://github.com/owwstudio/elevd.git
upstream https://github.com/Shopify/dawn.git
```

Branch kerja:

```text
codex/elevd-setup
```

Commit terakhir yang terverifikasi saat perbaikan GitHub:

```text
1c352c17315c3eeac70235866ce5ed57e845ff8c
```

Commit tersebut bukan pernyataan bahwa repository masih berada pada posisi yang sama sekarang.

### 7.2. Status theme terakhir yang diperiksa

| Theme | ID | Status saat pemeriksaan |
|---|---|---|
| Elevd Motion Preview | `155209498822` | Live |
| Elevd About Preview | `155243708614` | Unpublished |
| Elevd | `155207008454` | Unpublished |
| Development (3a911a-Anti-Cumlaude-Club-Macbook-Pr) | `155206975686` | Development |
| Horizon | `155206090950` | Unpublished |

Konfigurasi terakhir yang dibaca:

```toml
[environments.development]
store = "elevd-ai.myshopify.com"
theme = "155243708614"
```

Periksa kembali target sebelum deployment karena status live dan isi konfigurasi dapat berubah.

### 7.3. Memperbarui draft yang sama

**Perintah yang sebelumnya diberikan dalam percakapan:**

```bash
shopify theme push --environment development --nodelete --strict
```

Perintah mengikuti theme target di environment `development`.

Opsi `--unpublished` digunakan untuk membuat unpublished theme baru. Hindari opsi tersebut ketika tujuannya memperbarui draft yang sudah ada.

### 7.4. Pemeriksaan sebelum handoff berikutnya

1. Periksa branch, perubahan lokal, dan target Shopify.
2. Pastikan perubahan terbaru dari anggota tim sudah diketahui.
3. Tambahkan section ke draft tetap.
4. Jalankan Theme Check.
5. Uji desktop, mobile, reduced motion, serta Theme Editor.
6. Uji preloader, drawer, dan navigasi chapter setelah mengubah scroll logic.
7. Commit perubahan dengan scope yang jelas.
8. Review draft sebelum memublikasikannya.

Jangan menghapus theme lama hanya berdasarkan dokumentasi ini.

### 7.5. Koordinasi VS Code dan Codex

File dapat digunakan bersama jika VS Code dan Codex mengakses folder yang sama.

Sesi chat tetap terpisah. Tim perlu mencatat keputusan dan perubahan melalui repository atau dokumentasi agar konteks tidak bergantung pada satu chat.

Hindari mengedit file yang sama secara bersamaan melalui beberapa sesi.

## 8. Link dan Referensi

| Sumber | Link |
|---|---|
| Website Elevd | [elevd-ai.myshopify.com](https://elevd-ai.myshopify.com/) |
| Repository | [owwstudio/elevd](https://github.com/owwstudio/elevd) |
| Branch kerja yang tercatat | [codex/elevd-setup](https://github.com/owwstudio/elevd/tree/codex/elevd-setup) |
| Desain utama | [Figma — node 474:30341](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=474-30341&m=dev) |
| Logo | [Figma — node 474:30355](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=474-30355&m=dev) |
| Dawn upstream | [Shopify/dawn](https://github.com/Shopify/dawn) |
| Shopify CLI theme push | [Dokumentasi theme push](https://shopify.dev/docs/api/shopify-cli/theme/theme-push) |
| Shopify CLI theme dev | [Dokumentasi theme dev](https://shopify.dev/docs/api/shopify-cli/theme/theme-dev) |

Website referensi interaksi yang disepakati tim belum tersedia dalam catatan percakapan.
