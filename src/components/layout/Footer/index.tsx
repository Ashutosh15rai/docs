import { GraduationCap, Instagram, Youtube, Facebook, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { Newsletter } from '@/components/shared/Newsletter';
import { WHATSAPP_URL, SEBI_REG } from '@/constants/urls';

const FOOTER_COLUMNS = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Contact', href: '/contact' },
      { label: 'Membership', href: '/package' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
  {
    title: 'Compliance',
    links: [
      { label: 'RA Registration', href: '/ra-registration-disclosure' },
      { label: 'Grievance Redressal', href: '/grievance-redressal' },
      { label: 'Onboard Details', href: '/onboard-details' },
      { label: 'ODR Portal', href: '/odr-portal' },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:support@vriddhiresearch.com', label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Vriddhi<span className="text-blue-400">Research</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Digital Marketing & Financial Education Academy. Building confident traders through structured learning and research-backed insights.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              SEBI Reg. No: {SEBI_REG}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp hover:bg-whatsapp/30 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <Newsletter dark />
          </div>
        </div>
      </Container>

      {/* Disclaimer Bar */}
      <div className="border-t border-white/5">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-500 leading-relaxed max-w-3xl">
              <p>
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BSE — in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The content provided is for educational and informational purposes only and should not be construed as investment advice or recommendation.
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} Vriddhi Research. All Rights Reserved.
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-colors shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to Top
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
