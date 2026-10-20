"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MailOpen, Sparkles } from "lucide-react";

interface EnvelopeGateProps {
  onOpen: () => void;
}

export function EnvelopeGate({ onOpen }: EnvelopeGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Terhormat");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to")?.trim();
      if (to) {
        setGuestName(to);
      }
    } catch {
      // Browser navigation fallback
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen();
  };

  if (isOpen) {
    return null;
  }

  return (
    <div
      id="curtain-gate"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#121417]"
    >
      {/* Top Curtain Panel */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[#1E232A] border-b border-[#C5A880]/20 flex items-end justify-center pb-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Bottom Curtain Panel */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#1E232A] border-t border-[#C5A880]/20 flex items-start justify-center pt-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Central Wax Seal Card Gate */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4 p-8 sm:p-10 rounded-2xl bg-[#FBF9F5] text-[#1E232A] text-center shadow-2xl border border-[#C5A880]/30"
      >
        {/* Top Monogram Seal using Vector WA */}
        <div className="mx-auto w-20 h-20 rounded-full bg-[#1E232A] flex items-center justify-center shadow-lg border-2 border-[#C5A880] mb-6 p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/concept-wa-royal-ligature.svg"
            alt="Royal Monogram RA"
            className="w-full h-full object-contain filter invert-[0.9] hue-rotate-180"
          />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E] mb-2">
          Undangan Pernikahan
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1E232A] mb-3">
          Raden & Anindya
        </h1>

        <div className="w-12 h-0.5 bg-[#C5A880] mx-auto my-4" />

        <div className="my-6 p-4 rounded-xl bg-[#F5F1E9] border border-[#C5A880]/20">
          <p className="text-xs text-zinc-600 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#1E232A]">
            {guestName}
          </p>
          <p className="text-[11px] text-zinc-500 mt-1 italic">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir
          </p>
        </div>

        <button
          onClick={handleOpen}
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#1E232A] hover:bg-[#121417] text-[#FBF9F5] font-medium tracking-wide text-sm transition-all duration-300 shadow-md hover:shadow-lg border border-[#C5A880]/40 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        >
          <MailOpen className="w-4 h-4 text-[#C5A880] transition-transform group-hover:scale-110" />
          <span>Buka Undangan</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
        </button>
      </motion.div>
    </div>
  );
}
