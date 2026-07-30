import { cn } from '@/lib/utils';
import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

interface AlertBoxProps {
  children: React.ReactNode;
  variant?: 'warning' | 'info' | 'success' | 'legal';
  className?: string;
  title?: string;
}

/**
 * Styled callout box for disclaimers, warnings, and info blocks.
 * Critical for SEBI compliance messaging.
 */
export function AlertBox({ children, variant = 'warning', className, title }: AlertBoxProps) {
  const styles = {
    warning: {
      wrapper: 'bg-amber-50 border-amber-200 text-amber-900',
      icon: 'text-amber-600',
      iconComponent: <AlertTriangle className="h-5 w-5" />,
    },
    info: {
      wrapper: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: 'text-blue-600',
      iconComponent: <Info className="h-5 w-5" />,
    },
    success: {
      wrapper: 'bg-green-50 border-green-200 text-green-900',
      icon: 'text-green-600',
      iconComponent: <CheckCircle className="h-5 w-5" />,
    },
    legal: {
      wrapper: 'bg-navy-900/50 border-amber-500/30 text-amber-100',
      icon: 'text-amber-400',
      iconComponent: <AlertTriangle className="h-5 w-5" />,
    },
  };

  const s = styles[variant];

  return (
    <div
      className={cn(
        'rounded-lg border p-4 text-sm leading-relaxed',
        s.wrapper,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className={cn('mt-0.5 shrink-0', s.icon)}>{s.iconComponent}</span>
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
