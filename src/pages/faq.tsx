'use client';

import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTABanner } from '@/components/shared/CTABanner';
import { FadeIn } from '@/components/animations/FadeIn';
import { FAQS } from '@/data/faqs';
import { WHATSAPP_URL } from '@/constants/urls';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  return (
    <main id="main">
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about our courses, community, membership, and policies."
      />

      <SectionWrapper background="white">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100">
                  <AccordionTrigger className="text-left text-sm font-semibold text-navy-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-gray-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper background="gray" padding="lg">
        <CTABanner
          title="Still Have Questions?"
          subtitle="Our team is happy to help. Reach out via WhatsApp for the fastest response."
          primaryLabel="Chat on WhatsApp"
          primaryHref={WHATSAPP_URL}
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="navy"
        />
      </SectionWrapper>
    </main>
  );
}
