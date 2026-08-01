import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: 'default' | 'featured';
}

export function TestimonialCard({ testimonial, className, variant = 'default' }: TestimonialCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={cn(
        'relative rounded-xl p-6 transition-all duration-300',
        isFeatured
          ? 'bg-navy-900 text-white shadow-lg hover:shadow-xl hover:shadow-blue-900/20'
          : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-gray-200',
        className
      )}
    >
      <Quote className={cn('h-6 w-6 mb-3', isFeatured ? 'text-blue-400' : 'text-blue-200')} />
      <p className={cn('text-sm leading-relaxed', isFeatured ? 'text-gray-200' : 'text-gray-700')}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold',
            testimonial.avatarColor
          )}
        >
          {testimonial.avatarInitial}
        </div>
        <div className="flex-1">
          <p className={cn('text-sm font-semibold', isFeatured ? 'text-white' : 'text-gray-900')}>
            {testimonial.authorName}
          </p>
          <p className={cn('text-xs', isFeatured ? 'text-gray-400' : 'text-gray-500')}>
            {testimonial.authorTitle}
          </p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < testimonial.rating
                  ? 'text-amber-400 fill-amber-400'
                  : isFeatured
                  ? 'text-navy-700'
                  : 'text-gray-200'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
