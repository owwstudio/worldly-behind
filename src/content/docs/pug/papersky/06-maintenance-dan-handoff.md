---
title: "Papersky: Maintenance dan Handoff"
description: "Development lokal, pemeriksaan, pipeline CI, deployment VPS, health, rollback, dan checklist handoff Papersky."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> **Catatan sumber:** `docs/project-history-and-handoff.md`, disusun 10 November 2026. Implementasi, deployment, dan pengujian yang disebut merupakan catatan historis, bukan pemeriksaan production terbaru.

## 7. Maintenance dan handoff

### 7.1 Menjalankan dan memeriksa lokal

Perintah berikut adalah panduan operasional yang disusun dari scripts repository, **bukan prompt asli pengguna**:

```sh
npm ci
npm run dev
```

Dev server: `http://127.0.0.1:5173`. Gunakan Node.js 24 sesuai `.nvmrc`.

```sh
npm run test:metrics
python3 -m unittest discover -s tests/deployment -v
npm run build
npm audit --audit-level=high
npm run package:release
```

Build mencakup typecheck. Tes Nginx nyata memerlukan Nginx; di komputer yang tidak memilikinya dua tes di-skip dan dijalankan di CI. Catatan terakhir: 41 tes frontend/packaging dan 15 tes Python pada CI (56 total). Jumlah ini snapshot, bukan janji jumlah tes selamanya. Tidak ada tes baru yang dijalankan untuk penulisan ringkasan ini.

Artifact: `release/papersky-dist.tar.gz`, `manifest.json`, `SHA256SUMS`. `release/` dan master `output/` merupakan file kerja ignored, bukan tempat dokumentasi tim yang harus diandalkan. Dokumen/screenshot QC tidak otomatis menjadi bagian website `dist`.

### 7.2 Alur perubahan

1. Baca `AGENTS.md` dan dokumen fitur terkait; dahulukan keputusan terbaru, bukan catatan batch historis.
2. Pastikan scope dan alasan perubahan bisnis jelas. Jangan mengubah section approved atau membawa fitur Kindsight.
3. Reuse komponen/aset existing. Hindari dependency/abstraksi baru untuk perubahan sederhana.
4. Pertahankan typed async service, URL validation, resource-local loading/error, semantic markup dan reduced motion.
5. Periksa desktop/mobile, keyboard, navigation dan cleanup yang relevan. Jalankan build sebelum menyerahkan kode.
6. Update keputusan aktif, keterbatasan dan bukti QC. Jangan mengklaim pemeriksaan yang belum dilakukan.
7. Perubahan lokal tidak otomatis berarti sudah live. Setelah izin deployment, commit/push `main`, pantau CI sampai sukses dan periksa public behavior.

### 7.3 Deployment yang telah berjalan

- Repo private `AjiwahyuIN/Papersky`; branch release `main`.
- Environment `papersky-production`; gate `PAPERSKY_DEPLOY_ENABLED=true`.
- Environment secrets bernama `PAPERSKY_SSH_KEY` dan `PAPERSKY_KNOWN_HOSTS`. **Nilainya tidak boleh dimasukkan dokumen, log, UI atau Git.**
- Pipeline: install locked dependencies → tests → build/typecheck → dependency audit → artifact/checksum → stage → preflight → activate → HTTPS health.
- Manual workflow default `stage`; pilih `activate` untuk aktivasi yang telah diizinkan. Push main memicu aktivasi jika gate aktif.
- Nginx menyajikan static `dist`; tidak ada Node API/PM2/MySQL runtime yang perlu direstart.
- Dedicated user `papersky_deploy`; root-owned forced-command handler hanya menerima `probe`, `stage`, `activate`, `health`; tidak menyediakan generic shell, SFTP/SCP, atau sudo.
- SSH key dibatasi, host fingerprint diverifikasi, strict host checking wajib dipertahankan. Jangan menggunakan key/helper project lain.

Server layout berikut adalah ringkasan konfigurasi, **bukan kutipan kode asal**:

```text
/srv/papersky/
  incoming/
  releases/<commit>-<run-id-and-attempt>/
  current -> releases/<active-release>
  previous -> releases/<previous-release>
```

Deploy rutin mengganti symlink `current` secara atomic dan tidak mengubah vhost atau permission aplikasi lain. Bootstrap vhost/root installer adalah tindakan admin sekali/setup terpisah, bukan langkah release rutin.

### 7.4 Health, rollback, backup

- Lima route landing/dashboard harus mengembalikan index artifact yang sama; entry JS/CSS MIME dan hash harus cocok.
- API yang belum ada, aset hilang, metadata release, dan file tersembunyi tidak boleh menerima HTML SPA.
- Favicon root perlu diperiksa terpisah: HTTP 200, MIME `image/svg+xml`, bytes/hash sama dengan SVG yang diberikan.
- Jika new release gagal health, handler mengembalikan previous lalu mengecek ulang. **Rollback production pernah benar-benar terjadi** pada deployment favicon pertama; catatan lama bahwa rollback live belum pernah dipicu sudah historis.
- Retensi lima release sukses terbaru, dengan current/previous dilindungi. Release gagal dipertahankan untuk diagnosis. Perhatikan disk preflight sebelum merilis lagi.
- Backup source ada di GitHub; pertahankan artifact/manifest/checksum dan backup konfigurasi sebelum perubahan vhost. Tidak ada database/upload server saat ini. Data sesi browser bukan backup dan hilang ketika reload.
- Jangan menurunkan proteksi, mengubah permission recursive lintas aplikasi, atau restart layanan project lain untuk memperbaiki deployment Papersky.
- Jika suatu saat backend memerlukan restart singkat, jangan mengklaim zero downtime. Migrasi database harus direview terpisah tanpa reset/reseed otomatis.

### 7.5 Checklist penerima handoff

- [ ] Memiliki akses repo private dan environment GitHub yang sesuai peran.
- [ ] Mengetahui bahwa dashboard adalah demo lokal, bukan data provider atau akun nyata.
- [ ] Menjalankan lokal dengan Node 24 dan memahami hasil build/tests.
- [ ] Memahami batas CSV session dan ketidakkonsistenan Active Users.
- [ ] Mengetahui route, shared components, URL filters dan reduced motion.
- [ ] Memahami main sebagai branch auto-release dan tidak push sembarangan.
- [ ] Mengetahui cara membaca run CI, health, release aktif/previous dan rollback.
- [ ] Tidak menyalin kredensial ke chat/dokumen/repo.
- [ ] Memiliki mandat terpisah sebelum mengubah VPS config, backend, database atau scope bisnis.
- [ ] Memeriksa lisensi font/foto/desain sebelum distribusi di luar showcase yang disepakati.

