import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTABanner } from '@/components/shared/CTABanner';
import { Check } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const BENEFITS = [
  'Daily NIFTY & BANKNIFTY market updates',
  'Research-backed trade setups with logic',
  'Priority Q&A with research team',
  'Exclusive weekly webinars',
  'Early access to new courses',
  'Members-only educational resources',
];

export function PremiumCommunitySection() {
  return (
    <SectionWrapper background="gray" id="premium">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <FadeIn>
          <SectionHeading
            badge="Premium Community"
            badgeVariant="filled"
            title="Go Deeper with Premium"
            subtitle="Join hundreds of serious learners who receive structured research, detailed setups, and direct analyst access."
          />
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                {b}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <CTABanner
            title="Ready to Accelerate Your Learning?"
            subtitle="Premium members see faster progress with structured mentorship and real-time market context."
            primaryLabel="Join Premium"
            primaryHref="/package"
            secondaryLabel="Learn More"
            secondaryHref="/why-vr"
            variant="navy"
          />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
