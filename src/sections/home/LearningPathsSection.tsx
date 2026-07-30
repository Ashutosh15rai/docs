import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProcessStep } from '@/components/shared/ProcessStep';
import { FadeIn } from '@/components/animations/FadeIn';

const STEPS = [
  { step: 1, title: 'Join the Free Community', description: 'Start with our free WhatsApp community. Receive daily market insights and understand our research approach before committing.' },
  { step: 2, title: 'Enroll in a Course', description: 'Choose from beginner to advanced courses. Learn at your own pace with structured modules, quizzes, and practical assignments.' },
  { step: 3, title: 'Apply & Grow', description: 'Implement what you learn with community support. Upgrade to Premium for personalized mentorship and advanced research access.' },
];

export function LearningPathsSection() {
  return (
    <SectionWrapper background="white" id="learning-path">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <FadeIn>
          <SectionHeading
            badge="Learning Path"
            badgeVariant="outline"
            title="Your Journey to Market Confidence"
            subtitle="A clear, structured path from curious beginner to informed, independent trader."
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div>
            {STEPS.map((s) => (
              <ProcessStep key={s.step} step={s.step} title={s.title} description={s.description} />
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
