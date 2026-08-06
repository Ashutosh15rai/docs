import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';
import { PLANS } from '@/data/plans';
import { WHATSAPP_URL } from '@/constants/urls';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function PackagePage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader
        title="Research Plans"
        subtitle="Structured research and trade alerts delivered directly to your WhatsApp. Choose the plan that fits your trading journey."
        badge="Plans & Pricing"
      />

      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                variants={item}
                whileHover={{ y: -4 }}
                className={`glass rounded-2xl p-8 lg:p-10 relative overflow-hidden ${plan.featured ? 'ring-1 ring-gold/30' : ''}`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 px-5 py-1.5 rounded-bl-xl bg-gold text-navy-950 text-xs font-bold uppercase tracking-wider">
                    Best Value
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-white">₹{plan.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-400">/ {plan.period}</span>
                  {plan.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center w-full gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all ${
                    plan.featured
                      ? 'bg-gold text-navy-950 hover:bg-gold-light shadow-lg shadow-gold/20'
                      : 'bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.1]'
                  }`}
                >
                  Subscribe Now
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                Important Information
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• All prices are inclusive of GST</li>
                <li>• All sales are final. Refunds are issued only for the unused portion of subscription as per SEBI guidelines</li>
                <li>• Trade alerts are provided for educational purposes only</li>
                <li>• We do not guarantee any returns or performance</li>
                <li>• Investment in securities market is subject to market risks</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
