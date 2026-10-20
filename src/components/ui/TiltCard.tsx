"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({
  children,
  className,
  maxTilt = 12,
  ...props
}: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));

    const ry = ((px - 0.5) * maxTilt).toFixed(2);
    const rx = ((0.5 - py) * maxTilt).toFixed(2);
    const gx = (px * 100).toFixed(1);
    const gy = (py * 100).toFixed(1);

    setStyle({
      transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`,
      // Custom CSS properties for cursor-following glare
      ["--glare-x" as string]: `${gx}%`,
      ["--glare-y" as string]: `${gy}%`,
    });
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    });
    setIsHovered(false);
  };

  return (
    <div
      ref={tiltRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("relative rounded-3xl will-change-transform", className)}
      {...props}
    >
      <div
        style={style}
        className={cn(
          "relative w-full h-full rounded-3xl transition-transform duration-200 ease-out preserve-3d overflow-hidden",
          isHovered ? "shadow-2xl" : "shadow-md"
        )}
      >
        {children}

        {/* Cursor-tracked Light Glare Effect from transitions-dev */}
        <div
          style={{
            opacity: isHovered ? 0.28 : 0,
            background:
              "radial-gradient(circle 180px at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.6), rgba(197,168,128,0.2) 40%, transparent 80%)",
          }}
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-screen"
        />
      </div>
    </div>
  );
}
