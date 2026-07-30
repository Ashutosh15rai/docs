import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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

import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function HomePage() {
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">
              <Router />
            </div>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
