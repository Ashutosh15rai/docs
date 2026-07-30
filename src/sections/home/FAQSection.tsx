'use client';

import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FAQS } from '@/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/FadeIn';

export function FAQSection() {
  return (
    <SectionWrapper background="white" id="faq">
      <SectionHeading
        badge="FAQ"
        badgeVariant="outline"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our courses, community, and membership."
        align="center"
      />
      <FadeIn>
        <div className="mx-auto mt-12 max-w-3xl">
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
  );
}
