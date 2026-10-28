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
    <section id="pricing-philosophy" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-[#0A0A0C]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Lock className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase tracking-wider">Transparent Architecture Model</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-3">
            One-Time Capital Investment.{' '}
            <span className="text-zinc-400">Zero Maintenance Retainers.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Every engagement is engineered to your exact organizational requirements. You fund the engineering once; you never receive recurring maintenance bills.
          </p>
        </div>

        {/* Flagship Architecture Engagement Card */}
        <div className="p-6 sm:p-10 rounded-2xl border border-zinc-800 bg-[#0E0E12] shadow-xl relative">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-zinc-900 text-zinc-200 border border-zinc-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ENTERPRISE SPECIFICATION</span>
            </div>

            <div className="font-mono text-xs flex items-center gap-2 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CUSTOM SCOPE &bull; TAILORED PROPOSALS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-6">
            <div className="md:col-span-8">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Full-Stack Digital Platform &amp; Custom Admin Cockpit
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 mb-5">
                Comprehensive architectural delivery encompassing front-end interfaces, serverless database configuration, visual management cockpits, and multi-channel lead routing.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                    <span className="text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Callout */}
            <div className="md:col-span-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest block mb-1 text-zinc-500">
                  INVESTMENT STRUCTURE
                </span>
                <div className="text-xl font-bold font-display text-white mb-2">
                  Milestone-Based
                </div>
                <p className="text-xs leading-relaxed text-zinc-400 mb-5">
                  Transparent milestone payments aligned to verified development deliverables. No lock-in, zero hidden fees.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => {
                    playCyberTone('click');
                    onOpenPrototypeModal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 transition-all cursor-pointer shadow-sm"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20would%20like%20to%20discuss%20a%20tailored%20project%20scope."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberTone('click')}
                  className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-medium flex items-center justify-center gap-2 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                  <span>WhatsApp Scope Discussion</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Guarantee */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              <span>Full Repository Handoff &bull; Clean Architecture &bull; Scalable Foundation</span>
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              Direct Inquiries Available
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
