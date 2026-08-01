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
        'group flex items-start gap-4 rounded-xl p-5 transition-all duration-300',
        isDark
          ? 'bg-navy-800/60 border border-white/5 hover:bg-navy-800/80 hover:border-white/10'
          : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-gray-200',
        className
      )}
    >
      <div
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105',
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
