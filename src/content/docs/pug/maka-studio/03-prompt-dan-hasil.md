---
title: "MAKA Studio: Katalog Prompt dan Hasil"
description: "Katalog prompt asli MAKA Studio beserta hasil implementasi dan ringkasan prompt yang diberi label."
sidebar:
  label: "Katalog Prompt dan Hasil"
  order: 3
---

> **Catatan sumber:** `project-history-maka.md`, disusun 10 November 2026. Status implementasi dan pengujian di sini merupakan catatan saat dokumentasi dibuat, bukan audit terbaru.

## 5. Katalog prompt dan hasilnya

Katalog berikut adalah **pilihan prompt asli yang tersedia**, bukan seluruh arsip percakapan. Ejaan seperti “lennis”, “gshock”, dan “spalsh” sengaja tidak dikoreksi di dalam kutipan. Hasil di luar code block adalah ringkasan.

### P01 — Arah desain dan interaksi

**Prompt asli:**

```text
beri aku agent.md,
berdasarkan design itu aku akan membuatnya menjadi html dan css, dan js, yang menggunkan lennis dan gsap sebagai interaksinya, harapanya adalah bisa menyamain awwward website yg interaksinya luarbiasa dan diluaar nalar frontend
```

**Hasil:** panduan frontend MAKA, stack vanilla, Lenis/GSAP, dan arah craft editorial.

### P02 — Kerangka project

**Prompt asli:**

```text
oke beri aku kerangka kerja yg mudah di perbaharui, folder assets, kemudian index.html, style.css, script.js. semua atur didalam maka folder, sesuai kerangka kerja yg umum digunakan, tambahkan lennis dan gsap sekalian
```

**Hasil:** entry root dan aset/modul terpisah, npm/Vite untuk tooling.

### P03 — Scope

**Prompt asli:**

```text
scope dari project ini hanya 1 landing tapi menggunkan interaksi yg rumit
```

**Hasil:** satu landing page; tidak menambah Gulp, router, atau framework UI.

### P04 — Modularitas

**Prompt asli:**

```text
oke masukkan ke agent.md kemudahan modulasi .js nya biar lebih ringan dan mudah di bongkar dan tidak tabrakan saat load landingnya
```

**Hasil:** kontrak init/destroy, cleanup, pemisahan section, dan kepemilikan animasi. Banyak file bukan otomatis berarti runtime lebih kecil; hasil build/profiling tetap diperlukan.

### P05 — Gaya penulisan

**Prompt asli:**

```text
oke, kemudian pastikan format penulisan menggunkan BEM di css dan gunakan js nya dengan format penulisan Pemrograman Berorientasi Objek dan Pemrograman Fungsional haybrid gimana enaknya kamu nulisnya, Event-Driven Programming serta Asynchronous & Loop-Based, ya gimana enaknya lah buat lennis dan gshock serta mudah juga manusia baca
```

**Hasil:** BEM, ES modules, class untuk lifecycle/resource, fungsi fitur, event input, async kesiapan aset, dan ticker bersama.

### P06 — Container

**Prompt asli:**

```text
gunakan container max-width nya 1440px padding kanan kiri 32px kecuali header containernya text dan gambar full coba liat contex design, section full 100%,
```

**Hasil:** aturan container standar; About kemudian mendapatkan pengecualian full-width melalui keputusan berikutnya.

### P07 — About pada layar lebar

**Jawaban asli pengguna pada pilihan klarifikasi:**

```text
About full-width, padding 32px agar komposisinya mengikuti lebar layar
```

**Prompt asli lanjutan:**

```text
harsuny yg text kanan besar max withd nya 911px dan
color: #2A2A2A;
font-family: Inter;
font-size: 56px;
font-style: normal;
font-weight: 400;
line-height: 110%; /* 61.6px */
letter-spacing: -3.92px;
```

**Prompt asli lanjutan:**

```text
bikin dia auto, space-between textnya
```

**Hasil:** flex space-between dan ukuran tipografi eksplisit; tidak mengunci kembali About ke container 1440px.

### P08 — Commit awal

**Prompt asli:**

```text
push dulu ke git ku dengan catatan first commit, add header and section 2
```

**Hasil:** commit `00c7646`, dengan pesan sesuai permintaan. Bukti push awal tercatat dalam percakapan; status push commit paling baru belum diverifikasi.

### P09 — Hover services

**Prompt asli:**

```text
hovernya terlalu kasar munculnya, kemudian dia jadi shifting judulnya, harusnya gak berubah tetep, smooth
```

**Hasil:** submenu absolute dan transisi halus tanpa mengubah alur posisi heading.

### P10 — Pose sequence

**Prompt asli:**

```text
jangan pas hover fotonya rubah ketika dia terlihat pas di accrodion terbuka dia play
```

**Prompt asli lanjutan:**

```text
beri sedikit melambat, terlalui cepat pergantianya
```

**Hasil:** sequence accordion hanya play ketika terbuka dan terlihat; tempo akhir 600ms/pose. Foto hero autoplay selama terlihat.

