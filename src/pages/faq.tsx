import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';
import { FAQS } from '@/data/faqs';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Vriddhi Research, our services, and how we operate."
        badge="FAQ"
      />

      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
                  <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
