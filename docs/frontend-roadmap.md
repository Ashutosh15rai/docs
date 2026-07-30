# Frontend Development Roadmap — Vriddhi Research

> Phase 3 through Phase 10 implementation plan. Phase 1 (Analysis) and Phase 2 (Design System) are complete. This document governs the build sequence from first component to production launch.

---

## Roadmap Summary

| Phase | Title | Duration | Dependencies |
|-------|-------|---------|-------------|
| **Phase 2** | Design System Documentation | ✅ Complete | Phase 1 |
| **Phase 3** | Project Setup + Component Library | 2–3 weeks | Phase 2 |
| **Phase 4** | Page Development | 3–4 weeks | Phase 3 |
| **Phase 5** | Motion & Animations | 1–2 weeks | Phase 4 |
| **Phase 6** | Responsive QA | 1 week | Phase 5 |
| **Phase 7** | Accessibility Audit | 1 week | Phase 6 |
| **Phase 8** | Performance Optimization | 1 week | Phase 7 |
| **Phase 9** | SEO Implementation | 1 week | Phase 8 |
| **Phase 10** | Production Launch | 1 week | Phase 9 |

**Total from Phase 3:** 12–16 weeks

---

## Phase 3: Project Setup + Component Library

**Goal:** Working Next.js 15 project with full design token system and every reusable component built and visually verified in isolation.

### 3.1 Project Initialization

```bash
# Create Next.js 15 project
npx create-next-app@latest vriddhi-research \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd vriddhi-research

# Install core dependencies
pnpm add framer-motion lenis lucide-react
pnpm add react-hook-form @hookform/resolvers zod
pnpm add clsx tailwind-merge
pnpm add sonner                          # Toast notifications
pnpm add next-sitemap                    # Sitemap generation

# Dev dependencies
pnpm add -D @types/node prettier eslint-config-prettier

# Initialize shadcn/ui
npx shadcn@latest init
# Choose: New York style, CSS variables, slate base color (we override everything)

# Add shadcn/ui components
npx shadcn@latest add button input select textarea checkbox \
  dialog sheet accordion tabs badge card separator skeleton tooltip sonner
```

### 3.2 Configuration Files

**Checklist:**
- [ ] `tailwind.config.ts` — custom navy colors, whatsapp color, custom animations, token references
- [ ] `src/styles/tokens.css` — all CSS custom properties from `docs/design-tokens.md`
- [ ] `src/app/globals.css` — imports tokens.css, resets, base typography, keyframes
- [ ] `tsconfig.json` — strict mode, `@/*` path alias
- [ ] `next.config.ts` — image domains, experimental features
- [ ] `.env.example` — all required env var keys documented
- [ ] `components.json` — shadcn/ui config (style: new-york, rsc: true, tsx: true)
- [ ] `.prettierrc` — consistent formatting
- [ ] `src/lib/fonts.ts` — Inter variable font configuration
- [ ] `src/lib/utils.ts` — `cn()`, `formatPrice()`, `formatWhatsAppLink()`
- [ ] `src/constants/site.ts` — SITE object with all URLs, prices, contacts
- [ ] `src/constants/navigation.ts` — nav link arrays

### 3.3 Component Build Order

**Week 1 — P0 Critical:**

