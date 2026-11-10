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
      title: 'Zero Recurring Retainer Taxes',
      desc: 'Most agencies bill ₹5,000 to ₹15,000 every single month just to maintain basic templates. With Merqurie, you fund the architecture once and pay ₹0 ongoing retainers forever.',
      icon: Lock,
      bg: 'bg-gradient-to-b from-teal-950/60 via-slate-900 to-slate-950',
      border: 'border-teal-500/40 hover:border-teal-400',
      badge: 'bg-teal-950 text-teal-300 border-teal-500/40',
      iconBox: 'bg-teal-950 border-teal-500/40 text-teal-400',
    },
    {
      num: '02',
      title: '10-Second Visual Control from Phone',
      desc: 'Never wait 5 days for a developer ticket. Our self-serve visual management cockpit lets you edit headlines, update pricing, and post announcements from your phone in 10 seconds.',
      icon: Smartphone,
      bg: 'bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950',
      border: 'border-indigo-500/40 hover:border-indigo-400',
      badge: 'bg-indigo-950 text-indigo-300 border-indigo-500/40',
      iconBox: 'bg-indigo-950 border-indigo-500/40 text-indigo-400',
    },
    {
      num: '03',
      title: 'Sub-0.3s Pure Mobile Speed',
      desc: 'Google ranks speed. By deploying decoupled modern frontend code to global edge networks, your digital storefront loads instantly and scores 99/100 on Google Core Web Vitals.',
      icon: Zap,
      bg: 'bg-gradient-to-b from-rose-950/60 via-slate-900 to-slate-950',
      border: 'border-rose-500/40 hover:border-rose-400',
      badge: 'bg-rose-950 text-rose-300 border-rose-500/40',
      iconBox: 'bg-rose-950 border-rose-500/40 text-rose-400',
    },
    {
      num: '04',
      title: '100% Code & Asset Sovereignty',
      desc: 'Complete transfer of all Git repositories, databases, and DNS keys on project completion. You own 100% of your intellectual property with zero hostage lock-in.',
      icon: KeyRound,
      bg: 'bg-gradient-to-b from-amber-950/60 via-slate-900 to-slate-950',
      border: 'border-amber-500/40 hover:border-amber-400',
      badge: 'bg-amber-950 text-amber-300 border-amber-500/40',
      iconBox: 'bg-amber-950 border-amber-500/40 text-amber-400',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070814] text-white border-t border-white/10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none bg-rose-600/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-3 bg-slate-900 border border-white/15 text-slate-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="uppercase tracking-wider">THE FOUR PILLARS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.1] font-display">
            Built for Independence.{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Engineered to Last.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every decision at Merqurie is guided by four architectural commitments to the business owners we build for.
          </p>
        </div>

        {/* 4 Cards Grid with Glowing Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border ${pillar.bg} ${pillar.border} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.99]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${pillar.badge} shadow-sm`}>
                      PILLAR // {pillar.num}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl border ${pillar.iconBox} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2.5 group-hover:text-rose-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-300 font-semibold">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-400" />
                  <span>Non-Negotiable Production Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
