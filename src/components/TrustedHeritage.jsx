import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Lock, 
  Check, 
  ArrowRight,
  Sparkles,
  KeyRound
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function TrustedHeritage({ onOpenPrototypeModal }) {
  const pillars = [
    {
      num: '01',
      title: 'Zero Forced Retainer Contracts',
      desc: 'Most agencies bill expensive ongoing maintenance fees just to maintain basic templates. With Merqurie, you fund the architecture once and pay ₹0 forced retainers forever.',
      icon: Lock,
      bg: 'bg-white',
      border: 'border-teal-200 hover:border-teal-400',
      badge: 'bg-teal-50 text-teal-800 border-teal-200',
      iconBox: 'bg-teal-50 border-teal-200 text-teal-600',
    },
    {
      num: '02',
      title: '10-Second Visual Control from Phone',
      desc: 'Never wait 5 days for a developer ticket. Our self-serve visual management cockpit lets you edit headlines, update pricing, and post announcements from your phone in 10 seconds.',
      icon: Smartphone,
      bg: 'bg-white',
      border: 'border-indigo-200 hover:border-indigo-400',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      iconBox: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    },
    {
      num: '03',
      title: 'Sub-0.3s Pure Mobile Speed',
      desc: 'Google ranks speed. By deploying decoupled modern frontend code to global edge networks, your digital storefront loads instantly and scores 99/100 on Google Core Web Vitals.',
      icon: Zap,
      bg: 'bg-white',
      border: 'border-rose-200 hover:border-rose-400',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      iconBox: 'bg-rose-50 border-rose-200 text-rose-600',
    },
    {
      num: '04',
      title: '100% Code & Asset Sovereignty',
      desc: 'Complete transfer of all Git repositories, databases, and DNS keys on project completion. You own 100% of your intellectual property with zero hostage lock-in.',
      icon: KeyRound,
      bg: 'bg-white',
      border: 'border-amber-200 hover:border-amber-400',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBox: 'bg-amber-50 border-amber-200 text-amber-600',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200/80">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-800 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">FOUNDATIONAL PRINCIPLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-950 mb-4">
            Our Four Non-Negotiable{' '}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Engineering Standards.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every website Merqurie builds must pass these four rigorous gates before handover.
          </p>
        </div>

        {/* 4 Pillars Grid with Distinct Color Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border ${pillar.bg} ${pillar.border} shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group active:scale-[0.99]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border ${pillar.iconBox} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${pillar.badge}`}>
                      STANDARD {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-2.5 tracking-tight group-hover:text-rose-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Guaranteed in every contract</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-slate-950 font-display">
              Test these standards on your own smartphone.
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We build your working prototype before you pay a single rupee.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrototypeModal}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25 active:scale-95 hover:brightness-105 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Request Free Sample</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
