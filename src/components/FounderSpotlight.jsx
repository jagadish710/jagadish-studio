import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { playCyberTone } from '../utils/audio';

export default function FounderSpotlight({ isDark = true, onOpenPrototypeModal }) {
  return (
    <section className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative border-t overflow-hidden transition-colors ${
      isDark ? 'bg-[#08080A] border-zinc-900' : 'bg-white border-slate-200'
    }`}>
      {/* Background Ambient Radial Light */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-cyan-950/20' : 'bg-blue-100/40'
      }`} />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
          isDark 
            ? 'bg-zinc-950/90 border-zinc-800/90 shadow-[0_0_35px_rgba(34,211,238,0.06)]' 
            : 'bg-slate-50 border-slate-200 shadow-xl'
        }`}>
          
          {/* Subtle Top Indicator Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-zinc-800/60">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                : 'bg-white border-slate-200 text-slate-800 shadow-2xs'
            }`}>
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>LEADERSHIP &bull; ARCHITECT SPOTLIGHT</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>4+ YEARS SPECIALIZED ARCHITECTURE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Avatar / Architect Terminal Box */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative group">
                {/* Outer Glow Halo */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-400 opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Tech Avatar Frame */}
                <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl flex flex-col items-center justify-center p-4 border transition-all ${
                  isDark ? 'bg-[#0E0E12] border-zinc-700' : 'bg-white border-slate-200 shadow-lg'
                }`}>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <span className={`text-base font-bold font-display tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    Jagadish
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold mt-0.5">
                    Principal Architect
                  </span>
                  <span className={`text-[10px] font-mono mt-1 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                    4+ Yrs In Engineering
                  </span>
                </div>
              </div>

              {/* Status Pill */}
              <div className={`mt-4 px-3 py-1 rounded-full text-[10px] font-mono border inline-flex items-center gap-1.5 ${
                isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-white border-slate-200 text-slate-600'
              }`}>
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>100+ Systems Engineered</span>
              </div>
            </div>

            {/* Right: Personal Manifesto & Value Truth */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div>
                <span className={`text-xs font-mono uppercase tracking-widest block mb-1 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600 font-semibold'
                }`}>
                  Founder &amp; Principal Systems Architect
                </span>
                <h3 className={`text-2xl sm:text-3xl font-extrabold font-display leading-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  "I started Merqurie to end the agency retainer trap."
                </h3>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-zinc-300' : 'text-slate-700'
              }`}>
                With <strong>over 4+ years of specialized web architecture experience</strong> delivering full-stack platforms, high-volume e-commerce catalogs, and multi-channel lead routing systems, I watched conventional agencies trap clients in endless ₹10,000 monthly maintenance contracts for basic text updates.
              </p>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                Merqurie changes that equation completely. We engineer decoupled, serverless websites with sub-0.3s edge speed, provide you with an intuitive 10-second self-serve admin cockpit, and hand over 100% of your source code. You pay once for engineering excellence—and <strong>₹0 ongoing maintenance retainers forever</strong>.
              </p>

              {/* 3 Quick Architect Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className={`p-2.5 rounded-xl border text-xs font-mono ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  <span className="block text-cyan-400 font-bold mb-0.5">4+ Years</span>
                  <span>Edge Architecture</span>
                </div>
                <div className={`p-2.5 rounded-xl border text-xs font-mono ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  <span className="block text-emerald-400 font-bold mb-0.5">₹0 Retainers</span>
                  <span>100% Client Capital Kept</span>
                </div>
                <div className={`p-2.5 rounded-xl border text-xs font-mono ${
                  isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  <span className="block text-blue-400 font-bold mb-0.5">100% IP</span>
                  <span>Complete Code Sovereignty</span>
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playCyberTone('click');
                    onOpenPrototypeModal && onOpenPrototypeModal();
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer active:scale-95 shadow-md ${
                    isDark 
                      ? 'bg-white hover:bg-zinc-200 text-zinc-950' 
                      : 'bg-slate-950 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>DISCUSS YOUR SYSTEM BLUEPRINT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20saw%20your%20profile%20on%20Merqurie%20and%20would%20like%20to%20discuss%20a%20website%20solution."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberTone('click')}
                  className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
                  <span>Chat with Jagadish</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
