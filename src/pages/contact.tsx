import { PageHero } from '@/components/layout/PageHero';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { CTABanner } from '@/components/shared/CTABanner';
import { FadeIn } from '@/components/animations/FadeIn';
import { CONTACT_CHANNELS, CONTACT_INFO } from '@/data/contact';
import { WHATSAPP_URL } from '@/constants/urls';
import { MessageCircle, Mail, Phone, Clock, MapPin } from 'lucide-react';

const ICON_MAP = {
  whatsapp: <MessageCircle className="h-5 w-5" />,
  email: <Mail className="h-5 w-5" />,
  phone: <Phone className="h-5 w-5" />,
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        badge="Contact"
        title="We're Here to Help"
        description="Have questions about courses, membership, or research? Reach out — our team typically responds within 24-48 hours."
      />

      <SectionWrapper background="white">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Channels */}
          <div className="lg:col-span-1 space-y-4">
            <FadeIn>
              <h2 className="text-lg font-bold text-navy-900 mb-4">Get in Touch</h2>
              {CONTACT_CHANNELS.map((channel) => (
                <div
                  key={channel.title}
                  className={`rounded-xl border p-5 transition-all ${
                    channel.variant === 'highlighted'
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-100 bg-white shadow-sm'
                  }`}
                >
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-3 ${
                    channel.variant === 'highlighted'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {channel.badge}
                  </span>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      channel.variant === 'highlighted'
                        ? 'bg-whatsapp/10 text-whatsapp'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {ICON_MAP[channel.icon as keyof typeof ICON_MAP]}
                    </div>
                    <h3 className="text-sm font-semibold text-navy-900">{channel.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{channel.description}</p>
                  <a
                    href={channel.linkHref}
                    target={channel.linkHref.startsWith('http') ? '_blank' : undefined}
                    rel={channel.linkHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`text-sm font-medium ${
                      channel.variant === 'highlighted'
                        ? 'text-whatsapp hover:text-whatsapp-hover'
                        : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {channel.linkLabel}
                  </a>
                </div>
              ))}

              {/* Info Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-navy-900 mb-3">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-gray-400" />
                    {CONTACT_INFO.hours}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {CONTACT_INFO.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4 text-gray-400" />
                    {CONTACT_INFO.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    Mumbai, Maharashtra, India
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 lg:p-10 shadow-sm">
                <SectionHeading
                  badge="Send a Message"
                  badgeVariant="outline"
                  title="Contact Form"
                  subtitle="Fill out the form below and our team will get back to you as soon as possible."
                  className="mb-8"
                />
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="navy-dark" padding="lg">
        <CTABanner
          title="Prefer WhatsApp?"
          subtitle="Get instant responses and join our active learning community."
          primaryLabel="Chat on WhatsApp"
          primaryHref={WHATSAPP_URL}
          variant="dark"
        />
      </SectionWrapper>
    </main>
  );
}
