import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20architecture%20for%20my%20business.';

export default function FounderSpotlight({ onOpenPrototypeModal }) {
  return (
    <section id="leadership" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0E] border-t border-zinc-800/80">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[140px] pointer-events-none bg-cyan-950/15" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Executive Leadership Card */}
        <div className="surface-mercury p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#0E0F14] border border-white/10 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>TECHNICAL LEADERSHIP &amp; ENGINEERING RIGOR</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chennai, India • Direct Architect Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Architect Profile & Background Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-3xl p-1 bg-gradient-to-br from-cyan-500/30 via-zinc-800 to-emerald-500/30 shadow-xl">
                <div className="w-full h-full rounded-[22px] bg-[#0C0C12] border border-zinc-800 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                    <Cpu className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white tracking-tight">
                    Jagadish
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                    Principal Systems Architect
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 mt-1">
                    4+ Years Specialized Engineering
                  </span>
                </div>
              </div>

              {/* Pedigree Badges */}
              <div className="mt-5 w-full space-y-2">
                <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 text-xs font-black">
                    A
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-white block">Amazon</span>
                    <span className="text-[11px] text-zinc-400">Former Technical Engineer</span>
                  </div>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400 text-xs font-black">
                    T
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-white block">Turing</span>
                    <span className="text-[11px] text-zinc-400">Frontier AI Engineering (Gemini, Claude)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Studio Mission & Technical Rigor */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
                  DIRECT PARTNERSHIP • ZERO AGENCY LAYERS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Big-Tech Engineering Rigor. Dedicated to Your <span className="font-serif italic font-normal text-slate-100">Business.</span>
                </h2>
              </div>

              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <p>
                  At <strong className="text-white">Amazon</strong> and developing/evaluating frontier AI architectures at <strong className="text-white">Turing</strong>, I engineered high-throughput, latency-critical systems where reliability and performance are absolute requirements.
                </p>
                <p>
                  Merqurie applies that same engineering discipline to growing commercial enterprises. Traditional agencies charge heavy fees for fragile, bloated WordPress templates that take 8 seconds to load, followed by <span className="text-white font-medium">₹5,000 to ₹10,000 recurring monthly retainer fees</span> just to make simple text updates.
                </p>
                <p className="text-zinc-200 font-medium">
                  We engineer modern, decoupled web storefronts deployed on global edge networks. You work directly with senior engineering leadership, pay zero recurring maintenance retainers, and retain 100% intellectual property sovereignty from day one.
                </p>
              </div>

              {/* Pillars Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Direct communication with lead architect',
                  'Sub-second load speed on 4G/5G mobile',
                  'Zero monthly agency retainer fees',
                  '100% source code & domain ownership',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-medium text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-zinc-950" />
                  <span>Connect on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenPrototypeModal}
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Request Free Architecture Sample</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
