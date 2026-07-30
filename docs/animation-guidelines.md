# Animation Guidelines — Vriddhi Research

> Rules, patterns, and decision trees for all motion in the Vriddhi Research rebuild. This document is the source of truth for when to animate, how to animate, and when NOT to animate.

---

## Core Principle

**Motion serves UX, not aesthetics.**

An animation is approved only if it does one or more of the following:
1. Directs attention to new or changing content
2. Confirms a user interaction (button press, form submit)
3. Reveals the structure of a list or hierarchy (staggered entrance)
4. Communicates live state change (market data update, loading → content)
5. Provides spatial context for UI transitions (drawer slides in from right)

If an animation does none of these, it is removed.

---

## The Three Laws

### Law 1: Reduced Motion is Sacred

Every animated element must check `prefers-reduced-motion`. No exceptions.

```typescript
// ✅ Always use this pattern
const animate = useMotionSafe() // from @/hooks/useReducedMotion

<motion.div
  initial={animate ? { opacity: 0, y: 16 } : false}
  animate={animate ? { opacity: 1, y: 0 } : {}}
  transition={animate ? { duration: 0.4 } : { duration: 0 }}
>
```

```css
/* Global CSS fallback in globals.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**When prefers-reduced-motion is active:**
- All entrance animations: instant (no opacity fade, no movement)
- Market ticker: becomes a static list with no scrolling
- Count-up: shows final value immediately
- Page transitions: instant (opacity 0→1 in 0ms)
- Hover effects: color change only via CSS (no transform/scale)
- Accordion: instant open/close

### Law 2: GPU-Only Transforms

All animated properties must be GPU-accelerated. No exceptions.

```typescript
// ✅ GPU-accelerated (allowed)
transform: 'translateX()', 'translateY()', 'scale()', 'rotate()'
opacity

// ❌ CPU-rendered (forbidden in animations)
width, height, top, left, right, bottom
margin, padding
backgroundColor, color (use opacity/transform instead)
fontSize, borderWidth
```

**The one exception:** `height: 'auto'` in Framer Motion accordion expansion. Framer Motion handles this with `AnimatePresence` and `layoutId`. Accept the mild CPU cost — no alternative for expand/collapse from 0 to auto height.

### Law 3: Content Before Animation

Animation must never delay initial content display. Content is rendered (possibly behind opacity: 0) before animation plays. No animation has `delay > 1000ms`.

```typescript
// ✅ Content rendered immediately, reveals smoothly
initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, delay: 0.2 }}

// ❌ Never hide content for a long time
transition={{ delay: 2.0 }} // User sees nothing for 2 seconds
```

---

## Timing Reference

```
Ultra-fast:    0.05s  (50ms)   — Icon color on hover
Fast:          0.10s  (100ms)  — Button tap, checkbox tick
Quick:         0.15s  (150ms)  — Link hover, focus ring
Normal:        0.20s  (200ms)  — Dropdown open, page fade
Moderate:      0.30s  (300ms)  — Drawer slide, card hover lift
Slow:          0.40s  (400ms)  — Scroll reveal entrance
Deliberate:    0.50s  (500ms)  — Pricing card, testimonial
Long:          0.60s  (600ms)  — Hero widget entrance
Extended:      0.80s  (800ms)  — Timeline sequence
Hero:          1.00s+ (1000ms) — Full hero entrance (staggered across multiple elements)
Counter:       1.50s  (1500ms) — Statistics count-up
```

---

## Easing Reference

| Name | Curve | When to Use |
|------|-------|------------|
| `ease-out` | `[0, 0, 0.2, 1]` | Elements entering view (most common) |
| `ease-in` | `[0.4, 0, 1, 1]` | Elements leaving view (exits) |
| `ease-in-out` | `[0.4, 0, 0.2, 1]` | State changes (hover, toggle) |
| `spring` | `[0.34, 1.56, 0.64, 1]` | Badges, icons, small pops (slight overshoot) |
| `linear` | `linear` | Continuous loops (market ticker, spinner) |

**Rule:** `ease-out` is the default. Use `spring` sparingly (SectionBadge, icon hover, success state).

---

## Animation Decision Tree

```
Is the element animated?
    │
    ├─► Does the user interact with it?
    │       │
    │       ├─► Button/link → T1: hover (scale 1.02, 150ms ease-out)
    │       ├─► Accordion → T2: height expand (300ms ease-out)
    │       ├─► Drawer → T2: translateX (300ms ease-out)
    │       ├─► Tab switch → T2: underline slide (200ms ease-out)
    │       └─► Form submit → T1: loading state (spinner)
    │
    ├─► Does it enter the viewport?
    │       │
    │       ├─► Hero (page load) → T5: full sequence (badge → headline → body → CTA → widget)
    │       ├─► Section heading → T3: fadeInUp (400ms, once)
    │       ├─► Card group → T3: stagger (100ms between, fadeInUp)
    │       ├─► Statistics → T5: count-up (1500ms spring)
    │       └─► Single element → T3: fadeInUp (400ms)
    │
    ├─► Is it a page transition?
    │       └─► Route change → T4: fade (250ms ease-in-out)
    │
    └─► Is it continuous?
            ├─► Market ticker → CSS animation (30s linear infinite)
            └─► Loading skeleton → CSS pulse (800ms ease-in-out infinite)
