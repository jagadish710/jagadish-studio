import React from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Cpu, 
  Activity, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Sparkles,
  Award
} from 'lucide-react';

export default function ClientMarquee({ isDark = true }) {
  const track1 = [
    { name: 'UPSKS KARATE', tag: 'upskskarate.com', icon: Activity, sector: 'Martial Arts SaaS' },
    { name: 'PMS SOLUTION', tag: 'pmssolution.co.in', icon: Cpu, sector: 'Industrial Machinery' },
    { name: 'MR. GEAR E-STORE', tag: 'store.merqurie.cloud', icon: ShoppingBag, sector: 'Urban Commerce' },
    { name: 'APEX INDUSTRIAL', tag: 'apexsystems.io', icon: Building2, sector: 'Heavy Packaging ERP' },
    { name: 'TENCIBA SYSTEMS', tag: 'tenciba.cloud', icon: Zap, sector: 'Cloud Infrastructure' },
    { name: 'ACURES PHARMA', tag: 'acurespharma.sg', icon: ShieldCheck, sector: 'Clinical Distribution' },
  ];

  const track2 = [
    { name: 'SEYON DESIGNS', tag: 'seyondesigns.in', icon: Sparkles, sector: 'Architectural Studio' },
    { name: 'ZYNGREEN BIO', tag: 'zyngreen.com', icon: Globe, sector: 'Sustainable Tech' },
    { name: 'ISTA GLOBAL', tag: 'istaglobal.org', icon: Award, sector: 'Logistics Network' },
    { name: 'DEAR ABROAD', tag: 'dearabroad.co', icon: Layers, sector: 'Immigration Portal' },
    { name: 'AVIYARS STUDIOS', tag: 'aviyars.in', icon: Building2, sector: 'Media Production' },
    { name: 'ACHIEVE LABS', tag: 'achievelabs.io', icon: Cpu, sector: 'Enterprise EdTech' },
  ];

  // Repeat for continuous seamless marquee
  const row1 = [...track1, ...track1, ...track1];
  const row2 = [...track2, ...track2, ...track2];

  return (
    <section className={`py-12 sm:py-16 overflow-hidden relative border-b select-none transition-colors ${
      isDark ? 'bg-[#08080A] border-zinc-900' : 'bg-white border-slate-200'
    }`}>
      {/* Background Section Ambient Light */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${
        isDark 
          ? 'bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)]' 
          : 'bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)]'
      }`} />

      {/* Top Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10 relative z-10">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-2 border ${
          isDark 
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="uppercase tracking-widest font-semibold">PRODUCTION CLIENT PLATFORMS</span>
        </div>
        <h3 className={`text-xl sm:text-2xl font-bold font-display ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Trusted By Forward-Thinking Businesses &amp; Brands
        </h3>
        <p className={`text-xs sm:text-sm mt-1 max-w-xl mx-auto ${
          isDark ? 'text-zinc-400' : 'text-slate-600'
        }`}>
          Powering high-converting digital storefronts, clinical operations, and industrial ERP portals across India and Singapore.
        </p>
      </div>

      {/* Edge Gradient Fades for Infinite Illusion */}
      <div className={`absolute left-0 inset-y-0 w-20 sm:w-36 z-20 pointer-events-none bg-gradient-to-r ${
        isDark ? 'from-[#08080A] to-transparent' : 'from-white to-transparent'
      }`} />
      <div className={`absolute right-0 inset-y-0 w-20 sm:w-36 z-20 pointer-events-none bg-gradient-to-l ${
        isDark ? 'from-[#08080A] to-transparent' : 'from-white to-transparent'
      }`} />

      {/* Track 1: Moving Left */}
      <div className="mb-4 sm:mb-5 overflow-hidden">
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6">
          {row1.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`r1-${idx}`}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 ${
                  isDark 
                    ? 'bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 shadow-md' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-cyan-400' : 'bg-white border-slate-200 text-blue-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className={`text-xs sm:text-sm font-bold font-display tracking-wide ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold">{item.tag}</span>
                    <span className="text-[9px] text-zinc-500 font-mono hidden sm:inline">&bull; {item.sector}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Track 2: Moving Right */}
      <div className="overflow-hidden">
        <div className="animate-marquee-infinite-reverse flex items-center gap-4 sm:gap-6">
          {row2.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`r2-${idx}`}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 hover:scale-105 shrink-0 ${
                  isDark 
                    ? 'bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 shadow-md' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                  isDark ? 'bg-zinc-900 border-zinc-800 text-emerald-400' : 'bg-white border-slate-200 text-emerald-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className={`text-xs sm:text-sm font-bold font-display tracking-wide ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold">{item.tag}</span>
                    <span className="text-[9px] text-zinc-500 font-mono hidden sm:inline">&bull; {item.sector}</span>
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
