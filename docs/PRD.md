# Product Requirement Document (PRD)
# Project: The Cinematic Editorial — Digital Wedding Invitation
**Version:** 1.0.0  
**Status:** Draft / Approved for Design  
**Date:** 2026-10-19  
**Tech Stack Baseline:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Canvas-Confetti

---

## 1. Executive Summary & Vision

### 1.1 Vision
Menciptakan website undangan pernikahan digital yang eksklusif, imersif, dan bernilai estetika tinggi. Menolak pola undangan pasaran yang generik dan monoton, proyek ini mengadopsi konsep **The Cinematic Editorial Parallax**, memadukan tipografi ala editorial majalah pernikahan prestisius, multi-layer parallax motion, dan transisi kamera sinematik saat pembukaan undangan.

### 1.2 Core Pillars
1. **Cinematic Immersion:** Transisi tirai pembuka (curtain reveal), pemutar audio dengan visualizer gelombang suara, dan scroll parallax berlapis.
2. **Editorial Typographic Elegance:** Harmoni tipografi serif klasik untuk nama/motto dan modern sans-serif untuk keterbacaan data agenda.
3. **Frictionless Guest Experience:** RSVP cepat, navigasi peta satu klik, penambahan agenda ke kalender, dan amplop digital dengan fitur salin rekening instan.
4. **Performance & Mobile First:** Optimal pada layar ponsel pintar dengan animasi 60 FPS tanpa lag, responsive, dan hemat data.

---

## 2. Target Audience & Personas

* **Tamu Undangan VIP / Keluarga:** Mengharapkan kesan pertama yang anggun, mudah membaca tanggal, waktu, denah lokasi, dan dress code.
* **Tamu Teman Sebaya / Kolega:** Menikmati cerita cinta interaktif, estetika foto galeri, pemutar musik latar, dan kemudahan RSVP serta amplop digital via ponsel.
* **Mempelai:** Memiliki media representasi pernikahan yang unik, personal, berkesan abadi, serta rekapitulasi kehadiran tamu yang tercatat rapi.

---

## 3. Product Architecture & User Journey

### 3.1 User Journey Flow
```text
[1. Personalized Envelope Cover]
  - Parameter URL: ?to=Nama+Tamu
  - Tampilan amplop tertutup / foto teaser monogram
  - Tombol interaktif: "Buka Undangan" (Open Invitation)
         │
         ▼ (Animasi Cinematic Curtain Reveal + Musik Dimulai)
[2. Hero Section: The Wedding Announcement]
  - Nama pasangan mempelai, tanggal utama, foto hero ber-parallax
         │
         ▼
[3. Quranic / Spiritual Verse & Couple Profile]
  - Ayat suci / kutipan pernikahan elegan
  - Kartu profil Mempelai Pria & Wanita beserta orang tua
         │
         ▼
[4. Horizontal / Pinned Love Story Timeline]
  - Perjalanan kisah: Pertama bertemu, momen lamaran, menuju pelaminan
         │
         ▼
[5. Event Details & Live Countdown]
  - Akad Nikah & Resepsi (Waktu, Lokasi, Dress Code)
  - Penghitung mundur waktu (Days, Hours, Minutes, Seconds)
  - Tombol "Add to Google Calendar" & "Buka Peta Navigasi"
         │
         ▼
[6. Interactive Photo & Video Gallery]
  - Grid editorial foto pre-wedding dengan lightbox interaktif
         │
         ▼
[7. RSVP & Live Wishes Board]
  - Formulir konfirmasi kehadiran (Hadir / Berhalangan, Jumlah Tamu)
  - Papan ucapan doa restu interaktif
         │
         ▼
[8. Digital Envelope & Gift Registry]
  - Pilihan rekening bank / dompet digital
  - Tombol "Salin Nomor Rekening" (1-Click Copy dengan feedback toast)
  - Konfirmasi pengiriman kado fisik
         │
         ▼
[9. Closing & Credit Footer]
  - Ucapan terima kasih keluarga besar & penutup elegan
```

---

## 4. Detailed Feature Specifications

### 4.1 Personalized Gate & Envelope Cover
* **Dynamic Guest Salutation:** Mendeteksi parameter query URL `?to=Bapak+Ahmad` atau `?to=Sarah+Jenkins`. Jika kosong, menampilkan *Tamu Terhormat*.
* **Music Autoplay Handling:** Mengikuti kebijakan browser modern; audio dimulai saat tombol "Buka Undangan" ditekan oleh tamu.
* **Curtain Reveal Transition:** Dua panel penutup bergeser ke atas dan bawah secara halus dengan kurva cubic-bezier sinematik.

