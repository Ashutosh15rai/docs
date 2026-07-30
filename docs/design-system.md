# Design System — Vriddhi Research

> **Scope:** This is the master design system document for the Vriddhi Research frontend rebuild using Next.js 15, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Lenis Smooth Scroll.
>
> **Source of truth:** All design decisions documented here are derived from Phase 1 analysis (`docs/website-analysis.md`, `docs/components.md`, `docs/ux-review.md`, `docs/improvement-plan.md`) — not from re-crawling the live site.

---

## 1. Design Philosophy

### Core Concept

**"Precision with Authority"** — Every pixel earns its place by reinforcing one of two things: **trust** (SEBI registration, NISM certification, research credentials) or **clarity** (what you get, how much it costs, how to join). Nothing decorative that doesn't serve those two purposes.

### Brand Personality

| Dimension | Expression |
|-----------|-----------|
| Voice | Confident, measured, precise — like a brief from a SEBI-registered professional |
| Feel | Finance-grade authority without corporate coldness |
| Differentiator | "Not tips. Not noise." — logic-driven, research-backed |
| Audience | Indian retail traders, mobile-first, WhatsApp-native |
| Trust anchors | SEBI reg badge, NISM cert, live market data, legal compliance pages |

### Design Principles

1. **Trust First** — Every layout decision must reinforce credibility. SEBI badge visible above the fold on every marketing page.
2. **Mobile Dominant** — Design for 375px first. The audience is WhatsApp-native.
3. **Conversion Clarity** — CTAs are never ambiguous. "Join Free Community" = WhatsApp. "Explore Courses" = /courses. Every button has one destination.
4. **White Space is Premium** — Dense layouts feel like tip-provider sites. Generous spacing signals quality research.
5. **Motion Enhances, Never Distracts** — Animations reveal content, they don't compete with it.
6. **Accessible by Default** — WCAG 2.1 AA minimum. Financial services must be legible and operable for all users.

---

## 2. Visual Language

### Color Strategy

Three-zone color system:

| Zone | Color | Purpose |
|------|-------|---------|
| **Dark Navy** | `#0B1120` | Navbar, hero backgrounds, footer — authority and depth |
| **White/Light Gray** | `#FFFFFF` / `#F5F7FA` | Content sections — breathing room, readability |
| **Blue Accent** | `#2563EB` | Links, active states, info callouts, accent text |
| **Green** | `#16A34A` / `#25D366` | Primary CTAs (WhatsApp), positive market data, checkmarks |
| **Amber** | `#D97706` | Risk disclaimers, warnings — SEBI compliance signaling |
| **Red** | `#DC2626` | Negative market data, errors |

Full palette → see `docs/color-system.md`

### Typography Strategy

Single typeface family: **Inter** (Google Fonts, variable font).

Why Inter:
- Native feel on mobile (similar to system-ui)
- Excellent legibility at small sizes (crucial for market data)
- Works at all weights from 400–800
- Widely used in fintech — feels familiar and trustworthy

Scale: 12px → 14px → 16px → 18px → 20px → 24px → 30px → 36px → 48px → 60px

Full scale → see `docs/typography.md`

### Spacing Strategy

4px base unit. Tailwind's default spacing scale maps perfectly to this.

Section vertical rhythm: `py-16` (64px) minimum, `py-24` (96px) for hero/major sections.

Grid: 12-column, max-width 1280px, 24px gutters on mobile, 32px on desktop.

Full scale → see `docs/design-tokens.md`

### Motion Strategy

Framer Motion as the animation engine. Three motion tiers:

- **Tier 1 — Structural:** Page transitions, drawer opens, modal reveals (200–300ms)
- **Tier 2 — Scroll:** Section entrance reveals, card cascades, counter animations (400–600ms)
- **Tier 3 — Micro:** Button hover, link hover, icon pulse (100–200ms)

All animations must respect `prefers-reduced-motion`.

Full motion system → see `docs/motion-system.md`

---

## 3. Component Architecture

### Three-Layer Component Model

```
Layer 1 — Primitives (shadcn/ui + Tailwind)
  Button, Input, Select, Checkbox, Dialog, Sheet, Accordion, Tabs...
  Never customized directly — wrapped in Layer 2.

Layer 2 — Brand Components (custom, Vriddhi-specific)
  Navbar, Footer, PageHero, SectionBadge, TrustBadgeCard,
  PricingCard, ContactCard, MarketTickerScroller, etc.
  Built using Layer 1 primitives + design tokens.

Layer 3 — Page Sections (composition of Layer 2)
  HeroSection, TrustBadgesBar, TestimonialsSection, FAQSection, CTABanner...
  No logic — pure composition and layout.
```