| Task | Component | File |
|------|-----------|------|
| ☐ | SectionBadge | `src/components/shared/SectionBadge.tsx` |
| ☐ | PrimaryButton | `src/components/shared/buttons/PrimaryButton.tsx` |
| ☐ | SecondaryButton | `src/components/shared/buttons/SecondaryButton.tsx` |
| ☐ | FullWidthButton | `src/components/shared/buttons/FullWidthButton.tsx` |
| ☐ | Container | `src/components/layout/Container.tsx` |
| ☐ | SectionWrapper | `src/components/layout/SectionWrapper.tsx` |
| ☐ | SkipToMain | `src/components/layout/SkipToMain.tsx` |
| ☐ | NavLogo | `src/components/layout/Navbar/NavLogo.tsx` |
| ☐ | NavLinks | `src/components/layout/Navbar/NavLinks.tsx` |
| ☐ | NavActions | `src/components/layout/Navbar/NavActions.tsx` |
| ☐ | MobileDrawer | `src/components/layout/Navbar/MobileDrawer.tsx` |
| ☐ | Navbar | `src/components/layout/Navbar/index.tsx` |
| ☐ | FooterBrandColumn | `src/components/layout/Footer/FooterBrandColumn.tsx` |
| ☐ | FooterNavColumn | `src/components/layout/Footer/FooterNavColumn.tsx` |
| ☐ | FooterDisclaimerBar | `src/components/layout/Footer/FooterDisclaimerBar.tsx` |
| ☐ | Footer | `src/components/layout/Footer/index.tsx` |
| ☐ | PageHero (standard) | `src/components/layout/PageHero/index.tsx` |
| ☐ | LegalPageHero | `src/components/layout/PageHero/LegalPageHero.tsx` |
| ☐ | Root layout | `src/app/layout.tsx` |

**Week 2 — P1 High:**

| Task | Component | File |
|------|-----------|------|
| ☐ | TrustBadgeCard (light + dark) | `src/components/shared/TrustBadgeCard.tsx` |
| ☐ | ContactCard | `src/components/shared/ContactCard.tsx` |
| ☐ | PricingCard | `src/components/shared/PricingCard.tsx` |
| ☐ | CourseCard | `src/components/shared/CourseCard.tsx` |
| ☐ | TestimonialCard | `src/components/shared/TestimonialCard.tsx` |
| ☐ | InstructorCard | `src/components/shared/InstructorCard.tsx` |
| ☐ | AlertBox | `src/components/shared/AlertBox.tsx` |
| ☐ | StatisticsStrip | `src/components/shared/StatisticsStrip.tsx` |
| ☐ | FAQAccordion | `src/components/shared/FAQAccordion.tsx` |
| ☐ | CTABanner | `src/components/shared/CTABanner.tsx` |
| ☐ | ProcessStep | `src/components/shared/ProcessStep.tsx` |
| ☐ | ComparisonTable | `src/components/shared/ComparisonTable.tsx` |

**Week 3 — P2 Medium:**

| Task | Component | File |
|------|-----------|------|
| ☐ | LoadingSkeleton | `src/components/shared/LoadingSkeleton.tsx` |
| ☐ | MarketTickerScroller | `src/components/data/MarketTickerScroller.tsx` |
| ☐ | LiveMarketWidget | `src/components/data/LiveMarketWidget.tsx` |
| ☐ | MarketDataBadge | `src/components/data/MarketDataBadge.tsx` |
| ☐ | SearchBar | `src/components/forms/SearchBar.tsx` |
| ☐ | ContactForm | `src/components/forms/ContactForm.tsx` |
| ☐ | LegalSectionBlock | `src/components/legal/LegalSectionBlock.tsx` |
| ☐ | SidebarTableOfContents | `src/components/legal/SidebarTableOfContents.tsx` |
| ☐ | LegalContentLayout | `src/sections/legal/LegalContentLayout.tsx` |
| ☐ | TabNavigation | `src/components/shared/TabNavigation.tsx` |
| ☐ | SampleAlertPreview | `src/components/shared/SampleAlertPreview.tsx` |

**Week 4 — P3 Supporting + Animation Wrappers:**

| Task | Component | File |
|------|-----------|------|
| ☐ | ComplianceTable | `src/components/legal/ComplianceTable.tsx` |
| ☐ | MetadataChip | `src/components/shared/MetadataChip.tsx` |
| ☐ | BlockquoteHighlight | `src/components/legal/BlockquoteHighlight.tsx` |
| ☐ | SEBIBadge | `src/components/shared/SEBIBadge.tsx` |
| ☐ | Breadcrumb | `src/components/shared/Breadcrumb.tsx` |
| ☐ | EmptyState | `src/components/shared/EmptyState.tsx` |
| ☐ | ScrollReveal | `src/components/animations/ScrollReveal.tsx` |
| ☐ | StaggerContainer | `src/components/animations/StaggerContainer.tsx` |
| ☐ | CountUp | `src/components/animations/CountUp.tsx` |
| ☐ | PageTransition | `src/components/animations/PageTransition.tsx` |

