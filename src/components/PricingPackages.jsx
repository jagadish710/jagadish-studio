import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20package%20for%20my%20business.';

export default function PricingPackages({ onOpenPrototypeModal }) {
  const plans = [
    {
      name: 'Essential Business',
      tagline: 'High-speed digital presence for local clinics, schools, and professional services.',
      price: '₹14,999',
      period: 'one-time build',
      popular: false,
      delivery: '5-7 Days Delivery',
      badge: 'Starter Architecture',
      features: [
        'Up to 5 bespoke high-speed mobile pages',
        'Direct 1-tap WhatsApp inquiry button',
        'Sub-second 4G/5G mobile edge performance',
        '10-second phone admin cockpit for text edits',
        'Google Search Console & SEO verification',
        '100% source code & domain ownership',
        'Zero monthly agency retainer fees forever',
      ],
      cta: 'Choose Essential',
      primary: false,
    },
    {
      name: 'Growth Commercial',
      tagline: 'Interactive storefronts, product catalogs, and automated inquiry engines.',
      price: '₹29,999',
      period: 'one-time build',
      popular: true,
      delivery: '7-10 Days Delivery',
      badge: 'Most Popular for Businesses',
      features: [
        'Interactive product catalog & spec configurator',
        '1-tap WhatsApp order flow & RFQ calculators',
        'Sub-0.3s edge speed scoring 99/100 Core Web Vitals',
        'Self-serve phone admin for price & photo edits',
        'Automated multi-channel routing to WhatsApp & email',
        'Full Google Analytics 4 (GA4) conversion setup',
        '100% source code repository & DNS transfer',
        'Zero recurring monthly agency retainer fees',
      ],
      cta: 'Choose Growth Platform',
      primary: true,
    },
    {
      name: 'Custom Cloud Architecture',
      tagline: 'Tailored web portals, member registries, and specialized client platforms.',
      price: 'Custom Scoped',
      period: 'starting at ₹49,999',
      popular: false,
      delivery: '14-21 Days Delivery',
      badge: 'Enterprise Engineering',
      features: [
        'Custom student/client registry & grading databases',
        'Role-based authentication & secure client portals',
        'Direct systems architecture with Jagadish (ex-Amazon/Turing)',
        'Custom API & third-party service integrations',
        'Cloudflare edge security audit & hardened CSP headers',
        'Full CI/CD automated deployment pipeline',
        '100% legal intellectual property sovereignty',
        'Zero vendor lock-in or recurring hosting markups',
      ],
      cta: 'Discuss Custom Scope',
      primary: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Webspacekit-Style Value Clarity */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">TRANSPARENT VALUE-FIRST PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
            Pay for the Build.{' '}
            <span className="font-serif italic font-normal text-rose-600">
              Never a Monthly Retainer.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Traditional agencies lock you into ₹5,000 to ₹15,000 monthly retainers just to keep basic templates alive. We engineer decoupled, high-speed code that runs with zero recurring maintenance fees.
          </p>
        </div>

        {/* Pricing Cards Grid (Webspacekit Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl transition-all duration-300 flex flex-col justify-between relative p-7 sm:p-9 ${
                plan.popular
                  ? 'bg-white border-2 border-rose-500 shadow-2xl shadow-rose-500/10 scale-100 lg:-translate-y-2'
                  : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    {!plan.popular ? plan.badge : 'RECOMMENDED'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      / {plan.period}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>₹0 / Year Recurring Retainer Debt</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider block mb-2">
                    What’s Included:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5 text-rose-600">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 space-y-2 mt-auto">
                <button
                  onClick={onOpenPrototypeModal}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    plan.primary
                      ? 'btn-crimson-primary shadow-lg shadow-rose-500/25'
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm active:scale-97'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-[11px] font-mono text-slate-500 pt-1">
                  ⚡ {plan.delivery} • Direct Founder Engineering
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Retainer Comparison Banner (Webspacekit Style Trust Bar) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                100% Code &amp; Domain Sovereignty Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                You own 100% of your source code, domain name, and database keys on launch. No hostage holding, no monthly maintenance contracts.
              </p>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md transition-all active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-slate-950" />
            <span>Ask a Pricing Question</span>
          </a>
        </div>

      </div>
    </section>
  );
}
