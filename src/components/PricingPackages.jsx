import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles, Plus } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20package%20for%20my%20business.';

export default function PricingPackages({ onOpenPrototypeModal }) {
  const plans = [
    {
      name: 'Essential Business Website',
      tagline: 'High-speed digital presence for local clinics, schools, and professional practices.',
      price: '₹14,999',
      period: 'one-time build',
      popular: false,
      delivery: '2 Days Delivery',
      badge: 'STARTER ARCHITECTURE',
      cardStyle: 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-teal-500 hover:shadow-2xl',
      badgeStyle: 'bg-teal-50 border-teal-200 text-teal-800',
      accentColor: 'text-teal-600',
      buttonStyle: 'bg-slate-900 hover:bg-teal-700 text-white shadow-md',
      includesPrevious: null,
      features: [
        'Up to 5 bespoke high-speed mobile pages',
        'Direct 1-tap WhatsApp inquiry button',
        'Sub-second 4G/5G mobile edge performance',
        '10-second phone admin cockpit for text edits',
        'Google Search Console & Google Maps verification',
        '100% source code & domain ownership',
        '30 days of post-launch support included',
      ],
      cta: 'Choose Essential',
      primary: false,
    },
    {
      name: 'Growth Commercial Platform',
      tagline: 'Interactive storefronts, product catalogs, and automated inquiry engines.',
      price: '₹29,999',
      period: 'one-time build',
      popular: true,
      delivery: '2-3 Days Delivery',
      badge: 'RECOMMENDED FOR BUSINESSES',
      cardStyle: 'bg-white border-2 border-rose-500 shadow-2xl shadow-rose-200/60 ring-4 ring-rose-500/10 hover:border-rose-600',
      badgeStyle: 'bg-rose-50 border-rose-200 text-rose-800',
      accentColor: 'text-rose-600',
      buttonStyle: 'bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-xl shadow-rose-500/30 hover:brightness-105 border border-rose-400/40',
      includesPrevious: 'Everything in Essential, PLUS:',
      features: [
        'Interactive product catalog & spec configurator',
        '1-tap WhatsApp order flow & instant quote calculators',
        'Visitor Tracking Tool (see who visited, where they came from, and what they clicked)',
        'Sub-0.3s edge speed scoring 99/100 Core Web Vitals',
        'Self-serve phone admin for price & photo edits',
        'Automated multi-channel routing to WhatsApp & email',
        'Full source code handover & zero vendor lock-in',
      ],
      cta: 'Choose Growth Platform',
      primary: true,
    },
    {
      name: 'Custom Apps & Web Applications',
      tagline: 'Tailored web portals, client member registries, custom webapps, and booking platforms.',
      price: 'Starts at ₹34,999',
      period: 'one-time build',
      popular: false,
      delivery: '3-5 Days Delivery',
      badge: 'CUSTOM WEBAPPS & APPS',
      cardStyle: 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-purple-500 hover:shadow-2xl',
      badgeStyle: 'bg-purple-50 border-purple-200 text-purple-800',
      accentColor: 'text-purple-600',
      buttonStyle: 'bg-slate-900 hover:bg-purple-700 text-white shadow-md',
      includesPrevious: 'Everything in Growth, PLUS:',
      features: [
        'Custom web application or progressive app for your business',
        'Secure client / student login portal & user database',
        'Custom appointment booking, forms, or custom quote engine',
        'Direct systems architecture with Jagadish (ex-Amazon/Google AI)',
        'Custom payment gateway & third-party API integrations',
        '100% legal intellectual property sovereignty',
        'Zero vendor lock-in or recurring software subscriptions',
      ],
      cta: 'Scope Custom System',
      primary: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-emerald-300 text-emerald-800 mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="uppercase tracking-wider">GENUINE ONE-TIME INVESTMENT • 100% OWNERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-950 mb-4">
            Transparent Pricing.{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              No Hidden Maintenance Bills.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pay once for the build. We hand over 100% of your source code, domain, and database with zero mandatory maintenance retainers. Clean, honest, and straightforward.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => {
            const isPopular = plan.popular;

            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all duration-300 ease-out flex flex-col justify-between relative p-6 sm:p-8 backdrop-blur-xl border ${plan.cardStyle} hover:-translate-y-2 active:scale-[0.99] group`}
              >
                {/* Popular Choice Badge (Clean layout, NO overlap!) */}
                {isPopular && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-500/25">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>MOST POPULAR FOR BUSINESSES</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-slate-200 pb-5 mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-500 block mb-1.5">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-1.5 tracking-tight group-hover:text-rose-600 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {plan.tagline}
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black font-display text-slate-950 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        / {plan.period}
                      </span>
                    </div>

                    <div className="mt-3.5 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded-lg w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>100% Full Ownership • ₹0 Hidden Fees</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {plan.includesPrevious && (
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5 mb-3">
                        <Plus className="w-3.5 h-3.5 text-rose-600 stroke-[3]" />
                        <span>{plan.includesPrevious}</span>
                      </div>
                    )}

                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider block mb-2">
                      WHAT'S INCLUDED:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.accentColor}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Footer Action */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 mb-3 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{plan.delivery}</span>
                    <span className="text-emerald-700 font-semibold">100% Guaranteed</span>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={onOpenPrototypeModal}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${plan.buttonStyle}`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 border border-slate-200"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-emerald-600" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-rose-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-950">Not sure which package fits your business?</p>
              <p className="text-[11px] text-slate-600">Tell us what you sell or teach. We'll recommend the leanest architecture with zero upsells.</p>
            </div>
          </div>
          <button
            onClick={onOpenPrototypeModal}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all shrink-0 cursor-pointer"
          >
            Get Free Architecture Recommendation →
          </button>
        </div>

      </div>
    </section>
  );
}
