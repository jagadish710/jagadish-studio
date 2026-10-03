import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import {
  Check,
  Zap,
  ArrowRight,
  Star,
  ShieldCheck,
} from 'lucide-react';

export default function PricingPhilosophy({ onOpenPrototypeModal, isDark }) {
  const [currency, setCurrency] = useState('INR'); // INR by default

  const highlights = [
    'Super fast loading speed (<0.4s) on all mobile devices',
    'Easy admin dashboard — change text & photos in 10 seconds',
    'Customer inquiries sent directly to your WhatsApp',
    'Free live preview link (*.jagadish.online) to test before launch',
    'No monthly or yearly maintenance bills (₹0 / year)',
    '100% full ownership of your code, files, and domain',
    'AI assistant answers customer questions 24/7',
    '30 days of dedicated free support and tweaks',
  ];

  return (
    <section id="pricing-philosophy" className={`py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#121212]' : 'border-black/5 bg-[#F7FAF8]'
    }`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
            isDark 
              ? 'bg-[#181818] border-[#673DE6]/40 text-[#A78BFA] shadow-[0_0_20px_rgba(103,61,230,0.3)]' 
              : 'bg-[#F5F2FF] border-[#673DE6]/25 text-[#673DE6]'
          }`}>
            <Zap className="w-3.5 h-3.5" />
            <span>ONE-TIME INVESTMENT • NO HIDDEN FEES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            ONE-TIME INVESTMENT. <br />
            <span className="text-gradient-main">NO MAINTENANCE CHARGES.</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            You pay once for your complete digital system. We do not charge monthly or yearly fees to keep your website online.
          </p>
        </div>

        {/* Flagship Package Card */}
        <div className={`p-6 sm:p-12 rounded-3xl border shadow-2xl relative card-glow-hostinger ${
          isDark 
            ? 'bg-gradient-to-b from-[#18181C] via-[#141416] to-[#101012]' 
            : 'bg-white shadow-xl'
        }`}>
          {/* Prominent Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono font-bold text-xs tracking-wider ${
              isDark 
                ? 'bg-gradient-to-r from-[#673DE6] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(103,61,230,0.4)]' 
                : 'bg-[#673DE6] text-white shadow-md'
            }`}>
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>COMPLETE BUSINESS SOLUTION</span>
            </div>

            {/* Currency Switcher */}
            <div className={`flex items-center p-1 rounded-xl border text-xs font-mono ${
              isDark ? 'bg-black/60 border-white/10' : 'bg-slate-100 border-black/10'
            }`}>
              <button
                onClick={() => {
                  playCyberTone('click');
                  setCurrency('INR');
                }}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  currency === 'INR'
                    ? isDark ? 'bg-luxury-gold text-black font-bold' : 'bg-white text-fresh-forest font-bold shadow-xs'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => {
                  playCyberTone('click');
                  setCurrency('USD');
                }}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  currency === 'USD'
                    ? isDark ? 'bg-luxury-gold text-black font-bold' : 'bg-white text-fresh-forest font-bold shadow-xs'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 dark:border-white/10 pb-8 mb-8 gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Complete Operating Solution
              </h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Everything your business needs to launch, manage products, and capture customers.
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className={`text-xs font-mono uppercase tracking-widest font-bold ${
                isDark ? 'text-luxury-gold' : 'text-emerald-600'
              }`}>
                YEARLY MAINTENANCE CHARGE
              </div>
              <div className={`text-4xl sm:text-5xl font-extrabold font-mono ${
                isDark ? 'text-luxury-gold' : 'text-fresh-green'
              }`}>
                {currency === 'INR' ? '₹0' : '$0'} <span className="text-sm opacity-70 font-normal">/ year forever</span>
              </div>
              <div className="text-[11px] font-mono opacity-60 mt-0.5">
                One-time project setup • Zero recurring costs
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className={`text-xs sm:text-sm font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/10 dark:border-white/10">
            <div className={`text-xs font-mono text-center sm:text-left ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              One-time investment • 100% full ownership • No recurring maintenance bills
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  playCyberTone('click');
                  onOpenPrototypeModal();
                }}
                className={`w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold font-mono text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                  isDark
                    ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                    : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
                }`}
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20want%20to%20enquire%20about%20your%20website%20packages."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberTone('click')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <span>WhatsApp: +91 73586 18789</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
