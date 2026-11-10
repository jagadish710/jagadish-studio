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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FAFAFC] border-t border-slate-200/80">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none bg-rose-500/[0.03]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header: The Work Behind The Results */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">THE WORK BEHIND THE RESULTS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            The Work Behind The <span className="font-serif italic font-normal text-rose-600">Results.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real performance telemetry that gives your business an unfair advantage over competitors stuck on slow, fragile templates.
          </p>
        </div>

        {/* 4 Vertical Stat Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                item.highlight
                  ? 'bg-white border-rose-200 shadow-lg shadow-rose-500/5 ring-1 ring-rose-200/70'
                  : 'bg-white border-slate-200/90 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
                  <span>METRIC // 0{idx + 1}</span>
                  <span className="text-rose-600 font-bold">{item.unit}</span>
                </div>

                <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-900 mb-2">
                  {item.value}
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Comparison Bars */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
            <div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                Merqurie Engineering vs. Traditional Agency Output
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Side-by-side technical benchmarks measured on real client devices.
              </p>
            </div>

            <button
              onClick={onOpenPrototypeModal}
              className="text-xs font-mono text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold cursor-pointer shrink-0"
            >
              <span>Test your website speed</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benchmarks.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="space-y-2 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-800">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-rose-600" />
                      <span>{b.label}</span>
                    </div>
                  </div>

                  {/* Merqurie Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-emerald-700 font-bold">Merqurie: {b.merqurieLabel}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-500 rounded-full"
                        style={{ width: `${b.merqurie}%` }}
                      />
                    </div>
                  </div>

                  {/* Legacy Bar */}
                  <div className="space-y-1 pt-0.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-500">Legacy Agencies: {b.legacyLabel}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-slate-400 rounded-full"
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
