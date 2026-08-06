import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import WhyVRPage from '@/pages/why-vr';
import CoursesPage from '@/pages/courses';
import CourseDetailPage from '@/pages/course-detail';
import PackagePage from '@/pages/package';
import ContactPage from '@/pages/contact';
import FAQPage from '@/pages/faq';
import NotFoundPage from '@/pages/not-found';
import {
  PrivacyPolicyPage,
  TermsPage,
  RefundPolicyPage,
  DisclaimerPage,
  DisclosurePage,
  GrievancePage,
  OnboardDetailsPage,
  RARegistrationPage,
  ODRPortalPage,
  UserKYCPage,
  UserConsentPage,
  ComplaintBoardPage,
} from '@/pages/legal';

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
              <Route path="/why-vr" element={<WhyVRPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:slug" element={<CourseDetailPage />} />
              <Route path="/package" element={<PackagePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/disclosure" element={<DisclosurePage />} />
              <Route path="/grievance-redressal" element={<GrievancePage />} />
              <Route path="/onboard-details" element={<OnboardDetailsPage />} />
              <Route path="/ra-registration-disclosure" element={<RARegistrationPage />} />
              <Route path="/odr-portal" element={<ODRPortalPage />} />
              <Route path="/user-kyc" element={<UserKYCPage />} />
              <Route path="/user-consent" element={<UserConsentPage />} />
              <Route path="/complaint-board" element={<ComplaintBoardPage />} />
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
