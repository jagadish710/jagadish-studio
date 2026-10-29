import React from 'react';
import { motion } from 'framer-motion';
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
import { playCyberTone } from '../utils/audio';

export default function TrustedHeritage({ isDark = true, onOpenPrototypeModal }) {
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
      title: 'Sub-0.3s Pure Engineering Speed',
      desc: 'Google ranks speed. By deploying decoupled modern frontend code to global edge networks, your digital storefront loads instantly and scores 99/100 on Google Core Web Vitals.',
      icon: Zap,
    },
    {
      num: '04',
      title: '100% Source Code & Asset Sovereignty',
      desc: 'Complete transfer of all Git repositories, databases, and DNS keys on project completion. You own 100% of your intellectual property with zero hostage lock-in.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t transition-colors ${
      isDark ? 'bg-[#050507] border-zinc-900' : 'bg-slate-50 border-slate-200'
    }`}>
      
      {/* High-Contrast Cinematic B&W Human Connection Background (from themaxgrowth Image 5) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Artistic Monochrome Vector Illustration of Hands Reaching Across in Partnership */}
        <div className={`absolute inset-0 opacity-[0.06] dark:opacity-[0.14] flex items-center justify-center`}>
          <svg viewBox="0 0 1200 600" className="w-full h-full object-cover" fill="none">
            {/* Ambient light gradient */}
            <circle cx="600" cy="300" r="400" fill="url(#bwRadial)" />
            <defs>
              <radialGradient id="bwRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Organic Stylized Trust Contours */}
            <path d="M 200 450 C 350 350, 450 320, 560 300 C 620 290, 680 310, 750 280 C 850 240, 950 180, 1050 120" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
            <path d="M 150 490 C 320 380, 420 350, 540 330 C 650 310, 720 340, 820 290 C 920 240, 1020 180, 1100 130" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Ambient Top & Bottom Radial Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[140px] ${
          isDark ? 'bg-cyan-950/15' : 'bg-blue-100/30'
        }`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header: Direct & Trust-Focused (Exact themaxgrowth structure) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
              : 'bg-white border-slate-200 text-slate-800 shadow-2xs'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider font-semibold">THE MERQURIE PROMISE</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            Trusted By Growing Businesses
          </h2>

          <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            Businesses partner with Merqurie because we eliminate ongoing maintenance debt and focus strictly on what delivers real growth:
          </p>
        </div>

        {/* 4 Pillars Grid (High-Contrast, Clean & Cinematic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
                  isDark 
                    ? 'bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 shadow-xl' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
                    isDark ? 'bg-zinc-900 border-zinc-800 text-cyan-400' : 'bg-slate-100 border-slate-200 text-blue-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-mono font-black text-zinc-700/60 dark:text-zinc-700 select-none">
                    {pillar.num}
                  </span>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold font-display mb-2.5 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {pillar.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-zinc-400' : 'text-slate-600'
                }`}>
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* High-Trust Action Callout */}
        <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDark 
            ? 'bg-zinc-900/40 border-zinc-800/80' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="text-center sm:text-left">
            <h4 className={`text-base sm:text-lg font-bold font-display ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Ready to replace recurring retainer bills with high-speed architecture?
            </h4>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Speak directly with our principal engineering advisory. No sales pitches, just technical clarity.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                playCyberTone('click');
                onOpenPrototypeModal && onOpenPrototypeModal();
              }}
              className={`px-5 py-3 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md ${
                isDark 
                  ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                  : 'bg-slate-950 hover:bg-slate-800 text-white'
              }`}
            >
              <span>GET YOUR BLUEPRINT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20zero-retainer%20website%20solution."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCyberTone('click')}
              className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
