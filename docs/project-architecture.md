# Project Architecture — Vriddhi Research

> Technical architecture for the Next.js 15 frontend rebuild of vriddhiresearch.com.

---

## Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js | 15.x | App Router, RSC, SSG/ISR, image optimization |
| UI Library | React | 19.x | Components, state, concurrent features |
| Language | TypeScript | 5.x (strict) | Type safety across all files |
| Styling | Tailwind CSS | 4.x | Utility-first CSS, token-driven |
| Component Primitives | shadcn/ui | Latest | Accessible, unstyled base components |
| Animation | Framer Motion | 11.x | Page transitions, scroll reveals, micro-interactions |
| Smooth Scroll | Lenis | 1.x | Native-feeling scroll behavior |
| Icons | Lucide React | Latest | Consistent stroke-based icon set |
| Images | next/image | Built-in | Automatic WebP, lazy loading, srcset |
| Fonts | next/font/google | Built-in | Zero-CLS font loading with Inter |
| Form State | React Hook Form | 7.x | Contact form, search |
| Form Validation | Zod | 3.x | Schema validation for all forms |
| HTTP Client | Axios / fetch | Native | API calls (market data) |

---

## Routing Architecture (Next.js App Router)

```
src/app/
├── layout.tsx                      ← Root layout: fonts, Lenis, providers, metadata
├── globals.css                     ← CSS reset, custom properties, base styles
├── page.tsx                        ← Homepage (/)
├── about/
│   └── page.tsx                    ← /about
├── contact/
│   └── page.tsx                    ← /contact
├── why-vr/
│   └── page.tsx                    ← /why-vr (NEW — was 404)
├── courses/
│   ├── page.tsx                    ← /courses (listing)
│   └── [slug]/
│       └── page.tsx                ← /courses/[slug] (course detail)
├── package/
│   └── page.tsx                    ← /package (pricing)
├── disclosure/
│   └── page.tsx                    ← /disclosure
├── privacy-policy/
│   └── page.tsx                    ← /privacy-policy
├── refund-policy/
│   └── page.tsx                    ← /refund-policy
├── terms-and-conditions/
│   └── page.tsx                    ← /terms-and-conditions
├── disclaimer/
│   └── page.tsx                    ← /disclaimer
├── grievance-redressal/
│   └── page.tsx                    ← /grievance-redressal
├── onboard-details/
│   └── page.tsx                    ← /onboard-details
├── ra-registration-disclosure/
│   └── page.tsx                    ← /ra-registration-disclosure (NEW — was 404)
├── odr-portal/
│   └── page.tsx                    ← /odr-portal
├── user-kyc/
│   └── page.tsx                    ← /user-kyc
├── user-consent/
│   └── page.tsx                    ← /user-consent
├── complaint-board/
│   └── page.tsx                    ← /complaint-board
└── not-found.tsx                   ← 404 page (global)
```

---

## Rendering Strategy Per Route

| Route | Strategy | Rationale |
|-------|---------|-----------|
| `/` | SSG (Static) | Mostly static content; market widget hydrates client-side |
| `/about` | SSG | Static content only |
| `/contact` | SSG | Static + client-side form |
| `/why-vr` | SSG | Static content |
| `/courses` | ISR (60s) | Course list may update; invalidate on new course |
| `/courses/[slug]` | ISR (3600s) | Course content is semi-static |
| `/package` | SSG | Pricing is static until manually updated |
| Legal pages | SSG | Rarely changes; revalidate on deploy |
| `/not-found` | Static | Error page |

```typescript
// ISR example for courses page
export const revalidate = 60 // Revalidate every 60 seconds
```

---

## Data Architecture

### Market Data (Client-Side Only)

The live market ticker and Nifty widget fetch data client-side to avoid blocking server render:

```typescript
// src/services/marketData.ts
// Options for market data source:
// 1. NSEpy / unofficial NSE API (free, rate-limited)
// 2. Alpha Vantage (free tier, 5 calls/min)
// 3. Twelve Data (free tier)
// 4. Mock data during development

export async function fetchMarketData(): Promise<IndexData[]> {
  // Implementation detail — chosen during Phase 3
  // Component handles loading + error states independently
}
```

Market data components are wrapped in `<Suspense>` with skeleton fallback:

```tsx
// In Homepage component
<Suspense fallback={<MarketWidgetSkeleton />}>
  <LiveMarketWidget />
</Suspense>
```

### Contact Form (Server Action)

