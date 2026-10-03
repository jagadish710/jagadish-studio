import React from 'react';
import { playCyberTone } from '../utils/audio';
import {
  Check,
  DollarSign,
  ArrowRight,
  Star,
} from 'lucide-react';

export default function PricingPhilosophy({ onOpenPrototypeModal, isDark }) {
  const highlights = [
    'Custom Ultra-Fast Reactive Frontend (Sub-0.4s load time)',
    'Full Self-Service Client Admin Dashboard (Zero coding required)',
    'Direct WhatsApp & CRM Inbound Lead Routing',
    'Staging Subdomain Deployment (*.jagadish.online) for Instant Review',
    'Zero Monthly Maintenance Fees Forever ($0 Retainer)',
    '100% Full Ownership: Source Code, Assets & Domain Freedom',
    'Embedded Autonomous AI Conversational Concierge Widget',
    '30-Day Dedicated Hand-Holding & Refinement Warranty',
  ];

  return (
    <section id="pricing-philosophy" className={`py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#121212]' : 'border-black/5 bg-[#F7FAF8]'
    }`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border ${
            isDark 
              ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
              : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
          }`}>
            <DollarSign className="w-3.5 h-3.5" />
            <span>THE ZERO-MAINTENANCE PROMISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            ONE INVESTMENT. <br />
            <span className="text-gradient-main">ZERO MONTHLY RETRO-TAX.</span>
          </h2>
          <p className="opacity-75 text-sm sm:text-base">
            We don’t trap our clients into monthly subscription hostages. We engineer resilient systems that run smoothly year after year.
          </p>
        </div>

        {/* The Flagship Package Card */}
        <div className={`p-6 sm:p-12 rounded-3xl border shadow-2xl relative ${
          isDark 
            ? 'bg-gradient-to-b from-[#181818] via-[#141414] to-[#101010] border-luxury-gold/40 shadow-black/80' 
            : 'bg-white border-fresh-border shadow-emerald-950/10'
        }`}>
          {/* Prominent Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono font-bold text-xs tracking-wider ${
              isDark 
                ? 'bg-luxury-gold text-black shadow-gold-glow' 
                : 'bg-fresh-emerald text-white shadow-emerald-glow'
            }`}>
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>CLIENT-FAVORITE STANDARD</span>
            </div>

            <div className={`flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-lg border ${
              isDark 
                ? 'text-luxury-gold bg-luxury-gold/15 border-luxury-gold/30' 
                : 'text-fresh-green bg-fresh-tint border-fresh-border'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${
                isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
              }`} />
              <span>GUARANTEED 100% ASSET OWNERSHIP</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 dark:border-white/10 pb-8 mb-8 gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Turnkey Enterprise Solution
              </h3>
              <p className="opacity-75 text-sm mt-1">
                Complete transition from sluggish websites to an autonomous revenue engine.
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-luxury-gold' : 'text-fresh-green'
              }`}>
                MONTHLY MAINTENANCE
              </div>
              <div className={`text-4xl font-extrabold font-mono ${
                isDark ? 'text-luxury-gold' : 'text-fresh-emerald'
              }`}>
                $0 <span className="text-sm opacity-60 font-normal">/ month forever</span>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                  isDark 
                    ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' 
                    : 'bg-fresh-tint text-fresh-green border-fresh-border'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm opacity-90">{item}</span>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs font-mono opacity-70 text-center sm:text-left">
              Includes 48-Hour Staging Preview &bull; Custom Domain Mapping &bull; Complete Admin Training
            </div>

            <button
              onClick={() => {
                playCyberTone('click');
                onOpenPrototypeModal();
              }}
              onMouseEnter={() => playCyberTone('hover')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer ${
                isDark 
                  ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
                  : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
              }`}
            >
              <span>REQUEST 48H PROTOTYPE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
