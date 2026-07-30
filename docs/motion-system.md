# Motion System — Vriddhi Research

> Framer Motion animation system. All animation presets, variants, hooks, and implementation rules for the Next.js 15 frontend.

---

## Motion Philosophy

**"Motion as revelation, not decoration."**

Every animation must earn its place by doing one of:
1. **Revealing structure** — content entering viewport, sections cascading in
2. **Confirming interaction** — button presses, hover states, accordion opens
3. **Communicating state** — loading, success, error transitions

Animations that exist purely for visual flair are prohibited. Every motion decision is justified by UX benefit.

---

## Reduced Motion Contract

This is non-negotiable. All motion must respect `prefers-reduced-motion`:

```typescript
// src/hooks/useReducedMotion.ts
import { useReducedMotion } from 'framer-motion'

export function useMotionSafe() {
  const prefersReduced = useReducedMotion()
  return !prefersReduced
}
```

```typescript
// Usage pattern in every animated component
import { useMotionSafe } from '@/hooks/useReducedMotion'

function AnimatedCard({ children }: { children: React.ReactNode }) {
  const animate = useMotionSafe()
  
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 16 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
```

Also add CSS fallback:

```css
/* src/app/globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Motion Tier System

| Tier | Type | Duration | Examples |
|------|------|----------|---------|
| **T0** | Instant feedback | 0–100ms | Focus ring, checkbox tick |
| **T1** | Micro-interaction | 100–200ms | Button hover, link color, icon scale |
| **T2** | UI transition | 200–350ms | Dropdown open, tab switch, card hover |
| **T3** | Content reveal | 350–600ms | Scroll section entrance, card cascade |
| **T4** | Page transition | 200–400ms | Route changes, full-page transitions |
| **T5** | Complex sequence | 600–1200ms | Hero entrance sequence, counter animations |

---

## Global Animation Variants

```typescript
// src/animations/variants.ts

import type { Variants } from 'framer-motion'

/* ─── FADE VARIANTS ─── */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/* ─── STAGGER CONTAINER ─── */
/* Wraps staggered children — set staggerChildren on the container */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
}

/* ─── STAGGER CHILDREN ─── */
/* Items inside a stagger container */

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
}
```

---

## Component-Specific Presets

### Hero Section

```typescript
// src/animations/presets/hero.ts

import type { Variants } from 'framer-motion'

/* Hero badge — appears first */
export const heroBadge: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 },
  },
}

/* Hero headline — word-by-word stagger */
export const heroHeadlineContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
}

export const heroHeadlineWord: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/* Hero body text */
export const heroBody: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1], delay: 0.6 },
  },
}

/* Hero CTA buttons — stagger */
export const heroCTAContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.75 },
  },
}

export const heroCTAButton: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/* Hero market widget — slides in from right */
export const heroWidget: Variants = {
  hidden: { opacity: 0, x: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1], delay: 0.3 },
  },
}

/* Disclaimer box */
export const heroDisclaimer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1], delay: 0.9 },
  },
}
```

---

### Card Animations

```typescript
// src/animations/presets/cards.ts

import type { Variants } from 'framer-motion'

/* Trust badge cards — stagger cascade */
export const trustCardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
}

export const trustCard: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}

/* Contact cards */
export const contactCardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

export const contactCard: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/* Pricing cards — slide up from below */
export const pricingCardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

export const pricingCard: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/* Testimonial cards — alternating left/right */
export const testimonialLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

export const testimonialRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

export const testimonialCenter: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
}
```

---

### Navbar

```typescript
// src/animations/presets/navbar.ts

import type { Variants } from 'framer-motion'

/* Navbar entrance on mount */
export const navbarEntrance: Variants = {
  hidden: { opacity: 0, y: -64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}

/* Mobile menu drawer — slides in from right */
export const mobileDrawer: Variants = {
  closed: { x: '100%', opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}

/* Mobile menu backdrop */
export const drawerBackdrop: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
  },
}

/* Mobile menu items — stagger */
export const mobileNavContainer: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

export const mobileNavItem: Variants = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}

/* Hamburger icon morph — 3 bars → X */
export const hamburgerTop: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 8 },
}

export const hamburgerMid: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}

export const hamburgerBot: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -8 },
}
```

---

### Mobile Menu

```typescript
// Already covered in navbar.ts — see mobileDrawer, drawerBackdrop, mobileNavContainer
```

---

### Page Transitions

```typescript
// src/animations/presets/pageTransition.ts

import type { Variants } from 'framer-motion'

/* Used in layout.tsx around <main> */
export const pageWrapper: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.25, ease: [0, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
  },
}

/* Individual page content — slight upward motion on enter */
export const pageContent: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0, 0, 0.2, 1], delay: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
}
```

---

### Sections (Scroll Reveal)

```typescript
// src/animations/presets/sections.ts

import type { Variants } from 'framer-motion'

/* Generic section entrance */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/* Section heading */
export const sectionHeading: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0, 0, 0.2, 1] },
  },
}

/* Section badge label */
export const sectionBadge: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/* Feature/step list — stagger */
export const featureListContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export const featureListItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0, 0, 0.2, 1] },
  },
}
```

---

### Buttons

```typescript
// src/animations/presets/buttons.ts
// Used as whileHover / whileTap on motion.button elements

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.15, ease: [0, 0, 0.2, 1] },
}

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1, ease: [0.4, 0, 1, 1] },
}

