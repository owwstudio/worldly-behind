---
title: "Finora: Kendala dan Solusi"
description: "Kendala, solusi historis, batas verifikasi, dan pekerjaan Finora yang belum selesai."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 7. Kendala, solusi, dan pekerjaan yang belum selesai

| Kendala | Penanganan / status |
|---|---|
| Figma meminta autentikasi ulang | Memakai analisis sebelumnya sementara; jangan mengklaim setiap revisi sudah dibandingkan live dengan Figma |
| Reveal terasa dekoratif/tidak sesuai | Mengikuti storyboard pengguna, mengurangi gerakan acak dan memperjelas hubungan bentuk |
| Flash putih dan preloader ter-skip | Startup layer/timing, asset handoff, dan scroll lock diperbaiki |
| Hero menyisakan scroll kosong | Pin/spacer dilepas dan posisi scroll direbase setelah ekspansi |
| Accordion menyebabkan jarak/crop | Tinggi slot diukur dan dijaga konstan; observer mengikuti konten/font |
| Quote wrapper double dan menimpa foto | Handoff satu surface; foto muncul setelah geometri tiba |
| Cursor berbeda antar browser session | Clean profile menunjukkan pointer konsisten; penyebab utama discrepancy belum dipastikan sepenuhnya |
| API tidak ikut workflow awal | Bundle API dan dedicated service/proxy ditambahkan |
| Izin direktori API | Parent khusus diperbaiki; env tetap terbatas |
| Retensi gagal karena `.user.ini` immutable | Release terlindungi dipertahankan dengan warning; jangan menghapus proteksi panel |
| Gemini timeout / kalimat tak didukung | Stop/Retry, prompt grounding lebih tegas, kartu angka dihitung aplikasi; narasi tetap perlu ditinjau |
| Bundle frontend >500 kB | Warning masih ada; code splitting/performance profiling belum diselesaikan |

Belum selesai atau belum dibuktikan:

- Backend ledger/Goals permanen, MySQL migrations, autentikasi/session akun, organisasi, admin/CMS.
- Pembayaran/langganan sungguhan, bank connection, real transfer atau AI mutation.
- Penyempurnaan landing yang dipause, termasuk inspirasi hero/motion footer lanjutan.
- Formal CLS/performance/load testing, full Safari matrix dan physical touch testing.
- Production rollback drill belum dikonfirmasi dilakukan.
- Fingerprint stale chat belum mencakup perubahan yang hanya terjadi pada bulan comparison sebelumnya; legacy answer tanpa fingerprint tidak memiliki deteksi stale.
- Draft bukan per-conversation/cloud; history bukan memory lintas percakapan yang seluruhnya dikirim ke Gemini.
- Audit lisensi font, gambar, dan video untuk distribusi publik belum terdokumentasi lengkap.
- Tanggal setiap prompt, semua detail respons asisten awal, serta seluruh snapshot Figma historis belum diketahui.

Rilis terakhir memiliki 98 tes aplikasi lulus pada verifikasi lokal akhir; pipeline rilis verify/deploy sukses. Sembilan tes deployment tercatat pada pengembangan pipeline sebelumnya. Jangan menyamakan jumlah tes dengan cakupan production readiness.

