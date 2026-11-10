---
title: "Auralink: Prompt Asli dan Hasil"
description: "Pilihan prompt asli, ringkasan hasil implementasi, dan batas bukti yang tersedia. Dokumentasi Auralink."
sidebar:
  label: "Prompt Asli dan Hasil"
  order: 3
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 4. Prompt asli dan hasilnya

Bagian ini berisi **pilihan prompt asli**, bukan seluruh transkrip. Isi fenced blocks dipertahankan sebagaimana muncul dalam percakapan, termasuk typo. Kalimat di luar block adalah ringkasan atau penjelasan hasil, bukan prompt asli.

### 4.1 Kamera radio

**Prompt asli:**

```text
📻 [3D RADIO KAMERA STATS]• Camera Position (X, Y, Z) : (2.96, 2.92, 6.12)• Camera Target   (X, Y, Z) : (0.02, -0.16, 0)• Jarak / Zoom    (Distance): 7.46• Sudut Miring    (Yaw)     : 25.7°• Sudut Elevasi   (Pitch)   : 24.4° (dari atas)📋 Baris Code Siap Pakai:const DEFAULT_CAM_POS = new THREE.Vector3(2.96, 2.92, 6.12);const DEFAULT_TARGET = new THREE.Vector3(0.02, -0.16, 0);🔗 URL Test Cepat:?camX=2.96&camY=2.92&camZ=6.12&tarX=0.02&tarY=-0.16&tarZ=0

zoom nya sekitar segitu
```

**Kode asli yang terdapat di prompt** — dua deklarasi di sumber chat berada pada satu baris:

```js
const DEFAULT_CAM_POS = new THREE.Vector3(2.96, 2.92, 6.12);const DEFAULT_TARGET = new THREE.Vector3(0.02, -0.16, 0);
```

Hasil/arah: baseline kamera akhir diminta pada nilai tersebut; revisi ukuran radio datang sesudahnya. Nilai final di deployed storefront belum diketahui.

### 4.2 Hero fullscreen dan rounded scroll

**Prompt asli:**

```text
oke pasang gsap sekarang untuk scroll, jadi header bagian 
auralink-hero-wrapper section-template--27437339738214__auralink_hero-padding
ketika dia muncul transisi full ikut section lebar dan tinggi full sampai akhir transisi, tapi ketika discroll kebawah dia max-width nya jadi 1440px dan jadi kotak rounded, gak perlu buru buru pelan pelan aja sekang terasa cepat
```

Ringkasan hasil: pembagian initial load animation dan scroll-driven frame transition menjadi penting. Pengguna kemudian memperjelas bahwa isi wrapper tidak boleh ikut bergeser/shape shifting.

### 4.3 Tag dan urutan reveal

**Markup asli yang ditempel pengguna:**

```html
<div class="auralink-hero-tags" role="list" data-reveal="fade" data-hero-fade-started="true" style="opacity: 1; visibility: visible;"><span class="auralink-tag-pill" role="listitem">Smart</span><span class="auralink-tag-pill" role="listitem">Safe</span><span class="auralink-tag-pill" role="listitem">Secure</span></div>
```

**Prompt asli yang menyertainya:**

```text
bikin face ke urutan 1 ke 2 sampai ke 3, muncul steleah text reval
```

Ringkasan hasil: target satu sequence setelah headline; screenshot menjelaskan capsule bersama → capsule terpisah dekat → capsule berjarak. Markup ini adalah snapshot saat debugging, bukan template final yang harus disalin ke semua sections.

### 4.4 Impact icon, counter, dan background

**Prompt asli:**

```text
perhatikan, icon kotak pertama muncul tanpa text, ketika transisi turun sleseai text muncul, dan angka count dari 0 sampai deafultnya saat ini, dan kotak nya kurang besar 160px kotak, icon nya 40, bulatan kunging 72px, kemudian revisi lagi, ketika bersamaan dengan text muncul pertama section backgrounya ganti: #F5F3F0, tapi ketika icon kota muncul dan wrappernya muncul backgroundnya langsnubg ganti putih, tanpa transisi langsung pergantian warnanya
```

Arahan background tersebut kemudian diperbarui menjadi overlay yang menyusut; jangan memakai revisi awal sebagai spesifikasi final.

### 4.5 Impact trigger dan reverse

