"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Camera } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  aspect: string;
  caption: string;
  bgGradient: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Serenata Lembah",
    category: "Pre-Wedding Editorial",
    aspect: "aspect-[4/5]",
    caption: "Merekam keheningan fajar di lereng perbukitan Bromo.",
    bgGradient: "from-stone-800 via-stone-700 to-stone-900",
  },
  {
    id: 2,
    title: "Tatap Teduh",
    category: "Close Portrait",
    aspect: "aspect-square",
    caption: "Dua tatap yang menyepakati sebuah perjalanan panjang.",
    bgGradient: "from-zinc-900 via-neutral-800 to-stone-950",
  },
  {
    id: 3,
    title: "Langkah Harmoni",
    category: "Outdoor Monocrome",
    aspect: "aspect-[16/9]",
    caption: "Berjalan beriringan menapaki jalanan kota tua penuh kenangan.",
    bgGradient: "from-stone-900 via-zinc-800 to-neutral-900",
  },
  {
    id: 4,
    title: "Cahaya Senja",
    category: "Sunset Silhouette",
    aspect: "aspect-[4/5]",
    caption: "Matahari yang tenggelam menjadi saksi tawa dan harapan bersama.",
    bgGradient: "from-amber-950 via-stone-800 to-zinc-900",
  },
  {
    id: 5,
    title: "Genggam Selaras",
    category: "Detail Accent",
    aspect: "aspect-square",
    caption: "Cincin pertunangan dan genggaman tangan yang tak terlepas.",
    bgGradient: "from-neutral-900 via-stone-800 to-zinc-950",
  },
  {
    id: 6,
    title: "Menatap Esok",
    category: "Editorial Grandeur",
    aspect: "aspect-[16/9]",
    caption: "Membuka pandangan ke masa depan yang dipenuhi doa tulus.",
    bgGradient: "from-stone-800 via-zinc-900 to-neutral-950",
  },
];

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Keyboard accessibility: close lightbox with Escape key (R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#F5F1E9]/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            Moments of Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] mt-2">
            Galeri Memori
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Gallery Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-tr ${item.bgGradient} ${item.aspect} shadow-md border border-[#C5A880]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]`}
              tabIndex={0}
              role="button"
              aria-label={`Lihat foto ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              {/* Artistic Photo Mock / Placeholder Graphic */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-[#FBF9F5]">
                <Camera className="w-8 h-8 text-[#C5A880] mb-3 opacity-80 transition-transform group-hover:scale-110" />
                <span className="font-serif text-lg font-bold tracking-wide">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#EADBC8] mt-1 opacity-70">
                  {item.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1E232A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FBF9F5] text-[#1E232A] text-xs font-semibold shadow-lg">
                  <ZoomIn className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Perbesar</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121417]/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-[#1E232A] text-[#FBF9F5] border border-[#C5A880]/30 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                type="button"
                aria-label="Tutup Tampilan Foto"
                className="absolute top-5 right-5 p-2 rounded-full bg-[#121417]/80 hover:bg-[#121417] text-zinc-300 hover:text-white transition-colors cursor-pointer border border-[#C5A880]/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`w-full rounded-2xl bg-gradient-to-tr ${selectedItem.bgGradient} h-72 sm:h-96 flex flex-col items-center justify-center text-center p-6 mb-6 shadow-inner border border-white/10`}>
                <Camera className="w-12 h-12 text-[#C5A880] mb-3" />
                <p className="font-serif text-2xl font-bold text-[#FBF9F5]">
                  {selectedItem.title}
                </p>
                <p className="text-xs text-[#EADBC8] tracking-widest uppercase mt-1">
                  {selectedItem.category}
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs sm:text-sm text-zinc-300 italic font-light">
                  &ldquo;{selectedItem.caption}&rdquo;
                </p>
                <p className="text-[11px] text-zinc-500 mt-2">
                  Tekan tombol Escape atau ketuk di luar area untuk menutup
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
