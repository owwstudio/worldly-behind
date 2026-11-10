---
title: "Papersky: Perjalanan Project"
description: "Kronologi Papersky dari landing SaaS dan motion hingga dashboard marketplace demo, CI, dan deployment VPS."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> **Catatan sumber:** `docs/project-history-and-handoff.md`, disusun 10 November 2026. Implementasi, deployment, dan pengujian yang disebut merupakan catatan historis, bukan pemeriksaan production terbaru.

## 2. Perjalanan project secara kronologis

Tanggal awal setiap batch tidak selalu tersedia. Urutan di bawah mengikuti percakapan dan catatan revisi; nomor revisi lebih dapat diandalkan daripada menebak tanggal.

| Periode / tahap | Perjalanan dan hasil |
| --- | --- |
| Awal project — tanggal pasti tidak diketahui | Pengguna meminta pola kerja Kindsight: klarifikasi → desain → implementasi bertahap → QC → backend/database bila diizinkan → deployment. Fitur fundraising Kindsight tidak boleh disalin. |
| Klarifikasi produk | Data dipilih dari CSV terlebih dahulu; CTA peluncuran awal Join waitlist; fungsi monitoring dan analisis saja. Setelah scope showcase ditegaskan, backend/auth/admin/CMS ditunda. |
| Fondasi dan slicing landing | Referensi Figma landing, dashboard, dan UI elements diberikan. Section dikerjakan satu per satu dengan QC pengguna. Hero desktop disesuaikan 100vh. Suisse Intl dipasang. Ikon, eyebrow, gradient border, dan layout diperbaiki berdasarkan desain/screenshot. |
| Referensi visual 26–28 Oktober | Landing dilengkapi sampai footer. Nama Jane Rayline di Who We Are diganti menjadi **Sekar Agony**. Tanggal ini berasal dari materi/screenshot dan catatan yang tersedia; bukan bukti tanggal pasti setiap commit awal. |
| Eksplorasi opening dan hero | Pengguna menginginkan orkestra motion lintas section. Beberapa konsep preloader/hero dicoba, dikoreksi, dan diganti; motif DNA pada hero akhirnya bergerak diagonal ke atas dengan rotasi berselang-seling dan transparent fade. |
| Preloader storyboard | Foto 1–3 diputar dua siklus, lalu gambar alam membesar dari anchor tengah menuju hero. Ratio, crop, kualitas gambar, easing, layout shift, dan blink setelah intro diperbaiki. |
| Eksperimen video / glass | Pengguna membuat video di luar percakapan dan menaruhnya di assets. Video dinilai kurang HD; eksperimen procedural background juga belum cocok. Hero kembali memakai gambar alam statis dengan efek vertical glass lurus, lebar mengikuti referensi, muncul serentak di background. |
| Landing scroll choreography | Lenis dengan inertia dipasang. All in One Platform menjadi sticky full screen: eyebrow/heading di tengah, bergeser ketika empat circle muncul. Business Insights dan Growth Analytics mengikuti bahasa reveal yang konsisten. |
| Built for Modern Teams → Who We Are | Built memakai dua fase scroll: heading/eyebrow lalu tiga card. Parallax dicoba lalu dihapus. Product overview card putih melebar menjadi bidang penuh dan masuk ke sticky Who We Are. Konten Who muncul bertahap. |
| Finishing landing | Why Choose Us disesuaikan agar konten cukup 100vh; motif earnings loop hijau mengikuti hero. Footer dibuat satu layar dengan wordmark besar dan ticker infinity loop. Kesalahpahaman carousel pada Built dikoreksi: hanya ticker footer yang loop. |
| Revisi 49–56 | Mask card mengikuti radius, mask text tetap tanpa radius. Who stats memakai bidang stripes hitam penuh dan sapuan putih; counter serta timing antarkartu diperbaiki. Shared button/link hover dan menu mobile dipoles. |
| 29 Oktober; revisi 57–59 | Dashboard dipetakan sebagai produk utama. Akses demo publik tanpa login dipilih. MCP Figma pulih; shell yang benar adalah header bergambar dengan tab horizontal, bukan sidebar. Shell dan route dibangun sebelum data. |
| Revisi 60–63 | Kartu landing diekstrak untuk reuse dashboard; MRR, Revenue, Active subscriptions dan tabel subscriptions sempat dibangun sebagai tahap SaaS historis. |
| Revisi 64–67 | Arah berubah ke marketplace analytics dengan dummy data. Koreksi penempatan: tabel Subscription overview menjadi **Product Overview**, kartu ketiga menjadi **Active Users**. Kartu SaaS diganti **Total Sales** dan **Sales Trend**. How it’s calculated serta Payments/Refunds summary dihapus; dropdown diganti custom. |
| Revisi 68–72 | Moving tab indicator, branded loading, Stores, Customers, dan Data imports dibangun. Customers dipastikan berarti pembeli marketplace, bukan subscriber Papersky. Pengguna memprioritaskan semua halaman terlebih dahulu. |
| Revisi 73–76 | Dialog/tabel micro interaction; upload CSV lokal; workspace search; Settings, Help, Notifications, Profile; Get Started membuka dashboard dan Back to website kembali ke landing. Copy landing tidak diubah. |
| 30 Oktober–2 November; revisi 77–86 | Repo private dibuat, CI build/artifact disiapkan. Dedicated deploy user/SSH handler, staging, vhost bootstrap, HTTPS, health check, rollback, dan gate auto-deploy diselesaikan bertahap. `main` menjadi branch release. |
| 2 November; revisi 87–89 | Footer wordmark dibuat statis, dots pada link hover dihapus. Overflow setiap slide intro mobile diperbaiki. Chart transition dan statistik Overview dianimasikan 700ms; warna angka dikoreksi agar tetap hitam. |
| 2 November; revisi 90–92 | Diagram arsitektur HTML dibuat. Filter/hasil tabel memperoleh reveal 240ms dengan stagger 25ms. Semua perubahan dipush dan deployment berhasil pada workflow `41405753928`. |
| 2 November; revisi 93 | Favicon dari Figma tidak dapat dibaca karena reauthentication. Pengguna memberikan SVG lokal. Deployment pertama rollback akibat asumsi MIME pada health check. Favicon kemudian dipublikasikan di `/favicon.svg`; workflow `41408522947` berhasil. |
| 2 November; revisi 94 | Garis bawah tab aktif dihapus melalui border indicator transparan; glass gradient dan transition tetap. Workflow `41415705836` berhasil, browser publik memverifikasi perubahan. |
| 10 November | Penyusunan dokumentasi tim ini. Tidak menambah fitur atau melakukan deployment baru. |

