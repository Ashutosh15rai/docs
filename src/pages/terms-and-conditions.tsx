import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Container } from '@/components/layout/Container';
import { AlertBox } from '@/components/shared/AlertBox';
import { FadeIn } from '@/components/animations/FadeIn';
import { TERMS_CONDITIONS } from '@/data/legal';

export default function TermsConditionsPage() {
  return (
    <main id="main">
      <PageHero
        badge="Legal"
        title="Terms & Conditions"
        variant="legal"
        metadata={{
          effectiveDate: TERMS_CONDITIONS.effectiveDate,
          lastUpdated: TERMS_CONDITIONS.lastUpdated,
          sebiReg: 'INH000027593',
        }}
      />

      <SectionWrapper background="white">
        <Container size="md">
          <FadeIn>
            <AlertBox variant="warning" className="mb-10">
              Please read these Terms & Conditions carefully before using Vriddhi Research services. By accessing our platform, you agree to be bound by these terms.
            </AlertBox>

            <div className="space-y-10">
              {TERMS_CONDITIONS.sections.map((section) => (
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
              <h3 className="text-sm font-semibold text-navy-900 mb-2">Questions About These Terms?</h3>
              <p className="text-sm text-gray-600">
                Contact us at{' '}
                <a href="mailto:support@vriddhiresearch.com" className="text-blue-600 hover:underline">
                  support@vriddhiresearch.com
                </a>{' '}
                for any clarifications regarding these Terms & Conditions.
              </p>
            </div>
          </FadeIn>
        </Container>
      </SectionWrapper>
    </main>
  );
}
