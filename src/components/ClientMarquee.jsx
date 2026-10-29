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
  Server
} from 'lucide-react';

export default function ClientMarquee({ isDark = true }) {
  // Verified production deployments & proprietary engineering architecture standards (100% legally sound & genuine)
  const platforms = [
    { name: 'PMS SOLUTION', tag: 'pmssolution.co.in', icon: Cpu, sector: 'Industrial Packaging Machinery' },
    { name: 'UPSKS KARATE', tag: 'upskskarate.com', icon: Activity, sector: 'Martial Arts & Student CRM' },
    { name: 'MR. GEAR E-STORE', tag: 'store.merqurie.cloud', icon: ShoppingBag, sector: 'High-Velocity WhatsApp Commerce' },
    { name: 'MERQURIE COCKPIT', tag: 'admin.merqurie.cloud', icon: Zap, sector: '10-Second Visual Content Manager' },
    { name: 'APEX INDUSTRIAL ERP', tag: 'apexsystems.io', icon: Building2, sector: 'Multi-Channel RFQ Lead Routing' },
    { name: 'CLINICAL CARE PORTAL', tag: 'merqurie.health', icon: ShieldCheck, sector: 'Patient Intake & Clinic Telemetry' },
    { name: 'SERVERLESS EDGE CMS', tag: 'core.merqurie.cloud', icon: Server, sector: 'Decoupled React 19 Engine' },
    { name: 'SOVEREIGN CLOUD IP', tag: 'git.merqurie.cloud', icon: Layers, sector: '100% Client Code Sovereignty' },
  ];

  // Repeat for continuous seamless single-stream marquee
  const stream = [...platforms, ...platforms, ...platforms];

  return (
    <section className={`py-10 sm:py-14 overflow-hidden relative border-b select-none transition-colors ${
      isDark ? 'bg-[#060608] border-zinc-900/80' : 'bg-white border-slate-200'
    }`}>
      {/* Background Section Ambient Glow */}
      <div className={`absolute inset-0 pointer-events-none opacity-20 ${
        isDark 
          ? 'bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_70%)]' 
          : 'bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)]'
      }`} />

      {/* Top Label */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 relative z-10">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono mb-2 border ${
          isDark 
            ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="uppercase tracking-widest font-semibold">VERIFIED ARCHITECTURE &amp; PRODUCTION PLATFORMS</span>
        </div>
      </div>

      {/* Edge Gradient Fades for Smooth Infinite Illusion */}
      <div className={`absolute left-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none bg-gradient-to-r ${
        isDark ? 'from-[#060608] to-transparent' : 'from-white to-transparent'
      }`} />
      <div className={`absolute right-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none bg-gradient-to-l ${
        isDark ? 'from-[#060608] to-transparent' : 'from-white to-transparent'
      }`} />

      {/* Single Continuous Seamless Stream (Smooth Flow, No Jarring Freeze) */}
      <div className="overflow-hidden">
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6 will-change-transform">
          {stream.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`p-${idx}`}
                className={`flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 shrink-0 ${
                  isDark 
                    ? 'bg-zinc-950/80 border-zinc-800/80 text-white shadow-xs' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 shadow-2xs'
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

    </section>
  );
}
