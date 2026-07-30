# Responsive Notes — Vriddhi Research

Documentation of responsive design behavior, breakpoints, and mobile-specific considerations for vriddhiresearch.com.

---

## Overview

The site appears to be built on a modern web framework (likely Next.js or similar React-based stack) which typically includes responsive design by default. However, screenshots were captured at desktop viewport width. Mobile behavior was not directly observed and must be inferred from the design structure.

**Key Audience Note:** Given that the primary communication channel is WhatsApp, Vriddhi Research's audience is overwhelmingly mobile-first. This makes responsive design a critical priority, not an afterthought.

---

## Breakpoints (Assumed / Standard)

Based on typical Tailwind CSS or Bootstrap grid usage in modern React apps:

| Breakpoint | Width | Label |
|------------|-------|-------|
| Mobile | < 640px | sm |
| Tablet | 640px – 1024px | md/lg |
| Desktop | > 1024px | lg/xl |
| Wide Desktop | > 1280px | xl/2xl |

*These should be verified against the actual CSS implementation during rebuild.*

---

## Component-by-Component Responsive Behavior

### Navbar

**Desktop (observed):**
- Logo left · Nav links center · Buttons right
- Horizontal single-line layout

**Mobile (expected):**
- Logo left · Hamburger icon right
- Nav links collapse into drawer/sheet
- Drawer should contain: Home, About, Contact, Why VR, Courses, Package, Join Free

