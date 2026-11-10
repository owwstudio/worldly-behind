---
title: "Auralink: Link dan Referensi"
description: "Website, repository, Figma, referensi teknis, dan dokumen lokal project. Dokumentasi Auralink."
sidebar:
  label: "Link dan Referensi"
  order: 7
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 8. Link dan referensi

### Proyek

- Repository: https://github.com/briankusuma/auralink-shopify — origin dibaca saat penyusunan; branch/commit release belum dicatat.
- Website yang tercatat: https://auralink-oneweekwonders.myshopify.com/ — status deployment latest patch belum dikonfirmasi.
- Figma Speedtest, node yang dibagikan: https://www.figma.com/design/C2rhn7BP2nXA0LyByRDn09/Speedtest?node-id=3565-564&t=bMfJ2y2tKnXZiImZ-4 — link berasal dari percakapan; akses MCP terakhir gagal.
- Lenis: https://lenis.dev/
- Official Lenis GSAP integration: https://github.com/darkroomengineering/lenis#gsap-scrolltrigger

### Official Shopify references yang digunakan dalam pengerjaan

- Theme Store requirements: https://shopify.dev/docs/storefronts/themes/store/requirements
- Liquid `inline_asset_content`: https://shopify.dev/docs/api/liquid/filters/inline_asset_content
- Liquid `render`: https://shopify.dev/docs/api/liquid/tags/render
- Liquid `split`: https://shopify.dev/docs/api/liquid/filters/split
- App blocks: https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks
- Theme Check LiquidComplexity: https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/liquid-complexity
- Theme Check MatchingTranslations: https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/matching-translations
- Theme Check TemplateLength: https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/template-length

Dokumentasi requirements dapat berubah. Tim wajib membaca ulang official sources pada milestone berikutnya. Link di atas adalah referensi historis, bukan pernyataan bahwa isinya telah diperiksa ulang saat dokumen handoff ini ditulis.

## Informasi yang belum diketahui

- Tanggal mulai proyek dan tanggal pasti setiap revisi awal.
- Current production branch, release commit, dan deployment terakhir.
- Versi final GSAP, ScrollTrigger, Three.js serta final camera/zoom setelah semua revisi.
- Hasil browser performance dan accessibility audit terbaru.
- Bukti visual semua animation states setelah patch terakhir.
- Status koneksi Figma setelah error MCP terakhir.
- Hubungan file website HTML/splash cursor yang terbuka di IDE dengan proyek Auralink.

Dokumen ini harus diperbarui dari bukti repository, tes dan deployment terbaru ketika proyek dilanjutkan.
