export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why VR', href: '/why-vr' },
  { label: 'Contact', href: '/contact' },
];
