---
title: "internal-app: Maintenance dan Handoff"
description: "Workflow staging, locale, registrasi modul, keamanan endpoint, dan handoff internal-app."
sidebar:
  label: "Maintenance dan Handoff"
  order: 6
---

> Sumber: konteks repo (CLAUDE.md, AGENTS.md, memory, git status/log) per 2026-11-10.
> Bagian bertanda **[BELUM DIKETAHUI]** tidak tersedia di sumber dan sengaja tidak diisi.

## 7. Panduan Maintenance dan Handoff

- Sebelum menulis kode Next.js, baca `node_modules/next/dist/docs/`.
- Kerjakan di `modulo`, jalankan `npm run test:all` (0 error, 0 warning), lalu minta izin sebelum push. Merge ke `main` hanya setelah staging lulus.
- String baru wajib masuk `id.json` dan `en.json` lewat `t(...)`, lalu jalankan uji sinkronisasi locale.
- Modul baru wajib didaftarkan di `modules.ts`, `proxy.ts`, dan memakai `requireModule`.
- Endpoint dev wajib diblokir (404) saat `NODE_ENV === "production"`.
- Mutasi status memakai `updateMany` atomik dengan kondisi status saat ini.
- Rujukan internal: `claude/fase1-ops.md`, PDF "Eksekusi Modul Proyek & Kanban — internal-app.pdf", studio `/dev-templates`.

