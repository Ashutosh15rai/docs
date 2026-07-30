# Development Roadmap — Vriddhi Research

A phased development plan for rebuilding vriddhiresearch.com based on the complete website audit. Each phase has clear deliverables, dependencies, and success criteria.

---

## Roadmap Overview

| Phase | Focus | Duration (Est.) | Priority |
|-------|-------|-----------------|----------|
| Phase 1 | Analysis & Documentation | Complete | ✅ Done |
| Phase 2 | Design System | 1–2 weeks | Foundation |
| Phase 3 | Component Library | 2–3 weeks | Foundation |
| Phase 4 | Page Development | 3–4 weeks | Core |
| Phase 5 | Animations & Motion | 1–2 weeks | Polish |
| Phase 6 | Responsive Design | 1–2 weeks | Quality |
| Phase 7 | Accessibility | 1 week | Quality |
| Phase 8 | Performance | 1 week | Quality |
| Phase 9 | SEO | 1 week | Growth |
| Phase 10 | Production Ready | 1 week | Launch |

**Total estimated timeline:** 12–17 weeks from Phase 2 onward

---

## Phase 1: Analysis ✅ COMPLETE

### Deliverables (Complete)

- [x] `docs/website-analysis.md` — Business overview, goals, user journey, strengths/weaknesses
- [x] `docs/pages.md` — Complete page inventory with URLs, sections, CTAs, components
- [x] `docs/navigation.md` — Header, footer, mobile nav, hierarchy
- [x] `docs/sections.md` — Every section across every page
- [x] `docs/components.md` — Full component inventory with props and variants
- [x] `docs/forms.md` — All forms, validation, missing forms
- [x] `docs/footer.md` — Footer structure, links, issues
- [x] `docs/header.md` — Header structure, specs, rebuild notes
- [x] `docs/images.md` — Image inventory, missing images, standards
- [x] `docs/content-structure.md` — All copy, content gaps, tone & voice
- [x] `docs/seo.md` — SEO analysis, keyword targets, structured data
- [x] `docs/responsive-notes.md` — Responsive behavior, breakpoints, mobile issues
- [x] `docs/ux-review.md` — UX audit, accessibility issues, animation opportunities
- [x] `docs/improvement-plan.md` — Per-page what to keep, improve, redesign, add
- [x] `docs/roadmap.md` — This document

### Key Findings from Phase 1

1. "Why VR" nav link → 404 (CRITICAL)
2. "RA Registration Disclosure" footer link → 404 (CRITICAL)
3. Package/Pricing page not in main navigation (HIGH)
4. No social proof anywhere on the site (HIGH)
5. No contact form (HIGH)
6. Footer disclaimer text is unreadable (~10px, all-caps) (HIGH)
7. No analyst photo or personal brand content (MEDIUM)
8. Enrollment flow for courses is unclear (MEDIUM)

---

## Phase 2: Design System

### Goal

Establish the complete visual design system before writing any code. Every design decision made here propagates to every page and component.

### Deliverables

#### 2.1 Color System

Define and document the complete color palette:

```
Primary Colors:
- Navy (Dark background): #0A0F2C (or verify exact from CSS)
- Blue (Accent/CTA): #1E90FF (or verify)
- Green (Primary CTA/WhatsApp): #25D366
- White: #FFFFFF

Semantic Colors:
- Success: #16A34A (green for checkmarks, positive changes)
- Warning: #D97706 (amber for disclaimers)
- Error: #DC2626 (red for negative market changes, errors)
- Info: #2563EB (blue for information callouts)

Neutral Scale:
- Gray 900: #111827 (near-black body text)
- Gray 700: #374151 (secondary text)
- Gray 500: #6B7280 (muted text)
- Gray 300: #D1D5DB (borders)
- Gray 100: #F3F4F6 (light backgrounds)
- White: #FFFFFF

Verified against: screenshots of live site
```

#### 2.2 Typography System

