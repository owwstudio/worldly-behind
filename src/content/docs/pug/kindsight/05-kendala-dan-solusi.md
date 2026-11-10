---
title: "Kindsight: Kendala dan Solusi"
description: "Kendala Kindsight, solusi historis, serta pekerjaan tertunda dan batas production readiness."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> **Catatan sumber:** `docs/project-summary-handoff-id.md`, dirangkum 10 November 2026. Status MVP, pengujian, deployment, dan insiden merupakan catatan historis, bukan pemeriksaan live terbaru.

## 6. Kendala, Solusi, dan Pekerjaan Tertunda

| Kendala | Solusi/status |
|---|---|
| Section tidak ter-load saat deployment awal | Setup VPS untuk frontend/API/database |
| Identitas SSH salah | Dedicated deploy account/key |
| DB password tidak terbaca | Environment diperbaiki menjadi .env di root aplikasi |
| API Connection refused | Cek status Node project dan startup log |
| Cache npm root-owned | Cache khusus staging Kindsight |
| Lockfile live tidak ada | Lockfile lama opsional, paket baru wajib; rollback menjaga kondisi awal |
| Audit dependency high | body-parser2.4.0 dan multer2.5.0 pada tahap tersebut |
| Feedback CMS tidak jelas | Spinner, tombol sukses, toast |
| Favicon belum ada | Asset brand dipasang dan diverifikasi live |
| API berhenti pada November | Start melalui aaPanel memulihkan layanan |
| Penyebab proses berhenti | Belum diketahui; investigasi dihentikan pengguna |

### Belum selesai/ditunda

- Wildcard `*.owwteam.dev`.
- Backup otomatis database/upload dan uji pemulihan.
- Retensi otomatis release/backup/cache.
- Pengawasan/restart otomatis khusus Kindsight.
- Review trust proxy dan rate limiter di belakang Nginx.
- Reset/ganti password, email undangan/recovery.
- Expiry password awal dan mandatory first-login change.
- Newsletter sungguhan, payment/donasi langsung, AI/scoring nyata.
- Eksperimen animasi dashboard yang belum cocok.
- Recovery reboot/kill paksa saat aktivasi.
- Production readiness menyeluruh.

Rotasi/reissue kredensial yang sempat terlihat pada screenshot pernah disarankan, tetapi penyelesaiannya tidak terkonfirmasi.

