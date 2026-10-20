"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: 24 October 2026, 08:00 WIB
    const targetDate = new Date("2026-10-24T08:00:00+07:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden bg-[#FBF9F5]">
      {/* Background Subtle Gradient & Border */}
      <div className="absolute inset-0 editorial-texture pointer-events-none" />
      <div className="absolute inset-x-8 inset-y-8 sm:inset-12 border border-[#C5A880]/30 rounded-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#6B7B6E] mb-4">
          The Wedding Celebration of
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1E232A] mb-4">
          Raden <span className="font-light italic text-[#C5A880]">&</span> Anindya
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 max-w-md mx-auto mb-8 font-light leading-relaxed">
          Dengan penuh rasa syukur dan sukacita, kami mengundang Anda untuk merayakan awal lembaran hidup baru kami.
        </p>

        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-full bg-[#F5F1E9] border border-[#C5A880]/40 text-[#1E232A] text-xs sm:text-sm font-medium mb-12 shadow-sm">
          <span className="flex items-center gap-1.5 text-zinc-700">
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            Sabtu, 24 Oktober 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
          <span className="flex items-center gap-1.5 text-zinc-700">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            Kempinski Grand Ballroom, Jakarta
          </span>
        </div>

        {/* Live Countdown Display */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-3 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#C5A880]/20 shadow-sm"
            >
              <span className="font-serif text-2xl sm:text-4xl font-bold text-[#1E232A]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6B7B6E] font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
