# Folder Structure — Vriddhi Research

> Complete directory architecture for the Next.js 15 frontend rebuild. Every directory is intentional — its name, contents, and conventions are specified below.

---

## Root Structure

```
vriddhi-research/                    ← Project root
├── src/                             ← All application source code
│   ├── app/                         ← Next.js App Router pages and layouts
│   ├── components/                  ← All React components
│   ├── animations/                  ← Framer Motion variants and presets
│   ├── hooks/                       ← Custom React hooks
│   ├── services/                    ← External data fetching (market data, forms)
│   ├── styles/                      ← Global CSS, token files
│   ├── constants/                   ← Site-wide constants (URLs, prices, text)
│   ├── lib/                         ← Utilities, metadata factory, fonts, schemas
│   ├── types/                       ← TypeScript type definitions
│   └── data/                        ← Static data (courses, FAQs, navigation)
├── public/                          ← Static assets served at root URL
│   ├── images/                      ← Site images (logo, OG images, icons)
│   ├── fonts/                       ← Self-hosted fonts (if switching from Google Fonts)
│   └── icons/                       ← PWA icons, favicons
├── docs/                            ← Phase 1 + Phase 2 documentation (this file)
├── .env.local                       ← Local environment variables (gitignored)
├── .env.example                     ← Template for environment variables
├── tailwind.config.ts               ← Tailwind configuration with custom tokens
├── tsconfig.json                    ← TypeScript configuration (strict mode)
├── next.config.ts                   ← Next.js configuration
├── components.json                  ← shadcn/ui configuration
├── postcss.config.js                ← PostCSS (Tailwind plugin)
├── .eslintrc.json                   ← ESLint rules
├── .prettierrc                      ← Prettier formatting rules
└── package.json                     ← Dependencies and scripts
```

---

## `src/app/` — Pages and Layouts

```
src/app/
├── layout.tsx                       ← Root layout: fonts, body, providers, global metadata
├── globals.css                      ← CSS reset, token imports, base styles, keyframes
├── page.tsx                         ← Homepage (/)
├── not-found.tsx                    ← Global 404 page
├── error.tsx                        ← Runtime error boundary
├── global-error.tsx                 ← Root error boundary (layout failures)
│
├── about/
│   └── page.tsx                     ← /about
│
├── contact/
│   ├── page.tsx                     ← /contact
│   └── actions.ts                   ← Server action: contact form submission
│
├── why-vr/
│   └── page.tsx                     ← /why-vr (new page — was 404)
│
├── courses/
│   ├── page.tsx                     ← /courses (listing + search)
│   └── [slug]/
│       └── page.tsx                 ← /courses/[slug] (course detail)
│
├── package/
│   └── page.tsx                     ← /package (pricing plans)
│
├── disclosure/
│   └── page.tsx                     ← /disclosure
│
├── privacy-policy/
│   └── page.tsx                     ← /privacy-policy
│
├── refund-policy/
│   └── page.tsx                     ← /refund-policy
│
├── terms-and-conditions/
│   └── page.tsx                     ← /terms-and-conditions
│
├── disclaimer/
│   └── page.tsx                     ← /disclaimer
│
├── grievance-redressal/
│   └── page.tsx                     ← /grievance-redressal
│
├── onboard-details/
│   └── page.tsx                     ← /onboard-details
│
├── ra-registration-disclosure/
│   └── page.tsx                     ← /ra-registration-disclosure (new — was 404)
│
├── odr-portal/
│   └── page.tsx                     ← /odr-portal
│
├── user-kyc/
│   └── page.tsx                     ← /user-kyc
│
├── user-consent/
│   └── page.tsx                     ← /user-consent
│
└── complaint-board/
    └── page.tsx                     ← /complaint-board
```

**Conventions:**
- `page.tsx` = React Server Component by default
- `actions.ts` = Server Actions (co-located with the page that uses them)
- `layout.tsx` = Nested layouts (if needed for groups like legal pages)
- `loading.tsx` = Suspense boundary fallback (auto-used by Next.js)
- `error.tsx` = Error boundary (auto-used by Next.js)

---

## `src/components/` — All React Components