```
Font Families:
- Primary: [Identify from computed styles — likely Inter, DM Sans, or similar]
- Fallback: system-ui, -apple-system, sans-serif

Type Scale (rem, base 16px):
- xs: 0.75rem (12px) — legal footnotes
- sm: 0.875rem (14px) — captions, badges
- base: 1rem (16px) — body text
- lg: 1.125rem (18px) — card titles
- xl: 1.25rem (20px) — sub-headings
- 2xl: 1.5rem (24px) — section sub-headings
- 3xl: 1.875rem (30px) — H3 headings
- 4xl: 2.25rem (36px) — H2 headings
- 5xl: 3rem (48px) — H1 headings
- 6xl: 3.75rem (60px) — Hero headlines (desktop)

Font Weights:
- Regular: 400 — body text
- Medium: 500 — nav links, labels
- Semibold: 600 — card titles, feature items
- Bold: 700 — section headings
- Extrabold: 800 — hero headlines

Line Heights:
- Tight: 1.25 — headlines
- Normal: 1.5 — body text
- Relaxed: 1.75 — long-form legal content
```

#### 2.3 Spacing System

```
Base unit: 4px (0.25rem)

Scale:
- 1: 4px   (0.25rem)
- 2: 8px   (0.5rem)
- 3: 12px  (0.75rem)
- 4: 16px  (1rem)
- 5: 20px  (1.25rem)
- 6: 24px  (1.5rem)
- 8: 32px  (2rem)
- 10: 40px (2.5rem)
- 12: 48px (3rem)
- 16: 64px (4rem)
- 20: 80px (5rem)
- 24: 96px (6rem)
```

#### 2.4 Border Radius System

```
- none: 0
- sm: 4px   — small elements
- DEFAULT: 6px — buttons, inputs
- md: 8px   — cards
- lg: 12px  — large cards
- xl: 16px  — panels
- 2xl: 24px — hero sections
- full: 9999px — pills, badges, avatars
```

#### 2.5 Shadow System

```
- sm: 0 1px 2px rgba(0,0,0,0.05)
- DEFAULT: 0 1px 3px rgba(0,0,0,0.1)
- md: 0 4px 6px rgba(0,0,0,0.07)
- lg: 0 10px 15px rgba(0,0,0,0.1)
- xl: 0 20px 25px rgba(0,0,0,0.1)
- card: 0 2px 8px rgba(0,0,0,0.08)
```

#### 2.6 Icon Library

Choose and configure one icon library to use throughout:
- **Recommended:** Lucide Icons (MIT license, consistent style, React native)
- Alternative: Heroicons, Phosphor Icons

Document which icon maps to which semantic use (nav icons, section icons, CTA icons, social icons).

#### 2.7 Breakpoints

```
- mobile: 0 – 639px
- tablet: 640px – 1023px
- desktop: 1024px – 1279px
- wide: 1280px+
```

### Success Criteria for Phase 2

- [ ] All color tokens defined in a single source-of-truth file (CSS variables or JS tokens)
- [ ] Typography scale defined with consistent naming
- [ ] Spacing scale defined
- [ ] Breakpoints established in config
- [ ] Icon library chosen and configured
- [ ] Design token file committed to repo

---

## Phase 3: Component Library

### Goal

Build all reusable components in isolation before assembling pages. Each component should be independently testable and documented.

### Component Build Order (by priority)

#### P0 — Critical (Build First)

| Component | Used On |
|-----------|---------|
| `Button` (Primary, Secondary, Full-width variants) | Everywhere |
| `Navbar` | All pages |
| `Footer` | All pages |
| `PageHero` (Dark) | 8+ pages |
| `SectionBadge` | All pages |

#### P1 — High (Build Second)

| Component | Used On |
|-----------|---------|
| `TrustBadgeCard` | Home, About |
| `ContactCard` | Contact |
| `PricingCard` | Package |
| `CourseCard` | Courses |
| `TestimonialCard` | Home, Package, About |
| `AlertBox` (warning/success/info) | Legal pages, Home |
| `StatisticsStrip` | Home, Package |
| `FAQAccordion` | Home, Package, Why VR |

#### P2 — Medium (Build Third)