### 3.4 Phase 3 Success Criteria

- [ ] All P0, P1, P2 components built
- [ ] All components render correctly at 375px and 1280px
- [ ] All components pass keyboard navigation test
- [ ] No component hard-codes colors (all use design tokens)
- [ ] All animated components use `useMotionSafe()` hook
- [ ] `prefers-reduced-motion` verified working
- [ ] All form inputs have `<label>` elements
- [ ] Lighthouse Accessibility score: ≥ 95 on component test pages

---

## Phase 4: Page Development

**Goal:** All pages built using Phase 3 components. Every navigation link resolves (zero 404s).

### Sprint 1 — Critical Fixes (Days 1–3)

These three items before any page assembly begins:

| Task | Priority | Notes |
|------|---------|-------|
| ☐ Build `/why-vr` page shell | CRITICAL | Nav link currently 404 |
| ☐ Build `/ra-registration-disclosure` | CRITICAL | Footer link currently 404, SEBI compliance risk |
| ☐ Add "Plans" to main navigation | HIGH | Currently footer-only — revenue page |

### Sprint 2 — Core Pages (Week 1–2)

| Page | File | Sections |
|------|------|---------|
| ☐ Homepage `/` | `src/app/page.tsx` | HeroSection, MarketTickerBar, TrustBadgesSection, HowItWorksSection, StatisticsSection, TestimonialsSection, FeaturedCourseSection, FAQSection, PreFooterCTA |
| ☐ Package `/package` | `src/app/package/page.tsx` | PageHero, PricingCardsSection, PackageTestimonials, SampleAlertSection, PackageFAQ, TrustSignalsRow, RefundSummary, PreFooterCTA |
| ☐ Why VR `/why-vr` | `src/app/why-vr/page.tsx` | PageHero, ComparisonSection, MethodologySection, TrackRecordSection, WhyVRTestimonials, WhyVRFAQ, PreFooterCTA |

### Sprint 3 — Inner Pages (Week 2–3)

| Page | File | Notes |
|------|------|-------|
| ☐ About `/about` | `src/app/about/page.tsx` | Add analyst bio, credentials, philosophy sections |
| ☐ Contact `/contact` | `src/app/contact/page.tsx` | Add ContactForm section |
| ☐ Courses `/courses` | `src/app/courses/page.tsx` | Add filters, improve empty state |
| ☐ Course Detail `/courses/[slug]` | `src/app/courses/[slug]/page.tsx` | Add learning outcomes, expand content |

### Sprint 4 — Legal Pages (Week 3–4)

All legal pages use the same layout: `LegalPageHero` + `LegalContentLayout` (sidebar TOC + content).

| Page | File |
|------|------|
| ☐ `/disclosure` | `src/app/disclosure/page.tsx` |
| ☐ `/privacy-policy` | `src/app/privacy-policy/page.tsx` |
| ☐ `/refund-policy` | `src/app/refund-policy/page.tsx` |
| ☐ `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` |
| ☐ `/disclaimer` | `src/app/disclaimer/page.tsx` |
| ☐ `/grievance-redressal` | `src/app/grievance-redressal/page.tsx` |
| ☐ `/onboard-details` | `src/app/onboard-details/page.tsx` |
| ☐ `/ra-registration-disclosure` | `src/app/ra-registration-disclosure/page.tsx` |
| ☐ `/odr-portal` | `src/app/odr-portal/page.tsx` |
| ☐ `/user-kyc` | `src/app/user-kyc/page.tsx` |
| ☐ `/user-consent` | `src/app/user-consent/page.tsx` |
| ☐ `/complaint-board` | `src/app/complaint-board/page.tsx` |

