import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { TESTIMONIALS } from '@/data/testimonials';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/3 rounded-full blur-[140px]" />

      <Container>
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold text-white"
          >
            What Our Students Say
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 lg:p-12"
            >
              <Quote className="h-8 w-8 text-purple-400/30 mb-4" />
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 italic">
                "{TESTIMONIALS[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {TESTIMONIALS[current].name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white">{TESTIMONIALS[current].name}</p>
                  <p className="text-sm text-gray-400">{TESTIMONIALS[current].role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