**Prompt asli:**

```text
1. Profil awal di tengah dengan latar putih.
2. Saat foto bergeser dan kutipan muncul, seluruh section langsung menjadi **#F5F3F0**.

perhalus transisi nya beri sedikit animasi bukan berdasar scroll, tunggu foto penuh di kiri layar selesai baru muncul line dan kutipanya
```

**Prompt asli lanjutan:**

```text
revisi lagi, kenapa jika di scrol keatas dia gak balik text hilang dan foto ditengah seperti awal load muncul harusnya bisa bolak balik
```

Ringkasan hasil: diperlukan time-based transition yang tetap memiliki reverse state, bukan permanent one-time flag.

### 4.6 Showcase bergantung pada active slide

**Prompt asli:**

```text
scrollnyaa bisa bolak balik diatur jangan sekali, kemudian, posisi full screen tergantung dari slider center jika gambarnya berbeda karen sudah di klik slide jika di scroll keatas maka gambar full screen dari slider center
```

Ringkasan hasil: state active center slide harus menjadi sumber fullscreen image; zero/one-slide dan cleanup juga masuk regression scope berikutnya.

### 4.7 CTA overlay

**Prompt asli:**

```text
transisi terlalu kasar dari background section ke kotak kecil harusnya dia menyusut
rubah cara berkerjanya bikin:
section tetep putih kasih overley berwarna hijau yg full section, kemudian menyusut sampai kotak hijau kemudian tangan muncul, rapihkan kontainer yg memuat tangan dan kotak hijaunya di bawah sejar dengan kotak hijau seolah olah dia muncul dari kotak menembus keatas keluar kotak
```

Ringkasan hasil: final approach memakai overlay lime `#F2FE63`; posisi/clipping tangan perlu menjaga efek menembus atas tanpa memperlihatkan tepi asset bawah.

### 4.8 Merchant editing dan missing assets

**Prompt asli:**

```text
oke perbaiki jangan sampai ada error, missing yg membuat problem does not exist dari theme-check semuanya cek, kemudian perbaiki agak bisa dibolak balik atau bahkan dihapus atau ditambah section yg sama, isinya bisa di tambah maupun dikurangi karena ini shopify themes user bisa saja merubah kemudain terjadi erorr, cegah itu terjadi jadi perbaiki jangan sampai erorr go!!!
```

Hasil yang dilaporkan: shared section lifecycle, per-instance events/cleanup, loader deduplication, guards untuk optional/empty content, constrained fallback assets, dan regression tests. Ini tidak menjadi jaminan absolut bebas error.

### 4.9 Keputusan akhir hover Bento

**Prompt asli:**

```text
hilangkan hover card nya daripada berkedip
```

Hasil yang dilaporkan: hover dan transition CSS Bento dihapus; entrance scroll tetap ada.

### 4.10 Scroll stutter

**Prompt asli:**

```text
cek lenisnya, terasa patah patah tidak smooth, cek apakah terjadi penumpukan dengan scroll triger dari gsap, intinya perbaiki scroll nya biar smooth
```

Hasil yang dilaporkan: single clock, cached lock detection, dimension-aware resize, coalesced/deferred refresh; tujuh regression suites lulus pada pemeriksaan saat itu. Frame-rate browser sesudah patch belum diukur.

### 4.11 Heading Bento reversible

**Prompt asli:**

```text
kenapa bagian ini text revealnya cuma sekali ? harusnya bisa discroll balik dia balik text nya
```

Hasil yang tercatat: one-time gate dihapus dan global controlled reveal dihubungkan ke GSAP timeline. Tiga forward/reverse cycles, intermediate refresh, syntax dan Theme Check lulus.

### 4.12 GitHub dan MCP

**Prompt asli:**

```text
push ke githubku
```

Status: permintaan push tersedia, tetapi bukti command push, commit SHA, branch, atau keberhasilannya pada titik tersebut tidak tersedia dalam dokumen ini. Remote origin telah dikonfirmasi saat penyusunan.

**Prompt asli:**

```text
cek mcp figma yg terhubung dengan ini
```

Hasil pemeriksaan terakhir: `figma.whoami` dan `figma.get_metadata` mengembalikan `Unknown tool`; tidak ada perubahan kode dari pemeriksaan koneksi tersebut.

