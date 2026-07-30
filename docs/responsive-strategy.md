# Responsive Strategy — Vriddhi Research

> Mobile-first responsive design plan for the Vriddhi Research rebuild. Based on Phase 1 findings from `docs/responsive-notes.md`. The audience is WhatsApp-native and predominantly mobile.

---

## Design Mandate

**This site is designed mobile-first.**

The target audience (Indian retail traders) communicates via WhatsApp and accesses content on mobile phones. Every component defaults to its mobile layout. Desktop is an enhancement.

**Starting viewport for design decisions: 375px (iPhone SE — narrowest common iOS viewport)**

---

## Breakpoint System

```typescript
// Tailwind default breakpoints (used as-is)
sm:   640px   // Small tablets, large phones landscape
md:   768px   // iPad Mini, tablets
lg:   1024px  // iPad Pro, small laptops
xl:   1280px  // Standard laptops (target design width)
2xl:  1536px  // Large monitors (max enhancement)
```

**Naming convention used throughout this doc:**
- `mobile` = 0–639px (default — mobile first)
- `tablet` = 640px–1023px (sm to lg)
- `desktop` = 1024px–1279px (lg)
- `wide` = 1280px+ (xl)

---

## Core Mobile-First Rules

1. **Write mobile styles first, then add `md:` / `lg:` overrides for larger screens**
2. **Never use `max-width` breakpoints** — always `min-width` (Tailwind's defaults)
3. **Touch targets: minimum 44×44px** on all interactive elements
4. **Font size: minimum 16px for body text on mobile** (prevents browser auto-zoom on iOS)
5. **No horizontal scroll**: every element must fit within viewport width
6. **WhatsApp CTAs visible above the fold** on mobile whenever possible

---

## Container System

```tsx
// src/components/layout/Container.tsx

// Mobile: 24px horizontal padding
// Tablet (md): 32px horizontal padding
// Max-width: 1280px, centered

<div className="w-full max-w-[1280px] mx-auto px-6 md:px-8">
  {children}
</div>
```

---

## Component Responsive Behavior

### Navbar

| Viewport | Layout |
|---------|--------|
| Mobile (< 768px) | Logo left · Hamburger icon right |
| Desktop (≥ 768px) | Logo left · Nav links center · CTA buttons right |

**Mobile implementation:**
```tsx
// Hamburger toggle (24px icon, 48px touch target)
// Sheet/drawer from shadcn/ui — slides from right
// Drawer width: 85vw, max-width: 320px
// Drawer items: full-width, min-height 48px each (touch target)
// Close on: backdrop click, Escape key, navigation

// Tailwind classes:
// Nav links: hidden md:flex
// Hamburger: flex md:hidden
```

**Mobile drawer nav items:**
```
[Home]
[About]
[Why VR]
[Contact]
[Plans]      ← explicitly included (not in desktop nav but critical for mobile)
[Courses] button (full-width, outlined)
[Join Free] button (full-width, green)
```

---

### Market Ticker Bar

| Viewport | Behavior |
|---------|---------|
| Mobile | Full-width, font-size 12px minimum, no horizontal overflow |
| All sizes | Pauses on hover |

**Potential issue:** Ticker content must use `overflow: hidden` on parent. Inner track is duplicated (2×) and positioned absolutely — must not cause horizontal scroll.

```css
.ticker-wrapper {
  width: 100%;
  overflow: hidden;  /* Critical: contains the scrolling content */
}
```

---

### Hero Section (Homepage)

| Viewport | Layout |
|---------|--------|
| Mobile | Single column: text content full-width; market widget below (or hidden) |
| Tablet (768px) | Single column: text 70%, widget simplified |
| Desktop (1024px+) | Two columns: text 60%, widget 40% |

**Mobile specifics:**
```tsx
// Headline scale-down
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">

// CTA buttons: full-width stacked on mobile
<div className="flex flex-col sm:flex-row gap-3">
  <PrimaryButton className="w-full sm:w-auto" />
  <SecondaryButton className="w-full sm:w-auto" />
</div>

// Market widget: hidden on mobile (saves vertical space)
// Show simplified widget (just index value + change) at sm:
<div className="hidden sm:block lg:block">
  <LiveMarketWidget />
</div>
```

---

### Trust Badges Bar

| Viewport | Layout |
|---------|--------|
| Mobile | 2×2 grid |
| Tablet | 2×2 or 4×1 |
| Desktop | 4×1 row |

```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
  {trustBadges.map(badge => <TrustBadgeCard key={badge.id} {...badge} />)}
</div>
```

---

### About Feature Cards

Same as Trust Badges:
```
Mobile:   2×2 grid
Tablet:   2×2 or 4×1
Desktop:  4×1 row
```

---

### Contact Channel Cards

| Viewport | Layout |
|---------|--------|
| Mobile | Single column (stacked) |
| Tablet | Single column |
| Desktop | 3-column row |

**Mobile priority:** WhatsApp card (highlighted) always first in DOM order and visually prominent.

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <ContactCard variant="highlighted" ... /> {/* WhatsApp — always first */}
  <ContactCard ... />   {/* Email */}
  <ContactCard ... />   {/* Phone */}
</div>
```

---

### Pricing Cards (Package Page)

| Viewport | Layout |
|---------|--------|
| Mobile | Single column (stacked) |
| Tablet | Single column or 2-col if wide enough |
| Desktop | 2-column side-by-side |

**Mobile specifics:**
- Quarterly (POPULAR) card appears first on mobile (higher LTV, push it up)
- Feature list: show top 4 with "Show all features" expand button
- "Connect Us" / "Subscribe Now" button: full-width, sticky bottom on mobile

```tsx
// Sticky mobile CTA (appears at viewport bottom on mobile when scrolling through features)
<div className="sticky bottom-0 p-4 bg-white border-t border-gray-200 lg:hidden">
  <FullWidthButton label="Subscribe Now" href={SITE.whatsapp.cta} />
</div>
```

---

### Course Grid

| Viewport | Columns |
|---------|--------|
| Mobile | 1 column |
| Tablet | 2 columns |
| Desktop | 3 columns |

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map(course => <CourseCard key={course.slug} {...course} />)}
</div>
```

**Search bar on mobile:** Stack button below input (not inline)
```tsx
<div className="flex flex-col sm:flex-row gap-3">
  <SearchInput className="flex-1" />
  <Button className="w-full sm:w-auto">Search</Button>
</div>
```

---

### Course Detail

| Viewport | Layout |
|---------|--------|
| Mobile | Single column: banner → title → date → price → CTA → tabs |
| Desktop | Banner full-width → two-column below (info left, price/CTA right) |

**Mobile:** "Start Course" button full-width, positioned immediately below title.

```tsx
// Desktop: two-column
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2"> {/* Course info */} </div>
  <div className="lg:col-span-1"> {/* Price + CTA — sticky on desktop */} </div>
</div>

// Mobile: sticky CTA at bottom
<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t lg:hidden">
  <FullWidthButton label="Start Course" href="/courses/..." />
</div>
```

---

### Legal Pages (Sidebar + Content)

This is the most complex responsive transformation:

| Viewport | Layout |
|---------|--------|
| Mobile | TOC as collapsible accordion at top; content below full-width |
| Tablet (768px) | TOC as collapsible accordion; wider content |
| Desktop (1024px+) | Sticky sidebar TOC left (25%) + scrollable content right (75%) |

```tsx
// Desktop: sidebar layout
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <aside className="hidden lg:block lg:col-span-1">
    <LegalSidebarTOC sections={sections} /> {/* Sticky on desktop */}
  </aside>
  <main className="col-span-1 lg:col-span-3">
    {/* TOC accordion for mobile — only shows below lg */}
    <div className="lg:hidden mb-8">
      <LegalTOCAccordion sections={sections} />
    </div>
    {content}
  </main>
</div>
```

**Compliance table (Grievance Redressal):**
```tsx
// Always wrap in horizontal scroll container
<div className="overflow-x-auto -mx-4 sm:mx-0">
  <table className="min-w-[640px] w-full"> {/* Force minimum width */}
    ...
  </table>
</div>
```

---

### Footer

| Viewport | Columns |
|---------|--------|
| Mobile | 1 column stacked |
| Tablet (640px) | 2×2 grid |
| Desktop (1024px+) | 4-column grid (brand wider) |

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
  <div className="sm:col-span-2 lg:col-span-1"> {/* Brand column — wider on tablet */}
    <FooterBrandColumn />
  </div>
  <FooterNavColumn title="NAVIGATE" links={footerNav.navigate} />
  <FooterNavColumn title="LEGAL" links={footerNav.legal} />
  <FooterNavColumn title="COMPLIANCE" links={footerNav.compliance} />
</div>
```

**Mobile footer columns:** Full-width stacked columns OR each column as an accordion (user can expand to see links). Recommended: simple stacked (not accordion) to keep legal links always visible.

**Bottom disclaimer on mobile:**
```tsx
<div className="text-xs text-gray-400 leading-relaxed text-center sm:text-left">
  {/* NOT all-caps. Not smaller than 12px. Wrapped naturally. */}
  {LEGAL_DISCLAIMER_TEXT}
</div>
```

---

### Statistics Strip

| Viewport | Columns |
|---------|--------|
| Mobile | 2×2 grid |
| Tablet | 4×1 row |
| Desktop | 4×1 row with larger numbers |

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {stats.map(stat => <StatItem key={stat.label} {...stat} />)}
</div>
```

---

### FAQ Accordion

No column changes needed — single column works at all sizes.

```tsx
<div className="max-w-3xl mx-auto">
  {faqs.map(faq => <FAQItem key={faq.id} {...faq} />)}
</div>
```

Width-constrained (`max-w-3xl`) for readability — prevents very wide single-column text.

---

## Touch Target Compliance

All interactive elements must meet 44×44px minimum:

| Element | Approach |
|---------|---------|
| Nav links | Min `py-3 px-4` = 48px height |
| Hamburger button | Wrapper `min-h-[44px] min-w-[44px]` |
| Social icons | Wrapper `min-h-[44px] min-w-[44px]` |
| Footer links | `py-2` minimum = ~40px, add more if needed |
| FAQ item header | `py-4` = 48px+, uses full row width |
| Tab navigation | `py-3` = 48px, uses full tab width |
| Card CTAs | Full-width on mobile, `min-h-[48px]` |
| Checkbox | Native size 20px + wrapper 44px |
| Accordion item | `py-4` = 48px+ |
| WhatsApp buttons | `min-h-[52px]` — oversized (premium conversion CTA) |

---

## Font Scaling on Mobile

| Element | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Hero H1 | 60px (text-6xl) | 36px (text-4xl) | `text-4xl lg:text-6xl` |
| Inner page H1 | 48px (text-5xl) | 30px (text-3xl) | `text-3xl lg:text-5xl` |
| Section H2 | 36px (text-4xl) | 24px (text-2xl) | `text-2xl lg:text-4xl` |
| Body | 16px (text-base) | 16px (text-base) | NEVER reduce below 16px |
| Caption | 14px (text-sm) | 13px (text-[13px]) | Minimum for captions |
| Disclaimer | 13px | 12px | Minimum ever |
| Legal body | 16px | 16px | Never reduce — readability critical |

---

## Image Responsive Behavior

```tsx
// Always use next/image with responsive sizing
<Image
  src="/images/courses/vriddhi-options-mastery-program.jpg"
  alt="Vriddhi Options Mastery Program course banner"
  width={1200}
  height={675}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  className="w-full h-auto"
  priority   // ← Only for above-fold images
/>
```

**Sizes attribute guide:**
- Hero images: `100vw` (full width at all sizes)
- Course banner: `(max-width: 768px) 100vw, 80vw`
- Course card thumbnail: `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`
- Profile photo: `(max-width: 640px) 120px, 160px`

---

## Horizontal Scroll Prevention

Elements that could cause horizontal overflow:

| Element | Prevention |
|---------|-----------|
| Market ticker | `overflow: hidden` on parent wrapper |
| Compliance table | `overflow-x: auto` wrapper, `min-w-[640px]` on table |
| Wide images | `max-width: 100%` on all images via Tailwind `w-full` |
| Pre element (code) | `overflow-x: auto` |
| Long URLs in legal text | `word-break: break-all` |
| All grids | `w-full` parent, percentage or `fr` columns only |

**Test:** At 375px viewport, `document.body.scrollWidth` must equal `window.innerWidth`. Zero horizontal scroll.

---

## Responsive Testing Protocol

Test every page at these viewports before Phase 4 completion:

| Device | Viewport | Priority |
|--------|---------|---------|
| iPhone SE | 375×667 | ✅ Critical |
| iPhone 14 Pro | 393×852 | ✅ Critical |
| iPhone 14 Pro Max | 430×932 | ✅ High |
| Samsung Galaxy S22 | 360×780 | ✅ Critical |
| Google Pixel 7 | 412×915 | ✅ High |
| iPad Mini | 768×1024 | ✅ High |
| iPad Pro | 1024×1366 | ✅ Medium |
| MacBook 13" | 1280×800 | ✅ Critical |
| MacBook 15" | 1440×900 | ✅ High |
| External 1080p | 1920×1080 | ⬜ Medium |

**WhatsApp sharing test:** Each OG image (1200×630px) must render correctly when shared to WhatsApp (tests image format, size, and aspect ratio).

---

## Responsive Checklist

### Layout
- [ ] No horizontal scroll at 375px viewport
- [ ] Navbar collapses to hamburger below 768px
- [ ] Mobile drawer contains all pages including Plans/Package
- [ ] Hero CTA buttons stack vertically on mobile
- [ ] Market widget hidden or simplified on mobile
- [ ] Trust badges in 2×2 grid on mobile
- [ ] Pricing cards stacked on mobile (quarterly first)
- [ ] Sticky bottom CTA on pricing page (mobile)
- [ ] Legal sidebar becomes accordion on mobile
- [ ] Compliance table has horizontal scroll on mobile
- [ ] Footer stacks to single column on mobile

### Typography
- [ ] Hero headline readable at 375px (≥36px)
- [ ] Body text never below 16px on mobile
- [ ] Footer disclaimer never below 12px
- [ ] Legal content at least 16px

### Touch
- [ ] All touch targets ≥ 44×44px
- [ ] WhatsApp buttons oversized (≥52px height)
- [ ] Nav drawer items have adequate tap spacing
- [ ] Social icon touch area ≥ 44px

### Performance
- [ ] Market widget lazy-loaded (doesn't block mobile page load)
- [ ] All images have `srcset` / `sizes`
- [ ] Above-fold images use `priority`
- [ ] Ticker paused when tab not in focus
