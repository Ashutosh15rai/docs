import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { WHATSAPP_URL } from '@/constants/urls';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-[80px]" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 mb-6"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Start Your Journey Today
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white max-w-3xl mx-auto text-balance"
            >
              Ready to Learn Markets{' '}
              <span className="gradient-text">The Right Way?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Join our free WhatsApp community and start learning with research-backed insights — no payment required, no commitment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gold px-8 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold/20 transition-all hover:shadow-gold/30"
              >
                Join Free Community
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/package"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-base font-medium text-gray-300 hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all"
              >
                View Research Plans
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
