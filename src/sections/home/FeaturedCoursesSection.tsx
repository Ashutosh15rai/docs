import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CourseCard } from '@/components/shared/CourseCard';
import { FEATURED_COURSES } from '@/data/courses';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ArrowRight } from 'lucide-react';

export function FeaturedCoursesSection() {
  return (
    <SectionWrapper background="gray" id="courses">
      <SectionHeading
        badge="Featured Courses"
        badgeVariant="outline"
        title="Structured Learning for Every Level"
        subtitle="From market fundamentals to advanced strategies — courses designed by SEBI-registered professionals."
        align="center"
      />
      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
        {FEATURED_COURSES.map((course) => (
          <StaggerItem key={course.slug}>
            <a href={`/courses/${course.slug}`} className="block">
              <CourseCard course={course} />
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <div className="mt-10 text-center">
        <a href="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View All Courses
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionWrapper>
  );
}
