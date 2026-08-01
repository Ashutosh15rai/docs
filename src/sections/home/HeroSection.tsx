import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { AlertBox } from '@/components/shared/AlertBox';
import { FadeIn } from '@/components/animations/FadeIn';
import { WHATSAPP_URL } from '@/constants/urls';
import { ArrowRight, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <SectionWrapper background="gray" padding="none" className="pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <FadeIn direction="down" duration={0.4}>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy-700 shadow-sm mb-6">
              <Shield className="h-3.5 w-3.5 text-blue-600" />
              Managed by SEBI Registered Research Analyst
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-6xl">
              Learn Markets Through{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #2563EB 0%, #3B82F6 60%, #60A5FA 100%)',
                }}
              >
                Logic, Structure
              </span>{' '}
              & Research.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              Learn how markets actually work — with research-backed insights, disciplined execution support, and real-time market learning in our free community.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-whatsapp-hover hover:shadow-md hover:shadow-whatsapp/20 active:scale-[0.98]"
              >
                Join Free Community
              </a>
              <a
                href="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 max-w-lg">
              <AlertBox variant="warning" title="Risk Disclosure">
                Investment in securities is subject to market risk. Research insights are for educational purposes only. Past performance is not indicative of future results.
              </AlertBox>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" delay={0.2} duration={0.6} className="relative">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-navy-900/5 ring-1 ring-black/[0.02] transition-shadow lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500">NIFTY 50</p>
                <p className="text-3xl font-bold text-navy-900 [font-variant-numeric:tabular-nums]">24,388.40</p>
                <p className="text-sm font-medium text-green-600">+128.35 (+0.53%)</p>
              </div>
              <div className="h-16 w-32 rounded-lg bg-green-50 flex items-end justify-center gap-1 p-2">
                {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-sm bg-gradient-to-t from-green-500 to-green-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                <p className="text-xs text-gray-500">Bank Nifty</p>
                <p className="mt-1 text-lg font-bold text-navy-900 [font-variant-numeric:tabular-nums]">52,145.20</p>
                <p className="text-xs text-green-600">+0.82%</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
                <p className="text-xs text-gray-500">Sensex</p>
                <p className="mt-1 text-lg font-bold text-navy-900 [font-variant-numeric:tabular-nums]">80,123.65</p>
                <p className="text-xs text-green-600">+0.44%</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
              Market data for educational demonstration
            </p>
          </div>
          {/* Subtle depth accent behind the card */}
          <div
            className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-100/40 via-transparent to-transparent blur-2xl"
            aria-hidden="true"
          />
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
