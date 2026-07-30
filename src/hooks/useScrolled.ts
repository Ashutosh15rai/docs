'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true when the page has been scrolled past a threshold (default 10px).
 * Useful for adding shadow/background change to sticky navbars.
 */
export function useScrolled(threshold = 10): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