```
src/components/
├── ui/                              ← shadcn/ui primitives (generated, then customized)
│   ├── button.tsx                   ← Base Button primitive
│   ├── input.tsx                    ← Base Input primitive
│   ├── select.tsx                   ← Base Select primitive
│   ├── textarea.tsx                 ← Base Textarea primitive
│   ├── checkbox.tsx                 ← Base Checkbox primitive
│   ├── dialog.tsx                   ← Base Dialog/Modal primitive
│   ├── sheet.tsx                    ← Base Sheet/Drawer primitive
│   ├── accordion.tsx                ← Base Accordion primitive
│   ├── tabs.tsx                     ← Base Tabs primitive
│   ├── badge.tsx                    ← Base Badge primitive
│   ├── card.tsx                     ← Base Card primitive
│   ├── separator.tsx                ← Base Separator primitive
│   ├── skeleton.tsx                 ← Base Skeleton primitive
│   ├── sonner.tsx                   ← Toast notification (Sonner)
│   └── tooltip.tsx                  ← Base Tooltip primitive
│
├── layout/                          ← Global layout components (appear on every page)
│   ├── Navbar/
│   │   ├── index.tsx                ← Navbar (server shell)
│   │   ├── NavLinks.tsx             ← Desktop nav links (client: active state)
│   │   ├── NavActions.tsx           ← CTA buttons
│   │   └── MobileDrawer.tsx         ← Mobile hamburger + drawer (client)
│   ├── Footer/
│   │   ├── index.tsx                ← Footer layout (server)
│   │   ├── FooterBrandColumn.tsx    ← Logo, tagline, SEBI, social icons
│   │   ├── FooterNavColumn.tsx      ← Generic link column (Navigate/Legal/Compliance)
│   │   └── FooterDisclaimerBar.tsx  ← Full-width legal disclaimer + copyright
│   ├── PageHero/
│   │   ├── index.tsx                ← Dark navy hero (inner pages)
│   │   └── LegalPageHero.tsx        ← Hero variant with metadata row
│   ├── SkipToMain.tsx               ← Accessibility skip link (first element in body)
│   ├── Container.tsx                ← Max-width centered container wrapper
│   └── SectionWrapper.tsx           ← Section with background + vertical padding
│
├── sections/                        ← Page-level section compositions (server by default)
│   ├── home/
│   │   ├── HeroSection.tsx          ← Homepage hero with live market widget
│   │   ├── MarketTickerBar.tsx      ← Full-width scrolling ticker
│   │   ├── TrustBadgesSection.tsx   ← 4-badge trust bar
│   │   ├── HowItWorksSection.tsx    ← 3-step process section
│   │   ├── StatisticsSection.tsx    ← Numbers strip (community, trades, years)
│   │   ├── TestimonialsSection.tsx  ← Member testimonials
│   │   ├── FeaturedCourseSection.tsx ← Course teaser
│   │   ├── WhatsAppCommunitySection.tsx ← Community preview
│   │   ├── FAQSection.tsx           ← Accordion FAQ
│   │   └── PreFooterCTA.tsx         ← Final CTA before footer
│   ├── about/
│   │   ├── AboutFeatureCards.tsx
│   │   ├── MissionSection.tsx
│   │   ├── AnalystBioSection.tsx
│   │   ├── CredentialsSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   └── AboutCTASection.tsx
│   ├── why-vr/
│   │   ├── ComparisonSection.tsx    ← VR vs unregulated providers table
│   │   ├── MethodologySection.tsx
│   │   ├── TrackRecordSection.tsx
│   │   ├── WhyVRTestimonials.tsx
│   │   └── WhyVRFAQ.tsx
│   ├── contact/
│   │   ├── ContactChannelCards.tsx
│   │   ├── ContactFormSection.tsx
│   │   ├── ContactInfoSection.tsx
│   │   └── ContactFAQSidebar.tsx
│   ├── courses/
│   │   ├── CoursesHero.tsx
│   │   ├── CourseSearchBar.tsx
│   │   ├── CourseFilters.tsx
│   │   └── CoursesGrid.tsx
│   ├── course-detail/
│   │   ├── CourseHeaderPanel.tsx
│   │   ├── CourseTabNavigation.tsx
│   │   ├── CourseOverviewTab.tsx
│   │   ├── CourseCurriculumTab.tsx
│   │   ├── LearningOutcomesSection.tsx
│   │   └── InstructorBioSection.tsx
│   ├── package/
│   │   ├── PricingCardsSection.tsx
│   │   ├── PackageTestimonials.tsx
│   │   ├── SampleAlertSection.tsx
│   │   ├── PackageFAQ.tsx
│   │   ├── TrustSignalsRow.tsx
│   │   └── RefundSummarySection.tsx
│   └── legal/
│       ├── LegalContentLayout.tsx   ← Two-column sidebar + content
│       └── LegalSidebarTOC.tsx      ← Sticky TOC sidebar
│
├── shared/                          ← Reusable brand components (no page coupling)
│   ├── SectionBadge.tsx             ← Pill label above headings
│   ├── SectionHeading.tsx           ← H2 + optional subtitle
│   ├── TrustBadgeCard.tsx           ← Icon + title + subtitle (light/dark variants)
│   ├── ContactCard.tsx              ← Contact channel card
│   ├── PricingCard.tsx              ← Subscription plan card
│   ├── CourseCard.tsx               ← Course listing card
│   ├── TestimonialCard.tsx          ← Member testimonial card
│   ├── InstructorCard.tsx           ← Analyst profile card
│   ├── StatisticsStrip.tsx          ← Animated number strip
│   ├── ProcessStep.tsx              ← How it works step
│   ├── CTABanner.tsx                ← Pre-footer conversion banner
│   ├── AlertBox.tsx                 ← Warning/success/info callout
│   ├── BlockquoteHighlight.tsx      ← Styled legal blockquote
│   ├── MetadataChip.tsx             ← Date/SEBI reg chip
│   ├── ComparisonTable.tsx          ← VR vs competitors table
│   ├── SampleAlertPreview.tsx       ← Trade alert preview card
│   ├── TrustSignalsRow.tsx          ← SEBI + NISM + trust logos
│   ├── SEBIBadge.tsx                ← Standalone SEBI badge pill
│   └── MarketDataBadge.tsx          ← Green/red market change badge
│
├── legal/                           ← Legal document structure components
│   ├── LegalSectionBlock.tsx        ← Icon + heading + body for legal sections
│   ├── LegalSidebarTOC.tsx          ← Sticky sidebar with section links
│   ├── ComplianceTable.tsx          ← Grievance escalation data table
│   └── LegalMetadataRow.tsx         ← Date + SEBI reg chips row
│
├── data/                            ← Live data components (all 'use client')
│   ├── LiveMarketWidget.tsx         ← Nifty 50 card + BankNifty/Sensex tiles
│   ├── MarketTickerScroller.tsx     ← Horizontal scrolling market ticker
│   ├── MarketDataBadge.tsx          ← Positive/negative change badge
│   └── MarketDataErrorBoundary.tsx  ← Error boundary for market data
│
├── forms/                           ← Form components (all 'use client')
│   ├── ContactForm.tsx              ← Full contact form with validation
│   ├── CourseSearchBar.tsx          ← Course search input + button
│   ├── SearchInput.tsx              ← Generic search input
│   └── FormField.tsx                ← Label + input + error wrapper
│
└── animations/                      ← Animation wrapper components (all 'use client')
    ├── ScrollReveal.tsx             ← Viewport-triggered reveal wrapper
    ├── StaggerContainer.tsx         ← Stagger parent wrapper
    ├── FadeIn.tsx                   ← Simple fade-in wrapper
    ├── CountUp.tsx                  ← Number count-up animation
    └── PageTransition.tsx           ← Route transition wrapper
```

