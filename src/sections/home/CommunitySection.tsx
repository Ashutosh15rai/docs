import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { WHATSAPP_URL } from '@/constants/urls';

const features = [
  'Daily NIFTY & BANKNIFTY market updates',
  'Educational insights and analysis',
  'Direct access to our research team',
  '100% free, no payment required',
];

export function CommunitySection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-green-600/3 rounded-full blur-[120px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-3"
            >
              Free Community
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-extrabold text-white mb-6"
            >
              Join 15,000+ Traders in Our{' '}
              <span className="text-green-400">Free Community</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              Our free WhatsApp community is the starting point for anyone who wants to learn how markets work — with no payment, no commitment, and no hype.
            </motion.p>

            <div className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/20 transition-all hover:shadow-whatsapp/30"
            >
              <MessageCircle className="h-5 w-5" />
              Join Free Community
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />

              {/* Simulated Chat */}
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Vriddhi Research</p>
                    <p className="text-xs text-gray-400">Free Community</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-500">Online</span>
                </div>

                <motion.div
                  animate={{ opacity: [0, 1], y: [10, 0] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white/[0.03] rounded-xl rounded-tl-sm p-4 max-w-[85%]"
                >
                  <p className="text-xs text-gray-400 mb-1">Vriddhi Research</p>
                  <p className="text-sm text-gray-200">Good morning! NIFTY opened at 24,260. Key levels to watch: 24,200 support, 24,400 resistance. Stay disciplined with position sizing.</p>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0, 1], y: [10, 0] }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-blue-600/10 rounded-xl rounded-tr-sm p-4 max-w-[85%] ml-auto"
                >
                  <p className="text-xs text-gray-400 mb-1 text-right">Member</p>
                  <p className="text-sm text-gray-200">Thanks for the update! What's the bias for today?</p>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0, 1], y: [10, 0] }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-white/[0.03] rounded-xl rounded-tl-sm p-4 max-w-[85%]"
                >
                  <p className="text-xs text-gray-400 mb-1">Vriddhi Research</p>
                  <p className="text-sm text-gray-200">Mildly bullish bias. Watch for gap-up continuation above 24,300. Bank Nifty showing strength with HDFC and ICICI leading. Full analysis in our morning session at 9:30 AM.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
