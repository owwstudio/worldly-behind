# Aturan pengembangan Worldly Behind

## Stack

- Astro 7 dengan Starlight 0.42; output statis untuk Vercel.
- Strict TypeScript melalui `astro/tsconfigs/strict`; JavaScript ikut diperiksa.
- Markdown untuk dokumentasi; MDX hanya jika memerlukan komponen interaktif.
- Tema Windows 95 melalui custom CSS dan override komponen Starlight yang terdokumentasi.
- Modul vanilla JavaScript kecil untuk interaksi; tanpa integrasi framework UI.
- npm dengan `package-lock.json` yang di-commit.

## Batasan project

- Periksa project dan file terkait sebelum mengedit.
- Gunakan Bahasa Indonesia sebagai bahasa utama antarmuka, dokumentasi, dan
  template penulisan. Pertahankan nama tool serta istilah teknis Bahasa Inggris
  bila lebih jelas. Pertahankan kode, baris, indentasi, dan prompt sumber saat impor.
- Bahasa utama ditetapkan melalui locale root `id` di Starlight. Terjemahan UI
  tambahan berada di `src/content/i18n/id.json`; URL tidak memakai prefix bahasa.
- Simpan dokumentasi di `src/content/docs/<kategori>/`. Kumpulkan dokumentasi
  project dalam subfolder sendiri, misalnya `pug/verity/`. Pisahkan UI dari konten:
  komponen di `src/components/`, interaksi di `src/scripts/`, dan gaya di `src/styles/custom.css`.
- Gunakan navigasi, pencarian Pagefind, daftar isi, layout responsif, code block,
  dan pagination Starlight. Jangan membangun ulang fitur tersebut.
- Pertahankan `docsLoader()` dan `docsSchema()` dalam `src/content.config.ts`.
  Koleksi terjemahan menggunakan `i18nLoader()` dan `i18nSchema()`.
- Kategori: Mulai di Sini, Dasar-Dasar, Webflow, Framer, Shopify, Pug, MCP,
  Prompt, Workflow, dan Studi Kasus. Sidebar otomatis mengambil halaman dari
  folder kategori yang sesuai. Nama folder dan URL tetap menggunakan slug yang ada.
- Simpan template penulisan di root `templates/`, di luar koleksi yang dipublikasikan.
  Ganti placeholder dan hapus `draft: true` sebelum menerbitkan salinan template.
- Tandai contoh dan placeholder dengan jelas. Jangan mengarang prosedur tim,
  hasil project, atau klaim sumber. Jangan commit rahasia atau data privat klien.
- Jangan menambah framework atau dependency untuk interaksi yang dapat ditangani
  modul vanilla JavaScript kecil. Gunakan kontrol aksesibel dan progressive enhancement.
- Token tema dan gaya global berada di `src/styles/custom.css`; override Starlight
  yang dapat digunakan ulang berada di `src/components/theme/`. Navigasi Start
  memakai native popover dan peningkatan keyboard di `src/scripts/start-menu.js`.
  Pertahankan aksesibilitas dan perilaku responsif Starlight. Palet klasik harus
  terbaca pada kedua preferensi warna sistem. Jangan menambah kontrol dekoratif
  yang terlihat berfungsi. Jendela draggable dan beberapa jendela sekaligus ditunda.
- Pertahankan deployment statis. Adapter server tidak diperlukan; jangan menambah
  route server-only atau infrastruktur runtime tanpa kebutuhan konkret.

## Pengembangan

Gunakan Node.js 22.12.0 atau lebih baru dan npm 9.6.5 atau lebih baru.
Instal dependency dengan `npm ci`.

Jalankan dev server dalam background:

```sh
npm run dev
# Menjalankan: astro dev stop && astro sync --force && astro dev --background
```

Kelola dengan `npm run dev:stop`, `npm run dev:status`, dan `npm run dev:logs`
(setara dengan `astro dev stop`, `astro dev status`, dan `astro dev logs`).
Jangan membiarkan foreground dev server berjalan.

Sebelum menyelesaikan perubahan, jalankan:

```sh
npm run check
npm run build
```

Untuk perubahan konten, tinjau halaman hasil render dan tautannya. Untuk perubahan
interaksi atau CSS, periksa akses keyboard, layar sempit, dan kedua preferensi warna.

`npm run build` memakai `astro build --force` untuk membangun ulang cache konten dan
asset Expressive Code. Hentikan background dev server sebelum build, lalu jalankan
kembali setelahnya agar kedua proses tidak menulis cache yang sama.
Build dilanjutkan dengan `pagefind --site dist` agar manifest pencarian lengkap;
API writer Starlight pernah menghasilkan manifest kosong pada lingkungan ini.

Startup dev menghentikan server lama dan menjalankan `astro sync --force` sebelum
memulai background server. Launcher Astro tidak meneruskan flag `--force` ke child
server, jadi jangan mengandalkan `astro dev --background --force` untuk membersihkan
cache. Periksa hasil pencarian pada production preview, bukan placeholder dev.

Laporkan file yang berubah dan hasil pemeriksaan. Commit lockfile bersama perubahan
dependency; jangan commit file hasil generate dalam `dist/` atau `.astro/`.

## Dokumentasi referensi

Dokumentasi lengkap: https://docs.astro.build

Baca panduan terkait sebelum mengerjakan tugas berikut:

- [Halaman, dynamic route, atau middleware](https://docs.astro.build/en/guides/routing/)
- [Komponen Astro](https://docs.astro.build/en/basics/astro-components/)
- [Komponen React, Vue, Svelte, atau framework lain](https://docs.astro.build/en/guides/framework-components/)
- [Pengelolaan konten](https://docs.astro.build/en/guides/content-collections/)
- [Gaya dan Tailwind](https://docs.astro.build/en/guides/styling/)
- [Dukungan bahasa](https://docs.astro.build/en/guides/internationalization/)
- [Konfigurasi Starlight](https://starlight.astro.build/reference/configuration/)
- [Penulisan Markdown di Starlight](https://starlight.astro.build/guides/authoring-content/)
