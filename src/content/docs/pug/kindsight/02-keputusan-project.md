---
title: "Kindsight: Keputusan Project"
description: "Keputusan arsitektur SPA, organisasi, data, migrasi, motion, dan deployment Kindsight."
sidebar:
  label: "Keputusan Project"
  order: 2
---

> **Catatan sumber:** `docs/project-summary-handoff-id.md`, dirangkum 10 November 2026. Status MVP, pengujian, deployment, dan insiden merupakan catatan historis, bukan pemeriksaan live terbaru.

## 3. Keputusan Penting dan Alasannya

| Keputusan | Alasan |
|---|---|
| React SPA | Menyatukan routing, state, dan pola frontend |
| TanStack Query | Cache, refetch, mutation state, invalidation |
| Filter/pagination di URL | Refresh, share URL, Back/Forward |
| Scope organisasi di API/database | Menu saja tidak cukup untuk mencegah akses lintas organisasi |
| Admin terpisah dari ledger | Memisahkan operasi platform dan data organisasi |
| Migrasi tambahan | Menjaga data, ID, password, dan histori |
| Desain QC dipertahankan | Perubahan teknis bukan kesempatan merombak desain |
| Layout sebelum motion | Memudahkan QC dan mengurangi perubahan bersamaan |
| Subdomain | Menggunakan route root `/` tanpa penyesuaian subdirectory |
| Build di CI | Menghindari frontend build berat di VPS |
| Artifact deployment | Folder ZIP VPS bukan checkout Git |
| Scoped root helper | Membatasi dampak pada aplikasi lain |
| Tanpa global restart | Menghindari perubahan proses/direktori Node bersama |
| Data persisten terpisah | Update kode tidak menghapus environment, database, atau upload |
| Migrasi terpisah dari push | Schema membutuhkan rollout yang ditinjau |
| Favicon berhash | Asset baru memperoleh URL baru saat build |

