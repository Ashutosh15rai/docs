# Typography — Vriddhi Research

> Typography system for the Next.js 15 rebuild. Implemented via `next/font/google` with Inter as the primary typeface.

---

## Typeface Selection

### Primary: Inter (Variable Font)

```typescript
// src/lib/fonts.ts
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})
```

**Why Inter:**
- Native-feeling on mobile (similar to San Francisco / Roboto)
- Optimized for screen readability at all sizes, including small market data labels
- Variable font: single file load, all weights available
- Widely adopted in fintech — instills familiarity and professionalism
- Excellent numerical rendering (critical for ₹ prices, market data)

### No Secondary Typeface

A single typeface maintains visual discipline and reduces complexity. Weight contrast (Regular 400 → Extrabold 800) provides all the hierarchy variation needed.

---

## Type Scale

Base: **16px (1rem)**. Scale factor: **1.25 (Major Third)** with custom overrides.

```
text-xs:   12px  (0.75rem)   — Legal footnotes, metadata chips
text-sm:   14px  (0.875rem)  — Captions, badges, tags, small labels
text-base: 16px  (1rem)      — Body paragraphs, form labels (minimum for mobile)
text-lg:   18px  (1.125rem)  — Card titles, feature subtitles
text-xl:   20px  (1.25rem)   — Sub-headings, section intro text
text-2xl:  24px  (1.5rem)    — H3 / Card section headings
text-3xl:  30px  (1.875rem)  — H2 / Secondary page headings
text-4xl:  36px  (2.25rem)   — H1 / Page titles (mobile hero)
text-5xl:  48px  (3rem)      — H1 / Inner page heroes (desktop)
text-6xl:  60px  (3.75rem)   — Hero headline (desktop)
text-7xl:  72px  (4.5rem)    — Reserved for max-impact hero (use sparingly)
```

All Tailwind defaults — no overrides needed in config.

---

## Font Weight Map

| Weight | Tailwind | Use Case |
|--------|---------|----------|
| 400 (Regular) | `font-normal` | Body paragraphs, descriptions, form text |
| 500 (Medium) | `font-medium` | Nav links, button labels (secondary), metadata |
| 600 (Semibold) | `font-semibold` | Card titles, feature item labels, badges |
| 700 (Bold) | `font-bold` | Section headings (H2, H3), pricing numbers |
| 800 (Extrabold) | `font-extrabold` | Hero headlines, major CTAs, "SEBI" badge text |

---

## Line Height Map

| Context | Line Height | Tailwind |
|---------|------------|---------|
| Display / Hero headings | 1.1 | `leading-tight` |
| Section headings | 1.25 | `leading-snug` |
| Sub-headings | 1.35 | `leading-snug` |
| Body text | 1.6 | `leading-relaxed` |
| Long-form legal content | 1.75 | `leading-loose` |
| UI labels / badges | 1.0 | `leading-none` |
| Market data numbers | 1.2 | `leading-tight` |

---

## Heading System

### H1 — Hero Headline

Used on: Homepage hero, inner page heroes.

```css
/* Mobile */
font-size: 2.25rem;    /* 36px */
font-weight: 800;
line-height: 1.1;
letter-spacing: -0.025em;

/* Desktop (lg+) */
font-size: 3.75rem;    /* 60px */
font-weight: 800;
line-height: 1.05;
letter-spacing: -0.03em;
```

**Tailwind:** `text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight`

**Color:**
- On white background: `text-gray-900`
- On dark background: `text-white`
- Accent words (brand highlight): blue gradient via CSS custom property

---

### H2 — Section Heading

Used on: Major section titles ("Our Mission", "Choose Your Plan", "Trusted by Traders").

```css
/* Mobile */
font-size: 1.875rem;   /* 30px */
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.015em;

/* Desktop */
font-size: 2.25rem;    /* 36px */
font-weight: 700;
line-height: 1.15;
letter-spacing: -0.02em;
```

**Tailwind:** `text-3xl lg:text-4xl font-bold leading-snug tracking-tight`

---

### H3 — Sub-Section Heading

Used on: Card section labels, step headings, FAQ questions.

```css
font-size: 1.25rem;    /* 20px */
font-weight: 600;
line-height: 1.35;
```

**Tailwind:** `text-xl font-semibold leading-snug`

---

### H4 — Card / Item Heading

Used on: Pricing plan names, testimonial names, feature labels.

```css
font-size: 1.125rem;   /* 18px */
font-weight: 600;
line-height: 1.4;
```

**Tailwind:** `text-lg font-semibold`

---

## Body Text System

### Body Large

Used for: Section descriptions, hero subtext, marketing copy.

```css
font-size: 1rem;       /* 16px */
font-weight: 400;
line-height: 1.6;
color: gray-700;
```

**Tailwind:** `text-base font-normal leading-relaxed text-gray-700`

---

### Body Regular

Used for: Card descriptions, feature item text, form labels.

```css
font-size: 0.875rem;   /* 14px */
font-weight: 400;
line-height: 1.6;
color: gray-600;
```

**Tailwind:** `text-sm font-normal leading-relaxed text-gray-600`

---

### Body Small

Used for: Captions, timestamps, metadata below cards.

