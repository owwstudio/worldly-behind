---
title: "Auralink: Perjalanan Project"
description: "Kronologi pengembangan desain, fitur storefront, motion, revisi, dan pemeriksaan project. Dokumentasi Auralink."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> **Catatan sumber:** `project-history-auralink.md`, disusun 10 November 2026. Status implementasi dan hasil pengujian merupakan catatan historis, bukan audit release terbaru.

## 2. Perjalanan proyek secara kronologis

### 2.1 Hero radio: komposisi dan animasi pertama masuk

Pengguna memberi urutan visual: tampilan atas radio, radio berdiri lalu duduk di meja, komposisi hero akhir, kemudian headline dan elemen antarmuka. Canvas awal harus mengikuti proporsi radio agar tidak terpotong.

Arah revisi meliputi:

1. Kamera awal tepat dari atas sehingga permukaan atas radio terlihat seperti kotak.
2. Radio bergerak menuju posisi duduk dengan transisi lambat dan smooth.
3. Shadow baru muncul setelah radio dan adegan sudah lengkap serta radio duduk, karena shadow sebelumnya terpotong.
4. Navbar turun dari atas ketika radio mulai berdiri menuju duduk.
5. Headline muncul ketika radio mulai bergeser ke samping.
6. Tag Smart, Safe, Secure muncul satu kali setelah text reveal selesai.

Pengguna menyesuaikan kamera dari posisi `(2.94, 2.9, 6.07)` menjadi `(2.96, 2.92, 6.12)`, target tetap `(0.02, -0.16, 0)`. Permintaan berikutnya memperbesar radio mengikuti screenshot dan membatasi maximum zoom-in. Nilai akhir setelah seluruh revisi visual tidak dipastikan oleh dokumen ini.

### 2.2 Hero fullscreen menjadi rounded wrapper

Wrapper hero awalnya diminta full width dan full height tanpa radius. Instruksi kemudian diperjelas: selama initial radio animation, hero tetap fullscreen; saat scroll turun, frame berubah menjadi rounded dengan maximum width 1440px dan ruang putih di sekeliling/atasnya.

Poin penting dari koreksi pengguna:

- Yang pelan adalah initial load radio, bukan respons pembentukan rounded frame saat scroll.
- Isi wrapper tidak boleh shape shifting atau bergeser karena perubahan frame.
- Hindari blink saat radio duduk dan overlap dengan section berikutnya.
- Background navbar menjadi putih sejalan dengan perubahan rounded wrapper.

Perilaku fullscreen-to-rounded adalah target visual. Semua kombinasi viewport dan state belum dikonfirmasi melalui browser QA dalam catatan terakhir.

### 2.3 Navbar, search, dan tag

Navbar diminta menyembunyikan diri ke atas saat scroll turun dan muncul saat scroll naik. Kelompok search, account, language, dan cart harus memiliki spacing yang konsisten.

Tag Smart, Safe, Secure beberapa kali dilaporkan muncul dua kali. Targetnya satu rangkaian setelah headline selesai: dari satu capsule bersama, menjadi tiga capsule yang masih berdekatan, lalu terpisah dengan gerakan sedikit bouncy dan terasa lengket. Rangkaian serupa diminta untuk kelompok kontrol navbar.

Search navbar harus mempertahankan fungsi lengkap seperti halaman lain. Perpindahan icon search dan close/X juga diminta lebih smooth. Detail pengujian end-to-end search terbaru belum tersedia.

### 2.4 Global liquid text reveal dan Bento

Pengguna mengeluhkan ghost/shadow di belakang text ripple saat hover, efek terlalu tipis, dan reveal yang tidak konsisten. Targetnya menggunakan karakter efek global yang sama antara entrance dan hover tanpa double text.

Bento mengikuti urutan referensi:

1. Heading dan subtitle berada di tengah.
2. Heading bergerak naik dan bertahan sampai akhir transisi.
3. Kartu 99% muncul, dengan angka count dari 0 ke 99.
4. Dua kartu bertumpuk muncul dan isinya direveal.
5. Kartu besar melengkapi layout akhir.

Kemudian pengguna menemukan heading hilang, muncul ganda, dan reveal hanya berjalan sekali. Perbaikan terakhir menghubungkan heading serta subtitle ke reversible GSAP timeline, menggantikan one-time `headingPlayed`/`onEnter` gate.

Hover kartu sempat diarahkan menjadi image zoom. Setelah pengguna tetap melihat flicker, keputusan akhir adalah **menghapus hover Bento**, bukan mempertahankan zoom. Jangan mengembalikan hover hanya berdasarkan instruksi lama.

### 2.5 Impact: profil, quote, statistik, dan logo

Urutan yang diminta berkembang menjadi:

1. Profil Dr. Dayat Santoso di tengah dengan background putih.
2. Profil bergeser ke posisi samping; setelah foto selesai bergerak, line dan quote muncul.
3. Pada fase profil/quote, bidang warna `#F5F3F0` memenuhi section.
4. Tiga icon cards turun berurutan dari kiri ke kanan, awalnya tanpa text.
5. Setelah gerakan turun selesai, angka dan deskripsi muncul; angka count dari 0 ke default masing-masing.
6. Bidang warna menyusut menjadi rounded outer wrapper, memperlihatkan section putih.
7. Logo tampil dalam satu bidang besar sebelum akhirnya memiliki kotak masing-masing.

Pengguna sempat menyebut foto bergeser ke kanan, sementara referensi dan klarifikasi lain menempatkan profil di kiri. Target final perlu dibandingkan dengan screenshot terakhir, bukan diambil dari satu kalimat terpisah.

