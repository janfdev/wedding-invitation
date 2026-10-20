"use client";

import React, { useState, Suspense } from "react";
import { EnvelopeGate } from "@/components/EnvelopeGate";
import { AudioCompanion } from "@/components/AudioCompanion";
import { HeroSection } from "@/components/HeroSection";
import { CoupleSection } from "@/components/CoupleSection";
import { LoveStorySection } from "@/components/LoveStorySection";
import { EventSection } from "@/components/EventSection";
import { GallerySection } from "@/components/GallerySection";
import { RsvpSection } from "@/components/RsvpSection";
import { GiftSection } from "@/components/GiftSection";
import { FooterSection } from "@/components/FooterSection";

export default function WeddingInvitationPage() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  const handleOpenInvitation = () => {
    setInvitationOpened(true);
  };

  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#1E232A] relative selection:bg-[#C5A880]/30 selection:text-[#1E232A]">
      {/* 1. Personalized Envelope Cover & Curtain Reveal */}
      <EnvelopeGate onOpen={handleOpenInvitation} />

      {/* 2. Floating Audio Companion with Soundwave Visualizer */}
      <AudioCompanion autoStart={invitationOpened} />

      {/* 3. Hero Section & Real-time Live Countdown */}
      <HeroSection />

      {/* 4. Spiritual Verse & Couple Profile Cards */}
      <CoupleSection />

      {/* 5. Horizontal / Sequential Love Story Journey */}
      <LoveStorySection />

      {/* 6. Event Details, Calendar Sync & Directions */}
      <EventSection />

      {/* 7. Curated Photo Gallery with Modal Lightbox */}
      <GallerySection />

      {/* 8. Interactive RSVP Form & Live Wishes Board */}
      <RsvpSection />

      {/* 9. Digital Envelope & Gift Registry */}
      <GiftSection />

      {/* 10. Dignified Family Closing & Credits */}
      <FooterSection />
    </main>
  );
}
