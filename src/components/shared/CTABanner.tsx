import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'light' | 'dark' | 'navy';
  className?: string;
}

export function CTABanner({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = 'navy',
  className,
}: CTABannerProps) {
  const styles = {
    light: 'bg-gray-50 text-navy-900',
    dark: 'bg-navy-900 text-white',
    navy: 'bg-navy-950 text-white',
  };

  return (
    <div className={cn('rounded-2xl p-8 lg:p-12', styles[variant], className)}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
        {subtitle && <p className="mt-3 text-base opacity-80">{subtitle}</p>}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-whatsapp-hover hover:shadow-lg hover:shadow-whatsapp/25 active:scale-[0.98]"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className={cn(
                'inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium transition-all active:scale-[0.98]',
                variant === 'light'
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
              )}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
