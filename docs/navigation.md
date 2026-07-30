# Navigation — Vriddhi Research

Complete documentation of all navigation systems on vriddhiresearch.com.

---

## Desktop Navigation (Header)

### Visual Appearance

- **Position:** Fixed/sticky top bar
- **Background:** White / light background with slight shadow
- **Height:** ~56px
- **Layout:** Logo left | Nav links center | CTA buttons right

### Logo

- **Visual:** Custom "VR" icon (geometric diamond shape in blue) + "VRIDDHI RESEARCH" wordmark in dark bold text
- **Link:** Clicking logo → `/` (homepage)
- **Colour:** Icon is blue (#1E90FF ish), text is near-black

### Navigation Links (center)

| Label | URL | Active State | Notes |
|-------|-----|--------------|-------|
| Home | `/` | Underline indicator | Text link |
| About | `/about` | Underline indicator | Text link |
| Contact | `/contact` | Underline indicator | Text link |
| Why VR | `/why-vr` | Underline indicator | ⚠️ 404 — broken |

**Styling:** Plain text links, no dropdowns, active page gets an underline indicator. Font appears to be medium weight, dark color (~14–16px).

### CTA Buttons (right side)

| Button | URL | Style | Icon |
|--------|-----|-------|------|
| Courses | `/courses` | Outlined / bordered button | 📋 small icon prefix |
| Join Free | External WhatsApp link | Filled green button | WhatsApp icon prefix |

**Button styling:**
- "Courses" — dark outline, rounded, dark text, icon on left
- "Join Free" — solid green (#25D366 WhatsApp green), white text, WhatsApp icon, rounded corners

### Navigation Issues

1. **"Why VR" leads to 404** — A nav-level link pointing to a missing page is a critical UX failure. Every user who clicks it lands on an error page.
2. **No dropdown menus** — flat navigation; all destinations are top-level
3. **Package page missing from nav** — a key conversion page (pricing) is only accessible from the footer
4. **No user account link** — if courses require authentication, there's no visible login/signup in the nav

---

## Mobile Navigation

### Observed Behavior

- No hamburger menu was visible in the screenshots captured at desktop viewport
- The site almost certainly has a mobile nav (hamburger/drawer) given it's a modern web app
- **Needs verification:** mobile breakpoint behavior, collapsed nav state, drawer animation

### Expected Mobile Pattern

Based on the desktop nav structure, mobile should collapse to:
- Hamburger icon (top right or alongside logo)
- Drawer/slide-in menu with: Home, About, Contact, Why VR, Courses, Package
- CTA buttons (Join Free) at bottom of drawer

---

## Dropdowns

**None observed.** The current navigation is flat with no dropdown menus or mega-menus. Every nav item is a direct link.

---

## Footer Navigation

### Footer Structure

The footer is divided into **4 columns**:

#### Column 1 — Brand Column (leftmost)
- VR logo + "VRIDDHI RESEARCH" wordmark (white on dark background)
- Tagline: "SEBI Registered Research Analyst providing structured index research, financial education, and market insights for Indian traders."
- SEBI details:
  - SEBI Reg. No.: INH000027593
  - NISM Series-XV Certified
  - Research Analyst — YESHWANT BHISHAM VALECHA
  - E-mail: valechayeshwant@gmail.com
  - Telephone: +91 9724926927
- **Social Icons:** Instagram, YouTube, Facebook, WhatsApp, Email (5 icons in a row)

#### Column 2 — NAVIGATE
| Label | URL |
|-------|-----|
| Home | `/` |
| About Us | `/about` |
| Courses | `/courses` |
| Contact Us | `/contact` |
| Package | `/package` |

#### Column 3 — LEGAL
| Label | URL |
|-------|-----|
| Disclosure | `/disclosure` |
| Privacy Policy | `/privacy-policy` |
| Refund Policy | `/refund-policy` |
| Terms & Conditions | `/terms-and-conditions` |
| Disclaimer | `/disclaimer` |
| Complaint Board | *(URL unverified)* |

#### Column 4 — COMPLIANCE
| Label | URL |
|-------|-----|
| RA Registration Disclosure | `/ra-registration-disclosure` ⚠️ 404 |
| Grievance Redressal | `/grievance-redressal` |
| Onboard Details | `/onboard-details` |
| ODR Portal | *(URL unverified)* |
| User KYC | *(URL unverified)* |
| User Consent | *(URL unverified)* |

### Footer Bottom Bar

- **Full-width disclaimer text** (very small, white on dark background):
  > "VRIDDHI RESEARCH IS MANAGED BY SEBI REGISTERED RESEARCH ANALYST YESHWANT BHISHAM VALECHA (REG NO: INH000027593). INVESTMENT IN SECURITIES MARKET IS SUBJECT TO MARKET RISKS. READ ALL RELATED DOCUMENTS CAREFULLY BEFORE INVESTING. REGISTRATION GRANTED BY SEBI AND CERTIFICATION FROM NISM IN NO WAY GUARANTEE PERFORMANCE OF THE INTERMEDIARY OR PROVIDE ANY ASSURANCE OF RETURNS TO INVESTORS. RESEARCH INSIGHTS ARE FOR EDUCATIONAL PURPOSES ONLY. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS."
- **Copyright:** © 2026 Vriddhi Research. All Rights Reserved. (right-aligned)

### Footer Background

Dark navy / near-black background matching the hero sections. All footer text is white/light gray.

---

## Breadcrumbs

**None observed.** The site does not implement breadcrumb navigation on any page visited.

---

## Navigation Hierarchy

```
Primary Navigation (Header)
├── Home (/)
├── About (/about)
├── Contact (/contact)
├── Why VR (/why-vr) — BROKEN
├── [Courses Button] (/courses)
└── [Join Free Button] (WhatsApp external)

Footer Navigation
├── NAVIGATE
│   ├── Home
│   ├── About Us
│   ├── Courses
│   ├── Contact Us
│   └── Package          ← Pricing page only accessible here
├── LEGAL
│   ├── Disclosure
│   ├── Privacy Policy
│   ├── Refund Policy
│   ├── Terms & Conditions
│   ├── Disclaimer
│   └── Complaint Board
└── COMPLIANCE
    ├── RA Registration Disclosure (BROKEN)
    ├── Grievance Redressal
    ├── Onboard Details
    ├── ODR Portal
    ├── User KYC
    └── User Consent
```

---

## Navigation Gaps & Recommendations

| Issue | Impact | Recommendation |
|-------|--------|----------------|
| "Why VR" links to 404 | High — destroys trust | Build the page or remove the nav link immediately |
| Package not in main nav | High — hidden conversion path | Add "Pricing" or "Plans" to main nav |
| No user login/account link | Medium — course enrollment is unclear | Add "Sign In" or "My Courses" if LMS auth exists |
| No breadcrumbs on legal pages | Low — navigation context lost | Add breadcrumb: Home → Legal → Privacy Policy |
| RA Registration Disclosure is 404 | High — legal/compliance risk | Fix immediately; this is a regulatory requirement |
| No mobile nav documented | Medium | Audit and document mobile nav behavior |
