# Design Tokens — Vriddhi Research

> The complete token dictionary. Every color, spacing, radius, shadow, z-index, duration, and easing value is defined here. Components reference these tokens — never raw hex values or magic numbers.

---

## Token Philosophy

Tokens are organized in two layers:

1. **Primitive Tokens** — Raw values (colors, sizes). Named after their value: `blue-600`, `spacing-8`.
2. **Semantic Tokens** — Named after their purpose: `color-text-primary`, `spacing-section-y`. Components use semantic tokens; semantic tokens reference primitives.

This allows future theming (dark mode, white-label) by swapping semantic → primitive mappings.

---

## CSS Custom Properties

All tokens are implemented as CSS custom properties. Defined in `src/styles/tokens.css`, imported in `src/app/globals.css`.

```css
/* src/styles/tokens.css */

:root {
  /* ─── COLOR PRIMITIVES ─── */

  /* Navy */
  --color-navy-50:  #EEF1F8;
  --color-navy-100: #D0D8ED;
  --color-navy-200: #A8B5D8;
  --color-navy-300: #7A8DC2;
  --color-navy-400: #5069AC;
  --color-navy-500: #2D4B96;
  --color-navy-600: #1E3580;
  --color-navy-700: #152767;
  --color-navy-800: #0E1B4A;
  --color-navy-900: #0B1120;
  --color-navy-950: #060B15;

  /* Blue (Tailwind default + custom tokens) */
  --color-blue-50:  #EFF6FF;
  --color-blue-100: #DBEAFE;
  --color-blue-200: #BFDBFE;
  --color-blue-300: #93C5FD;
  --color-blue-400: #60A5FA;
  --color-blue-500: #3B82F6;
  --color-blue-600: #2563EB;
  --color-blue-700: #1D4ED8;
  --color-blue-800: #1E40AF;
  --color-blue-900: #1E3A8A;

  /* Green */
  --color-green-50:  #F0FDF4;
  --color-green-100: #DCFCE7;
  --color-green-500: #22C55E;
  --color-green-600: #16A34A;
  --color-green-700: #15803D;
  --color-green-whatsapp: #25D366;
  --color-green-whatsapp-hover: #1DA851;

  /* Amber */
  --color-amber-50:  #FFFBEB;
  --color-amber-100: #FEF3C7;
  --color-amber-300: #FCD34D;
  --color-amber-600: #D97706;
  --color-amber-700: #B45309;

  /* Red */
  --color-red-50:  #FEF2F2;
  --color-red-100: #FEE2E2;
  --color-red-400: #F87171;
  --color-red-600: #DC2626;
  --color-red-700: #B91C1C;

  /* Gray */
  --color-gray-50:  #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  --color-white:    #FFFFFF;

  /* ─── SEMANTIC COLOR TOKENS ─── */

  /* Backgrounds */
  --color-bg-base:        var(--color-white);
  --color-bg-subtle:      var(--color-gray-50);
  --color-bg-dark:        var(--color-navy-900);
  --color-bg-darker:      var(--color-navy-950);
  --color-bg-card:        var(--color-white);
  --color-bg-card-dark:   var(--color-navy-800);
  --color-bg-amber-soft:  var(--color-amber-50);
  --color-bg-blue-soft:   var(--color-blue-50);
  --color-bg-green-soft:  var(--color-green-50);
  --color-bg-red-soft:    var(--color-red-50);

  /* Text */
  --color-text-primary:      var(--color-gray-900);
  --color-text-body:         var(--color-gray-700);
  --color-text-muted:        var(--color-gray-500);
  --color-text-disabled:     var(--color-gray-400);
  --color-text-on-dark:      var(--color-white);
  --color-text-muted-dark:   var(--color-gray-300);
  --color-text-accent:       var(--color-blue-600);
  --color-text-accent-dark:  var(--color-blue-400);
  --color-text-success:      var(--color-green-600);
  --color-text-danger:       var(--color-red-600);
  --color-text-warning:      var(--color-amber-700);

  /* Brand / Market */
  --color-market-positive:  var(--color-green-600);
  --color-market-negative:  var(--color-red-600);
  --color-market-neutral:   var(--color-gray-500);

  /* Borders */
  --color-border-default:   var(--color-gray-200);
  --color-border-strong:    var(--color-gray-300);
  --color-border-focus:     var(--color-blue-600);
  --color-border-amber:     var(--color-amber-300);
  --color-border-blue:      var(--color-blue-200);
  --color-border-green:     var(--color-green-300);
  --color-border-red:       var(--color-red-300);

  /* Buttons */
  --color-btn-whatsapp-bg:      var(--color-green-whatsapp);
  --color-btn-whatsapp-hover:   var(--color-green-whatsapp-hover);
  --color-btn-whatsapp-text:    var(--color-white);
  --color-btn-outline-border:   var(--color-gray-800);
  --color-btn-outline-text:     var(--color-gray-800);
  --color-btn-blue-bg:          var(--color-blue-600);
  --color-btn-blue-hover:       var(--color-blue-700);
  --color-btn-blue-text:        var(--color-white);

  /* ─── SPACING ─── */

  --spacing-0:   0px;
  --spacing-px:  1px;
  --spacing-0-5: 2px;
  --spacing-1:   4px;
  --spacing-2:   8px;
  --spacing-3:   12px;
  --spacing-4:   16px;
  --spacing-5:   20px;
  --spacing-6:   24px;
  --spacing-7:   28px;
  --spacing-8:   32px;
  --spacing-10:  40px;
  --spacing-12:  48px;
  --spacing-14:  56px;
  --spacing-16:  64px;
  --spacing-20:  80px;
  --spacing-24:  96px;
  --spacing-32:  128px;

  /* Semantic spacing */
  --spacing-section-y:     var(--spacing-16);   /* 64px — section vertical padding */
  --spacing-section-y-lg:  var(--spacing-24);   /* 96px — hero / major section padding */
  --spacing-container-px:  var(--spacing-6);    /* 24px — mobile horizontal padding */
  --spacing-card-p:        var(--spacing-6);    /* 24px — card internal padding */
  --spacing-card-gap:      var(--spacing-4);    /* 16px — gap between card elements */

  /* ─── TYPOGRAPHY ─── */

  --font-family-sans: var(--font-inter), system-ui, -apple-system, sans-serif;

  --font-size-xs:   0.75rem;    /* 12px */
  --font-size-sm:   0.875rem;   /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg:   1.125rem;   /* 18px */
  --font-size-xl:   1.25rem;    /* 20px */
  --font-size-2xl:  1.5rem;     /* 24px */
  --font-size-3xl:  1.875rem;   /* 30px */
  --font-size-4xl:  2.25rem;    /* 36px */
  --font-size-5xl:  3rem;       /* 48px */
  --font-size-6xl:  3.75rem;    /* 60px */

  --font-weight-normal:    400;
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;
  --font-weight-extrabold: 800;

  --line-height-tight:    1.1;
  --line-height-snug:     1.25;
  --line-height-normal:   1.5;
  --line-height-relaxed:  1.6;
  --line-height-loose:    1.75;

  --letter-spacing-tight:   -0.025em;
  --letter-spacing-normal:   0em;
  --letter-spacing-wide:     0.025em;
  --letter-spacing-widest:   0.1em;

  /* ─── BORDER RADIUS ─── */

  --radius-none:  0px;
  --radius-sm:    4px;
  --radius-base:  6px;
  --radius-md:    8px;
  --radius-lg:    12px;
  --radius-xl:    16px;
  --radius-2xl:   24px;
  --radius-full:  9999px;

  /* ─── SHADOWS (ELEVATION) ─── */

  --shadow-0:    none;
  --shadow-1:    0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-2:    0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-3:    0 10px 15px rgba(0, 0, 0, 0.10), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-4:    0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-nav:  0 1px 3px rgba(0, 0, 0, 0.08);

  /* ─── Z-INDEX ─── */

  --z-below:    -1;
  --z-base:      0;
  --z-raised:   10;
  --z-dropdown: 20;
  --z-sticky:   30;      /* Market ticker, section badges */
  --z-fixed:    40;      /* Navbar */
  --z-overlay:  50;      /* Mobile menu backdrop */
  --z-drawer:   60;      /* Mobile drawer */
  --z-modal:    70;      /* Modals */
  --z-toast:    80;      /* Toast notifications */

  /* ─── BREAKPOINTS ─── */

  --breakpoint-sm:  640px;
  --breakpoint-md:  768px;
  --breakpoint-lg:  1024px;
  --breakpoint-xl:  1280px;
  --breakpoint-2xl: 1536px;

  /* ─── LAYOUT ─── */

  --container-max-width: 1280px;
  --navbar-height: 64px;

  /* ─── MOTION TOKENS ─── */

  /* Durations */
  --duration-instant:   0ms;
  --duration-fast:      100ms;
  --duration-normal:    200ms;
  --duration-moderate:  300ms;
  --duration-slow:      400ms;
  --duration-slower:    600ms;
  --duration-slowest:   800ms;

  /* Easings */
  --ease-linear:        linear;
  --ease-in:            cubic-bezier(0.4, 0, 1, 1);
  --ease-out:           cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:        cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:        cubic-bezier(0.34, 1.56, 0.64, 1);  /* Slight overshoot */
  --ease-bounce:        cubic-bezier(0.68, -0.55, 0.27, 1.55);

  /* Component-specific motion */
  --transition-button:  all var(--duration-normal) var(--ease-out);
  --transition-card:    all var(--duration-moderate) var(--ease-out);
  --transition-nav:     all var(--duration-fast) var(--ease-out);
  --transition-drawer:  transform var(--duration-moderate) var(--ease-out);
  --transition-fade:    opacity var(--duration-normal) var(--ease-in-out);
}
```

