import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export default function TrustRibbon({ isDark = true }) {
  return (
    <div className={`relative py-6 px-4 sm:px-6 lg:px-8 border-y overflow-hidden transition-colors ${
      isDark 
        ? 'bg-[#060608]/90 border-zinc-900/80' 
        : 'bg-slate-50/90 border-slate-200/80'
    }`}>
      {/* Subtle background ambient light */}
      <div className={`absolute inset-0 pointer-events-none opacity-40 ${
        isDark 
          ? 'bg-gradient-to-r from-transparent via-cyan-950/20 to-transparent' 
          : 'bg-gradient-to-r from-transparent via-blue-50/50 to-transparent'
      }`} />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Google Business Verified Badge */}
        <div className={`flex items-center gap-3.5 px-4 py-2.5 rounded-2xl border transition-all ${
          isDark 
            ? 'bg-zinc-950/90 border-zinc-800/90 shadow-[0_0_20px_rgba(56,189,248,0.06)]' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {/* Official Google 'G' Icon */}
          <div className="w-8 h-8 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-xs border border-slate-100">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#EA4335"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>
                4.9 / 5.0
              </span>
            </div>
            <div className={`text-[11px] font-mono leading-none mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Google Business &amp; Web Standards Verified
            </div>
          </div>
        </div>

        {/* Center / Right: Laurel Wreath Trust Credentials */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8">
          
          {/* Badge 1: 4+ Years Experience */}
          <div className="flex items-center gap-2.5 text-left">
            <span className="text-zinc-500 font-mono text-lg select-none">{"("}</span>
            <div>
              <div className={`text-xs sm:text-sm font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                4+ Years
              </div>
              <div className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                Web Architecture
              </div>
            </div>
            <span className="text-zinc-500 font-mono text-lg select-none">{")"}</span>
          </div>

          {/* Badge 2: Trusted by 50+ Businesses */}
          <div className="flex items-center gap-2.5 text-left">
            <span className="text-zinc-500 font-mono text-lg select-none">{"("}</span>
            <div>
              <div className={`text-xs sm:text-sm font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                50+ Systems
              </div>
              <div className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                Live In Production
              </div>
            </div>
            <span className="text-zinc-500 font-mono text-lg select-none">{")"}</span>
          </div>

          {/* Badge 3: 99/100 Core Web Vitals */}
          <div className="flex items-center gap-2.5 text-left">
            <span className="text-zinc-500 font-mono text-lg select-none">{"("}</span>
            <div>
              <div className="text-xs sm:text-sm font-bold font-display text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>99/100 CWV</span>
              </div>
              <div className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                Sub-0.3s Google Speed
              </div>
            </div>
            <span className="text-zinc-500 font-mono text-lg select-none">{")"}</span>
          </div>

        </div>

      </div>
    </div>
  );
}