/* WhatsApp/CTA button — subtle glow pulse on hover */
export const ctaButtonHover = {
  scale: 1.03,
  boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)',
  transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
}

export const ctaButtonTap = {
  scale: 0.97,
}

/* Icon button (social, close, hamburger) */
export const iconButtonHover = {
  scale: 1.1,
  transition: { duration: 0.15, ease: [0.34, 1.56, 0.64, 1] },
}
```

---

### FAQ Accordion

```typescript
// src/animations/presets/faq.ts

import type { Variants } from 'framer-motion'

/* FAQ item content — expands/collapses */
export const faqContent: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}

/* Chevron rotation on open/close */
export const faqChevron: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 180, transition: { duration: 0.25, ease: [0, 0, 0.2, 1] } },
}

/* FAQ section entrance — stagger individual items */
export const faqContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export const faqItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  },
}
```

---

### Statistics / Counters

```typescript
// src/animations/presets/counters.ts
// Counter animation uses a custom hook, not just Framer variants

import { useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 })
  const rounded = useTransform(spring, (val) =>
    val.toFixed(decimals)
  )

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, target, motionValue])

  return { ref, rounded }
}

/* Statistics strip entrance */
export const statsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

export const statItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}
```

---

### Images

```typescript
// src/animations/presets/images.ts

import type { Variants } from 'framer-motion'

/* Image lazy reveal */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] },
  },
}

/* Image placeholder shimmer — handled by loading skeleton */
export const shimmer: Variants = {
  hidden: { opacity: 0.4 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
  },
}
```

---

### Timeline

```typescript
// src/animations/presets/timeline.ts

import type { Variants } from 'framer-motion'

/* Timeline connector line — draws from top to bottom */
export const timelineLine: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] },
  },
}

/* Timeline item — alternates left/right */
export const timelineItemLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

export const timelineItemRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

/* Timeline dot — pops in */
export const timelineDot: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
}
```

---

### Loading States

```typescript
// src/animations/presets/loading.ts

import type { Variants } from 'framer-motion'

/* Skeleton pulse */
export const skeletonPulse: Variants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
}

/* Spinner rotation */
export const spinnerRotate = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
}

/* Content appears after loading */
export const contentAfterLoad: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
}
```

---

## The ScrollReveal Wrapper

The most-used component in the system — wraps any section element for viewport-triggered entrance:

```typescript
// src/components/animations/ScrollReveal.tsx
'use client'

import { motion, type Variants } from 'framer-motion'
import { useMotionSafe } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/animations/variants'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
  margin?: string
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  delay = 0,
  className,
  once = true,
  margin = '-80px',
}: ScrollRevealProps) {
  const animate = useMotionSafe()

  return (
    <motion.div
      className={className}
      initial={animate ? 'hidden' : false}
      whileInView={animate ? 'visible' : false}
      viewport={{ once, margin }}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  )
}
```

---

## Lenis Smooth Scroll Integration

```typescript
// src/providers/LenisProvider.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect user preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReduced) return // Don't initialize Lenis for reduced motion users

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
```

```typescript
// src/app/layout.tsx
import { LenisProvider } from '@/providers/LenisProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
```

---

## Market Ticker Animation

```typescript
// src/animations/presets/ticker.ts
// Pure CSS animation — more performant than JS for infinite scroll

/*
CSS approach (preferred over Framer Motion for marquee):
- Uses GPU-accelerated transform: translateX
- No JS event loop involvement
- Pauses on hover for accessibility
*/
```

```css
/* In component CSS module */
.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker-scroll 30s linear infinite;
}

.ticker-track:hover {
  animation-play-state: paused; /* Accessibility: pause on hover */
}

@keyframes ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .ticker-track {
    animation: none;
  }
}
```

---

## Hover Interaction Reference

| Element | Hover Effect | Implementation |
|---------|-------------|---------------|
| Navbar links | Color → blue-600 | CSS transition |
| CTA button (WhatsApp) | Scale 1.03 + glow | Framer `whileHover` |
| Secondary button | Scale 1.01 + shadow | Framer `whileHover` |
| Cards (contact, course, trust) | translateY(-4px) + shadow-level-2 | CSS transition |
| Pricing card | translateY(-6px) + scale 1.01 | Framer `whileHover` |
| Social icons | Scale 1.15 + brand color | Framer `whileHover` |
| Footer links | Color → white | CSS transition |
| Tab nav items | Color → blue-600 | CSS transition |
| FAQ row | Background → gray-50 | CSS transition |

All CSS transitions use `transition: all 200ms cubic-bezier(0, 0, 0.2, 1)` unless specified.

---

## File Structure

```
src/animations/
├── variants.ts          ← Shared base variants (fadeIn, fadeInUp, stagger...)
├── presets/
│   ├── hero.ts          ← Hero section sequence
│   ├── cards.ts         ← All card types
│   ├── navbar.ts        ← Nav + mobile menu
│   ├── sections.ts      ← Scroll reveal sections
│   ├── buttons.ts       ← Button hover/tap
│   ├── faq.ts           ← Accordion
│   ├── counters.ts      ← Statistics count-up
│   ├── timeline.ts      ← Timeline sequence
│   ├── images.ts        ← Image reveals
│   ├── loading.ts       ← Skeleton, spinner
│   └── pageTransition.ts ← Route transitions
└── index.ts             ← Re-exports all presets
```
