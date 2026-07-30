# Components — Vriddhi Research

Every reusable UI component identified across the website. Each entry includes its visual description, usage locations, props/variants, and rebuild notes.

---

## LAYOUT COMPONENTS

### C-01: Navbar

**Used on:** All pages (global)

**Description:**
Sticky top navigation bar. White background with subtle shadow. Horizontal layout: logo left, nav links center, action buttons right.

**Elements:**
- `NavLogo` — VR icon (geometric blue diamond) + "VRIDDHI RESEARCH" text wordmark
- `NavLinks` — flat list of text links with active-state underline indicator
- `NavCTA` — two buttons: outlined "Courses" and filled green "Join Free"

**Props/Variants:**
- Active page state: underline on current page nav link
- No sticky/scrolled state variation visible (header appears same at all scroll positions)

**Notes:**
- No dropdown, mega-menu, or mobile hamburger observed in desktop screenshots
- Mobile behavior needs separate documentation

---

### C-02: Footer

**Used on:** All pages (global)

**Description:**
Dark navy 4-column footer + full-width bottom disclaimer bar.

**Elements:**
- `FooterBrandColumn` — Logo, tagline, SEBI details, social icons
- `FooterNavColumn` — Column of labeled links (repeats 3 times: Navigate, Legal, Compliance)
- `FooterSocialIcons` — Row of 5 social icon buttons (Instagram, YouTube, Facebook, WhatsApp, Email)
- `FooterDisclaimerBar` — Full-width very small text disclaimer + copyright

**Props:**
- `columnTitle: string` — e.g. "NAVIGATE", "LEGAL", "COMPLIANCE"
- `links: { label: string, url: string }[]`

---

### C-03: PageHero (Dark)

**Used on:** About, Contact, Privacy Policy, Disclosure, Refund Policy, Terms & Conditions, Disclaimer, and all other legal pages

**Description:**
Full-width dark navy hero section used for inner pages. Always contains a section badge, large headline, and optional body text. Consistent design language across all non-homepage inner pages.

**Elements:**
- `SectionBadge` — small pill/outline badge with label (e.g., "WHO WE ARE", "GET IN TOUCH", "LEGAL & REGULATORY")
- `PageTitle` — Large white bold headline (50–60px), sometimes with blue accent on key words
- `PageDescription` — Gray/muted body text (~16px)
- `MetaRow` (optional) — row of metadata chips (date, SEBI reg no, last updated) for legal pages

**Variants:**
1. **Standard** (About, Contact) — badge + headline + description, no metadata row
2. **Legal** — badge + headline + description + 3-chip metadata row (effective date, SEBI reg, last updated)

---

## CARD COMPONENTS

### C-04: TrustBadgeCard

**Used on:** Home (Trust Badges Bar), About (Feature Cards)

**Description:**
Small horizontal card with icon, title, and subtitle. Used in rows of 4 to communicate credentials or features at a glance.

**Variants:**
1. **Light background** (Home Trust Badges Bar) — white/light background, blue icon, dark text
2. **Dark background** (About Feature Cards) — dark navy card, blue icon, white text

**Elements:**
- `BadgeIcon` — icon rendered in a small rounded square (blue)
- `BadgeTitle` — bold text (~15px)
- `BadgeSubtitle` — muted/gray text (~13px)

**Props:**
- `icon: ReactNode`
- `title: string`
- `subtitle: string`
- `variant: 'light' | 'dark'`

---

### C-05: ContactCard

**Used on:** Contact page

**Description:**
Medium-sized card displaying a contact channel (WhatsApp, Email, Phone). Each card has a badge label at top, circular icon, title, description, and a link/CTA.

**Variants:**
1. **Highlighted** (WhatsApp — "RECOMMENDED") — blue/dark background, white text, stands out from others
2. **Default** (Email, Phone) — white/light background, standard styling

**Elements:**
- `CardBadge` — small pill at top-left (e.g., "RECOMMENDED", "ENQUIRIES", "SUPPORT")
- `CardIcon` — circular icon container (WhatsApp green / blue / orange based on type)
- `CardTitle` — bold heading (~18px)
- `CardDescription` — body text (~14px)
- `CardLink` — action link with arrow suffix "→"

**Props:**
- `badge: string`
- `icon: ReactNode`
- `title: string`
- `description: string`
- `linkLabel: string`
- `linkHref: string`
- `variant: 'highlighted' | 'default'`

---

### C-06: PricingCard

**Used on:** Package page

**Description:**
Large pricing card containing plan name, price, billing frequency, feature list, and CTA button. Two cards displayed side-by-side.

**Variants:**
1. **Standard** (Monthly Plan) — white background, standard styling
2. **Popular** (Quarterly Plan) — "POPULAR" badge at top-right, may have highlighted border

