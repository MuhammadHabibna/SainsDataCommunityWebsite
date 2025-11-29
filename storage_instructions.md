# Panduan Setup Supabase Storage (Manual)

Untuk menampilkan gambar pada News Section, Anda perlu membuat Bucket Storage di Supabase dan membuatnya Public.

## Langkah 1: Buat Bucket Baru
1. Login ke Dashboard Supabase project Anda.
2. Klik menu **Storage** di sidebar kiri (ikon folder/gambar).
3. Klik tombol **New Bucket**.
4. Isi nama bucket dengan: `news-images`.
5. **PENTING**: Pastikan opsi **Public Bucket** dicentang/diaktifkan.
6. Klik **Save**.

## Langkah 2: Upload Gambar
1. Masuk ke bucket `news-images` yang baru dibuat.
2. Klik **Upload File** dan pilih gambar yang ingin digunakan.
3. Setelah terupload, klik pada file gambar tersebut.
4. Di panel kanan, klik tombol **Get URL** atau icon Copy Link.
5. URL inilah yang akan Anda masukkan ke kolom `image_url` di tabel database `announcements`.

## Langkah 3: Masukkan Data ke Database
1. Buka menu **Table Editor**.
2. Pilih tabel `announcements`.
3. Klik **Insert Row**.
4. Isi data berita (Title, Content, dll).
5. Paste URL gambar dari Langkah 2 ke kolom `image_url`.
6. Klik **Save**.

Selesai! Berita dengan gambar akan muncul di website.
