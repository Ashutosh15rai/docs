# Component Library — Vriddhi Research

> Complete specification for every reusable component. Based on the 22 components identified in Phase 1 (`docs/components.md`) plus new components needed for the improved UX (`docs/improvement-plan.md`).

---

## Component Standards

Every component follows this contract:

```tsx
/**
 * ComponentName
 *
 * Purpose: What this component does and why it exists
 * Used on: Pages that use this component
 * Layer: ui | layout | shared | sections | legal | data | forms | animations
 * Client: yes | no  ('use client' required?)
 * Variants: Named visual/behavioral variants
 */

interface ComponentNameProps {
  // Explicit, typed props
  variant?: 'primary' | 'secondary'
  className?: string     // Always accept className for extension
  children?: React.ReactNode  // If composable
}

export function ComponentName({ variant = 'primary', className, ...props }: ComponentNameProps) {
  return (...)
}
```

---

## P0 — Critical Components (All Pages)

### 1. Navbar

```tsx
/**
 * Navbar
 * Used on: All pages (global layout)
 * Client: Partial (NavLinks + MobileDrawer are client; shell is server)
 */

// Anatomy:
// <Navbar>                           ← Server shell
//   <Container>
//     <NavLogo />                    ← Server: VR icon + wordmark
//     <NavLinks />                   ← Client: active state per route
//     <NavActions />                 ← Server: CTA buttons
//     <MobileMenuToggle />           ← Client: open/close state
//   </Container>
//   <MobileDrawer isOpen />          ← Client: sheet/drawer
// </Navbar>

interface NavLinkItem {
  label: string
  href: string
}

// Fixed nav links (from constants/navigation.ts):
// Home | About | Why VR | Contact | Plans
// + Courses (button) + Join Free (button)
```

**Design spec:**
- Height: 64px
- Background: white / `bg-white`
- Border: `border-b border-gray-100` (subtle separator)
- Shadow on scroll: `shadow-nav` (via `useScrolled` hook toggling class)
- z-index: 40 (`z-navbar`)
- Sticky: `sticky top-0`

**Mobile behavior:**
- < 768px: Logo left, hamburger icon right (24px, `text-gray-800`)
- Drawer: slides from right, 85% viewport width, dark backdrop overlay
- Drawer contains all nav links + CTA buttons in vertical stack

---

### 2. Footer

```tsx
/**
 * Footer
 * Used on: All pages (global layout)
 * Client: SocialIcons hover effects only
 */

interface FooterNavColumnProps {
  title: string
  links: { label: string; href: string }[]
}
```

**Design spec:**
- Background: `bg-navy-950`
- 4-column grid: brand (wider) + navigate + legal + compliance
- Social icons: 5 circular icon buttons in brand column
- Bottom bar: full-width disclaimer + copyright, `text-xs`, `text-gray-400`, not all-caps

**Mobile behavior:**
- 4 cols → 2 cols (tablet) → 1 col (mobile)
- Or: Brand always full width; nav columns as collapsible accordions on mobile
- Bottom disclaimer: 2 lines minimum, `min-text-xs` (12px)

---

### 3. PageHero (Dark)

```tsx
/**
 * PageHero
 * Used on: About, Contact, Why VR, Courses, Package, all legal pages
 * Client: No
 * Variants: 'standard' | 'legal'
 */

interface PageHeroProps {
  badge?: {
    label: string
    variant: 'outline' | 'dot' | 'legal'
  }
  title: string                        // Rendered with optional blue accent
  titleAccent?: string                 // Word(s) in title to render in blue gradient
  description?: string
  metadata?: {                         // Legal variant only
    effectiveDate: string
    lastUpdated: string
  }
  variant?: 'standard' | 'legal'
  children?: React.ReactNode           // Optional slot for extra content
}
```

**Design spec:**
- Background: dark navy gradient `bg-navy-900`
- Padding: `py-16 lg:py-24`
- Title: `text-4xl lg:text-5xl font-extrabold text-white`
- Accent: blue gradient span on specified words
- Description: `text-gray-300 text-base lg:text-lg`

