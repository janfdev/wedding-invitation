"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioCompanionProps {
  autoStart?: boolean;
}

export function AudioCompanion({ autoStart = false }: AudioCompanionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize soft, ambient acoustic waltz chimes (C major pentatonic / harp notes)
  const playChimeSequence = useCallback(() => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;

      const notes = [261.63, 329.63, 392.0, 523.25, 659.25]; // C4, E4, G4, C5, E5
      const note = notes[Math.floor(Math.random() * notes.length)];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(note, ctx.currentTime);

      // Smooth decay envelope for relaxing music-box / harp ambience
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 3.0);
    } catch {
      // AudioContext fallback
    }
  }, []);

  const startAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    setIsPlaying(true);
    playChimeSequence();

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(playChimeSequence, 1800);
  }, [playChimeSequence]);

  const stopAudio = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (autoStart && !isPlaying) {
      startAudio();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoStart, isPlaying, startAudio]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleAudio}
        type="button"
        aria-label={isPlaying ? "Matikan Musik Latar" : "Putar Musik Latar"}
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#1E232A]/90 hover:bg-[#1E232A] text-[#FBF9F5] shadow-lg backdrop-blur-md border border-[#C5A880]/30 transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
      >
        <div className="flex items-center gap-1 h-3.5">
          {isPlaying ? (
            <>
              <span className="w-0.5 h-3 bg-[#C5A880] animate-bounce" />
              <span className="w-0.5 h-4 bg-[#C5A880] animate-bounce [animation-delay:0.2s]" />
              <span className="w-0.5 h-2 bg-[#C5A880] animate-bounce [animation-delay:0.4s]" />
            </>
          ) : (
            <>
              <span className="w-0.5 h-2 bg-zinc-500" />
              <span className="w-0.5 h-2 bg-zinc-500" />
              <span className="w-0.5 h-2 bg-zinc-500" />
            </>
          )}
        </div>
        <span className="text-xs font-serif tracking-wider font-medium text-[#EADBC8]">
          {isPlaying ? "Musik Aktif" : "Musik Hening"}
        </span>
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#C5A880]" />
        ) : (
          <VolumeX className="w-4 h-4 text-zinc-400" />
        )}
      </button>
    </div>
  );
}
