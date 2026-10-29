import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Smartphone, 
  Database, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function MetricsDashboard({ isDark = true, onOpenPrototypeModal }) {
  const [activeTab, setActiveTab] = useState('speed');

  const stats = [
    {
      value: '4+',
      unit: 'Years',
      label: 'Specialized Architecture Experience',
      subtext: 'Engineering decoupled, sub-second web platforms',
      highlight: true,
    },
    {
      value: '100+',
      unit: 'Systems',
      label: 'Production Deployments',
      subtext: 'E-commerce, SaaS, industrial ERPs & storefronts',
      highlight: false,
    },
    {
      value: '< 0.24s',
      unit: 'Latency',
      label: 'Global Edge Load Speed',
      subtext: 'Scoring 99/100 automatically on Google PageSpeed',
      highlight: false,
    },
    {
      value: '₹0',
      unit: 'Forever',
      label: 'Recurring Maintenance Fees',
      subtext: 'Saving clients ₹1,80,000+ every 3 years',
      highlight: true,
    },
  ];

  const benchmarks = [
    {
      label: 'Google Core Web Vitals (CWV)',
      merqurie: 99,
      legacy: 42,
      merqurieLabel: '99/100 (Optimal Speed)',
      legacyLabel: '42/100 (Failed CWV)',
      icon: Zap,
    },
    {
      label: 'Code & Data Sovereignty',
      merqurie: 100,
      legacy: 0,
      merqurieLabel: '100% Client Owned (Git Repo)',
      legacyLabel: 'Hostage Vendor Lock-In',
      icon: ShieldCheck,
    },
    {
      label: 'Content Edit Latency',
      merqurie: 96,
      legacy: 15,
      merqurieLabel: '10s Self-Serve Phone Cockpit',
      legacyLabel: '3 to 7 Days Developer Ticket',
      icon: Smartphone,
    },
    {
      label: '3-Year Retainer Capital Preserved',
      merqurie: 100,
      legacy: 10,
      merqurieLabel: '₹0 Fees (100% Kept by Business)',
      legacyLabel: '₹1,80,000+ Paid to Agency',
      icon: TrendingUp,
    },
  ];

  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${
      isDark ? 'bg-[#060608]' : 'bg-slate-50/70'
    }`}>
      
      {/* Cinematic Planet-Horizon Curved Electric Blue Light (From themaxgrowth aesthetic) */}
      <div className="absolute inset-x-0 bottom-0 h-64 sm:h-96 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-x-0 bottom-0 h-full horizon-glow-blue opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 horizon-glow-cyan opacity-60" />
        {/* Fine Curved Horizon Laser Line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-[0_0_15px_#22d3ee]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header with Indicator Pill */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
            isDark 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
              : 'bg-white border-slate-200 text-slate-800 shadow-2xs'
          }`}>
            <span className="w-2 h-2 rounded-xs bg-cyan-400" />
            <span className="font-bold uppercase tracking-wider">Indicator &bull; Performance Architecture</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            Results Driven <span className="italic font-serif text-cyan-400 font-normal">By Architecture</span>, Not Retainers
          </h2>

          <p className={`text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          }`}>
            Every part of the Merqurie system is engineered to eliminate developer dependency, maximize Google organic search ranking, and convert visitors into instant WhatsApp inquiries.
          </p>
        </div>

        {/* 4 Big Numbers (Animated Counters & Clean Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-102 ${
                isDark 
                  ? 'bg-zinc-950/90 border-zinc-800/90 hover:border-cyan-500/40 shadow-xl' 
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className={`text-3xl sm:text-5xl font-black font-display tracking-tight ${
                    stat.highlight
                      ? 'text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]'
                      : isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-500 font-semibold">
                    {stat.unit}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold font-display mt-1 ${
                  isDark ? 'text-zinc-200' : 'text-slate-900'
                }`}>
                  {stat.label}
                </div>
              </div>

              <div className={`text-[11px] font-mono leading-relaxed mt-3 pt-3 border-t ${
                isDark ? 'border-zinc-800/80 text-zinc-500' : 'border-slate-100 text-slate-500'
              }`}>
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Tech Performance Bar & Telemetry Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl sm:rounded-3xl border overflow-hidden shadow-2xl transition-all ${
            isDark 
              ? 'bg-[#0A0A0E]/95 border-zinc-800 shadow-[0_0_40px_rgba(6,182,212,0.1)]' 
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Top Cockpit Header */}
          <div className={`px-5 py-4 border-b flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isDark ? 'bg-zinc-950/90 border-zinc-800' : 'bg-slate-100/90 border-slate-200'
          }`}>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                ARCHITECTURE TELEMETRY &bull; MERQURIE STANDARD VS. LEGACY CMS
              </span>
            </div>

            <div className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
              isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-slate-200 text-slate-600'
            }`}>
              VERIFIED CORE WEB VITALS 2026
            </div>
          </div>

          {/* Metric Comparison Bars Grid */}
          <div className="p-5 sm:p-8 space-y-6">
            {benchmarks.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span className={`text-xs sm:text-sm font-bold ${
                        isDark ? 'text-zinc-200' : 'text-slate-900'
                      }`}>
                        {b.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="text-cyan-400 font-bold">{b.merqurieLabel}</span>
                      <span className="text-zinc-500 line-through hidden sm:inline">{b.legacyLabel}</span>
                    </div>
                  </div>

                  {/* Dual Bar Representation */}
                  <div className="space-y-1">
                    {/* Merqurie Bar */}
                    <div className="relative w-full h-3 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.merqurie}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Footer */}
          <div className={`p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'bg-zinc-950/60 border-zinc-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className={isDark ? 'text-zinc-400' : 'text-slate-600'}>
                All platforms verified for sub-second Google ranking and ₹0 ongoing retainer costs.
              </span>
            </div>

            <button
              onClick={() => {
                playCyberTone('click');
                onOpenPrototypeModal && onOpenPrototypeModal();
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer active:scale-95 shadow-md ${
                isDark 
                  ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                  : 'bg-slate-950 hover:bg-slate-800 text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 fill-current" />
              <span>CLAIM YOUR BLUEPRINT</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
