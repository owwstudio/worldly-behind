---
title: "MAKA Studio: Implementasi Teknis"
description: "Struktur source, lifecycle JavaScript, Lenis, GSAP, preloader, cipher, morph, Splash Cursor, dan aset MAKA Studio."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> **Catatan sumber:** `project-history-maka.md`, disusun 10 November 2026. Status implementasi dan pengujian di sini merupakan catatan saat dokumentasi dibuat, bukan audit terbaru.

## 6. Implementasi teknis saat dokumentasi dibuat

### Struktur source

```text
maka/
├── AGENTS.md
├── README.md
├── PROJECT-HISTORY.md
├── index.html
├── style.css
├── script.js
├── package.json
├── package-lock.json
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── studio/
│   │   ├── footer/
│   │   └── preloader/
│   └── videos/
└── js/
    ├── core/
    │   ├── animation.js
    │   ├── landing-page.js
    │   └── smooth-scroll.js
    ├── sections/
    │   ├── preloader.js
    │   ├── hero-scroll.js
    │   ├── introduction.js
    │   ├── projects.js
    │   ├── projects-motion.js
    │   ├── statistics.js
    │   └── testimonials.js
    └── interactions/
        ├── clock.js
        ├── hero-poses.js
        ├── hover-cipher.js
        ├── marquee.js
        ├── reveal.js
        ├── scroll-underlay.js
        ├── services.js
        ├── splash-cursor.js
        ├── splash-cursor.LICENSE.txt
        └── statistics-gaze.js
```

`dist/` merupakan output build yang diabaikan Git; bukan lokasi mengedit source. Folder kosong atau `.gitkeep` tidak berarti fiturnya sudah memiliki aset produksi.

### Bootstrap dan lifecycle

`script.js` membuat `LandingPage`. Modul fungsional seperti services, gallery, dan accordion diinisialisasi bersama fitur lainnya. Motion dekoratif dimasukkan ke callback matchMedia no-preference. `LandingPage` menyimpan cleanup; HMR memanggil destroy. Refresh setelah load/font dan perubahan tinggi accordion dikoordinasikan oleh scheduler ticker.

### Kode asli — script.js

```javascript
import { LandingPage } from './js/core/landing-page.js';

// Entry point: lifecycle saja, detail fitur berada di folder js/.
const landingPage = new LandingPage(document);
landingPage.init();

if (import.meta.hot) {
  import.meta.hot.dispose(() => landingPage.destroy());
}
```

### Kode asli — integrasi Lenis

```javascript
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './animation.js';

// Class untuk resource yang memiliki state dan lifecycle.
export class SmoothScroll {
  constructor() {
    this.lenis = null;
    this.tick = (seconds) => this.lenis?.raf(seconds * 1000);
  }

  init() {
    if (this.lenis) return;

    this.lenis = new Lenis({
      autoRaf: false,
      anchors: true,
    });

    this.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(this.tick);
    gsap.ticker.lagSmoothing(0);
  }

  destroy() {
    if (!this.lenis) return;

    gsap.ticker.remove(this.tick);
    this.lenis.off('scroll', ScrollTrigger.update);
    this.lenis.destroy();
    this.lenis = null;
  }
}
```

### Peta fitur dan lokasi revisi

| Fitur | File / hook utama | Perilaku terakhir |
| --- | --- | --- |
| Waktu | `interactions/clock.js` | Waktu Jakarta/GMT+7 di header |
| Preload | `sections/preloader.js`, `data-preloader` | Progress aset aktual, staging foto, perjalanan logo/foto, pemulihan timeout/resize |
| Hero scroll | `sections/hero-scroll.js`, `data-hero-surface` | Offset surface 40% tinggi hero desktop, 15% mobile; header juga mendapat offset terpisah |
| Pose | `interactions/hero-poses.js`, `data-pose-sequence` | 600ms/pose; pause di luar viewport/tab; accordion mengikuti status terbuka |
| Cipher About | `sections/introduction.js`, `data-cipher-reveal` | Reveal 1,4 detik, sekitar 14 update karakter/detik; blank → scramble merah → teks asli |
| Cipher lokal | Modul About yang sama | Radius 0,6em; trail sekitar 0,45 detik; koordinat glyph mengikuti ukuran font |
| Cipher statistik | `data-statistics-cipher` | Engine sama, preserveMarkup true, hover false |
| Services | `interactions/services.js` | Disclosure satu kategori aktif; submenu scramble 0,5 detik/item dengan selisih awal 0,3 detik |
| Gallery | `sections/projects.js` | Swiper FreeMode/A11y/Keyboard/Navigation, viewer dialog, kontrol lokal |
| Morph 36’ | `sections/projects-motion.js` | Desktop ≥1440px dan tinggi ≥720px: full → oval tengah → kartu kanan; pin 1,8 viewport, scrub 0,45; satu progress untuk mask/skala/posisi |
| Morph layar kecil | Modul yang sama | Reveal singkat tanpa pin; Swiper tetap dapat digeser |
| Statistik | `sections/statistics.js` | Count-up sekali; nilai dasar disimpan terpisah dari offset gaze |
| Gaze statistik | `interactions/statistics-gaze.js` | Crossfade 1,2 detik masuk / 1,35 keluar; +1 ketika opacity melewati 0,5 |
| Accordion | `sections/testimonials.js` | Dwell hover 100ms, transisi tinggi 0,7 detik, keyboard/tap, refresh setelah perubahan tinggi |
| Cipher accordion/link | `interactions/hover-cipher.js` | 0,8 detik; label Project/Year dikecualikan oleh selector; hook link `data-cipher-link` |
| Marquee | `interactions/marquee.js` | Loop GSAP dekoratif, salinan tidak dibacakan screen reader |
| Footer/statistik underlay | `interactions/scroll-underlay.js` | Surface negatif ke nol selama section terbuka; selesai lebih awal bila section lebih tinggi dari viewport |
| Foto mata footer | CSS dan dua layer gambar | Crossfade hover/focus-visible CTA; tidak membutuhkan image sequence tambahan |
| Splash Cursor | `interactions/splash-cursor.js` | WebGL2 transparan, pointer-events none, lazy start setelah preload, ticker berhenti saat idle/tab tersembunyi |

