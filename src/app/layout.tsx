import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wedding of Raden & Anindya | Official Invitation",
  description:
    "Bersama memohon doa dan restu pada perayaan pernikahan Raden & Anindya. The Cinematic Editorial Wedding Experience.",
  openGraph: {
    title: "The Wedding of Raden & Anindya",
    description:
      "Undangan resmi pernikahan Raden & Anindya. Sabtu, 24 Oktober 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen relative selection:bg-[#C5A880]/30 selection:text-[#1E232A]">
        {children}
      </body>
    </html>
  );
}