| Component | Used On |
|-----------|---------|
| `MarketTickerScroller` | Home |
| `LiveMarketWidget` | Home hero |
| `SearchBar` | Courses, 404 |
| `SidebarTableOfContents` | Legal pages |
| `LegalSectionBlock` | Legal pages |
| `InstructorCard` | Course Detail, About |
| `ContactForm` | Contact |
| `CTABanner` | Multiple |

#### P3 — Lower (Build Last in This Phase)

| Component | Used On |
|-----------|---------|
| `TabNavigation` | Course Detail |
| `ComparisonTable` | Why VR |
| `ProcessStep` | Home, About, Why VR |
| `SampleAlertPreview` | Package |
| `MetadataChip` | Legal pages, Course |
| `CourseTabNavigation` | Course Detail |
| `BlockquoteHighlight` | Legal pages |
| `ComplianceTable` | Grievance |

### Component Documentation Standard

Each component file should include:
```tsx
/**
 * ComponentName
 * 
 * Purpose: What this component does
 * Used on: Which pages use it
 * Variants: List of visual variants
 * 
 * @example
 * <ComponentName prop1="value" variant="primary" />
 */
```

### Success Criteria for Phase 3

- [ ] All P0 components built and visually verified
- [ ] All P1 components built and visually verified
- [ ] Components handle edge cases (empty states, long text, missing images)
- [ ] All components are responsive (mobile + desktop verified)
- [ ] No hardcoded colors — all use design tokens

---

## Phase 4: Page Development

### Goal

Assemble all pages using Phase 3 components. Build in priority order.

### Page Build Order

#### Sprint 1 — Fix Critical Issues (Week 1)

| Task | Priority |
|------|----------|
| Fix "Why VR" nav link (build page or remove link) | CRITICAL |
| Fix "RA Registration Disclosure" footer link | CRITICAL |
| Add "Package" / "Plans" to main navigation | HIGH |

#### Sprint 2 — Core Pages (Weeks 2–3)

| Page | Priority | New Content Needed |
|------|----------|--------------------|
| Homepage | Highest | Testimonials, Stats, How It Works, FAQ, WhatsApp preview |
| Package | High | Testimonials, Sample Alert, FAQ, Trust Signals |
| Why VR | High | Build from scratch (full new page) |

#### Sprint 3 — Inner Pages (Weeks 3–4)

| Page | Priority | Changes |
|------|----------|---------| 
| About | Medium | Add analyst bio, expand mission content |
| Contact | Medium | Add contact form, address map |
| Courses | Medium | Improve UX, add category filters |
| Course Detail | Medium | Expand content, fix enrollment flow |

#### Sprint 4 — Legal Pages (Week 4)

| Task | Notes |
|------|-------|
| Rebuild all legal pages with new component system | Content preserved; new layout |
| Fix mobile sidebar behavior | Accordion on mobile |
| Add horizontal scroll to Grievance table | Mobile fix |
| Verify all legal content is current and accurate | Content review |

#### Sprint 5 — Missing Pages (Week 4+)

| Page | Status | Action |
|------|--------|--------|
| RA Registration Disclosure | 404 | Build the page |
| ODR Portal | Unverified | Verify or build |
| User KYC | Unverified | Verify or build |
| User Consent | Unverified | Verify or build |
| Complaint Board | Unverified | Verify or build |

### Success Criteria for Phase 4

- [ ] All navigation links resolve (zero 404s)
- [ ] Every page renders correctly at desktop and mobile
- [ ] All CTAs link to correct destinations
- [ ] Contact form submits successfully
- [ ] Course enrollment flow is clear and functional
- [ ] All legal pages display correct, current content

---

## Phase 5: Animations & Motion

### Goal

Add purposeful motion that improves perceived quality without distracting from content.

### Animation Inventory

#### Page Load Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Navbar | Fade in from top | 200ms |
| Hero headline | Stagger words: fade + slide up | 400–600ms |
| Hero badge | Scale in | 200ms |
| Hero CTA buttons | Stagger: fade + slide up | 300–500ms |
| Market widget | Fade + scale in | 400ms |