---

### 4. SectionBadge

```tsx
/**
 * SectionBadge / PageLabel
 * Used on: Every page, above section headings
 * Client: No
 * Variants: 'outline' | 'dot' | 'legal' | 'filled'
 */

interface SectionBadgeProps {
  label: string
  variant?: 'outline' | 'dot' | 'legal' | 'filled'
  className?: string
}
```

**Variant styles:**
- `outline`: `border border-blue-200 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase`
- `dot`: green dot (●) + label text, `text-gray-600`
- `legal`: green dot + "LEGAL & REGULATORY" label in green
- `filled`: `bg-blue-100 text-blue-700 rounded-full px-3 py-1`

---

### 5. PrimaryButton (WhatsApp / Green CTA)

```tsx
/**
 * PrimaryButton — The main WhatsApp conversion CTA
 * Used on: Navbar, Hero, Contact, Package
 * Client: No
 */

interface PrimaryButtonProps {
  label: string
  href: string
  icon?: 'whatsapp' | 'arrow' | React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}
```

**Design spec:**
- Background: `bg-whatsapp` (#25D366)
- Hover: `hover:bg-whatsapp-hover` (#1DA851)
- Text: `text-white font-semibold`
- Radius: `rounded-md` (8px)
- Height: min 44px (mobile touch target)
- Animation: `whileHover={{ scale: 1.03 }}` + glow on hover

---

### 6. SecondaryButton (Outlined)

```tsx
/**
 * SecondaryButton — Outlined/ghost CTA
 * Used on: Navbar (Courses), Hero (Explore Courses)
 * Client: No
 */

interface SecondaryButtonProps {
  label: string
  href: string
  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

**Design spec:**
- Background: transparent
- Border: `border border-gray-800`
- Text: `text-gray-800 font-medium`
- Hover: `hover:bg-gray-50`
- Radius: `rounded-md`

---

### 7. FullWidthButton (Blue)

```tsx
/**
 * FullWidthButton — Full-width blue button for cards and sections
 * Used on: PricingCard (Connect Us), CourseDetail (Start Course), Search
 * Client: No
 */

interface FullWidthButtonProps {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  className?: string
}
```

**Design spec:**
- Background: `bg-blue-600`
- Hover: `hover:bg-blue-700`
- Text: `text-white font-semibold`
- Width: `w-full`

---

## P1 — High Priority Components

### 8. TrustBadgeCard

```tsx
/**
 * TrustBadgeCard
 * Used on: Home (Trust Badges Bar), About (Feature Cards)
 * Client: No
 * Variants: 'light' | 'dark'
 */

interface TrustBadgeCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  variant?: 'light' | 'dark'
  animated?: boolean              // Enables scroll-triggered entrance
  className?: string
}
```

**Light variant** (Home trust bar):
- Background: `bg-white` with `shadow-card`
- Icon: in blue circle `bg-blue-100 text-blue-600`
- Title: `text-gray-900 font-semibold`
- Subtitle: `text-gray-500 text-sm`

**Dark variant** (About feature cards):
- Background: `bg-navy-800`
- Icon: in blue circle `bg-blue-600/20 text-blue-400`
- Title: `text-white font-semibold`
- Subtitle: `text-gray-400 text-sm`

---

### 9. PricingCard

```tsx
/**
 * PricingCard
 * Used on: Package page (2 cards side-by-side)
 * Client: No (animation wrapper is client)
 * Variants: 'standard' | 'popular'
 */

interface PricingFeature {
  label: string
  included: boolean
}

interface PricingCardProps {
  planName: string
  price: string                   // e.g. "₹24,999"
  billingPeriod: string           // e.g. "Monthly"
  features: PricingFeature[]
  isPopular?: boolean
  ctaLabel: string                // e.g. "Subscribe Now"
  ctaHref: string
  gstInclusive?: boolean
}
```

**Design spec:**
- Background: `bg-white`, `rounded-xl`, `shadow-level-2`
- Popular badge: dark pill `bg-navy-900 text-white` top-right
- GST pill: `bg-green-100 text-green-700` next to price
- Feature checkmarks: `text-green-600` `CheckCircle2` icon
- CTA: `FullWidthButton` blue variant
- Popular card: highlighted `border-2 border-blue-600`

---

### 10. ContactCard

```tsx
/**
 * ContactCard
 * Used on: Contact page
 * Client: No (hover effect via CSS only)
 * Variants: 'highlighted' | 'default'
 */

interface ContactCardProps {
  badge: string                   // e.g. "RECOMMENDED"
  icon: React.ReactNode
  iconBg: string                  // Tailwind class e.g. "bg-green-100"
  iconColor: string               // e.g. "text-green-600"
  title: string
  description: string
  linkLabel: string
  linkHref: string
  variant?: 'highlighted' | 'default'
}
```

**Highlighted (WhatsApp):**
- Background: `bg-navy-900`
- Text: `text-white`
- Badge: `bg-blue-600 text-white`

**Default (Email, Phone):**
- Background: `bg-white`
- Border: `border border-gray-200`

---

### 11. CourseCard

```tsx
/**
 * CourseCard
 * Used on: Courses listing, Homepage featured section
 * Client: No
 * Variants: 'standard' | 'featured' | 'coming-soon'
 */

interface CourseCardProps {
  slug: string
  title: string
  thumbnail: string
  badge?: { label: string; color: 'orange' | 'blue' | 'green' }
  lessonCount: number
  price: number | 'free'
  level: 'beginner' | 'intermediate' | 'advanced'
  variant?: 'standard' | 'featured' | 'coming-soon'
}
```

---

### 12. TestimonialCard

```tsx
/**
 * TestimonialCard
 * Used on: Home, About, Package, Why VR
 * Client: No
 * Variants: 'standard' | 'featured' (larger, center spotlight)
 */

interface TestimonialCardProps {
  quote: string
  authorName: string              // First name only for privacy
  authorTitle?: string            // e.g. "Active Subscriber, 8 months"
  rating?: 1 | 2 | 3 | 4 | 5
  avatarInitial?: string          // First letter if no photo
  variant?: 'standard' | 'featured'
}
```

**Design spec:**
- Background: `bg-white`, `rounded-lg`, `shadow-card`
- Quote: left double-quote mark in blue, `text-gray-700`
- Author: `font-semibold text-gray-900`
- Stars: `text-amber-400` filled stars
- Avatar: colored circle with initial

---

### 13. AlertBox

```tsx
/**
 * AlertBox — Warning, info, or success callout
 * Used on: Homepage hero (risk disclaimer), Legal pages
 * Client: No
 * Variants: 'warning' | 'info' | 'success' | 'danger'
 */

interface AlertBoxProps {
  variant: 'warning' | 'info' | 'success' | 'danger'
  title?: string
  children: React.ReactNode
  icon?: React.ReactNode          // Defaults to variant-appropriate icon
  className?: string
}
```

**Variant styles:**

| Variant | Background | Border-left | Icon | Text |
|---------|-----------|------------|------|------|
| warning | amber-50 | amber-400 (4px) | AlertTriangle amber-600 | amber-800 |
| info | blue-50 | blue-400 (4px) | Info blue-600 | blue-800 |
| success | green-50 | green-400 (4px) | CheckCircle2 green-600 | green-800 |
| danger | red-50 | red-400 (4px) | AlertTriangle red-600 | red-800 |

---

### 14. StatisticsStrip

```tsx
/**
 * StatisticsStrip — Animated number showcase
 * Used on: Home, Package, Why VR
 * Client: Yes (count-up animation)
 */

interface StatItem {
  value: number
  suffix?: string                 // e.g. "+" or "%" or "K+"
  label: string
  decimals?: number
}

interface StatisticsStripProps {
  stats: StatItem[]
  variant?: 'light' | 'dark'     // Background variant
}
```

**Design:** Centered row of large numbers + label below. Count-up animation on viewport entry.

---

### 15. FAQAccordion

```tsx
/**
 * FAQAccordion — Expandable FAQ list
 * Used on: Home, Package, Why VR, Contact
 * Client: Yes (accordion state)
 */

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  allowMultiple?: boolean         // Allow multiple open at once
  variant?: 'standard' | 'bordered'
}
```

**Design:**
- Each item: `border-b border-gray-200`
- Question: `font-semibold text-gray-900` + ChevronDown icon (rotates on open)
- Answer: smooth height animation (Framer Motion `height: 'auto'`)
- No borders on items when `variant='standard'`
- All items bordered when `variant='bordered'`

---

### 16. CTABanner

```tsx
/**
 * CTABanner — Pre-footer conversion push
 * Used on: Home, Package, Courses, Why VR, About
 * Client: No
 */

