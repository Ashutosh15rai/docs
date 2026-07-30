import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MarketInsightCard } from '@/components/shared/MarketInsightCard';
import { MARKET_INSIGHTS } from '@/data/marketInsights';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/constants/urls';

export function DailyMarketInsightsSection() {
  return (
    <SectionWrapper background="white" id="insights">
      <SectionHeading
        badge="Daily Insights"
        badgeVariant="outline"
        title="Educational Market Analysis"
        subtitle="Research-backed perspectives on market movements — shared every trading day with our community."
        align="center"
      />
      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
        {MARKET_INSIGHTS.map((insight) => (
          <StaggerItem key={insight.id}>
            <MarketInsightCard insight={insight} />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <div className="mt-10 text-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Get Daily Updates on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionWrapper>
  );
}
