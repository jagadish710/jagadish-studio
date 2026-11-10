import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20package%20for%20my%20business.';

export default function PricingPackages({ onOpenPrototypeModal }) {
  const plans = [
    {
      name: 'Essential Business Website',
      tagline: 'Fast, professional website for local clinics, academies, and service businesses.',
      price: '₹14,999',
      period: 'one-time build',
      popular: false,
      delivery: '5-7 Days Delivery',
      badge: 'Starter Package',
      features: [
        'Up to 5 fast, clean mobile pages',
        'Direct 1-tap WhatsApp button for instant enquiries',
        'Loads in under 1 second on any mobile phone',
        'Change text & prices from your phone in 10 seconds',
        'Google Search & Google Maps listing setup',
        '100% full ownership — you own the code & domain',
        '₹0 monthly retainer fees forever — pay once, that is all',
      ],
      cta: 'Choose Essential',
      primary: false,
    },
    {
      name: 'Growth Commercial Platform',
      tagline: 'Interactive product catalog, quote calculators, and automated WhatsApp order flow.',
      price: '₹29,999',
      period: 'one-time build',
      popular: true,
      delivery: '7-10 Days Delivery',
      badge: 'Most Popular',
      features: [
        'Interactive product catalog with photos and specs',
        '1-tap WhatsApp order and price quote buttons',
        'Instant under-0.3s speed scoring 99/100 on Google',
        'Easy phone app to update prices, stock, and photos',
        'Enquiries routed straight to your WhatsApp & email',
        'Google Analytics 4 setup to track visitor count',
        '100% full code and domain transfer to your name',
        'Zero monthly maintenance charges forever',
      ],
      cta: 'Choose Growth Platform',
      primary: true,
    },
    {
      name: 'Custom Web Application',
      tagline: 'Custom student registries, client dashboards, and specialized business tools.',
      price: 'Custom Scoped',
      period: 'starting at ₹49,999',
      popular: false,
      delivery: '14-21 Days Delivery',
      badge: 'Custom Engineering',
      features: [
        'Custom student/client database & member portal',
        'Secure login accounts with role permissions',
        'Direct engineering partnership with Jagadish (ex-Amazon/Turing)',
        'Custom third-party integrations & payment gateways',
        'High-grade edge security & automated backups',
        'Automated continuous deployment pipeline',
        '100% full legal intellectual property transfer',
        'No vendor lock-in and zero hidden monthly markups',
      ],
      cta: 'Discuss Custom Scope',
      primary: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background Chromatic Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[150px] pointer-events-none bg-rose-500/[0.04]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Transparent Value Clarity */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-700 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">CLEAR, HONEST PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
            Pay for the Build.{' '}
            <span className="font-serif italic font-normal text-rose-600">
              Never a Monthly Retainer.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Most website agencies charge you ₹5,000 to ₹15,000 every single month just to keep your site running. We build fast, clean websites that run with zero monthly fees. You pay once, and it is 100% yours.
          </p>
        </div>

        {/* Pricing Cards Grid with Clean Spacing & Colorful Gradients */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14 pt-4">
          {plans.map((plan, idx) => {
            const isPopular = plan.popular;
            const bgClass = idx === 0 
              ? 'bg-[radial-gradient(ellipse_at_top_left,rgba(204,251,241,0.65),transparent_55%),linear-gradient(to_bottom_right,#F0FDFA,#FFFFFF,#F8FAFC)] border-teal-200/90 hover:border-teal-400 hover:shadow-2xl' 
              : idx === 1 
              ? 'bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.7),transparent_55%),linear-gradient(to_bottom_right,#FFF1F2,#FFFFFF,#FFFBEB)] border-2 border-rose-500 shadow-2xl shadow-rose-500/15 hover:shadow-3xl hover:border-rose-600' 
              : 'bg-[radial-gradient(ellipse_at_top_left,rgba(224,231,255,0.7),transparent_55%),linear-gradient(to_bottom_right,#EEF2FF,#FFFFFF,#FAF5FF)] border-indigo-200/90 hover:border-indigo-400 hover:shadow-2xl';

            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all duration-400 ease-out flex flex-col justify-between relative p-6 sm:p-8 ${bgClass} hover:-translate-y-2.5 active:scale-[0.99] group ${
                  isPopular ? 'pt-9 sm:pt-10' : ''
                }`}
              >
                {/* Popular Choice Badge with Zero Overlap */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>MOST POPULAR CHOICE</span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="border-b border-slate-200/70 pb-5 mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-500 block mb-1.5">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-1.5 tracking-tight group-hover:text-rose-600 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {plan.tagline}
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        / {plan.period}
                      </span>
                    </div>

                    <div className="mt-3.5 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>₹0 Monthly Maintenance Bills</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider block mb-2">
                      What You Get:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5 text-rose-600">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-200/70 space-y-2 mt-auto">
                  <button
                    onClick={onOpenPrototypeModal}
                    className={`w-full py-3 px-5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 ${
                      plan.primary
                        ? 'btn-crimson-primary shadow-lg shadow-rose-500/25'
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[10px] font-mono text-slate-500 pt-0.5">
                    ⚡ {plan.delivery} • Direct Founder Engineering
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Preview Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold font-display text-slate-900">
              Not sure which package fits your business best?
            </h4>
            <p className="text-xs text-slate-600">
              Tell us what your business does. We will build a free interactive mobile sample before you pay a single rupee.
            </p>
          </div>

          <button
            onClick={onOpenPrototypeModal}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-mono font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <span>Request Free Preview Sample</span>
          </button>
        </div>

      </div>
    </section>
  );
}
