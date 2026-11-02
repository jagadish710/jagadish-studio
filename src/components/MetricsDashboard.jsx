import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';

export default function MetricsDashboard({ onOpenPrototypeModal }) {
  const stats = [
    {
      value: '< 1.0s',
      unit: 'Latency',
      label: 'Mobile Edge PageSpeed',
      subtext: 'Scoring 99/100 automatically on Google Core Web Vitals',
      highlight: true,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      value: '4+',
      unit: 'Years',
      label: 'Specialized Engineering',
      subtext: 'Built with big-tech rigor from Amazon & frontier AI at Turing',
      highlight: false,
      color: 'from-amber-500 to-orange-600',
    },
    {
      value: '10s',
      unit: 'Self-Serve',
      label: 'Phone Content Edits',
      subtext: 'Update prices and text from your mobile phone with zero developer delay',
      highlight: false,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      value: '₹0',
      unit: 'Forever',
      label: 'Monthly Agency Retainers',
      subtext: 'Zero recurring agency lock-in. One-time build, 100% owned by you',
      highlight: true,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const benchmarks = [
    {
      label: 'Mobile Page Load Speed',
      merqurie: 98,
      legacy: 35,
      merqurieLabel: '< 1.0s (Sub-second Edge)',
      legacyLabel: '8 to 10s (Heavy WordPress Plugins)',
      icon: Zap,
    },
    {
      label: 'Code & Data Ownership',
      merqurie: 100,
      legacy: 10,
      merqurieLabel: '100% Owned by You (Full Git Transfer)',
      legacyLabel: 'Hostage Agency Lock-In',
      icon: ShieldCheck,
    },
    {
      label: 'Time to Update Prices & Photos',
      merqurie: 95,
      legacy: 20,
      merqurieLabel: '10 Seconds from Phone Cockpit',
      legacyLabel: '3 to 7 Days Developer Ticket',
      icon: Smartphone,
    },
    {
      label: '3-Year Retainer Capital Preserved',
      merqurie: 100,
      legacy: 15,
      merqurieLabel: '₹0 Retainers (Save ₹1,80,000+)',
      legacyLabel: '₹5,000 to ₹15,000 Paid Monthly',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#07070A] border-t border-zinc-800/80">
      
      {/* Cinematic SVG Curved Planet Horizon Arc at bottom */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-40 sm:h-64 z-0">
        <svg 
          viewBox="0 0 1440 220" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="metricBeamGrad" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="metricGlowGrad" cx="50%" cy="100%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M 0 220 Q 720 40 1440 220 L 1440 220 L 0 220 Z" fill="url(#metricGlowGrad)" />
          <path d="M 0 220 Q 720 40 1440 220" stroke="url(#metricBeamGrad)" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header: The Work Behind The Results (themaxgrowth style) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider">THE WORK BEHIND THE RESULTS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
            Built to Win Trust, Leads, and Sales
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Real performance telemetry that gives your business an unfair advantage over competitors stuck on slow, fragile templates.
          </p>
        </div>

        {/* 4 Vertical Stat Pillars (themaxgrowth card style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                item.highlight
                  ? 'bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.08)]'
                  : 'bg-zinc-950/80 border-zinc-800/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
                  <span>METRIC // 0{idx + 1}</span>
                  <span className="text-cyan-400 font-bold">{item.unit}</span>
                </div>

                <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-2">
                  {item.value}
                </div>

                <h3 className="text-base font-bold text-zinc-100 font-display mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Comparison Bars */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-zinc-800 gap-3">
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Merqurie Engineering vs. Traditional Agency Output
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Side-by-side technical benchmarks measured on real client devices.
              </p>
            </div>

            <button
              onClick={onOpenPrototypeModal}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer shrink-0"
            >
              <span>Test your website speed</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benchmarks.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="space-y-2 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/60">
                  <div className="flex items-center justify-between text-xs font-medium text-zinc-200">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{b.label}</span>
                    </div>
                  </div>

                  {/* Merqurie Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-emerald-400 font-bold">Merqurie: {b.merqurieLabel}</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        style={{ width: `${b.merqurie}%` }}
                      />
                    </div>
                  </div>

                  {/* Legacy Bar */}
                  <div className="space-y-1 pt-0.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-zinc-400">Legacy Agencies: {b.legacyLabel}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-800/80 overflow-hidden">
                      <div
                        className="h-full bg-rose-500/60 rounded-full"
                        style={{ width: `${b.legacy}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
