# Accessibility — Vriddhi Research

> WCAG 2.1 AA compliance plan for the Vriddhi Research frontend rebuild. Based on accessibility issues A-01 through A-06 identified in `docs/ux-review.md`.

---

## Target Standard

**WCAG 2.1 AA** — the legally recognized minimum for financial services accessibility in most jurisdictions.

**Target Lighthouse Accessibility score: ≥ 95**

---

## Why Accessibility Matters Here

1. **Financial services context:** Users of all abilities interact with financial information. Accessibility is a trust signal.
2. **Mobile-first audience:** Screen magnification is common on mobile — our font sizes and contrast must work at 200% zoom.
3. **Legal disclaimer legibility (A-01):** The current site's 10px disclaimer is arguably a regulatory failure — the disclaimer exists to be read.
4. **Market data accessibility (A-06):** Color cannot be the only differentiator between positive and negative market data.

---

## Phase 1 Issues — Resolution Plan

### A-01: Footer Disclaimer Text Size ✅ FIXED IN DESIGN

**Current site:** ~10px, all-caps, white on dark navy
**Fix in rebuild:**
- Minimum 12px (`text-xs`) — this is the floor
- Remove all-caps formatting (`text-transform: none`)
- Keep `text-gray-400` on dark background (sufficient contrast)
- Line height: `leading-relaxed` (1.6)

```tsx
// FooterDisclaimerBar.tsx
<div className="text-xs text-gray-400 leading-relaxed py-4 border-t border-navy-800">
  <p className="max-w-6xl mx-auto">
    {LEGAL_DISCLAIMER_TEXT}
  </p>
  <p className="mt-2 text-gray-500">
    © {new Date().getFullYear()} Vriddhi Research. All Rights Reserved.
  </p>
</div>
```

---

### A-02: Color Contrast Verification

Every text-on-background combination must pass WCAG 2.1 SC 1.4.3:
- Normal text (< 18px or < 14px bold): **4.5:1 minimum**
- Large text (≥ 18px or ≥ 14px bold): **3:1 minimum**

**Verification table (from color-system.md):**

