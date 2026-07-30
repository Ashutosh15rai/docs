import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MembershipCard } from '@/components/shared/MembershipCard';
import { TestimonialCard } from '@/components/shared/TestimonialCard';
import { CTABanner } from '@/components/shared/CTABanner';
import { AlertBox } from '@/components/shared/AlertBox';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { TESTIMONIALS } from '@/data/testimonials';
import { WHATSAPP_URL } from '@/constants/urls';
import { Check, Crown, MessageCircle, Video, FileText, Headphones } from 'lucide-react';

const PLANS = [
  {
    tierName: 'Monthly',
    price: '₹2,499',
    period: 'month',
    description: 'Perfect for getting started',
    features: [
      { label: 'Daily NIFTY & BANKNIFTY updates', included: true },
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
      { label: 'Daily NIFTY & BANKNIFTY updates', included: true },
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
      { label: 'Daily NIFTY & BANKNIFTY updates', included: true },
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

const BENEFITS = [
  { icon: <MessageCircle className="h-5 w-5" />, title: 'Daily Market Updates', desc: 'NIFTY, BANKNIFTY & sectoral analysis every trading day.' },
  { icon: <Video className="h-5 w-5" />, title: 'Exclusive Webinars', desc: 'Weekly deep-dive sessions on market themes and strategies.' },
  { icon: <FileText className="h-5 w-5" />, title: 'Research Reports', desc: 'Detailed research notes with logic, levels, and risk parameters.' },
  { icon: <Headphones className="h-5 w-5" />, title: 'Priority Support', desc: 'Get your questions answered by the research team directly.' },
  { icon: <Crown className="h-5 w-5" />, title: 'Early Access', desc: 'Be the first to access new courses and platform features.' },
  { icon: <Check className="h-5 w-5" />, title: 'Members-Only Resources', desc: 'Templates, checklists, and tools not available publicly.' },
];

export default function PremiumCommunityPage() {
  return (
    <main id="main">
      <PageHero
        badge="Premium Membership"
        title="Accelerate Your Learning with Premium"
        description="Join hundreds of serious learners who receive structured research, detailed setups, and direct analyst access every trading day."
      />

      {/* Benefits */}
      <SectionWrapper background="white">
        <SectionHeading
          badge="What's Included"
          badgeVariant="outline"
          title="Everything You Need to Level Up"
          subtitle="Premium membership is designed for traders who are serious about building consistency through structured learning."
          align="center"
        />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{b.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper background="gray">
        <SectionHeading
          badge="Pricing"
          badgeVariant="outline"
          title="Transparent Pricing. No Hidden Fees."
          subtitle="Choose the plan that fits your learning goals. All plans include GST."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-start">
          {PLANS.map((plan) => (
            <MembershipCard key={plan.tierName} {...plan} />
          ))}
        </div>
        <FadeIn>
          <div className="mt-8 max-w-2xl mx-auto">
            <AlertBox variant="info" title="7-Day Money-Back Guarantee">
              Not satisfied? Contact us within 7 days for a full refund, no questions asked. We believe in the value we provide.
            </AlertBox>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="navy" id="testimonials">
        <SectionHeading
          badge="Member Stories"
          badgeVariant="dot"
          title="What Premium Members Say"
          align="center"
          dark
        />
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {TESTIMONIALS.filter((t) => t.featured).map((t) => (
            <StaggerItem key={t.id}>
              <TestimonialCard testimonial={t} variant="featured" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      <SectionWrapper background="navy-dark" padding="lg">
        <CTABanner
          title="Ready to Go Premium?"
          subtitle="Join the community of serious learners today."
          primaryLabel="Subscribe Now"
          primaryHref={WHATSAPP_URL}
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}
