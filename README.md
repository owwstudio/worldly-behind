# Worldly Behind

Website dokumentasi tim menggunakan Astro 7, Starlight, dan strict TypeScript.
Dokumentasi ditulis dalam Markdown; MDX digunakan hanya untuk halaman yang
memerlukan komponen interaktif. Interaksi memakai modul vanilla JavaScript
kecil dan custom CSS.

Bahasa Indonesia menjadi bahasa utama dokumentasi dan antarmuka. Nama tool serta
istilah teknis yang lebih jelas dalam Bahasa Inggris tetap dipertahankan, seperti
prompt, workflow, deployment, frontmatter, dan code block. Kode dan prompt sumber
pada dokumen impor dipertahankan agar tetap dapat disalin dengan benar.

Starlight menyediakan navigasi, pencarian Pagefind, daftar isi, syntax highlighting,
dan tautan halaman sebelumnya/selanjutnya. Tema Windows 95 menambahkan desktop teal,
title bar biru, navigasi folder Explorer, panel baca inset, code block Notepad,
dan taskbar dengan menu Start yang berfungsi. Palet klasik tetap konsisten pada
pengaturan warna sistem yang berbeda.

## Setup

Gunakan Node.js **22.12.0 atau lebih baru** dan npm **9.6.5 atau lebih baru**.
Jalankan dari root repository:

```sh
npm ci
npm run dev
```

Dev server berjalan di background, biasanya pada `http://localhost:4321`.
Periksa alamat aktual dengan `npm run dev:status`. Hentikan dengan
`npm run dev:stop` saat selesai.

## Perintah yang tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm ci` | Menginstal versi dependency dari lockfile |
| `npm run dev` | Menjalankan ulang background dev server setelah membersihkan cache konten |
| `npm start` | Alias untuk background dev server |
| `npm run dev:status` | Menampilkan status dan alamat background server |
| `npm run dev:logs` | Membaca log background server |
| `npm run dev:stop` | Menghentikan background server |
| `npm run check` | Menjalankan diagnostik Astro dan type-check, termasuk JavaScript |
| `npm run build` | Membangun ulang halaman statis dan indeks Pagefind ke `dist/` |
| `npm run preview` | Menjalankan production build secara lokal; hentikan dengan Ctrl+C |
| `npm run astro -- <command>` | Menjalankan Astro CLI, misalnya `sync` atau `--help` |

Pencarian menggunakan indeks Pagefind dari production build. Jalankan
`npm run build`, lalu `npm run preview` untuk memeriksa hasil pencarian;
dev server hanya menampilkan placeholder.

Hentikan background dev server sebelum build dan jalankan kembali setelahnya.
Build menggunakan `astro build --force` agar cache Markdown/MDX lama tidak merujuk
stylesheet atau script Expressive Code yang sudah berubah.

Startup dev menjalankan `astro dev stop`, `astro sync --force`, lalu
`astro dev --background`. Cache dibersihkan sebelum startup karena launcher
background tidak meneruskan flag `--force` ke child server. Vite juga melakukan
optimasi ulang dependency agar virtual module tidak memakai konfigurasi tema lama.

Build dilanjutkan dengan Pagefind CLI untuk memastikan manifest pencarian lengkap.
Pada lingkungan ini, proses indexing API Starlight pernah menghasilkan
`pagefind-entry.json` kosong. Pagefind tetap menjadi mesin pencarian Starlight.

## Struktur project

```text
templates/                 Template penulisan, tidak dipublikasikan
public/                    Asset statis
src/
  assets/                  Gambar dan asset yang diproses build
  components/theme/        Override Starlight dan komponen taskbar
  content/docs/            Halaman Markdown dan MDX yang dipublikasikan
  content/i18n/id.json      Terjemahan antarmuka Bahasa Indonesia
  content.config.ts        Loader dokumentasi, frontmatter, dan terjemahan
  scripts/                 Navigasi vanilla JavaScript dan aksesibilitas code panel
  styles/custom.css        Token Windows 95, layout, dan gaya UI
astro.config.mjs           Output statis, bahasa utama, sidebar, dan redirect
tsconfig.json              Strict TypeScript dan JavaScript yang diperiksa
AGENTS.md                  Aturan pengembangan bagi kontributor dan coding agent
```

