# Footer — Vriddhi Research

Complete documentation of the global footer used on every page of vriddhiresearch.com.

---

## Overview

The footer is a **dark navy, 4-column layout** followed by a **full-width legal disclaimer bar**. It appears on every page of the site. It serves as the primary location for secondary navigation, legal compliance links, brand identity reinforcement, and contact information.

---

## Visual Design

| Property | Value |
|----------|-------|
| Background | Dark navy (~#0A0F2C or similar very dark blue) |
| Text color | White (#FFFFFF) for headings, light gray for body links |
| Column layout | 4 columns (CSS Grid or Flexbox) |
| Padding | Generous vertical padding (likely 64–80px top/bottom) |
| Bottom bar | Separate full-width bar below the columns |

---

## Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  [Brand Col]        [Navigate]    [Legal]       [Compliance]    │
│                                                                  │
│  VR Logo            Home          Disclosure    RA Registration  │
│  Tagline            About Us      Privacy       Grievance        │
│  SEBI details       Courses       Refund        Onboard          │
│  Email              Contact       T&C           ODR Portal       │
│  Phone              Package       Disclaimer    User KYC         │
│                                   Complaint     User Consent     │
│  [Social Icons]                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [Full-width disclaimer text]                  [Copyright]      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Column 1: Brand Column

**Width:** Widest column (~30% of footer)

### Logo

- Same VR icon (geometric blue diamond) as header but rendered on dark background
- "VRIDDHI RESEARCH" wordmark in white
- Link: clicking logo goes to `/`

### Tagline

> "SEBI Registered Research Analyst providing structured index research, financial education, and market insights for Indian traders."

**Style:** Light gray text, ~13–14px, 2–3 lines

### SEBI & Contact Details

| Detail | Value |
|--------|-------|
| SEBI Reg. No. | INH000027593 |
| Certification | NISM Series-XV Certified |
| Research Analyst | YESHWANT BHISHAM VALECHA |
| E-mail | valechayeshwant@gmail.com |
| Telephone | +91 9724926927 |

**Style:** Small text (~12–13px), light gray, structured list

### Social Icons

5 social icon buttons in a horizontal row:

| Platform | Icon | Link |
|----------|------|------|
| Instagram | Instagram icon | Instagram profile |
| YouTube | YouTube icon | YouTube channel |
| Facebook | Facebook icon | Facebook page |
| WhatsApp | WhatsApp icon | WhatsApp contact |
| Email | Envelope icon | mailto: link |

**Style:** Circular icon buttons, gray background, white icon — likely blue/white on hover

---

## Column 2: Navigate

**Column Heading:** "NAVIGATE" (white, uppercase, bold, ~12–13px)

| Link Label | URL | Status |
|------------|-----|--------|
| Home | `/` | ✅ Live |
| About Us | `/about` | ✅ Live |
| Courses | `/courses` | ✅ Live |
| Contact Us | `/contact` | ✅ Live |
| Package | `/package` | ✅ Live |

**Note:** Package/Pricing page is **only** accessible from this footer column — it is absent from the main navigation. This is a major conversion bottleneck.

---

## Column 3: Legal

**Column Heading:** "LEGAL" (white, uppercase, bold, ~12–13px)

| Link Label | URL | Status |
|------------|-----|--------|
| Disclosure | `/disclosure` | ✅ Live |
| Privacy Policy | `/privacy-policy` | ✅ Live |
| Refund Policy | `/refund-policy` | ✅ Live |
| Terms & Conditions | `/terms-and-conditions` | ✅ Live |
| Disclaimer | `/disclaimer` | ✅ Live |
| Complaint Board | *(unverified URL)* | ⚠️ Unverified |

---

## Column 4: Compliance

**Column Heading:** "COMPLIANCE" (white, uppercase, bold, ~12–13px)

| Link Label | URL | Status |
|------------|-----|--------|
| RA Registration Disclosure | `/ra-registration-disclosure` | ❌ 404 |
| Grievance Redressal | `/grievance-redressal` | ✅ Live |
| Onboard Details | `/onboard-details` | ✅ Live |
| ODR Portal | *(unverified URL)* | ⚠️ Unverified |
| User KYC | *(unverified URL)* | ⚠️ Unverified |
| User Consent | *(unverified URL)* | ⚠️ Unverified |

**Critical:** RA Registration Disclosure returns 404 — this is a SEBI compliance requirement and must be fixed.

---

## Bottom Disclaimer Bar

### Layout

Full-width bar below the 4-column footer area. Contains:
- Left/center: Legal disclaimer text (very small, all-caps or mixed)
- Right: Copyright notice

### Disclaimer Text

> "VRIDDHI RESEARCH IS MANAGED BY SEBI REGISTERED RESEARCH ANALYST YESHWANT BHISHAM VALECHA (REG NO: INH000027593). INVESTMENT IN SECURITIES MARKET IS SUBJECT TO MARKET RISKS. READ ALL RELATED DOCUMENTS CAREFULLY BEFORE INVESTING. REGISTRATION GRANTED BY SEBI AND CERTIFICATION FROM NISM IN NO WAY GUARANTEE PERFORMANCE OF THE INTERMEDIARY OR PROVIDE ANY ASSURANCE OF RETURNS TO INVESTORS. RESEARCH INSIGHTS ARE FOR EDUCATIONAL PURPOSES ONLY. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS."

### Copyright

> "© 2026 Vriddhi Research. All Rights Reserved." (right-aligned)

### Issues with Disclaimer Bar

1. **Font size is extremely small** — text appears to be ~10–11px, far below accessibility minimums (WCAG recommends 14px minimum for body text)
2. **All-caps text is harder to read** — WCAG discourages all-caps for body text; it reduces readability
3. **White text on very dark background at tiny size** — contrast may technically pass but readability is poor
4. **No wrapping observed** — text may run too long on smaller screens

---

## Footer Link Styling

| State | Style |
|-------|-------|
| Default | Light gray text, no underline |
| Hover | White or blue text, underline appears |
| Active | White text |

---

## Footer Issues & Recommendations

| Issue | Severity | Fix |
|-------|----------|-----|
| RA Registration Disclosure is 404 | Critical | Build the page immediately — compliance risk |
| Package page not in main nav | High | Duplicate link in main header or rename to "Plans" |
| Disclaimer text is too small | Medium | Increase to minimum 12px, ideally 13–14px |
| "Why VR" not in footer nav | Low | Add to Navigate column once page is built |
| Unverified compliance page URLs | Medium | Verify ODR Portal, User KYC, User Consent exist |
| Social links lead to unverified destinations | Low | Confirm all social profiles are active |
| No "Back to Top" button | Low | Add scroll-to-top button for long pages |
| No language selector | Low | Consider for future if audience expands |

---

## Rebuild Notes

When rebuilding the footer:

1. **Maintain 4-column layout** with responsive collapse (4 → 2 → 1 column on mobile)
2. **Increase disclaimer text to at least 12px** — 10px is unreadable on mobile
3. **Add hover animations to social icons** — scale + color transition on hover
4. **Fix all broken links** before launch (RA Registration, Why VR)
5. **Add Package to main nav** — remove it as footer-only
6. **Consider adding a mini contact form or WhatsApp CTA** at the top of the footer area (above the columns)
7. **Verify and document all compliance page URLs** (ODR Portal, User KYC, User Consent, Complaint Board)
