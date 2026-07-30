import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Container } from '@/components/layout/Container';
import { AlertBox } from '@/components/shared/AlertBox';
import { FadeIn } from '@/components/animations/FadeIn';
import { PRIVACY_POLICY } from '@/data/legal';

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        variant="legal"
        metadata={{
          effectiveDate: PRIVACY_POLICY.effectiveDate,
          lastUpdated: PRIVACY_POLICY.lastUpdated,
          sebiReg: 'INH000027593',
        }}
      />

      <SectionWrapper background="white">
        <Container size="md">
          <FadeIn>
            <AlertBox variant="info" className="mb-10">
              Vriddhi Research is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
            </AlertBox>

            <div className="space-y-10">
              {PRIVACY_POLICY.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-navy-900 mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-sm font-semibold text-navy-900 mb-2">Contact Us About Privacy</h3>
              <p className="text-sm text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@vriddhiresearch.com" className="text-blue-600 hover:underline">
                  support@vriddhiresearch.com
                </a>
              </p>
            </div>
          </FadeIn>
        </Container>
      </SectionWrapper>
    </main>
  );
}