#### Scroll-Triggered Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Trust badge cards | Stagger: fade + slide up | Enter viewport |
| Feature cards | Stagger: fade + scale | Enter viewport |
| Testimonial cards | Stagger: slide in from sides | Enter viewport |
| Statistics numbers | Count-up animation | Enter viewport |
| Pricing cards | Slide up + fade | Enter viewport |
| FAQ items | No entrance (accordion-based) | — |
| Legal sections | Gentle fade in | Enter viewport |

#### Interaction Micro-animations

| Element | Animation | Type |
|---------|-----------|------|
| CTA buttons | Scale 1.02 + shadow increase | Hover |
| Nav links | Color shift | Hover |
| Contact cards | Lift (translateY -4px) + shadow | Hover |
| Course cards | Lift + shadow | Hover |
| Pricing cards | Scale 1.01 | Hover |
| Social icons | Scale + brand color | Hover |
| FAQ accordion | Smooth expand/collapse | Click |
| Tab navigation | Sliding underline indicator | Click |
| Market ticker | Smooth continuous scroll | Always |

#### Route Transitions

| Transition | Animation |
|------------|-----------|
| Page enter | Fade in (150ms) |
| Page exit | Fade out (100ms) |

### Implementation Notes

- Use CSS transitions for simple hover states
- Use Framer Motion (if React) or CSS `@keyframes` for scroll animations
- **Always implement `prefers-reduced-motion`:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- Use `IntersectionObserver` for scroll-triggered animations
- Animations should enhance, not delay content

### Success Criteria for Phase 5

- [ ] All scroll animations trigger correctly
- [ ] All hover states are smooth (no janky transitions)
- [ ] Market ticker scrolls continuously without stuttering
- [ ] `prefers-reduced-motion` is respected
- [ ] Animations work on mobile (no performance issues)
- [ ] No layout shift caused by animations (CLS = 0)

---

## Phase 6: Responsive Design

### Goal

Ensure every page and component renders correctly across all device sizes.

### Testing Matrix

| Viewport | Width | Device Examples | Must Pass |
|----------|-------|-----------------|-----------|
| Mobile S | 375px | iPhone SE, older iPhones | Critical |
| Mobile M | 393px | iPhone 14 Pro | Critical |
| Mobile L | 430px | iPhone 14 Pro Max | Critical |
| Android | 360px | Samsung budget phones | Critical |
| Tablet P | 768px | iPad Mini | High |
| Tablet L | 1024px | iPad Pro | High |
| Desktop | 1280px | 13" laptop | Critical |
| Wide | 1440px | 15" laptop, external monitor | High |
| Ultra-wide | 1920px+ | Large monitors | Medium |

### Component-Level Responsive Checklist

- [ ] Navbar: hamburger at mobile, full nav at desktop
- [ ] Hero: stacked on mobile, two-column on desktop
- [ ] Trust badge cards: 2×2 on tablet, 1×4 on desktop
- [ ] Pricing cards: stacked on mobile, side-by-side on desktop
- [ ] Feature card grids: 1/2/4 column by breakpoint
- [ ] Contact cards: stacked on mobile, 3-column on desktop
- [ ] Legal pages: accordion TOC on mobile, sidebar on desktop
- [ ] Footer: stacked columns on mobile, 4-column on desktop
- [ ] Market ticker: readable at all widths, no overflow
- [ ] Course grid: 1 column mobile, 2–3 column desktop
- [ ] Tables: horizontal scroll wrapper on mobile

### Success Criteria for Phase 6

- [ ] Zero horizontal scroll at any breakpoint
- [ ] All touch targets ≥ 44px on mobile
- [ ] No overlapping elements at any breakpoint
- [ ] Font size ≥ 16px for body text on mobile
- [ ] Footer disclaimer ≥ 12px on mobile
- [ ] Images scale correctly (no overflow, no distortion)

---

## Phase 7: Accessibility

### Goal

Meet WCAG 2.1 AA compliance minimum.

### Accessibility Audit Checklist

#### Perceivable

