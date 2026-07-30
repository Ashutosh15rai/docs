import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TrustBadgeCard } from '@/components/shared/TrustBadgeCard';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { BookOpen, BarChart3, MessageCircle, Award, Lock, Clock } from 'lucide-react';

const REASONS = [
  { icon: <BookOpen className="h-5 w-5" />, title: 'Research-Backed Curriculum', subtitle: 'Every lesson is grounded in real market data and verified research methodologies.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Live Market Context', subtitle: 'Learn with current market examples, not outdated textbook theory.' },
  { icon: <MessageCircle className="h-5 w-5" />, title: 'Community Learning', subtitle: 'Discuss ideas, ask questions, and learn alongside fellow traders daily.' },
  { icon: <Award className="h-5 w-5" />, title: 'Certified Instructors', subtitle: 'All courses designed by SEBI-registered and NISM-certified professionals.' },
  { icon: <Lock className="h-5 w-5" />, title: 'SEBI Compliant', subtitle: 'Transparent, regulated, and fully compliant educational content.' },
  { icon: <Clock className="h-5 w-5" />, title: 'Lifetime Access', subtitle: 'Enroll once and revisit course materials whenever you need.' },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper background="navy" id="why-us">
      <SectionHeading
        badge="Why Choose Us"
        badgeVariant="dot"
        title="Education Built on Trust & Transparency"
        subtitle="We are not a tip provider. We are an education platform committed to building independent, informed traders."
        align="center"
        dark
      />
      <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
        {REASONS.map((reason) => (
          <StaggerItem key={reason.title}>
            <TrustBadgeCard icon={reason.icon} title={reason.title} subtitle={reason.subtitle} variant="dark" />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