### P11 — Logo preload

**Prompt asli:**

```text
untuk logo nya beri opacity 5% aja, kemudian pas dia selesai menempati navbar, baru 100%
```

**Hasil:** logo 0.05 selama preload/perjalanan; naik ke opacity 1 setelah mencapai navbar.

### P12 — Scramble saat preload

**Prompt asli:**

```text
acak disaat preload, bukan ketika udah masuk ke header
```

**Hasil:** Creative Agency mulai scramble sejak staging preload, lalu pulih ketika foto tiba.

### P13 — Copy hero

**Prompt asli:**

```text
ini juga saat masuk slide dari bawah juga random acak
teks ini "We help brands
grow through
strategy-driven design,
branding,
and digital
experiences."
```

**Hasil:** copy naik sambil scramble selama 1,2 detik, kemudian dipulihkan; struktur text node/span dijaga.

### P14 — Hover lokal About

**Prompt asli:**

```text
ketika di hover jangan semuanya, tapi cuma di area cursor aja yg acak seperty di cipher reveal tadi
```

**Prompt asli lanjutan:**

```text
text yg acak beri warna #EB2E2E
```

**Hasil:** trail lokal radius 0,6em, pulih sekitar 0,45 detik; glyph aktif merah, glyph selesai kembali ke warna semula.

### P15 — Cursor hanya desktop

**Prompt asli:**

```text
tapi cursor ini tak berpengaruh atau di matikan saat di mobile atau di tablet, cursor hilang dia juga hilang
```

**Hasil:** gate pointer/media; hilang dan history cairan dibersihkan pada pointerleave/blur, serta cleanup ketika preferensi/breakpoint berubah.

### P16 — Scramble link

**Prompt asli:**

```text
kemudian link juga acak, pada bagian hover menu di navbar dan footer
```

**Hasil:** hook `data-cipher-link`, hover/focus cipher 0,8 detik; tujuan link dan elemen ikon tetap dipertahankan.

### P17 — Footer reveal

**Ringkasan prompt, bukan kutipan:** footer diminta terasa berada di bawah section sebelumnya dan terbuka saat scroll, memakai Bulletproof atau Room & Pillar sebagai referensi.

**Hasil:** surface wrapper dengan scroll underlay; pola yang sama kemudian diterapkan ke statistik. Link referensi terdapat di [bagian 9](/pug/maka-studio/07-link-dan-referensi/).

### P18 — Reveal dimulai kosong

**Prompt asli:**

```text
sebelum acak dia harusnya hilang dulu, kemudain acak sambil text reveal
```

**Hasil:** About mulai tanpa glyph terlihat, lalu muncul/decode bertahap. Hover tetap lokal.

### P19 — Dua copy statistik

**Prompt asli:**

```text
acak juga pas scroll view di kata ini "Every project
is a
balance of
creativity
and
strategy."
dan ini "We collaborate      with forward-thinking brands to create      meaningful      digital experiences."
```

**Hasil:** cipher scroll dengan opsi preserveMarkup agar baris dan susunan flex tidak rusak.

### P20 — Reload dari section bawah

**Prompt asli:**

```text
kenapa pre-loader gak muncul pas aku reload tepat di section ke 2 atau 3 bukan di header, harusnya dia muncul langsung pas aku reload
```

**Hasil:** reload dibedakan dari deep-link biasa; scroll dikembalikan ke atas dan restoration terlambat ditangani selama preload.

### P21 — Revisi morph oval

**Prompt asli:**

```text
perbaiki transisi disini setelah dia shape seperti final move nya, jangan balik kotak tapi stay oval dan pindah menempati final move nya
```

**Hasil:** tidak mengandalkan interpolasi string shorthand clip-path. Mask dihitung numerik; pada revisi berikutnya mask dan skala digabungkan ke satu progress scene.

### P22 — Revisi crop setelah reload

**Prompt asli:**

```text
ini kenapa jadi gini, setelah di reload kenapa gak full gambar memenuhi section
```

**Hasil:** render deterministik dari satu progress; frame awal memenuhi section, oval memakai crop proporsional setelah refresh.

### P23 — Preset cursor terakhir

**Ringkasan prompt, bukan kutipan:** ganti Splash Cursor mengikuti URL berparameter warna `eb2e2e`, force `2.4`, swirl `12.5`, intensity `0.5`, size `0.75`, glow `0.34`, colorSpeed `3.2`.

**Hasil:** parameter tersebut diterapkan; quality tetap low. URL asli tersedia di [bagian 9](/pug/maka-studio/07-link-dan-referensi/), konfigurasi source dikutip di [bagian 6](/pug/maka-studio/04-implementasi-teknis/).

### P24 — Hero di belakang section 2

**Prompt asli:**

```text
oke sekarang utuk scroll kebawah yg mempengaruhi header, dia berada di belakang section selanjutnya atau section 2 nya
```

**Hasil:** `hero-scroll.js`, wrapper hero khusus scroll, dan About sebagai layer penutup berlatar solid.