interface CTABannerProps {
  badge?: string
  headline: string
  headlineAccent?: string
  description?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  variant?: 'dark' | 'blue'      // dark = navy bg, blue = blue bg
}
```

---

### 17. InstructorCard

```tsx
/**
 * InstructorCard — Analyst profile card
 * Used on: Course Detail, About, Why VR
 * Client: No
 */

interface InstructorCardProps {
  name: string
  title: string
  bio?: string
  photo?: string
  credentials?: string[]          // e.g. ["SEBI Reg. INH000027593", "NISM Series-XV"]
  variant?: 'inline' | 'featured'
}
```

---

## P2 — Medium Priority Components

### 18. MarketTickerScroller

```tsx
/**
 * MarketTickerScroller
 * Used on: Homepage (sub-header)
 * Client: Yes (data polling + CSS animation)
 */

interface TickerIndex {
  name: string
  value: number
  change: number
  trending: 'up' | 'down'
}

interface MarketTickerScrollerProps {
  indices?: TickerIndex[]         // Falls back to mock data if undefined
  speed?: number                  // Animation duration in seconds (default: 30)
}
```

**Implementation notes:**
- Pure CSS `animation: ticker-scroll` for performance (GPU-accelerated transform)
- Content duplicated (2× the items) for seamless loop
- `animation-play-state: paused` on hover for accessibility
- `prefers-reduced-motion`: disable animation, show static list instead
- Wrap in `dynamic(() => ..., { ssr: false })` — uses live market data

---

### 19. LiveMarketWidget

```tsx
/**
 * LiveMarketWidget — Homepage hero right column
 * Used on: Homepage hero only
 * Client: Yes (live data, charts)
 */

