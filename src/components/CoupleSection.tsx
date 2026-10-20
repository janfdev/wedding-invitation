"use client";

import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function CoupleSection() {
  return (
    <section className="py-24 px-6 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Spiritual Verse Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl bg-[#F5F1E9]/70 border border-[#C5A880]/30 shadow-sm"
        >
          <Heart className="w-6 h-6 text-[#C5A880] mx-auto mb-4" />
          <p className="font-serif text-lg sm:text-xl text-[#1E232A] italic leading-relaxed mb-4">
            &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#6B7B6E]">
            QS. Ar-Rum: 21
          </span>
        </motion.div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            Kedua Mempelai
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] mt-2">
            Mempelai yang Berbahagia
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Couple Profile Cards Grid with Bespoke Fine Art Illustrations */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md group hover:shadow-xl transition-all"
          >
            {/* Bespoke Fine Art Illustration Frame */}
            <div className="relative w-48 h-56 rounded-2xl overflow-hidden mb-6 shadow-md border border-[#C5A880]/40 bg-[#181B20] transition-transform group-hover:scale-[1.02]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/groom-portrait.svg"
                alt="Raden Arya Pratama - Mempelai Pria"
                className="w-full h-full object-cover object-top select-none"
                draggable={false}
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1E232A]">
              Raden Arya Pratama, S.T.
            </h3>
            <span className="text-xs uppercase tracking-wider text-[#6B7B6E] font-medium mt-1 mb-4">
              Mempelai Pria
            </span>

            <p className="text-xs text-zinc-600 max-w-xs leading-relaxed mb-6 font-light">
              Putra pertama dari pasangan terhormat<br />
              <strong className="text-zinc-800 font-medium">Bpk. Bambang Wijaya</strong><br />
              & <strong className="text-zinc-800 font-medium">Ibu Siti Rahayu</strong>
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#1E232A] bg-[#F5F1E9] hover:bg-[#EADBC8]/50 border border-[#C5A880]/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#C5A880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>@raden.arya</span>
            </a>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md group hover:shadow-xl transition-all"
          >
            {/* Bespoke Fine Art Illustration Frame */}
            <div className="relative w-48 h-56 rounded-2xl overflow-hidden mb-6 shadow-md border border-[#C5A880]/40 bg-[#1C1E23] transition-transform group-hover:scale-[1.02]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/bride-portrait.svg"
                alt="Anindya Larasati - Mempelai Wanita"
                className="w-full h-full object-cover object-top select-none"
                draggable={false}
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1E232A]">
              Anindya Larasati, M.Ds.
            </h3>
            <span className="text-xs uppercase tracking-wider text-[#6B7B6E] font-medium mt-1 mb-4">
              Mempelai Wanita
            </span>

            <p className="text-xs text-zinc-600 max-w-xs leading-relaxed mb-6 font-light">
              Putri bungsu dari pasangan terhormat<br />
              <strong className="text-zinc-800 font-medium">Bpk. Hendra Gunawan</strong><br />
              & <strong className="text-zinc-800 font-medium">Ibu Ratna Kusuma</strong>
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#1E232A] bg-[#F5F1E9] hover:bg-[#EADBC8]/50 border border-[#C5A880]/30 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#C5A880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>@anindya.larasati</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
