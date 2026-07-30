import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { AlertBox } from '@/components/shared/AlertBox';
import { WHATSAPP_URL } from '@/constants/urls';
import { ArrowRight, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <SectionWrapper background="gray" padding="none" className="pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy-700 mb-6">
            <Shield className="h-3.5 w-3.5" />
            Managed by SEBI Registered Research Analyst
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Learn Markets Through{' '}
            <span className="text-blue-600">Logic, Structure</span> & Research.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
            Learn how markets actually work — with research-backed insights, disciplined execution support, and real-time market learning in our free community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-base font-semibold text-white hover:bg-whatsapp-hover transition-colors shadow-sm"
            >
              Join Free Community
            </a>
            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 max-w-lg">
            <AlertBox variant="warning" title="Risk Disclosure">
              Investment in securities is subject to market risk. Research insights are for educational purposes only. Past performance is not indicative of future results.
            </AlertBox>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500">NIFTY 50</p>
                <p className="text-3xl font-bold text-navy-900">24,388.40</p>
                <p className="text-sm font-medium text-green-600">+128.35 (+0.53%)</p>
              </div>
              <div className="h-16 w-32 rounded bg-green-50 flex items-end justify-center gap-1 p-2">
                {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                  <div key={i} className="w-2 rounded-sm bg-green-400" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Bank Nifty</p>
                <p className="mt-1 text-lg font-bold text-navy-900">52,145.20</p>
                <p className="text-xs text-green-600">+0.82%</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Sensex</p>
                <p className="mt-1 text-lg font-bold text-navy-900">80,123.65</p>
                <p className="text-xs text-green-600">+0.44%</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
              Market data for educational demonstration
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
