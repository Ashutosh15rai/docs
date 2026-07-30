import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TestimonialCard } from '@/components/shared/TestimonialCard';
import { FEATURED_TESTIMONIALS } from '@/data/testimonials';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function TestimonialsSection() {
  return (
    <SectionWrapper background="gray" id="testimonials">
      <SectionHeading
        badge="Testimonials"
        badgeVariant="outline"
        title="Trusted by Thousands of Learners"
        subtitle="Join a community of serious traders and marketers committed to continuous improvement."
        align="center"
      />
      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
        {FEATURED_TESTIMONIALS.map((t) => (
          <StaggerItem key={t.id}>
            <TestimonialCard testimonial={t} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
