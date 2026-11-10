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
    <section id="leadership" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-t border-slate-200/80">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[140px] pointer-events-none bg-rose-500/[0.03]" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Executive Leadership Card */}
        <div className="bg-[#FAFAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl shadow-slate-900/5">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/80">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span>TECHNICAL LEADERSHIP &amp; ENGINEERING RIGOR</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Chennai, India • Direct Architect Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Architect Profile & Background Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-3xl p-1 bg-gradient-to-br from-rose-500/20 via-slate-200 to-slate-100 shadow-md">
                <div className="w-full h-full rounded-[22px] bg-white border border-slate-200 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600 mb-3">
                    <Cpu className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 tracking-tight">
                    Jagadish
                  </h3>
                  <span className="text-xs font-mono text-rose-600 font-semibold mt-0.5">
                    Principal Systems Architect
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 mt-1">
                    4+ Years Specialized Engineering
                  </span>
                </div>
              </div>

              {/* Pedigree Badges */}
              <div className="mt-5 w-full space-y-2">
                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-left flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700 text-xs font-black">
                    A
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Amazon</span>
                    <span className="text-[11px] text-slate-500">Former Technical Engineer</span>
                  </div>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-left flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 text-rose-600 text-xs font-black">
                    T
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Turing</span>
                    <span className="text-[11px] text-slate-500">Frontier AI Engineering (Gemini, Claude)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Studio Mission & Technical Rigor */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-rose-600 font-semibold block mb-2">
                  DIRECT PARTNERSHIP • ZERO AGENCY LAYERS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Big-Tech Engineering Rigor. Dedicated to Your <span className="font-serif italic font-normal text-rose-600">Business.</span>
                </h2>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  At <strong className="text-slate-900">Amazon</strong> and developing/evaluating frontier AI architectures at <strong className="text-slate-900">Turing</strong>, I engineered high-throughput, latency-critical systems where reliability and performance are absolute requirements.
                </p>
                <p>
                  Merqurie applies that same engineering discipline to growing commercial enterprises. Traditional agencies charge heavy fees for fragile, bloated WordPress templates that take 8 seconds to load, followed by <span className="text-slate-900 font-semibold">₹5,000 to ₹10,000 recurring monthly retainer fees</span> just to make simple text updates.
                </p>
                <p className="text-slate-700 font-medium">
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
                  <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md shadow-emerald-500/15 transition-all active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-slate-950" />
                  <span>Connect on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenPrototypeModal}
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white transition-all active:scale-95 cursor-pointer shadow-xs"
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
