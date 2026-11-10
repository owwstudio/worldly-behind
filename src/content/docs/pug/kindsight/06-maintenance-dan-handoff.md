---
title: "Kindsight: Maintenance dan Handoff"
description: "Development, build, pengujian, update live, health check, pemulihan API, backup, dan rollback Kindsight."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> **Catatan sumber:** `docs/project-summary-handoff-id.md`, dirangkum 10 November 2026. Status MVP, pengujian, deployment, dan insiden merupakan catatan historis, bukan pemeriksaan live terbaru.

## 7. Maintenance dan Handoff

### 7.1 Acuan kerja

Baca AGENTS.md dan dokumen terkait sebelum mengubah kode. Utamakan keputusan terbaru; beberapa bagian menyimpan histori persiapan yang telah digantikan status deployment aktif.

### 7.2 Lokal

Perintah yang tercatat:

```bash
npm run dev
npm run dev:api
```

| Layanan | URL |
|---|---|
| React | http://127.0.0.1:5176 |
| API | http://127.0.0.1:3101 |
| Pug referensi | http://127.0.0.1:5175 |

```bash
npm run dev:legacy
```

### 7.3 Build dan tes

```bash
npm run build
npm run test:frontend
npm run test:api
```

Jika jalur Pug bersama terpengaruh:

```bash
npm run build:legacy
```

Pengujian integrasi tersedia:

```bash
npm run test:integration
npm run test:uploads
npm run test:content
npm run test:organizations
npm run test:admin
npm run test:demo
npm run test:organization-management
npm run test:users
```

Gunakan fixture terisolasi. Jangan reset/reseed database pengguna. Jalankan pemeriksaan yang sesuai perubahan dan laporkan keterbatasan; jangan mengklaim tes yang belum dilakukan.

### 7.4 Update live

1. Implementasi lokal sesuai scope dan QC.
2. Jalankan build/pengujian relevan.
3. Commit hanya file yang diperlukan.
4. Push main.
5. Pantau GitHub Actions sampai selesai.
6. Verifikasi API, halaman live, dan fitur berubah.

Environment GitHub: `production`. Secret: `VPS_HOST`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`. Repository variable: `VPS_DEPLOY_ENABLED`.

Jangan menaruh nilai credential di dokumentasi publik. Folder VPS adalah instalasi artifact, bukan checkout untuk git pull.

### 7.5 Health check

Perintah asli:

```bash
curl -i http://127.0.0.1:3101/api/v1/health
curl -i http://127.0.0.1:3101/api/v1/ready
```

Endpoint publik:

- https://kindsight.owwteam.dev/api/v1/health
- https://kindsight.owwteam.dev/api/v1/ready

Readiness juga memeriksa database/schema.

### 7.6 Jika section hilang

1. Periksa API publik.
2. Jika502, periksa listener3101 dan status kindsight_api.
3. Periksa runtime log dan resource/system log bila diperlukan.
4. Pulihkan hanya proses Kindsight.
5. Verifikasi endpoint dan browser setelah pulih.

Pemulihan yang berhasil: **aaPanel → Website → Node.js Project → kindsight_api → Start**.

Jangan mengasumsikan section hilang selalu akibat motion; insiden November disebabkan API tidak berjalan.

### 7.7 Log

Perintah asli yang diminta:

```bash
tail -n 80 /www/wwwlogs/nodejs/kindsight_api.log
journalctl -k --since '2026-10-26' --no-pager | grep -Ei 'out of memory|oom-kill|killed process' | tail -n 20
```

Hasilnya belum diberikan; investigasi dihentikan pengguna.

### 7.8 Batas operasi

Akun deploy tidak memiliki sudo umum. Helper mensyaratkan API sehat sebelum deployment; bukan alat recovery API mati.

Jangan menjalankan PM2 restart all/global restart aaPanel, mengubah izin cache bersama, mengganti Node default tanpa review, rsync --delete pada root aplikasi/data, atau mengganti env/database/upload melalui artifact. Jangan menghapus activation journal tanpa memahami recovery.

### 7.9 Backup dan rollback

Rollback kode saat kegagalan parsial pernah berhasil. Backup database dan retensi belum otomatis. Recovery reboot/kill paksa belum diuji. Journal tertinggal memerlukan recovery manual. Rollback kode tidak memulihkan database. Restart API singkat; jangan menyebut zero downtime.

