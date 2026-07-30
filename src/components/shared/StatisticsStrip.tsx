import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import type { Statistic } from '@/data/statistics';

interface StatisticsStripProps {
  stats: Statistic[];
  className?: string;
  dark?: boolean;
}

export function StatisticsStrip({ stats, className, dark = false }: StatisticsStripProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-8 lg:grid-cols-4', className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className={cn('text-3xl font-extrabold tracking-tight sm:text-4xl', dark ? 'text-white' : 'text-navy-900')}>
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
            />
          </div>
          <p className={cn('mt-1 text-sm font-medium', dark ? 'text-gray-400' : 'text-gray-500')}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
