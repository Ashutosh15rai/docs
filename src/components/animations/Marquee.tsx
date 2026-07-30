'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  reverse?: boolean;
}

/**
 * Infinite horizontal marquee using CSS animation.
 * Content is duplicated so the loop is seamless.
 * Respects prefers-reduced-motion via CSS media query.
 */
export function Marquee({
  children,
  className,
  speed = 'normal',
  pauseOnHover = false,
  reverse = false,
}: MarqueeProps) {
  const speedMap = { slow: '60s', normal: '40s', fast: '25s' };

  return (
    <div
      className={cn(
        'flex overflow-hidden',
        pauseOnHover && 'group',
        className
      )}
    >
      <div
        className="flex shrink-0 items-center gap-8"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speedMap[speed]} linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
