import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { STATISTICS } from '@/data/statistics';

function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export function StatisticsSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/3 rounded-full blur-[120px]" />

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {STATISTICS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="glass rounded-2xl p-8 text-center"
            >
              <p className="text-3xl lg:text-4xl font-extrabold text-white [font-variant-numeric:tabular-nums]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
              </p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
