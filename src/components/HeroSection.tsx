"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

export function HeroSection() {
  const { scrollY } = useScroll();

  // Multi-layer Cinematic Parallax: Zooming into estate portal like entering a Grand Residence / Cinema
  const portalScale = useTransform(scrollY, [0, 600], [1, 1.45]);
  const portalOpacity = useTransform(scrollY, [0, 480], [1, 0.2]);
  const textY = useTransform(scrollY, [0, 600], [0, 160]);
  const textOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  const curtainLeftX = useTransform(scrollY, [0, 500], [0, -180]);
  const curtainRightX = useTransform(scrollY, [0, 500], [0, 180]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#121417]">
      {/* Layer 0: Grand Estate Portal (Scales up with parallax giving a walk-in effect) */}
      <motion.div
        style={{ scale: portalScale, opacity: portalOpacity }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/illustrations/estate-portal.svg"
          alt="Estate Portal"
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />
      </motion.div>

      {/* Layer 1: Left Cinema Curtain Wing */}
      <motion.div
        style={{ x: curtainLeftX }}
        className="absolute left-0 inset-y-0 w-24 sm:w-56 bg-gradient-to-r from-[#121417] via-[#1E232A]/80 to-transparent pointer-events-none z-10"
      />

      {/* Layer 1: Right Cinema Curtain Wing */}
      <motion.div
        style={{ x: curtainRightX }}
        className="absolute right-0 inset-y-0 w-24 sm:w-56 bg-gradient-to-l from-[#121417] via-[#1E232A]/80 to-transparent pointer-events-none z-10"
      />

      {/* Layer 2: Floating Editorial Typography */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-3xl mx-auto flex flex-col items-center pt-24 pb-12"
      >
        <span className="text-xs uppercase tracking-[0.35em] font-medium text-[#C5A880] mb-4 drop-shadow-sm">
          The Wedding Celebration of
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tight text-[#FBF9F5] mb-6 drop-shadow-lg leading-tight">
          Raden <span className="font-light italic text-[#EADBC8]">&</span> Anindya
        </h1>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-8 font-light leading-relaxed drop-shadow-sm">
          Dengan penuh rasa syukur dan sukacita, kami mengundang Anda melangkah masuk ke dalam perayaan janji suci pernikahan kami.
        </p>

        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-6 py-3 rounded-full bg-[#1E232A]/85 backdrop-blur-md border border-[#C5A880]/40 text-[#FBF9F5] text-xs sm:text-sm font-medium mb-10 shadow-xl">
          <span className="flex items-center gap-2 text-[#EADBC8]">
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            Sabtu, 24 Oktober 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          <span className="flex items-center gap-2 text-zinc-200">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            Kempinski Grand Ballroom, Jakarta
          </span>
        </div>

        {/* Live Countdown in Glassmorphic Bar */}
        <div className="grid grid-cols-4 gap-3 sm:gap-5 w-full max-w-md mb-12">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-[#1E232A]/75 backdrop-blur-md border border-[#C5A880]/30 shadow-lg"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF9F5]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#C5A880] font-medium mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Cinematic Scroll Indicator */}
        <div className="flex flex-col items-center gap-1.5 text-[#C5A880] animate-bounce">
          <span className="text-[10px] tracking-[0.25em] uppercase font-serif">Gulir ke Bawah</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Soft Transition Gradient into Content Canvas */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent pointer-events-none z-20" />
    </section>
  );
}
