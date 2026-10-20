"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Copy, Check, CreditCard, Package } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function GiftSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <section className="py-24 px-6 bg-[#F5F1E9]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            Wedding Gift
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] mt-2">
            Tanda Kasih & Amplop Digital
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mt-4 font-light leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila Anda bermaksud memberikan tanda kasih, kami menyediakan kemudahan berikut.
          </p>
        </div>

        {/* Bank & Gift Cards Grid with 3D Tilt from transitions-dev */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {/* Bank BCA Card */}
          <TiltCard className="h-full">
            <div className="p-8 h-full rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-black text-[#1E232A] tracking-wider">
                    BCA
                  </span>
                  <CreditCard className="w-6 h-6 text-[#C5A880]" />
                </div>

                <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">
                  Nomor Rekening
                </span>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#1E232A] tracking-wider mb-2">
                  8735 0192 84
                </p>
                <p className="text-xs text-zinc-600 font-medium">
                  a.n. Raden Arya Pratama
                </p>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard("8735019284", "bca")}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F5F1E9] hover:bg-[#EADBC8]/60 text-[#1E232A] text-xs font-semibold tracking-wide border border-[#C5A880]/30 transition-all cursor-pointer"
              >
                {copiedKey === "bca" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Nomor Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C5A880]" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          </TiltCard>

          {/* Bank Mandiri Card */}
          <TiltCard className="h-full">
            <div className="p-8 h-full rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-black text-[#1E232A] tracking-wider">
                    MANDIRI
                  </span>
                  <CreditCard className="w-6 h-6 text-[#C5A880]" />
                </div>

                <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">
                  Nomor Rekening
                </span>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#1E232A] tracking-wider mb-2">
                  137 00 1982 7461
                </p>
                <p className="text-xs text-zinc-600 font-medium">
                  a.n. Anindya Larasati
                </p>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard("1370019827461", "mandiri")}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F5F1E9] hover:bg-[#EADBC8]/60 text-[#1E232A] text-xs font-semibold tracking-wide border border-[#C5A880]/30 transition-all cursor-pointer"
              >
                {copiedKey === "mandiri" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Nomor Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C5A880]" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          </TiltCard>
        </div>

        {/* Physical Gift Delivery Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-[#F5F1E9] text-[#C5A880] shrink-0 mx-auto sm:mx-0">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1E232A]">
                Kirim Kado Fisik
              </h4>
              <p className="text-xs text-zinc-600 mt-1 max-w-md leading-relaxed font-light">
                Jl. Wijaya Timur V No. 18, Kebayoran Baru, Jakarta Selatan 12160 (Penerima: Raden / Anindya)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              copyToClipboard(
                "Jl. Wijaya Timur V No. 18, Kebayoran Baru, Jakarta Selatan 12160",
                "alamat"
              )
            }
            className="px-5 py-2.5 rounded-full bg-[#1E232A] hover:bg-[#121417] text-[#FBF9F5] text-xs font-medium tracking-wide shrink-0 transition-colors cursor-pointer"
          >
            {copiedKey === "alamat" ? "Alamat Tersalin!" : "Salin Alamat"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
