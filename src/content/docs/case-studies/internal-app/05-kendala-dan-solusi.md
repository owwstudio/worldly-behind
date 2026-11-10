---
title: "internal-app: Kendala dan Solusi"
description: "Catatan OOM saat build, kendala Tiptap, serta pekerjaan internal-app yang belum selesai."
sidebar:
  label: "Kendala dan Solusi"
  order: 5
---

> Sumber: konteks repo (CLAUDE.md, AGENTS.md, memory, git status/log) per 2026-11-10.
> Bagian bertanda **[BELUM DIKETAHUI]** tidak tersedia di sumber dan sengaja tidak diisi.

## 6. Kendala, Solusi, dan Hal Belum Selesai

| Kendala | Solusi / Status |
|---|---|
| OOM type-check saat build di VPS | Heap dinaikkan, lalu type-check dipindah ke `npm run typecheck`. |
| `next build` saat `next dev` jalan memicu reload loop | Jangan build saat dev jalan. Bersihkan `.next` kecuali `.next/dev`. |
| Tiptap `getJSON()` attrs hilang di argumen Server Action | Kirim plain JSON. Penyebab: Flight membuang atribut null-prototype. |
| Fitur slip gaji kustom | Belum di-commit. Pastikan `npm run lint`, `npx tsc --noEmit`, `npm test tests/unit/locales/locales-sync.test.ts` lulus. |
| Kanban | Menunggu persetujuan Phase 0 (status terakhir di memory; apakah sudah berubah **[BELUM DIKETAHUI]**). |
| Branch `fase1-ops` | Belum di-push dan belum di-merge. |