interface LiveMarketWidgetProps {
  primaryIndex: IndexData         // Nifty 50 — large card
  secondaryIndices: IndexData[]   // BankNifty + Sensex — smaller tiles
}
```

**Design:**
- Primary card: large, shows value + change + small line chart
- Secondary tiles: compact, shows name + type + % change badge
- Glass morphism: subtle on dark background
- Wraps in `Suspense` with `MarketWidgetSkeleton` fallback
- Load via `dynamic({ ssr: false })`

---

### 20. SearchBar

```tsx
/**
 * SearchBar
 * Used on: Courses page, 404 page
 * Client: Yes (controlled input)
 */

interface SearchBarProps {
  placeholder?: string
  buttonLabel?: string
  onSearch: (query: string) => void
  defaultValue?: string
  variant?: 'courses' | 'compact'  // courses = full width, compact = centered narrow
  autoFocus?: boolean
}
```

---

### 21. SidebarTableOfContents

```tsx
/**
 * SidebarTableOfContents
 * Used on: All legal pages
 * Client: Yes (active section tracking via IntersectionObserver)
 */

interface TOCItem {
  id: string
  label: string
}

interface SidebarTOCProps {
  sections: TOCItem[]
  title?: string                  // Default: "CONTENTS"
}
```

**Behavior:**
- Desktop (md+): sticky left sidebar, 25–30% width
- Mobile: collapsed accordion at top of page, above content
- Active section: highlighted via `useActiveSection` hook

---

### 22. LegalSectionBlock

```tsx
/**
 * LegalSectionBlock — Colored icon + heading + body
 * Used on: All legal pages
 * Client: No
 */

