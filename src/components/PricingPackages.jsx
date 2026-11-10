import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
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
      delivery: '5-7 Days Delivery',
      badge: 'Starter Package',
      cardStyle: 'bg-gradient-to-b from-teal-950/40 via-slate-900 to-slate-950 border-teal-500/40 shadow-teal-500/10 hover:border-teal-400',
      badgeStyle: 'bg-teal-950 border-teal-500/40 text-teal-300',
      accentColor: 'text-teal-400',
      buttonStyle: 'bg-slate-800 hover:bg-teal-600 text-white border border-teal-500/30',
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
      name: 'Growth Commercial Platform',
      tagline: 'Interactive storefronts, product catalogs, and automated inquiry engines.',
      price: '₹29,999',
      period: 'one-time build',
      popular: true,
      delivery: '7-10 Days Delivery',
      badge: 'Most Popular',
      cardStyle: 'bg-gradient-to-b from-rose-950/50 via-slate-900 to-slate-950 border-2 border-rose-500 shadow-2xl shadow-rose-500/20 hover:border-rose-400 hover:shadow-rose-500/30',
      badgeStyle: 'bg-rose-950 border-rose-500/50 text-rose-300',
      accentColor: 'text-rose-400',
      buttonStyle: 'bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white shadow-xl shadow-rose-900/50 hover:brightness-110 border border-rose-400/40',
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
      cardStyle: 'bg-gradient-to-b from-purple-950/40 via-slate-900 to-slate-950 border-purple-500/40 shadow-purple-500/10 hover:border-purple-400',
      badgeStyle: 'bg-purple-950 border-purple-500/40 text-purple-300',
      accentColor: 'text-purple-400',
      buttonStyle: 'bg-slate-800 hover:bg-purple-600 text-white border border-purple-500/30',
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
      cta: 'Scope Custom System',
      primary: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0D1E] text-white border-t border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none bg-rose-500/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Transparent Value Clarity */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-950/80 border border-rose-500/30 text-rose-300 mb-4 shadow-lg shadow-rose-950/40">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="uppercase tracking-wider">CLEAR, HONEST PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-4 font-display">
            Pay for the Build.{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Never a Monthly Retainer.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Most website agencies lock you into ₹5,000 to ₹15,000 monthly retainers just to keep basic templates online. We engineer independent websites that run with zero ongoing maintenance fees. You pay once, and you own everything 100%.
          </p>
        </div>

        {/* Pricing Cards Grid with Clean Spacing & Glowing Gradients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14 pt-6">
          {plans.map((plan, idx) => {
            const isPopular = plan.popular;

            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all duration-400 ease-out flex flex-col justify-between relative p-6 sm:p-8 backdrop-blur-xl border ${plan.cardStyle} hover:-translate-y-2.5 active:scale-[0.99] group shadow-2xl ${
                  isPopular ? 'pt-10 sm:pt-12' : ''
                }`}
              >
                {/* Popular Choice Badge with Zero Overlap */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-xl shadow-rose-950/80 flex items-center gap-1.5 border border-rose-400/50">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>★ MOST POPULAR CHOICE</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/10 pb-5 mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400 block mb-1.5">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1.5 tracking-tight group-hover:text-rose-400 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {plan.tagline}
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        / {plan.period}
                      </span>
                    </div>

                    <div className="mt-3.5 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-lg w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>₹0 / Year Recurring Retainer Debt</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-2">
                      WHAT'S INCLUDED:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.accentColor}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Footer Action */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono text-slate-400 mb-3 flex items-center justify-between">
                    <span>{plan.delivery}</span>
                    <span className="text-emerald-400 font-semibold">100% Guaranteed</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={onOpenPrototypeModal}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${plan.buttonStyle}`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 transition-colors shrink-0 shadow-md cursor-pointer"
                      title="Quick Inquiry on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-slate-950 text-slate-950" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Free Sample Website Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950/60 to-slate-900 border border-rose-500/40 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold block mb-1">
              ZERO FINANCIAL RISK GUARANTEE
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Test your working sample website before paying a single rupee.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Tell us your business name and industry. We will build an interactive sample page and send you the mobile link within 24-48 hours.
            </p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center gap-2.5 shadow-xl shadow-emerald-500/20 whitespace-nowrap transition-all cursor-pointer shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>Claim Free Sample on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