**Elements:**
- `PlanName` — bold heading (e.g., "Monthly Plan")
- `PlanPrice` — large ₹ amount with billing period suffix
- `GSTPill` — small "GST Inclusive" badge next to price
- `PopularBadge` — "POPULAR" dark pill (Quarterly plan only)
- `FeatureLabel` — "FEATURES" section divider
- `FeatureList` — list of features with green checkmark icons
- `PricingCTA` — full-width button "Connect Us"
- `GSTPriceNote` — small text below CTA "GST inclusive"

**Props:**
- `planName: string`
- `price: string`
- `billingPeriod: string`
- `features: string[]`
- `isPopular?: boolean`
- `ctaLabel: string`
- `ctaHref: string`

---

### C-07: CourseCard

**Used on:** Courses listing page

**Description:**
Compact course card used in the course grid. Shows thumbnail, optional badge, title, lesson count, and price.

**Elements:**
- `CourseThumbnail` — image with optional badge overlay (e.g., "Pro" orange badge)
- `CourseTitle` — bold text below image
- `LessonCount` — icon + number (e.g., "📋 20")
- `CoursePrice` — price label (e.g., "Free" in green, or ₹ amount)

**Props:**
- `thumbnail: string` (image URL)
- `badge?: { label: string, color: string }`
- `title: string`
- `lessonCount: number`
- `price: string | number`
- `href: string`

---

## BUTTON COMPONENTS

### C-08: PrimaryButton (Green / WhatsApp CTA)

**Used on:** Navbar (Join Free), Home hero (Join Free Community), Contact page (Join Free Community), Package page (Connect Us)

**Description:**
The primary conversion CTA throughout the site. Green background, white text, often includes WhatsApp icon prefix.

**Variants:**
- With WhatsApp icon: "Join Free Community", "Join Free"
- Without icon: Generic green button

**Props:**
- `label: string`
- `href: string`
- `icon?: ReactNode` (WhatsApp icon)

---

### C-09: SecondaryButton (Outlined)

**Used on:** Navbar (Courses), Home hero (Explore Courses)

**Description:**
Outlined/bordered button with dark text. Used as secondary CTA alongside the primary green button.

**Props:**
- `label: string`
- `href: string`
- `icon?: ReactNode`

---

### C-10: FullWidthButton (Blue)

**Used on:** Package pricing cards (Connect Us), Course detail (Start Course), Courses search page (Search)

**Description:**
Full-width blue solid button. Used inside cards or as a section-level CTA.

**Props:**
- `label: string`
- `href: string`
- `variant?: 'full-width' | 'standard'`
- `icon?: ReactNode` (lock icon on Start Course)

---

## FORM COMPONENTS

### C-11: SearchBar

**Used on:** Courses page, 404 page

**Description:**
Text input with magnifying glass icon on the left and a submit button on the right.

**Courses page variant:**
- Full-width across the page
- Placeholder: "Search courses..."
- Button: "Search" (blue, right-aligned)

**404 page variant:**
- Centered, narrower
- Placeholder: "Search..."
- No visible separate submit button

**Props:**
- `placeholder: string`
- `buttonLabel?: string`
- `onSubmit: (query: string) => void`

---

## DATA / LIVE CONTENT COMPONENTS

### C-12: MarketTickerScroller

**Used on:** Home page (below navbar)

**Description:**
Full-width horizontal scrolling marquee showing live/real-time Indian stock indices with color-coded values.

**Elements:**
- Index ticker name (white bold)
- Current value change (green = positive, red = negative)
- Continuous left-scrolling animation

**Data displayed:** SENSEX, NIFTY BANK, FIN NIFTY, MIDCAP NIFTY, NIFTY 50, BANKNIFTY

**Props:**
- `indices: { name: string, value: number, change: number }[]`
- `speed?: number`

---

### C-13: LiveMarketWidget

**Used on:** Home hero (right column)

**Description:**
A grouped widget showing live market data. Contains a large Nifty 50 card with mini chart + two smaller BankNifty/Sensex tiles below.

**Elements:**
- `LargeIndexCard` — Index name, value, change percentage, "Today" label, mini line chart
- `SmallIndexTile` (×2) — Index name, type (Futures/BSE Index), percentage change badge

**Props:**
- `primaryIndex: IndexData`
- `secondaryIndices: IndexData[]`

---

## NAVIGATION COMPONENTS

### C-14: SectionBadge / PageLabel

**Used on:** Home hero, About hero, Contact hero, Package hero, all legal pages

**Description:**
Small pill/badge used as a section identifier above headings. Acts as a visual anchor and content categorizer.