### Sprint 5 — Error Pages (Week 4)

| Page | File | Requirements |
|------|------|-------------|
| ☐ 404 `/not-found` | `src/app/not-found.tsx` | On-brand, search bar, suggested links, WhatsApp CTA |
| ☐ Runtime Error | `src/app/error.tsx` | Branded error state, retry button |

### Phase 4 Success Criteria

- [ ] Zero 404 errors on any navigation link (main nav, footer, in-page links)
- [ ] All pages render at 375px and 1280px without horizontal scroll
- [ ] Contact form submits and shows success state
- [ ] Course enrollment CTA has clear user path (auth or free access)
- [ ] All legal pages have correct, complete content
- [ ] "Plans" visible in main navigation on desktop and mobile
- [ ] SEBI reg number `INH000027593` visible on every page

---

## Phase 5: Motion & Animations

**Goal:** Full motion system applied to all pages. Premium, smooth animations throughout.

### Animation Implementation Order

| Priority | Element | Animation Type | Component |
|---------|---------|---------------|---------|
| ☐ P0 | Hero entrance sequence | Page load stagger | HeroSection |
| ☐ P0 | Page transitions | Route fade | PageTransition |
| ☐ P0 | Mobile drawer | Slide from right | MobileDrawer |
| ☐ P1 | Trust badge cascade | Scroll stagger | TrustBadgesSection |
| ☐ P1 | Pricing cards | Scroll slide-up | PricingCardsSection |
| ☐ P1 | Testimonials | Alternating sides | TestimonialsSection |
| ☐ P1 | FAQ accordion | Height expand | FAQAccordion |
| ☐ P2 | Statistics count-up | Counter animation | StatisticsSection |
| ☐ P2 | Section headings | Scroll fade-up | All section headings |
| ☐ P2 | Contact cards | Scroll cascade | ContactChannelCards |
| ☐ P2 | Course cards | Scroll stagger | CoursesGrid |
| ☐ P3 | Timeline sequence | Draw + reveal | TimelineSection (if added) |
| ☐ P3 | Legal sections | Gentle fade | Legal content sections |
| ☐ P3 | Button hover | Scale + glow | All CTAs |
| ☐ P3 | Card hover | Lift + shadow | CSS only (not Framer) |

### Phase 5 Success Criteria

- [ ] Hero sequence plays in ≤ 1200ms total
- [ ] All scroll animations use `viewport={{ once: true }}`
- [ ] Market ticker scrolls continuously without stuttering
- [ ] Market ticker pauses on hover
- [ ] `prefers-reduced-motion` tested and working (all animations off)
- [ ] No CLS from any animation (Lighthouse CLS < 0.05)
- [ ] Page transitions under 400ms
- [ ] Mobile: reduced y-offset (12px), compressed stagger (50ms)

---

## Phase 6: Responsive QA

**Goal:** Every page verified at every major breakpoint. Zero horizontal scroll.

### Testing Matrix

| Viewport | Width | Tool | Pages to Test |
|---------|-------|------|--------------|
| iPhone SE | 375px | Browser DevTools | All pages |
| iPhone 14 Pro | 393px | Browser DevTools | All pages |
| iPhone Pro Max | 430px | Browser DevTools | Homepage, Package |
| Galaxy S22 | 360px | Browser DevTools | All pages |
| iPad Mini | 768px | Browser DevTools | All pages |
| MacBook 13" | 1280px | Real device or DevTools | All pages |

### Responsive Checklist (Per Page)

- [ ] No horizontal scroll at 375px
- [ ] All touch targets ≥ 44px
- [ ] CTA buttons full-width on mobile
- [ ] Two-column layouts collapse to single column
- [ ] Legal page sidebar becomes accordion on mobile
- [ ] Pricing cards stacked (quarterly first) on mobile
- [ ] Mobile nav drawer contains all pages including Plans

