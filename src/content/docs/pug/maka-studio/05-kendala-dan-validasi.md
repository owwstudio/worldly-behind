---
title: "MAKA Studio: Kendala dan Validasi"
description: "Kendala dan solusi MAKA Studio, pengujian historis, batasan validasi, serta pekerjaan yang belum selesai."
sidebar:
  label: "Kendala dan Validasi"
  order: 5
---

> **Catatan sumber:** `project-history-maka.md`, disusun 10 November 2026. Status implementasi dan pengujian di sini merupakan catatan saat dokumentasi dibuat, bukan audit terbaru.

## 7. Kendala, solusi, validasi, dan pekerjaan terbuka

### Kendala yang ditangani

| Kendala | Penyebab / temuan | Solusi yang tercatat |
| --- | --- | --- |
| Perubahan source tidak terlihat | Pengguna melihat `dist/`, bukan dev server | Jalankan build lagi dan preview hasil; edit source saja |
| About bergeser ke tengah di layar lebar | Container max-width diterapkan ke About | Pengecualian full-width, paragraf tetap max 911px |
| Heading layanan shifting | Submenu ikut alur layout | Panel absolute, transisi opacity/transform/visibility |
| Accordion terasa kasar / panah terlalu dini | Tinggi, metadata, indikator belum sinkron | Timeline tinggi/inner, interpolasi metadata, delay indikator |
| Wordmark blink / M tidak sinkron | Layer terpisah dan reparenting foto saat handoff | Foto tetap di hero, offset piksel sama, satu koreografi display |
| Scramble About bergeser atau terlalu global | Mutasi huruf langsung dan hover seluruh paragraf | Slot glyph berdasarkan pengukuran teks asli, trail lokal, teks asli tetap menjadi ukuran |
| Glow tidak terasa / preset tidak benar-benar sama | Opacity canvas dan beberapa default/custom bloom berbeda | Opacity canvas 1; default/preset dicocokkan ke source resmi; revisi custom bloom dibatalkan |
| Splash tertinggal saat cursor keluar | Loop/history cairan belum dibersihkan | Stop ticker, sembunyikan canvas, clear buffer pada leave/blur |
| Preload tidak muncul setelah reload di bawah | Guard scroll/hash sengaja melewati intro | Bedakan reload dari deep-link, reset scroll, tangani restoration terlambat |
| Morph kembali kotak saat pindah | Interpolasi shorthand/string clip-path tidak stabil | Perhitungan mask numerik; oval dipertahankan selama tahap perpindahan |
| Foto morph terlalu zoom / tidak full setelah reload | State mask dan skala tidak sinkron setelah refresh | Satu progress scene dengan render deterministik, source image cover yang utuh |
| Link footer berhenti di tengah pinned scene | Anchor menuju posisi awal kategori yang masih tersembunyi | Arahkan ke akhir scene lalu fokus kategori |

### Pengujian historis yang benar-benar dilaporkan

- Build Vite dijalankan setelah perubahan source; build terakhir sebelum dokumentasi berhasil.
- Browser check menggunakan Chrome headless melalui Playwright Core yang dipasang sementara di `/private/tmp/maka-visual-check`, bukan dependency test project.
- Preloader: reload dari hash/scroll bawah, scroll kembali 0, halaman tidak lagi inert setelah selesai; pengujian sebelumnya juga mencakup fallback aset, resize, dan reduced motion.
- Wordmark: pemeriksaan historis 300 frame melaporkan tidak ada mismatch/loncatan dan foto tidak direparent.
- Cipher About: awal 0 glyph terlihat, contoh frame tengah 31 dari 200 terlihat, akhir 34 source word kembali tampil; local hover hanya memengaruhi area kecil.
- Splash: canvas pointer-events none, cleanup reduced motion, re-init, tablet/touch nonaktif, hide/restore pada pointerleave; tidak ada page error pada sampel tersebut.
- Underlay statistik: posisi akhir transform nol, tanpa overflow, gaze opacity 1 dan angka 7/90/121 masih berfungsi.
- Morph: start/center/final/reverse, cleanup mobile, dialog viewer, anchor layanan, reduced motion menghapus pin/overlay, lalu re-init satu overlay.
- Revisi reload morph diperiksa pada 1440px dan 1920px; frame awal memenuhi section sebelum/sesudah refresh.
- Hero underlay: offset 220px saat scroll 550px pada pengujian 1440px, kembali nol ketika naik, reduced motion transform none, tanpa overflow/page error.

Hasil tersebut adalah sampel fungsional dan screenshot, bukan bukti pixel-perfect menyeluruh, hasil benchmark FPS, skor Lighthouse, atau pengujian semua browser/perangkat fisik. Dokumentasi ini tidak menjalankan ulang seluruh suite historis.

### Belum selesai / belum diketahui

- **URL production Vercel, project Vercel, domain, dan deployment terbaru:** belum diketahui/terverifikasi. Tidak ditemukan config `vercel.json` pada pemeriksaan root.
- **Status push commit terbaru:** belum diperiksa terhadap remote. Repository lokal memiliki commit setelah push awal.
- **URL sosial, Careers, Blog, legal pages:** belum diberikan. Beberapa tampil sebagai teks; efek hover link hanya berlaku pada anchor yang benar-benar ada.
- **Testimoni tambahan:** kutipan yang tersedia dipakai; panel lain memakai metadata proyek. Jangan membuat nama/kutipan baru tanpa sumber.
- **Copy kategori selain Branding:** README menandainya sebagai copy awal; perlu konfirmasi editorial.
- **Typo konten:** source memuat `Mocukp & logo` pada salah satu metadata Future Doc; perlu persetujuan/perbaikan copy terpisah.
- **Optimasi aset:** beberapa PNG pose berukuran sekitar 2MB per file; responsive image/AVIF/WebP dan audit bandwidth belum dituntaskan.
- **Performa GPU:** fluid cursor dan mask area besar belum memiliki laporan profiling perangkat menengah. Jangan menjanjikan FPS tertentu.
- **Quality assurance lengkap:** Safari/iOS, Android fisik, semua breakpoint, screen reader, dan audit WCAG penuh belum terdokumentasi lengkap.
- **Automated tests permanen:** tidak ada script test di package.json; skrip browser sementara bukan test suite yang ikut repository.
- **Dokumentasi lama:** beberapa kalimat README masih menyebut starter/section lanjutan kerangka atau deep-link/reload secara umum. Gunakan source dan dokumen ini untuk state terakhir, lalu selaraskan README saat maintenance.
- **Riwayat La Frinece:** tidak tersedia, memerlukan konteks project terpisah.

