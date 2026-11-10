import React from 'react';
import { 
  LogoConcept1, 
  LogoConcept2, 
  LogoConcept3, 
  LogoConcept4 
} from './LogoConcepts';

export default function Logo({ 
  className = "w-10 h-10", 
  isDark = true, 
  showWordmark = false,
  concept = 'concept1' 
}) {
  const getConceptComponent = () => {
    switch (concept) {
      case 'concept2': return LogoConcept2;
      case 'concept3': return LogoConcept3;
      case 'concept4': return LogoConcept4;
      case 'concept1':
      default: return LogoConcept1;
    }
  };

  const ConceptComp = getConceptComponent();

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className.includes('w-') ? '' : 'h-10'}`}>
      {/* Precision Engineered SVG Emblem - Platinum Chrome Titanium */}
      <div className={`relative flex items-center justify-center shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105 ${
        className.includes('w-') ? className : 'w-10 h-10'
      } ${
        isDark 
          ? 'bg-gradient-to-br from-[#1E1E24] via-[#141416] to-[#0A0A0C] border border-zinc-700/70 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
          : 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200 shadow-sm'
      }`}>
        <ConceptComp className="w-[78%] h-[78%]" isDark={isDark} />
      </div>

      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold text-sm tracking-[0.22em] leading-none ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            MERQURIE
          </span>
          <span className={`text-[9px] font-mono font-semibold tracking-[0.3em] mt-1 ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            STUDIO
          </span>
        </div>
      )}
    </div>
  );
}
