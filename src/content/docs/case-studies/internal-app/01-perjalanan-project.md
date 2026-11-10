---
title: "internal-app: Perjalanan Project"
description: "Kronologi pengembangan modul Kanban, Fase 1 Ops, dan perubahan internal-app berdasarkan catatan sumber."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> Sumber: konteks repo (CLAUDE.md, AGENTS.md, memory, git status/log) per 2026-11-10.
> Bagian bertanda **[BELUM DIKETAHUI]** tidak tersedia di sumber dan sengaja tidak diisi.

## 2. Perjalanan Kronologis (dari memory & git log)

Tanggal tidak tersedia di sumber, jadi urutan di bawah hanya berdasarkan urutan log (terbaru di atas).

1. Modul Kanban/Projects: dikerjakan di branch `kanban` berdasarkan spesifikasi PDF dengan phase gates. Phase 0 survey sudah dikirim dan menunggu persetujuan.
2. Fase 1 Ops (branch `fase1-ops`, **selesai, belum di-push**): Number Sequence, Kontrak, Payroll Run, Aset, Kanban gate. Spesifikasi dan hasil ada di `claude/fase1-ops.md`.
3. Commit terbaru:
   - `e0d251b` Super Admin dikecualikan dari alur operasional (izin, lembur, reimburse; dilewati saat generate payroll).
   - `5fdbc48` Perbaikan styling toolbar filter Kanban.
   - `969b46b` Tab/sub-menu "Izin Saya" disembunyikan untuk Super Admin.
   - `f6220c1` Heap Node saat build dinaikkan ke 2048 MB, plus `turbopackIgnore` pada `join()` driver storage lokal.
   - `1816fe7` Type-check dilewati di dalam `next build` (OOM di VPS). Tipe tetap dijaga lewat `npm run typecheck` dan `test:all`.
4. Pekerjaan yang belum di-commit (working tree):
   - Modifikasi: `CustomSlipGajiRenderer.tsx`, `salary-template-actions.ts`, `id.json`, `en.json`.
   - File baru: `slip-template-sanitizer.ts`, 3 file test (renderer, SSR, sanitizer), `claude/locales/`, dan PDF spesifikasi Kanban.