---

## `src/animations/` — Framer Motion Presets

```
src/animations/
├── variants.ts                      ← Shared base variants (fadeIn, fadeInUp, stagger...)
├── presets/
│   ├── hero.ts                      ← Hero section: badge, headline, body, CTA, widget
│   ├── cards.ts                     ← Trust, contact, pricing, testimonial card entrances
│   ├── navbar.ts                    ← Nav entrance, mobile drawer, hamburger morphing
│   ├── sections.ts                  ← Generic section scroll reveals, stagger containers
│   ├── buttons.ts                   ← Hover, tap, glow animations
│   ├── faq.ts                       ← Accordion open/close, chevron rotation
│   ├── counters.ts                  ← Count-up hook + stat strip entrance
│   ├── timeline.ts                  ← Timeline line draw, alternating items
│   ├── images.ts                    ← Image reveal, shimmer placeholder
│   ├── loading.ts                   ← Skeleton pulse, spinner, content reveal
│   └── pageTransition.ts            ← Route transition variants
└── index.ts                         ← Re-exports all presets for easy import
```

---

## `src/hooks/` — Custom React Hooks

```
src/hooks/
├── useReducedMotion.ts              ← useMotionSafe() — respects prefers-reduced-motion
├── useActiveSection.ts             ← Tracks which section is in view (for sidebar TOC)
├── useScrolled.ts                  ← Detects if page has scrolled (for navbar shadow)
├── useMobileMenu.ts                ← Mobile drawer open/close state
├── useMarketData.ts                ← Fetches and polls live market data
├── useCountUp.ts                   ← Count-up animation for statistics
└── useDebounce.ts                  ← Debounce hook for search input
```

