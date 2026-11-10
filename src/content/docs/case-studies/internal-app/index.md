---
title: "internal-app"
description: "Studi kasus aplikasi internal perusahaan: ringkasan project, keputusan teknis, kendala, dan handoff berdasarkan catatan per 10 November 2026."
sidebar:
  label: "Ringkasan"
  order: 0
---

> Sumber: konteks repo (CLAUDE.md, AGENTS.md, memory, git status/log) per 2026-11-10.
> Bagian bertanda **[BELUM DIKETAHUI]** tidak tersedia di sumber dan sengaja tidak diisi.

## 1. Ringkasan Project

| Item | Isi |
|---|---|
| Nama | internal-app |
| Tujuan | Aplikasi internal perusahaan: Perizinan, Gaji/Slip Gaji, Overtime, Reimburse, Member, Kalender, Kanban/Projects, Kontrak, Payroll Run, Aset, dll. (disimpulkan dari aturan & commit; daftar lengkap **[BELUM DIKETAHUI]**) |
| Stack | Next.js (versi dengan breaking changes; baca `node_modules/next/dist/docs/`), React 19, TypeScript, SCSS (BEM), Prisma, TanStack Query, Tiptap, Chart.js, Sonner (via wrapper) |
| Platform | Web + PWA; deploy staging & produksi di VPS |
| Bahasa UI | Dwibahasa ID/EN (`app/helper/locales/id.json`, `en.json`) |
| Branch aktif | `fase1-ops` (belum di-push) |

## Bab Dokumentasi

1. [Perjalanan Project](/case-studies/internal-app/01-perjalanan-project/) — Kronologi pengembangan modul Kanban, Fase 1 Ops, dan perubahan internal-app berdasarkan catatan sumber.
2. [Keputusan Project](/case-studies/internal-app/02-keputusan-project/) — Keputusan arsitektur, caching, keamanan Server Actions, dan workflow staging internal-app.
3. [Prompt dan Hasil](/case-studies/internal-app/03-prompt-dan-hasil/) — Prompt dokumentasi yang tersedia dan batasan catatan prompt sesi sebelumnya untuk internal-app.
4. [Implementasi Teknis](/case-studies/internal-app/04-implementasi-teknis/) — Struktur aplikasi dan catatan implementasi slip gaji kustom internal-app.
5. [Kendala dan Solusi](/case-studies/internal-app/05-kendala-dan-solusi/) — Catatan OOM saat build, kendala Tiptap, serta pekerjaan internal-app yang belum selesai.
6. [Maintenance dan Handoff](/case-studies/internal-app/06-maintenance-dan-handoff/) — Workflow staging, locale, registrasi modul, keamanan endpoint, dan handoff internal-app.
7. [Link dan Referensi](/case-studies/internal-app/07-link-dan-referensi/) — Referensi internal serta informasi website, repository, dan Figma yang belum tersedia untuk internal-app.
