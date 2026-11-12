---
title: "Finora: Implementasi Teknis"
description: "Struktur frontend, data demo, Messages dan API Gemini, motion, serta deployment Finora."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 6. Implementasi teknis

### 6.1 Frontend dan data

- `src/pages/`: halaman dashboard dan landing.
- `src/components/dashboard/`: chart, dropdown, dialog, search, cards, history dan hooks interaksi.
- `src/services/dashboardDemo.ts`: ledger/Goals serta operasi demo.
- `src/services/transactionView.ts`: parsing/filter/sort/pagination transaksi.
- `src/services/financialPerformance.ts`: cash flow rate dan perubahan percentage points.
- `src/services/goalStatus.ts`: status deadline dan filter Goals.
- `src/services/monthlyExpenses.ts`: proporsi dan URL drill-down kategori.
- `src/styles/`: SCSS layout dan motion.

React state dipakai untuk UI/draft; TanStack Query untuk asynchronous service data. Refetch resource tidak seharusnya mengganti seluruh halaman dengan loading. Form memiliki pending/error/success dan proteksi draft sesuai implementasinya.

Ledger dan Goals bukan penyimpanan keuangan permanen. Refresh dapat memulihkan seed; profile/preferences/history memiliki lifecycle berbeda. Jangan menyamakan semua storage dengan database server atau akun pengguna.

### 6.2 Messages dan AI

- `server/app.ts`: routes, Origin guard, rate limit, shared quota/concurrency, health.
- `server/validation.ts`: validasi snapshot dan kalkulasi ulang.
- `server/gemini.ts`: request Gemini dan pembacaan streaming.
- `shared/assistant.ts`: kontrak chat dan stream parser.
- `shared/finoraGuide.ts`: product knowledge yang dipakai runtime.
- `scripts/generate-assistant-guide.mjs`: menghasilkan dokumentasi panduan.
- `src/services/assistantPresentation.ts`: kartu deterministik.
- `src/services/assistantHistory.ts`: history dan validasi record browser.
- `src/services/assistantContext.ts`: identifikasi pertanyaan comparison dan fingerprint data.

Routes utama: `/api/v1/health`, `/api/v1/assistant/chat`, `/api/v1/assistant/score-recommendations`.

Chat memakai NDJSON dan harus menerima event `done` untuk dianggap selesai. Partial response bukan jawaban lengkap. Stop/disconnect membatalkan upstream; token yang sudah dihasilkan provider tetap dapat terhitung.

Batas tercatat: body 32 KiB, maksimal 60 transaksi per snapshot bulan dan 20 Goals, history maksimal enam pesan, enam request per IP per menit, dua request bersamaan, default 100 attempted generations per UTC day, timeout 30 detik. Comparison boleh menyertakan bulan sebelumnya yang adjacent; body limit tetap berlaku. Kuota bersifat in-memory dan reset saat proses restart, bukan billing cap yang durable.

Origin guard bukan autentikasi. Endpoint publik ini tidak membuktikan identitas pemilik data; snapshot browser adalah data demo yang tidak dipercaya sebagai rekening sungguhan. Jangan mengaktifkan paid billing dengan asumsi limit tersebut menjamin biaya nol.

### 6.3 Motion dan accessibility

Layout/geometry dijaga sebelum motion ditambahkan. Listener, observer, timer, RAF, GSAP context, dan instance terkait dibersihkan saat unmount/fallback. Reduced motion memiliki jalur statis/manual. Native button/link/dialog dan keyboard behavior tetap dipertahankan.

Permintaan menghapus focus outline bukan alasan untuk menghapus seluruh feedback keyboard. Gunakan fokus yang konsisten dengan desain dan verifikasi navigasi keyboard pada komponen yang diubah.

### 6.4 Deployment

GitHub `main` adalah sumber rilis. CI menjalankan tes, build/typecheck, audit dependency runtime, packaging/checksum, upload artifact, preflight, aktivasi symlink, dan health check.

Frontend dan bundle API dikirim sebagai satu release commit; VPS tidak menjalankan build atau npm install setiap rilis. Nginx melayani SPA dan mem-proxy API loopback. Missing API/assets harus tetap 404, bukan HTML entrypoint.

Node runtime khusus berada di `/opt/finora/node`; service `finora-api`; environment di `/etc/finora/api.env`. Akun `finora-deploy` memiliki forced-command SSH dan sudo terbatas untuk restart/stop hanya service Finora. Private environment tidak masuk artifact/Git.

Release activation memakai `current`/`previous` symlink. Health mencocokkan commit frontend dan API. Rollback memulihkan keduanya; static release lama menghentikan API bila tidak memiliki bundle. Ada restart API singkat: **bukan zero downtime**.

