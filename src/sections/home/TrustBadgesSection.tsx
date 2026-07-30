import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { TrustBadgeCard } from '@/components/shared/TrustBadgeCard';
import { ShieldCheck, GraduationCap, TrendingUp, Users } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const BADGES = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'SEBI Registered', subtitle: 'Research Analyst' },
  { icon: <GraduationCap className="h-5 w-5" />, title: 'NISM Certified', subtitle: 'Research Team' },
  { icon: <TrendingUp className="h-5 w-5" />, title: 'Learn + Earn', subtitle: 'Structured Framework' },
  { icon: <Users className="h-5 w-5" />, title: 'Free Community', subtitle: 'WhatsApp Learning Group' },
];

export function TrustBadgesSection() {
  return (
    <SectionWrapper background="white" padding="md">
      <FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((badge) => (
            <TrustBadgeCard key={badge.title} icon={badge.icon} title={badge.title} subtitle={badge.subtitle} />
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
