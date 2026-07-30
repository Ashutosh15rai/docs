import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { StatisticsStrip } from '@/components/shared/StatisticsStrip';
import { STATISTICS } from '@/data/statistics';
import { FadeIn } from '@/components/animations/FadeIn';

export function StatisticsSection() {
  return (
    <SectionWrapper background="white" padding="md">
      <FadeIn>
        <StatisticsStrip stats={STATISTICS} />
      </FadeIn>
    </SectionWrapper>
  );
}
