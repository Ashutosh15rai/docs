# Forms — Vriddhi Research

Complete documentation of every form and form-like interactive input element found on vriddhiresearch.com.

---

## Form Inventory Summary

| # | Form | Page | Type | Status |
|---|------|-------|------|--------|
| F-01 | Course Search | /courses | Search input | ✅ Present |
| F-02 | 404 Search | /* (404 page) | Search input | ✅ Present |
| F-03 | Contact Form | /contact | Contact form | ❌ Does not exist |

**Critical Finding:** There is NO contact form on the website. The Contact page provides only external link redirects (WhatsApp, email, phone). This is a significant gap in lead capture capability.

---

## F-01: Course Search Form

**Page:** `/courses`  
**Purpose:** Allow visitors to search through available courses by keyword

### Visual Layout

Full-width search bar spanning the content area below the navbar.

```
[ 🔍 Search courses...                    ] [ Search ]
```

### Fields

| Field | Type | Name/ID | Placeholder | Required | Validation |
|-------|------|---------|-------------|----------|------------|
| Search query | text input | unknown | "Search courses..." | No (can submit empty) | None visible |

### Buttons

| Button | Label | Style | Action |
|--------|-------|-------|--------|
| Submit | "Search" | Solid blue, right-aligned | Submits search query |

### Behavior

- Search icon (🔍) displayed inside left of input field
- "Search" button is separated to the right
- Submission likely filters the courses grid or redirects to a results view
- Empty search behavior unknown (possibly shows all courses)

### Validation

- **Client-side:** None observed
- **Server-side:** Unknown
- **Error states:** Not documented

### Submission Flow

1. User types a keyword (e.g., "options")
2. Clicks "Search" button or presses Enter
3. Expected: Courses grid filters to matching courses
4. With only 1 course currently available, search results will be very limited

### Notes

- Currently only 1 course is available — the search is aspirational (built for future course catalog expansion)
- Consider adding autocomplete or keyword suggestions
- Filter-as-you-type (instant search) would improve UX significantly

---

## F-02: 404 Page Search Form

**Page:** Any invalid URL (404 error page)  
**Purpose:** Help lost users find what they were looking for

### Visual Layout

Centered search box on the error page.

```
        [ 🔍 Search...                        ]
```

### Fields

| Field | Type | Placeholder | Required |
|-------|------|-------------|----------|
| Search query | text input | "Search..." | No |

### Buttons

- No visible separate button — submission likely via Enter key press

### Behavior

- User types search term
- Presses Enter
- Likely redirects to a search results page or filters homepage content

### Notes

- Bare minimum implementation — just a text input
- No "Search" button visible, which may be confusing for users who don't know to press Enter
- Adding a visible submit button would improve accessibility and UX clarity

---

## F-03: Contact Form (MISSING)

**Page:** `/contact`  
**Status:** ❌ **Does not exist**  
**Impact:** High — users cannot send a structured message without leaving the website

### What Users Would Expect

A typical contact form for a financial services provider would include:

| Field | Type | Purpose |
|-------|------|---------|
| Full Name | text | Identify the person |
| Phone Number | tel | Primary contact in Indian market (WhatsApp) |
| Email Address | email | Secondary contact |
| Subject / Enquiry Type | select | Categorize: Course, Subscription, Support, Compliance |
| Message | textarea | Free-form query |
| Consent checkbox | checkbox | Agree to be contacted via WhatsApp/email |

### Why This Gap Matters

1. **Users who prefer formal communication** (e.g., compliance-related queries) have no on-site option
2. **Lead capture is impossible** — no way to collect visitor information for follow-up
3. **Friction for non-WhatsApp users** — some visitors may not have WhatsApp or prefer email
4. **SEO/analytics gap** — no form means no conversion events to track in analytics

### Recommendation

Add a contact form to the Contact page alongside (not replacing) the existing channel cards. The form should:

- Submit to a backend endpoint or third-party form service
- Send an auto-reply email to the user
- Notify the team via email or WhatsApp
- Respect SEBI communication guidelines (no guaranteed returns language)

---

## Missing Forms — Opportunities

These forms don't exist but would significantly improve the funnel:

### Lead Capture / Newsletter Form

**Where:** Homepage (below Trust Badges or before footer), or a dedicated landing page for the free community

**Fields:**
- Name (text)
- Phone/WhatsApp number (tel)
- "Join Free Community" CTA

**Purpose:** Capture leads before directing to WhatsApp; enables email follow-up campaign

---

### Course Enrollment / Sign Up Form

**Where:** Course Detail page ("Start Course" button currently has a lock icon, implying auth)

**Fields:**
- Email address
- Password
- Name

**Purpose:** If courses are gated, there needs to be a visible sign-up/login flow on the public site. Currently, clicking "Start Course" is likely a dead-end for unauthenticated users.

---

### Subscription Inquiry Form

**Where:** Package page — alongside or below "Connect Us" buttons

**Fields:**
- Name
- Phone number
- Plan preference (Monthly / Quarterly)
- How did you hear about us? (optional)

**Purpose:** Collect structured subscription leads; eliminate the friction of finding the WhatsApp link

---

## Form Design Standards (for Rebuild)

When building forms for the new frontend, apply these standards:

### Input Fields

- Minimum height: 44px (touch target)
- Border: 1px solid neutral-300
- Focus state: blue border + subtle ring shadow
- Error state: red border + error message below input
- Label: above input (never inside as placeholder replacement)

### Validation Rules

| Field | Rule |
|-------|------|
| Phone | 10-digit Indian number (validate format) |
| Email | Standard email format |
| Name | Minimum 2 characters, letters only |
| Message | Minimum 10 characters |

### Error Handling

- Show inline error messages below each invalid field
- Highlight invalid fields with red border
- Show a success message or redirect on successful submission
- Never clear the form on error — preserve user input

### Accessibility

- All inputs must have associated `<label>` elements
- Use `aria-required="true"` for required fields
- Provide `aria-describedby` for error messages
- Ensure form is keyboard-navigable (Tab order, Enter to submit)
- Error messages announced to screen readers

### Submission Flow

1. User fills form
2. Client-side validation on blur (per field) and on submit (all fields)
3. Form submits to backend/API
4. Loading state shown on CTA button (spinner, disabled)
5. Success: display success message, optionally redirect
6. Error: display error message, allow retry without clearing inputs
