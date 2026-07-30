import { cn } from '@/lib/utils';

interface SectionBadgeProps {
  label: string;
  variant?: 'outline' | 'dot' | 'legal' | 'filled';
  className?: string;
}

/**
 * Small pill/badge used as a section identifier above headings.
 */
export function SectionBadge({ label, variant = 'outline', className }: SectionBadgeProps) {
  const variants = {
    outline:
      'border border-blue-200 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase',
    dot: 'flex items-center gap-2 text-sm font-medium text-gray-600',
    legal:
      'flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-400',
    filled: 'bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold',
  };

  return (
    <span className={cn(variants[variant], className)}>
      {variant === 'dot' && <span className="h-2 w-2 rounded-full bg-green-500" />}
      {variant === 'legal' && <span className="h-1.5 w-1.5 rounded-full bg-green-400" />}
      {label}
    </span>
  );
}
