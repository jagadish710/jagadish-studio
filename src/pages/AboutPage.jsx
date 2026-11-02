import React from 'react';
import { ShieldCheck, Award, Cpu, CheckCircle2, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20project.';

export default function AboutPage({ onOpenPrototypeModal }) {
  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 bg-zinc-900 border border-zinc-800 text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="uppercase tracking-wider">ABOUT MERQURIE &amp; JAGADISH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4 leading-tight">
          Big-Tech Rigor for Growing Businesses
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          We combine enterprise-grade performance, direct founder partnership, and zero retainer debt so your business can move fast and win customers.
        </p>
      </div>

      {/* Main Founder Profile Card */}
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl border border-zinc-800/90 bg-zinc-950/90 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-3xl p-1 bg-gradient-to-br from-cyan-500/40 via-zinc-800 to-emerald-500/40 shadow-xl mb-4">
              <div className="w-full h-full rounded-[22px] bg-[#0C0C12] border border-zinc-800 flex flex-col items-center justify-center p-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">Jagadish</h3>
                <span className="text-xs font-mono text-cyan-400 font-semibold">Founder &amp; Engineer</span>
              </div>
            </div>

            <div className="space-y-2 w-full text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                <strong className="text-white block">Amazon</strong>
                <span className="text-zinc-400 text-[11px]">Former Technical Engineer</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                <strong className="text-white block">Turing</strong>
                <span className="text-zinc-400 text-[11px]">Frontier AI Systems (Gemini, Claude)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
              THE STORY &amp; PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              "Why I Started Merqurie in Chennai"
            </h2>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                Throughout my engineering career at <strong className="text-white">Amazon</strong> and developing/evaluating frontier AI models at <strong className="text-white">Turing</strong>, I learned that the best digital products are not the ones weighed down by massive complexity. They are the ones that are fast, intuitive, and relentlessly focused on the user.
              </p>
              <p>
                When looking at how local and growing businesses were being served by website agencies, I saw an industry built on customer lock-in: outdated WordPress templates taking 8 seconds to load, slow customer service, and endless monthly invoices for "maintenance" that didn't deliver any value.
              </p>
              <p>
                Merqurie was built to be the antidote. We engineer modern, mobile-first websites that load in under 1 second, capture direct WhatsApp enquiries, and are 100% owned by the business owner from day one—with ₹0 recurring agency retainers.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat with Jagadish</span>
              </a>

              <button
                onClick={onOpenPrototypeModal}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-zinc-950 hover:bg-zinc-200 flex items-center gap-1.5 shadow-md transition-all active:scale-95"
              >
                <span>Request Free Sample</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Guiding Principles */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white text-center">
          Our Four Non-Negotiable Standards
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Sub-1.0s Speed on Edge Networks',
              desc: 'Every millisecond of delay costs conversions. We deploy decoupled frontend code globally so mobile visitors experience instant loading.',
            },
            {
              title: '1-Tap Direct WhatsApp Conversion',
              desc: 'We eliminate cumbersome contact forms. Interested prospects can chat directly with your business in one single tap.',
            },
            {
              title: 'Zero Recurring Retainer Fees',
              desc: 'You fund the website once, and you own it forever. We believe in earning client trust through quality craft, not recurring lock-in.',
            },
            {
              title: '10-Second Phone Control',
              desc: 'You should never need to wait 5 days for a simple price or text update. Every site includes a self-serve phone cockpit.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">STANDARD 0{idx + 1}</span>
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