```typescript
// src/app/contact/actions.ts
'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email().optional(),
  subject: z.enum(['course', 'subscription', 'research', 'compliance', 'other']),
  message: z.string().min(10).max(2000),
  consent: z.boolean().refine(Boolean, 'You must agree to be contacted'),
})

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData))
  
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten() }
  }
  
  // Send email notification / WhatsApp trigger
  // Return success
  return { success: true }
}
```

### Course Data

For the Phase 3 component library, courses data can be sourced from:
1. **Static JSON** (`src/data/courses.ts`) — simple, no CMS needed for current 1-course catalog
2. **CMS** (future) — Contentful, Sanity, or Notion API when catalog grows

```typescript
// src/data/courses.ts
export interface Course {
  slug: string
  title: string
  subtitle: string
  description: string
  badge?: { label: string; color: 'orange' | 'blue' | 'green' }
  price: number | 'free'
  lessonCount: number
  level: 'beginner' | 'intermediate' | 'advanced'
  lastUpdated: string
  thumbnail: string
  tags: string[]
  enrolled?: number
  instructor: {
    name: string
    title: string
    photo?: string
  }
}
```

---

## Component Architecture

### Server vs Client Component Rules

```typescript
// Server Components (default in App Router) — use for:
// - Static layouts, headings, text content
// - Data fetching from files/APIs
// - Components with no interactivity
// Mark: no directive needed (default)

// Client Components — use ONLY for:
// - useState, useEffect, useContext
// - Event handlers (onClick, onChange)
// - Framer Motion animations
// - Browser APIs (window, document)
// - shadcn/ui interactive components
// Mark: 'use client' at top of file
```

**Key decision:** Every Framer Motion component requires `'use client'`. Structure components so the outer shell is server-rendered, and only the animated parts are client components.

```tsx
// ✅ Good pattern — minimal client boundary
// src/components/sections/TrustBadgesSection.tsx (Server)
import { TrustBadgeGrid } from '@/components/animations/TrustBadgeGrid' // Client

export function TrustBadgesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <TrustBadgeGrid />  {/* Only the animation part is client */}
      </div>
    </section>
  )
}
```

---

## Providers & Context

```typescript
// src/app/layout.tsx

import { inter } from '@/lib/fonts'
import { LenisProvider } from '@/providers/LenisProvider'
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <LenisProvider>
          {children}
          <Toaster richColors position="top-right" />
        </LenisProvider>
      </body>
    </html>
  )
}
```

### Provider Order

```
LenisProvider
  └── Application (pages + layouts)
        └── Toaster (global toast notifications)
```

No global state management library (Redux, Zustand) needed — the site is mostly static content with minimal state. Local `useState` is sufficient.

---

## Metadata Architecture

```typescript
// src/lib/metadata.ts
import type { Metadata } from 'next'

const SITE_NAME = 'Vriddhi Research'
const SITE_URL = 'https://vriddhiresearch.com'
const SEBI_REG = 'INH000027593'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | SEBI Registered Research Analyst`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `SEBI Registered Research Analyst (${SEBI_REG}) providing structured index research, options trading courses, and financial education for Indian traders.`,
  keywords: [
    'SEBI registered research analyst',
    'options trading course India',
    'Nifty trading research',
    'Bank Nifty research',
    'free trading community WhatsApp',
    'NISM certified analyst',
  ],
  authors: [{ name: 'Yeshwant Bhisham Valecha', url: SITE_URL }],
  creator: 'Yeshwant Bhisham Valecha',
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Vriddhi Research — SEBI Registered Research Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vriddhiresearch',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

// Per-page metadata factory
export function createPageMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph ?? {}),
    },
  }
}
```

```typescript
// Example page-level metadata
// src/app/package/page.tsx

import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Research Plans & Pricing | Monthly ₹24,999',
  description: 'Choose a SEBI-compliant research plan. Monthly ₹24,999 or Quarterly ₹59,999. Includes Nifty & Bank Nifty trade alerts with entry/exit levels delivered via WhatsApp.',
})
```

---

## Error Boundary Architecture

```typescript
// src/app/not-found.tsx — Global 404
// src/app/error.tsx — Runtime error boundary
// src/app/global-error.tsx — Root layout error boundary

