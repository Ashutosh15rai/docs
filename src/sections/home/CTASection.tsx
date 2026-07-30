import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { CTABanner } from '@/components/shared/CTABanner';
import { WHATSAPP_URL } from '@/constants/urls';

export function CTASection() {
  return (
    <SectionWrapper background="navy-dark" padding="lg">
      <CTABanner
        title="Start Your Learning Journey Today"
        subtitle="Join 15,000+ learners who are building real market skills with structured education."
        primaryLabel="Join Free Community"
        primaryHref={WHATSAPP_URL}
        secondaryLabel="Explore Courses"
        secondaryHref="/courses"
        variant="dark"
      />
    </SectionWrapper>
  );
}