Morph memakai overlay dekoratif, bukan perpindahan DOM kartu asli. Ukuran source image dihitung agar seluruh piksel tersedia di balik mask; `object-fit` pada elemen yang sudah terpotong sebelumnya pernah menyebabkan crop oval salah. Link kategori dari footer diarahkan ke akhir pinned scene dan memindahkan fokus ke tombol kategori.

Preloader mendeteksi navigation type reload. Saat reload, hash dibersihkan dan scroll dipaksa ke atas selama intro; restoration history dipulihkan setelah selesai. Deep-link biasa dengan hash/scroll yang dipulihkan tetap dapat melewati preload. Reduced motion melewati motion preload.

### Kode asli — konfigurasi waktu preload

```javascript
const timing = Object.freeze({
  progress: 0.6,
  travel: 4.2,
  navigation: 1.1,
  display: 1.5,
  assetTimeout: 8_000,
  recoveryTimeout: 16_000,
});
```

### Kode asli — preset Splash Cursor terakhir

Cuplikan berikut diambil langsung dari `createFluid()`. Nilai bloom mengikuti source resmi: threshold 0.3 dan gain `2 * s.glow`; penguatan custom sementara telah dibatalkan agar sesuai preset.

```javascript
  const settings = {
    palette: [parseColor('#EB2E2E')],
    rainbow: false,
    colorSpeed: 3.2,
    intensity: 0.5,
    size: 0.75,
    force: 2.4,
    swirl: 12.5,
    trail: 1,
    momentum: 1,
    shading: 1,
    glow: 0.34,
    quality: 'low',
    clickSplash: true,
    contained: false,
    light: true,
  };
```

Splash aktif hanya pada viewport minimal 1025px, hover/fine pointer, tanpa coarse pointer, dan no-preference motion. Canvas dihapus saat media condition tidak memenuhi syarat. Cursor native tidak disembunyikan. Efek hilang pada pointerleave/blur; buffer history dibersihkan agar jejak lama tidak muncul lagi. Pada WebGL2 yang tidak tersedia, halaman tetap berjalan tanpa efek.

### Aset dan lisensi

- `assets/images/hero/model-pose-sequence-5/`: lima pose grup model untuk hero kanan dan panel 36’.
- `assets/images/hero/model-left-pose-sequence-5/`: lima pose profil perempuan untuk hero kiri dan panel Future Doc.
- `assets/images/hero/accordion-pose-sequence-5/`: pose panel Orbitly/Amanda.
- `assets/images/studio/creative-exploration.png` dan `maka-background-gaze.png`: dua background statistik; efeknya crossfade, bukan sequence tambahan hasil generasi.
- Foto mata footer: `eye-detail.png` dan `eye-detail-right.png`.
- Favicon: `assets/icons/maka-favicon.png`.
- Source SplashCursor diadaptasi dari React Bits; pemberitahuan lisensi disimpan di `js/interactions/splash-cursor.LICENSE.txt`. Lisensi yang diunduh adalah **MIT + Commons Clause**, bukan MIT tanpa syarat. Pertahankan notice dan baca ketentuannya sebelum mendistribusikan modul sebagai produk terpisah.
- Asal atau status lisensi seluruh foto/font belum diaudit dalam percakapan ini.

