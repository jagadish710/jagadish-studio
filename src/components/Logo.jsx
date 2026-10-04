import React from 'react';

export default function Logo({ className = "w-10 h-10", isDark = true }) {
  return (
    <div className={`relative flex items-center justify-center rounded-2xl p-0.5 overflow-hidden transition-all duration-300 group-hover:scale-105 ${className} ${
      isDark 
        ? 'bg-gradient-to-br from-luxury-gold/40 via-[#8B5CF6]/40 to-luxury-gold/20 shadow-[0_0_20px_rgba(230,198,135,0.3)]' 
        : 'border border-slate-200 shadow-xs bg-slate-100'
    }`}>
      {/* Inner container with high-res brand emblem */}
      <div className={`w-full h-full rounded-[14px] overflow-hidden flex items-center justify-center ${
        isDark ? 'bg-[#121214]' : 'bg-white'
      }`}>
        <img
          src="/logo.png"
          alt="Jagadish Logo"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-300 group-hover:scale-110"
          loading="eager"
        />
      </div>
    </div>
  );
}
