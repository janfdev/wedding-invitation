"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Calendar, Heart } from "lucide-react";

const STORIES = [
  {
    year: "2020",
    title: "Pertemuan Pertama",
    desc: "Bermula dari perjumpaan tak sengaja di perpustakaan kampus, sebuah obrolan singkat tentang buku dan mimpi masa depan perlahan menumbuhkan benih rasa saling mengagumi.",
    milestone: "Awal Mula Kisah",
  },
  {
    year: "2023",
    title: "Tumbuh Bersama",
    desc: "Menghadapi lika-liku karir dan dinamika kehidupan, kami belajar saling mendengar, menguatkan langkah, dan menemukan rumah ternyaman di dalam doa masing-masing.",
    milestone: "Menemukan Kedewasaan",
  },
  {
    year: "2025",
    title: "Ikrar Lamaran",
    desc: "Di bawah langit senja yang hangat, sebuah niat tulus diikrarkan. Pertemuan dua keluarga besar menyatukan restu untuk melangkah ke jenjang yang lebih suci.",
    milestone: "Penyatuan Dua Hati",
  },
  {
    year: "2026",
    title: "Menuju Pelaminan",
    desc: "Dengan rahmat dan karunia Tuhan Yang Maha Esa, kami menyatukan cinta dalam ikatan pernikahan abadi. Memulai babak baru kehidupan sebagai sepasang kekasih halal.",
    milestone: "Ikatan Abadi",
  },
];

export function LoveStorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2.5D Silhouette Walk Parallax Transformation:
  // As the user scrolls down through the timeline, the couple silhouette walks smoothly forward
  const walkProgress = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "85%"]);
  const walkScale = useTransform(scrollYProgress, [0.1, 0.5, 0.85], [0.92, 1, 1.05]);
  const bobbingMotion = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.4, 0.55, 0.7, 0.85],
    [0, -6, 0, -6, 0, -4]
  );

  return (
    <section
      ref={containerRef}
      className="py-28 px-6 bg-[#F5F1E9]/50 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E232A] mt-2">
            Kisah Cinta Kami
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mt-3 font-light leading-relaxed">
            Menelusuri jejak langkah berdua dari awal pertemuan hingga gerbang pelaminan suci.
          </p>
        </div>

        {/* 2.5D Parallax Promenade Track (Walk Stage) */}
        <div className="relative mb-20 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md overflow-hidden">
          {/* Subtle Stage Background Glow & Arch */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
          <div className="flex items-center justify-between text-xs font-serif text-[#C5A880] mb-4 pb-2 border-b border-[#C5A880]/20">
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Titik Jumpa 2020</span>
            </span>
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-semibold">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Pelaminan Suci 2026</span>
            </span>
          </div>

          {/* Promenade Path Line */}
          <div className="relative h-44 sm:h-52 w-full flex items-end pb-4">
            {/* Grounding Cobblestone / Marble Line */}
            <div className="absolute inset-x-0 bottom-6 h-0.5 bg-[#C5A880]/30" />
            <div className="absolute inset-x-0 bottom-4 h-4 bg-gradient-to-t from-[#F5F1E9] to-transparent pointer-events-none" />

            {/* Walking Silhouette Dynamic Actor */}
            <motion.div
              style={{
                left: walkProgress,
                scale: walkScale,
                y: bobbingMotion,
              }}
              className="absolute bottom-5 w-24 sm:w-32 h-36 sm:h-44 will-change-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/walking-couple-silhouette.svg"
                alt="Raden & Anindya melangkah bersama"
                className="w-full h-full object-contain select-none filter drop-shadow-md"
                draggable={false}
              />
            </motion.div>
          </div>

          <div className="text-center mt-2">
            <span className="text-[11px] text-zinc-500 font-light italic">
              Gulir halaman untuk menyusuri langkah perjalanan kami
            </span>
          </div>
        </div>

        {/* Timeline Story Cards */}
        <div className="relative border-l-2 border-[#C5A880]/40 ml-4 sm:ml-32 space-y-12">
          {STORIES.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Golden Year Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1E232A] border-2 border-[#C5A880] shadow-sm" />

              {/* Year Label */}
              <div className="sm:absolute sm:-left-32 sm:top-0 text-left sm:text-right mb-2 sm:mb-0">
                <span className="inline-flex items-center gap-1 font-serif text-2xl sm:text-3xl font-bold text-[#C5A880]">
                  <Calendar className="w-4 h-4 sm:hidden text-[#C5A880]" />
                  {item.year}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#6B7B6E] font-medium">
                  {item.milestone}
                </span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/25 shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E232A] mb-2 flex items-center gap-2">
                  <span>{item.title}</span>
                  <Sparkles className="w-4 h-4 text-[#C5A880] transition-transform group-hover:scale-110" />
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
