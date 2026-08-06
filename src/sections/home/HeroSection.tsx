import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, ArrowRight, AlertTriangle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { WHATSAPP_URL } from '@/constants/urls';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function MiniChart() {
  const bars = [35, 55, 40, 65, 50, 75, 60, 80, 45, 70, 85, 65];
  return (
    <div className="flex items-end gap-[3px] h-16 px-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: 0.5 + i * 0.04, duration: 0.4, ease: 'easeOut' }}
          className="w-2 rounded-t-sm bg-gradient-to-t from-green-500/80 to-green-400/60"
        />
      ))}
    </div>
  );
}

function MarketWidget() {
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative"
    >
      <div className="glass rounded-2xl p-6 lg:p-8 relative overflow-hidden">
        {/* Glow behind */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative">
          {/* Nifty 50 */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">NIFTY 50</p>
              <p className="text-3xl font-bold text-white [font-variant-numeric:tabular-nums]">24,388.40</p>
              <p className="text-sm font-semibold text-green-400 mt-0.5">+128.35 (+0.53%)</p>
            </div>
            <MiniChart />
          </div>

          {/* Secondary Tiles */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
              <p className="text-xs text-gray-400">Bank Nifty</p>
              <p className="mt-1 text-lg font-bold text-white [font-variant-numeric:tabular-nums]">52,145.20</p>
              <p className="text-xs text-green-400 font-medium">+0.82% Today</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
              <p className="text-xs text-gray-400">Sensex</p>
              <p className="mt-1 text-lg font-bold text-white [font-variant-numeric:tabular-nums]">80,123.65</p>
              <p className="text-xs text-green-400 font-medium">+0.44% Today</p>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-gray-500 text-center">
            Market data for educational demonstration
          </p>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-medium text-gray-300"
      >
        <TrendingUp className="h-3.5 w-3.5 text-green-400 inline mr-1.5" />
        Live Markets
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />

      {/* Market Ticker */}
      <div className="relative bg-navy-950/80 border-b border-white/5 overflow-hidden py-2.5">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(4)].map((_, set) => (
            <div key={set} className="flex gap-8">
              {[
                { name: 'SENSEX', value: '80,123.65', change: '+422.10', positive: true },
                { name: 'NIFTY BANK', value: '52,145.20', change: '-120.30', positive: false },
                { name: 'FIN NIFTY', value: '23,891.50', change: '+95.20', positive: true },
                { name: 'MIDCAP NIFTY', value: '18,234.80', change: '+67.40', positive: true },
                { name: 'NIFTY 50', value: '24,388.40', change: '+128.35', positive: true },
                { name: 'BANKNIFTY', value: '52,145.20', change: '-45.60', positive: false },
              ].map((item) => (
                <div key={`${set}-${item.name}`} className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-gray-300">{item.name}</span>
                  <span className="text-gray-500">{item.value}</span>
                  <span className={`font-medium ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero Content */}
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center py-16 lg:py-24"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                Managed by SEBI Registered Research Analyst
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Learn Markets Through{' '}
              <span className="gradient-text">
                Logic, Structure
              </span>{' '}
              & Research.
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-gray-400 max-w-xl">
              Learn how markets actually work — with research-backed insights, disciplined execution support, and real-time market learning in our free community.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/20 transition-all hover:shadow-whatsapp/30"
              >
                Join Free Community
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a
                href="/courses"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-base font-medium text-gray-300 hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>

            {/* Risk Disclaimer */}
            <motion.div variants={fadeInUp} className="mt-8 max-w-lg">
              <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  Investment in securities is subject to market risk. Research insights are for educational purposes only. Past performance is not indicative of future results.
                </p>
              </div>
            </motion.div>
          </div>

          <MarketWidget />
        </motion.div>
      </Container>
    </section>
  );
}
