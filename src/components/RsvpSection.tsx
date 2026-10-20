"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, UserCheck, MessageSquare, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface Wish {
  id: string;
  name: string;
  attendance: string;
  pax: string;
  message: string;
  date: string;
}

const INITIAL_WISHES: Wish[] = [
  {
    id: "w-1",
    name: "Dr. Aditya Nugraha",
    attendance: "HADIR",
    pax: "2 Tamu",
    message: "Selamat menempuh hidup baru Raden & Anindya! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah serta senantiasa dilimpahi keberkahan rezeki dan kebahagiaan abadi.",
    date: "Kemarin",
  },
  {
    id: "w-2",
    name: "Clara Salsabila, S.T.",
    attendance: "HADIR",
    pax: "1 Tamu",
    message: "Masya Allah, ikut terharu melihat perjalanan cinta kalian dari masa kuliah sampai ke pelaminan. Selamat ya kalian berdua, sampai jumpa di hari bahagia nanti!",
    date: "2 hari lalu",
  },
  {
    id: "w-3",
    name: "Dimas & Sarah",
    attendance: "HADIR",
    pax: "2 Tamu",
    message: "Barakallahu lakum wa baraka alaikum! Doa terbaik untuk kedua mempelai yang serasi ini. Lancar sampai hari H!",
    date: "3 hari lalu",
  },
];

export function RsvpSection() {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("HADIR");
  const [pax, setPax] = useState("2");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load persisted wishes from local storage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wedding_wishes_raden_anindya");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch {
      // Storage unavailable fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Mohon masukkan nama lengkap Anda.");
      return;
    }

    if (!message.trim()) {
      setErrorMsg("Mohon sertakan doa atau pesan restu untuk kedua mempelai.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish: Wish = {
        id: `wish-${Date.now()}`,
        name: name.trim(),
        attendance,
        pax: `${pax} Tamu`,
        message: message.trim(),
        date: "Baru saja",
      };

      const updated = [newWish, ...wishes];
      setWishes(updated);

      try {
        localStorage.setItem("wedding_wishes_raden_anindya", JSON.stringify(updated));
      } catch {
        // Fallback
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A880", "#1E232A", "#6B7B6E", "#EADBC8"],
        });
      } catch {
        // Confetti fallback
      }
    }, 600);
  };

  return (
    <section className="py-24 px-6 bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B7B6E]">
            RSVP & Prayers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] mt-2">
            Konfirmasi Kehadiran & Doa Restu
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form RSVP (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#C5A880]/30 shadow-md"
          >
            <h3 className="font-serif text-2xl font-bold text-[#1E232A] mb-2 flex items-center gap-2">
              <span>Formulir Kehadiran</span>
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
            </h3>
            <p className="text-xs text-zinc-500 mb-6 font-light">
              Mohon konfirmasikan kehadiran Anda sebelum tanggal 15 Oktober 2026.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#F5F1E9] border border-[#C5A880]/40 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#6B7B6E] mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-[#1E232A] mb-1">
                  Terima Kasih Banyak!
                </h4>
                <p className="text-xs text-zinc-600 mb-6 font-light leading-relaxed">
                  Konfirmasi kehadiran dan untaian doa restu Anda telah berhasil tersimpan dan tampil pada papan doa.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage("");
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#1E232A] text-[#FBF9F5] text-xs font-medium hover:bg-[#121417] transition-colors"
                >
                  Kirim Doa Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label htmlFor="guest-name" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    placeholder="Contoh: Raden Surya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#C5A880]/30 text-xs sm:text-sm text-[#1E232A] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-shadow placeholder:text-zinc-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="attendance-status" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Konfirmasi *
                    </label>
                    <select
                      id="attendance-status"
                      value={attendance}
                      onChange={(e) => setAttendance(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#C5A880]/30 text-xs sm:text-sm text-[#1E232A] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-shadow"
                    >
                      <option value="HADIR">Akan Hadir</option>
                      <option value="TIDAK_HADIR">Berhalangan Hadir</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="guest-count" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Jumlah Hadir *
                    </label>
                    <select
                      id="guest-count"
                      value={pax}
                      onChange={(e) => setPax(e.target.value)}
                      disabled={attendance === "TIDAK_HADIR"}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#C5A880]/30 text-xs sm:text-sm text-[#1E232A] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-shadow disabled:opacity-50"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guest-message" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                    Doa & Ucapan Restu *
                  </label>
                  <textarea
                    id="guest-message"
                    rows={4}
                    required
                    placeholder="Tuliskan ucapan dan doa tulus Anda untuk kedua mempelai..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#C5A880]/30 text-xs sm:text-sm text-[#1E232A] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-shadow placeholder:text-zinc-400 leading-relaxed resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#1E232A] hover:bg-[#121417] text-[#FBF9F5] font-medium text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all border border-[#C5A880]/30 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-[#C5A880]" />
                  <span>{isSubmitting ? "Mengirimkan Doa..." : "Kirim Konfirmasi & Doa"}</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Live Wishes Board (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#F5F1E9]/60 border border-[#C5A880]/30 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#C5A880]/20">
              <h3 className="font-serif text-xl font-bold text-[#1E232A] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                <span>Papan Doa Restu</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#1E232A] text-[#EADBC8] font-semibold">
                {wishes.length} Doa
              </span>
            </div>

            {wishes.length === 0 ? (
              <div className="p-8 text-center text-xs text-zinc-500 font-light">
                Belum ada doa yang tercatat. Jadilah yang pertama memberikan doa restu!
              </div>
            ) : (
              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
                {wishes.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#C5A880]/20 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif font-bold text-sm text-[#1E232A]">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-light">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${item.attendance === "HADIR" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-zinc-100 text-zinc-600 border border-zinc-200"}`}>
                        <UserCheck className="w-3 h-3" />
                        {item.attendance === "HADIR" ? `Hadir (${item.pax})` : "Berhalangan"}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
