# 🐟 FishSite - Premium Ornamental Fish Landing Page

**FishSite** adalah landing page modern yang dirancang khusus untuk konversi penjualan ikan hias premium. Website ini dibangun menggunakan **React (Vite)** dan **Tailwind CSS**, dengan manajemen konten dinamis yang terintegrasi langsung dengan **Contentful CMS**.

Proyek ini menerapkan prinsip copywriting **AIDA (Attention, Interest, Desire, Action)** untuk memandu pengunjung dari ketertarikan awal hingga melakukan pembelian via WhatsApp.

---

## 🚀 Fitur Utama

Website ini terdiri dari 6 section strategis yang dirancang untuk memaksimalkan konversi:

1. **Hero Section (Attention):** Headline kuat dengan desain *clean* untuk menangkap perhatian.
2. **Why Choose Us (Interest):** Menjelaskan keunggulan (Ikan Sehat, Karantina Ketat, Garansi Live Arrival) menggunakan ikon visual.
3. **Product List (Desire):** Katalog produk dinamis dari Contentful dengan fitur *badge* untuk produk unggulan (*Featured*).
4. **Social Proof (Trust):** Data transaksi/testimoni untuk membangun kepercayaan pelanggan.
5. **CTA Banner (Action):** Banner besar yang mengarahkan user langsung ke WhatsApp dengan pesan otomatis.
6. **Education:** Tips perawatan singkat sebagai nilai tambah bagi pengunjung.

---

## 🛠 Teknologi yang Digunakan

* **Core:** [React JS](https://reactjs.org/) (Vite Build Tool)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Flat Design System)
* **CMS:** [Contentful](https://www.contentful.com/) (Official SDK)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** Vercel / Netlify (Recommended)

---

## 🎨 Design System

Desain menggunakan pendekatan **Flat Design** dengan palet warna yang memberikan kesan tenang dan premium (tema laut).

| Elemen | Warna / Deskripsi | Kode Hex (Contoh) |
| --- | --- | --- |
| **Primary** | Deep Sea Blue | `#0F4C75` |
| **Background** | White / Light Gray | `#F8FAFC` |
| **Accent / CTA** | Coral / Teal | `#FF7F50` / `#20B2AA` |
| **Typography** | Sans-serif, Clean | Inter / Roboto |

---

## ⚙️ Konfigurasi Contentful CMS

Proyek ini mengambil data secara *real-time* dari Contentful. Berikut adalah detail pemetaan data (Data Mapping) yang digunakan dalam aplikasi:

**Content Type ID:** `fishSite`

| Field Name | Field ID | Tipe Data | Deskripsi |
| --- | --- | --- | --- |
| **Name** | `name` | Text (Short) | Nama spesies ikan |
| **Description** | `description` | Text (Long) | Deskripsi detail ikan |
| **Price** | `price` | Number | Harga dalam Rupiah |
| **Category** | `category` | Text | Kategori (misal: Predator, Aquascape) |
| **Pictures** | `pictures` | Media (Array) | Foto produk (diambil via Asset URL) |
| **Featured** | `featured` | Boolean | Menandai produk unggulan (Badge) |

### Kredensial Akses

Untuk keperluan testing atau development, konfigurasi berikut telah diterapkan di dalam `src/lib/Contentful.js` (atau file environment):

* **Space ID:** `vxkps57xtc9k`
* **Access Token:** `G-BzfwO5GGea0kz-QGn3qSRYVhxahl7TWxy5F0JXK34`

---

## 📂 Struktur Folder

Struktur proyek disusun agar bersih dan mudah dikembangkan (*Scalable*).

```bash
fish-site/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Section 1: Attention
│   │   ├── Features.jsx       # Section 2: Why Choose Us
│   │   ├── ProductList.jsx    # Section 3: Product Grid (CMS Data)
│   │   ├── ProductCard.jsx    # Komponen satuan kartu produk
│   │   ├── CTA.jsx            # Section 4: Action (WhatsApp Link)
│   │   ├── SocialProof.jsx    # Section 5: Trust
│   │   ├── Education.jsx      # Section 6: Tips
│   │   └── Footer.jsx
│   ├── lib/
│   │   └── Contentful.js      # Konfigurasi Client Contentful SDK
│   ├── App.jsx                # Layout Utama
│   ├── main.jsx
│   └── index.css              # Tailwind Directives
├── .env                       # Environment Variables
├── tailwind.config.js
└── package.json

```

---

## 💻 Cara Menjalankan Project (Localhost)

Ikuti langkah berikut untuk menjalankan proyek di komputer Anda:

1. **Clone Repository**
```bash
git clone https://github.com/USERNAME/fish-site.git
cd fish-site

```


2. **Install Dependencies**
Pastikan Node.js sudah terinstall.
```bash
npm install

```


3. **Jalankan Server Development**
```bash
npm run dev

```


4. **Buka di Browser**
Akses `http://localhost:5173` (atau port yang ditampilkan di terminal).

---

## 📞 Kontak & Pembelian

Semua tombol pembelian di website ini terintegrasi langsung ke API WhatsApp dengan format pesan otomatis:

> *"Halo saya tertarik dengan ikan di FishSite"*

Target Link: `https://wa.me/6288806371058`

---

**FishSite** — *Quality Fish, Delivered Safely.*

---
