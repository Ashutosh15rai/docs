import { useState } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CourseCard } from '@/components/shared/CourseCard';
import { CTABanner } from '@/components/shared/CTABanner';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { COURSES } from '@/data/courses';
import { WHATSAPP_URL } from '@/constants/urls';
import { Search, SlidersHorizontal } from 'lucide-react';

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('All');

  const filtered = COURSES.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesLevel = level === 'All' || c.level === level.toLowerCase();
    return matchesSearch && matchesLevel;
  });

  return (
    <main id="main">
      <PageHero
        badge="Courses"
        title="Structured Learning for Every Level"
        description="From market fundamentals to advanced strategies — courses designed by SEBI-registered professionals with real market experience."
      />

      <SectionWrapper background="white">
        {/* Search & Filter */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses, topics, or tags..."
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <div className="flex gap-2">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                      level === l
                        ? 'bg-navy-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Course Grid */}
        {filtered.length > 0 ? (
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {filtered.map((course) => (
              <StaggerItem key={course.slug}>
                <a href={`/courses/${course.slug}`} className="block">
                  <CourseCard course={course} />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">No courses match your search criteria.</p>
            <button
              onClick={() => { setSearch(''); setLevel('All'); }}
              className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper background="gray" padding="lg">
        <CTABanner
          title="Not Sure Where to Start?"
          subtitle="Join our free WhatsApp community and get a feel for our teaching style before enrolling."
          primaryLabel="Join Free Community"
          primaryHref={WHATSAPP_URL}
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="navy"
        />
      </SectionWrapper>
    </main>
  );
}
