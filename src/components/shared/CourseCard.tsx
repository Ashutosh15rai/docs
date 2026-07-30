import { cn } from '@/lib/utils';
import { Clock, BookOpen, Star, Users } from 'lucide-react';
import type { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  const isFree = course.price === 'free';

  return (
    <article
      className={cn(
        'group flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5',
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center bg-navy-900/5 text-gray-400">
          <BookOpen className="h-10 w-10 opacity-50" />
        </div>
        {course.badge && (
          <span
            className={cn(
              'absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white',
              course.badge.color === 'orange' && 'bg-orange-500',
              course.badge.color === 'blue' && 'bg-blue-600',
              course.badge.color === 'green' && 'bg-green-600'
            )}
          >
            {course.badge.label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {course.lessonCount} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
        </div>

        <h3 className="text-base font-semibold text-navy-900 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{course.subtitle}</p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isFree ? (
              <span className="text-sm font-bold text-green-600">Free</span>
            ) : (
              <>
                <span className="text-lg font-bold text-navy-900">
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{course.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </>
            )}
          </div>
          {course.rating && (
            <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              {course.rating}
            </span>
          )}
        </div>

        {course.enrolled && (
          <p className="mt-2 text-xs text-gray-400 flex items-center gap-1">
            <Users className="h-3 w-3" />
            {course.enrolled.toLocaleString('en-IN')} enrolled
          </p>
        )}
      </div>
    </article>
  );
}
