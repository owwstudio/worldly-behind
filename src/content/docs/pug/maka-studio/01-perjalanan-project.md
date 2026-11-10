---
title: "MAKA Studio: Perjalanan Project"
description: "Kronologi implementasi MAKA Studio dari desain Figma, layout editorial, dan gallery hingga motion dan revisi interaksi."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> **Catatan sumber:** `project-history-maka.md`, disusun 10 November 2026. Status implementasi dan pengujian di sini merupakan catatan saat dokumentasi dibuat, bukan audit terbaru.

## 3. Perjalanan project secara kronologis

Semua permintaan dalam tabel ini adalah **ringkasan prompt**, kecuali saat dirujuk ke katalog kutipan di [bagian 5](/pug/maka-studio/03-prompt-dan-hasil/).

| Tahap | Permintaan / perubahan | Hasil dan alasan |
| --- | --- | --- |
| 1 | Periksa Figma dan screenshot landing | Figma menjadi acuan ukuran/layer/aset; screenshot menjadi acuan komposisi menyeluruh. Frame desktop tercatat 1440 × 5842px. |
| 2 | Buat panduan agent dan kerangka sederhana dalam folder maka | Dibentuk entry root `index.html`, `style.css`, `script.js`, `assets/`, modul `js/`, serta `AGENTS.md`. |
| 3 | Bahas Node.js, Vite, Gulp, dan scope satu landing page | Dipilih Vite untuk dev server dan bundling; tidak memakai Gulp atau framework UI. |
| 4 | Minta JavaScript modular dan tidak bertabrakan saat load | Lifecycle dipusatkan di `LandingPage`; fitur dipisah per section/interaksi dan memiliki cleanup. |
| 5 | Bahas Vercel serta cara melihat project lokal | Dev memakai `npm run dev`; hasil production lokal memakai build lalu preview. URL Vercel aktual belum tersedia. |
| 6 | Rapikan penulisan HTML/CSS/JS; hindari folder/config berlebihan | Source dibuat terbaca. Config Prettier tambahan tidak dipertahankan atas preferensi pengguna. `.gitkeep` dijelaskan sebagai placeholder folder kosong di Git. |
| 7 | Tetapkan BEM dan hybrid OOP/functional/event-driven/async | Class dipakai untuk lifecycle/resource, fungsi untuk fitur; hook interaksi memakai `data-*`. |
| 8 | Tetapkan container dan bangun header/hero | Container standar max 1440px termasuk padding 32px per sisi; header full viewport. Hero memakai foto, wordmark berlapis, navigasi, waktu Jakarta, dan marquee. |
| 9 | Revisi About agar sesuai desain di layar lebar | About full-width 32px per sisi; flex space-between; paragraf max 911px dengan Inter 56px, line-height 110%, tracking -3.92px. |
| 10 | Push awal dengan pesan yang ditentukan | Tercatat commit `00c7646`, `first commit, add header and section 2`. Commit lain ada setelahnya; tidak diasumsikan seluruh revisi telah dipush. |
| 11 | Bangun layanan dan selected work, pasang Swiper | Grid editorial dua grup tahun; Swiper untuk drag/kontrol ketika konten melampaui viewport; gambar dapat dibuka di dialog viewer. |
| 12 | Revisi kategori layanan agar hover, halus, dan judul tidak shifting | Panel submenu diposisikan di luar alur layout; satu kategori aktif, Branding awal; opacity/transform/visibility disinkronkan. |
| 13 | Bangun statistik, Social Proof, Why Choose, dan footer | Urutan section lengkap mengikuti referensi. Orbitly awalnya terbuka di accordion. |
| 14 | Perhalus accordion dan indikator panah | Trigger hover dengan dwell singkat; transisi tinggi, konten, dan posisi metadata; panah muncul lebih lambat. Keyboard dan tap tetap didukung. |
| 15 | Pasang favicon dan koreksi background statistik | Ikon studio menjadi favicon. Crop foto statistik diperbaiki untuk mengikuti komposisi referensi. |
| 16 | Tambah gaze dan angka +1 pada CTA statistik | Crossfade background default/gaze; angka berubah 6→7, 89→90, 120→121 mengikuti titik tengah opacity, lalu kembali saat hover/focus berakhir. |
| 17 | Tambah pose sequence pada hero dan tiga panel accordion | Interval akhir 600ms/pose; hero autoplay, accordion play ketika terbuka dan terlihat. Tombol Pause dihapus sesuai permintaan. |
| 18 | Hover CTA footer mengganti foto mata | Dua foto ditumpuk; foto `eye-detail-right` muncul lewat crossfade saat hover/focus-visible. |
| 19 | Rancang dan eksekusi preload | Garis progress horizontal/vertikal mengikuti kesiapan aset; logo besar berputar menuju navbar; foto berpindah; navigasi turun, display naik. |
| 20 | Koreksi warna garis, sinkronisasi M/wordmark, dan blink | Garis menjadi rgba(42,42,42,0.08). Foto tetap dalam DOM hero; layer wordmark bergerak bersama. Logo 5% selama perjalanan, menjadi 100% setelah tiba. |
| 21 | Tambah scramble pada Creative Agency dan copy hero | Creative Agency acak sejak preload dan selesai ketika foto tiba; copy hero mengacak saat slide masuk. |
| 22 | Jadikan Cipher Reveal sebagai referensi About | Reveal scroll bertahap; hover hanya area cursor. Huruf aktif berwarna merah #EB2E2E. Kemudian direvisi agar mulai kosong sebelum muncul/decode. |
| 23 | Implementasi Splash Cursor dan beberapa revisi preset | Source resmi diadaptasi ke vanilla JS/ticker GSAP. Nilai preset terakhir dicatat di [bagian 6](/pug/maka-studio/04-implementasi-teknis/). |
| 24 | Matikan cursor effect pada mobile/tablet dan saat cursor hilang | Desktop fine pointer saja; nonaktif untuk touch/coarse pointer atau lebar ≤1024px. Canvas/history cairan dibersihkan saat pointer keluar/blur. |
| 25 | Tambah scramble untuk accordion, services, navbar, dan footer | Accordion mengecualikan label Project/Year; submenu berurutan atas→bawah; link hover/focus menggunakan modul bersama. |
| 26 | Footer dan statistik terbuka dari bawah section sebelumnya | Surface wrapper diparallax di dalam mask section; versi mobile lebih ringan; reduced motion statis. |
| 27 | Tambah cipher scroll pada kedua copy statistik | Struktur span/baris dan flex item dipertahankan, lalu teks muncul dari kosong sambil decode. |
| 28 | Perbaiki preload ketika reload dari section bawah | Reload mengatur scroll ke header, menghapus hash pada reload, dan mengatasi scroll restoration terlambat. Deep-link biasa tetap dapat melewati intro. |
| 29 | Inspeksi storyboard foto 36’ dan jelaskan rencana terlebih dahulu | Dipilih full image → oval tengah → kartu kanan dengan pin singkat; eksekusi dimulai setelah pengguna menyetujui. |
| 30 | Implementasi lalu revisi morph proyek | Overlay dekoratif terpisah dari Swiper; perbaikan crop, bentuk oval tetap selama bergerak, serta satu progress deterministik agar reload/refresh tidak membuat foto membesar salah. |
| 31 | Hero/header di belakang section 2 | Surface hero dan header bergerak lebih pelan saat scroll keluar; About berlatar solid menutup di atasnya. |
| 32 | Dokumentasikan project untuk tim | Dokumen ini, berdasarkan percakapan dan source yang tersedia. |

