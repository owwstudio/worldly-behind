---
title: "Le Friance: Maintenance dan Handoff"
description: "Workflow maintenance, area rawan regresi, validasi, merchant editing, dan handoff release. Dokumentasi Le Friance."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> **Catatan sumber:** `project-history-le-friance.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 7. Maintenance dan handoff

### 7.1 Urutan membaca repository

1. `AGENTS.md`.
2. `docs/project-brief.md` untuk konteks dan keputusan.
3. `docs/tasks.md` untuk scope aktif.
4. `docs/theme-standards.md` sebelum code change.
5. File section, CSS, JS dan snippet yang benar-benar berkaitan.
6. `docs/theme-store-checklist.md` untuk checks sesuai scope.

Dokumen ini adalah riwayat/handoff. Jika bertentangan dengan instruksi terbaru atau kode, selidiki perbedaannya; jangan mengembalikan perilaku lama hanya karena tertulis di sini.

### 7.2 Workflow perubahan

1. Periksa `git status` dan perubahan pengguna.
2. Tentukan target dari permintaan terkini; jangan otomatis mengerjakan backlog lain.
3. Jika target Figma, baca frame/screenshot dan tokens; petakan ke section/block/snippet sebelum implementasi.
4. Untuk Liquid/schema/behavior Shopify, cek dokumentasi resmi yang relevan.
5. Buat perubahan sekecil yang benar dan pertahankan settings merchant.
6. Jalankan validation sesuai scope.
7. Uji Theme Editor, responsive, keyboard dan state yang terpengaruh.
8. Bandingkan screenshot pada viewport/state yang sama.
9. Ringkas hasil dan sisa QA di task aktif; simpan test dumps/screenshot sementara di luar repository kecuali diminta.
10. Push/publish/deploy memerlukan scope eksplisit. Jangan menganggap permintaan edit sebagai izin publikasi.

### 7.3 Perintah development

Dua perintah berikut disalin dari `docs/development.md`. Placeholder store harus diganti oleh tim; jangan menaruh password/token di repository.

**Perintah asli Theme Check:**

```sh
npm exec --yes --package=@shopify/cli@4.9.4 -- shopify theme check --output json
```

**Perintah asli preview:**

```sh
npm exec --yes --package=@shopify/cli@4.9.4 -- shopify theme dev --store YOUR-STORE.myshopify.com
```

`theme dev` menyinkronkan development theme ke Shopify; bukan offline server. Gunakan hanya dengan otorisasi preview/upload. Periksa versi CLI yang kompatibel sebelum memperbarui tooling.

### 7.4 Area rawan regresi

- **Hero:** cached assets, replay reload, history scroll restoration, sofa/background alignment dan loading progress versus decorative animation.
- **Scroll scenes:** resize saat berada di tengah timeline, reverse, short viewport, reduced motion dan Theme Editor lifecycle.
- **Journal:** active slide 01/04/06, cyclic neighbors, angka/fill/ink, gap, brown plane/band dan caption panjang.
- **Footer:** homepage-only gate, non-home static output, mobile order, autoplay module, caption fallback dan wordmark crop.
- **Recommendations:** native hasil/kosong/error, manual fallback, current-product exclusion, catalog kosong, intent complementary.
- **Product:** >250 variants, failed fetch/retry, replacement custom elements, recipient field persistence dan native checkout.
- **Cart:** quantity changes, note retention, empty state, drawer/popover/page dan checkout cepat.
- **App:** add/remove/reorder nyata, app embed, third-party CSS/JS dan markup setelah section replacement.

### 7.5 Merchant editing

- Footer image/caption: **Footer → Studio photo → Image / Reference photo / Caption**.
- Footer reveal/autoplay: setting footer; kode membatasinya ke homepage.
- Recommendations: **Product recommendations → Fallback products / Fallback collection**.
- Cart presentation: **Theme settings → Cart**.
- App blocks: install app dari Shopify Admin, lalu tambahkan app melalui Theme Editor pada slot yang didukung.
- Global overlays/integrations yang disediakan app: **App embeds**.
- Order note: data pesanan untuk merchant; cek penyimpanannya sebelum mengandalkan accelerated checkout.

Nama panel dapat berubah mengikuti lokalisasi/editor Shopify. Keberadaan setting tidak membuktikan third-party app atau backend sudah diuji.

### 7.6 Release ownership yang belum diketahui

| Informasi | Status |
| --- | --- |
| Product owner / reviewer final | Belum diketahui |
| Author tema yang akan dicantumkan | Belum dikonfirmasi |
| URL dokumentasi merchant | Belum tersedia |
| URL/support email resmi | Belum tersedia |
| Branch release dan commit deploy terbaru | Belum dicatat dalam percakapan |
| Store/theme ID yang menjadi acceptance environment | Belum dikonfirmasi |
| Bukti lisensi distribusi seluruh aset Figma | Belum diverifikasi |
| Theme Store acceptance | Belum ada bukti |

