import React from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Cpu, 
  Activity, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Server,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function ClientMarquee() {
  const platforms = [
    { name: 'PMS SOLUTION', tag: 'pmssolution.co.in', icon: Cpu, sector: 'Hospital Medical Equipment Sales & Rentals' },
    { name: 'UPSKS KARATE', tag: 'upskskarate.com', icon: Activity, sector: 'Martial Arts & Student Platform' },
    { name: 'WHATSAPP E-STORE', tag: 'store.merqurie.cloud', icon: ShoppingBag, sector: '1-Tap Mobile Commerce' },
    { name: 'VISUAL PHONE COCKPIT', tag: 'admin.merqurie.cloud', icon: Zap, sector: '10-Second Self-Serve Edits' },
    { name: 'EDGE SPEED ENGINE', tag: 'core.merqurie.cloud', icon: Server, sector: '< 1.0s Global PageSpeed' },
    { name: '100% CODE SOVEREIGNTY', tag: 'git.merqurie.cloud', icon: ShieldCheck, sector: 'Full Client IP Ownership' },
  ];

  // Repeat for continuous seamless infinite marquee
  const stream = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-8 sm:py-10 overflow-hidden relative border-y border-zinc-800/80 bg-[#060608] select-none">
      
      {/* Top Label */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-widest font-semibold">VERIFIED PRODUCTION PLATFORMS &amp; ARCHITECTURAL STANDARDS</span>
        </div>
      </div>

      {/* Edge Gradient Fades for Smooth Infinite Illusion */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#060608] to-transparent" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#060608] to-transparent" />

      {/* Continuous Stream (Silk Flow, No Abrupt Halting) */}
      <div className="overflow-hidden">
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6 will-change-transform">
          {stream.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`p-${idx}`}
                className="flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-white shadow-xs shrink-0"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border bg-zinc-900 border-zinc-800 text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold font-display tracking-wide text-white">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">{item.tag}</span>
                    <span className="text-[9px] text-zinc-400 font-mono hidden sm:inline">• {item.sector}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