Ukuran yang diminta: icon card 160px persegi, icon 40px, yellow circle 72px; logo box tinggi 117px; wrapper background padding atas dan bawah 100px. Pastikan responsive adaptations diuji, bukan memaksakan ukuran desktop ke mobile.

Background section langsung diganti warna pada revisi awal. Instruksi berikutnya menggantinya dengan pendekatan **section putih + full-section overlay `#F5F3F0` yang menyusut menjadi wrapper**. Ini adalah arahan yang lebih akhir.

Transisi profil/quote diminta memiliki gerakan berbasis waktu yang halus setelah trigger, tetapi tetap bisa reverse ketika scroll naik. Sebelumnya perilaku satu kali menyebabkan quote tetap terlihat dan foto tidak kembali ke tengah.

### 2.6 Product showcase fullscreen menuju slider

Targetnya gambar produk center slide mengisi layar terlebih dahulu. Setelah trigger terlihat fullscreen, gambar menyusut otomatis ke center slide. Text masuk dari bawah dan side slides masuk dari sisi masing-masing; klik slider baru aktif setelah entrance selesai.

Pengguna meminta reverse scroll, sehingga gambar dapat kembali fullscreen. Jika pengguna sudah mengganti slide, fullscreen berikutnya harus memakai gambar center slide yang sedang aktif, bukan gambar awal yang di-hard-code.

Ada dugaan pengguna bahwa `asset_url` menyebabkan error. Dugaan tersebut tidak boleh dianggap root cause tanpa bukti. Perbaikan berikutnya mencakup validasi referensi asset dan fallback filename.

### 2.7 CTA: overlay lime dan tangan

Referensi CTA dimulai dari bidang lime fullscreen, menyusut menjadi kotak kecil, tangan naik menembus bagian atas kotak dengan lintasan melengkung, kemudian text box muncul dan layout akhir tersusun.

Warna yang diminta adalah `#F2FE63`. Beberapa kali pengguna melaporkan warna hilang dan transisi kasar. Arah final: section tetap putih, sebuah overlay lime memenuhi section dan menyusut ke kotak; hindari sekadar mengganti background section sehingga efek menyusut hilang.

Container tangan harus menyamarkan tepi potongan kanan bawah, sejajar dengan bagian bawah kotak lime, sementara tangan dapat keluar dari sisi atas. Pengguna juga meminta global text reveal tetap berjalan ketika CTA content muncul.

Status visual akhir tepi tangan dan overlay perlu diuji di browser; dokumentasi ini tidak menyatakan masalah tersebut pasti selesai pada semua ukuran layar.

### 2.8 Product card hover

Pada featured device card, divider abu-abu diminta menyusut dari 100% ke 0. Accent line hijau tumbuh dari 0 ke 100%, lalu menghilang. Timing harus pelan dan smooth.

Catatan implementasi mencatat native CSS decorative pseudo-lines, gray contraction 700ms, accent sweep 1.8s, keyboard `focus-within`, dan static fallback untuk reduced motion. Perubahan ini berbeda dari hover Bento yang akhirnya dihapus.

### 2.9 Lenis, responsive, dan merchant lifecycle

Pengguna meminta Lenis karena scrolling terasa berat, dengan perhatian khusus agar footer tetap dapat dicapai sampai bawah dan section/component tetap responsive.

Scope lalu diperluas ke keamanan Theme Editor: sections dapat dipindah, dihapus, diduplikasi, ditambah, serta isi blocks ditambah/dikurangi. Perbaikan diarahkan pada isolated instances, cleanup, trigger order berdasarkan DOM aktual, shared loading, dan fallback ketika konten opsional tidak ada.

### 2.10 Audit diagnostics — catatan 22 Oktober 2026

Pengguna menantang klaim bahwa proyek sudah bersih, menunjukkan warning `Missing property "name"` pada app block serta `LiquidComplexity` pada facets.

Ditemukan perbedaan kemampuan checker: global CLI 3.78.1 tidak melaporkan beberapa warning yang dilaporkan CLI 4.9.4. Audit kemudian memakai CLI 4.9.4 dengan fail level warning.

Perbaikan yang tercatat:

- Memisahkan mobile facets drawer ke snippet tanpa mengubah hasil render.
- Menyederhanakan placeholder product-card logic.
- Menghapus dua unreferenced snippets.
- Memperbaiki missing asset references dan schema translations.
- Mengoreksi duplicate schema validator dari extension Sissel, bukan menambahkan properti `name` yang tidak valid ke `@app` entry.

### 2.11 Bento hover — catatan 23 Oktober 2026

Upaya image zoom masih diikuti permintaan pengguna untuk menghapus hover. Keputusan final yang tercatat: semua hover/transition rules Bento dihapus, sementara scroll entrance tetap ada.

### 2.12 Scroll stutter dan reversible heading — catatan 26 Oktober 2026

Audit menemukan independent RAF clock, duplicate refresh ownership, dan unconditional Lenis resize yang dapat memutus inertia. Integrasi diperbaiki menjadi satu clock dan refresh yang dikoordinasikan.

Selanjutnya heading/subtitle Bento diubah dari one-shot reveal menjadi controlled reveal mengikuti timeline yang dapat maju dan mundur. Regression test mencakup tiga siklus forward/reverse dan refresh pada intermediate progress.

### 2.13 Pemeriksaan MCP Figma dan dokumentasi

Pemeriksaan terakhir dalam percakapan menemukan tool Figma terdaftar tetapi panggilan `whoami` dan `get_metadata` gagal dengan `Unknown tool`. Akses node desain belum berhasil diverifikasi ulang.

Pada 10 November 2026 pengguna meminta dokumentasi untuk tim dan penyimpanan bersama handoff proyek lainnya. Dokumen ini khusus Auralink, bukan riwayat Le Friance atau website HTML lain yang sedang terbuka di IDE.