---

## `src/services/` — External Data

```
src/services/
├── marketData.ts                    ← Market data fetching (NSE API or equivalent)
├── contactForm.ts                   ← Contact form submission helper
└── analytics.ts                    ← Analytics event tracking helpers
```

---

## `src/styles/` — Global CSS

```
src/styles/
├── tokens.css                       ← All CSS custom properties (colors, spacing, motion)
├── typography.css                   ← Base heading and body text styles
├── reset.css                        ← Additional CSS reset (beyond Tailwind)
└── animations.css                   ← CSS keyframes (ticker, shimmer, spinner)
```

---

## `src/constants/` — Site Constants

```
src/constants/
├── site.ts                          ← SITE object: URLs, prices, contact info, WhatsApp links
├── navigation.ts                    ← Header and footer navigation link arrays
├── faqs.ts                          ← FAQ content arrays (home, package, why-vr)
├── testimonials.ts                  ← Testimonial data (once collected)
└── tokens.ts                        ← TypeScript token constants for Framer Motion
```

```typescript
// src/constants/navigation.ts
export const mainNav = [
  { label: 'Home',    href: '/' },
  { label: 'About',   href: '/about' },
  { label: 'Why VR',  href: '/why-vr' },
  { label: 'Contact', href: '/contact' },
  { label: 'Plans',   href: '/package' },   // NEW — was footer-only
] as const

export const footerNav = {
  navigate: [
    { label: 'Home',       href: '/' },
    { label: 'About Us',   href: '/about' },
    { label: 'Courses',    href: '/courses' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Package',    href: '/package' },
  ],
  legal: [
    { label: 'Disclosure',          href: '/disclosure' },
    { label: 'Privacy Policy',      href: '/privacy-policy' },
    { label: 'Refund Policy',       href: '/refund-policy' },
    { label: 'Terms & Conditions',  href: '/terms-and-conditions' },
    { label: 'Disclaimer',          href: '/disclaimer' },
    { label: 'Complaint Board',     href: '/complaint-board' },
  ],
  compliance: [
    { label: 'RA Registration Disclosure', href: '/ra-registration-disclosure' },
    { label: 'Grievance Redressal',        href: '/grievance-redressal' },
    { label: 'Onboard Details',            href: '/onboard-details' },
    { label: 'ODR Portal',                 href: '/odr-portal' },
    { label: 'User KYC',                   href: '/user-kyc' },
    { label: 'User Consent',               href: '/user-consent' },
  ],
} as const
```

---

## `src/lib/` — Utilities and Infrastructure

```
src/lib/
├── fonts.ts                         ← next/font/google Inter configuration
├── metadata.ts                      ← Metadata factory (defaultMetadata + createPageMetadata)
├── structuredData.ts                ← JSON-LD schema objects (Organization, Course, FAQ...)
├── utils.ts                         ← cn() helper (clsx + tailwind-merge) + other utils
└── validations.ts                   ← Zod schemas for forms
```

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: number, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPhoneForTel(phone: string) {
  return `tel:${phone.replace(/\s/g, '')}`
}