## Kategori dokumentasi

| Kategori | Folder konten |
| --- | --- |
| Mulai di Sini | `src/content/docs/getting-started/` |
| Dasar-Dasar | `src/content/docs/fundamentals/` |
| Webflow | `src/content/docs/webflow/` |
| Framer | `src/content/docs/framer/` |
| Shopify | `src/content/docs/shopify/` |
| Pug | `src/content/docs/pug/` |
| MCP | `src/content/docs/mcp/` |
| Prompt | `src/content/docs/prompts/` |
| Workflow | `src/content/docs/workflows/` |
| Studi Kasus | `src/content/docs/case-studies/` |

Setiap kategori memiliki halaman ringkasan. Dokumentasi project dikumpulkan
dalam subfolder, seperti `src/content/docs/pug/verity/`. Kategori yang belum terisi
ditandai sebagai konten yang direncanakan. Panduan dan prompt contoh diberi
penanda **Contoh** pada judul, isi halaman, dan badge sidebar.

## Alur kontribusi

1. Baca `AGENTS.md`, buat branch kerja, dan instal dependency dengan `npm ci`.
2. Pilih kategori dan subfolder project bila diperlukan. Salin
   `templates/guide.md`, `templates/prompt.md`, atau `templates/case-study.md`
   ke file `.md` dengan nama kebab-case yang menjelaskan isinya.
3. Ganti seluruh placeholder, atur `title` dan `description` di frontmatter,
   lalu hapus `draft: true` saat halaman siap dipublikasikan. Draft tidak
   dipublikasikan dan tidak masuk indeks pencarian produksi.
4. Gunakan heading untuk daftar isi. Atur `sidebar.order` bila urutan baca perlu
   ditentukan; sidebar otomatis memasukkan halaman dari folder kategori.
5. Simpan konten dalam koleksi dokumentasi dan kode UI dalam folder komponen
   serta script. Gunakan `.mdx` hanya bila memerlukan komponen interaktif.
6. Tinjau halaman dan periksa tautan, instruksi, serta penanda contoh.
7. Hentikan dev server, lalu jalankan `npm run check` dan `npm run build`.
   Gunakan production preview untuk memeriksa pencarian. Jalankan kembali dev
   server jika ingin melanjutkan pekerjaan.
8. Buat pull request yang menjelaskan perubahan dan hasil pemeriksaan. Sertakan
   screenshot untuk perubahan visual, dan commit `package-lock.json` bersama
   perubahan dependency. Jangan commit output build atau informasi rahasia.

Contoh tersedia di `src/content/docs/getting-started/sample-guide.md` dan
`src/content/docs/prompts/sample-prompt.md`. Template disimpan di luar
`src/content/docs/` agar placeholder tidak menjadi halaman publik.

## Deployment statis ke Vercel

Impor repository ke Vercel dengan pengaturan berikut:

| Pengaturan | Nilai |
| --- | --- |
| Framework preset | Astro |
| Install command | `npm ci` |
| Build command | `npm run check && npm run build` |
| Output directory | `dist` |

Pilih versi Node.js yang memenuhi kebutuhan di atas. Project menggunakan
`output: 'static'`; adapter Vercel dan environment variable runtime tidak diperlukan.
Setup lokal tidak melakukan deployment.

Saat domain produksi sudah diketahui, atur opsi `site` Astro ke URL resmi sebelum
mengonfigurasi canonical URL atau sitemap.

## Referensi dan perilaku tema

Tema menggunakan override Starlight yang terdokumentasi dan token CSS bersama.
Menu Start mendukung klik, Enter/Space, tombol panah, Home/End, Escape, dan penutupan
saat klik di luar menu. Navigasi mobile mempertahankan sidebar collapsible Starlight.
Tombol Salin memakai handler dan feedback Expressive Code. Jendela draggable dan
beberapa jendela sekaligus belum diimplementasikan.

- [Dokumentasi Astro](https://docs.astro.build/)
- [Dokumentasi Starlight](https://starlight.astro.build/)
- [Astro di Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
