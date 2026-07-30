import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FadeIn } from '@/components/animations/FadeIn';

const STORIES = [
  { name: 'Rahul M.', role: 'Former IT Professional', quote: 'I went from knowing nothing about options to consistently structuring my trades with defined risk. The structured approach here is unlike anything I found on YouTube.', metric: '12 months', metricLabel: 'to consistency' },
  { name: 'Priya S.', role: 'Entrepreneur', quote: 'The risk management module alone saved my capital during the volatile months. I now approach every trade with a plan instead of hope.', metric: '₹2.4L saved', metricLabel: 'from bad trades avoided' },
  { name: 'Amit K.', role: 'College Student', quote: 'Started with the free community, enrolled in Technical Analysis, and now I read charts with confidence. The education is genuinely world-class.', metric: '3 courses', metricLabel: 'completed' },
];

export function SuccessStoriesSection() {
  return (
    <SectionWrapper background="navy" id="success-stories">
      <SectionHeading badge="Success Stories" badgeVariant="dot" title="Real Students, Real Progress" align="center" dark />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {STORIES.map((story, i) => (
          <FadeIn key={story.name} delay={i * 0.15}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-gray-300">&ldquo;{story.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{story.name}</p>
                  <p className="text-xs text-gray-500">{story.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-400">{story.metric}</p>
                  <p className="text-xs text-gray-500">{story.metricLabel}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