**Variants:**
1. **Outline style** (dark border, dark text) — Home hero "MANAGED BY SEBI REGISTERED RESEARCH ANALYST"
2. **Filled dot + text** (green dot + label) — Package "PACKAGE"
3. **Outline small caps** — Contact "GET IN TOUCH", About "WHO WE ARE", "OUR MISSION"
4. **Legal style** (green dot + "LEGAL & REGULATORY") — All legal page heroes

**Props:**
- `label: string`
- `variant: 'outline' | 'dot' | 'legal'`

---

### C-15: TabNavigation

**Used on:** Course Detail page

**Description:**
Horizontal tab bar for switching between content panels within the same page.

**Elements:**
- Tab item with active underline indicator
- Active: blue underline, full-weight text
- Inactive: gray text

**Tabs observed:** Overview · Curriculum

**Props:**
- `tabs: { label: string, id: string }[]`
- `activeTab: string`

---

### C-16: SidebarTableOfContents

**Used on:** All legal pages (Privacy Policy, Disclosure, Refund Policy, Terms & Conditions, Disclaimer, Grievance Redressal, Onboard Details)

**Description:**
Sticky left sidebar with a list of section links that scroll-anchor to content sections in the right panel.

**Elements:**
- Label: "CONTENTS"
- List of links (clickable, scrolls to section)
- Active section highlighting (likely on scroll)

**Props:**
- `sections: { id: string, label: string }[]`

---

## ALERT / CALLOUT COMPONENTS

### C-17: AlertBox

**Used on:** Legal pages, Home hero (risk disclaimer)

**Description:**
Highlighted callout box used to draw attention to important warnings or notes.

**Variants:**
1. **Amber/Yellow** (home risk disclaimer, legal warnings) — amber border-left + background
2. **Green** (SEBI compliance notes, key policies) — green checkmark icon + green border

**Elements:**
- Icon (⚠️ for warning, ✅ for positive note)
- Text content (often bold key phrase + body text)

**Props:**
- `variant: 'warning' | 'success' | 'info'`
- `text: string | ReactNode`

---

### C-18: BlockquoteHighlight

**Used on:** Legal pages

**Description:**
Styled blockquote for important legal statements — left border accent, slightly different background from main content.

**Props:**
- `text: string`

---

## LEGAL CONTENT COMPONENTS

### C-19: LegalSectionBlock

**Used on:** All legal pages

**Description:**
A self-contained section block within legal document pages. Consists of a colored circular icon + section heading + body text/list.

**Elements:**
- `SectionIcon` — Colored circle with relevant icon (blue, orange, green depending on section type)
- `SectionHeading` — Bold heading (~20px)
- `SectionDivider` — Thin horizontal rule below heading
- `SectionContent` — Body paragraphs, lists, tables, callouts

**Props:**
- `icon: ReactNode`
- `iconColor: string`
- `heading: string`
- `children: ReactNode`

---

### C-20: ComplianceTable

**Used on:** Grievance Redressal page

**Description:**
Data table for displaying the grievance escalation matrix. Shows designation, contact name, address, phone, email, and working hours.

**Columns:** Designation · Contact Person Name · Office Address · Contact No. · Email ID · Working Hours

**Props:**
- `rows: EscalationRow[]`

---

## MEDIA COMPONENTS

### C-21: CourseBanner

**Used on:** Course Detail page

**Description:**
Full-width banner image for a course. Displayed at the top of the course detail page.

**Props:**
- `imageUrl: string`
- `altText: string`

---

## UTILITY COMPONENTS

### C-22: MetadataChip

**Used on:** Legal page heroes, Course Detail

**Description:**
Small inline chip showing metadata: date, SEBI reg number, last updated. Usually displayed in a horizontal row.

**Elements:**
- Small icon (calendar, shield, clock)
- Label text

**Props:**
- `icon: ReactNode`
- `label: string`

---

## Components Priority Matrix

| Priority | Component | Reason |
|----------|-----------|--------|
| P0 — Critical | Navbar, Footer | Used on every page |
| P0 — Critical | PageHero (Dark) | Used on 80% of pages |
| P0 — Critical | PrimaryButton, SecondaryButton | Core CTAs |
| P1 — High | TrustBadgeCard | Core credibility element |
| P1 — High | PricingCard | Revenue conversion |
| P1 — High | ContactCard | Primary contact flow |
| P1 — High | MarketTickerScroller | Unique homepage element |
| P1 — High | SectionBadge | Used across all pages |
| P2 — Medium | LiveMarketWidget | Homepage differentiator |
| P2 — Medium | CourseCard, SearchBar | Course section |
| P2 — Medium | SidebarTableOfContents | Legal pages |
| P2 — Medium | LegalSectionBlock, AlertBox | Legal pages |
| P3 — Lower | TabNavigation, ComplianceTable | Course & compliance specific |
| P3 — Lower | MetadataChip, BlockquoteHighlight | Supporting elements |