- [ ] All images have descriptive `alt` attributes
- [ ] Videos have captions (if any added)
- [ ] Color is not the only way information is conveyed (e.g., form errors show text, not just red border)
- [ ] Body text contrast ≥ 4.5:1 against background
- [ ] Large text contrast ≥ 3:1
- [ ] Footer disclaimer text is legible (minimum 12px, fix contrast)
- [ ] Market ticker can be paused (motion preference)

#### Operable

- [ ] All interactive elements reachable by keyboard (Tab key)
- [ ] Focus indicators are clearly visible (not outline:none without replacement)
- [ ] Skip-to-main-content link at top of page
- [ ] No keyboard traps in drawers/modals
- [ ] Market ticker respects `prefers-reduced-motion`

#### Understandable

- [ ] Page language is set (`<html lang="en">`)
- [ ] Form inputs have associated labels
- [ ] Error messages are descriptive (not just "Error")
- [ ] Navigation is consistent across pages

#### Robust

- [ ] HTML is valid (no unclosed tags, correct nesting)
- [ ] ARIA roles are used correctly (not overused)
- [ ] Site works with screen readers (test with VoiceOver/NVDA)

### Success Criteria for Phase 7

- [ ] Lighthouse Accessibility score ≥ 95
- [ ] axe DevTools scan shows zero critical violations
- [ ] Manual keyboard navigation test passes
- [ ] Skip link works correctly

---

## Phase 8: Performance

### Goal

Achieve Core Web Vitals "Good" thresholds on all pages.

### Target Metrics

| Metric | Target | Priority |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | Critical |
| INP (Interaction to Next Paint) | < 200ms | High |
| CLS (Cumulative Layout Shift) | < 0.1 | High |
| FCP (First Contentful Paint) | < 1.8s | High |
| TTFB (Time to First Byte) | < 600ms | Medium |
| Lighthouse Performance | ≥ 90 | High |

### Optimization Tasks

#### Images

- [ ] Convert all images to WebP format
- [ ] Implement `srcset` for responsive images
- [ ] Lazy load all below-fold images
- [ ] Specify explicit `width` and `height` on all images (prevent CLS)
- [ ] Compress course thumbnail (target < 100KB)

#### JavaScript

- [ ] Code-split routes (load only JS for current page)
- [ ] Lazy load the live market widget (heavy JS)
- [ ] Remove unused dependencies
- [ ] Tree-shake icon library

#### Fonts

- [ ] Self-host fonts (or use `font-display: swap`)
- [ ] Preload critical fonts in `<head>`
- [ ] Use only 2–3 font weights per typeface

#### CSS

- [ ] Remove unused CSS (PurgeCSS or equivalent)
- [ ] Critical CSS inlined in `<head>`

#### Caching

- [ ] Static assets on CDN
- [ ] Cache headers for images (1 year), JS/CSS (versioned)

### Success Criteria for Phase 8

- [ ] Google PageSpeed Insights: ≥ 90 on mobile
- [ ] Google PageSpeed Insights: ≥ 95 on desktop
- [ ] LCP < 2.5s on mobile
- [ ] CLS < 0.1

---

## Phase 9: SEO

### Goal

Implement all on-page and technical SEO to maximize organic discoverability.

### SEO Task List

#### Technical SEO

- [ ] Generate and submit XML sitemap to Google Search Console
- [ ] Verify `robots.txt` is correct
- [ ] Fix all 404 pages (Why VR, RA Registration Disclosure)
- [ ] Implement canonical tags on all pages
- [ ] Verify HTTPS redirect (HTTP → HTTPS)
- [ ] Add `hreflang` if multilingual support is planned

#### On-Page SEO

- [ ] Write unique `<title>` for every page (max 60 chars primary portion)
- [ ] Write unique meta descriptions for every page (max 155 chars)
- [ ] Ensure one `<h1>` per page, semantically correct
- [ ] Ensure heading hierarchy is correct (h1 → h2 → h3, no skipping)
- [ ] Add `alt` text to all images
- [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) to all pages
- [ ] Create OG images for each page (1200×630px)
- [ ] Add Twitter Card tags

