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
    { name: 'EDGE SPEED ENGINE', tag: 'core.merqurie.cloud', icon: Server, sector: '< 0.3s Global PageSpeed' },
    { name: '100% CODE SOVEREIGNTY', tag: 'git.merqurie.cloud', icon: ShieldCheck, sector: 'Full Client IP Ownership' },
  ];

  const stream = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-7 sm:py-9 overflow-hidden relative border-y border-white/10 bg-[#070814] select-none text-white">
      
      {/* Top Label */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-slate-900 border border-white/15 text-slate-300 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-widest font-semibold">VERIFIED PRODUCTION PLATFORMS &amp; ARCHITECTURAL STANDARDS</span>
        </div>
      </div>

      {/* Edge Gradient Fades */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#070814] to-transparent" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#070814] to-transparent" />

      {/* Continuous Stream */}
      <div className="overflow-hidden">
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6 will-change-transform">
          {stream.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`p-${idx}`}
                className="flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-white/15 bg-slate-900/90 text-white shadow-lg shrink-0 hover:border-rose-500/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border bg-rose-950/80 border-rose-500/40 text-rose-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold font-display tracking-wide text-white">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono text-cyan-400">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-slate-500">•</span>
                    <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                      {item.sector}
                    </span>
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