### Component Categories

| Category | Components |
|----------|-----------|
| **Layout** | Navbar, Footer, PageHero, SectionWrapper, Container |
| **Navigation** | NavLink, MobileDrawer, SectionBadge, Breadcrumb, TabNav |
| **Cards** | TrustBadgeCard, ContactCard, PricingCard, CourseCard, TestimonialCard, InstructorCard |
| **Buttons** | PrimaryButton, SecondaryButton, FullWidthButton, IconButton, CTABanner |
| **Data** | MarketTickerScroller, LiveMarketWidget, StatisticsStrip |
| **Content** | FAQAccordion, ProcessStep, ComparisonTable, SampleAlertPreview |
| **Forms** | SearchBar, ContactForm, FormInput, FormSelect, FormTextarea |
| **Legal** | LegalSectionBlock, SidebarTOC, AlertBox, BlockquoteHighlight, MetadataChip |
| **Feedback** | LoadingSkeleton, EmptyState, ErrorState |
| **Media** | CourseBanner, ImageOptimized, SocialIcon |

Full component specs → see `docs/component-library.md`

---

## 4. Page Layout System

### Standard Page Template

Every page follows this shell:

```
<html>
  <body>
    <SkipToMain />           ← Accessibility: first focusable element
    <Navbar />               ← Sticky, z-50
    <main id="main">
      <PageHero />           ← Only on inner pages (not Home)
      [Page Sections]        ← Alternating white/light-gray backgrounds
      <CTABanner />          ← Pre-footer conversion push
    </main>
    <Footer />
  </body>
</html>
```

### Background Alternation Pattern

Sections alternate to create visual separation without borders:

| Section # | Background | Tailwind |
|-----------|-----------|---------|
| Hero | Dark navy | `bg-navy-900` |
| Section 1 | White | `bg-white` |
| Section 2 | Light gray | `bg-gray-50` |
| Section 3 | White | `bg-white` |
| Section 4 | Light gray | `bg-gray-50` |
| CTA Banner | Dark navy | `bg-navy-900` |
| Footer | Dark navy | `bg-navy-950` |

### Container Width

```css
.container {
  max-width: 1280px;   /* xl breakpoint */
  padding-left: 1.5rem;    /* 24px mobile */
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 2rem;    /* 32px tablet+ */
    padding-right: 2rem;
  }
}
```

---

## 5. Dark Mode Strategy

### Stance: Dark Mode is Deferred

**Decision:** Dark mode is NOT implemented in Phase 3 (Component Library). The brand already uses dark navy sections extensively as a design choice, not as a "dark mode" equivalent.

**Rationale:**
1. The audience is primarily Indian retail traders on mobile — dark mode adoption is lower in this demographic
2. The site's trust-critical elements (SEBI badge colors, amber disclaimers, green/red market data) have complex dark mode mappings
3. Phase 4 Page Development should ship first; dark mode is a Phase 5+ enhancement

**Implementation plan when added:**
- Use `next-themes` library
- CSS custom properties (`--color-bg`, `--color-text`) for all colors
- Semantic token layer makes the toggle mechanical once tokens are mapped

---

## 6. Glass Morphism Rules

Glass morphism is appropriate in 2 contexts only:

### Approved Use Cases

**1. Market Widget Overlay Cards**
- Background: `rgba(255, 255, 255, 0.08)` on dark navy backgrounds
- Backdrop blur: `backdrop-blur-md` (12px)
- Border: `1px solid rgba(255, 255, 255, 0.12)`
- Only on the LiveMarketWidget component

**2. Mobile Navigation Overlay**
- Background: `rgba(11, 17, 32, 0.95)` on the page
- Backdrop blur: `backdrop-blur-sm` (4px)
- Full-screen mobile drawer backdrop

### NOT Approved For
- Card components on white backgrounds (no glass needed, use white card with shadow)
- Pricing cards (must remain readable, no blur effects)
- Form inputs (must be clearly legible)
- Legal content (clarity > aesthetics)

---

## 7. Gradient Rules

### Approved Gradients