---

## Tailwind Token Integration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.5rem', md: '2rem' },
      screens: { xl: '1280px' },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  'var(--color-navy-50)',
          100: 'var(--color-navy-100)',
          200: 'var(--color-navy-200)',
          300: 'var(--color-navy-300)',
          400: 'var(--color-navy-400)',
          500: 'var(--color-navy-500)',
          600: 'var(--color-navy-600)',
          700: 'var(--color-navy-700)',
          800: 'var(--color-navy-800)',
          900: 'var(--color-navy-900)',
          950: 'var(--color-navy-950)',
        },
        'whatsapp': 'var(--color-green-whatsapp)',
        'whatsapp-hover': 'var(--color-green-whatsapp-hover)',
      },
      borderRadius: {
        'none': '0',
        DEFAULT: 'var(--radius-base)',
        'sm':   'var(--radius-sm)',
        'md':   'var(--radius-md)',
        'lg':   'var(--radius-lg)',
        'xl':   'var(--radius-xl)',
        '2xl':  'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      boxShadow: {
        'card':    'var(--shadow-card)',
        'nav':     'var(--shadow-nav)',
        'level-1': 'var(--shadow-1)',
        'level-2': 'var(--shadow-2)',
        'level-3': 'var(--shadow-3)',
        'level-4': 'var(--shadow-4)',
      },
      zIndex: {
        'navbar':  '40',
        'overlay': '50',
        'drawer':  '60',
        'modal':   '70',
        'toast':   '80',
      },
      transitionDuration: {
        'fast':     '100ms',
        'normal':   '200ms',
        'moderate': '300ms',
        'slow':     '400ms',
        'slower':   '600ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      keyframes: {
        'ticker-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'count-up': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'ticker':    'ticker-scroll 30s linear infinite',
        'fade-in':   'fade-in 200ms ease-out',
        'slide-up':  'slide-up 300ms ease-out',
        'scale-in':  'scale-in 200ms ease-out',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## TypeScript Token Constants

For use in Framer Motion and JavaScript contexts where CSS variables aren't accessible:

```typescript
// src/constants/tokens.ts

export const colors = {
  navy: {
    900: '#0B1120',
    950: '#060B15',
  },
  blue: {
    400: '#60A5FA',
    600: '#2563EB',
    700: '#1D4ED8',
  },
  green: {
    600: '#16A34A',
    whatsapp: '#25D366',
    whatsappHover: '#1DA851',
  },
  amber: { 600: '#D97706' },
  red:   { 600: '#DC2626' },
  gray: {
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },
  white: '#FFFFFF',
} as const

export const duration = {
  fast:     0.1,   // 100ms
  normal:   0.2,   // 200ms
  moderate: 0.3,   // 300ms
  slow:     0.4,   // 400ms
  slower:   0.6,   // 600ms
  slowest:  0.8,   // 800ms
} as const

export const ease = {
  linear:   [1, 1, 0, 0] as [number, number, number, number],
  out:      [0, 0, 0.2, 1] as [number, number, number, number],
  inOut:    [0.4, 0, 0.2, 1] as [number, number, number, number],
  spring:   [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  bounce:   [0.68, -0.55, 0.27, 1.55] as [number, number, number, number],
} as const

export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const

export const spacing = {
  sectionY:    64,  // py-16
  sectionYLg:  96,  // py-24
  containerPx: 24,  // px-6
  cardP:       24,  // p-6
  cardGap:     16,  // gap-4
} as const

export const radius = {
  sm:   '4px',
  base: '6px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl': '24px',
  full: '9999px',
} as const

export const shadow = {
  card:   '0 2px 8px rgba(0, 0, 0, 0.08)',
  nav:    '0 1px 3px rgba(0, 0, 0, 0.08)',
  level1: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
  level2: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
  level3: '0 10px 15px rgba(0, 0, 0, 0.10), 0 4px 6px rgba(0, 0, 0, 0.05)',
} as const
```

---

## Token Usage Rules

### ✅ Always
- Reference CSS variables in CSS: `color: var(--color-text-primary)`
- Use Tailwind token classes: `text-navy-900`, `bg-gray-50`, `shadow-card`
- Use TypeScript constants in Framer Motion: `duration.moderate`, `ease.spring`

### ❌ Never
- Hard-code hex values in components: `style={{ color: '#0B1120' }}`
- Use Tailwind's arbitrary values for semantic colors: `text-[#0B1120]`
- Access breakpoints in JS without the constants object
- Define z-index values outside the token system