#### Structured Data (JSON-LD)

- [ ] `Organization` schema on homepage
- [ ] `Person` schema for analyst on About page
- [ ] `Course` schema on each course detail page
- [ ] `LocalBusiness` schema with registered address
- [ ] `BreadcrumbList` schema on all inner pages
- [ ] `FAQPage` schema when FAQ section is built
- [ ] `WebSite` + `SearchAction` schema on homepage

#### Content SEO

- [ ] Expand Package page content (400+ words for better indexing)
- [ ] Build Why VR page (target: 800+ words, comparison content)
- [ ] Expand About page content (400+ words)
- [ ] Plan blog/insights section (Phase 9 scoping only)

### Success Criteria for Phase 9

- [ ] Google Search Console: zero coverage errors
- [ ] All pages have unique titles and meta descriptions
- [ ] Structured data validates in Google Rich Results Test
- [ ] OG images display correctly when shared on WhatsApp/social

---

## Phase 10: Production Ready

### Goal

Final quality gate before launch.

### Pre-Launch Checklist

#### Functionality

- [ ] All navigation links work (zero 404s in the new build)
- [ ] All WhatsApp links open correctly on mobile
- [ ] Contact form submits and sends notifications
- [ ] Course enrollment flow works (sign-up → access)
- [ ] Legal pages display complete, current content
- [ ] Market ticker displays live data
- [ ] Search on Courses page works

#### Design

- [ ] All pages match the approved design across all breakpoints
- [ ] No placeholder text or images remain (no "Lorem ipsum")
- [ ] All CTAs link to correct destinations
- [ ] Footer content is complete and accurate (SEBI reg, contact info)
- [ ] All broken links from Phase 1 are fixed

#### Compliance

- [ ] SEBI registration number (INH000027593) visible on every page
- [ ] Risk disclaimer present on homepage
- [ ] All required legal pages exist and contain current content
- [ ] Refund policy clearly states terms
- [ ] Disclaimer clarifies research ≠ investment advice

#### Analytics & Monitoring

- [ ] Google Analytics / Plausible installed
- [ ] Conversion events tracked: WhatsApp click, Course enrollment, Plan inquiry
- [ ] Google Search Console connected
- [ ] Error monitoring set up (Sentry or equivalent)

#### Performance

- [ ] Lighthouse scores ≥ 90 on all pages
- [ ] Core Web Vitals in "Good" range

#### Security

- [ ] HTTPS enforced
- [ ] No sensitive data exposed in client code
- [ ] Contact form has CSRF protection and rate limiting

### Launch Steps

1. Deploy to production environment
2. Verify DNS and SSL certificate
3. Submit sitemap to Google Search Console
4. Test all pages on production URL
5. Monitor error logs for 48 hours post-launch
6. Check Google Analytics is receiving data
7. Share launch announcement on WhatsApp community

### Post-Launch: 30-Day Monitoring

- [ ] Monitor Core Web Vitals in Search Console
- [ ] Track conversion rate: WhatsApp joins, Course starts, Plan inquiries
- [ ] Monitor 404 errors in Search Console
- [ ] Check user behavior in analytics (bounce rate, time on page, exit pages)
- [ ] Review contact form submissions
- [ ] Gather user feedback from WhatsApp community

---

## Dependency Graph

```
Phase 1 (Analysis) ──► Phase 2 (Design System) ──► Phase 3 (Components)
                                                            │
                                              ┌─────────────┘
                                              │
                                    Phase 4 (Pages)
                                              │
                          ┌───────────────────┼───────────────────┐
                          │                   │                   │
                 Phase 5 (Animations)  Phase 6 (Responsive)  Phase 7 (A11y)
                          │                   │                   │
                          └───────────────────┼───────────────────┘
                                              │
                                    Phase 8 (Performance)
                                              │
                                      Phase 9 (SEO)
                                              │
                                  Phase 10 (Production)
```

Phases 5, 6, and 7 can run in parallel after Phase 4 is complete.
Phases 8 and 9 require Phases 5–7 to be done.
Phase 10 requires all prior phases.
