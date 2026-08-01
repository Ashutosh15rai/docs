import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MembershipCard } from '@/components/shared/MembershipCard';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { WHATSAPP_URL } from '@/constants/urls';

const PLANS = [
  {
    tierName: 'Monthly',
    price: '₹2,499',
    period: 'month',
    description: 'Perfect for getting started',
    features: [
      { label: 'Daily market updates', included: true },
      { label: 'Community access', included: true },
      { label: 'Weekly webinars', included: true },
      { label: 'Priority support', included: false },
      { label: '1-on-1 mentorship', included: false },
    ],
    ctaLabel: 'Subscribe Monthly',
    ctaHref: WHATSAPP_URL,
    highlighted: false,
  },
  {
    tierName: 'Quarterly',
    price: '₹5,999',
    period: 'quarter',
    description: 'Best value for committed learners',
    features: [
      { label: 'Daily market updates', included: true },
      { label: 'Community access', included: true },
      { label: 'Weekly webinars', included: true },
      { label: 'Priority support', included: true },
      { label: '1-on-1 mentorship', included: false },
    ],
    ctaLabel: 'Subscribe Quarterly',
    ctaHref: WHATSAPP_URL,
    highlighted: true,
  },
  {
    tierName: 'Annual',
    price: '₹19,999',
    period: 'year',
    description: 'Maximum savings + full access',
    features: [
      { label: 'Daily market updates', included: true },
      { label: 'Community access', included: true },
      { label: 'Weekly webinars', included: true },
      { label: 'Priority support', included: true },
      { label: '1-on-1 mentorship', included: true },
    ],
    ctaLabel: 'Subscribe Annually',
    ctaHref: WHATSAPP_URL,
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <SectionWrapper background="gray" id="pricing">
      <SectionHeading
        badge="Membership"
        badgeVariant="outline"
        title="Invest in Your Education"
        subtitle="Transparent pricing. No hidden fees. Cancel anytime."
        align="center"
      />
      <StaggerContainer
        className="mt-12 grid gap-6 lg:grid-cols-3 items-start"
        staggerDelay={0.12}
      >
        {PLANS.map((plan) => (
          <StaggerItem key={plan.tierName}>
            <MembershipCard {...plan} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
