import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'navy' | 'navy-dark' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
}

/**
 * Standard section wrapper with configurable background, padding, and container.
 * Every homepage section should use this as its root.
 */
export function SectionWrapper({
  children,
  className,
  containerClassName,
  background = 'white',
  padding = 'lg',
  containerSize = 'xl',
  id,
}: SectionWrapperProps) {
  const bgMap = {
    white:       'bg-white',
    gray:        'bg-gray-50',
    navy:        'bg-navy-900',
    'navy-dark': 'bg-navy-950',
    transparent: 'bg-transparent',
  };

  const padMap = {
    none: 'py-0',
    sm:   'py-8',
    md:   'py-12',
    lg:   'py-16 lg:py-24',
    xl:   'py-20 lg:py-32',
  };

  return (
    <section id={id} className={cn(bgMap[background], padMap[padding], className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
