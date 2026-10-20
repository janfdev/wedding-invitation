# The Cinematic Editorial: Digital Wedding Invitation

Sebuah platform undangan pernikahan digital eksklusif yang memadukan tipografi editorial majalah prestisius, multi-layer parallax motion, dan transisi kamera sinematik saat pembukaan undangan.

---

## Fitur Utama

1. **Personalized Gate & Curtain Reveal**:
   - Mendeteksi nama tamu dari parameter URL dinamis (`?to=Nama+Tamu`).
   - Animasi tirai panggung sinematik saat tombol "Buka Undangan" ditekan.
2. **Audio Companion**:
   - Pemutar audio ambient berbasis Web Audio API (bebas ketergantungan CDN eksternal).
   - Dilengkapi visualizer gelombang suara interaktif dan kontrol hening/putar.
3. **Hero Section & Live Countdown**:
   - Penghitung waktu mundur real-time menuju hari bahagia (Hari, Jam, Menit, Detik).
4. **Profil Mempelai & Kutipan Suci**:
   - Kutipan Surah Ar-Rum ayat 21 dan profil mempelai pria serta wanita.
5. **Love Story Timeline**:
   - Rangkuman perjalanan cinta dari pertemuan pertama hingga menuju pelaminan.
6. **Rangkaian Acara & Integrasi Kalender**:
   - Rincian Akad Nikah dan Resepsi Utama.
   - Tombol sinkronisasi langsung ke Google Calendar (waktu dan lokasi terisi otomatis).
   - Tautan langsung ke Google Maps lokasi acara.
7. **Galeri Memori & Lightbox Modal**:
   - Grid foto editorial dengan modal lightbox interaktif (dapat ditutup via tombol Escape).
8. **Digital RSVP & Live Wishes Board**:
   - Formulir konfirmasi kehadiran interaktif dengan perayaan efek konfeti (`canvas-confetti`).
   - Papan ucapan doa restu yang tersimpan dan diperbarui secara real-time.
9. **Amplop Digital & Kado Fisik**:
   - Kartu rekening BCA dan Mandiri dengan fitur 1-Click Copy nomor rekening.
   - Alamat pengiriman kado fisik beserta fitur salin alamat.

---

## Tech Stack

* **Framework**: Next.js 15 (App Router)
* **Bahasa**: TypeScript
* **Styling**: Tailwind CSS v4
* **Animasi**: Motion (Framer Motion v12)
* **Ikon**: Lucide Icons
* **Efek Interaktif**: Canvas Confetti

---

## Menjalankan Proyek Lokal

```bash
# Instal dependensi
npm install

# Jalankan development server
npm run dev

# Kompilasi production build
npm run build
```
