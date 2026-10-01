---
title: "Verity: Prompt Templates — Pug, SCSS, GSAP, dan Lenis"
description: "Dua belas template prompt dari Verity untuk kickoff, implementasi desain Figma, motion, responsive, QA, dan handoff project Pug."
sidebar:
  label: "Prompt Templates"
  order: 2
---

**Hasil website:** [Lihat website Verity](https://enterprise-protoype-site.vercel.app/).


> **Konteks Verity.** Dokumen ini berasal dari project Verity yang menggunakan
> MCP Figma dan Pug. Stack, path, perintah, dan aturan di bawah berlaku untuk
> project Pug yang didokumentasikan. Sumber: `PUG_PROMPT_TEMPLATES.md`.

Gunakan template berikut untuk memulai project dan memberi task yang jelas.
Ganti seluruh placeholder `<...>` sebelum mengirim prompt.

Semua template mengasumsikan stack berikut:

- Vite + Vituum
- Pug murni melalui `@vituum/vite-plugin-pug`
- SCSS/ITCSS dan strict BEM
- Vanilla JavaScript ES modules
- GSAP + ScrollTrigger
- Satu shared Lenis instance
- Tidak menggunakan Nunjucks

## 1. Master Kickoff Prompt

```text
Saya ingin memulai landing page baru di repository:
<repository/path>

Stack wajib:
- Vite + Vituum
- Pug murni melalui @vituum/vite-plugin-pug
- SCSS dengan urutan ITCSS
- Vanilla JavaScript ES modules
- GSAP + ScrollTrigger
- Satu shared Lenis instance untuk seluruh website
- Jangan gunakan Nunjucks atau framework UI

Sebelum implementasi:
1. Periksa repository, branch, package.json, README, AGENTS.md, dan working tree.
2. Jangan switch atau mengubah main.
3. Buat struktur pages/templates/data/styles/scripts/assets yang konsisten.
4. Gunakan BEM untuk styling dan data-* untuk hook JavaScript/GSAP.
5. Registrasikan GSAP hanya di scripts/core/motion.js.
6. Buat Lenis hanya di scripts/core/lenis.js.
7. Tetapkan breakpoint: mobile <48rem, tablet 48–69.999rem,
   desktop >=70rem, large desktop >90rem.
8. Pastikan prefers-reduced-motion didukung.
9. Jalankan format, lint, dan build sebelum handoff.

Design source:
<figma-node-url>

Responsive design:
<desktop-url>
<tablet-url>
<mobile-url>

Asset source:
<asset-folder-or-links>

Target deployment:
<deployment-platform>

Pertama, audit semua input dan buat urutan implementasi. Setelah fondasi
terverifikasi, lanjutkan implementasi tanpa mengubah scope di luar desain.
```

## 2. Setup Foundation Prompt

```text
Siapkan foundation project Pug ini.

Requirements:
- Pug saja, tanpa Nunjucks.
- Vite/Vituum sebagai build tool.
- SCSS ITCSS: settings, tools, generic, elements, objects, components,
  utilities.
- Strict BEM.
- Vanilla ES modules.
- GSAP/ScrollTrigger registration terpusat.
- Satu Lenis singleton.
- Base layout dengan viewport meta, skip link, navbar shell, main, footer,
  stylesheet entry, dan JavaScript entry.
- Data content awal berada di src/data/site.json.
- Tambahkan formatter, ESLint, Stylelint, dan scripts dev/build/preview/
  format/lint.

Jangan implementasikan section desain dahulu. Pastikan baseline kosong berjalan
di browser dan lulus format, lint, serta build. Laporkan struktur file final.
```

## 3. Implementasi Section dari Figma

```text
Implementasikan section <section-name> dari Figma:
<figma-node-url>

State tambahan:
<hover/open/active-node-urls>

Responsive frames:
<tablet-and-mobile-node-urls>

Timeline/reference image:
<timeline-image-path>

Requirements:
- Tambahkan content terstruktur ke src/data/site.json.
- Markup di src/templates/sections/<section-name>.pug.
- Style di src/styles/components/_<section-name>.scss.
- Behavior di src/scripts/sections/<section-name>.js.
- Gunakan class BEM untuk style dan data-* untuk JavaScript.
- Gunakan asset Figma/aset lokal yang tepat; jangan menggambar ulang asset.
- Jangan mengubah section lain yang sudah stabil.
- Implementasikan desktop, tablet, mobile, dan reduced-motion.
- Verifikasi tidak ada horizontal overflow atau content terpotong.
- Jalankan format, lint, dan build.

Mulai dengan layout statis yang akurat, verifikasi, kemudian tambahkan motion.
```

## 4. Scroll Interaction Prompt

```text
Tambahkan scroll interaction pada section <section-name>.

Scene/timeline:
1. <scene-1>
2. <scene-2>
3. <scene-3>
4. <final-scene>

Expected behavior:
<describe-background-content-and-transition>

Constraints:
- Gunakan GSAP + ScrollTrigger yang sudah terdaftar di core/motion.js.
- Gunakan shared Lenis; jangan membuat instance baru.
- Gunakan gsap.matchMedia dengan breakpoint yang sama seperti SCSS.
- Scroll harus smooth dan reversible saat user scroll ke atas.
- State terakhir harus memiliki runway cukup sebelum section berikutnya.
- Hindari blank frame ketika masuk section pertama kali.
- Semua timeline, trigger, listener, dan inline state harus dibersihkan saat
  context di-revert.
- Sediakan reduced-motion layout yang menampilkan seluruh content.
- Uji scroll lambat, cepat, naik, turun, refresh, dan resize.
```

## 5. Responsive Prompt

```text
Revisi responsive untuk section <section-name> tanpa mengganggu desktop dan
mobile yang sudah stabil.

Current stable ranges:
- Mobile: <48rem
- Desktop: >=70rem

Target:
- Tablet 48–69.999rem mengikuti <mobile/custom> interaction.
- Gunakan max content width <value> agar layout tidak terlalu melebar.
- Breakpoint CSS dan gsap.matchMedia harus identik.
- Jangan mengubah navbar atau section lain.

Verifikasi pada 390, 768, 1024, 1119, 1120, 1440, dan 1920px. Laporkan
computed state utama dan pastikan document scrollWidth sama dengan viewport.
```

## 6. Revisi Tanpa Regression

```text
Revisi hanya bagian berikut:
<selector-or-section>

Masalah saat ini:
<specific-problem>

Expected result:
<specific-result>

Yang tidak boleh berubah:
- <stable-section-or-breakpoint-1>
- <stable-section-or-breakpoint-2>
- Existing scroll timing di <section>

Lakukan pemeriksaan read-only terlebih dahulu, buat perubahan sekecil mungkin,
kemudian verifikasi breakpoint yang terdampak dan breakpoint yang harus tetap
stabil. Jalankan format, lint, dan build.
```

## 7. Asset Replacement Prompt

```text
Saya sudah menambahkan asset baru ke:
<asset-folder>

Ganti asset berikut:
- <old> -> <new>
- <old> -> <new>

Requirements:
- Jangan mengubah layout atau interaction.
- Verifikasi path, MIME type, intrinsic dimensions, dan aspect ratio.
- Pastikan semua callsite menggunakan asset baru.
- Jangan hapus asset lama sebelum tidak ada reference tersisa.
- Untuk video, gunakan WebM sebagai source pertama dan MOV sebagai fallback
  Safari; pertahankan muted, playsinline, poster, dan scroll sync.
- Cek browser console dan production build.
```

## 8. Video Scroll-Sync Prompt

```text
Implementasikan video yang bergerak berdasarkan progress scroll pada section
<section-name>.

Assets:
- WebM: <path>
- Safari MOV: <path>
- Poster: <path>

Requirements:
- Video tidak autoplay berdasarkan waktu; currentTime harus mengikuti progress
  ScrollTrigger.
- Tunggu loadedmetadata sebelum seek.
- Gunakan requestAnimationFrame/throttling agar seek tidak berlebihan.
- Video muted, playsinline, preload none.
- Pertahankan satu Lenis instance.
- Jika scale membuat content terpotong, bedakan overflow media wrapper dan
  outer panel; jangan menambah horizontal overflow.
- Tentukan transform/translate terpisah untuk mobile, tablet, desktop, dan
  large desktop jika diperlukan.
- Uji first entry, reverse scroll, fast scroll, reload di tengah, Chromium,
  dan Safari fallback.
```

## 9. Content Sync dari Source Klien

```text
Gunakan source klien berikut sebagai sumber content:
<source-path-or-zip>

Target project tetap menggunakan Pug/SCSS/vanilla JS. Ambil hanya content dan
asset yang diminta; jangan memindahkan framework atau mengubah interaction yang
sudah stabil.

Scope:
- <section-1>: copy + icon
- <section-2>: copy only
- <section-3>: new content block

Bandingkan struktur source, petakan content ke src/data/site.json, lalu ubah
Pug hanya jika struktur content memang baru. Verifikasi tidak ada perubahan
visual di luar scope.
```

## 10. Debug Local vs Deployment Prompt

```text
Tampilan localhost benar tetapi deployment rusak.

Deployment URL:
<url>

Screenshot/error:
<attachment-or-description>

Affected viewport/browser:
<viewport-and-browser>

Diagnose penyebab asli sebelum memperbaiki. Bandingkan viewport meta, compiled
CSS, asset URL/case sensitivity, cache, font/video loading, container width,
overflow, dan runtime console. Buat fix minimum tanpa mengubah section lain,
kemudian verifikasi localhost dan deployment-sized viewport.
```

## 11. Final QA Prompt

```text
Lakukan final QA untuk project Pug ini tanpa menambah fitur baru.

Periksa:
- Format, ESLint, Stylelint, dan production build.
- Console/page errors.
- Horizontal overflow pada 320, 390, 767, 768, 1024, 1119, 1120, 1440,
  dan 1920px.
- Keyboard navigation, focus-visible, aria-expanded/hidden, dan semantic
  headings.
- prefers-reduced-motion.
- Scroll naik/turun, fast scroll, sticky scene terakhir, dan transition antar
  section.
- WebM dan fallback MOV.
- Broken/missing asset serta case-sensitive paths.
- Preview production build, bukan hanya dev server.

Jangan memperbaiki perubahan out-of-scope tanpa melaporkannya. Berikan daftar
hasil, file yang berubah, dan risiko tersisa.
```

## 12. Project Handoff Prompt

```text
Siapkan handoff project Pug ini.

Requirements:
- Pastikan README memuat setup, commands, architecture, dan deployment.
- Dokumentasikan data flow Pug, ITCSS, GSAP registration, dan Lenis singleton.
- Dokumentasikan section composition serta interaction yang tidak obvious.
- Hapus file sementara dan asset yang benar-benar tidak digunakan.
- Jangan menghapus source/handoff file yang masih dibutuhkan integrator.
- Jalankan format, lint, build, dan preview smoke test.
- Tulis ringkasan status Git dan langkah deployment berikutnya.
```
