---
title: "Papersky: Implementasi Teknis"
description: "Route, struktur React, data metrik, async state, CSV, search, dan motion Papersky beserta cuplikan kode asli."
sidebar:
  label: "Implementasi Teknis"
  order: 4
---

> **Catatan sumber:** `docs/project-history-and-handoff.md`, disusun 10 November 2026. Implementasi, deployment, dan pengujian yang disebut merupakan catatan historis, bukan pemeriksaan production terbaru.

## 5. Implementasi teknis

### 5.1 Route dan pemisahan area

| Route | Implementasi |
| --- | --- |
| `/` | Marketing landing dan preloader |
| `/#waitlist` | Form demonstrasi; tidak menyimpan/mengirim email |
| `/waitlist` | Redirect ke anchor waitlist |
| `/app` | Redirect replace ke Overview |
| `/app/overview` | Total Sales, Sales Trend, Active Users, Product Overview |
| `/app/stores` | Empat toko fiktif dan agregat performa |
| `/app/customers` | Search, store/cohort filter, pagination, purchase history |
| `/app/imports` | Template, upload/validasi/preview CSV, riwayat demo dan sesi |
| `/app/subscriptions` | Redirect legacy ke Stores |
| Route tidak dikenal | Halaman 404 frontend; server menolak aset/API hilang dengan HTTP 404 |

Settings, Help, Notifications, Profile, dan workspace search berada dalam dialog, bukan layanan akun backend. Dashboard memakai shell persisten; pergantian tab tidak menggandakan route aktif.

### 5.2 Struktur source

- `src/main.tsx`: React root, BrowserRouter, QueryClientProvider.
- `src/App.tsx`: public/app layouts, route, redirect, judul halaman.
- `src/pages/`: halaman landing dan empat modul dashboard.
- `src/components/dashboard/`: shell, tab, loading, chart, cards, workspace tools, animation hooks.
- `src/components/ui/`: komponen UI shared termasuk custom dropdown.
- `src/data/`: typed demo fixtures.
- `src/services/`: asynchronous demo services; **bukan endpoint REST**.
- `src/lib/`: kalkulasi, URL filters, CSV parser/validation, search helpers.
- `src/styles/`: SCSS tokens, BEM, layout, motion dan responsive.
- `public/assets/`: font, foto, SVG dan aset runtime. `public/favicon.svg` adalah favicon yang direferensikan entry HTML.
- `tests/`: metrik, filters, parser, packaging, deployment dan Nginx checks.
- `deploy/`, `.github/workflows/`, `scripts/`: delivery dan packaging.
- `docs/qc/`: catatan pemeriksaan dan screenshot. Bukan jaminan seluruh kondisi sudah diuji.

### 5.3 Data dan definisi metrik

- Total Sales = quantity × unit price − discount, untuk completed sales pada fixture.
- Tax, shipping, marketplace fees tidak dimasukkan; USD dan UTC merupakan format demo.
- Fixture mengasumsikan satu listing per order; multi-line orders dan refund events belum dimodelkan penuh.
- Sales Trend cumulative day/week berasal dari fixture penjualan yang sama dengan Product Overview. Weekly buckets berisi tujuh hari dari awal bulan, bucket terakhir bisa parsial.
- Stores membagi total fixture berdasarkan toko. Followers adalah month-end snapshot terpisah.
- Customers scoped per store. New/returning ditentukan first purchase, dengan history sejak Juli 2026; tidak menggabungkan identitas lintas marketplace.
- **Active Users masih fixture terpisah.** September 970 active / 814 new / 156 returning dan Agustus 930 / 750 / 180 tidak boleh dianggap konsisten dengan ledger Customers. Ketidaksesuaian Agustus 930 buyers vs 712 orders sudah dicatat.

| Bulan fixture | Sales USD | Orders | Units |
| --- | ---: | ---: | ---: |
| Juli baseline | 24,007.24 | 613 | 676 |
| Agustus | 27,713.75 | 712 | 775 |
| September | 37,962.18 | 1,019 | 1,082 |

