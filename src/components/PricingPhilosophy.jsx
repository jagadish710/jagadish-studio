import WhatsAppIcon from './WhatsAppIcon';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Lock} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function PricingPhilosophy({ onOpenPrototypeModal, isDark = true }) {
  const highlights = [
    'Fixed milestone-based capital deployment (no scope creep)',
    'Zero ongoing monthly or yearly developer retainer bills (₹0 maintenance fees)',
    '100% intellectual property sovereignty — transfer of full repositories & database',
    'Automated enterprise SSL encryption, distributed CDN, and edge routing',
    'Post-launch stabilization, testing, and dedicated technical deployment advisory',
  ];

  return (
    <motion.section 
      id="pricing-philosophy" 
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
        isDark ? 'border-zinc-900 bg-[#0A0A0C]' : 'border-slate-200 bg-slate-50/50'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <Lock className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
            <span className="uppercase tracking-wider">Transparent Architecture Model</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight font-display mb-3 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            One-Time Capital Investment.{' '}
            <span className={isDark ? 'text-zinc-400' : 'text-slate-500'}>Zero Maintenance Retainers.</span>
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            Every engagement is engineered to your exact organizational requirements. You fund the engineering once; you never receive recurring maintenance bills.
          </p>
        </div>

        {/* Flagship Architecture Engagement Card */}
        <div className={`p-6 sm:p-10 rounded-2xl border shadow-xl relative ${
          isDark ? 'border-zinc-800 bg-[#0E0E12]' : 'border-slate-200 bg-white shadow-lg'
        }`}>
          {/* Header Badges */}
          <div className={`flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b ${
            isDark ? 'border-zinc-800' : 'border-slate-200'
          }`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold border ${
              isDark 
                ? 'bg-zinc-900 text-zinc-200 border-zinc-800' 
                : 'bg-slate-100 text-slate-800 border-slate-200'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>ENTERPRISE SPECIFICATION</span>
            </div>

            <div className={`font-mono text-xs flex items-center gap-2 ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CUSTOM SCOPE &bull; TAILORED PROPOSALS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-6">
            <div className="md:col-span-8">
              <h3 className={`text-xl font-bold font-display mb-2 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                Full-Stack Digital Platform &amp; Custom Admin Cockpit
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                isDark ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                Comprehensive architectural delivery encompassing front-end interfaces, serverless database configuration, visual management cockpits, and multi-channel lead routing.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-500" />
                    <span className={isDark ? 'text-zinc-300' : 'text-slate-700'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Callout */}
            <div className={`md:col-span-4 p-5 rounded-xl border flex flex-col justify-between h-full ${
              isDark ? 'border-zinc-800 bg-zinc-950' : 'border-slate-200 bg-slate-50'
            }`}>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${
                  isDark ? 'text-zinc-500' : 'text-slate-500'
                }`}>
                  INVESTMENT STRUCTURE
                </span>
                <div className={`text-xl font-bold font-display mb-2 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  Milestone-Based
                </div>
                <p className={`text-xs leading-relaxed mb-5 ${
                  isDark ? 'text-zinc-400' : 'text-slate-600'
                }`}>
                  Transparent milestone payments aligned to verified development deliverables. No lock-in, zero hidden fees.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => {
                    playCyberTone('click');
                    onOpenPrototypeModal();
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                    isDark 
                      ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                      : 'bg-slate-950 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20tailored%20project%20scope."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberTone('click')}
                  className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    isDark 
                      ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white' 
                      : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-900 shadow-2xs'
                  }`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                  <span>WhatsApp Scope Discussion</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Guarantee */}
          <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDark ? 'border-zinc-800 text-zinc-500' : 'border-slate-200 text-slate-500'
          }`}>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 opacity-75" />
              <span>Full Repository Handoff &bull; Clean Architecture &bull; Scalable Foundation</span>
            </span>
            <span className={`font-mono text-[11px] ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
              Direct Inquiries Available
            </span>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
