---
version: alpha
name: The Cinematic Editorial
description: Prestigious wedding invitation combining cinematic parallax, editorial typography, and warm champagne luxury.
colors:
  primary: "#1E232A"
  secondary: "#6B7B6E"
  tertiary: "#C5A880"
  neutral: "#FBF9F5"
typography:
  h1:
    fontFamily: Cormorant Garamond
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  h2:
    fontFamily: Cormorant Garamond
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.2
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    lineHeight: 1.6
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    letterSpacing: "0.05em"
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "#121417"
    rounded: "{rounded.full}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  card-glass:
    backgroundColor: "rgba(251, 249, 245, 0.85)"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
---

## Overview

The Cinematic Editorial wedding invitation merges prestige magazine typography with interactive multi-layer parallax motion. Designed for unforgettable first impressions, it balances warm organic textures with refined luxury accents.

## Colors

- **Primary (#1E232A):** Deep charcoal ink providing high-contrast editorial clarity for headings, names, and formal text.
- **Secondary (#6B7B6E):** Muted botanical olive reflecting natural organic elegance.
- **Tertiary (#C5A880):** Warm champagne gold, the primary accent driving actions, borders, and interactive highlights.
- **Neutral (#FBF9F5):** Soft alabaster canvas creating a warm, comfortable reading background on OLED and mobile screens.

## Typography

- **Headings & Monograms:** Cormorant Garamond / Playfair Display conveying poetic gravitas and heritage dignity.
- **Body & Operational Elements:** Plus Jakarta Sans ensuring crystal clear legibility for dates, addresses, and form controls.

## Layout & Spacing

- Generous whitespace emphasizing photographic storytelling.
- Section paddings utilize 48px to 96px vertical spacing on mobile, expanding to 120px on desktop.

## Elevation & Depth

- Ambient shadows with wide blur radii and low opacity (`0 20px 40px rgba(0,0,0,0.06)`).
- Layered z-indexes: Parallax background ornaments (z-0), Photographs (z-10), Content Cards (z-20), Floating Audio & Navigation Controls (z-40), Fullscreen Envelope Gate (z-50).

## Components

- **Curtain Reveal Envelope:** Fullscreen gateway with personalized salutation that splits open upon interaction.
- **Floating Audio Visualizer:** Minimalist pulsing wave button that indicates music playback state.
- **Copyable Account Card:** Bank credential display with single-touch copy capability.
- **Interactive Wishes Board:** Glassmorphic card grid showcasing live guest prayers and RSVP status.

## Do's and Don'ts

- **Do:** Use authentic couple photography framed in editorial aspect ratios (4:5, 16:9).
- **Do:** Maintain subtle, smooth easing curves on scroll-driven parallax animations.
- **Don't:** Use gaudy saturated yellows or neon golds; strictly adhere to muted warm champagne gold (`#C5A880`).
- **Don't:** Autoplay intrusive audio without explicit guest interaction on the envelope cover.
