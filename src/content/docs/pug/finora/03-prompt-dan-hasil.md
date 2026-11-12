---
title: "Finora: Prompt Asli dan Hasil"
description: "Prompt asli dan ringkasan prompt Finora untuk desain, motion, dashboard, Gemini, serta publikasi."
sidebar:
  label: "Prompt Asli dan Hasil"
  order: 3
---

> **Catatan sumber:** `docs/PROJECT-HISTORY-ID.md`, disusun 12 November 2026. Status implementasi, pengujian, dan deployment merupakan catatan saat penyusunan, bukan pemeriksaan live terbaru.

## 5. Riwayat prompt dan hasil

### 5.1 Prinsip pembangunan

**Prompt asli — kutipan dari brief awal:**

```text
Jangan langsung coding. Bantu saya merumuskan arah produk, pembagian area aplikasi, fitur MVP dan urutan pengerjaannya. Setelah itu kita sepakati fondasi dan mulai implementasi bertahap.
```

**Prompt asli — penegasan scope:**

```text
kamu bisa baca link mcp figma disini, pastikan project ini tidak overengineering, karena project ini nanti hanya untuk showcase / portofolio saja, tapi portofolio niat.
```

Hasil: pekerjaan bertahap, scope showcase, batas backend/CMS/auth dibedakan dari acuan awal.

### 5.2 Typography dan fidelity

**Prompt asli:**

```text
tolong pakai inter display sesuai design.
```

**Prompt asli:**

```text
tolong kembalikan seperti semua ( sama seperti figma ) saja, nanti tentang layout besar ini kita akali menggukan interaksi saja.
```

Hasil: Inter Display digunakan; layout kembali pada arah Figma setelah eksperimen skala.

### 5.3 Arah motion

**Prompt asli:**

```text
untuk website ini banyak element gradient ungu, grafik, block kotak, dan efek grain, saya ingin interaksi dibawa ke standar awwwards, terdapat transisi antar section ( kedepannya juga saya ingin ada grafik atau block yang dianimasikan yang menjadi transisi antar section ). bagaimana menurutmu
```

**Prompt asli:**

```text
saya ingin menggunakan teknik morphing dan transformasi untuk setiap bentuk di website. contoh logo di preloader berubah menjadi background putih di scene 1.

untuk itu baiknya hero-dashboard bukan berupa img. karena nanti akan kita animasikan.

dan untuk scene 3 itu awalnya garis graphik bergerak dari titik line kemudia membentuk grapik yang seharusnya. disusul dengan kemunculan element dashboard lain yang muncul dengan smooth dan dianimasikan.

apa sudah jelas? atau ada saran lagi?
```

Hasil: storyboard morphing, dashboard yang dapat dianimasikan per elemen, Lenis, serta pengaturan ulang kontrol scroll/reveal melalui QC. Klaim “standar Awwwards” adalah aspirasi, bukan sertifikasi/penghargaan yang telah diperoleh.

### 5.4 Revisi kontrol hero dan navbar

**Prompt asli:**

```text
buat tidak usah sticky dan tidak muncul atau hilang saat scroll saja
```

**Prompt asli:**

```text
nice, sekarang ubah interaksi hero-dashboard menjadi reveal biasa, tanpa digerakkan menggunakan scroll.
```

Hasil: normal-flow navbar dan dashboard reveal otomatis. Scroll spacer hero kemudian dilepas setelah ekspansi selesai.

### 5.5 Transisi antarseksi

**Ringkasan prompt — bukan kutipan:** pengguna memberi storyboard tiga Features card menjadi kosong, menyatu, kemudian menjadi wrapper Use Case. Wrapper Use Case melebar fullscreen menjadi background testimonial; accordion netral berubah menjadi quote card, lalu foto menyusul setelah quote berada pada tempatnya.

Hasil: shared sticky stage, proxy geometry, handoff satu permukaan, reading holds, fallback manual/mobile/reduced motion. Beberapa arah horizontal/vertikal sempat dicoba sebelum horizontal kembali dipilih.

### 5.6 Dashboard: layout dan fungsi

**Prompt asli:**

```text
qc dan animasi nanti saja, sekarang targetnya semua layout sudah muncul dulu
```

**Prompt asli:**

```text
baik, yang terpenting design harus sesuai dengan figma. dan pastikan interaksinya smooth
```

**Ringkasan prompt — bukan kutipan:** pengguna meminta sidebar Transactions dropdown, Goals halaman sendiri, sidebar muat viewport, Profile/Preferences, reset demo, FAQs, Pricing dashboard, search lintas dashboard, dan transisi chart.

Hasil: halaman dan fungsi demo bertahap, dengan custom dropdown, URL state, dialog, feedback, dan micro interactions.

### 5.7 Chat dan Gemini

**Prompt asli:**

```text
diperlukan apa saja untuk implementasi gemini api untuk chat?
```

**Prompt asli:**

```text
baik, kita upgrade satu per satu, kita mulai dari **jawaban yang lebih visual dan kontekstual**:
```

**Prompt asli:**

```text
oke, kita buat panduan untuk training gemini kita
```

Hasil: API Gemini server-side, visual answer cards, browser history, serta panduan produk yang diambil sebagai konteks prompt. **Tidak ada bukti fine-tuning Gemini dilakukan**; kata “training” dalam percakapan diwujudkan sebagai product knowledge/prompt grounding.

### 5.8 Upgrade terakhir

**Prompt asli:**

```text
nice, sekarang updat terahir untuk project ini, saya ingin memaksimalkan fitur message ai di finora
```

**Prompt asli — persetujuan implementasi:**

```text
iya boleh gitu, tolong di implementasi
```

Hasil: optional previous-month context, deadline/today, comparison cards, draft sessionStorage, stale detection, dan streaming RAF batching. Uji model nyata pertama mengandung kalimat residual yang tidak didukung data; instruksi diperketat dan uji berikutnya menjelaskan selisih sesuai angka. Ini tidak menjamin model bebas hallucination.

### 5.9 Publikasi

**Prompt asli:**

```text
coba di push ke github dan vps.


habis ini kita membuat dokumentasi project dan history prompt.
```

Hasil: commit `e9f4a52` dirilis melalui CI; frontend/API health cocok, route dashboard 200, missing API/assets 404, Kindsight/Papersky 200. Edit lokal landing yang sebelumnya dikecualikan tetap tidak masuk rilis.

