# 1 Day 1 Website - Challenge Shuffle

Aplikasi web modern berbasis React dan Tailwind CSS untuk mengacak kategori ide proyek pembuatan website secara acak dan adil. Proyek ini dirancang sebagai alat bantu dalam menjalankan tantangan harian "1 Day 1 Website".

---

## Ringkasan Proyek

Challenge Shuffle menyediakan antarmuka pengguna yang minimalis dan responsif dengan performa tinggi. Aplikasi ini memuat 100 kategori website独立 dan menggunakan algoritma pengacakan berbasis distribusi seragam tanpa repetisi langsung.

---

## Fitur Utama

- 100 Kategori Website: Mencakup berbagai domain seperti E-Commerce, SaaS, Portofolio, Dashboard Admin, hingga Hiburan.
- Pengacakan Murni & Adil: Distribusi peluang tepat 1% untuk setiap kategori tanpa pengulangan beruntun pada dua putaran berturut-turut.
- Desain Fluid & Minimalis: Menggunakan palet warna gelap, efek pencahayaan latar, dan tata letak presisi berbasis Tailwind CSS.
- Mikro-Interaksi: Transisi teks dan modal pop-up yang halus menggunakan Framer Motion.
- Salin Ringkas: Fitur penyalinan teks kategori langsung ke papan klip (clipboard) dari dalam modal hasil.

---

## Teknologi yang Digunakan

- Framework: React 19
- Build Tool: Vite
- Styling: Tailwind CSS v4
- Animation Engine: Framer Motion
- Icons: Lucide React

---

## Struktur Direktori

'''text
react-shuffle/
- src/
  - components/
    - Modal.jsx (Komponen modal pop-up hasil pengacakan)
  - data/
    - categories.js (Daftar 100 kategori website)
  - App.jsx (Logika utama dan tata letak aplikasi)
  - index.css (Konfigurasi Tailwind CSS)
  - main.jsx (Entry point aplikasi)
- vite.config.js (Konfigurasi Vite dan plugin Tailwind)
- package.json
- README.md
'''

---

## Panduan Instalasi & Penggunaan

### Prasyarat
Pastikan komputer kamu sudah terinstal:
- Node.js (versi 18.0 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Kloning Repositori
   git clone https://github.com/username/react-shuffle.git
   cd react-shuffle

2. Instal Dependensi
   npm install

3. Jalankan Server Development
   npm run dev
   Buka peramban dan akses alamat http://localhost:5173

4. Build untuk Produksi
   npm run build

---

## Lisensi

Proyek ini terlisensi di bawah MIT License.