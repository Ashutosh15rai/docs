import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  label: string;
  included: boolean;
}

interface PricingCardProps {
  planName: string;
  description?: string;
  price: string;
  billingPeriod: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaLabel: string;
  ctaHref: string;
  gstNote?: string;
  className?: string;
}

export function PricingCard({
  planName,
  description,
  price,
  billingPeriod,
  features,
  isPopular = false,
  ctaLabel,
  ctaHref,
  gstNote = 'GST inclusive',
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all',
        isPopular
          ? 'border-blue-600 bg-white shadow-lg scale-[1.02]'
          : 'border-gray-200 bg-white shadow-sm',
        className
      )}
    >
      {isPopular && (
        <span className="absolute -top-3 right-6 rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-navy-900">{planName}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-navy-900">{price}</span>
          <span className="text-sm text-gray-500">/{billingPeriod}</span>
        </div>
        <span className="mt-1 inline-block rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
          {gstNote}
        </span>
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Features</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              {feature.included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={ctaHref}
        className={cn(
          'mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors',
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-navy-900 text-white hover:bg-navy-800'
        )}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