---

## Phase 7: Accessibility Audit

**Goal:** WCAG 2.1 AA compliance. Lighthouse score ≥ 95.

### Audit Process

1. **Automated:** Run axe DevTools on every page — zero critical/serious violations
2. **Semi-automated:** Run Lighthouse Accessibility audit — score ≥ 95
3. **Manual keyboard:** Tab through every interactive element on every page
4. **Screen reader:** Test Navbar, FAQ, Contact Form, Legal pages with VoiceOver
5. **Zoom:** Test all pages at 200% browser zoom — no horizontal overflow, content readable

### Phase 7 Checklist

- [ ] axe DevTools: zero critical violations on all pages
- [ ] Lighthouse Accessibility: ≥ 95 on all pages
- [ ] Skip link works on all pages
- [ ] All form inputs have labels
- [ ] FAQ accordion keyboard operable
- [ ] Mobile drawer focus trap active
- [ ] Mobile drawer closes on Escape
- [ ] Market ticker `aria-hidden` with `sr-only` alternative
- [ ] All images have `alt` text
- [ ] Color + icon used for market data (not color alone)
- [ ] Footer disclaimer ≥ 12px

---

## Phase 8: Performance Optimization

**Goal:** Core Web Vitals "Good" on all pages.

### Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| FCP | < 1.8s |
| Lighthouse Performance | ≥ 90 (mobile) |

### Optimization Tasks

- [ ] All images: WebP format, explicit width/height, srcset/sizes
- [ ] Hero image: `priority` attribute
- [ ] Market widget: `dynamic({ ssr: false })` with skeleton
- [ ] Code split: each route loads only its JS
- [ ] Fonts: `display: swap`, `preload: true`
- [ ] Sitemap: generated via `next-sitemap`
- [ ] Run Lighthouse on mobile — score ≥ 90

---

## Phase 9: SEO

**Goal:** All pages have unique titles, descriptions, and structured data.

### Per-Page Metadata

| Page | Title | Description |
|------|-------|-------------|
| / | `Vriddhi Research — SEBI Registered Research Analyst \| Learn Markets Through Logic & Research` | SEBI-registered research for Nifty, Bank Nifty options. Free trading community + structured courses. INH000027593. |
| /about | `About Vriddhi Research \| SEBI RA INH000027593 \| Yeshwant Bhisham Valecha` | Research-first, education-driven SEBI registered analyst. |
| /why-vr | `Why Choose Vriddhi Research \| SEBI vs Unregulated Tip Providers` | Compare regulated SEBI research vs unregulated tips providers. |
| /courses | `Stock Market Courses \| Free Options Trading \| Vriddhi Research` | Free options mastery program + more courses coming. |
| /package | `Research Plans & Pricing \| Monthly ₹24,999 \| Vriddhi Research` | Nifty + Bank Nifty trade alerts via WhatsApp. Monthly or quarterly. |
| /contact | `Contact Vriddhi Research \| WhatsApp \| Email \| Support` | Reach our team via WhatsApp, email, or phone. |

### Structured Data Checklist

- [ ] `Organization` schema — Homepage
- [ ] `Person` schema — About page (Yeshwant Bhisham Valecha)
- [ ] `Course` schema — Course detail pages
- [ ] `FAQPage` schema — FAQ sections on all pages
- [ ] `BreadcrumbList` — All inner pages
- [ ] `LocalBusiness` — Contact page
- [ ] `WebSite` + `SearchAction` — Homepage

### OG Image Checklist

Create 1200×630px images for:
- [ ] Homepage
- [ ] About
- [ ] Why VR
- [ ] Courses
- [ ] Package
- [ ] Default (all other pages)

---

## Phase 10: Production Launch

**Goal:** Zero defects. Launch-ready.

### Pre-Launch Checklist

**Navigation:**
- [ ] Zero 404s on any navigation link
- [ ] "Why VR" page live and linked from nav
- [ ] "Plans" in main navigation
- [ ] "RA Registration Disclosure" page live

