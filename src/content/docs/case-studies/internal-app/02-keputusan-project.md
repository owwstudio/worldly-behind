---
title: "internal-app: Keputusan Project"
description: "Keputusan arsitektur, caching, keamanan Server Actions, dan workflow staging internal-app."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> Sumber: konteks repo (CLAUDE.md, AGENTS.md, memory, git status/log) per 2026-11-10.
> Bagian bertanda **[BELUM DIKETAHUI]** tidak tersedia di sumber dan sengaja tidak diisi.

## 3. Keputusan Penting

| Keputusan | Alasan |
|---|---|
| Type-check dilewati di `next build` | Worker TypeScript kehabisan memori (OOM) di VPS. Tipe tetap dijaga di CI lokal. |
| TanStack Query dengan `staleTime` 5 menit dan `QUERY_KEYS` terpusat | Menghindari query ulang antar-navigasi dan cache yang tidak sinkron. |
| Static `process.env.NEXT_PUBLIC_*` + `ENV_MODULE_CONFIG_MAP` | Turbopack hanya melakukan inlining pada akses properti statis. |
| Modul plug-and-play (`ModuleBoundary`, `isModuleEnabled`) | Menonaktifkan satu modul tidak boleh merusak modul lain. |
| Zero-trust Server Actions (`requireUser`/`requireRole`) | Server Action bisa dipanggil langsung lewat RPC. |
| Workflow `modulo` (staging) → `main` (produksi) | Semua perubahan diuji di staging dulu. `git push` wajib izin eksplisit pengguna. |
| Super Admin dikecualikan dari alur operasional | Akun OWW-1/.env bukan karyawan operasional (lihat commit `e0d251b`). |

Aturan lengkap ada di `AGENTS.md` (26 bagian).

