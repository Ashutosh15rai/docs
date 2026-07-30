# Header — Vriddhi Research

Complete documentation of the global header/navbar used on every page of vriddhiresearch.com.

---

## Overview

The header is a **white horizontal sticky navbar** that appears at the top of every page. It contains the brand logo on the left, primary navigation links in the center, and two action buttons on the right.

---

## Visual Design

| Property | Value |
|----------|-------|
| Background | White (#FFFFFF) or very light gray |
| Border/Shadow | Subtle bottom shadow (box-shadow) |
| Height | ~56–60px |
| Position | Sticky (remains at top on scroll) |
| Width | Full viewport width, content constrained to max-width container |
| z-index | Above all page content |

---

## Layout

```
┌────────────────────────────────────────────────────────────────────┐
│  [🔷 VRIDDHI RESEARCH]   Home  About  Contact  Why VR   [Courses] [Join Free] │
└────────────────────────────────────────────────────────────────────┘
 ←— Logo (left) ——→  ←————————— Nav Links (center) ——————→  ←— Buttons (right) —→
```

---

## Logo

| Property | Detail |
|----------|--------|
| Icon | Geometric "VR" diamond/chevron shape in gradient blue |
| Wordmark | "VRIDDHI RESEARCH" in bold dark text |
| Color | Icon: blue gradient (#1E90FF or similar); Text: near-black |
| Link | `/` (homepage) |
| Spacing | Adequate padding from left edge |

**Description:** The logo uses a custom geometric mark — appears to be two "V" shapes or chevrons forming a diamond, rendered in gradient blue. The wordmark "VRIDDHI RESEARCH" is set in a bold sans-serif typeface in dark/near-black.

---

## Navigation Links

| Label | URL | Notes |
|-------|-----|-------|
| Home | `/` | Active underline when on homepage |
| About | `/about` | Active underline when on about page |
| Contact | `/contact` | Active underline when on contact page |
| Why VR | `/why-vr` | ⚠️ **Links to 404 — BROKEN** |

### Styling

| Property | Value |
|----------|-------|
| Font weight | Regular or Medium (~500) |
| Font size | ~15–16px |
| Color | Dark gray / near-black (default) |
| Active state | Underline indicator below active link |
| Hover state | Color shift (likely blue or darker) |
| Spacing | Even horizontal gap between links |

### Notes

- Navigation is **flat** — no dropdowns or sub-menus
- "Why VR" is displayed as a standard nav link but leads to a 404 page
- No visual distinction marks the "Why VR" link as broken

---

## Action Buttons (Right Side)

### Button 1: Courses

| Property | Detail |
|----------|--------|
| Label | "Courses" |
| Icon | Small icon prefix (appears to be a monitor/screen icon 📋) |
| Style | Outlined/bordered button, dark border, dark text |
| Link | `/courses` |
| Background | Transparent / white |
| Border | Dark color, rounded corners (~6–8px radius) |
| Font | Same as nav links, medium weight |

### Button 2: Join Free

| Property | Detail |
|----------|--------|
| Label | "Join Free" |
| Icon | WhatsApp icon prefix (green) |
| Style | Filled solid button |
| Background | Green (#25D366 WhatsApp green or similar) |
| Text color | White |
| Link | External WhatsApp group link |
| Border | None (solid fill), rounded corners (~6–8px radius) |
| Font | Medium/semibold weight |

---

## Active State Behavior

When a user is on a specific page, the corresponding nav link shows an active indicator:

| Page | Active Link |
|------|-------------|
| `/` | Home (underline) |
| `/about` | About (underline) |
| `/contact` | Contact (underline) |
| `/courses` | None visible in nav links (Courses is a button, not a link) |
| `/why-vr` | Why VR (but page is 404) |

---

## Mobile Behavior

**Not directly observed** in the screenshots captured. Based on the desktop structure, the expected mobile behavior:

- Below ~768px breakpoint: nav links hidden, hamburger icon appears
- Hamburger icon: top-right position, dark color, 3-bar icon
- Drawer/overlay: slides in from right or top, contains all nav links + CTA buttons
- Drawer items: Home, About, Contact, Why VR, Courses, Package (ideally), Join Free

**Must verify:** Whether Package appears in the mobile nav (it's missing from desktop nav but present in footer)

---

## Market Ticker (Sub-Header)

On the **Home page only**, immediately below the navbar there is a **Market Ticker Bar**:

| Property | Detail |
|----------|--------|
| Background | Dark navy (strong contrast with white navbar above) |
| Height | ~40px |
| Content | Scrolling stock indices (SENSEX, NIFTY BANK, etc.) |
| Animation | Continuous left-scroll (CSS marquee or JS animation) |

This is technically a section of the homepage, not part of the header component itself — but visually it reads as a continuation of the header area on the homepage.

---

## Header Issues & Recommendations

| Issue | Severity | Recommendation |
|-------|----------|----------------|
| "Why VR" links to 404 | Critical | Fix or remove immediately |
| Package/Pricing not in nav | High | Add "Plans" between Contact and Why VR |
| No mobile nav documented | High | Design and implement hamburger mobile nav |
| No user account link | Medium | Add "Sign In" if LMS auth exists |
| No scroll state change | Low | Consider adding shadow/color change on scroll |
| No search icon in nav | Low | Consider adding global search for course discovery |

---

## Rebuild Specifications

### Component structure

```
<Header>
  <NavContainer>
    <Logo href="/">
      <LogoIcon />
      <LogoWordmark>VRIDDHI RESEARCH</LogoWordmark>
    </Logo>
    <NavLinks>
      <NavLink href="/" active={current === 'home'}>Home</NavLink>
      <NavLink href="/about" active={current === 'about'}>About</NavLink>
      <NavLink href="/contact" active={current === 'contact'}>Contact</NavLink>
      <NavLink href="/why-vr" active={current === 'why-vr'}>Why VR</NavLink>
      <NavLink href="/package" active={current === 'package'}>Plans</NavLink>
    </NavLinks>
    <NavActions>
      <SecondaryButton href="/courses" icon={<CoursesIcon />}>Courses</SecondaryButton>
      <PrimaryButton href={WHATSAPP_URL} icon={<WhatsAppIcon />}>Join Free</PrimaryButton>
    </NavActions>
    <MobileMenuToggle /> {/* Hamburger — mobile only */}
  </NavContainer>
</Header>
```

### Design tokens to establish

```
header.background: #FFFFFF
header.height: 60px
header.shadow: 0 1px 3px rgba(0,0,0,0.08)
header.logo.iconColor: #1E90FF (gradient)
header.logo.textColor: #0A0F2C
header.nav.textColor: #374151
header.nav.activeColor: #1E90FF
header.nav.hoverColor: #1E90FF
header.cta.primary.bg: #25D366
header.cta.primary.text: #FFFFFF
header.cta.secondary.border: #1F2937
header.cta.secondary.text: #1F2937
```