interface LegalSectionBlockProps {
  id: string                      // For TOC anchor links
  icon: React.ReactNode
  iconColor: 'blue' | 'green' | 'orange' | 'red' | 'purple'
  heading: string
  children: React.ReactNode
}
```

---

### 23. ContactForm

```tsx
/**
 * ContactForm — Full contact form with validation
 * Used on: Contact page (NEW — not on current site)
 * Client: Yes (form state, validation)
 */

// Fields:
// - Name (required, min 2 chars)
// - Phone/WhatsApp (required, 10-digit Indian mobile)
// - Email (optional)
// - Subject (dropdown: Course Enquiry | Subscription | Research Query | Compliance | Other)
// - Message (required, min 10 chars)
// - Consent checkbox (required)
```

---

### 24. ProcessStep

```tsx
/**
 * ProcessStep — "How it works" numbered step
 * Used on: Home, About, Why VR
 * Client: No
 */

interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon?: React.ReactNode
  isLast?: boolean                // Controls connector line visibility
}
```

---

### 25. ComparisonTable

```tsx
/**
 * ComparisonTable — VR vs alternatives comparison
 * Used on: Why VR page
 * Client: No
 */

interface ComparisonRow {
  feature: string
  vriddhi: boolean | string
  unregulated: boolean | string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
  vrLabel?: string                // Default: "Vriddhi Research (SEBI RA)"
  altLabel?: string               // Default: "Unregulated Tip Provider"
}
```

---

## P3 — Supporting Components

### 26. TabNavigation

```tsx
/**
 * TabNavigation
 * Used on: Course Detail (Overview / Curriculum)
 * Client: Yes
 */

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface TabNavigationProps {
  tabs: TabItem[]
  defaultTab?: string
}
```

**Design:** Active tab: blue underline indicator, sliding transition. Inactive: `text-gray-500`.

---

### 27. ComplianceTable

```tsx
/**
 * ComplianceTable — Grievance escalation data table
 * Used on: Grievance Redressal page
 * Client: No
 */

interface EscalationRow {
  designation: string
  name: string
  address: string
  phone: string
  email: string
  workingHours: string
}

interface ComplianceTableProps {
  rows: EscalationRow[]
}
```

**Mobile:** Horizontal scroll wrapper (`overflow-x-auto`) — never let table break layout.

---

### 28. MetadataChip

```tsx
/**
 * MetadataChip — Small date/SEBI/updated chip
 * Used on: Legal page heroes, Course Detail
 * Client: No
 */

interface MetadataChipProps {
  icon: React.ReactNode
  label: string
  variant?: 'light' | 'dark'
}
```

---

### 29. BlockquoteHighlight

```tsx
/**
 * BlockquoteHighlight — Styled legal blockquote
 * Used on: Legal pages
 * Client: No
 */

interface BlockquoteHighlightProps {
  children: React.ReactNode
  variant?: 'blue' | 'amber'
}
```

**Design:** Left border 4px (blue or amber) + slightly different background from surrounding content.

---

### 30. LoadingSkeleton

```tsx
/**
 * LoadingSkeleton — Content placeholder during data load
 * Used on: Market widget, course cards during search
 * Client: Yes (pulse animation)
 */

interface LoadingSkeletonProps {
  variant: 'market-widget' | 'course-card' | 'ticker' | 'card' | 'text' | 'avatar'
  count?: number                  // Number of skeleton items
  className?: string
}
```

**Design:** `bg-gray-200 rounded animate-pulse` blocks matching the final content's shape exactly to prevent CLS.

---

### 31. EmptyState

```tsx
/**
 * EmptyState — No results / empty list state
 * Used on: Courses (no search results), any empty list
 * Client: No
 */

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick?: () => void
    href?: string
  }
}
```

---

### 32. SampleAlertPreview

```tsx
/**
 * SampleAlertPreview — Example trade alert card
 * Used on: Package page, Why VR
 * Client: No
 */

