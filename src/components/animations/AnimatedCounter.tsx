'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

/**
 * Animated number counter that counts up when scrolled into view.
 * Respects prefers-reduced-motion.
 */
export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, reduced]);

  useEffect(() => {
    if (reduced) return;
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplay(Number(latest.toFixed(decimals)));
    });
    return () => unsubscribe();
  }, [springValue, decimals, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
