---
title: "Auralink: Kendala dan Solusi"
description: "Kendala, solusi yang tercatat, batas verifikasi, serta pekerjaan project yang masih terbuka. Dokumentasi Auralink."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 6. Kendala, solusi, dan pekerjaan belum selesai

| Kendala | Solusi/arah yang tercatat | Batas verifikasi |
| --- | --- | --- |
| Radio/shadow terpotong, blink saat duduk | Timing shadow dan sequence kamera/pose direvisi | Visual semua viewport belum dibuktikan |
| Hero content bergeser saat rounded | Pisahkan perubahan frame dari content composition | Perlu browser comparison |
| Tag/headline double reveal | Satu sequence owner, hindari dua reveal pathways | Semua navbar states belum diuji ulang |
| Hover Bento flicker | Hover dihapus atas instruksi pengguna | Jangan mengembalikan efek lama tanpa request baru |
| Heading Bento hanya sekali | Controlled reveal mengikuti reversible timeline | Local regression lulus; browser patch belum diverifikasi |
| Impact overlap setelah refresh | Rewind/reinitialize/restore timeline | Controlled fixtures bukan browser painting |
| CTA lime hilang/tepi tangan terlihat | Overlay terpisah dan clipping container | Final visual edge tetap perlu diperiksa |
| Slider fullscreen memakai gambar lama | Gunakan active center slide state | Reverse setelah interaksi perlu browser QA |
| Lenis terasa patah-patah | Single clock, guarded resize, shared deferred refresh | Belum ada frame-time/Lighthouse measurements sesudah patch |
| Footer tidak sampai bawah | Full-document dimension handling dan resize | Perlu real content/mobile browser test |
| Missing assets dan stale fallback | Literal inventory + constrained dynamic values | Merchant changes tetap harus diuji |
| CLI bersih tetapi IDE warning | Pakai current checker dan koreksi duplicate validator | IDE Problems panel tidak selalu dapat diakses |
| Figma MCP tidak merespons | Koneksi perlu dipulihkan dan diuji ulang | `Unknown tool`, bukan bukti file permission denial |

Pekerjaan terbuka:

- Bandingkan patch terbaru dengan Figma/screenshot pada desktop dan mobile.
- Jalankan Theme Editor add/remove/duplicate/reorder/edit/live preview dengan beberapa instances.
- Uji keyboard, focus, dialogs, search, cart dan native commerce flows.
- Uji empty/long text, mixed image ratios, zero/one/many blocks, missing optional assets.
- Ukur Lighthouse pada home, collection, product desktop/mobile. Target proyek: Performance ≥60 dan Accessibility ≥90; belum ada hasil terkini yang membuktikan target.
- Verifikasi full footer reach, menu/search/cart locks, resize, BFCache dan reverse scroll setelah interaksi slider.
- Periksa CTA clipping/overlay dan navbar reveal secara visual.
- Pulihkan akses Figma MCP; jangan menyatakan desain terbaru sudah terbaca sebelum request berhasil.
- Konfirmasi commit/branch/deployment yang benar-benar sedang ditampilkan toko.
- Audit lisensi asset/model 3D serta keaslian default social proof sebelum Theme Store release. Angka statistik, quote, dan identitas pada referensi tidak otomatis boleh menjadi klaim default yang tidak terbukti.

