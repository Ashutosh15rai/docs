import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { PLANS } from '@/data/plans';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export function PackagePreviewSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-gold/2 rounded-full blur-[120px]" />

      <Container>
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3"
          >
            Research Plans
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold text-white"
          >
            Choose Your Plan
          </motion.h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-8 relative overflow-hidden ${plan.featured ? 'ring-1 ring-gold/30' : ''}`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-gold text-navy-950 text-xs font-bold uppercase tracking-wider">
                  Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold text-white">₹{plan.price.toLocaleString()}</span>
                <span className="text-sm text-gray-400">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/package"
                className={`inline-flex items-center justify-center w-full gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                  plan.featured
                    ? 'bg-gold text-navy-950 hover:bg-gold-light shadow-lg shadow-gold/20'
                    : 'bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.1]'
                }`}
              >
                View Details
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/package"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Compare All Plans
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
