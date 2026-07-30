import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TrustBadgeCard } from '@/components/shared/TrustBadgeCard';
import { InstructorCard } from '@/components/shared/InstructorCard';
import { CTABanner } from '@/components/shared/CTABanner';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ABOUT_FEATURES, MISSION_STATEMENT } from '@/data/about';
import { INSTRUCTORS } from '@/data/instructors';
import { WHATSAPP_URL } from '@/constants/urls';
import { ShieldCheck, GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

const ICON_MAP = {
  shield: <ShieldCheck className="h-5 w-5" />,
  graduation: <GraduationCap className="h-5 w-5" />,
  book: <BookOpen className="h-5 w-5" />,
  trending: <TrendingUp className="h-5 w-5" />,
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        badge="About Us"
        title="Built on Research. Driven by Education."
        description="Vriddhi Research is a Digital Marketing & Financial Education Academy managed by a SEBI Registered Research Analyst. We exist to help traders build consistency through structure, research, and disciplined execution."
      />

      {/* Mission */}
      <SectionWrapper background="white">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <FadeIn>
            <SectionHeading
              badge={MISSION_STATEMENT.heading}
              badgeVariant="outline"
              title={MISSION_STATEMENT.title}
              className="mb-0"
            />
            <div className="mt-6 space-y-4">
              {MISSION_STATEMENT.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <div className="rounded-2xl bg-navy-900 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-4">
                {[
                  { title: 'Transparency', desc: 'No hidden agendas. Clear, honest communication in everything we do.' },
                  { title: 'Education First', desc: 'We teach you to fish, not hand you fish. Independence is the goal.' },
                  { title: 'Research Backed', desc: 'Every insight is grounded in data, not opinion or speculation.' },
                  { title: 'SEBI Compliant', desc: 'We operate within the regulatory framework with full transparency.' },
                ].map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <div>
                      <p className="text-sm font-semibold text-white">{v.title}</p>
                      <p className="text-sm text-gray-400">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper background="gray">
        <SectionHeading
          badge="What Sets Us Apart"
          badgeVariant="outline"
          title="Why Traders Trust Vriddhi Research"
          subtitle="A combination of regulatory compliance, professional certification, and genuine educational commitment."
          align="center"
        />
        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {ABOUT_FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <TrustBadgeCard
                icon={ICON_MAP[f.icon as keyof typeof ICON_MAP]}
                title={f.title}
                subtitle={f.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      {/* Instructor */}
      <SectionWrapper background="white">
        <SectionHeading
          badge="Leadership"
          badgeVariant="outline"
          title="Meet Your Research Analyst"
          subtitle="Every course and insight is guided by experienced, certified professionals."
          align="center"
        />
        <FadeIn className="mt-12 max-w-3xl mx-auto">
          {INSTRUCTORS.map((instructor) => (
            <InstructorCard key={instructor.name} instructor={instructor} variant="featured" />
          ))}
        </FadeIn>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="navy-dark" padding="lg">
        <CTABanner
          title="Ready to Start Learning?"
          subtitle="Join thousands of traders who are building real skills with structured education."
          primaryLabel="Join Free Community"
          primaryHref={WHATSAPP_URL}
          secondaryLabel="Browse Courses"
          secondaryHref="/courses"
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}
