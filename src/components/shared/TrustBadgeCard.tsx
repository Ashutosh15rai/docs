import { cn } from '@/lib/utils';

interface TrustBadgeCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Icon + title + subtitle card for trust bars and feature grids.
 */
export function TrustBadgeCard({
  icon,
  title,
  subtitle,
  variant = 'light',
  className,
}: TrustBadgeCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'flex items-start gap-4 rounded-xl p-5 transition-all',
        isDark
          ? 'bg-navy-800/60 border border-white/5'
          : 'bg-white border border-gray-100 shadow-sm',
        className
      )}
    >
      <div
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg',
          isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
        )}
      >
        {icon}
      </div>
      <div>
        <h3
          className={cn(
            'text-sm font-semibold',
            isDark ? 'text-white' : 'text-gray-900'
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'mt-0.5 text-sm',
            isDark ? 'text-gray-400' : 'text-gray-500'
          )}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
