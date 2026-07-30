import { HeroSection } from '@/sections/home/HeroSection';
import { TrustBadgesSection } from '@/sections/home/TrustBadgesSection';
import { StatisticsSection } from '@/sections/home/StatisticsSection';
import { FeaturedCoursesSection } from '@/sections/home/FeaturedCoursesSection';
import { WhyChooseUsSection } from '@/sections/home/WhyChooseUsSection';
import { LearningPathsSection } from '@/sections/home/LearningPathsSection';
import { PremiumCommunitySection } from '@/sections/home/PremiumCommunitySection';
import { DailyMarketInsightsSection } from '@/sections/home/DailyMarketInsightsSection';
import { SuccessStoriesSection } from '@/sections/home/SuccessStoriesSection';
import { TestimonialsSection } from '@/sections/home/TestimonialsSection';
import { PricingSection } from '@/sections/home/PricingSection';
import { FAQSection } from '@/sections/home/FAQSection';
import { CTASection } from '@/sections/home/CTASection';

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <TrustBadgesSection />
      <StatisticsSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <LearningPathsSection />
      <PremiumCommunitySection />
      <DailyMarketInsightsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
