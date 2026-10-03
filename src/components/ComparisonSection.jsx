import React from 'react';
import { playCyberTone } from '../utils/audio';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Cpu,
} from 'lucide-react';

export default function ComparisonSection({ isDark }) {
  const agencyDownsides = [
    {
      title: 'Hidden Monthly Maintenance Fees',
      desc: 'They charge $100 to $300 every month just to "keep the site online" or apply security patches to fragile plugins.',
    },
    {
      title: 'Hostage Developer Lock-in',
      desc: 'Need to change a phone number or upload a product? You must open a ticket and wait 3–5 business days.',
    },
    {
      title: 'Bloated WordPress & Fragile Plugins',
      desc: '35+ third-party plugins that conflict, slow down to 4.2s page loads, and crash on every PHP update.',
    },
    {
      title: 'Zero Code or Asset Sovereignty',
      desc: 'You don\'t truly own the code or infrastructure. If you cancel their retainer, your website is held hostage.',
    },
  ];

  const jagadishStandard = [
    {
      title: '$0 Maintenance Charges Guaranteed',
      desc: 'Modern static-edge compilation means zero database rot, zero plugin vulnerabilities, and zero mandatory retainers.',
    },
    {
      title: 'Self-Service Visual Admin Portal',
      desc: 'Intuitive dashboard where your team can edit text, swap photos, add inventory, and download leads in real-time.',
    },
    {
      title: 'Sub-300ms Global Edge Speed',
      desc: 'Engineered with React and modern build pipelines for 99+ Google Lighthouse performance scores.',
    },
    {
      title: '100% Client Ownership & Source Access',
      desc: 'You receive all repository code, admin credentials, and domain DNS autonomy with zero lock-in.',
    },
  ];

  return (
    <section id="why-solutions" className={`py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t ${
      isDark ? 'border-white/5 bg-[#0F0F0F]' : 'border-black/5 bg-[#F2F6F4]'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border ${
            isDark 
              ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
              : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>THE ANTI-AGENCY MANIFESTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            WHY BUSINESS LEADERS FIRE AGENCIES <br />
            <span className="text-gradient-main">&amp; PARTNER WITH US</span>
          </h2>
          <p className="opacity-75 text-sm sm:text-base font-sans">
            Most web designers build recurring fee dependencies. We build autonomous software assets that fuel your revenue without perpetual tax.
          </p>
        </div>

        {/* Side-by-Side Comparison Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Traditional Agency Traps */}
          <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
            isDark 
              ? 'bg-[#161214] border-red-500/20 text-slate-300' 
              : 'bg-white border-red-500/20 text-slate-700 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between border-b border-red-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2 text-red-500 font-mono text-sm font-bold">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span>TRADITIONAL WEB AGENCIES</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20">
                  RECURRING EXPENSE
                </span>
              </div>

              <div className="space-y-6">
                {agencyDownsides.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`text-sm sm:text-base font-semibold group-hover:text-red-400 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm opacity-75 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-red-500/20 text-xs font-mono opacity-60">
              * Average 3-year cost of maintenance retainers: $3,600 – $10,800 with zero asset appreciation.
            </div>
          </div>

          {/* Right: Jagadish Studio Standard */}
          <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between relative overflow-hidden ${
            isDark 
              ? 'bg-[#181818] border-luxury-gold/40 shadow-gold-glow' 
              : 'bg-white border-fresh-border shadow-emerald-glow'
          }`}>
            <div>
              <div className={`flex items-center justify-between border-b pb-4 mb-6 ${
                isDark ? 'border-luxury-gold/25' : 'border-fresh-border'
              }`}>
                <div className={`flex items-center gap-2 font-mono text-sm font-bold ${
                  isDark ? 'text-luxury-gold' : 'text-fresh-green'
                }`}>
                  <Zap className="w-5 h-5" />
                  <span>JAGADISH STUDIO ARCHITECTURE</span>
                </div>
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                  isDark 
                    ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' 
                    : 'bg-fresh-tint text-fresh-green border-fresh-border'
                }`}>
                  AUTONOMOUS ASSET
                </span>
              </div>

              <div className="space-y-6">
                {jagadishStandard.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                      isDark ? 'text-luxury-gold' : 'text-fresh-emerald'
                    }`} />
                    <div>
                      <h4 className={`text-sm sm:text-base font-semibold transition-colors ${
                        isDark ? 'text-white group-hover:text-luxury-gold' : 'text-slate-900 group-hover:text-fresh-green'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm opacity-75 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-6 border-t flex items-center justify-between text-xs font-mono ${
              isDark ? 'border-luxury-gold/20 text-luxury-gold' : 'border-fresh-border text-fresh-green'
            }`}>
              <span>ZERO VENDOR LOCK-IN GUARANTEE</span>
              <span className="font-bold">100% OWNERSHIP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
