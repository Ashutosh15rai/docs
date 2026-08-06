import { HeroSection } from '@/sections/home/HeroSection';
import { TrustBadgesSection } from '@/sections/home/TrustBadgesSection';
import { StatisticsSection } from '@/sections/home/StatisticsSection';
import { WhyChooseUsSection } from '@/sections/home/WhyChooseUsSection';
import { FeaturedCoursesSection } from '@/sections/home/FeaturedCoursesSection';
import { CommunitySection } from '@/sections/home/CommunitySection';
import { PackagePreviewSection } from '@/sections/home/PackagePreviewSection';
import { TestimonialsSection } from '@/sections/home/TestimonialsSection';
import { FAQSection } from '@/sections/home/FAQSection';
import { CTASection } from '@/sections/home/CTASection';

export default function HomePage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <HeroSection />
      <TrustBadgesSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <FeaturedCoursesSection />
      <CommunitySection />
      <PackagePreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