export function formatWhatsAppLink(phone: string, message?: string) {
  const base = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
```

---

## `src/types/` — TypeScript Definitions

```
src/types/
├── index.ts                         ← Re-exports all types
├── course.ts                        ← Course, Lesson, CourseLevel, Instructor types
├── market.ts                        ← IndexData, MarketTicker, MarketChange types
├── navigation.ts                    ← NavItem, FooterNavColumn types
├── testimonial.ts                   ← Testimonial, Rating types
├── pricing.ts                       ← PricingPlan, PricingFeature types
└── legal.ts                         ← LegalSection, LegalMetadata types
```

```typescript
// src/types/market.ts
export interface IndexData {
  name: string
  symbol: string
  value: number
  change: number
  changePercent: number
  type: 'index' | 'futures' | 'bse-index'
  trending: 'up' | 'down' | 'neutral'
}

// src/types/course.ts
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'
export type CoursePrice = number | 'free'

export interface Course {
  slug: string
  title: string
  subtitle: string
  description: string
  badge?: { label: string; color: 'orange' | 'blue' | 'green' }
  price: CoursePrice
  lessonCount: number
  level: CourseLevel
  lastUpdated: string
  thumbnail: string
  tags: string[]
  enrolledCount?: number
  instructor: Instructor
}

export interface Instructor {
  name: string
  title: string
  bio?: string
  photo?: string
  credentials?: string[]
}
```

---

## `src/data/` — Static Data Files

```
src/data/
├── courses.ts                       ← Course objects (1 now, expandable)
├── faqs.ts                          ← FAQ items per section (home, package, why-vr, contact)
├── testimonials.ts                  ← Testimonial objects (placeholder until real data)
├── pricingPlans.ts                  ← Monthly and Quarterly plan objects with features
├── trustBadges.ts                   ← 4 trust badge items with icons and text
├── processSteps.ts                  ← "How it works" 3-step data
├── socialLinks.ts                   ← Social platform links with icons
└── legalPages.ts                    ← Legal page metadata (title, description, sections)
```

---

## `public/` — Static Assets

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png             ← 180×180px (WhatsApp share + iOS)
├── manifest.json                    ← PWA manifest
├── robots.txt
├── sitemap.xml                      ← Generated on build (next-sitemap)
│
├── images/
│   ├── logo/
│   │   ├── vr-logo.svg              ← Full logo (icon + wordmark)
│   │   ├── vr-logo-dark.svg         ← Reversed for dark backgrounds
│   │   ├── vr-icon.svg              ← Icon only
│   │   └── vr-wordmark.svg          ← Text only
│   ├── og/
│   │   ├── og-home.png              ← 1200×630 OG image (homepage)
│   │   ├── og-about.png
│   │   ├── og-courses.png
│   │   ├── og-package.png
│   │   └── og-default.png           ← Fallback OG image
│   ├── courses/
│   │   └── vriddhi-options-mastery-program.jpg ← Course thumbnail
│   ├── team/
│   │   └── yeshwant-bhisham-valecha.jpg ← Analyst photo (to be provided)
│   ├── sebi/
│   │   └── sebi-certificate.jpg     ← SEBI registration certificate scan
│   └── trust/
│       ├── sebi-logo.png            ← SEBI official logo
│       └── nism-logo.png            ← NISM official logo
│
└── icons/
    ├── whatsapp.svg                 ← WhatsApp brand icon
    ├── instagram.svg                ← Instagram brand icon
    ├── youtube.svg                  ← YouTube brand icon
    └── facebook.svg                 ← Facebook brand icon
```

---

## Naming Conventions

### Files

| Type | Convention | Example |
|------|-----------|---------|
| React components | PascalCase | `TrustBadgeCard.tsx` |
| Hooks | camelCase with `use` prefix | `useScrolled.ts` |
| Utilities | camelCase | `formatPrice.ts` |
| Constants | camelCase | `site.ts` |
| Type files | camelCase | `course.ts` |
| CSS files | camelCase | `tokens.css` |
| Animation presets | camelCase | `hero.ts` |

### Components

| Element | Convention | Example |
|---------|-----------|---------|
| Component function | PascalCase named export | `export function TrustBadgeCard()` |
| Props type | `ComponentNameProps` | `TrustBadgeCardProps` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleClose` |
| Boolean props | `is` or `has` prefix | `isPopular`, `hasIcon` |

### CSS / Tailwind

- Use Tailwind utilities exclusively — no CSS modules
- Complex one-off animations in `src/styles/animations.css`
- Never use `!important` except in the `prefers-reduced-motion` override block

---

## Import Path Aliases

```typescript
// tsconfig.json paths
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Usage:**
```typescript
// ✅ Use aliases
import { TrustBadgeCard } from '@/components/shared/TrustBadgeCard'
import { fadeInUp } from '@/animations/variants'
import { SITE } from '@/constants/site'
import type { Course } from '@/types/course'

// ❌ Never use relative paths for cross-directory imports
import { TrustBadgeCard } from '../../../components/shared/TrustBadgeCard'
```

---

## File Creation Order (Build Sequence)

When implementing Phase 3, create files in this order:

```
1. src/styles/tokens.css
2. src/lib/utils.ts
3. src/lib/fonts.ts
4. tailwind.config.ts
5. src/constants/ (all files)
6. src/types/ (all files)
7. src/data/ (all files)
8. src/components/ui/ (shadcn/ui: npx shadcn@latest add ...)
9. src/animations/ (all variant files)
10. src/hooks/ (all hooks)
11. src/components/layout/
12. src/components/shared/
13. src/components/legal/
14. src/components/data/
15. src/components/forms/
16. src/components/animations/
17. src/components/sections/
18. src/app/layout.tsx
19. src/app/page.tsx (and all other pages)
```
