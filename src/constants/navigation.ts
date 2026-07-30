export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Contact', href: '/contact' },
];

export const ALL_ROUTES = [
  '/',
  '/about',
  '/courses',
  '/learning-paths',
  '/premium-community',
  '/market-insights',
  '/testimonials',
  '/contact',
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
