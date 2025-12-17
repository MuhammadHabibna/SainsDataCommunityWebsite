# SaDaCom (Sains Data Community) Website

Website landing page resmi untuk komunitas SaDaCom (Sains Data Community) yang didukung oleh Dicoding. Project ini dibangun menggunakan React modern dengan fokus pada performa, estetika (Light/Dark mode), dan interaktivitas.

## 🌟 Fitur Utama

- **Modern Landing Page**: Desain responsif dengan animasi halus (Framer Motion) dan dukungan tema gelap/terang.
- **Python Speed Run Game**: Mini-game interaktif untuk menguji kemampuan dasar Python pengguna dalam 60 detik.
    - Sistem skor dan *streak combo*.
    - *Leaderboard* real-time terintegrasi dengan Supabase.
    - Mode *endless* dengan pengacakan soal.
- **Roadmap & Curriculum**: Visualisasi jalur pembelajaran untuk member.
- **News & Announcements**: Bagian berita dan pengumuman kegiatan komunitas.
- **Certificate Showcase**: Penjelasan mengenai benefit sertifikasi dan token kelas gratis.
- **Keamanan**: Validasi skor sisi server menggunakan *integrity signature* (Hashing) untuk mencegah kecurangan.

## 🛠 Teknologi

**Frontend:**
- [React](https://react.dev/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Framer Motion](https://www.framer.com/motion/) (Animasi)
- [Lucide React](https://lucide.dev/) (Icons)

**Backend & Data:**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) (API Server)
- [Supabase](https://supabase.com/) (Database & Realtime)
- [Crypto-JS](https://github.com/brix/crypto-js) (Security Hashing)

## 📂 Struktur Project

```
├── api/                # Logic Backend (Questions, Score Submission)
├── scripts/            # Script utilitas (Seeding database)
├── src/
│   ├── components/     # Komponen React (News, Stats, dll)
│   ├── lib/            # Konfigurasi Client (Supabase, dll)
│   └── App.jsx         # Komponen Utama & Routing Halaman
├── server.js           # Express Server Entry Point
└── supabase_schema.sql # Schema Database SQL
```

## 🚀 Instalasi & Persiapan

1.  **Clone Repository**
    ```bash
    git clone <repository-url>
    cd website
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment Variables**
    Buat file `.env` di root directory dan isi konfigurasi berikut (sesuaikan dengan kredensial Supabase Anda):

    ```env
    # Public (Frontend)
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

    # Private (Backend)
    # Gunakan ENV yang sama atau Service Role Key jika butuh akses admin
    SUPABASE_URL=your_supabase_project_url
    SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
    PORT=3000
    ```

    > **Catatan Keamanan**: Pastikan `SECRET_SALT` di file `src/App.jsx` dan `api/submit-score.js` seragam jika Anda mengubah mekanisme hashing.

4.  **Setup Database**
    Jalankan query yang ada di `supabase_schema.sql` pada SQL Editor di dashboard Supabase Anda untuk membuat tabel yang dibutuhkan (`questions`, `leaderboard`).

## 💻 Cara Menjalankan

### Mode Pengembangan (Development)
Untuk menjalankan frontend saja dengan Hot Reload (Vite):
```bash
npm run dev
```

### Jalankan Server Lengkap (Frontend + API)
Untuk menjalankan server Node.js yang melayani Frontend dan API sekaligus (seperti di production):

1.  Build frontend terlebih dahulu:
    ```bash
    npm run build
    ```
2.  Jalankan server:
    ```bash
    npm start
    ```
    Akses website di `http://localhost:3000`.

## 🛡️ Catatan Keamanan
Sistem submit skor menggunakan mekanisme hashing MD5 (`x-signature` header) yang menggabungkan payload data dengan `SECRET_SALT`. Ini mencegah pengguna memanipulasi skor mereka melalui API request biasa tanpa mengetahui salt rahasia tersebut.
