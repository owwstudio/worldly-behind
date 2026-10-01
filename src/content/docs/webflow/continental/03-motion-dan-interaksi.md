---
title: "Continental: Motion dan Arsitektur Interaksi"
description: "Arsitektur motion Continental dengan GSAP, ScrollTrigger, Lenis, model-viewer, preloader, dan interaksi scroll yang reversibel."
sidebar:
  label: "Motion dan Interaksi"
  order: 3
---

**Hasil website:** [Lihat website Continental](https://continentals.webflow.io/).

> **Dokumentasi Continental.** Sumber: `03-motion-dan-interaksi.md`.

[Kembali ke indeks](/webflow/continental/)

## Bahasa motion

Situs memakai bahasa interaksi yang berangkat dari bentuk visualnya: halftone/dots, tipografi seperti sistem yang sedang dikalibrasi, garis teknis, dan gerak kaleng yang mempunyai sebab-akibat dengan scroll. Patokan saat menambah interaksi baru adalah **reveal yang terbaca, state yang reversibel, dan layout yang tetap stabil**. Jangan menambahkan decode pada setiap kata bila akibatnya ritme baca menjadi melelahkan.

Pola yang berulang:

| Pola | Perilaku | Pemakaian |
| --- | --- | --- |
| Decode karakter | Karakter berubah dari glyph acak menuju teks final; dimensi teks tetap dikunci agar tidak layout shift | Quote, Flavor System, Product System, Philosophy, sebagian label/CTA |
| Sequential reveal | Anak elemen tampil berurutan, bukan serentak | Flavor list, nutrition rows, meta/copy, elemen Product System |
| Line draw | Border/rule tumbuh dari kiri ke kanan lalu item mengikuti | Nutrition dan list/rail |
| Scroll-linked object | Posisi dan rotasi mengikuti progres scroll; saat scroll balik, kembali lewat jalur yang sama | Journey kaleng menuju Flavor display; kemasan Product System |
| Loop micro | Gerak kecil berulang tanpa trigger | Simbol `***` pada Flavor dan Product System |
| Contrast adaptation | Warna mark/teks merespons latar di bawah Navbar | Navbar fixed |

## Teknologi yang ada pada halaman live

Markup yang diterbitkan memuat **GSAP**, **ScrollTrigger**, **Lenis**, dan `<model-viewer>`, beserta script/embed khusus per section. GSAP/ScrollTrigger mengatur timeline dan progres scroll; Lenis menyelaraskan smooth scroll; model-viewer menampilkan file `.glb`. Ini adalah gabungan Webflow layout + custom code. Jika struktur/class Webflow diubah, periksa selector pada embed terkait, bukan hanya style di Designer.

### Kontrak integrasi penting

1. Inisialisasi interaksi setelah DOM dan dependensi tersedia. Timeline tidak boleh dibuat dua kali saat halaman di-preview atau script di-inject ulang.
2. Jika Lenis aktif, update ScrollTrigger dari event scroll Lenis dan sinkronkan refresh setelah ukuran model/gambar berubah.
3. Pertahankan state default yang masih dapat dibaca saat JavaScript gagal atau `prefers-reduced-motion` aktif.
4. Gerakkan elemen dengan transform/opacity/clip, bukan mengubah lebar teks atau posisi flow yang menyebabkan layout shift.
5. Gunakan `will-change` terbatas pada elemen yang benar-benar bergerak; model 3D, full-screen preloader, dan beberapa layer fixed sudah berat.

## Preloader: dari logo ke hero

**Konsep final:** empat potongan SVG mark dimulai sebagai unit terpisah/konfigurasi lingkaran, menyatu menjadi logo, kemudian mark mengecil dan bergerak ke lokasi brand Navbar. Wordmark “Continental” menyusul. Veil hitam berubah menjadi struktur dot halftone kecil yang menyatu dengan visual hero, lalu menghilang. Animasi berlangsung otomatis tanpa tombol “open”, angka loading, atau teks instruksi.

Perilaku fungsional yang harus tetap dijaga:

- Tampil pada **setiap refresh**, bukan sekali per sesi.
- Selama preloader aktif, wheel, touch, keyboard scroll, dan Lenis tidak boleh membawa halaman ke bawah di balik overlay. Saat selesai, kunci dilepas dan posisi awal tetap sesuai rencana.
- Saat user memakai reduced motion, isi situs tetap dapat diakses tanpa menunggu koreografi panjang.
- Overlay berada paling atas hanya saat aktif; setelah selesai tidak boleh menangkap pointer, fokus, atau scroll.
- Transisi terakhir harus terasa seperti halftone hero, bukan wipe kiri-ke-kanan atau fade gelap generik.

Sumber geometri logo: [Figma 77:1787](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-1787&m=dev) dan `logo-brand-vector.svg`. Berkas SVG sumber berisi empat vector pada group 24×24; jangan menggantinya dengan raster bila ingin mempertahankan koreografi tiap bagian.

## Hero dan layering

Hero final menggunakan `header__bg` sebagai gambar statis. Section setinggi satu viewport dan sticky; section setelahnya berada di atasnya ketika user scroll. H1 dan arrow diletakkan pada zona hitam gambar sehingga tetap kontras. Background boleh terpotong sesuai rasio viewport. Layer preloader, Navbar, hero, logo-loop, quote, dan objek 3D harus memiliki urutan stacking yang sengaja diatur; perubahan `overflow`, `position`, atau `z-index` pada parent dapat memunculkan lagi bug objek terpotong.

**Bukan bagian build saat ini:** particle hover pada hero, Three.js displacement, video ASCII Magic, atau background video loop. Itu pernah dibahas tetapi ditunda untuk konsep tersendiri.

## Quote → Flavor: satu perjalanan kaleng

Kaleng Lime & Coconut muncul dari belakang area points saat quote kira-kira setengah masuk viewport. Ia terlihat solid (tanpa fade masuk), berada di belakang teks quote, lalu mempertahankan posisi visual dekat tengah layar lewat teknik sticky/scroll-linked. Rotasi dan kemiringan kanan mengikuti gerakan scroll; saat scroll berhenti, putaran tidak terus berjalan. Menjelang display Flavor, kaleng berorientasi tegak dan masuk ke slot product model.

Perjalanan ini harus **reversibel**. Jika user scroll dari bawah ke atas, kaleng kembali pada lintasan yang sama, tidak meloncat dulu ke tengah. Batas progres harus dijepit agar pada varian `05 / 05` kaleng tidak melampaui display. Area render/bayangan tidak boleh dipotong oleh overflow parent. Ini adalah area paling sensitif ketika tinggi section, sticky range, atau breakpoint diubah.

## Flavor System: varian 3D dan count

Lima varian yang terdaftar di markup live, dengan urutan dan nama tampil:

| Nomor | Varian | Key |
| --- | --- | --- |
| 01 / 05 | Lime and Coconut | `lime-coconut` |
| 02 / 05 | Raspberry and Pomegranate | `raspberry-pomegranate` |
| 03 / 05 | Cola and Vanilla | `cola-vanilla` |
| 04 / 05 | Mango and Guava | `mango-guava` |
| 05 / 05 | Peach and Strawberry | `peach-strawberry` |

Product card dan daftar memakai atribut seperti `data-flavor-key`, `data-model-url`, dan `aria-pressed`. Pengalaman utama sekarang mengikuti scroll pada area sticky: model aktif, baris daftar, signal rail, dan angka harus selalu menunjukkan varian yang sama. Hover/focus boleh memberi preview atau affordance bila script mendukungnya, tetapi perubahan utama tidak boleh bergantung pada hover—mobile tidak memilikinya. Model di display berputar perlahan sesuai perilaku yang disetujui, sementara journey dari quote berputar khusus menurut scroll. Jika salah satu model gagal dimuat, jangan biarkan card kosong tanpa alt/fallback.

Di bagian bawah Flavor, nutrition row menampakkan tiap baris secara berurutan, termasuk copy dan garis yang tumbuh. Intro aside, lab meta, list item, inside, volume, dan bottom rail memakai pola yang senada. Saat memodifikasi teks, uji label panjang seperti “Raspberry and Pomegranate”, “Lime and Coconut”, serta “OF WHICH SUGARS” agar tidak terpotong atau melompat baris tak sengaja.

## Product System, Philosophy, dan logo-loop

Product System menggunakan ritme reveal serupa. Visual tiga kaleng masuk dari tepi kanan viewport ketika section mulai terlibat, bergerak dan berguling selaras scroll, diberi jarak agar siluet tidak saling menembus, lalu berhenti dengan kaleng pertama maksimal sekitar tengah layar. Pergerakannya tidak menyeberang seluruh layout. Simbol `***` pada `.product-system-count` looping secara subtil sambil tetap berada dalam reveal parent `.ps-reveal-leaf`.

Philosophy memakai reveal/decode lebih tertahan agar heading kanan, card pusat, dan band hitam tetap menjadi fokus. Band hitam merupakan motif yang juga menginspirasi gerak `.logo-loop`. Topik di bawahnya harus mempertahankan teks **Identity**, Blends, Insights, Collaborations. Card pusat tetap dapat memiliki respons hover kecil tanpa mengganggu komposisi.

## Micro-interaction dan reduced motion

Simbol `***` pada `.flavor-system-product-mark` dan `.product-system-count` berulang: dua simbol luar sedikit menjauh, kemudian mendekat lagi ke bentuk tiga bintang yang rapat. Wrapper harus punya ruang tetap agar tidak menggoyang count atau kolom di sekitarnya. Ketika `prefers-reduced-motion: reduce`, tampilkan simbol statis.

Navbar logo dan teks mengikuti latar. Implementasi yang dipilih memeriksa elemen di belakang posisi Navbar (`elementsFromPoint`) lalu mengubah warna teks serta filter icon. CSS `mix-blend-mode: difference` sempat dicoba, tetapi tidak konsisten karena stacking context. Saat menambah section baru, uji Navbar di latar hitam, putih, dan transisi keduanya; jangan mengubah warna CTA hanya karena wordmark berubah jika desainnya tidak meminta itu.
