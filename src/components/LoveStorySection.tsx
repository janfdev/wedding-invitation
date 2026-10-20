"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar } from "lucide-react";

const STORIES = [
  {
    year: "2020",
    title: "Pertemuan Pertama",
    desc: "Bermula dari perjumpaan tak sengaja di perpustakaan kampus, sebuah obrolan singkat tentang buku dan mimpi masa depan perlahan menumbuhkan benih rasa saling mengagumi.",
  },
  {
    year: "2023",
    title: "Tumbuh Bersama",
    desc: "Menghadapi lika-liku karir dan dinamika kehidupan, kami belajar saling mendengar, menguatkan langkah, dan menemukan rumah ternyaman di dalam doa masing-masing.",
  },
  {
    year: "2025",
    title: "Ikrar Lamaran",
    desc: "Di bawah langit senja yang hangat, sebuah niat tulus diikrarkan. Pertemuan dua keluarga besar menyatukan restu untuk melangkah ke jenjang yang lebih suci.",
  },
  {
    year: "2026",
    title: "Menuju Pelaminan",
    desc: "Dengan rahmat dan karunia Tuhan Yang Maha Esa, kami menyatukan cinta dalam ikatan pernikahan abadi. Memulai babak baru kehidupan sebagai sepasang kekasih halal.",
  },
];

export function LoveStorySection() {
  return (
    <section className="py-24 px-6 bg-[#F5F1E9]/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] mt-2">
            Kisah Cinta Kami
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-[#C5A880]/30 ml-4 sm:ml-32 space-y-12">
          {STORIES.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Year marker dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1E232A] border-2 border-[#C5A880]" />

              {/* Year tag for larger screens */}
              <div className="sm:absolute sm:-left-28 sm:top-0 text-left sm:text-right mb-2 sm:mb-0">
                <span className="inline-flex items-center gap-1 font-serif text-xl sm:text-2xl font-bold text-[#C5A880]">
                  <Calendar className="w-4 h-4 sm:hidden text-[#C5A880]" />
                  {item.year}
                </span>
              </div>

              {/* Story Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#C5A880]/20 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-bold text-[#1E232A] mb-2 flex items-center gap-2">
                  <span>{item.title}</span>
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
