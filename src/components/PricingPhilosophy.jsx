import React from 'react';
import { playCyberTone } from '../utils/audio';
import {
  Check,
  Zap,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Cpu,
  Layers,
  Lock,
} from 'lucide-react';

export default function PricingPhilosophy({ onOpenPrototypeModal, isDark }) {
  const highlights = [
    'Sub-0.3s Core Web Vitals loading speed across all mobile and desktop devices',
    'Dedicated self-serve administration cockpit — instant content & pricing updates',
    'Real-time customer inquiry capture routed directly to your executive WhatsApp',
    'Custom tailored to your exact industry operational workflows and business scope',
    'Zero ongoing monthly or yearly developer retainer bills (₹0 maintenance fees)',
    '100% intellectual property sovereignty — transfer of full repositories & database',
    'Automated enterprise SSL encryption, distributed CDN, and edge routing',
    'Post-launch stabilization, testing, and dedicated technical deployment advisory',
  ];

  return (
    <section id="pricing-philosophy" className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#121214]' : 'border-slate-200/80 bg-[#F8FAFC]'
    }`}>
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}>
            <Lock className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Transparent Architecture Model</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            One-Time Capital Investment. <br />
            <span className={isDark ? 'text-[#E6C687]' : 'text-blue-700'}>
              Zero Maintenance Retainers.
            </span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Every engagement is engineered to your exact organizational requirements. You fund the engineering once; you never receive recurring maintenance bills.
          </p>
        </div>

        {/* Flagship Architecture Engagement Card */}
        <div className={`p-6 sm:p-12 rounded-2xl border shadow-lg relative ${
          isDark 
            ? 'bg-[#151518] border-white/10' 
            : 'bg-white border-slate-200'
        }`}>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5 dark:border-white/5">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold ${
              isDark 
                ? 'bg-[#1E1E24] text-[#E6C687] border border-[#E6C687]/30' 
                : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENTERPRISE SPECIFICATION</span>
            </div>

            <div className={`font-mono text-xs flex items-center gap-2 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CUSTOM SCOPE &bull; TAILORED PROPOSALS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
            <div className="md:col-span-8">
              <h3 className={`text-xl sm:text-2xl font-bold font-display mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Full-Stack Digital Platform &amp; Custom Admin Cockpit
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Comprehensive architectural delivery encompassing front-end interfaces, serverless database configuration, visual management cockpits, and multi-channel lead routing.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                      isDark ? 'text-[#E6C687]' : 'text-blue-600'
                    }`} />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Callout */}
            <div className={`md:col-span-4 p-6 rounded-xl border flex flex-col justify-between h-full ${
              isDark ? 'bg-[#111113] border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  INVESTMENT STRUCTURE
                </span>
                <div className={`text-2xl font-bold font-display mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Milestone-Based
                </div>
                <p className={`text-xs leading-relaxed mb-6 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Transparent milestone payments aligned to verified development deliverables. No lock-in, zero hidden fees.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    playCyberTone('click');
                    onOpenPrototypeModal();
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    isDark
                      ? 'bg-gradient-to-r from-luxury-gold to-amber-300 text-black'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
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
                      ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Scope Discussion</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Guarantee */}
          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-100 text-slate-500'
          }`}>
            <span className="flex items-center gap-2">
              <ShieldCheck className={`w-4 h-4 ${isDark ? 'text-[#E6C687]' : 'text-blue-600'}`} />
              <span>Full Repository Handoff &bull; Clean Architecture &bull; Scalable Foundation</span>
            </span>
            <span className="font-mono text-[11px]">
              Direct Inquiries: +91 73586 18789
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
