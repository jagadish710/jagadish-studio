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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-zinc-800/80 bg-[#060608]">
      
      {/* High-Contrast Cinematic B&W Human Connection Background (themaxgrowth Image 10) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 opacity-[0.10] flex items-center justify-center">
          <svg viewBox="0 0 1200 600" className="w-full h-full object-cover" fill="none">
            <circle cx="600" cy="300" r="400" fill="url(#bwRadial)" />
            <defs>
              <radialGradient id="bwRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M 200 450 C 350 350, 450 320, 560 300 C 620 290, 680 310, 750 280 C 850 240, 950 180, 1050 120" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
            <path d="M 150 490 C 320 380, 420 350, 540 330 C 650 310, 720 340, 820 290 C 920 240, 1020 180, 1100 130" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[140px] bg-cyan-950/15" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header: Direct & Trust-Focused (themaxgrowth style) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider">TRUSTED BY GROWING BUSINESSES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
            Businesses Work With Us Because We Focus on What Matters
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
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
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      PILLAR // {pillar.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Guaranteed on Every Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Ready to give your business the website it deserves?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Let’s build an interactive mobile sample for your business with zero upfront cost.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-zinc-950" />
              <span>Message on WhatsApp</span>
            </a>

            <button
              onClick={onOpenPrototypeModal}
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 transition-all active:scale-95"
            >
              <span>Get Free Preview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
