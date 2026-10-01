---
title: "Verity: Pug Landing Page Project Playbook"
description: "Playbook Verity untuk landing page berbasis Pug, alur desain Figma, SCSS ITCSS, GSAP, Lenis, dan verifikasi."
sidebar:
  label: "Project Playbook"
  order: 1
---

**Hasil website:** [Lihat website Verity](https://enterprise-protoype-site.vercel.app/).


> **Konteks Verity.** Dokumen ini berasal dari project Verity yang menggunakan
> MCP Figma dan Pug. Stack, path, perintah, dan aturan di bawah berlaku untuk
> project Pug yang didokumentasikan. Sumber: `PUG_PROJECT_PLAYBOOK.md`.

Playbook ini adalah panduan reusable untuk memulai dan menjalankan landing page
dengan stack yang dipakai pada versi awal Verity:

- Vite + Vituum
- Pug melalui `@vituum/vite-plugin-pug`
- SCSS dengan urutan ITCSS
- Vanilla JavaScript ES modules
- GSAP + ScrollTrigger
- Satu instance Lenis untuk seluruh website

Project ini menggunakan **Pug murni**. Jangan menambahkan Nunjucks, React, Vue,
atau template engine lain kecuali scope project memang berubah dan disetujui.

## 1. Prinsip Utama

1. Tentukan stack final sebelum implementasi visual dimulai.
2. Bangun fondasi, tokens, dan shell halaman sebelum membuat section.
3. Kerjakan satu section sampai stabil pada desktop, tablet, dan mobile.
4. Pisahkan markup, style, content, dan behavior.
5. Gunakan class BEM hanya untuk styling dan `data-*` untuk JavaScript.
6. Daftarkan GSAP plugin di satu tempat dan buat Lenis hanya sekali.
7. Semua motion harus mempunyai fallback `prefers-reduced-motion`.
8. Verifikasi di browser dan production build sebelum pindah ke section berikutnya.
9. Jangan memperbaiki satu breakpoint dengan merusak breakpoint yang sudah stabil.
10. Commit dalam unit kecil yang mudah direview dan dipulihkan.

## 2. Informasi yang Harus Dikumpulkan Saat Kickoff

Sebelum menulis kode, pastikan tersedia:

- URL repository dan branch kerja.
- URL Figma yang mengarah ke node spesifik, bukan hanya file utama.
- Frame desktop, tablet, mobile, serta state hover/open/active.
- Timeline interaksi jika desain bergantung pada scroll.
- Copy final atau sumber data dari klien.
- Daftar asset final: font, SVG, image, video WebM, dan fallback Safari.
- Target browser dan ukuran layar utama.
- Platform deployment serta domain preview/production.
- Section mana yang reusable dan mana yang unik.
- Batas perubahan: section stabil yang tidak boleh ikut berubah.

Jika copy, asset, atau timeline belum final, tandai sebagai dependency. Jangan
menebak asset final dari screenshot jika file sumber akan diberikan kemudian.

## 3. Setup Project Baru

### 3.1 Requirements

- Node.js 20.19+ atau 22.12+
- npm
- Git

### 3.2 Package awal

Cara tercepat adalah menyalin starter repository yang sudah memiliki struktur
di bawah. Jika harus membuat dari nol:

```sh
mkdir nama-project
cd nama-project
npm init -y

npm install gsap@^3.15.0 lenis@^1.3.26
npm install -D vite@^8.3.0 vituum@^2.0.2 \
  @vituum/vite-plugin-pug@^2.0.1 pug@^3.0.4 sass@^1.104.1 \
  eslint@^10.10.0 stylelint@^17.15.0 \
  stylelint-config-standard-scss@^17.0.0 \
  prettier@^3.9.6 @prettier/plugin-pug@^3.4.2
```

Tambahkan `"type": "module"` dan scripts berikut ke `package.json`:

```json
{
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "format": "prettier --write . --ignore-unknown",
    "lint": "eslint . && stylelint \"src/styles/**/*.scss\" && prettier --check . --ignore-unknown"
  }
}
```

Setelah repository memiliki `package-lock.json`, gunakan `npm ci` pada komputer
atau CI baru agar versi dependency konsisten.

### 3.3 Konfigurasi Vite

Gunakan `vite.config.js`:

```js
import { defineConfig } from "vite";
import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";

export default defineConfig({
  plugins: [
    vituum({
      imports: {
        paths: [],
      },
    }),
    pug({
      root: "./src",
      options: {
        pretty: true,
      },
    }),
  ],
});
```

Tidak perlu memasang atau mengonfigurasi Nunjucks.

### 3.4 Formatter dan lint

`.prettierrc.json`:

```json
{
  "plugins": ["@prettier/plugin-pug"],
  "semi": false,
  "singleQuote": true
}
```

`eslint.config.js` minimal:

```js
export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      eqeqeq: "error",
      "no-undef": "error",
      "no-unused-vars": "error",
    },
  },
];
```

Gunakan Stylelint dengan aturan nama class BEM yang ketat. Jangan mengecualikan
selector hanya untuk mempercepat implementasi; perbaiki nama class-nya.

## 4. Struktur Folder Standar

```text
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── video/
├── data/
│   └── site.json
├── pages/
│   └── index.pug
├── scripts/
│   ├── core/
│   │   ├── lenis.js
│   │   └── motion.js
│   ├── components/
│   ├── sections/
│   └── main.js
├── styles/
│   ├── settings/
│   ├── tools/
│   ├── generic/
│   ├── elements/
│   ├── objects/
│   ├── components/
│   ├── utilities/
│   └── main.scss
└── templates/
    ├── layouts/
    ├── components/
    └── sections/
```

### Tanggung jawab setiap area

- `pages`: entry page yang dibangun Vite.
- `templates/layouts`: shell HTML bersama seperti `doctype`, head, navbar, main,
  footer, stylesheet, dan JavaScript entry.
- `templates/sections`: markup section level halaman.
- `templates/components`: mixin yang benar-benar dipakai ulang, seperti button,
  tag, atau navbar item.
- `data`: content terstruktur. Hindari object dan kondisi kompleks di Pug.
- `styles/components`: satu partial SCSS per block/section.
- `scripts/sections`: initializer dan interaksi khusus section.
- `scripts/components`: behavior komponen reusable.
- `scripts/core`: runtime global yang hanya boleh dibuat sekali.

## 5. Aturan Pug

- Page harus `extends` layout dasar.
- Section statis menggunakan `include`.
- Gunakan mixin hanya jika markup digunakan ulang atau memiliki variasi jelas.
- Jaga nesting tetap dangkal dan semantik.
- Gunakan `button` untuk aksi, `a` untuk navigasi, dan heading berurutan.
- Selalu berikan `alt`, `aria-*`, label, dan state accessibility yang sesuai.
- Jangan memasukkan ekspresi JavaScript kompleks ke template.
- Simpan array, label, link, dan konfigurasi content di `src/data/site.json`.
- Jangan gunakan class BEM sebagai selector JavaScript.

Contoh page composition:

```pug
extends ../templates/layouts/base.pug

block content
  include ../templates/sections/hero.pug
  include ../templates/sections/problem.pug
  include ../templates/sections/value-table.pug
  include ../templates/sections/final-cta.pug

block footer
  include ../templates/sections/site-footer.pug
```

## 6. Aturan SCSS

Entry `src/styles/main.scss` harus mempertahankan urutan ITCSS:

```scss
@use "settings";
@use "tools";
@use "generic";
@use "elements";
@use "objects";
@use "components";
@use "utilities";
```

### BEM

Gunakan bentuk berikut:

- `.block`
- `.block__element`
- `.block--modifier`
- `.block__element--modifier`

Hindari class generik seperti `.left`, `.box2`, atau `.active-card`. State runtime
ditulis melalui attribute, misalnya `.decision-flow__step[data-state='active']`.

### Tokens

- Definisikan warna, font, container, dan gutter di `styles/settings`.
- Jangan membuat nilai token baru jika desain sudah memiliki token yang setara.
- Gunakan CSS custom properties untuk nilai yang perlu dibaca atau berubah saat
  runtime, seperti panjang scroll section.

### Responsive contract

Tentukan breakpoint sekali di awal. Contract yang terbukti cocok untuk project
ini:

- Mobile: `< 48rem`
- Tablet: `48rem–69.999rem`
- Desktop: `>= 70rem`
- Large desktop: `> 90rem`

Jangan membiarkan CSS dan `gsap.matchMedia()` memakai breakpoint yang berbeda.

## 7. JavaScript, GSAP, dan Lenis

### 7.1 Satu tempat registrasi GSAP

`src/scripts/core/motion.js`:

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
```

Jangan memanggil `gsap.registerPlugin()` lagi di module section.

### 7.2 Satu Lenis instance

`src/scripts/core/lenis.js` adalah satu-satunya lokasi yang membuat Lenis.
Module section boleh mengimpor instance tersebut, tetapi tidak boleh membuat
instance baru.

```js
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./motion.js";

const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

const lenis = new Lenis({
  autoRaf: false,
  smoothWheel: !reducedMotionQuery.matches,
});

lenis.on("scroll", ScrollTrigger.update);

const updateLenis = (time) => {
  lenis.raf(time * 1000);
};

gsap.ticker.add(updateLenis);
gsap.ticker.lagSmoothing(0);

export { lenis };
```

### 7.3 Section initializer

Setiap section mengekspor fungsi kecil dan eksplisit:

```js
import { gsap } from "../core/motion.js";

const initExampleSection = () => {
  const section = document.querySelector("[data-example-section]");
  if (!section) return;

  const media = gsap.matchMedia();

  media.add(
    "(min-width: 70rem) and (prefers-reduced-motion: no-preference)",
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      return () => timeline.kill();
    },
  );

  return () => media.revert();
};