### 4.2 Floating Audio Companion
* **Visualizer:** Ikon gelombang suara dinamis di pojok kanan/kiri bawah yang bergerak saat musik aktif.
* **Kontrol Penuh:** Tamu dapat mematikan (*pause*) atau menyalakan kembali (*play*) musik kapan saja tanpa mengganggu posisi scroll.

### 4.3 Multi-Layer Parallax Scrolling
* **Depth Layers:** Elemen latar belakang ornamen bunga/garis abstrak bergerak lebih lambat (kecepatan 0.3x), foto bergerak pada 0.6x, dan kartu teks pada 1.0x.
* **Pinned Section (Love Story):** Momen cerita cinta ter-pin saat scroll dan bertransisi horizontal dari tahun ke tahun.

### 4.4 Event Schedule, Countdown & Navigation
* **Live Countdown:** Menghitung mundur menuju tanggal acara secara real-time. Saat waktu tiba, menampilkan status *"Acara Sedang Berlangsung"*.
* **Sync to Calendar:** Menghasilkan tautan universal Google Calendar, Apple iCal, dan Outlook dengan lokasi dan detail acara otomatis terisi.
* **Maps Integration:** Tautan langsung membuka aplikasi Google Maps atau Waze di perangkat mobile tamu.

### 4.5 Digital RSVP & Papan Doa (Wishes Board)
* **Formulir RSVP:**
  - Nama Tamu (otomatis terisi dari parameter URL, dapat diedit).
  - Pilihan Kehadiran: *Hadir*, *Ragu-ragu*, *Tidak Dapat Hadir*.
  - Jumlah Tamu yang Datang (1 - 2 Orang).
  - Pesan Doa Restu (Textarea).
* **Penyimpanan:** Data tersimpan secara instan di database/storage lokal dan tampil di daftar ucapan secara real-time.

### 4.6 Digital Envelope & Gift Registry
* **Tab Rekening Bank:** Menampilkan logo bank, nomor rekening, dan nama pemilik rekening.
* **1-Click Copy:** Tombol salin nomor rekening dengan konfirmasi instan (Toast notification).
* **Alamat Pengiriman Kado:** Alamat lengkap untuk pengiriman kado fisik beserta fitur salin alamat.

---

## 5. Visual Identity & Design System Token

### 5.1 Color Palette
* **Background Deep Charcoal:** `#121417` (Elemen gelap kontras)
* **Ivory / Champagne:** `#FBF9F5` (Warna dasar halaman)
* **Soft Gold / Warm Ochre:** `#C5A880` (Aksen interaksi, border elegan, tombol utama)
* **Muted Sage / Olive:** `#6B7B6E` (Aksen sekunder alamiah)
* **Dark Slate Text:** `#1E232A` (Teks judul dan keterbacaan tinggi)

### 5.2 Typography System
* **Primary Editorial Serif:** `Cormorant Garamond` / `Playfair Display` (Judul mempelai, kutipan, tanggal hero).
* **Secondary Modern Sans:** `Plus Jakarta Sans` / `Inter` (Label, teks informasi acara, form input).

---

## 6. Non-Functional Requirements & Governance

1. **Mobile First Performance:** Nilai Google Lighthouse Performance $\ge 90$ pada koneksi 4G mobile.
2. **Zero Em-Dash (—) Policy:** Seluruh teks antarmuka dan dokumentasi bebas dari karakter em-dash sesuai standar komunikasi proyek.
3. **Smooth Scroll Physics:** Menggunakan Lenis Smooth Scroll atau native scroll-behavior yang dioptimalkan untuk perangkat layar sentuh.
4. **Asset Optimization:** Seluruh foto pre-wedding dikonversi ke format WebP dengan responsif `srcset` agar cepat dimuat.

---

## 7. Delivery Roadmap & Milestones

* **Milestone 1:** Folder setup, PRD & DESIGN.md specification (Hari 1).
* **Milestone 2:** Scaffolding Next.js 15, konfigurasi font, Tailwind, dan audio player (Hari 2).
* **Milestone 3:** Pembuatan amplop pembuka, curtain reveal, dan hero section parallax (Hari 3).
* **Milestone 4:** Komponen pasangan, love story horizontal timeline, dan event details + maps (Hari 4).
* **Milestone 5:** Galeri pre-wedding lightbox, amplop digital, dan form RSVP + buku doa (Hari 5).
* **Milestone 6:** Testing lintas perangkat mobile/desktop, optimasi aset, dan deployment production (Hari 6).
