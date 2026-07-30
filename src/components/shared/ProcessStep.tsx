import { cn } from '@/lib/utils';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  className?: string;
  dark?: boolean;
}

export function ProcessStep({ step, title, description, className, dark = false }: ProcessStepProps) {
  return (
    <div className={cn('relative flex gap-5', className)}>
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold',
            dark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
          )}
        >
          {step}
        </div>
        {step < 3 && (
          <div className={cn('mt-2 h-full w-px', dark ? 'bg-white/10' : 'bg-gray-200')} />
        )}
      </div>
      <div className="pb-8">
        <h3 className={cn('text-base font-semibold', dark ? 'text-white' : 'text-navy-900')}>
          {title}
        </h3>
        <p className={cn('mt-1 text-sm leading-relaxed', dark ? 'text-gray-400' : 'text-gray-600')}>
          {description}
        </p>
      </div>
    </div>
  );
}
