import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Lock, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function TrustedHeritage({ onOpenPrototypeModal }) {
  const pillars = [
    {
      num: '01',
      title: 'Zero Recurring Retainer Taxes',
      desc: 'Most agencies bill ₹5,000 to ₹15,000 every single month just to maintain basic templates. With Merqurie, you fund the architecture once and pay ₹0 ongoing retainers forever.',
      icon: Lock,
    },
    {
      num: '02',
      title: '10-Second Visual Control from Phone',
      desc: 'Never wait 5 days for a developer ticket. Our self-serve visual management cockpit lets you edit headlines, update pricing, and post announcements from your phone in 10 seconds.',
      icon: Smartphone,
    },
    {
      num: '03',
      title: 'Sub-1.0s Pure Mobile Speed',
      desc: 'Google ranks speed. By deploying decoupled modern frontend code to global edge networks, your digital storefront loads instantly and scores 99/100 on Google Core Web Vitals.',
      icon: Zap,
    },
    {
      num: '04',
      title: '100% Code & Asset Sovereignty',
      desc: 'Complete transfer of all Git repositories, databases, and DNS keys on project completion. You own 100% of your intellectual property with zero hostage lock-in.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-slate-200/80 bg-[#FAFAFC]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[140px] bg-rose-500/[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header: Direct & Trust-Focused */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-3 bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">TRUSTED BY GROWING BUSINESSES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Businesses Work With Us Because We Focus on What <span className="font-serif italic font-normal text-rose-600">Matters.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No agency runaround, no recurring monthly charges, and no hostage lock-in. Just direct craft, speed, and real revenue generation.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-rose-600 font-bold">
                      PILLAR // {pillar.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Guaranteed on Every Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900">
              Ready to give your business the website it deserves?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Let’s build an interactive mobile sample for your business with zero upfront cost.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md shadow-emerald-500/15 transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-slate-950" />
              <span>Message on WhatsApp</span>
            </a>

            <button
              onClick={onOpenPrototypeModal}
              className="btn-crimson-primary px-5 py-3 text-xs sm:text-sm uppercase font-mono tracking-wider cursor-pointer shadow-md shadow-rose-600/15 active:scale-95"
            >
              <span>Get Free Preview</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