| Text | Background | Ratio | Pass? |
|------|-----------|-------|-------|
| white (#FFF) on navy-900 | 14.1:1 | ✅ AAA |
| gray-300 on navy-900 | 8.9:1 | ✅ AAA |
| blue-400 on navy-900 | 4.7:1 | ✅ AA |
| gray-900 on white | 19.8:1 | ✅ AAA |
| gray-700 on white | 9.7:1 | ✅ AAA |
| gray-500 on white | 4.6:1 | ✅ AA |
| blue-600 on white | 4.8:1 | ✅ AA |
| white on green-whatsapp | 3.0:1 | ⚠️ Large text only |
| amber-700 on amber-50 | 6.2:1 | ✅ AA |
| gray-400 on white | 2.9:1 | ❌ Fail — never use for text |

**Action:** `gray-400` is only used for placeholder text (WCAG excludes placeholder from contrast requirements). All actual text uses gray-500 minimum on white backgrounds.

---

### A-03: Image Alt Text Standard

Every `<img>` and `<Image>` element must have a descriptive `alt` attribute.

```tsx
// ✅ Descriptive alt text
<Image
  src="/images/courses/options-mastery.jpg"
  alt="Vriddhi Options Mastery Program course banner — Beginner to Advanced options trading"
  ...
/>

<Image
  src="/images/team/yeshwant-bhisham-valecha.jpg"
  alt="Yeshwant Bhisham Valecha, SEBI Registered Research Analyst, Vriddhi Research"
  ...
/>

// ✅ Decorative images — empty alt (screen reader skips)
<Image
  src="/images/decorative-chart-bg.svg"
  alt=""
  role="presentation"
  ...
/>

// ✅ Logo — descriptive but brief
<Image
  src="/images/logo/vr-logo.svg"
  alt="Vriddhi Research — SEBI Registered Research Analyst"
  ...
/>

// ❌ Missing alt
<Image src="/images/courses/options-mastery.jpg" />

// ❌ Non-descriptive alt
<Image src="..." alt="image" />
<Image src="..." alt="course" />
```

---

### A-04: Keyboard Navigation

Every interactive element must be operable by keyboard:

```typescript
// Testing protocol:
// Tab: forward through all interactive elements
// Shift+Tab: backward through interactive elements
// Enter / Space: activate buttons, links, checkboxes
// Escape: close drawers, modals, dropdowns
// Arrow keys: navigate within accordions, tabs
```

**Focus indicator requirement:**
```css
/* Every interactive element must have a visible focus indicator */
/* Tailwind: use focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 */

/* Apply to all: */
.btn, a, input, select, textarea, button, [tabindex] {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2;
}

/* Never: */
/* outline: none; without a replacement focus indicator */
```

**Modal/Drawer keyboard trap:**
```tsx
// When mobile drawer is open:
// 1. Focus moves inside drawer (first focusable element)
// 2. Tab stays within drawer (focus trap)
// 3. Escape closes drawer and returns focus to hamburger button

// shadcn/ui Sheet component handles this automatically via Radix UI
// Verify: focus-trap is active, Escape closes, focus returns
```

---

### A-05: Form Input Labels

Every form input must have a programmatic label:

```tsx
// ✅ Visible label + htmlFor
<label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
  Name <span className="text-red-500">*</span>
</label>
<input
  id="contact-name"
  name="name"
  type="text"
  aria-required="true"
  aria-describedby="contact-name-error"
  className="..."
/>
{error && (
  <p id="contact-name-error" role="alert" className="text-sm text-red-600 mt-1">
    {error.message}
  </p>
)}

// ✅ Visually hidden label (for icon-only search bar)
<label htmlFor="course-search" className="sr-only">
  Search courses
</label>
<input
  id="course-search"
  type="search"
  placeholder="Search courses..."
  className="..."
/>

// ❌ Placeholder as the only label — fails WCAG 1.3.1
<input placeholder="Your name" />  // No label, fails screen reader
```

---

### A-06: Market Ticker Accessibility

```tsx
// Market ticker — scrolling content must be pauseable

// 1. Pause on hover (CSS)
.ticker-track:hover { animation-play-state: paused; }

// 2. prefers-reduced-motion: no scrolling
@media (prefers-reduced-motion: reduce) {
  .ticker-track { animation: none; }
}

// 3. Screen reader content (accessible but hidden from visual ticker)
<section aria-label="Live market data">
  {/* Visually scrolling ticker for sighted users */}
  <div aria-hidden="true" className="ticker-track">...</div>
  
  {/* Static list for screen readers */}
  <ul className="sr-only">
    {indices.map(index => (
      <li key={index.symbol}>
        {index.name}: {index.value} ({index.changePercent > 0 ? '+' : ''}{index.changePercent}%)
      </li>
    ))}
  </ul>
</section>
```

---

## Skip Navigation

The first element in `<body>` must be a skip link:

```tsx
// src/components/layout/SkipToMain.tsx
export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4
        focus:z-[100] focus:px-4 focus:py-2
        focus:bg-blue-600 focus:text-white
        focus:rounded-md focus:font-semibold
        focus:shadow-level-3
      "
    >
      Skip to main content
    </a>
  )
}

// src/app/layout.tsx
<body>
  <SkipToMain />
  <Navbar />
  <main id="main-content">
    {children}
  </main>
  <Footer />
</body>
```

---

## ARIA Landmarks

```tsx
// Every page must have clear landmark structure
<body>
  <a href="#main-content">Skip to main content</a>  {/* Skip link */}
  <header role="banner">
    <nav aria-label="Main navigation">...</nav>
  </header>
  <main id="main-content">
    ...
  </main>
  <footer role="contentinfo">
    <nav aria-label="Footer navigation">...</nav>
  </footer>
</body>
```

**Additional ARIA labels for repeated nav:**
```tsx
<nav aria-label="Main navigation">   {/* Header nav */}
<nav aria-label="Footer navigation">  {/* Footer nav */}
<nav aria-label="Table of contents">  {/* Legal page TOC */}
<nav aria-label="Breadcrumb">         {/* Breadcrumb */}
```

---

## Semantic HTML Requirements

```tsx
// ✅ Always use semantic HTML

// Headings in correct hierarchy (no skipping)
<h1>Page title</h1>
<h2>Section heading</h2>
<h3>Sub-section</h3>

// Lists for lists
<ul>
  <li>Feature 1</li>
  <li>Feature 2</li>
</ul>

// Buttons for actions, links for navigation
<button onClick={handleClick}>Submit</button>    // Action
<a href="/contact">Contact us</a>               // Navigation

// Tables for tabular data (Compliance table)
<table>
  <thead><tr><th scope="col">Designation</th>...</tr></thead>
  <tbody>...</tbody>
</table>

// ❌ Never
<div onClick={handleClick}>Click me</div>   // Use <button>
<span onClick={() => navigate('/contact')}>Contact</span>  // Use <a>
<div className="h1-style">Heading</div>     // Use <h1>
```

---

## Color Not the Only Differentiator

Market data uses color to convey meaning (green = positive, red = negative). Color cannot be the ONLY differentiator:

```tsx
// ✅ Color + icon + text
<MarketDataBadge change={+128.35} changePercent={+0.53} />

// Renders:
// [▲] +128.35 (0.53%) — in green
// The arrow ▲ communicates direction without color dependency

// ✅ Color + label
<span className="text-green-600" aria-label="Positive change">
  <TrendingUp size={14} aria-hidden="true" />
  +0.53%
</span>
```

Form validation:
```tsx
// ✅ Color + icon + text message
<input
  className="border-red-500"    // Color
  aria-invalid="true"
  aria-describedby="error-msg"
/>
<p id="error-msg" className="text-red-600 flex items-center gap-1">
  <AlertCircle size={14} aria-hidden="true" />  {/* Icon */}
  Phone number must be 10 digits                {/* Text message */}
</p>
```

---

## Form Accessibility

```tsx
// ContactForm full accessibility spec

// 1. Form has descriptive heading
<h2 id="contact-form-heading">Send us a message</h2>
<form aria-labelledby="contact-form-heading">

// 2. Required field indication
<label htmlFor="name">
  Name
  <span aria-label="required" className="text-red-500 ml-1">*</span>
</label>
// + form-level note:
<p className="text-sm text-gray-500">* Required fields</p>

// 3. Error summary on submit (move focus to summary)
{formHasErrors && (
  <div
    role="alert"
    aria-live="polite"
    aria-atomic="true"
    className="..."
    ref={errorSummaryRef}  // Focus this on submit with errors
    tabIndex={-1}
  >
    <h3>Please fix the following errors:</h3>
    <ul>
      {errors.map(error => <li key={error.field}>{error.message}</li>)}
    </ul>
  </div>
)}

// 4. Success state
{formSuccess && (
  <div role="status" aria-live="polite">
    Thank you! We'll get back to you within 2 business hours.
  </div>
)}

// 5. Loading state
<button
  type="submit"
  disabled={isSubmitting}
  aria-busy={isSubmitting}
  aria-label={isSubmitting ? 'Sending...' : 'Send message'}
>
  {isSubmitting ? <Spinner aria-hidden /> : null}
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>
```

---

## Language and Internationalization

```tsx
// Root layout — always specify language
<html lang="en">

// If Indian language content is ever added:
<html lang="en-IN">  // English as spoken in India
// Or for Hindi sections:
<span lang="hi">नमस्ते</span>
```

---

## Animation Accessibility

(Covered in detail in `docs/animation-guidelines.md` — summary here)

```tsx
// Global reduced-motion CSS (globals.css)
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Component-level (Framer Motion)
const animate = useMotionSafe()  // false when prefers-reduced-motion: reduce
initial={animate ? { opacity: 0 } : false}

// Market ticker
.ticker-track {
  @media (prefers-reduced-motion: reduce) { animation: none; }
}
```

---

## Accessible Component Checklist

For each component before marking Phase 3 complete:

### Navbar
- [ ] `<nav aria-label="Main navigation">`
- [ ] Hamburger button: `aria-expanded`, `aria-controls`, `aria-label`
- [ ] Drawer: focus trap active when open
- [ ] Drawer: Escape closes, focus returns to hamburger
- [ ] Active link: `aria-current="page"`

### Pricing Cards
- [ ] Plan comparison: visually clear without color alone
- [ ] CTA button: descriptive label (not just "Subscribe" — "Subscribe to Monthly Plan")
- [ ] Features list: `<ul><li>` structure

### FAQ Accordion
- [ ] `<button aria-expanded="true/false" aria-controls="answer-id">`
- [ ] Answer panel: `id` matching `aria-controls`, `role="region"`, `aria-labelledby`
- [ ] Keyboard: Enter/Space opens, Arrow keys navigate between items

### Contact Form
- [ ] All inputs have `<label>`
- [ ] Required fields marked
- [ ] Error messages use `role="alert"` and `aria-describedby`
- [ ] Submit button has loading state with `aria-busy`

### Market Ticker
- [ ] `aria-hidden="true"` on visual ticker
- [ ] Static `<ul>` for screen readers with `class="sr-only"`
- [ ] Pause on hover

### Legal Pages
- [ ] TOC links: `aria-label="Jump to Section Name"`
- [ ] TOC: `<nav aria-label="Table of contents">`
- [ ] Active section: `aria-current="true"` on active TOC item

### Tab Navigation
- [ ] `role="tablist"`, `role="tab"`, `role="tabpanel"`
- [ ] `aria-selected`, `aria-controls`, `aria-labelledby`
- [ ] Arrow keys navigate between tabs

---

## Accessibility Testing Tools

| Tool | What it Tests | When |
|------|-------------|------|
| axe DevTools (Chrome) | Automated violations | During development |
| Lighthouse | Score + automated checks | Pre-commit |
| VoiceOver (macOS/iOS) | Screen reader | Pre-launch |
| NVDA (Windows) | Screen reader | Pre-launch |
| Keyboard-only navigation | All interaction | Pre-launch |
| Color contrast checker | All combinations | During design |
| Screen magnification 200% | Layout at zoom | Pre-launch |

**Lighthouse Accessibility target: ≥ 95**
**axe DevTools: zero critical or serious violations**
