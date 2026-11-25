import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles, Plus, Smartphone, Layers, Lock, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { trackPlanSelect } from '../lib/analytics';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20package%20for%20my%20business.';

export default function PricingPackages({ onOpenPrototypeModal }) {
  const plans = [
    {
      name: 'Starter Edge',
      tagline: 'High-speed digital presence for local clinics, schools, and professional practices.',
      price: 'Personal quote',
      period: 'after a scope call',
      popular: false,
      delivery: '2 Days Delivery',
      badge: 'STARTER ARCHITECTURE',
      cardStyle: 'bg-white border-2 border-teal-300 shadow-xl shadow-teal-500/5 hover:border-teal-500 hover:shadow-2xl',
      badgeStyle: 'bg-teal-50 border-teal-200 text-teal-800',
      accentColor: 'text-teal-600',
      buttonStyle: 'bg-slate-900 hover:bg-teal-700 text-white shadow-md',
      includesPrevious: null,
      features: [
        'Up to 5 bespoke high-speed mobile pages',
        'Direct 1-tap WhatsApp inquiry routing',
        'Speed-budgeted edge delivery (≈0.5 MB page weight)',
        '10-second phone admin cockpit for instant text edits',
        'Google Search Console & Google Maps verification',
        '100% full source code & domain ownership',
        '30 days of post-launch warranty included',
      ],
      notIncluded: [
        'Interactive product catalog & visual spec configurator',
        'Visitor intelligence tracking tool (who visited & city)',
        'Dynamic member database or custom client portal',
      ],
      cta: 'Choose Starter Edge',
      primary: false,
    },
    {
      name: 'Growth Engine',
      tagline: 'Interactive storefronts, product catalogs, and automated WhatsApp inquiry engines.',
      price: 'Personal quote',
      period: 'after a scope call',
      popular: true,
      delivery: '2-3 Days Delivery',
      badge: 'RECOMMENDED FOR BUSINESSES',
      cardStyle: 'bg-gradient-to-b from-amber-50/70 via-white to-white border-2 border-amber-400 shadow-2xl shadow-amber-500/25 ring-4 ring-amber-400/30 -translate-y-2 scale-[1.02] sm:-translate-y-4 sm:scale-105 z-20',
      badgeStyle: 'bg-amber-100 border-amber-300 text-amber-900',
      accentColor: 'text-amber-600',
      buttonStyle: 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white shadow-xl shadow-rose-500/30 hover:brightness-105 border border-rose-400/40',
      includesPrevious: 'Everything in Starter Edge, PLUS:',
      features: [
        'Interactive product catalog & visual spec configurator',
        '1-tap WhatsApp order flow & instant quote calculator',
        'Visitor Intelligence Tool (see who visited, their city, and what they clicked)',
        'Lighthouse-audited build report handed over at launch',
        'Self-serve phone admin for price & photo edits in 10s',
        'Automated multi-channel routing to WhatsApp & email',
        'Full source code handover & zero vendor lock-in',
      ],
      cta: 'Choose Growth Engine',
      primary: true,
    },
    {
      name: 'Custom Cloud',
      tagline: 'Tailored web portals, client member registries, custom webapps, and booking platforms.',
      price: 'Personal quote',
      period: 'after a scope call',
      popular: false,
      delivery: '3-5 Days Delivery',
      badge: 'CUSTOM WEBAPPS & APPS',
      cardStyle: 'bg-white border-2 border-purple-300 shadow-xl shadow-purple-500/5 hover:border-purple-500 hover:shadow-2xl',
      badgeStyle: 'bg-purple-50 border-purple-200 text-purple-800',
      accentColor: 'text-purple-600',
      buttonStyle: 'bg-slate-900 hover:bg-purple-700 text-white shadow-md',
      includesPrevious: 'Everything in Growth Engine, PLUS:',
      features: [
        'Custom web application or progressive app for your business',
        'Secure client / student login portal & user database',
        'Custom appointment booking, forms, or dynamic quote calculator',
        'Direct systems architecture with Jagadish (ex-Amazon/Google AI)',
        'Razorpay, UPI & third-party payment API integrations',
        '100% legal intellectual property sovereignty',
        'Zero vendor lock-in or recurring monthly software subscriptions',
      ],
      cta: 'Scope Custom Cloud',
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
            Package scope, inclusions, and delivery timelines are listed in full below. The exact investment is shared privately in your written proposal after a short scope call, so pricing stays fair for every market we work in. You pay once and own 100% of your source code, domain, and database.
          </p>
        </div>

        {/* 3 Pricing Cards Grid with 3D Pop Center Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6 pb-4">
          {plans.map((plan, idx) => {
            const isPopular = plan.popular;

            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all duration-300 ease-out flex flex-col justify-between relative p-6 sm:p-8 backdrop-blur-xl ${plan.cardStyle} hover:-translate-y-2 active:scale-[0.99] group`}
              >
                {/* Popular Choice 3D Floating Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-black tracking-wider uppercase bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 border border-amber-300 flex items-center gap-1.5 whitespace-nowrap z-30">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                    <span>★ MOST POPULAR FOR BUSINESSES</span>
                  </div>
                )}

                <div>
                  <div className="border-b border-slate-200 pb-5 mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-500 block mb-1.5">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950 mb-1.5 tracking-tight group-hover:text-rose-600 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 min-h-[38px]">
                      {plan.tagline}
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black font-display text-slate-950 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        / {plan.period}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        <Zap className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                        <span>{plan.delivery}</span>
                      </span>
                      <span className="text-slate-500 font-semibold">Zero Monthly Retainer</span>
                    </div>
                  </div>

                  {/* Previous tier inheritance label */}
                  {plan.includesPrevious && (
                    <div className="mb-3.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5">
                      <Plus className="w-3.5 h-3.5 text-rose-600 stroke-[3]" />
                      <span>{plan.includesPrevious}</span>
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-snug">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-emerald-700 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Negative checklist showing what is not included in Starter */}
                  {plan.notIncluded && (
                    <div className="pt-3 pb-2 border-t border-slate-100 mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 block mb-2">
                        Not Included in Starter:
                      </span>
                      <ul className="space-y-2.5">
                        {plan.notIncluded.map((item, nIdx) => (
                          <li key={nIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-snug">
                            <div className="w-4 h-4 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-2.5 h-2.5 text-rose-500 stroke-[3]" />
                            </div>
                            <span className="line-through decoration-rose-300 text-slate-500">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => {
                      trackPlanSelect(plan.name, plan.price);
                      onOpenPrototypeModal();
                    }}
                    className={`w-full py-3.5 px-4 rounded-2xl font-bold font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${plan.buttonStyle}`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-500 font-mono mt-2">
                    Free 24h sample preview included • No payment today
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Direct Guarantee Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-slate-950">
                100% Source Code & Database Ownership Handover
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                On launch day, we transfer the full GitHub repository, domain DNS, and cloud accounts directly into your company name. Zero vendor lock-in.
              </p>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
