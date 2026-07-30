import { cn } from '@/lib/utils';
import { Award, Briefcase } from 'lucide-react';
import type { Instructor } from '@/data/instructors';

interface InstructorCardProps {
  instructor: Instructor;
  className?: string;
  variant?: 'default' | 'featured';
}

export function InstructorCard({ instructor, className, variant = 'default' }: InstructorCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={cn(
        'rounded-xl border overflow-hidden',
        isFeatured
          ? 'bg-navy-900 border-white/10 text-white'
          : 'bg-white border-gray-100 text-gray-900',
        className
      )}
    >
      <div className="p-6 flex flex-col sm:flex-row gap-6">
        <div
          className={cn(
            'h-20 w-20 shrink-0 rounded-full flex items-center justify-center text-2xl font-bold',
            isFeatured ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
          )}
        >
          {instructor.name.charAt(0)}
        </div>

        <div className="flex-1">
          <h3 className={cn('text-lg font-bold', isFeatured ? 'text-white' : 'text-navy-900')}>
            {instructor.name}
          </h3>
          <p className={cn('text-sm font-medium', isFeatured ? 'text-blue-400' : 'text-blue-600')}>
            {instructor.title}
          </p>

          <p className={cn('mt-3 text-sm leading-relaxed', isFeatured ? 'text-gray-300' : 'text-gray-600')}>
            {instructor.bio}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {instructor.certifications.map((cert) => (
              <span
                key={cert}
                className={cn(
                  'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
                  isFeatured ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-700'
                )}
              >
                <Award className="h-3 w-3" />
                {cert}
              </span>
            ))}
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
                isFeatured ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-700'
              )}
            >
              <Briefcase className="h-3 w-3" />
              {instructor.experience}
            </span>
          </div>

          {instructor.sebiReg && (
            <p className={cn('mt-3 text-xs', isFeatured ? 'text-gray-500' : 'text-gray-400')}>
              SEBI Reg. No: {instructor.sebiReg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
