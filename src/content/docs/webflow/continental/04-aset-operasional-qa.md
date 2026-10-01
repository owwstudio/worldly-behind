---
title: "Continental: Aset, Operasional, dan QA"
description: "Manifest aset Continental, perawatan Webflow, checklist QA, serta pemeriksaan konten sebelum distribusi publik."
sidebar:
  label: "Aset, Operasional, dan QA"
  order: 4
---

**Hasil website:** [Lihat website Continental](https://continentals.webflow.io/).

> **Dokumentasi Continental.** Sumber: `04-aset-operasional-qa.md`.

[Kembali ke indeks](/webflow/continental/)

## Manifest aset utama

Daftar ini menggabungkan sumber yang pernah diberikan selama proyek dengan file yang terbaca pada situs live. Nama file lokal adalah asal kerja di komputer pembuat, **bukan lokasi bersama**; tim perlu menyimpan salinan canonical di storage bersama. URL CDN Webflow menunjukkan aset yang sedang dirujuk halaman live, dan dapat berubah bila aset diganti.

### Identitas dan hero

| Peran | Sumber/provenance | Aset live atau rujukan |
| --- | --- | --- |
| Logo empat vector untuk preloader/Navbar | `logo-brand-vector.svg`; [Figma 77:1787](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team?node-id=77-1787&m=dev) | Geometry mark juga hadir dalam implementasi preloader SVG/embed. |
| Gambar hero | `header__bg.png` | [Webflow hero image (WebP)](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a9532d27e99d02e2e2b802d_navbar__image.webp), class `.image__header`. Nama file upload berbeda dari nama sumber. |
| Ikon panah hero | `ArrowUpRight.svg` pernah diberikan sebagai sumber | [Aset arrow yang dipakai di hero](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a96581c63c3b059c83ed9d0_hero-arrow-up-right.png). |

### Lima model Flavor System

| Varian | Nama sumber yang diberikan | File `.glb` yang dirujuk halaman live |
| --- | --- | --- |
| Lime & Coconut | `lime-coconut.glb` | [lime-coconut-3d.glb](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a966a137b9e91b8cba129ca_lime-coconut-3d.glb) |
| Raspberry & Pomegranate | `raspberry.glb` | [raspberry-pomegranate-3d.glb](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a9678e5ddecd5fe40c19c90_raspberry-pomegranate-3d.glb) |
| Cola & Vanilla | `Meshy_AI_One_Zero_Cola_Vanil_0901032806_texture.glb` | [cola-vanilla-3d.glb](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a965ce1aad44f740a4d3f74_cola-vanilla-3d.glb) |
| Mango & Guava | `mango guava.glb` | [mango-guava-3d.glb](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a966a1468a4f0505f2707cd_mango-guava-3d.glb) |
| Peach & Strawberry | `peach-strawberry.glb` | [peach-strawberry-3d.glb](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a966a1591feefafaa6061fb_peach-strawberry-3d.glb) |

File model awal berasal dari workflow image-to-3D yang didiskusikan memakai Tripo3D/Meshy, lalu diunggah ke Webflow. Lisensi, hak pakai gambar sumber, dan provenance setiap output AI perlu disimpan oleh pemilik brand; dokumentasi ini tidak mengaudit status hukum aset.

### Imagery section lain

| Peran | Aset live |
| --- | --- |
| Dua kaleng Lime & Coconut di awal Flavor panel | [duoble-bottle.png](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a96441ad359295e43cb5ae5_duoble-bottle.png) — ejaan file sumber tetap seperti upload |
| Tiga kaleng Product System | [Peach](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a992bf51b4fae54aaee139c_peach%20bottle.png), [Lime](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a992bf55bc88d38e3d8f726_lime%20bottle.png), [Mango](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a992bf5ef5a360bc237f490_mango%20bottle.png) — ini **gambar PNG**, bukan tiga model 3D live |
| Card Philosophy | [Cola & Vanilla packaging image](https://cdn.prod.website-files.com/6a8ffb176820e6586d4d6c32/6a9931e44ba570adecf7ec2e_Frame%202147227697.png) |

## Peta perawatan di Webflow

| Bila tim ingin mengubah… | Periksa dahulu… |
| --- | --- |
| Copy/layout sebuah section | Elemen Home + class section + frame Figma yang terkait. Pastikan selector embed motion masih cocok. |
| Warna/font/spacing/radius | Webflow Variables dan class dasar sebelum menambah variable/class baru. Hindari duplikasi. |
| Navbar/Footer | Reusable component, bukan hanya satu instance di canvas. |
| Model 3D/flavor list | URL pada `data-model-url`, source `<model-viewer>`, urutan list, count, state aktif, alt/aria, dan sticky scroll range. |
| Preloader/hero | Embed preloader, CSS/JS hero reveal, body scroll lock, dan stacking Navbar/hero/section berikutnya. |
| Timing scroll | GSAP ScrollTrigger + Lenis, tinggi section, model/image load, serta `ScrollTrigger.refresh()`. Uji arah turun **dan** naik. |
| Link/CTA | Tujuan `href`, label aksesibilitas, perilaku keyboard/focus, dan halaman tujuan yang benar-benar ada. |

Sebelum edit besar, buat backup versi Webflow atau salinan site sesuai prosedur tim. Setelah edit, uji di preview dan URL staging/site live sesuai hak publikasi. Dokumentasi ini tidak melakukan perubahan maupun publish.

## QA minimum untuk perubahan berikutnya

1. **Desktop, tablet, mobile:** hero tetap 1 layar; H1 terbaca di area gelap; tidak ada horizontal overflow atau kaleng terpotong secara tak sengaja.
2. **Preloader:** muncul tiap refresh; tidak bisa scroll ke footer saat tertutup; selesai tanpa focus/pointer trap; halaman mulai di posisi benar; reduced motion tidak mengunci pengalaman.
3. **Scroll turun dan naik:** kaleng quote → Flavor memakai jalur yang sama dua arah; tidak ada garis overflow/shadow clipping; batas `01 / 05` dan `05 / 05` tidak overshoot.
4. **Flavor selector:** kelima model termuat, URL benar, count/list/signal rail selaras, respons keyboard/touch masuk akal, dan fallback terbaca jika WebGL/model gagal.
5. **Typography/layout shift:** Inter terpakai pada quote dan volume; decode tidak meninggalkan glyph sisa; label panjang tetap satu baris bila desain meminta; nutrition “OF WHICH SUGARS” serta bottom rail tidak meloncat.
6. **Product/Philosophy:** tiga kaleng tidak saling menembus dan berhenti sekitar tengah viewport; card/band Philosophy tidak memotong konten; `***` loop tidak menggeser layout.
7. **Navbar contrast:** mark dan wordmark kontras pada hero gelap, section putih, panel hitam, dan batas antar-section.
8. **Performance:** ukur beban lima `.glb`, waktu render di perangkat menengah, frame rate scroll, gambar responsive, dan mode hemat gerak.
9. **Konsol browser:** tidak ada error script, request aset gagal, atau inisialisasi motion ganda.

## Pemeriksaan konten sebelum distribusi publik

Situs disebut selesai sebagai proyek desain/interaksi, tetapi pemeriksaan markup live menemukan beberapa hal yang sebaiknya diberi keputusan konten oleh tim sebelum mengarahkan traffic kampanye:

- Banyak CTA, footer navigation, dan social link masih `href="#"`; tetapkan URL/anchor nyata bila memang harus berfungsi. Ini juga berlaku untuk arrow “Discover the Blends”.
- Label Product System **“Pofile”** tampak seperti typo untuk “Profile”.
- Beberapa copy/wordmark memakai **“Continen”** sedangkan nama site/title adalah **“Continental”**. Konfirmasi apakah ini sengaja sebagai brand treatment atau perlu diseragamkan.
- Metadata page yang terbaca dari API belum mencantumkan detail SEO/Open Graph khusus; tim konten/SEO perlu mengisi title, description, social image, dan kebijakan indexing sesuai rencana peluncuran.
- Inventaris CMS tidak dapat diverifikasi lewat akses read-only connector pada penyusunan dokumen ini. Struktur Home live yang diperiksa tidak menunjukkan ketergantungan CMS yang jelas, tetapi cek panel CMS Webflow sebelum menyatakan site sepenuhnya statis.

## Rujukan cepat

- [Site live](https://continentals.webflow.io/)
- [Figma file](https://www.figma.com/design/FkXglC7ztx7bIPEcHOGSHD/MCP-by-irpun-dev-team)
- [Riwayat keputusan](/webflow/continental/01-perjalanan-proyek/)
- [Struktur dan token](/webflow/continental/02-struktur-dan-design-system/)
- [Motion dan interaksi](/webflow/continental/03-motion-dan-interaksi/)
