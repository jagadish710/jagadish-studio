import React from 'react';
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
      bg: 'bg-white',
      border: 'border-teal-200 hover:border-teal-400',
      badge: 'bg-teal-50 text-teal-800 border-teal-200',
      valueColor: 'text-teal-600',
    },
    {
      value: '4+',
      unit: 'Years',
      label: 'Specialized Engineering',
      subtext: 'Built with big-tech rigor from Amazon & frontier AI at Turing',
      bg: 'bg-white',
      border: 'border-amber-200 hover:border-amber-400',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      valueColor: 'text-amber-600',
    },
    {
      value: '10s',
      unit: 'Self-Serve',
      label: 'Phone Content Edits',
      subtext: 'Update prices and text from your mobile phone with zero developer delay',
      bg: 'bg-white',
      border: 'border-indigo-200 hover:border-indigo-400',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      valueColor: 'text-indigo-600',
    },
    {
      value: '₹0',
      unit: 'Forever',
      label: 'Monthly Agency Retainers',
      subtext: 'Zero recurring agency lock-in. One-time build, 100% owned by you',
      bg: 'bg-white',
      border: 'border-rose-200 hover:border-rose-400',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      valueColor: 'text-rose-600',
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
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50/70 text-slate-900 border-t border-slate-200/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none bg-sky-400/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-teal-200 text-teal-800 mb-4 shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
            <span className="uppercase tracking-wider">MEASURABLE ENGINEERING RIGOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-950 mb-4">
            Telemetry Over Opinions.{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Speed You Can Verify.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every metric below is backed by real edge telemetry and client production audits. We engineer websites for businesses where performance directly converts to cash.
          </p>
        </div>

        {/* 4 Stat Cards Grid with Distinct Color Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border ${item.bg} ${item.border} shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.98]`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badge}`}>
                    {item.unit}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    METRIC // 0{idx + 1}
                  </span>
                </div>

                <div className={`text-4xl sm:text-5xl font-black font-display tracking-tight ${item.valueColor} mb-2`}>
                  {item.value}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1.5">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benchmarking Comparison Stack */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 block mb-1">
                SIDE-BY-SIDE TELEMETRY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                Architectural Standards Comparison
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-emerald-500" />
                <span className="text-slate-800 font-semibold">Merqurie Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-rose-500" />
                <span className="text-slate-500">Traditional Agency</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {benchmarks.map((bm, bIdx) => {
              const Icon = bm.icon;
              return (
                <div key={bIdx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-2 text-slate-950 font-bold">
                      <Icon className="w-4 h-4 text-rose-600" />
                      <span>{bm.label}</span>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold text-xs">
                      {bm.merqurieLabel}
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-3 p-0.5 border border-slate-200 overflow-hidden flex gap-1">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
                      style={{ width: `${bm.merqurie}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] font-mono text-slate-500">
                    <span>Merqurie: {bm.merqurie}% efficiency</span>
                    <span className="text-rose-600 font-medium">Typical: {bm.legacyLabel}</span>
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