**Content:**
- [ ] No placeholder text ("Lorem ipsum") anywhere
- [ ] All prices correct (₹24,999 Monthly, ₹59,999 Quarterly)
- [ ] SEBI reg number `INH000027593` on every page
- [ ] WhatsApp links work and open correct group/chat
- [ ] All phone numbers wrapped in `tel:` links
- [ ] All email addresses wrapped in `mailto:` links

**Compliance:**
- [ ] Risk disclaimer on homepage
- [ ] All required SEBI legal pages exist
- [ ] "EXAMPLE ONLY" badges on all SampleAlertPreview components
- [ ] Footer disclaimer readable (≥ 12px, not all-caps)

**Performance:**
- [ ] Lighthouse ≥ 90 on all pages (mobile)
- [ ] Core Web Vitals "Good" in Search Console

**Analytics:**
- [ ] Google Analytics / Plausible installed and receiving events
- [ ] Conversion events tracked: WhatsApp join click, Course CTA click, Plan inquiry click
- [ ] Google Search Console verified

### Launch Sequence

```
Day 1: Final QA across all pages (all devices)
Day 2: Deploy to production hosting
Day 3: DNS propagation + SSL verification
Day 4: Submit sitemap to Google Search Console
Day 5: 48-hour monitoring (errors, 404s, Core Web Vitals)
Day 7: Announce in WhatsApp community
```

### Post-Launch Monitoring (30 Days)

- [ ] Monitor 404 errors in Search Console weekly
- [ ] Track Core Web Vitals trend in Search Console
- [ ] Review contact form submissions
- [ ] Monitor WhatsApp CTA click rate in analytics
- [ ] Gather feedback from WhatsApp community
- [ ] Review time-on-page for Package and Why VR pages
- [ ] Check mobile vs desktop traffic split

---

## Dependency Graph

```
Phase 2 (Design Docs — COMPLETE)
         │
         ▼
Phase 3 (Components)          ← 2–3 weeks
         │
         ▼
Phase 4 (Pages)               ← 3–4 weeks
         │
    ┌────┴────┬────────────┐
    ▼         ▼            ▼
Phase 5   Phase 6      Phase 7
(Motion) (Responsive) (A11y)   ← 1 week each, run in parallel
    │         │            │
    └────┬────┘────────────┘
         │
         ▼
Phase 8 (Performance)         ← 1 week
         │
         ▼
Phase 9 (SEO)                 ← 1 week
         │
         ▼
Phase 10 (Launch)             ← 1 week
```

Phases 5, 6, and 7 can run concurrently after Phase 4 is complete.
Phases 8 and 9 require all of 5–7 to be done.

---

## Key Decisions Made in Phase 2

These decisions affect Phase 3 implementation. Do not revisit without explicit requirement change:

| Decision | Rationale |
|---------|-----------|
| Inter as single typeface | Readability, mobile-native feel, single file load |
| Navy scale `#0B1120` as primary dark | Observed from Phase 1, refined for full scale |
| WhatsApp green `#25D366` exact | Official WhatsApp brand color, exact match required |
| CSS custom properties for all tokens | Enables future dark mode without component rewrites |
| No dark mode in Phase 3 | Audience demographic, complexity; defer to Phase 5+ |
| Framer Motion for complex animations | Market-standard, excellent React integration |
| CSS transitions for hover-only effects | Performance: no JS in the critical path for hover |
| `viewport={{ once: true }}` everywhere | No re-animation on back-scroll — cleaner UX |
| `dynamic({ ssr: false })` for market widget | Client-only: live data, avoids SSR hydration issues |
| shadcn/ui as component primitive layer | Accessible, unstyled, composable — perfect foundation |
| Server Actions for contact form | No separate API route needed, CSRF protected by default |
| Static data files for courses (not CMS) | 1 course doesn't need a CMS; extensible when catalog grows |
