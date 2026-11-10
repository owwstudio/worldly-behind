---
title: "Elevd: Perjalanan Project"
description: "Urutan pengembangan Elevd dari konsep smart home, desain Figma, font, preloader, dan scroll experience hingga workflow tim."
sidebar:
  label: "Perjalanan Project"
  order: 1
---

> Dokumentasi ini merangkum percakapan project Elevd. Status theme, konfigurasi lokal, dan repository di bawah merupakan kondisi terakhir yang tercatat dalam percakapan, bukan hasil audit terbaru.

## 2. Perjalanan Project

Tanggal setiap tahap tidak tersedia secara lengkap. Urutan berikut mengikuti percakapan.

### 2.1. Penentuan konsep

Pengguna memperkenalkan Elevd sebagai showcase rumah pintar berbasis Shopify. Project dimulai dari Dawn, kemudian dibangun per section sesuai desain Figma.

Pada tahap awal, pengguna meminta saran interaksi dan referensi website dengan aspirasi kualitas Awwwards. Daftar referensi eksternal yang akhirnya dipilih tidak tersedia dalam catatan percakapan.

### 2.2. Memulai development

Pengguna menyetujui dimulainya project dan memberikan development store:

[Elevd Shopify](https://elevd-ai.myshopify.com/)

Implementasi awal mencakup custom header, hero, dan partner logos berdasarkan desain.

### 2.3. Implementasi font

Pengguna menyediakan tujuh file Helvetica Now Display dan meminta font diterapkan terlebih dahulu.

Font dikonversi menjadi WOFF2 dan diterapkan pada body serta heading. Weight Regular dan Bold dipreload.

### 2.4. Menunda slicing untuk membahas interaksi

Pengguna meminta slicing dihentikan sementara agar tim dapat menentukan interaksi yang sesuai dengan konsep smart home.

Fokus pembahasan meliputi:

- Preloader.
- Interaction pattern.
- Micro interaction.
- Identitas visual oranye dan hitam.

### 2.5. Menentukan signature preloader

Pengguna menetapkan permintaan khusus: logo harus tampil di preloader, kemudian bergerak menuju posisi akhirnya di navbar.

Interaksi ini dimaksudkan menjadi ciri khas project.

Pengguna kemudian memberikan Figma node logo dan mengizinkan penggunaan dummy text untuk konten yang belum tersedia.

### 2.6. Pembuatan tiga suasana ruangan

Tiga variasi gambar ruangan dibuat untuk:

1. Morning.
2. Focus.
3. Evening.

Ketiganya menggunakan komposisi ruangan yang serupa dengan perubahan pencahayaan dan suasana.

### 2.7. Implementasi scroll experience

Pengguna menanyakan penempatan gambar karena belum terlihat di live website, kemudian secara eksplisit meminta GSAP, ScrollTrigger, dan Lenis.

Hasilnya adalah section **“A day with elevd.”** setelah partner logos, dengan pergantian suasana ruangan berdasarkan scroll.

### 2.8. Workflow VS Code dan Shopify

Pengguna membuka project di VS Code dan meminta panduan untuk memperbarui theme melalui Shopify CLI.

Folder project yang tercatat:

```text
/Users/anticumlaudeclub/Documents/Framer Codex Test/Elevd
```

### 2.9. Menghubungkan GitHub

Tim `owwstudio` menyediakan repository. Pengguna mencoba push branch `codex/elevd-setup`, tetapi mengalami error remote unpack.

Masalah ditelusuri ke clone Dawn yang masih berupa shallow repository. Setelah history dilengkapi, push berhasil.

### 2.10. Menyepakati penggunaan theme tetap

Pengguna mempertanyakan banyaknya theme di dashboard.

Kesepakatan workflow berikutnya:

- Seluruh section ditambahkan secara kumulatif ke theme yang sama.
- Gunakan satu live theme dan satu draft tetap.
- Tidak membuat theme baru untuk setiap section.

### 2.11. Hubungan dengan Codex di VS Code

Dijelaskan bahwa file project dapat digunakan bersama melalui folder lokal yang sama.

Namun, chat Codex di VS Code dan chat ini merupakan sesi terpisah. Percakapan dan instruksi tidak otomatis tersinkron.

