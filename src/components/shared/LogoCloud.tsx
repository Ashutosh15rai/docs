import { cn } from '@/lib/utils';

interface Logo {
  name: string;
  initials: string;
}

interface LogoCloudProps {
  logos?: Logo[];
  title?: string;
  className?: string;
  dark?: boolean;
}

const DEFAULT_LOGOS: Logo[] = [
  { name: 'SEBI Registered', initials: 'SEBI' },
  { name: 'NISM Certified', initials: 'NISM' },
  { name: 'BSE Member', initials: 'BSE' },
  { name: 'ISO Certified', initials: 'ISO' },
  { name: 'MCA Registered', initials: 'MCA' },
];

export function LogoCloud({ logos = DEFAULT_LOGOS, title, className, dark = false }: LogoCloudProps) {
  return (
    <div className={cn(className)}>
      {title && (
        <p className={cn('text-center text-xs font-semibold uppercase tracking-widest mb-6', dark ? 'text-gray-500' : 'text-gray-400')}>
          {title}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={cn(
              'flex items-center gap-2 rounded-lg px-3 py-2',
              dark ? 'bg-white/5 text-gray-400' : 'bg-gray-50 text-gray-500'
            )}
          >
            <span className="text-xs font-bold tracking-wider">{logo.initials}</span>
            <span className="text-xs font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
