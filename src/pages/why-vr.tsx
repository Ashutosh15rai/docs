import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, GraduationCap, BookOpen, TrendingUp } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';

const comparisons = [
  { feature: 'SEBI Registered Research', vr: true, others: false },
  { feature: 'NISM Certified Team', vr: true, others: false },
  { feature: 'Structured Education Courses', vr: true, others: false },
  { feature: 'Trade Alerts on WhatsApp', vr: true, others: true },
  { feature: 'Entry/Exit with Targets & SL', vr: true, others: true },
  { feature: 'Morning Special Trades', vr: true, others: false },
  { feature: 'Expiry Special Trades', vr: true, others: false },
  { feature: 'Swing Trade Recommendations', vr: true, others: true },
  { feature: 'Free Educational Sessions', vr: true, others: false },
  { feature: 'Trading Psychology & Money Management', vr: true, others: false },
  { feature: 'Free Community Access', vr: true, others: false },
  { feature: 'Research-Backed Analysis', vr: true, others: false },
];

const whyItems = [
  { icon: ShieldCheck, title: 'SEBI Registered', description: 'All research is managed by a SEBI Registered Research Analyst. Full regulatory compliance.' },
  { icon: GraduationCap, title: 'NISM Certified', description: 'Research team holds professional NISM certifications for market analysis.' },
  { icon: BookOpen, title: 'Education First', description: 'We teach you how to think about markets, not just what to trade.' },
  { icon: TrendingUp, title: 'Research + Learning', description: 'A complete ecosystem combining research alerts with structured education.' },
];

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function WhyVRPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader
        title="Why Vriddhi Research"
        subtitle="Not tips. Not noise. Research, structure, and education — delivered with discipline."
        badge="Why Choose VR"
      />

      {/* Key Differentiators */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-extrabold text-white"
            >
              What Makes Us Different
            </motion.h2>
          </div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyItems.map((whyItem) => (
              <motion.div
                key={whyItem.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 transition-transform group-hover:scale-110">
                  <whyItem.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{whyItem.title}</h3>
                <p className="text-sm text-gray-400">{whyItem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
        <Container>
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-extrabold text-white"
            >
              Vriddhi Research vs Others
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 border-b border-white/5">
                <div className="p-4 lg:p-5" />
                <div className="p-4 lg:p-5 text-center">
                  <span className="text-sm font-bold text-blue-400">Vriddhi Research</span>
                </div>
                <div className="p-4 lg:p-5 text-center">
                  <span className="text-sm font-medium text-gray-500">Others</span>
                </div>
              </div>

              {comparisons.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 border-b border-white/[0.03] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                  <div className="p-3 lg:p-4">
                    <span className="text-sm text-gray-300">{row.feature}</span>
                  </div>
                  <div className="p-3 lg:p-4 flex justify-center">
                    {row.vr ? (
                      <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 text-green-400" />
                      </div>
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center">
                        <X className="h-3.5 w-3.5 text-red-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-3 lg:p-4 flex justify-center">
                    {row.others ? (
                      <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 text-green-400" />
                      </div>
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center">
                        <X className="h-3.5 w-3.5 text-red-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