### 5.4 Async state, URL, dan forms

TanStack Query memiliki resource/cache terpisah. `keepPreviousData` mempertahankan data periode asal ketika periode baru dimuat. Error/retry, empty, loading, success dan pending ditangani lokal. URL params divalidasi dan dinormalisasi; perubahan filter mereset pagination. Draft pencarian dan form berada di React state, bukan dikomit setiap keystroke.

Custom dropdown memiliki portal, posisi flip/clamp, listbox/combobox semantics, keyboard navigation, typeahead, Escape/outside close, dan reduced motion. Native dialog digunakan untuk focus trap/return focus; WAAPI memberikan entrance/exit dan cleanup.

### 5.5 CSV dan search

- Orders header: `order_id,customer_id,date,product,quantity,unit_price,discount,tax`.
- Followers header: `date,followers`.
- Normalized Papersky CSV, bukan parser raw export Shopee/TikTok/Tokopedia/Lazada.
- Maksimal 2 MB, 5.000 baris/file, 20 import/sesi; semua baris harus valid sebelum confirm.
- Parser mendukung BOM, CRLF, quoted comma/newline, escaped quotes; validasi tanggal, integer cents, quantity, duplicate dan batas ukuran.
- Preview validasi 10 baris; issue list 20; preview history sampai 100 baris.
- File dibaca di browser. Confirm menambah cache session `local/imports`, bukan analytics, server atau localStorage.
- Reload menghapus import/profile/preferences/read state. Navigasi tab mempertahankan state sesi.
- Workspace search mencari fixture toko, buyer, produk, import demo, dan nama file import sesi; case-insensitive/all-term, maksimal 20 hasil. Isi CSV mentah tidak diindeks.

### 5.6 Motion

Landing memiliki scroll storyboard dan desktop sticky/overlap; mobile memakai penyesuaian/fallback sesuai masing-masing section. Jangan menganggap seluruh desktop pin diterapkan identik di mobile.

Dashboard memiliki moving glass tab indicator 480ms, route entrance 420ms, dialog enter 360ms/exit 220ms, metric/chart transition 700ms, serta table result reveal 240ms dengan row stagger 25ms sampai maksimal 175ms. Hover tab sudah dihapus; garis bawah active indicator sudah transparan. Badge bukan button dan memiliki loop border otomatis.

`DashboardMotion` menggabungkan system reduced-motion dan workspace preference. Chart instance bertahan selama mounted, datanya diperbarui; chart/listener/RAF/observer/animation dibersihkan saat unmount. Angka memakai transient DOM ref tanpa React rerender setiap frame; screen reader memperoleh final target.

### 5.7 Kode asli — bootstrap React

Disalin utuh dari `src/main.tsx` pada snapshot penyusunan, bukan pseudo-code:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App';
import './styles/main.scss';

const queryClient = new QueryClient();
const root = document.getElementById('root');

if (!root) throw new Error('Papersky root element is missing.');

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
```

### 5.8 Kode asli — table result motion

Disalin utuh dari `src/components/dashboard/useTableResultsMotion.ts`. Signature hasil berisi committed filter/visible data; draft search tidak memicu ulang animasi.

```tsx
import { useLayoutEffect, useRef } from 'react';
import { useDashboardReducedMotion } from './DashboardMotion';

/** Animate committed results, without remounting rows or delaying data updates. */
export function useTableResultsMotion(resultKey: string, pending: boolean) {
  const ref = useRef<HTMLTableSectionElement>(null);
  const reduced = useDashboardReducedMotion();
  useLayoutEffect(() => {
    const body = ref.current;
    if (!body || reduced || pending) return;
    // Cells preserve table geometry, borders, horizontal scrolling and focus.
    const animations = Array.from(body.rows).flatMap((row, index) =>
      Array.from(row.cells).map((cell) => cell.animate(
        [{ opacity: 0.35, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 240, delay: Math.min(index, 7) * 25, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' },
      )),
    );
    return () => animations.forEach((animation) => animation.cancel());
  }, [resultKey, pending, reduced]);
  return ref;
}
```