export { initExampleSection };
```

`main.js` hanya mengimpor runtime dan memanggil initializer. Jangan menaruh
seluruh logic section di entry file.

### 7.4 Selector behavior

Markup:

```pug
section.example(data-example-section)
  button.example__trigger(type='button', data-example-trigger)
```

JavaScript:

```js
const trigger = section.querySelector("[data-example-trigger]");
```

SCSS tetap menggunakan `.example__trigger`. Pemisahan ini mencegah refactor
style merusak behavior.

## 8. Flow Implementasi Desain

### Phase 1 — Foundation

1. Buat repository dan branch kerja.
2. Pasang dependency dan jalankan baseline build.
3. Siapkan tokens, font, reset, container, button, dan tag.
4. Buat layout Pug, navbar, main, dan footer shell.
5. Integrasikan GSAP, ScrollTrigger, dan Lenis singleton.
6. Pastikan halaman kosong lulus format, lint, dan build.

### Phase 2 — Static section

Untuk setiap section:

1. Ambil node Figma spesifik dan screenshot target.
2. Inventarisasi text, layout, asset, state, dan breakpoint.
3. Tambahkan content ke `site.json`.
4. Buat Pug semantik tanpa motion.
5. Buat SCSS desktop dan responsive.
6. Verifikasi layout statis di browser.
7. Commit sebelum menambahkan interaction kompleks.

### Phase 3 — Interaction

1. Tuliskan scene dan progress range sebelum membuat timeline.
2. Gunakan satu timeline utama per sticky section jika memungkinkan.
3. Buat interaction desktop dan mobile/tablet secara eksplisit; jangan memaksa
   timeline desktop menjadi responsive jika komposisinya berbeda.
4. Gunakan `gsap.matchMedia()` dengan breakpoint yang sama seperti CSS.
5. Tambahkan cleanup untuk timeline, ScrollTrigger, listener, dan inline style.
6. Tambahkan fallback reduced-motion.
7. Uji scroll lambat, cepat, naik, turun, refresh di tengah section, dan resize.

### Phase 4 — Content dan asset final

1. Sinkronkan copy klien tanpa mengubah interaction yang sudah stabil.
2. Ganti asset melalui data atau path yang terpusat.
3. Hapus asset lama hanya setelah semua callsite dipastikan tidak menggunakannya.
4. Verifikasi SVG tidak gepeng dan image/video memakai aspect ratio benar.
5. Untuk video, sediakan WebM lebih dulu dan MOV sebagai fallback Safari.

### Phase 5 — Final QA

1. Verifikasi seluruh breakpoint matrix.
2. Periksa keyboard, focus state, aria state, dan reduced motion.
3. Periksa console error, layout shift, dan horizontal overflow.
4. Jalankan format, lint, production build, dan preview.
5. Deploy preview dan ulangi smoke test pada URL deployment.
6. Commit dan push hanya setelah working tree sesuai scope.

## 9. Scroll Section Checklist

Untuk sticky atau pinned section, jawab pertanyaan berikut sebelum coding:

- Berapa scene yang dibutuhkan?
- Apa state awal dan state akhir?
- Berapa lama runway scroll yang wajar?
- Apakah content terakhir memiliki cukup waktu sebelum section berikutnya masuk?
- Apakah background dan foreground memakai progress yang sama?
- Apa layout alternatif pada mobile/tablet?
- Apa yang terjadi jika user scroll sangat cepat?
- Apa yang terjadi saat viewport berubah melewati breakpoint?
- Apakah content tetap bisa dibaca ketika JavaScript gagal atau motion dikurangi?

Gunakan CSS custom property untuk panjang section jika nilainya dihitung oleh
JavaScript. Jangan menyembunyikan content penting hanya karena timeline belum
aktif.

## 10. Video yang Dikendalikan Scroll

- Gunakan `<video muted playsinline preload='none'>`.
- Letakkan WebM sebelum MOV.
- Sediakan poster agar state awal tidak blank.
- Tunggu metadata sebelum melakukan seek.
- Clamp progress antara `0` dan `1`.
- Hindari seek berlebihan pada setiap event; sinkronkan melalui animation frame.
- Kualitas, jumlah frame, encoding keyframe, dan resolusi asset menentukan
  kelancaran. CSS tidak dapat memperbaiki sumber video yang pecah atau memiliki
  frame hilang.
- Jika memakai `scale()`, bedakan clipping wrapper media dan clipping panel.
  Biarkan media overflow jika video perlu meluas ke belakang content, lalu clip
  hanya pada batas section terluar.
- Uji WebM di Chromium/Firefox dan MOV di Safari.

## 11. Responsive Workflow

Uji minimal pada ukuran berikut:

| Target           |          Lebar |
| ---------------- | -------------: |
| Mobile kecil     |          320px |
| Mobile utama     |          390px |
| Mobile besar     |          767px |
| Tablet portrait  |          768px |
| Tablet landscape |         1024px |
| Batas tablet     |         1119px |
| Awal desktop     |         1120px |
| Desktop desain   |         1440px |
| Large desktop    | 1920px atau 4K |

Pada setiap ukuran, periksa:

- `document.documentElement.scrollWidth === window.innerWidth`
- Text tidak terpotong.
- Sticky content dapat mencapai state terakhir.
- Footer tidak masuk sebelum section sebelumnya selesai.
- Cards, image, dan video tetap proporsional.
- Navbar terbaca di background terang dan gelap.
- Hover-only content memiliki versi touch/mobile.

## 12. Asset Workflow

- Simpan font di `src/assets/fonts`.
- Simpan icon sederhana sebagai SVG di `src/assets/icons`.
- Simpan image section di `src/assets/images`.
- Simpan video di `src/assets/video`.
- Gunakan nama lowercase-kebab-case tanpa spasi untuk asset baru.
- Catat dimensi dan tujuan setiap video/image sebelum integrasi.
- Jangan menggambar ulang asset Figma yang sudah diberikan.
- Jangan menyimpan rahasia, token, atau private key di front-end asset/data.

## 13. Git Workflow

1. Pastikan `git status` dipahami sebelum mengubah file.
2. Gunakan feature branch; jangan bekerja langsung di `main`.
3. Commit foundation sebelum section pertama.
4. Commit per section atau per revisi interaction yang koheren.
5. Jangan mencampur cleanup tidak terkait ke commit visual.
6. Sebelum push, jalankan:

```sh
npm run format
npm run lint
npm run build
git diff --check
```

Jika sebuah website akan hidup dan dirilis terpisah, gunakan repository terpisah.
Branch jangka panjang hanya cocok untuk eksperimen atau calon pengganti, bukan
untuk dua produk yang harus dipelihara bersamaan.

## 14. Verification dan Definition of Done

Sebuah section selesai jika:

- Markup semantik dan accessible.
- Pug menggunakan data terstruktur dan nesting wajar.
- SCSS mengikuti BEM dan tidak bocor ke section lain.
- JavaScript menggunakan `data-*` hook.
- Interaction bekerja ke bawah dan ke atas.
- Mobile, tablet, desktop, dan large desktop sudah dicek.
- Reduced-motion tetap menyajikan seluruh content.
- Tidak ada console error atau horizontal overflow.
- Format, lint, dan build lulus.
- Perubahan hanya menyentuh scope yang diminta.

Project selesai jika seluruh section memenuhi checklist di atas, preview
deployment sudah diuji, content/asset final sudah terpasang, dan dokumentasi
handoff sudah diperbarui.

## 15. Pelajaran Penting dari Verity

- Tentukan teknologi final di awal. Refactor framework setelah seluruh motion
  selesai menambah risiko besar.
- Jangan menunggu akhir project untuk mobile. Selesaikan responsive per section.
- Tablet perlu contract sendiri walaupun layout-nya mengikuti mobile.
- Scroll runway adalah bagian desain, bukan detail implementasi.
- State terakhir harus mendapat ruang sebelum transisi ke section berikutnya.
- Gunakan satu Lenis. Multiple smooth-scroll instances menimbulkan konflik.
- Pisahkan class style dan hook JavaScript sejak awal.
- Jangan mengandalkan hover untuk content penting pada touch device.
- Large desktop harus diuji; layout 1440px belum menjamin aman di 1920px/4K.
- Asset video final sebaiknya tersedia sebelum tuning posisi dan scale.
- Selalu cek deployment nyata karena viewport meta, caching, path, dan browser
  codec dapat berbeda dari localhost.

## 16. Day-One Checklist

```text
[ ] Repository dan branch kerja benar
[ ] README dan AGENTS.md sesuai stack
[ ] Node/npm version benar
[ ] npm install/npm ci berhasil
[ ] npm run dev berjalan
[ ] npm run lint dan npm run build lulus
[ ] Figma node dan responsive frames tersedia
[ ] Content source dan asset inventory tersedia
[ ] Breakpoint contract disepakati
[ ] Tokens/font/container/button sudah dibuat
[ ] GSAP registration terpusat
[ ] Lenis singleton aktif
[ ] Baseline commit dibuat
```
