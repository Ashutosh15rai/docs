import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { MarketInsightCard } from '@/components/shared/MarketInsightCard';
import { CTABanner } from '@/components/shared/CTABanner';
import { AlertBox } from '@/components/shared/AlertBox';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { MARKET_INSIGHTS } from '@/data/marketInsights';
import { WHATSAPP_URL } from '@/constants/urls';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const SENTIMENT_COUNTS = {
  bullish: MARKET_INSIGHTS.filter((i) => i.sentiment === 'bullish').length,
  bearish: MARKET_INSIGHTS.filter((i) => i.sentiment === 'bearish').length,
  neutral: MARKET_INSIGHTS.filter((i) => i.sentiment === 'neutral').length,
};

export default function MarketInsightsPage() {
  return (
    <main id="main">
      <PageHero
        badge="Daily Insights"
        title="Educational Market Analysis"
        description="Research-backed perspectives on market movements — shared every trading day with our community for educational purposes only."
      />

      {/* Sentiment Overview */}
      <SectionWrapper background="white" padding="md">
        <FadeIn>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
              <TrendingUp className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-green-700">{SENTIMENT_COUNTS.bullish}</p>
              <p className="text-xs text-green-600 font-medium">Bullish</p>
            </div>
            <div className="rounded-xl bg-red-50 border border-red-100 p-4 text-center">
              <TrendingDown className="h-5 w-5 text-red-500 mx-auto mb-1" />
              <p className="text-2xl font-bold text-red-600">{SENTIMENT_COUNTS.bearish}</p>
              <p className="text-xs text-red-500 font-medium">Bearish</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
              <Minus className="h-5 w-5 text-gray-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-gray-600">{SENTIMENT_COUNTS.neutral}</p>
              <p className="text-xs text-gray-500 font-medium">Neutral</p>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Insights Grid */}
      <SectionWrapper background="gray">
        <SectionHeading
          badge="Recent Updates"
          badgeVariant="outline"
          title="Latest Market Perspectives"
          subtitle="These insights are for educational purposes only and do not constitute investment advice."
          align="center"
        />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {MARKET_INSIGHTS.map((insight) => (
            <StaggerItem key={insight.id}>
              <MarketInsightCard insight={insight} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn>
          <div className="mt-10 max-w-2xl mx-auto">
            <AlertBox variant="warning" title="Educational Disclaimer">
              All market insights shared on this platform are for educational and informational purposes only. They do not constitute investment advice, stock recommendations, or buy/sell calls. Past performance is not indicative of future results. Please consult a SEBI-registered investment advisor before making any investment decisions.
            </AlertBox>
          </div>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper background="navy-dark" padding="lg">
        <CTABanner
          title="Get Daily Insights on WhatsApp"
          subtitle="Join 15,000+ traders who receive our research-backed market updates every trading day."
          primaryLabel="Join Free Community"
          primaryHref={WHATSAPP_URL}
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}
