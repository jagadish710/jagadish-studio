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
import { AmazonLogo, TuringLogo } from './CompanyLogos';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20architecture%20for%20my%20business.';

export default function FounderSpotlight({ onOpenPrototypeModal }) {
  return (
    <section id="leadership" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070814] text-white border-t border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none bg-rose-600/10" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Executive Leadership VIP Glowing Card */}
        <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-rose-950/40 backdrop-blur-xl">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-950 border border-rose-500/30 text-rose-300 shadow-md">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>TECHNICAL LEADERSHIP &amp; ENGINEERING RIGOR</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Chennai, India • Direct Architect Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Architect Profile & Background Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              
              {/* Profile Card with Glowing Ring */}
              <div className="relative w-48 h-56 rounded-3xl p-1 bg-gradient-to-br from-rose-500 via-purple-500 to-cyan-500 shadow-xl shadow-rose-950/50">
                <div className="w-full h-full rounded-[22px] bg-slate-950 border border-white/10 flex flex-col items-center justify-center p-3.5">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mb-2.5 shadow-xl ring-2 ring-rose-500/40 border-2 border-white/20 bg-slate-900 shrink-0">
                    <img
                      src="/images/jagadish_founder.png"
                      alt="Jagadish - Principal Systems Architect"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white tracking-tight">
                    Jagadish
                  </h3>
                  <span className="text-xs font-mono text-rose-400 font-semibold mt-0.5">
                    Principal Systems Architect
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">
                    Founder • Merqurie Systems
                  </span>
                </div>
              </div>

              {/* Proven Corporate Pedigree Badges */}
              <div className="w-full mt-4 space-y-2">
                <div className="w-full p-2.5 rounded-xl bg-slate-950/80 border border-white/10 flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <AmazonLogo className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Amazon</span>
                    <span className="text-[10px] font-mono text-slate-400">Former Technical Engineer</span>
                  </div>
                </div>

                <div className="w-full p-2.5 rounded-xl bg-slate-950/80 border border-white/10 flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
                    <TuringLogo className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Turing</span>
                    <span className="text-[10px] font-mono text-slate-400">Frontier AI Systems (Gemini, Claude)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Founder's Mission & Standard */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>DIRECT BUILD GUARANTEE • ZERO OUTSOURCING</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight leading-snug">
                "We built Merqurie as the antidote to agency retainer debt and slow, broken websites."
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  Throughout my career engineering high-scale distributed systems at <strong>Amazon</strong> and evaluating frontier multimodal AI models with <strong>Turing</strong>, I saw how software should be built: ultra-fast, rock-solid, and completely transparent.
                </p>
                <p>
                  When looking at how local and growing businesses were being served by website agencies, I saw an industry built on customer lock-in: outdated WordPress templates taking 8 seconds to load, slow customer service, and endless monthly invoices for "maintenance" that didn't deliver any value.
                </p>
                <p>
                  Merqurie was built to change that. We engineer modern, mobile-first websites that load in under 1 second, capture direct WhatsApp enquiries, and are <strong>100% owned by the business owner from day one—with ₹0 recurring agency retainers</strong>.
                </p>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                    EDGE PERFORMANCE
                  </span>
                  <span className="text-xs text-white font-medium block">
                    &lt; 0.3s Mobile Speed
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    99/100 Core Web Vitals
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                    CONVERSION FIRST
                  </span>
                  <span className="text-xs text-white font-medium block">
                    1-Tap WhatsApp
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Zero customer friction
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block mb-1">
                    SOVEREIGNTY
                  </span>
                  <span className="text-xs text-white font-medium block">
                    100% Client Owned
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ₹0 monthly retainer debt
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15 cursor-pointer transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Chat with Jagadish</span>
                </a>

                <button
                  onClick={onOpenPrototypeModal}
                  className="px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40 cursor-pointer transition-all"
                >
                  <span>Request Free Sample</span>
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
