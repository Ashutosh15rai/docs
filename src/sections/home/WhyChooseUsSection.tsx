import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, BookOpen, TrendingUp, BarChart3, Lock } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const features = [
  {
    icon: ShieldCheck,
    title: 'SEBI Registered Research',
    description: 'All research managed by a SEBI Registered Research Analyst. Fully compliant with regulatory requirements.',
    color: 'blue',
  },
  {
    icon: GraduationCap,
    title: 'NISM Certified Team',
    description: 'Research team holds NISM certifications ensuring professional-grade market analysis and insights.',
    color: 'purple',
  },
  {
    icon: BookOpen,
    title: 'Structured Education',
    description: 'From beginners to advanced traders — structured courses that build a solid foundation in market analysis.',
    color: 'emerald',
  },
  {
    icon: TrendingUp,
    title: 'Learning + Earning',
    description: 'A complete framework — from concept to consistent execution. Learn the methodology, then apply it.',
    color: 'amber',
  },
  {
    icon: BarChart3,
    title: 'Research-Backed Insights',
    description: 'Every trade alert is backed by thorough technical and fundamental research. Not tips. Not noise.',
    color: 'rose',
  },
  {
    icon: Lock,
    title: 'Disciplined Execution',
    description: 'Clear entry and exit levels with targets and stop-losses. Risk management is built into every recommendation.',
    color: 'cyan',
  },
];

const colorMap: Record<string, string> = {
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  rose: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export function WhyChooseUsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/3 rounded-full blur-[120px]" />

      <Container>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3"
          >
            Why Vriddhi Research
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold text-white max-w-2xl mx-auto"
          >
            Research is our foundation.{' '}
            <span className="gradient-text">Education is our mission.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-8 group transition-all hover:bg-white/[0.06]"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorMap[feature.color]} mb-5 transition-transform group-hover:scale-110`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
