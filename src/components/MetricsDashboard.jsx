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
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(204,251,241,0.7),transparent_55%),linear-gradient(to_bottom_right,#F0FDFA,#FFFFFF,#F8FAFC)]',
      border: 'border-teal-200/80 hover:border-teal-400',
      badge: 'bg-teal-50 text-teal-800 border-teal-200',
      valueColor: 'text-teal-950',
    },
    {
      value: '4+',
      unit: 'Years',
      label: 'Specialized Engineering',
      subtext: 'Built with big-tech rigor from Amazon & frontier AI at Turing',
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(254,243,199,0.7),transparent_55%),linear-gradient(to_bottom_right,#FEF3C7,#FFFFFF,#FFFDF5)]',
      border: 'border-amber-200/80 hover:border-amber-400',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      valueColor: 'text-amber-950',
    },
    {
      value: '10s',
      unit: 'Self-Serve',
      label: 'Phone Content Edits',
      subtext: 'Update prices and text from your mobile phone with zero developer delay',
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(224,231,255,0.7),transparent_55%),linear-gradient(to_bottom_right,#EEF2FF,#FFFFFF,#FAF5FF)]',
      border: 'border-indigo-200/80 hover:border-indigo-400',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      valueColor: 'text-indigo-950',
    },
    {
      value: '₹0',
      unit: 'Forever',
      label: 'Monthly Agency Retainers',
      subtext: 'Zero recurring agency lock-in. One-time build, 100% owned by you',
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.7),transparent_55%),linear-gradient(to_bottom_right,#FFF1F2,#FFFFFF,#FFFBEB)]',
      border: 'border-rose-200/80 hover:border-rose-400',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      valueColor: 'text-rose-950',
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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FAFAFC] border-t border-slate-200/80">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none bg-rose-500/[0.04]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header: The Work Behind The Results */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-3 bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider font-semibold">THE WORK BEHIND THE RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.1]">
            The Work Behind The <span className="font-serif italic font-normal text-rose-600">Results.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every metric below is grounded in live production client platforms. No exaggerated claims, no opaque agency promises.
          </p>
        </div>

        {/* 4 Vertical Stat Pillars with Colorful & Designful Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border ${item.bg} ${item.border} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.98]`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-slate-400 font-bold">METRIC // 0{idx + 1}</span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badge} shadow-2xs`}>
                    {item.unit}
                  </span>
                </div>

                <div className={`text-4xl sm:text-5xl font-black font-display tracking-tight ${item.valueColor} mb-2 group-hover:scale-105 transition-transform origin-left`}>
                  {item.value}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display mb-1 tracking-tight">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Comparison Bars with Frosted Glass & Vivid Highlights */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden group">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight">
                Merqurie Engineering vs. Traditional Agency Output
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Side-by-side technical benchmarks measured on real client devices across 4G/5G mobile connections.
              </p>
            </div>

            <button
              onClick={onOpenPrototypeModal}
              className="text-xs font-mono text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold cursor-pointer shrink-0 group/link"
            >
              <span>Test your website speed</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benchmarks.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="space-y-2.5 p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-300">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-[13px]">{b.label}</span>
                    </div>
                  </div>

                  {/* Merqurie Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-emerald-800 font-bold">Merqurie: {b.merqurieLabel}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-full shadow-xs"
                        style={{ width: `${b.merqurie}%` }}
                      />
                    </div>
                  </div>

                  {/* Legacy Bar */}
                  <div className="space-y-1 pt-0.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-rose-700/80 font-medium">Legacy Agencies: {b.legacyLabel}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-rose-400/60 rounded-full"
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
