import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { COURSES } from '@/data/courses';
import { WHATSAPP_URL } from '@/constants/urls';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="bg-navy-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-blue-400 hover:text-blue-300 transition-colors">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const curriculum = [
    { title: 'Module 1: Introduction to Markets', lessons: 3 },
    { title: 'Module 2: Options Fundamentals', lessons: 4 },
    { title: 'Module 3: Technical Analysis Basics', lessons: 3 },
    { title: 'Module 4: Understanding Options Greeks', lessons: 3 },
    { title: 'Module 5: Building Your Strategy', lessons: 3 },
    { title: 'Module 6: Risk Management', lessons: 2 },
    { title: 'Module 7: Execution & Discipline', lessons: 2 },
  ];

  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">{course.badge}</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">{course.level}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">{course.title}</h1>
                <p className="text-lg text-gray-400">{course.subtitle}</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-300"><span>Lessons</span><span className="font-bold text-white">{course.lessons}</span></div>
                <div className="flex justify-between text-gray-300"><span>Price</span><span className={`font-bold ${course.price === 'Free' ? 'text-emerald-400' : 'text-white'}`}>{course.price === 'Free' ? 'Free' : `₹${course.price}`}</span></div>
                <div className="flex justify-between text-gray-300"><span>Last Updated</span><span className="font-medium text-white">{course.lastUpdated}</span></div>
              </div>
              <Link to="/courses" className="mt-6 block text-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Back to Courses
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-xl font-bold text-white mb-4">About This Course</h2>
                <p className="text-gray-400 leading-relaxed">{course.description}</p>
              </motion.div>

              {/* Curriculum */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl font-bold text-white mb-4">Course Curriculum</h2>
                <div className="space-y-3">
                  {curriculum.map((mod, i) => (
                    <div key={mod.title} className="glass rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium text-white">{mod.title}</span>
                      </div>
                      <span className="text-xs text-gray-400">{mod.lessons} lessons</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="font-bold text-white mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {['20 comprehensive video lessons', 'Hands-on practice exercises', 'Lifetime access to course material', 'Certificate of completion', 'Access to free community'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="block text-center rounded-xl bg-gold px-6 py-4 text-base font-bold text-navy-950 shadow-lg shadow-gold/20"
              >
                Join Free Community
              </motion.a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
