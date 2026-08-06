import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';
import { COURSES } from '@/data/courses';

export default function CoursesPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader
        title="Courses"
        subtitle="Structured education for every level — from beginners to advanced traders."
        badge="Education"
      />

      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-navy-900 p-8 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                      {course.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {course.lessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-bold ${course.price === 'Free' ? 'text-emerald-400' : 'text-white'}`}>
                      {course.price === 'Free' ? 'Free' : `₹${course.price}`}
                    </span>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
