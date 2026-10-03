import React from 'react';

export default function Logo({ className = "w-10 h-10", isDark = true }) {
  return (
    <div className={`relative flex items-center justify-center rounded-2xl p-0.5 overflow-hidden transition-all duration-300 group-hover:scale-105 ${className} ${
      isDark 
        ? 'bg-gradient-to-br from-luxury-gold/40 via-[#8B5CF6]/40 to-[#00C853]/40 shadow-[0_0_20px_rgba(230,198,135,0.3)]' 
        : 'bg-gradient-to-br from-fresh-emerald/30 via-[#673DE6]/25 to-luxury-gold/30 shadow-[0_0_15px_rgba(0,200,83,0.25)]'
    }`}>
      {/* Inner container with high-res brand emblem */}
      <div className={`w-full h-full rounded-[14px] overflow-hidden flex items-center justify-center ${
        isDark ? 'bg-[#121214]' : 'bg-[#0E0E10]'
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
