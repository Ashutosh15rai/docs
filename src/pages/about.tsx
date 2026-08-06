import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Target, Eye, BookOpen, Award } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';
import { WHATSAPP_URL, SEBI_REG, SEBI_REG_FULL } from '@/constants/urls';

const values = [
  { icon: BookOpen, title: 'Education First', description: 'We believe in teaching the right way to approach markets — through research, not speculation.' },
  { icon: ShieldCheck, title: 'Compliance', description: 'All research is managed by a SEBI Registered Research Analyst with full regulatory compliance.' },
  { icon: Target, title: 'Discipline', description: 'We emphasize systematic trading with clear entry/exit levels and risk management.' },
  { icon: Eye, title: 'Transparency', description: 'Clear communication, no hidden agendas, and honest assessment of market conditions.' },
];

const milestones = [
  { year: '5+', label: 'Years of SEBI Registration' },
  { year: '8,500+', label: 'Active Students' },
  { year: '15,000+', label: 'Community Members' },
  { year: '12+', label: 'Courses Delivered' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function AboutPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader
        title="About Vriddhi Research"
        subtitle="SEBI Registered Research Analyst providing structured market education and research-backed insights for Indian traders."
        badge="About Us"
      />

      {/* Mission */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-extrabold text-white mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 leading-relaxed mb-4"
              >
                Vriddhi Research is a SEBI Registered Research Analyst service managed by Yeshwant Bhisham Valecha (Reg. No: {SEBI_REG}). We provide structured index research, financial education, and market insights for Indian traders.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-gray-400 leading-relaxed mb-4"
              >
                Our approach is rooted in the belief that markets can be understood through logic, structure, and research — not through tips or speculation. We focus on teaching traders how to analyze markets systematically and execute with discipline.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 leading-relaxed"
              >
                From our free WhatsApp community to our premium research plans, every offering is designed to help traders build a sustainable approach to the markets.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 lg:p-10"
            >
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <p className="text-2xl font-extrabold text-blue-400">{milestone.year}</p>
                    <p className="text-xs text-gray-400 mt-1">{milestone.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
        <Container>
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-white"
            >
              What We Stand For
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4 transition-transform group-hover:scale-110">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Registration Info */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto text-center"
          >
            <Award className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Registration & Compliance</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Research Analyst: {SEBI_REG_FULL}</p>
              <p>SEBI Registration No: {SEBI_REG}</p>
              <p>NISM Series-XV Certified</p>
              <p className="pt-3 text-xs text-gray-500 leading-relaxed">
                Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Investment in securities market are subject to market risks. Read all related documents carefully before investing.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-base font-semibold text-white shadow-lg shadow-whatsapp/20 transition-all hover:shadow-whatsapp/30"
            >
              Join Free Community
            </a>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
