---
title: "Elevd: Kendala dan Solusi"
description: "Kendala GitHub, preloader, Lenis, workflow theme, serta pekerjaan Elevd yang masih terbuka."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> Dokumentasi ini merangkum percakapan project Elevd. Status theme, konfigurasi lokal, dan repository di bawah merupakan kondisi terakhir yang tercatat dalam percakapan, bukan hasil audit terbaru.

## 6. Kendala, Solusi, dan Pekerjaan Terbuka

### 6.1. GitHub push gagal

**Error asli:**

```text
remote: fatal: did not receive expected object 83d5e6b4094d8019820bffafe04b242d0602ffe2
error: remote unpack failed: index-pack failed
To https://github.com/owwstudio/elevd.git
 ! [remote rejected] codex/elevd-setup -> codex/elevd-setup (failed)
error: failed to push some refs to 'https://github.com/owwstudio/elevd.git'
```

Penyebab yang ditemukan: repository berasal dari shallow clone Dawn.

**Perintah perbaikan yang tercatat:**

```bash
git fetch --unshallow upstream
git push --no-thin -u origin codex/elevd-setup
```

Setelah perbaikan, repository tidak lagi shallow, pemeriksaan object berhasil, dan branch berhasil dipush.

### 6.2. Background preloader tersembunyi

Rule global Dawn untuk elemen kosong menyebabkan curtain preloader tidak tampil.

Solusi: memberikan rule `display: block` pada curtain secara spesifik.

### 6.3. Navigasi chapter ditimpa Lenis

Klik navigasi chapter masih diproses oleh handler Lenis meskipun default event sudah dicegah.

Solusi: handler chapter juga menghentikan propagasi event.

### 6.4. Theme bertambah di dashboard

Theme preview dibuat untuk pengujian terpisah. Pengguna kemudian meminta alur yang lebih sederhana.

Solusi workflow: gunakan satu draft tetap dan satu live theme.

Belum ada catatan penghapusan theme lama.

### 6.5. Hal yang belum selesai atau belum diketahui

- Slicing seluruh desain Figma belum selesai.
- Section About, features, dark story, user stories, dan footer belum tercatat selesai dalam pekerjaan chat ini.
- Kehadiran theme “Elevd About Preview” tidak membuktikan implementasi About sudah selesai.
- Micro interaction untuk seluruh website belum ditetapkan.
- Dummy copy belum seluruhnya diganti.
- Final acceptance tim belum tercatat.
- Status repository, branch, dan theme terbaru perlu diperiksa sebelum melanjutkan.
- Detail perubahan yang dibuat melalui sesi Codex lain tidak otomatis tersedia di chat ini.