**1. Hero Text Gradient** (primary brand application)
```css
/* Blue gradient on key headline words: "Logic, Structure" */
background: linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**2. Logo Mark Gradient**
```css
/* VR geometric mark */
background: linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%);
```

**3. CTA Button Gradient** (optional enhancement)
```css
/* Join Free / WhatsApp button */
background: linear-gradient(135deg, #16A34A 0%, #22C55E 100%);
/* Hover: */
background: linear-gradient(135deg, #15803D 0%, #16A34A 100%);
```

**4. Dark Section Overlay Gradient** (hero backgrounds)
```css
/* Subtle depth on dark navy sections */
background: linear-gradient(180deg, #0B1120 0%, #111827 100%);
```

### NOT Approved
- Rainbow or multi-color gradients
- Gradients on body text
- Gradients on card backgrounds (use flat color)
- Gradients on legal page content

---

## 8. Elevation System

Five elevation levels using box-shadow:

| Level | Name | Use Case | Shadow |
|-------|------|---------|--------|
| 0 | Flat | Cards on white bg, inline elements | none |
| 1 | Raised | Default card resting state | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)` |
| 2 | Elevated | Card hover state, dropdowns | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)` |
| 3 | Floating | Navbar (scrolled), modals, popups | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` |
| 4 | Overlay | Full-screen modals, mobile drawer | `0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04)` |

---

## 9. Border System

### Widths

```
border (1px) — Standard: cards, inputs, dividers
border-2 (2px) — Focus rings, active tab indicators, highlighted pricing card border
border-4 (4px) — Accent left borders on blockquotes and legal callouts
```

### Colors

```
border-gray-200   — Default card and input borders
border-gray-300   — Dividers between sections
border-blue-500   — Focus state, active state, links
border-blue-200   — Info callout left border
border-amber-300  — Warning callout left border
border-green-300  — Success callout left border
border-red-300    — Error state
```

### Radius

```
rounded-sm    (4px)   — Tags, small badges
rounded       (6px)   — Buttons, inputs, small cards
rounded-md    (8px)   — Standard cards
rounded-lg    (12px)  — Large cards, pricing cards
rounded-xl    (16px)  — Hero content panels
rounded-2xl   (24px)  — Feature sections
rounded-full  (9999px) — Pills, badges, avatar circles, social icons
```

---

## 10. Icon System

**Library:** Lucide Icons (MIT license, consistent 24px stroke-based design)

### Icon Sizes

| Context | Size | Class |
|---------|------|-------|
| Inline text | 16px | `size-4` |
| Button icon | 18px | `size-[18px]` |
| Nav icon | 20px | `size-5` |
| Card icon | 24px | `size-6` |
| Section icon (circle bg) | 24px | `size-6` in a `size-12` circle |
| Large feature icon | 32px | `size-8` |
| Decorative/hero icon | 48px | `size-12` |

### Icon Color Rules

- **Navigation:** `text-gray-600` default, `text-blue-600` active/hover
- **Card icons in blue bg circles:** `text-white`
- **Positive market data:** `text-green-600`
- **Negative market data:** `text-red-600`
- **Warning/disclaimer:** `text-amber-600`
- **Checkmarks in features:** `text-green-600`

### Semantic Icon Map

| Purpose | Lucide Icon |
|---------|------------|
| SEBI Registration | `ShieldCheck` |
| Education/Courses | `GraduationCap` |
| Community/WhatsApp | `Users` |
| Learning + Earning | `TrendingUp` |
| Email | `Mail` |
| Phone | `Phone` |
| WhatsApp CTA | Custom SVG (official WhatsApp logo) |
| Calendar | `Calendar` |
| Clock | `Clock` |
| Lock (gated content) | `Lock` |
| Search | `Search` |
| Menu (hamburger) | `Menu` |
| Close | `X` |
| Arrow right | `ArrowRight` |
| Check | `Check` |
| CheckCircle | `CheckCircle2` |
| Warning | `AlertTriangle` |
| Info | `Info` |
| ChevronDown | `ChevronDown` |
| External link | `ExternalLink` |
| Instagram | Custom SVG (brand icon) |
| YouTube | Custom SVG (brand icon) |
| Facebook | Custom SVG (brand icon) |

---

## 11. Image Guidelines

- **Format:** WebP primary, JPEG fallback
- **Optimization:** Always use `next/image` with explicit `width` and `height`
- **Loading:** `priority` for above-fold images, `lazy` for below-fold
- **Alt text:** Descriptive, includes brand name where relevant
- **Aspect ratios:** Course thumbnails 16:9, profile photos 1:1, hero images 16:6

Full image documentation → see `docs/images.md` (Phase 1)

---

## 12. Accessibility Standards

**Target:** WCAG 2.1 AA minimum throughout.

Key requirements:
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- Touch targets: minimum 44×44px
- Focus indicators: visible, 2px offset ring in `ring-blue-500`
- Skip link: `<SkipToMain />` as first child of `<body>`
- All images: descriptive `alt` attributes
- Forms: programmatic labels, not placeholder-only
- Animations: `prefers-reduced-motion` respected globally
- Keyboard: all interactive elements reachable and operable

Full accessibility guide → see `docs/accessibility.md`