interface AlertPreviewProps {
  instrument: string              // e.g. "NIFTY 50"
  direction: 'BUY' | 'SELL'
  entryPrice: string
  target: string
  stopLoss: string
  timestamp: string
  isExample?: boolean             // Shows "EXAMPLE ONLY" badge when true
}
```

**Critical:** Always show "EXAMPLE ONLY — NOT INVESTMENT ADVICE" when `isExample={true}`. SEBI compliance requirement.

---

### 33. MarketDataBadge

```tsx
/**
 * MarketDataBadge — Positive/negative change pill
 * Used on: LiveMarketWidget, MarketTicker
 * Client: No
 */

interface MarketDataBadgeProps {
  change: number                  // Positive = green, negative = red
  changePercent?: number
  showArrow?: boolean
  size?: 'sm' | 'md'
}
```

---

### 34. SEBIBadge

```tsx
/**
 * SEBIBadge — Standalone SEBI compliance pill
 * Used on: Hero, About, Package, Footer
 * Client: No
 */

interface SEBIBadgeProps {
  regNumber?: string              // Default: "INH000027593"
  variant?: 'pill' | 'card' | 'inline'
}
```

---

### 35. Breadcrumb

```tsx
/**
 * Breadcrumb
 * Used on: Course Detail, Legal pages
 * Client: No
 */

interface BreadcrumbItem {
  label: string
  href?: string                   // Undefined for current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}
```

**Schema:** Outputs `BreadcrumbList` JSON-LD automatically.

---

## shadcn/ui Setup Commands

Run during Phase 3 setup:

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Add required primitives
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add select
npx shadcn@latest add textarea
npx shadcn@latest add checkbox
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add accordion
npx shadcn@latest add tabs
npx shadcn@latest add badge
npx shadcn@latest add card
npx shadcn@latest add separator
npx shadcn@latest add skeleton
npx shadcn@latest add tooltip
npx shadcn@latest add sonner
```

---

## Component Priority Build Order

```
Week 1 — P0 (Critical)
  ☐ SectionBadge
  ☐ PrimaryButton, SecondaryButton, FullWidthButton
  ☐ Navbar (shell + NavLinks + MobileDrawer)
  ☐ Footer (shell + FooterBrandColumn + FooterNavColumn + DisclaimerBar)
  ☐ PageHero

Week 2 — P1 (High)
  ☐ TrustBadgeCard
  ☐ ContactCard
  ☐ PricingCard
  ☐ CourseCard
  ☐ TestimonialCard
  ☐ AlertBox
  ☐ StatisticsStrip
  ☐ FAQAccordion
  ☐ CTABanner
  ☐ InstructorCard

Week 3 — P2 (Medium)
  ☐ MarketTickerScroller
  ☐ LiveMarketWidget (skeleton first, live data later)
  ☐ SearchBar
  ☐ SidebarTableOfContents
  ☐ LegalSectionBlock
  ☐ ContactForm
  ☐ ProcessStep
  ☐ ComparisonTable

Week 4 — P3 (Supporting)
  ☐ TabNavigation
  ☐ ComplianceTable
  ☐ MetadataChip
  ☐ BlockquoteHighlight
  ☐ LoadingSkeleton
  ☐ EmptyState
  ☐ SampleAlertPreview
  ☐ MarketDataBadge
  ☐ SEBIBadge
  ☐ Breadcrumb
```

---

## Accessibility Checklist Per Component

Every component must pass before Phase 3 completion:

- [ ] Keyboard accessible (all interactive elements reachable via Tab)
- [ ] Focus indicator visible (`ring-2 ring-blue-500 ring-offset-2`)
- [ ] Color not the only differentiator (market badges use arrows + color)
- [ ] Images have `alt` attributes
- [ ] Form inputs have associated `<label>` elements
- [ ] ARIA roles used correctly where native HTML isn't sufficient
- [ ] Framer Motion `useReducedMotion` check applied
- [ ] Touch targets minimum 44×44px
