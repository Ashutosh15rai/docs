import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, TrendingUp, Users } from 'lucide-react';
import { Container } from '@/components/layout/Container';

const badges = [
  { icon: ShieldCheck, title: 'Managed by SEBI Registered', subtitle: 'Research Analyst', color: 'blue' },
  { icon: GraduationCap, title: 'NISM Certified', subtitle: 'Research Team', color: 'purple' },
  { icon: TrendingUp, title: 'Learning + Earning', subtitle: 'Framework', color: 'green' },
  { icon: Users, title: 'Free Trade Community', subtitle: 'WhatsApp Group', color: 'whatsapp' },
];

const colorMap: Record<string, string> = {
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  green: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  whatsapp: 'text-green-400 bg-green-500/10 border-green-500/20',
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export function TrustBadgesSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-navy-950">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 text-center group transition-all hover:bg-white/[0.06]"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl border ${colorMap[badge.color]} mb-4 transition-transform group-hover:scale-110`}>
                <badge.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{badge.title}</h3>
              <p className="text-xs text-gray-400">{badge.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