**Issues to fix:**
- Hamburger menu needs to be explicitly designed and implemented
- "Package" should appear in mobile nav (it's footer-only on desktop, which mobile users may miss even more)
- Mobile nav should be full-screen or 80%+ width drawer for touch-friendly interaction

---

### Market Ticker Bar (Home)

**Desktop:** Full-width scrolling marquee

**Mobile challenges:**
- Horizontal scrolling ticker works on mobile natively
- Font size must be readable on mobile (~13–14px minimum)
- Touch users should be able to stop/interact with ticker (accessibility)
- Ensure the ticker doesn't cause horizontal page scroll on small screens

**Recommendation:** Test ticker on iPhone SE (375px) — the narrowest common viewport

---

### Hero Section (Home)

**Desktop:** Two-column — text left, market widget right (approx. 60/40 split)

**Tablet (768px):** 
- Consider stacking to single column OR reducing widget to smaller size
- Market widget may need to shrink or simplify on tablet

**Mobile:**
- Stack to single column: text content first, market widget below (or hide widget)
- Headline font size should scale down from ~60px to ~36–40px
- CTA buttons should be full-width stacked vertically (not side-by-side)
- Risk disclaimer box should remain visible and readable

**Critical mobile concern:** The dual-CTA layout ("Join Free Community" + "Explore Courses" side-by-side) needs to stack vertically on mobile for adequate touch target size (min 44×44px per WCAG)

---

### Trust Badges Bar (Home)

**Desktop:** 4 cards in a single horizontal row

**Mobile:**
- Collapse to 2×2 grid at tablet
- Consider 2×2 grid on mobile, or single vertical stack
- Icon + title + subtitle format works at any size

---

### About Feature Cards

**Desktop:** 4-column grid

**Mobile:**
- 2×2 grid at tablet
- 1-column stack at mobile
- Card height will increase with stacking — ensure enough vertical padding

---

### Contact Channel Cards

**Desktop:** 3-column grid

**Mobile:**
- Stack to single column
- WhatsApp card (highlighted/recommended) stays first — strong conversion priority
- Touch targets on card links must be ≥ 44px

---

### Pricing Cards (Package Page)

**Desktop:** 2-column side-by-side

**Mobile:**
- Stack to single column
- Quarterly (POPULAR) card should appear first on mobile (higher intent)
- Feature lists are long — consider collapsing to top 4 features with "Show more" on mobile
- "Connect Us" button must be full-width

---

### Courses Grid

**Desktop:** Multi-column grid (currently shows 1 card)

**Mobile:**
- Single-column layout
- Search bar should be full-width with button below input (stacked) on mobile

---

### Course Detail Layout

**Desktop:** Banner full-width, two-column below (info left, price/CTA right)

**Mobile:**
- Banner scales to full width
- Stacks to single column: title, date, price, CTA (all full-width)
- "Start Course" button must be full-width and prominent
- Tab navigation (Overview/Curriculum) should fit on one line — watch for text overflow

---

### Legal Pages (Sidebar + Content)

**Desktop:** Two-column — sidebar TOC (left 30%) + content panel (right 70%)

**Mobile — critical challenge:**
- Sidebar TOC cannot remain at left on mobile (too narrow)
- Options:
  1. **Sticky top TOC** — collapse TOC to top accordion/dropdown before content
  2. **Hidden TOC** — accessible via floating button or scroll-spy indicator
  3. **Remove TOC on mobile** — not recommended (legal pages are long)
- Recommended: Convert sidebar to a collapsed accordion at top of page on mobile

**Content panel adjustments:**
- Table in Grievance Redressal page needs horizontal scroll on mobile (wide table)
- Alert boxes / callouts should remain full-width
- Font size minimum 16px on mobile (browser zoom prevention)

---

### Footer

**Desktop:** 4-column grid

**Tablet (768px):** 2×2 grid (Brand + Navigate, Legal + Compliance)

**Mobile:**
- Brand column: full-width at top
- Navigate, Legal, Compliance: collapsible accordions OR stacked single columns
- Social icons row: centered, adequate spacing
- Bottom disclaimer: 2 lines minimum, larger font (12px minimum)

---

## Mobile-Specific UX Considerations

### Touch Targets

Per WCAG 2.5.5 (AAA) and Apple/Google guidelines:
- All interactive elements must be minimum 44×44px
- Spacing between touch targets: minimum 8px
- Current risk areas: nav links (may be too close together), social icon row in footer

### Font Sizes

| Context | Minimum Desktop | Minimum Mobile |
|---------|----------------|----------------|
| Body text | 14px | 16px |
| Labels / captions | 12px | 13px |
| Disclaimer bar | 10px ⚠️ | 12px (increase!) |
| Navigation | 15px | 16px |
| Headings H1 | 48px | 32–36px |
| Headings H2 | 32px | 24–28px |

### Horizontal Scrolling

Elements that may cause unwanted horizontal scroll on mobile:
1. Market ticker bar — must use `overflow: hidden` on parent
2. Grievance Redressal escalation table — needs `overflow-x: auto` wrapper
3. Wide images — must use `max-width: 100%` on all images

### WhatsApp Integration (Mobile Priority)

WhatsApp CTAs should be:
- Large, thumb-friendly buttons (min 48px height)
- Placed above-the-fold on mobile wherever possible
- Using `https://wa.me/[number]` format for direct WhatsApp open (not web.whatsapp.com)

---

## Performance on Mobile

| Concern | Impact | Mitigation |
|---------|--------|------------|
| Live market data widget | Heavy JS, potential layout shift | Skeleton loader, lazy initialization |
| Course thumbnail image | Above fold — affects LCP | Preload, serve WebP, appropriate srcset |
| Market ticker | Continuous animation — battery drain on mobile | Pause ticker when tab not in focus (`visibilitychange` API) |
| Footer with many links | Large DOM | Lazy render below-fold content |

---

## Responsive Design Checklist (for Rebuild)

### Before Launch

- [ ] Test all pages on iPhone SE (375px) — smallest common iPhone viewport
- [ ] Test all pages on iPhone 14 Pro (393px)
- [ ] Test all pages on iPad (768px) — tablet breakpoint
- [ ] Test all pages on Android (360px common) — Samsung budget phones
- [ ] Verify no horizontal scroll on any page at 375px
- [ ] Verify all touch targets are ≥ 44px
- [ ] Verify font size is ≥ 16px on mobile for body text
- [ ] Verify market ticker doesn't break mobile layout
- [ ] Verify legal page sidebar collapses properly on mobile
- [ ] Verify all tables are horizontally scrollable on mobile
- [ ] Verify WhatsApp links open WhatsApp app on mobile (not browser)
- [ ] Verify pricing cards stack correctly on mobile
- [ ] Verify footer collapses to readable layout on mobile
- [ ] Test mobile keyboard behavior on search inputs

### Responsive Images

- [ ] All `<img>` elements have `srcset` for 1x/2x
- [ ] Course banner has responsive sizes
- [ ] Logo has mobile-appropriate size
- [ ] No fixed-width images that overflow containers
