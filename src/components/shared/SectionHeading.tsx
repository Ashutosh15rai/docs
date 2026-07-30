import { cn } from '@/lib/utils';
import { SectionBadge } from './SectionBadge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'outline' | 'dot' | 'legal' | 'filled';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}

/**
 * Standard section heading with optional badge, title, and subtitle.
 */
export function SectionHeading({
  badge,
  badgeVariant = 'outline',
  title,
  subtitle,
  align = 'left',
  className,
  titleClassName,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {badge && (
        <SectionBadge
          label={badge}
          variant={badgeVariant}
          className={cn('mb-4 inline-flex', align === 'center' && 'mx-auto')}
        />
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl',
          dark ? 'text-white' : 'text-navy-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed max-w-2xl',
            dark ? 'text-gray-300' : 'text-gray-600',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
