---
title: "Finora: Kode Asli dan Perintah"
description: "Salinan scripts npm, perhitungan Financial Performance, dan kontrak chat Finora dari dokumen sumber."
sidebar:
  label: "Kode Asli dan Perintah"
  order: 8
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 10. Kode asli dan perintah project

Cuplikan berikut disalin dari repository ketika dokumen ini disusun. Ini kode implementasi, bukan prompt pengguna. Tidak ada credential yang disertakan.

### Scripts npm asli

Sumber: `package.json`.

```json
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "typecheck": "tsc --noEmit && tsc -p tsconfig.server.json --noEmit",
    "build": "npm run typecheck && vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "node --test tests/*.test.mjs",
    "release:package": "node scripts/package-release.mjs",
    "dev:api": "node --env-file-if-exists=.env --watch server/index.ts",
    "build:api": "tsc -p tsconfig.server.json",
    "start:api": "node --env-file-if-exists=.env server-dist/server/index.js",
    "docs:assistant": "node scripts/generate-assistant-guide.mjs"
  },
```

### Perhitungan Financial Performance asli

Sumber: `src/services/financialPerformance.ts`.

```typescript
import type { OverviewData } from './dashboardDemo';
export function financialPerformance(data: Pick<OverviewData, 'incomeCents' | 'expenseCents'>) {
  const netCents = data.incomeCents - data.expenseCents;
  return { incomeCents: data.incomeCents, expenseCents: data.expenseCents, netCents, rate: data.incomeCents > 0 ? netCents / data.incomeCents * 100 : null };
}
export function performanceChange(current: ReturnType<typeof financialPerformance>, previous?: ReturnType<typeof financialPerformance>) {
  return current.rate !== null && previous?.rate !== null && previous?.rate !== undefined ? current.rate - previous.rate : null;
}
```

### Kontrak chat asli

Sumber: `shared/assistant.ts`.

```typescript
export interface ChatTransaction { name: string; date: string; category: string; kind: 'income' | 'expense'; cents: number; }
export interface ChatGoal { name: string; savedCents: number; targetCents: number; deadline?: string; }
export interface ChatContext { month: string; openingCents: number; transactions: ChatTransaction[]; goals: ChatGoal[]; today?: string; previous?: { month: string; openingCents: number; transactions: ChatTransaction[] }; }
export interface ChatRequest { message: string; context: ChatContext; history: { role: 'user' | 'model'; text: string }[]; }
export type ChatEvent = { type: 'delta'; text: string } | { type: 'done' } | { type: 'error'; code: string; message: string };

```
