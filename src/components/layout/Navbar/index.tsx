'use client';

import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/hooks/useScrolled';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Container } from './Container';
import { NAV_LINKS } from '@/constants/navigation';
import { WHATSAPP_URL } from '@/constants/urls';

export function Navbar() {
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-navy-900">
              Vriddhi<span className="text-blue-600">Research</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/courses"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Courses
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-whatsapp px-4 py-2 text-sm font-semibold text-white hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              Join Free
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white p-0">
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <span className="text-base font-bold text-navy-900">
                    Vriddhi<span className="text-blue-600">Research</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col px-6 py-6 gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-navy-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <SheetClose asChild>
                    <a
                      href="/courses"
                      className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Browse Courses
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-white hover:bg-whatsapp-hover transition-colors"
                    >
                      Join Free Community
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
}
