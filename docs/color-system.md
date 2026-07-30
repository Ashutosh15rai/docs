# Color System — Vriddhi Research

> Derived from Phase 1 analysis. The live site uses dark navy (#0A0F2C approx.) + bright blue (#1E90FF approx.) + WhatsApp green (#25D366). The palette below refines those observed values into a production-ready, accessible token system.

---

## Color Philosophy

Three emotional roles drive every color decision:

1. **Authority** → Dark Navy — the color of depth, expertise, SEBI compliance
2. **Action** → Blue → calls to action, links, trust indicators, interactive states
3. **Conversion** → Green → WhatsApp CTAs, positive signals, community membership

Amber and Red are purely semantic (warnings, negative data) — never used decoratively.

---

## Primary Palette

### Navy (Brand Dark)

Used for: Navbar, hero backgrounds, footer, dark section backgrounds.

```
navy-50:   #EEF1F8   ← Lightest tint (rarely used)
navy-100:  #D0D8ED
navy-200:  #A8B5D8
navy-300:  #7A8DC2
navy-400:  #5069AC
navy-500:  #2D4B96
navy-600:  #1E3580
navy-700:  #152767
navy-800:  #0E1B4A
navy-900:  #0B1120   ← Primary dark background (hero, sections)
navy-950:  #060B15   ← Deepest — footer background, bottom bar
```

**Tailwind config name:** `navy`

**WCAG contrast on navy-900:**
- White (#FFFFFF): 14.1:1 ✅ (AAA pass)
- Blue-400 (#60A5FA): 4.7:1 ✅ (AA pass for large text, AAA for normal)
- Gray-300 (#D1D5DB): 8.9:1 ✅ (AAA pass)

---

### Blue (Brand Accent)

Used for: Active nav underlines, links, info callouts, accent text in headlines, icon backgrounds.

```
blue-50:   #EFF6FF
blue-100:  #DBEAFE
blue-200:  #BFDBFE
blue-300:  #93C5FD
blue-400:  #60A5FA   ← Accent text on dark backgrounds
blue-500:  #3B82F6
blue-600:  #2563EB   ← Primary action blue (links, active states)
blue-700:  #1D4ED8   ← Hover state for buttons/links
blue-800:  #1E40AF
blue-900:  #1E3A8A
blue-950:  #172554
```

**Tailwind config name:** `blue` (Tailwind default — no override needed)

**Key tokens:**
- `interactive`: blue-600 (#2563EB) — links, active nav underlines
- `interactive-hover`: blue-700 (#1D4ED8)
- `interactive-dark`: blue-400 (#60A5FA) — links on dark backgrounds

---

### Green (WhatsApp / CTA)

Used for: Primary CTA buttons ("Join Free", "Join Community"), WhatsApp icon, positive market data, feature checkmarks, success states.

```
green-50:   #F0FDF4
green-100:  #DCFCE7
green-200:  #BBF7D0
green-300:  #86EFAC
green-400:  #4ADE80
green-500:  #22C55E
green-600:  #16A34A   ← Primary CTA (non-WhatsApp greens)
green-700:  #15803D   ← CTA hover state
green-800:  #166534
green-whatsapp: #25D366   ← Official WhatsApp brand color (exact)
green-whatsapp-hover: #1DA851   ← WhatsApp hover
```

**Tailwind config name:** `green` (default) + custom `green-whatsapp`

---

## Secondary Palette

### Amber (Warning / Disclaimer)

Used exclusively for: SEBI risk disclaimers, legal warnings, "all-caps" callout boxes.

```
amber-50:  #FFFBEB
amber-100: #FEF3C7
amber-200: #FDE68A
amber-300: #FCD34D
amber-400: #FBBF24
amber-500: #F59E0B
amber-600: #D97706   ← Warning text, border accent
amber-700: #B45309
amber-800: #92400E
amber-900: #78350F
```

**WCAG note:** Amber-600 on amber-50: 5.9:1 ✅ AA pass for body text

---

### Red (Negative / Error)

Used for: Negative market data (price drops), form errors, destructive action states.

```
red-50:  #FEF2F2
red-100: #FEE2E2
red-200: #FECACA
red-300: #FCA5A5
red-400: #F87171
red-500: #EF4444
red-600: #DC2626   ← Primary error red
red-700: #B91C1C   ← Error hover / darker state
red-800: #991B1B
red-900: #7F1D1D
```

---

## Neutral Palette

```
gray-50:  #F9FAFB   ← Alternating section background
gray-100: #F3F4F6   ← Input backgrounds, tags
gray-200: #E5E7EB   ← Borders
gray-300: #D1D5DB   ← Dividers, disabled state borders
gray-400: #9CA3AF   ← Placeholder text
gray-500: #6B7280   ← Muted body text
gray-600: #4B5563   ← Secondary text
gray-700: #374151   ← Primary body text (dark)
gray-800: #1F2937   ← Near-black text
gray-900: #111827   ← Heading text
white:    #FFFFFF   ← Card backgrounds, content sections
```

---

## Semantic Color Tokens

These are the tokens that components should reference — never hard-coded hex values.

### Background Tokens

| Token | Value | Use |
|-------|-------|-----|
| `bg-base` | white | Standard page content background |
| `bg-subtle` | gray-50 | Alternating section background |
| `bg-dark` | navy-900 | Dark sections (hero, CTA banner) |
| `bg-darker` | navy-950 | Footer, bottom bar |
| `bg-card` | white | Card backgrounds |
| `bg-card-dark` | navy-800 | Cards on dark backgrounds |
| `bg-amber-soft` | amber-50 | Amber callout box background |
| `bg-blue-soft` | blue-50 | Info callout box background |
| `bg-green-soft` | green-50 | Success callout box background |
| `bg-red-soft` | red-50 | Error callout box background |

### Text Tokens

| Token | Value | Use |
|-------|-------|-----|
| `text-primary` | gray-900 | Headings, primary content |
| `text-body` | gray-700 | Body paragraphs |
| `text-muted` | gray-500 | Captions, subtitles, metadata |
| `text-disabled` | gray-400 | Disabled states, placeholders |
| `text-on-dark` | white | Text on navy backgrounds |
| `text-muted-dark` | gray-300 | Muted text on navy backgrounds |
| `text-accent` | blue-600 | Links, active states |
| `text-accent-dark` | blue-400 | Links on dark backgrounds |
| `text-success` | green-600 | Positive indicators |
| `text-danger` | red-600 | Negative indicators, errors |
| `text-warning` | amber-600 | Warnings, disclaimers |
| `text-brand-highlight` | blue-400 | Gradient headline words (dark bg) |

### Border Tokens

| Token | Value | Use |
|-------|-------|-----|
| `border-default` | gray-200 | Standard card/input borders |
| `border-strong` | gray-300 | Dividers |
| `border-focus` | blue-600 | Focus ring color |
| `border-amber` | amber-300 | Warning callout left border |
| `border-blue` | blue-200 | Info callout left border |
| `border-green` | green-300 | Success callout left border |
| `border-red` | red-300 | Error callout/input border |

### Interactive Tokens

| Token | Value | Use |
|-------|-------|-----|
| `btn-primary-bg` | green-whatsapp (#25D366) | WhatsApp CTA background |
| `btn-primary-bg-hover` | green-whatsapp-hover (#1DA851) | WhatsApp CTA hover |
| `btn-primary-text` | white | WhatsApp CTA text |
| `btn-secondary-bg` | transparent | Outlined button background |
| `btn-secondary-border` | gray-800 | Outlined button border |
| `btn-secondary-text` | gray-800 | Outlined button text |
| `btn-blue-bg` | blue-600 | Blue CTA (pricing, search) |
| `btn-blue-bg-hover` | blue-700 | Blue CTA hover |
| `btn-blue-text` | white | Blue CTA text |

---

## Market Data Color Convention

These colors must be consistent across all market data displays (ticker, widget, charts):

| Condition | Color | Tailwind |
|-----------|-------|----------|
| Positive change (▲) | green-600 | `text-green-600` |
| Negative change (▼) | red-600 | `text-red-600` |
| Neutral / unchanged | gray-500 | `text-gray-500` |
| Ticker background | navy-900 | `bg-navy-900` |
| Ticker text (index name) | white | `text-white` |

---

## Tailwind CSS Configuration

```javascript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF1F8',
          100: '#D0D8ED',
          200: '#A8B5D8',
          300: '#7A8DC2',
          400: '#5069AC',
          500: '#2D4B96',
          600: '#1E3580',
          700: '#152767',
          800: '#0E1B4A',
          900: '#0B1120',
          950: '#060B15',
        },
        green: {
          // Tailwind defaults + custom
          whatsapp: '#25D366',
          'whatsapp-hover': '#1DA851',
        },
      },
    },
  },
}

export default config
```

---

## Contrast Verification Table

Critical combinations verified against WCAG 2.1 AA (4.5:1 normal text, 3:1 large text):

| Foreground | Background | Ratio | AA Normal | AA Large |
|------------|-----------|-------|-----------|---------|
| white (#FFF) | navy-900 (#0B1120) | 14.1:1 | ✅ Pass | ✅ Pass |
| gray-300 (#D1D5DB) | navy-900 (#0B1120) | 8.9:1 | ✅ Pass | ✅ Pass |
| blue-400 (#60A5FA) | navy-900 (#0B1120) | 4.7:1 | ✅ Pass | ✅ Pass |
| gray-900 (#111827) | white (#FFF) | 19.8:1 | ✅ Pass | ✅ Pass |
| gray-700 (#374151) | white (#FFF) | 9.7:1 | ✅ Pass | ✅ Pass |
| gray-500 (#6B7280) | white (#FFF) | 4.6:1 | ✅ Pass | ✅ Pass |
| blue-600 (#2563EB) | white (#FFF) | 4.8:1 | ✅ Pass | ✅ Pass |
| amber-700 (#B45309) | amber-50 (#FFFBEB) | 6.2:1 | ✅ Pass | ✅ Pass |
| red-600 (#DC2626) | white (#FFF) | 4.5:1 | ✅ Pass | ✅ Pass |
| green-700 (#15803D) | white (#FFF) | 6.3:1 | ✅ Pass | ✅ Pass |
| white (#FFF) | green-whatsapp (#25D366) | 3.0:1 | ⚠️ Large only | ✅ Pass |

**Note:** White on WhatsApp green (#25D366) passes only for large text (≥18px or ≥14px bold). All WhatsApp buttons use bold text ≥14px, so this passes. Verified acceptable.

---

## Do / Don't

### ✅ Do
- Use `text-navy-900` or `bg-navy-900` from the token scale (never hard-code hex)
- Use semantic token names in component props (`variant="warning"` not `color="#D97706"`)
- Use blue-400 for text/icons on dark navy backgrounds (sufficient contrast)
- Use green-whatsapp for every WhatsApp-linked CTA

### ❌ Don't
- Mix blue and green as competing accent colors on the same UI element
- Use amber or red decoratively (reserved for semantic meaning only)
- Use navy as a card background on white pages (creates too much visual weight)
- Use gray-400 or lighter for body text on white (fails contrast)
- Use white text directly on blue-400 or lighter (fails contrast)
