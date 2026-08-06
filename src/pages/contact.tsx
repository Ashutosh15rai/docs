import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';
import { WHATSAPP_URL, SUPPORT_EMAIL, SUPPORT_PHONE, GRIEVANCE_EMAIL, GRIEVANCE_PHONE, ADDRESS } from '@/constants/urls';

export default function ContactPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Have questions? We are here to help. Reach out to us through any of the channels below."
        badge="Get in Touch"
      />

      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">WhatsApp Community</h3>
                  <p className="text-sm text-gray-400 mb-3">Join our free community for daily market updates</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
                    Join Community <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email Support</h3>
                  <p className="text-sm text-gray-400 mb-1">{SUPPORT_EMAIL}</p>
                  <p className="text-xs text-gray-500">Grievance: {GRIEVANCE_EMAIL}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <p className="text-sm text-gray-400 mb-1">{SUPPORT_PHONE}</p>
                  <p className="text-xs text-gray-500">Grievance: {GRIEVANCE_PHONE}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Office Address</h3>
                  <p className="text-sm text-gray-400">{ADDRESS}</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${SUPPORT_EMAIL}?subject=Contact from Website`; }}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                  <input type="text" required className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                  <input type="email" required className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
                  <input type="text" required className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all" placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                  <textarea rows={4} required className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
