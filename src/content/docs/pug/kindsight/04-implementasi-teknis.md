---
title: "Kindsight: Implementasi Teknis"
description: "Routing, state, autentikasi, migrasi, CMS, motion, Nginx, dan deployment helper Kindsight."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> **Catatan sumber:** `docs/project-summary-handoff-id.md`, dirangkum 10 November 2026. Status MVP, pengujian, deployment, dan insiden merupakan catatan historis, bukan pemeriksaan live terbaru.

## 5. Implementasi Teknis

### 5.1 Routing

| Area | Route |
|---|---|
| Landing | `/` |
| Login organisasi | `/login` |
| Dashboard | `/app/dashboard` |
| Donors/Campaigns/Donations | `/app/donors`, `/app/campaigns`, `/app/donations` |
| Login admin | `/admin/login` |
| Overview | `/admin/overview` |
| CMS | `/admin/content/*` |
| Demo requests | `/admin/demo-requests` |
| Organisasi | `/admin/organizations` |
| Akun | `/admin/users` |
| Utilitas | `/foundation` |

Alias route lama mempertahankan filter/parameter. Gunakan Link/NavLink dan navigate untuk navigasi internal.

### 5.2 State, data, dan konflik

- Service REST asynchronous bertipe jelas.
- Query private mencakup user/organisasi; pergantian sesi membuang cache/draft lintas tab.
- Mutation menginvalidasi seluruh query terkait; CMS editor/publik dan tab lain disinkronkan.
- Draft dilindungi saat navigasi, unload, dan logout.
- CRUD memakai If-Match revisi numerik; CMS token revisi SHA256 opaque.
- Konflik409 menjaga draft.
- Filter/search/pagination/interval yang perlu persisten disimpan di URL dan divalidasi.
- Nominal USD berupa string; marketing/ilustrasi bukan ledger.

### 5.3 Autentikasi dan otorisasi

- Sesi server delapan jam; cookie HttpOnly/SameSite Strict.
- Mutasi memerlukan Origin diizinkan dan header X-Kindsight-Request.
- Server memeriksa status akun/organisasi setiap request.
- Nonaktif akun/organisasi mencabut sesi tanpa menghapus histori.
- Password memakai hash scrypt.
- Platform admin tidak otomatis mengakses ledger.

### 5.4 Migrasi

| Migrasi tambahan | Fungsi |
|---|---|
| `003-record-revisions` | Revisi record |
| `004-organizations` | Fondasi organisasi |
| `005-demo-request-revisions` | Revisi demo request |
| `006-organization-revisions` | Revisi organisasi |
| `007-account-revisions` | Revisi akun |

Jangan edit migrasi001–007 yang sudah diterapkan, reset/reseed data pengguna, atau mengganti password/ID lama tanpa instruksi.

### 5.5 CMS dan upload

Sepuluh section memakai kontrak konten. `npm run content:contract` menghasilkan kontrak React. Aset/geometri bundel tidak bebas diganti melalui URL konten. Upload logo ditangani backend. Toast hanya tampil setelah save API sukses.

### 5.6 Motion

Lenis/ScrollTrigger memakai satu clock integrasi, aktif pada `/`. Reduced motion, touch native, direct anchor, dan cleanup dipertahankan. Transform scroll, carousel, dan layout dipisahkan agar tidak bertabrakan. Jangan menjalankan controller DOM legacy pada subtree React.

### 5.7 Path VPS

| Item | Path/nama |
|---|---|
| Root | `/www/wwwroot/kindsight` |
| Frontend | `/www/wwwroot/kindsight/dist` |
| Environment | `/www/wwwroot/kindsight/.env` |
| Node project | `kindsight_api` |
| API | `127.0.0.1:3101` |
| Startup script | `/www/server/nodejs/vhost/scripts/kindsight_api.sh` |
| PID | `/www/server/nodejs/vhost/pids/kindsight_api.pid` |
| Log | `/www/wwwlogs/nodejs/kindsight_api.log` |
| Deployment state | `/www/kindsight-deploy` |
| Root helper | `/usr/local/sbin/kindsight-deploy` |

### 5.8 Nginx

Kode berikut tercatat digunakan saat setup, bukan pembacaan ulang konfigurasi server terbaru. Baris dan indentasi cuplikan dipertahankan.

```nginx
location = /api {
 proxy_pass http://127.0.0.1:3101;
 proxy_set_header Host $host;
 proxy_set_header X-Forwarded-Proto $scheme;
}
location ^~ /api/ {
 proxy_pass http://127.0.0.1:3101;
 proxy_set_header Host $host;
 proxy_set_header X-Forwarded-Proto $scheme;
 client_max_body_size 3m;
}
location ^~ /assets/ { try_files $uri =404; }
location / { try_files $uri $uri/ /index.html; }
```

API/aset yang hilang tidak boleh masuk fallback HTML SPA.

### 5.9 Favicon

Baris asli pada index.html:

```html
    <link rel="icon" type="image/png" sizes="512x512" href="/src/assets/brand/favicon.png" />
```

Hasil build yang diverifikasi: `/assets/favicon-B0G-OueN.png`.

### 5.10 Deployment helper

- Sudo terbatas satu entry point tanpa argumen.
- Checksum startup script, SHA256 ZIP, manifest, dan file diverifikasi.
- Menolak traversal, symlink, credential, dan storage dalam artifact.
- npm ci dijalankan sebagai www dengan cache khusus release.
- Preflight API pada port loopback sementara.
- Perubahan migrasi ditolak untuk rollout terpisah.
- Stop hanya PID dengan UID/cwd/tag project yang sesuai.
- Backup/rollback unit kode; env/upload dipertahankan.
- Readiness dan kecocokan HTML live diperiksa.
- Root helper tidak diperbarui otomatis oleh push; perlu review/checksum/pemasangan root.

