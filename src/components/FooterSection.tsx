"use client";

import React from "react";
import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-20 px-6 bg-[#1E232A] text-[#FBF9F5] text-center relative overflow-hidden border-t border-[#C5A880]/30">
      <div className="max-w-2xl mx-auto">
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-full border border-[#C5A880]/60 mx-auto flex items-center justify-center mb-6 shadow-md bg-[#121417] p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/concept-wa-royal-ligature.svg"
            alt="Royal Monogram RA"
            className="w-full h-full object-contain filter invert-[0.9] hue-rotate-180"
          />
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FBF9F5] mb-4">
          Raden & Anindya
        </h3>

        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg mx-auto mb-8">
          Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu bagi lembaran suci pernikahan kami.
        </p>

        <div className="w-12 h-0.5 bg-[#C5A880]/60 mx-auto mb-8" />

        <p className="text-xs font-serif text-[#EADBC8] tracking-widest uppercase mb-2">
          Keluarga Besar
        </p>
        <p className="text-xs text-zinc-400 font-light">
          Kel. Bpk. Bambang Wijaya & Ibu Siti Rahayu<br />
          Kel. Bpk. Hendra Gunawan & Ibu Ratna Kusuma
        </p>

        <div className="mt-14 pt-6 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 font-light">
          <span>Dirancang dengan cinta & ketulusan</span>
          <Heart className="w-3 h-3 text-[#C5A880] fill-current" />
          <span>The Cinematic Editorial</span>
        </div>
      </div>
    </footer>
  );
}
