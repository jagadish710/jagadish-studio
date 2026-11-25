import React from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Lock, 
  Smartphone, 
  MessageSquare, 
  CheckCircle2, 
  Wifi, 
  Battery 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { projects } from '../data/projects';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20reviewing%20your%20projects%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function WorkPage({ onOpenPrototypeModal }) {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-slate-900">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-white border border-slate-200 text-slate-800 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span className="uppercase tracking-wider">VERIFIED DEPLOYMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight mb-4 leading-tight">
          Real Proof.{' '}
          <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            Real Speed. Real Results.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Here are live platforms we have engineered for local businesses, schools, and medical suppliers. Test them on your own phone: observe how fast they open, how clean they look, and how directly customers can message you.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((proj, idx) => (
          <article
            key={proj.name}
            className={`rounded-3xl border ${proj.theme.cardBg} ${proj.theme.border} p-6 sm:p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 ease-out flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden active:scale-[0.99]`}
          >
            <div className="relative z-10">
              
              {/* Layered Workstation Frame */}
              <div className="mb-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-900 p-2 sm:p-2.5 shadow-xl transition-all duration-500 relative">
                  
                  {/* Micro Browser Window Bar */}
                  <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950 border border-white/10 text-[10px] font-mono text-slate-300 max-w-[170px] truncate">
                      <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{proj.domain}</span>
                    </div>

                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${proj.theme.tagBg}`}>
                      {proj.badge}
                    </span>
                  </div>

                  {/* Desktop Image Canvas with Instant Preload & Fallback */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-800 group/screen">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      loading="eager"
                      fetchPriority={idx < 2 ? "high" : "auto"}
                      decoding="async"
                      className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                    />

                    {/* Floating Speed Chip */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold backdrop-blur-md shadow-xs border ${proj.theme.speedBadge} flex items-center gap-1`}>
                        <Zap className="w-2.5 h-2.5 text-amber-500" />
                        <span>{proj.speed}</span>
                      </span>
                    </div>

                    {/* Live Indicator */}
                    {proj.url && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-emerald-800 border border-emerald-300 flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live Verified</span>
                        </span>
                      </div>
                    )}

                    {/* Overlapping Floating Titanium Smartphone with Authentic Mobile Screenshot */}
                    <div className="absolute -bottom-2 sm:-bottom-3 right-1 sm:right-3 w-[115px] sm:w-[140px] aspect-[9/18] rounded-[1.3rem] sm:rounded-[1.6rem] bg-slate-950 p-1 sm:p-1.5 shadow-2xl ring-2 ring-slate-800 z-20 group-hover:-translate-y-2 group-hover:scale-103 transition-all duration-500 ease-out">
                      <div className="w-full h-full rounded-[1.05rem] sm:rounded-[1.3rem] overflow-hidden relative bg-slate-900 border border-slate-800">
                        <img
                          src={proj.mobileImage || proj.image}
                          alt={`${proj.name} Mobile View`}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute top-0 inset-x-0 pt-1 px-2 flex items-center justify-between text-[7px] font-mono text-white/90 bg-gradient-to-b from-black/70 to-transparent z-20">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <Wifi className="w-2 h-2" />
                            <Battery className="w-2 h-2" />
                          </div>
                        </div>

                        {/* WhatsApp preview bubble */}
                        <div className="absolute bottom-1.5 inset-x-1 z-20 space-y-1">
                          <div className="p-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-emerald-400 shadow-md text-left">
                            <div className="flex items-center gap-1 text-[6.5px] font-mono font-bold text-emerald-400 mb-0.5">
                              <MessageSquare className="w-2 h-2 text-emerald-400 fill-current" />
                              <span>1-Tap WhatsApp</span>
                            </div>
                            <p className="text-[7px] leading-tight text-white line-clamp-2">
                              "{proj.chatPreview}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                  {proj.sector}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 tracking-tight leading-tight group-hover:text-rose-600 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* 3 Metric Chips */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-6">
                {proj.metrics.map((st, sIdx) => (
                  <div key={sIdx} className="text-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">
                      {st.label}
                    </span>
                    <strong className="text-xs font-bold text-slate-950 font-display">
                      {st.val}
                    </strong>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between gap-3 pt-2 relative z-10">
              <button
                onClick={onOpenPrototypeModal}
                className="text-xs font-mono font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Request Sample Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {proj.url && (
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-900 text-white hover:bg-rose-600 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-300" />
                </a>
              )}
            </div>

          </article>
        ))}
      </div>

    </div>
  );
}
