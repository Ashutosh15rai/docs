import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { COURSES } from '@/data/courses';

export function FeaturedCoursesSection() {
  const course = COURSES[0];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

      <Container>
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3"
          >
            Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold text-white"
          >
            Featured Course
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Course Image Area */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-navy-900 p-8 lg:p-12 flex flex-col justify-center">
              <div className="glass rounded-xl p-8 text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-4 shadow-lg shadow-blue-900/30">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{course.subtitle}</p>
              </div>
            </div>

            {/* Course Details */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                  {course.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                  {course.level}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                  <BookOpen className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-lg font-bold text-white">{course.lessons}</p>
                  <p className="text-xs text-gray-400">Lessons</p>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                  <span className="text-lg font-bold text-emerald-400">{course.price}</span>
                  <p className="text-xs text-gray-400">Price</p>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                  <Clock className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                  <p className="text-sm font-bold text-white">Updated</p>
                  <p className="text-xs text-gray-400">{course.lastUpdated}</p>
                </div>
              </div>

              <Link
                to={`/courses/${course.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Start Course
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