```

---

## Scroll Animation Rules

### `viewport={{ once: true }}`

All scroll-triggered animations use `once: true`. This means:
- Animation plays once on the first time the element enters the viewport
- Never replays when user scrolls back up
- Prevents jarring re-animations on back-scroll

**Exception:** None. Always `once: true` for scroll reveals.

### `viewport={{ margin: '-80px' }}`

The default scroll trigger margin. The element starts animating 80px before it reaches the visible viewport edge. This prevents the animation from already-started when the user can see it.

Adjust per component:
- `-80px` default
- `-40px` for smaller elements (badges, chips)
- `-120px` for large sections (hero-scale sections)

### Stagger Timing

```typescript
// Standard grid stagger (trust badges, course cards, testimonials)
staggerChildren: 0.1   // 100ms between each item

// Dense list stagger (feature list items, FAQ items)
staggerChildren: 0.06  // 60ms — faster for many items

// Wide spacing stagger (pricing cards, large blocks)
staggerChildren: 0.15  // 150ms — more dramatic for fewer items

// Max delay cap: 600ms total
// If there are 8+ items with 100ms stagger = 700ms+ wait for last item
// In this case, reduce staggerChildren to 0.06 to keep total < 600ms
```

---

## Hero Animation Sequence

The homepage hero is the most complex animation sequence. Total sequence: ~1200ms.

```
t = 0ms    Page loads, content rendered at opacity:0
t = 100ms  SEBI badge fades in + scales up (spring)
t = 250ms  Headline words start appearing (stagger: 80ms/word)
t = ~600ms  All headline words visible
t = 600ms  Body text fades in + slides up
t = 750ms  CTA button 1 appears
t = 870ms  CTA button 2 appears
t = 900ms  Disclaimer box fades in
t = 300ms  Market widget starts entering (parallel, slides from right)
t = 900ms  Market widget fully visible

// Note: Widget starts in parallel with headline (t=300ms)
// This prevents the right side looking empty while headline animates
```

---

## Hover Effects Reference

### Button Hover States

```typescript
// WhatsApp/Green Primary CTA
whileHover={{
  scale: 1.03,
  boxShadow: '0 0 20px rgba(37, 211, 102, 0.35)',
}}
whileTap={{ scale: 0.97 }}
transition={{ duration: 0.15, ease: [0, 0, 0.2, 1] }}

// Blue CTA (Pricing, Start Course)
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.97 }}
transition={{ duration: 0.15, ease: [0, 0, 0.2, 1] }}

// Outlined Secondary
whileHover={{ scale: 1.01, backgroundColor: 'rgba(249, 250, 251, 1)' }}
whileTap={{ scale: 0.99 }}
```

### Card Hover States

```typescript
// All cards: lift effect via CSS (not Framer Motion — CSS is enough for hover)
// In Tailwind: hover:shadow-level-2 hover:-translate-y-1 transition-all duration-300

// Pricing card (larger emphasis)
// Tailwind: hover:shadow-level-3 hover:-translate-y-1.5

// Contact card
// Tailwind: hover:shadow-level-2 hover:-translate-y-1

// DO NOT use Framer Motion whileHover for cards
// CSS transitions handle hover more efficiently (no JS involvement)
```

### Icon Hover States

```typescript
// Social icons (footer, contact)
whileHover={{ scale: 1.15 }}
transition={{ duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }}

