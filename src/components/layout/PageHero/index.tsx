import { cn } from '@/lib/utils';
import { Container } from '../Container';

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string; // word(s) to highlight in blue
  description?: string;
  variant?: 'standard' | 'legal';
  metadata?: {
    effectiveDate?: string;
    lastUpdated?: string;
    sebiReg?: string;
  };
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dark navy hero for inner pages (About, Contact, Package, Legal).
 * Supports standard and legal variants with metadata chips.
 */
export function PageHero({
  badge,
  title,
  titleAccent,
  description,
  variant = 'standard',
  metadata,
  className,
  children,
}: PageHeroProps) {
  const renderTitle = () => {
    if (!titleAccent) return title;
    const parts = title.split(titleAccent);
    if (parts.length === 1) return title;
    return (
      <>
        {parts[0]}
        <span className="text-blue-400">{titleAccent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className={cn('bg-navy-900 py-16 lg:py-24', className)}>
      <Container>
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
              {variant === 'legal' && (
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              )}
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {renderTitle()}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-gray-300 lg:text-lg">
              {description}
            </p>
          )}
          {variant === 'legal' && metadata && (
            <div className="mt-6 flex flex-wrap gap-3">
              {metadata.effectiveDate && (
                <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400 border border-white/10">
                  Effective: {metadata.effectiveDate}
                </span>
              )}
              {metadata.lastUpdated && (
                <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400 border border-white/10">
                  Updated: {metadata.lastUpdated}
                </span>
              )}
              {metadata.sebiReg && (
                <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400 border border-white/10">
                  SEBI: {metadata.sebiReg}
                </span>
              )}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
