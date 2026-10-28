import React from 'react';

export default function Logo({ className = "w-10 h-10", isDark = true, showWordmark = false }) {
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className.includes('w-') ? '' : 'h-10'}`}>
      {/* Precision Engineered SVG Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105 ${
        className.includes('w-') ? className : 'w-10 h-10'
      } ${
        isDark 
          ? 'bg-gradient-to-br from-[#1E1E24] via-[#141416] to-[#0A0A0C] border border-[#E6C687]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]' 
          : 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200/90 shadow-sm'
      }`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-[70%] h-[70%]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="merqurieGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#FFF4D2" : "#1E293B"} />
              <stop offset="50%" stopColor={isDark ? "#E6C687" : "#0F172A"} />
              <stop offset="100%" stopColor={isDark ? "#C5A059" : "#334155"} />
            </linearGradient>
            <linearGradient id="merqurieAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#E6C687" : "#2563EB"} />
              <stop offset="100%" stopColor={isDark ? "#FACC15" : "#1D4ED8"} />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Precision Architectural M & Q Interlock */}
          {/* Left Pillar of M */}
          <path
            d="M24 74 L24 28 C24 25.8 25.8 24 28 24 L32 24 C33.8 24 35.4 25 36.2 26.6 L50 51.5 L63.8 26.6 C64.6 25 66.2 24 68 24 L72 24 C74.2 24 76 25.8 76 28 L76 74"
            stroke="url(#merqurieGold)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Signature Q-Sweep Arc moving smoothly underneath and rising */}
          <path
            d="M42 56 C36 60 35 70 42 75 C49 79 58 78 63 72 C68 66 74 66 79 73 L84 78"
            stroke="url(#merqurieAccent)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Luminous Apex Dot */}
          <circle
            cx="84"
            cy="78"
            r="4.5"
            fill="url(#merqurieAccent)"
            filter={isDark ? "url(#softGlow)" : undefined}
          />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold text-sm tracking-[0.22em] leading-none ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            MERQURIE
          </span>
          <span className={`text-[9px] font-mono font-semibold tracking-[0.3em] mt-1 ${
            isDark ? 'text-luxury-gold' : 'text-blue-600'
          }`}>
            GROUP
          </span>
        </div>
      )}
    </div>
  );
}
