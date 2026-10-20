"use client";

import React from "react";
import { motion } from "motion/react";
import { Clock, MapPin, CalendarPlus, ExternalLink, Sparkles } from "lucide-react";

export function EventSection() {
  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Raden+%26+Anindya&dates=20261024T010000Z/20261024T070000Z&details=Pernikahan+Raden+Arya+Pratama+dan+Anindya+Larasati.+The+Grand+Ballroom+Kempinski+Jakarta.&location=The+Grand+Ballroom+Hotel+Indonesia+Kempinski+Jakarta";

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Hotel+Indonesia+Kempinski+Jakarta";

  return (
    <section className="py-24 px-6 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            Save The Date
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] mt-2">
            Rangkaian Acara
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-12">
          {/* Card Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1E9] text-[#C5A880] text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Akad Nikah</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E232A] mb-4">
                Prosesi Ijab Kabul
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 mb-6 font-light">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-zinc-800">Waktu:</strong> 08.00 - 10.00 WIB
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-zinc-800">Lokasi:</strong> Masjid Agung Al-Ikhlas
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Jl. Kebayoran Baru No. 12, Jakarta Selatan
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-xl bg-[#F5F1E9]/60 text-xs text-zinc-600">
                  <strong className="text-zinc-800 font-medium">Dress Code:</strong> Busana Muslim Formal / Putih Elegan
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 italic text-center">
              Dikhususkan untuk keluarga inti dan kerabat terdekat
            </div>
          </motion.div>

          {/* Card Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E232A] text-[#EADBC8] text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Resepsi Utama</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E232A] mb-4">
                Pesta Perayaan Pernikahan
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 mb-6 font-light">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-zinc-800">Waktu:</strong> 11.00 - 14.00 WIB
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-zinc-800">Lokasi:</strong> The Grand Ballroom Kempinski
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Hotel Indonesia Kempinski, Jl. M.H. Thamrin No. 1, Jakarta Pusat
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-xl bg-[#F5F1E9]/60 text-xs text-zinc-600">
                  <strong className="text-zinc-800 font-medium">Dress Code:</strong> Formal Attire / Batik / Earth Tone
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 italic text-center">
              Kehadiran Anda adalah kehormatan dan kebahagiaan terbesar bagi kami
            </div>
          </motion.div>
        </div>

        {/* Global Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1E232A] hover:bg-[#121417] text-[#FBF9F5] text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all border border-[#C5A880]/30"
          >
            <CalendarPlus className="w-4 h-4 text-[#C5A880]" />
            <span>Simpan ke Google Calendar</span>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F5F1E9] hover:bg-[#EADBC8]/60 text-[#1E232A] text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all border border-[#C5A880]/30"
          >
            <ExternalLink className="w-4 h-4 text-[#C5A880]" />
            <span>Petunjuk Arah Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
