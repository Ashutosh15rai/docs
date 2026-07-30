import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProcessStep } from '@/components/shared/ProcessStep';
import { CourseCard } from '@/components/shared/CourseCard';
import { CTABanner } from '@/components/shared/CTABanner';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { COURSES } from '@/data/courses';
import { WHATSAPP_URL } from '@/constants/urls';

const PATHS = [
  {
    level: 'Beginner',
    title: 'Foundation Track',
    description: 'Start from zero. Learn market basics, technical analysis fundamentals, and risk management principles.',
    courses: COURSES.filter((c) => c.level === 'beginner'),
  },
  {
    level: 'Intermediate',
    title: 'Strategy Track',
    description: 'Build on your foundation. Learn options strategies, advanced chart patterns, and systematic trading approaches.',
    courses: COURSES.filter((c) => c.level === 'intermediate'),
  },
  {
    level: 'Advanced',
    title: 'Mastery Track',
    description: 'Refine your edge. Master complex derivatives, portfolio management, and institutional-grade research methods.',
    courses: COURSES.filter((c) => c.level === 'advanced'),
  },
];

export default function LearningPathsPage() {
  return (
    <main id="main">
      <PageHero
        badge="Learning Paths"
        title="Your Roadmap to Market Mastery"
        description="A structured, progressive curriculum designed to take you from complete beginner to confident, independent trader."
      />

      {/* How It Works */}
      <SectionWrapper background="white">
        <SectionHeading
          badge="How It Works"
          badgeVariant="outline"
          title="Three Steps to Consistency"
          subtitle="Our learning framework is designed around real market application — not just theory."
          align="center"
        />
        <div className="mt-12 max-w-2xl mx-auto">
          <ProcessStep
            step={1}
            title="Learn the Fundamentals"
            description="Start with structured courses that build your knowledge base — technical analysis, market structure, and risk management."
          />
          <ProcessStep
            step={2}
            title="Practice with Context"
            description="Apply what you learn with daily market insights and community discussions. See concepts in real market conditions."
          />
          <ProcessStep
            step={3}
            title="Execute with Discipline"
            description="Develop your own trading framework with mentorship support. Build the habits that lead to long-term consistency."
          />
        </div>
      </SectionWrapper>

      {/* Learning Paths */}
      {PATHS.map((path) => (
        <SectionWrapper key={path.level} background={path.level === 'Intermediate' ? 'gray' : 'white'}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {path.level}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">{path.title}</h2>
            <p className="mt-2 text-base text-gray-600 max-w-2xl">{path.description}</p>
          </FadeIn>

          {path.courses.length > 0 ? (
            <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {path.courses.map((course) => (
                <StaggerItem key={course.slug}>
                  <a href={`/courses/${course.slug}`} className="block">
                    <CourseCard course={course} />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <div className="mt-8 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                <p className="text-sm text-gray-500">Advanced courses coming soon. Join the community to be notified.</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Get notified on WhatsApp →
                </a>
              </div>
            </FadeIn>
          )}
        </SectionWrapper>
      ))}

      <SectionWrapper background="navy-dark" padding="lg">
        <CTABanner
          title="Start Your Learning Journey"
          subtitle="Every expert was once a beginner. The difference is structured learning and consistent practice."
          primaryLabel="Join Free Community"
          primaryHref={WHATSAPP_URL}
          secondaryLabel="Browse All Courses"
          secondaryHref="/courses"
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}
