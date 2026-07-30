import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Max-width centered container with responsive padding.
 * Sizes: sm(640) | md(768) | lg(1024) | xl(1280) | full(100%)
 */
export function Container({ children, className, size = 'xl' }: ContainerProps) {
  const sizeClass = {
    sm:  'max-w-screen-sm',
    md:  'max-w-screen-md',
    lg:  'max-w-screen-lg',
    xl:  'max-w-screen-xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClass[size], className)}>
      {children}
    </div>
  );
}
