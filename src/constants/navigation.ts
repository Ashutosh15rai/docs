export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why VR', href: '/why-vr' },
  { label: 'Contact', href: '/contact' },
  { label: 'Plans', href: '/package' },
];

export const ALL_ROUTES = [
  '/',
  '/about',
  '/why-vr',
  '/contact',
  '/courses',
  '/courses/:slug',
  '/package',
  '/faq',
  '/privacy-policy',
  '/terms-and-conditions',
  '/refund-policy',
  '/disclaimer',
  '/disclosure',
  '/grievance-redressal',
  '/onboard-details',
  '/ra-registration-disclosure',
  '/odr-portal',
  '/user-kyc',
  '/user-consent',
  '/complaint-board',
];
