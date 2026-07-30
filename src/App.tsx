import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import CoursesPage from '@/pages/courses';
import LearningPathsPage from '@/pages/learning-paths';
import PremiumCommunityPage from '@/pages/premium-community';
import MarketInsightsPage from '@/pages/market-insights';
import TestimonialsPage from '@/pages/testimonials';
import ContactPage from '@/pages/contact';
import FAQPage from '@/pages/faq';
import PrivacyPolicyPage from '@/pages/privacy-policy';
import TermsConditionsPage from '@/pages/terms-and-conditions';
import NotFoundPage from '@/pages/not-found';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <ScrollToTop />
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/learning-paths" element={<LearningPathsPage />} />
              <Route path="/premium-community" element={<PremiumCommunityPage />} />
              <Route path="/market-insights" element={<MarketInsightsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </TooltipProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
