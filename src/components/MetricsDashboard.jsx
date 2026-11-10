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
      value: '< 0.3s',
      unit: 'Latency',
      label: 'Mobile Edge PageSpeed',
      subtext: 'Scoring 99/100 automatically on Google Core Web Vitals',
      bg: 'bg-gradient-to-b from-teal-950/60 via-slate-900 to-slate-950',
      border: 'border-teal-500/40 hover:border-teal-400',
      badge: 'bg-teal-950 text-teal-300 border-teal-500/40',
      valueColor: 'text-teal-400',
    },
    {
      value: '4+',
      unit: 'Years',
      label: 'Specialized Engineering',
      subtext: 'Built with big-tech rigor from Amazon & frontier AI at Turing',
      bg: 'bg-gradient-to-b from-amber-950/60 via-slate-900 to-slate-950',
      border: 'border-amber-500/40 hover:border-amber-400',
      badge: 'bg-amber-950 text-amber-300 border-amber-500/40',
      valueColor: 'text-amber-400',
    },
    {
      value: '10s',
      unit: 'Self-Serve',
      label: 'Phone Content Edits',
      subtext: 'Update prices and text from your mobile phone with zero developer delay',
      bg: 'bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950',
      border: 'border-indigo-500/40 hover:border-indigo-400',
      badge: 'bg-indigo-950 text-indigo-300 border-indigo-500/40',
      valueColor: 'text-indigo-400',
    },
    {
      value: '₹0',
      unit: 'Forever',
      label: 'Monthly Agency Retainers',
      subtext: 'Zero recurring agency lock-in. One-time build, 100% owned by you',
      bg: 'bg-gradient-to-b from-rose-950/60 via-slate-900 to-slate-950',
      border: 'border-rose-500/40 hover:border-rose-400',
      badge: 'bg-rose-950 text-rose-300 border-rose-500/40',
      valueColor: 'text-rose-400',
    },
  ];

  const benchmarks = [
    {
      label: 'Mobile Page Load Speed',
      merqurie: 98,
      legacy: 35,
      merqurieLabel: '< 0.3s (Sub-second Edge)',
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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070814] text-white border-t border-white/10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none bg-rose-600/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-3 bg-slate-900 border border-white/15 text-slate-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="uppercase tracking-wider font-semibold">THE WORK BEHIND THE RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.1] font-display">
            The Work Behind The{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Results.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every metric below is grounded in live production client platforms. No exaggerated claims, no opaque agency promises.
          </p>
        </div>

        {/* 4 Vertical Stat Pillars with Glowing Gradients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border ${item.bg} ${item.border} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.98]`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badge}`}>
                    {item.unit}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    METRIC // 0{idx + 1}
                  </span>
                </div>

                <div className={`text-4xl sm:text-5xl font-black font-display tracking-tight ${item.valueColor} mb-2`}>
                  {item.value}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benchmarking Comparison Stack */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-white/15 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 block mb-1">
                SIDE-BY-SIDE TELEMETRY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Architectural Standards Comparison
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-emerald-400" />
                <span className="text-slate-300">Merqurie Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-rose-500" />
                <span className="text-slate-400">Traditional Agency</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {benchmarks.map((bm, bIdx) => {
              const Icon = bm.icon;
              return (
                <div key={bIdx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Icon className="w-4 h-4 text-rose-400" />
                      <span>{bm.label}</span>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold text-xs">
                      {bm.merqurieLabel}
                    </span>
                  </div>

                  <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-white/10 overflow-hidden flex gap-1">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-700"
                      style={{ width: `${bm.merqurie}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Merqurie: {bm.merqurie}% efficiency</span>
                    <span className="text-rose-400">Typical: {bm.legacyLabel}</span>
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
