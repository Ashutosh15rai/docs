'use client';

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/hooks/useScrolled';
import { Container } from '../Container';
import { NAV_LINKS } from '@/constants/navigation';
import { WHATSAPP_URL } from '@/constants/urls';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500',
          scrolled
            ? 'bg-navy-950/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] border-b border-white/5'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <Container>
          <nav className="flex h-[72px] items-center justify-between" aria-label="Main navigation">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-900/30 transition-all group-hover:shadow-blue-700/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <ShieldCheck className="h-5 w-5" />
              </motion.div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Vriddhi<span className="text-blue-400">Research</span>
              </span>
            </NavLink>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    )
                  }
                  end={link.href === '/'}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 rounded-lg bg-white/[0.06]"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all"
              >
                Courses
              </NavLink>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Free
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-[85vw] max-w-sm bg-navy-950 border-l border-white/5 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-base font-extrabold text-white">
                      Vriddhi<span className="text-blue-400">Research</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-white/5"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex flex-col px-6 py-4 gap-1 flex-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <NavLink
                        to={link.href}
                        end={link.href === '/'}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                            isActive
                              ? 'bg-blue-600/10 text-blue-400'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                  <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/5">
                    <NavLink
                      to="/courses"
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-gray-300"
                    >
                      Browse Courses
                    </NavLink>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3.5 text-sm font-semibold text-navy-950"
                    >
                      Join Free Community
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
