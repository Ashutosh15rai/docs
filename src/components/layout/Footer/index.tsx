import { Link } from 'react-router-dom';
import { ShieldCheck, Instagram, Youtube, Facebook, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { WHATSAPP_URL, SEBI_REG, SUPPORT_EMAIL, SEBI_REG_FULL, GRIEVANCE_PHONE, ADDRESS } from '@/constants/urls';

const FOOTER_COLUMNS = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Package', href: '/package' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Disclosure', href: '/disclosure' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Complaint Board', href: '/complaint-board' },
    ],
  },
  {
    title: 'Compliance',
    links: [
      { label: 'RA Registration Disclosure', href: '/ra-registration-disclosure' },
      { label: 'Grievance Redressal', href: '/grievance-redressal' },
      { label: 'Onboard Details', href: '/onboard-details' },
      { label: 'ODR Portal', href: '/odr-portal' },
      { label: 'User KYC', href: '/user-kyc' },
      { label: 'User Consent', href: '/user-consent' },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: `mailto:${SUPPORT_EMAIL}`, label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-900/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Vriddhi<span className="text-blue-400">Research</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-4">
              SEBI Registered Research Analyst providing structured index research, financial education, and market insights for Indian traders.
            </p>
            <div className="space-y-1 text-xs text-gray-500">
              <p>Research Analyst: {SEBI_REG_FULL}</p>
              <p>SEBI Reg. No: {SEBI_REG}</p>
              <p>NISM Series-XV Certified</p>
              <p>E-mail: {SUPPORT_EMAIL}</p>
              <p>Telephone: {GRIEVANCE_PHONE}</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp hover:bg-whatsapp/30 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
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
        </div>
      </Container>

      {/* Disclaimer Bar */}
      <div className="border-t border-white/5">
        <Container>
          <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="text-xs text-gray-500 leading-relaxed max-w-4xl">
              <p className="uppercase tracking-wide">
                Vriddhi Research is managed by SEBI Registered Research Analyst {SEBI_REG_FULL} (Reg No: {SEBI_REG}). Investment in securities market is subject to market risks. Read all related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Research insights are for educational purposes only. Past performance is not indicative of future results.
              </p>
              <p className="mt-3">
                © {new Date().getFullYear()} Vriddhi Research. All Rights Reserved.
              </p>
            </div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-4 py-2.5 text-xs font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-colors shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to Top
            </motion.button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
