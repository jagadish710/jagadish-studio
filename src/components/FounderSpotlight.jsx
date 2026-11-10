import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { AmazonLogo, TuringLogo } from './CompanyLogos';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20architecture%20for%20my%20business.';

export default function FounderSpotlight({ onOpenPrototypeModal }) {
  return (
    <section id="leadership" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50/70 text-slate-900 border-t border-slate-200/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none bg-rose-400/10" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Executive Leadership VIP Glowing Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-slate-200/60 backdrop-blur-xl">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-rose-50 border border-rose-200 text-rose-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>TECHNICAL LEADERSHIP &amp; ENGINEERING RIGOR</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Chennai, India • Direct Architect Access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Architect Profile & Background Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              
              {/* Profile Card with Glowing Ring */}
              <div className="relative w-52 h-64 rounded-3xl p-1 bg-gradient-to-br from-rose-500 via-amber-400 to-sky-500 shadow-xl shadow-rose-200/50">
                <div className="w-full h-full rounded-[22px] bg-white border border-slate-200 flex flex-col items-center justify-center p-4">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden mb-3 shadow-lg ring-2 ring-rose-500/20 border-2 border-slate-100 bg-slate-100 shrink-0">
                    <img
                      src="/images/jagadish_founder.png"
                      alt="Jagadish - Principal Systems Architect"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-950 tracking-tight">
                    Jagadish
                  </h3>
                  <span className="text-xs font-mono text-rose-600 font-semibold mt-0.5">
                    Principal Systems Architect
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 mt-1">
                    Founder • Merqurie Systems
                  </span>
                </div>
              </div>

              {/* Proven Corporate Pedigree Badges with Official Logos */}
              <div className="w-full mt-4 space-y-2.5">
                <div className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-left shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                    <AmazonLogo className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-950 block">Amazon</span>
                    <span className="text-[11px] font-mono text-slate-600">Former Technical Engineer</span>
                  </div>
                </div>

                <div className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-left shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                    <TuringLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-950 block">Turing</span>
                    <span className="text-[11px] font-mono text-slate-600">Frontier AI Systems (Gemini, Claude)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Founder's Mission & Standard */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 border border-emerald-300 text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>DIRECT BUILD GUARANTEE • ZERO OUTSOURCING</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-950 leading-tight">
                "Big-Tech Engineering Standards for Local &amp; Growing Businesses."
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Throughout my engineering career at <strong className="text-slate-950">Amazon</strong> and evaluating frontier AI models at <strong className="text-slate-950">Turing</strong>, one principle was sacred: <em>latency is death, simplicity is scale, and customer trust is everything.</em>
                </p>
                <p>
                  When looking at how local businesses in Chennai and India were being served by agencies, I saw an unfair industry: bloated WordPress themes that take 8 seconds to load, broken contact forms, slow responses, and endless monthly bills of ₹5,000 to ₹15,000 just for "maintenance" that delivers zero value.
                </p>
                <p>
                  Merqurie was built to be the antidote. We engineer modern, mobile-first websites that load in under 1 second, capture direct WhatsApp leads, and are 100% owned by the business owner from day one—with ₹0 recurring agency retainers.
                </p>
              </div>

              {/* Direct Founder Access Guarantee */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wide block">
                  The Merqurie Standard:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>You speak directly with the engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Free prototype preview in 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% code sovereignty &amp; domain control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sub-1.0s mobile speed SLA</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat directly with Jagadish</span>
                </a>

                <button
                  onClick={onOpenPrototypeModal}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25 active:scale-95 hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Request Free Sample Preview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