```css
font-size: 0.75rem;    /* 12px */
font-weight: 400;
line-height: 1.5;
color: gray-500;
```

**Tailwind:** `text-xs font-normal leading-normal text-gray-500`

---

## Special Typography Components

### Section Badge / Label

The small all-caps label above section headings ("WHO WE ARE", "OUR MISSION", "LEGAL & REGULATORY").

```css
font-size: 0.75rem;    /* 12px */
font-weight: 600;
letter-spacing: 0.1em;  /* Wide tracking for all-caps */
text-transform: uppercase;
```

**Tailwind:** `text-xs font-semibold tracking-widest uppercase`

**Colors by variant:**
- Default (dark bg): `text-blue-400`
- Outline pill (light bg): `text-blue-600 border border-blue-200 px-3 py-1 rounded-full`
- Legal: `text-green-600` (with green dot prefix)

---

### Price Display

Used on pricing cards for ₹24,999 / ₹59,999.

```css
font-size: 2.25rem;    /* 36px */
font-weight: 700;
color: blue-600;
letter-spacing: -0.02em;
```

**Tailwind:** `text-4xl font-bold text-blue-600 tracking-tight`

The `/Monthly` suffix:
```css
font-size: 1rem;       /* 16px */
font-weight: 400;
color: gray-500;
```
**Tailwind:** `text-base font-normal text-gray-500 ml-1`

---

### Market Data Numbers

Used in LiveMarketWidget and Ticker.

```css
/* Index value (primary) */
font-size: 1.5rem;     /* 24px */
font-weight: 700;
font-variant-numeric: tabular-nums;   /* Prevent layout shift on number updates */
letter-spacing: -0.01em;

/* Change value (secondary) */
font-size: 0.875rem;   /* 14px */
font-weight: 600;
color: green-600 or red-600;
```

**Key:** Always use `font-variant-numeric: tabular-nums` for live market data to prevent text jumping as numbers update.

---

### Legal Disclaimer Text

The full-width legal disclaimer bar at the bottom of every page.

**Current site problem:** ~10px, all-caps. Unreadable.

**Corrected spec:**
```css
font-size: 0.75rem;    /* 12px minimum */
font-weight: 400;
line-height: 1.6;
color: gray-400;       /* On dark background */
text-transform: none;  /* Remove all-caps — improves readability */
```

**Tailwind:** `text-xs font-normal leading-relaxed text-gray-400`

---

### Navigation Text

```css
font-size: 0.9375rem;  /* 15px */
font-weight: 500;
color: gray-700;

/* Active state */
color: blue-600;
text-decoration: underline;
text-underline-offset: 4px;
```

**Tailwind:** `text-[15px] font-medium text-gray-700 hover:text-blue-600`

---

## Responsive Typography Scale

Critical breakpoints for headline text:

| Element | Mobile (sm) | Tablet (md) | Desktop (lg) | Wide (xl) |
|---------|------------|------------|-------------|----------|
| Hero H1 | text-4xl (36px) | text-5xl (48px) | text-6xl (60px) | text-6xl (60px) |
| Inner page H1 | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) | text-5xl (48px) |
| Section H2 | text-2xl (24px) | text-3xl (30px) | text-4xl (36px) | text-4xl (36px) |
| Card H3 | text-lg (18px) | text-xl (20px) | text-xl (20px) | text-2xl (24px) |
| Body | text-base (16px) | text-base (16px) | text-base (16px) | text-base (16px) |

**Never reduce body below 16px on mobile** — browser zoom prevention standard.

---

## Headline Color Treatment

### Light Background Headlines

```
Primary text: text-gray-900
Accent words: text-blue-600 (or gradient for hero H1)
```

### Dark Background Headlines

```
Primary text: text-white
Accent words: text-blue-400 (or gradient for hero H1)
```

### Blue Text Gradient (Brand Signature)

Applied to hero H1 accent words ("Logic, Structure"):

```tsx
// TailwindCSS + inline style hybrid
<span
  className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 60%, #60A5FA 100%)'
  }}
>
  Logic, Structure
</span>
```

---

## Font Loading Strategy

```tsx
// app/layout.tsx
import { inter } from '@/lib/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

```css
/* globals.css */
body {
  font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

**Performance notes:**
- `display: swap` ensures text is visible during font load
- `preload: true` for critical font subset
- Only load weights actually used (400, 500, 600, 700, 800) — reduces initial load

---

## Typography Rules

### ✅ Do
- Use `tracking-tight` or `tracking-tighter` on all headlines (negative letter-spacing improves large-text readability)
- Use `font-variant-numeric: tabular-nums` for all market data numbers
- Use `antialiased` on body text globally
- Keep body line-height at 1.6 for paragraph readability
- Use `text-balance` on headlines ≥ H2 (CSS `text-wrap: balance` for multi-line balance)

### ❌ Don't
- Use `uppercase` on body text (only on Section Badges, never body copy)
- Use italics on headlines (off-brand, undermines authority)
- Mix weights 400 and 800 in the same line without a semantic reason
- Reduce body text below 16px on mobile
- Use a second typeface for any element (single typeface = discipline)
- Reduce the footer disclaimer below 12px (accessibility failure)