// Navigation icons (inline with text)
// CSS only: color transition, no transform
```

---

## What NOT to Animate

This section is as important as what TO animate.

### ❌ Never Animate

1. **Background color of large sections** — Jarring, causes repaints
2. **Font size** — Layout-triggering, causes reflows
3. **Border width** — Causes layout shift
4. **Multiple properties simultaneously in complex ways** — Keep it to opacity + transform
5. **Content that is already visible** — Only animate things entering view or responding to interaction
6. **Any UI where the user is filling in a form** — Don't distract during active text input
7. **Error messages** — Should appear instantly (user needs immediate feedback)
8. **Legal disclaimers** — Must be visible without animation (accessibility + legal)

### ❌ Avoid These Patterns

```typescript
// ❌ Bouncy/spring on large elements (feels unprofessional for finance)
<motion.section whileHover={{ scale: 1.05 }}> // No

// ❌ Infinite animations not in ticker/loader
<motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity }}> // No

// ❌ Opacity animation without transform (user perceives as "flicker")
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
// Add at minimum a subtle y: 8 → 0 to make it feel intentional

// ❌ Different animation for same component on different pages
// Every TrustBadgeCard must use the same entrance variant every time
```

---

## Performance Rules

### Bundle Size

```typescript
// Import specific Framer Motion parts, not the whole library
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
// NOT: import * as motion from 'framer-motion'
```

### Lazy Load Heavy Animations

```typescript
// The LiveMarketWidget contains charts — load lazily
const LiveMarketWidget = dynamic(
  () => import('@/components/data/LiveMarketWidget'),
  { ssr: false, loading: () => <MarketWidgetSkeleton /> }
)
```

### Use CSS for Simple States

```
CSS transitions (not Framer Motion) for:
- Button/link hover colors
- Card hover shadow (box-shadow transition)
- Card hover lift (transform: translateY())
- Focus ring appearance
- Nav link active underline
- Footer link hover color

Framer Motion for:
- Entrance animations (scroll-triggered)
- Page transitions
- Complex sequences (hero stagger)
- Accordion height animation
- Mobile drawer slide
- Market ticker (CSS is better here — see motion-system.md)
```

### Animation Debugging

```typescript
// During development: slow down all animations
// Add to layout.tsx temporarily:

<MotionConfig reducedMotion="never">
  {/* All animations play even with OS reduced-motion setting */}
</MotionConfig>

// Check specific timing:
<MotionConfig transition={{ duration: 3 }}>
  {/* All transitions at 3× slower */}
</MotionConfig>
```

---

## Mobile Animation Adjustments

### Reduce Distance on Mobile

```typescript
// Desktop: element moves 24px on entry
// Mobile: reduce to 12px (less aggressive on small screens)

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

// Mobile-aware version in ScrollReveal component:
const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
const variants = {
  hidden: { opacity: 0, y: isMobile ? 12 : 24 },
  visible: { opacity: 1, y: 0 },
}
```

### Reduce Stagger on Mobile

Mobile users scroll faster — compress stagger so all content is visible sooner:

```typescript
// Desktop stagger
staggerChildren: 0.1

// Mobile stagger (via responsive hook)
staggerChildren: isMobile ? 0.05 : 0.1
```

### Market Ticker Battery Considerations

```typescript
// Pause ticker when tab is not in focus (saves battery/CPU on mobile)
useEffect(() => {
  const handleVisibility = () => {
    if (document.hidden) {
      tickerRef.current?.style.setProperty('animation-play-state', 'paused')
    } else {
      tickerRef.current?.style.setProperty('animation-play-state', 'running')
    }
  }
  document.addEventListener('visibilitychange', handleVisibility)
  return () => document.removeEventListener('visibilitychange', handleVisibility)
}, [])
```

---

## Animation Testing Checklist

Before Phase 3 component delivery:

- [ ] All animations use `useMotionSafe()` / `prefers-reduced-motion`
- [ ] No animation uses CPU-rendered properties (width, height, backgroundColor)
- [ ] Market ticker pauses on hover
- [ ] Market ticker has `prefers-reduced-motion` static fallback
- [ ] Hero sequence completes in ≤ 1200ms total
- [ ] Stagger timing: last card visible within 600ms of trigger
- [ ] All `scroll-triggered` variants use `viewport={{ once: true }}`
- [ ] Count-up animation starts only when visible in viewport
- [ ] Button hover animations use 100–200ms (not slow)
- [ ] Card hover uses CSS transition (not Framer Motion)
- [ ] Page transitions complete in ≤ 400ms
- [ ] No CLS (layout shift) caused by any animation
- [ ] Mobile: reduced y-offset (12px not 24px)
- [ ] Mobile: compressed stagger (0.05s not 0.1s)
- [ ] Drawer closes with Escape key + animates out properly
- [ ] `AnimatePresence` wraps any conditionally rendered animated element