// Component-level error boundaries for market data
// src/components/data/MarketDataErrorBoundary.tsx
```

---

## SEO Architecture (Structured Data)

```typescript
// src/lib/structuredData.ts
// JSON-LD schemas, injected per page via <Script> in layout or page.tsx

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vriddhi Research',
  url: 'https://vriddhiresearch.com',
  logo: 'https://vriddhiresearch.com/logo.png',
  description: 'SEBI Registered Research Analyst firm providing structured index research and financial education.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-13 A wing Chintamani 2 society, Siddhivinayak Mandir Mithbandar Road, Natu Paranpe Colony',
    addressLocality: 'Thane east',
    addressRegion: 'Maharashtra',
    postalCode: '400603',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9724926927',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://instagram.com/vriddhiresearch',
    'https://youtube.com/@vriddhiresearch',
    'https://facebook.com/vriddhiresearch',
  ],
}

export function createCourseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'Vriddhi Research',
    },
    offers: {
      '@type': 'Offer',
      price: course.price === 'free' ? '0' : course.price.toString(),
      priceCurrency: 'INR',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `${course.lessonCount} lessons`,
    },
  }
}
```

---

## Performance Architecture

### Core Web Vitals Strategy

| Metric | Strategy |
|--------|---------|
| LCP | `priority` on hero images; skeleton for market widget |
| CLS | Explicit `width`/`height` on all images; font `display: swap`; reserve space for ticker |
| INP | Minimal client JS; lazy load heavy components |
| TTFB | Static generation for all non-data pages; CDN edge |
| FCP | Critical CSS inlined; preload fonts |

### Bundle Splitting

```typescript
// Heavy components loaded lazily
import dynamic from 'next/dynamic'

const LiveMarketWidget = dynamic(
  () => import('@/components/data/LiveMarketWidget'),
  { 
    loading: () => <MarketWidgetSkeleton />,
    ssr: false, // Client-only: uses browser APIs for live data
  }
)

const MarketTickerScroller = dynamic(
  () => import('@/components/data/MarketTickerScroller'),
  { ssr: false }
)

const ContactForm = dynamic(
  () => import('@/components/forms/ContactForm'),
  { loading: () => <ContactFormSkeleton /> }
)
```

---

## Constants Architecture

```typescript
// src/constants/site.ts
export const SITE = {
  name: 'Vriddhi Research',
  url: 'https://vriddhiresearch.com',
  sebiReg: 'INH000027593',
  analyst: 'Yeshwant Bhisham Valecha',
  email: {
    support: 'support@vriddhiresearch.com',
    analyst: 'valechayeshwant@gmail.com',
  },
  phone: {
    support: '+91 9082318833',
    analyst: '+91 9724926927',
  },
  whatsapp: {
    community: 'https://wa.me/919082318833', // Adjust to actual group link
    cta: 'https://wa.me/919082318833?text=Hi%2C%20I%20want%20to%20join%20the%20free%20community',
  },
  address: {
    line1: 'A-13 A wing Chintamani 2 society',
    line2: 'Siddhivinayak Mandir Mithbandar Road',
    line3: 'Natu Paranpe Colony',
    city: 'Thane east',
    state: 'Maharashtra',
    pin: '400603',
    full: 'A-13 A wing Chintamani 2 society, Siddhivinayak Mandir Mithbandar Road, Natu Paranpe Colony, Thane east, Thane, Maharashtra, 400603',
  },
  social: {
    instagram: 'https://instagram.com/vriddhiresearch',
    youtube: 'https://youtube.com/@vriddhiresearch',
    facebook: 'https://facebook.com/vriddhiresearch',
    whatsapp: 'https://wa.me/919082318833',
  },
  pricing: {
    monthly: { amount: 24999, label: '₹24,999', period: 'Monthly' },
    quarterly: { amount: 59999, label: '₹59,999', period: 'Quarterly' },
  },
} as const
```

---

## Environment Variables

```bash
# .env.local (development)
# .env.production (set in deployment)

# Market data API (if using external source)
MARKET_API_KEY=
MARKET_API_BASE_URL=

# Email (for contact form)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL_TO=support@vriddhiresearch.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=vriddhiresearch.com

# Feature flags
NEXT_PUBLIC_SHOW_MARKET_WIDGET=true
NEXT_PUBLIC_SHOW_CONTACT_FORM=true
```

---

## Security Considerations

| Concern | Implementation |
|---------|---------------|
| Contact form CSRF | Next.js Server Actions have built-in CSRF protection |
| Rate limiting | Add `upstash/ratelimit` on contact form action |
| XSS | React's default JSX escaping; never `dangerouslySetInnerHTML` |
| Sensitive data | No API keys in client bundle; all in server-side env vars |
| SEBI compliance | Risk disclaimer present on every marketing page |
