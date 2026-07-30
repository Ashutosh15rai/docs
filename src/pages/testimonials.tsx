import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TestimonialCard } from '@/components/shared/TestimonialCard';
import { CTABanner } from '@/components/shared/CTABanner';
import { StatisticsStrip } from '@/components/shared/StatisticsStrip';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { TESTIMONIALS } from '@/data/testimonials';
import { STATISTICS } from '@/data/statistics';
import { WHATSAPP_URL } from '@/constants/urls';

export default function TestimonialsPage() {
  return (
    <main id="main">
      <PageHero
        badge="Testimonials"
        title="Trusted by Thousands of Learners"
        description="Real stories from real students who have transformed their approach to markets through structured education."
      />

      <SectionWrapper background="white" padding="md">
        <StatisticsStrip stats={STATISTICS} />
      </SectionWrapper>

      <SectionWrapper background="gray">
        <SectionHeading
          badge="Member Reviews"
          badgeVariant="outline"
          title="What Our Community Says"
          subtitle="Every testimonial below is from a verified member of our learning community."
          align="center"
        />
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper background="navy-dark" padding="lg">
        <CTABanner
          title="Join Our Growing Community"
          subtitle="Start your journey with our free WhatsApp community and experience the Vriddhi difference."
          primaryLabel="Join Free Community"
          primaryHref={WHATSAPP_URL}
          secondaryLabel="Explore Courses"
          secondaryHref="/courses"
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}
