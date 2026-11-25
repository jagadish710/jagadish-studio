import React from 'react';
import LiveSpeedRaceSimulator from './LiveSpeedRaceSimulator';

export default function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-20 relative border-t border-white/5 bg-ocean-950/70 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-rose-200 font-mono">
            The Business Reality Check
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Is Your Website <span className="text-gold-gradient">Making Money or Losing Leads?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            84% of customers open your website on a smartphone over 4G/5G mobile data. Here is what happens when they click your link:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Typical Agency / WordPress Site */}
          <div className="glass-card rounded-3xl p-5 sm:p-7 border-crimson-500/30 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-full bg-crimson-500/15 border border-crimson-400/30 text-[11px] sm:text-xs font-bold text-crimson-300 font-mono whitespace-nowrap">
                ✕ WordPress Agency
              </span>
              <span className="px-2.5 py-1 rounded-full bg-crimson-500/10 border border-crimson-500/20 text-xs sm:text-sm font-bold font-mono text-crimson-400 whitespace-nowrap">
                6–9s Load
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              The Leaky Bucket
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-crimson-500/20 text-crimson-400 flex items-center justify-center text-[10px] font-bold shrink-0">✕</span>
                <span className="truncate">7s blank screen loses 70% of mobile buyers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-crimson-500/20 text-crimson-400 flex items-center justify-center text-[10px] font-bold shrink-0">✕</span>
                <span className="truncate">Tedious 8-field forms drop high-intent leads</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-crimson-500/20 text-crimson-400 flex items-center justify-center text-[10px] font-bold shrink-0">✕</span>
                <span className="truncate">Monthly agency retainers for simple text edits</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-crimson-500/20 text-crimson-400 flex items-center justify-center text-[10px] font-bold shrink-0">✕</span>
                <span className="truncate">Generic slow templates hurt brand trust</span>
              </li>
            </ul>
          </div>

          {/* Right: The Merqurie Edge Engine */}
          <div className="glass-card rounded-3xl p-5 sm:p-7 border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/10 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] sm:text-xs font-bold text-emerald-300 font-mono whitespace-nowrap">
                ✓ Merqurie Edge
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm font-bold font-mono text-emerald-400 whitespace-nowrap">
                Sub-1s Speed
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              High-Speed Conversion
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                <span className="truncate">Instant sub-1s paint keeps every mobile visitor</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                <span className="truncate">1-Tap WhatsApp quotes directly into your chat</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                <span className="truncate">10-Second phone edits with Zero monthly retainers</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                <span className="truncate">100% custom code &amp; full asset ownership</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Live Mobile 4G Speed Race Simulator */}
        <LiveSpeedRaceSimulator />

      </div>
    </section>
  );
}
