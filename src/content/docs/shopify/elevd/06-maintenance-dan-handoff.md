---
title: "Elevd: Maintenance dan Handoff"
description: "Catatan repository, target theme Shopify, deployment draft, pemeriksaan handoff, dan koordinasi tim Elevd."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> Dokumentasi ini merangkum percakapan project Elevd. Status theme, konfigurasi lokal, dan repository di bawah merupakan kondisi terakhir yang tercatat dalam percakapan, bukan hasil audit terbaru.

## 7. Maintenance dan Handoff

### 7.1. Folder dan repository

Folder lokal yang digunakan:

```text
/Users/anticumlaudeclub/Documents/Framer Codex Test/Elevd
```

Remote yang tercatat:

```text
origin   https://github.com/owwstudio/elevd.git
upstream https://github.com/Shopify/dawn.git
```

Branch kerja:

```text
codex/elevd-setup
```

Commit terakhir yang terverifikasi saat perbaikan GitHub:

```text
1c352c17315c3eeac70235866ce5ed57e845ff8c
```

Commit tersebut bukan pernyataan bahwa repository masih berada pada posisi yang sama sekarang.

### 7.2. Status theme terakhir yang diperiksa

| Theme | ID | Status saat pemeriksaan |
|---|---|---|
| Elevd Motion Preview | `155209498822` | Live |
| Elevd About Preview | `155243708614` | Unpublished |
| Elevd | `155207008454` | Unpublished |
| Development (3a911a-Anti-Cumlaude-Club-Macbook-Pr) | `155206975686` | Development |
| Horizon | `155206090950` | Unpublished |

Konfigurasi terakhir yang dibaca:

```toml
[environments.development]
store = "elevd-ai.myshopify.com"
theme = "155243708614"
```

Periksa kembali target sebelum deployment karena status live dan isi konfigurasi dapat berubah.

### 7.3. Memperbarui draft yang sama

**Perintah yang sebelumnya diberikan dalam percakapan:**

```bash
shopify theme push --environment development --nodelete --strict
```

Perintah mengikuti theme target di environment `development`.

Opsi `--unpublished` digunakan untuk membuat unpublished theme baru. Hindari opsi tersebut ketika tujuannya memperbarui draft yang sudah ada.

### 7.4. Pemeriksaan sebelum handoff berikutnya

1. Periksa branch, perubahan lokal, dan target Shopify.
2. Pastikan perubahan terbaru dari anggota tim sudah diketahui.
3. Tambahkan section ke draft tetap.
4. Jalankan Theme Check.
5. Uji desktop, mobile, reduced motion, serta Theme Editor.
6. Uji preloader, drawer, dan navigasi chapter setelah mengubah scroll logic.
7. Commit perubahan dengan scope yang jelas.
8. Review draft sebelum memublikasikannya.

Jangan menghapus theme lama hanya berdasarkan dokumentasi ini.

### 7.5. Koordinasi VS Code dan Codex

File dapat digunakan bersama jika VS Code dan Codex mengakses folder yang sama.

Sesi chat tetap terpisah. Tim perlu mencatat keputusan dan perubahan melalui repository atau dokumentasi agar konteks tidak bergantung pada satu chat.

Hindari mengedit file yang sama secara bersamaan melalui beberapa sesi.

