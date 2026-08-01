import { cn } from '@/lib/utils';
import { Crown, Check } from 'lucide-react';

interface MembershipTier {
  label: string;
  included: boolean;
}

interface MembershipCardProps {
  tierName: string;
  price: string;
  period: string;
  description?: string;
  features: MembershipTier[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  className?: string;
}

export function MembershipCard({
  tierName,
  price,
  period,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  className,
}: MembershipCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 transition-all duration-300 lg:p-8',
        highlighted
          ? 'border-gold bg-navy-900 text-white shadow-xl hover:shadow-2xl hover:shadow-gold/10 lg:-translate-y-1'
          : 'border-gray-200 bg-white text-gray-900 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-gray-300',
        className
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy-950">
            <Crown className="h-3 w-3" />
            Premium
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={cn('text-lg font-bold', highlighted ? 'text-white' : 'text-navy-900')}>
          {tierName}
        </h3>
        {description && (
          <p className={cn('mt-1 text-sm', highlighted ? 'text-gray-400' : 'text-gray-500')}>
            {description}
          </p>
        )}
        <div className="mt-4 flex items-baseline gap-1">
          <span className={cn('text-4xl font-extrabold', highlighted ? 'text-gold' : 'text-navy-900')}>
            {price}
          </span>
          <span className={cn('text-sm', highlighted ? 'text-gray-400' : 'text-gray-500')}>
            /{period}
          </span>
        </div>
      </div>

      <ul className="flex-1 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                'mt-0.5 h-4 w-4 shrink-0',
                f.included ? (highlighted ? 'text-gold' : 'text-green-600') : 'text-gray-300'
              )}
            />
            <span className={f.included ? (highlighted ? 'text-gray-200' : 'text-gray-700') : 'text-gray-400'}>
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={cn(
          'mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all active:scale-[0.98]',
          highlighted
            ? 'bg-gold text-navy-950 hover:bg-gold-light hover:shadow-md'
            : 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-md'
        )}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
