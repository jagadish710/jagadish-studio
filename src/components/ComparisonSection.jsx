import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  Zap, 
  MessageSquare, 
  Smartphone, 
  Ban, 
  Lock, 
  CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20want%20to%20learn%20more%20about%20the%20Merqurie%20approach.';

export default function ComparisonSection({ onOpenPrototypeModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const points = [
    {
      id: 'speed',
      feature: 'Mobile Load Speed',
      typical: 'Takes 8 to 10 seconds to load on mobile. Heavy WordPress templates and 42 plugins cause 53% of customers to close the tab before seeing your phone number.',
      merqurie: 'Loads in 0.24 seconds on any 4G or 5G phone. Deployed on global edge servers so customers see your offer and WhatsApp button instantly.',
      typicalTag: '8-10s Lag (53% Bounce)',
      merqurieTag: '0.24s Instant Edge Speed',
      icon: Zap,
    },
    {
      id: 'flow',
      feature: 'Customer Enquiry Flow',
      typical: 'Buries your customer in a 12-field form with CAPTCHAs. Inquiries get lost in spam folders and take 3 days to answer.',
      merqurie: '1-tap WhatsApp button connects the customer straight to your phone with their product question already pre-filled. You close leads in real-time.',
      typicalTag: 'Long Forms Lost in Spam',
      merqurieTag: '1-Tap Direct WhatsApp Chat',
      icon: MessageSquare,
    },
    {
      id: 'cost',
      feature: 'Ongoing Maintenance & Support',
      typical: 'Traditional agencies bundle basic plugin updates into expensive ongoing retainer contracts that lock you in year after year.',
      merqurie: 'Zero forced contracts. You pay once for your build, own every line of code outright, and receive 30 days of launch support included.',
      typicalTag: 'Mandatory Retainer Lock-in',
      merqurieTag: 'Pay Once • 100% Lifetime Ownership',
      icon: Ban,
    },
    {
      id: 'edits',
      feature: 'Changing Text & Prices',
      typical: 'Raise a support ticket, wait 3 to 7 days, and get an extra bill just to change a price or add a holiday announcement.',
      merqurie: 'Open your mobile phone admin cockpit and change headlines, prices, and photos in 10 seconds yourself with zero developer dependency.',
      typicalTag: '5-Day Developer Delay',
      merqurieTag: '10-Second Phone Cockpit',
      icon: Smartphone,
    },
    {
      id: 'ownership',
      feature: 'Full Code & Domain Ownership',
      typical: 'The agency keeps your domain and files on their private server. If you leave them, your website gets taken down.',
      merqurie: '100% code, domain, and database transfer to your name on day one. You own your digital asset outright.',
      typicalTag: 'Held Hostage by Agency',
      merqurieTag: '100% Client Sovereign',
      icon: Lock,
    },
  ];

  const filteredPoints = activeFilter === 'all' ? points : points.filter((p) => p.id === activeFilter);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-rose-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-50 border border-rose-200 text-rose-800 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">THE UNVARNISHED TRUTH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight mb-4 font-display">
            Traditional Agency Lock-In vs.{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Merqurie Freedom.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Here is the side-by-side breakdown in plain, simple terms so you know exactly what you are paying for and why our clients never pay a monthly retainer again.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
            {[
              { id: 'all', label: 'All 5 Key Comparisons' },
              { id: 'speed', label: '⚡ Speed' },
              { id: 'flow', label: '💬 WhatsApp Flow' },
              { id: 'cost', label: '💰 ₹0 Retainer' },
              { id: 'edits', label: '📱 10s Phone Edits' },
              { id: 'ownership', label: '🔒 100% Ownership' },
            ].map((pill) => {
              const isSelected = activeFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-rose-50 text-rose-700 font-bold border-2 border-rose-500 shadow-sm scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 shadow-2xs'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Cards Stack with Colorful & Designful Backgrounds */}
        <div className="space-y-6">
          {filteredPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-slate-300 transition-all duration-300"
              >
                {/* Header of Feature */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                      COMPARISON 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      {item.feature}
                    </h3>
                  </div>
                </div>

                {/* 2-Column Side-by-Side Colorful Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  
                  {/* Traditional Agency Card: Warning Aesthetic */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200 text-slate-900 shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                          <X className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>Typical Website Agency</span>
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 font-bold">
                          {item.typicalTag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-rose-950/80 leading-relaxed">
                        {item.typical}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-rose-200 flex items-center gap-2 text-[11px] font-mono text-rose-800">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Causes customer drop-off &amp; ongoing bills</span>
                    </div>
                  </div>

                  {/* Merqurie Freedom Card: Cyber Emerald / Cyan Vibrant Aesthetic */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border-2 border-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/10 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Merqurie Architecture</span>
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-600" />
                          <span>{item.merqurieTag}</span>
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {item.merqurie}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-200 flex items-center gap-2 text-[11px] font-mono text-emerald-800 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span>You get instant customer inquiries &amp; zero monthly fees</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-200/50">
          <div className="text-left">
            <h4 className="text-xl font-bold text-slate-950 tracking-tight">
              Ready to own your website outright with zero ongoing fees?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We build your working sample website first. You test it on your own phone before spending a single rupee.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Discuss on WhatsApp</span>
            </a>

            <button
              onClick={onOpenPrototypeModal}
              className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25 transition-all cursor-pointer hover:brightness-105"
            >
              <span>Get Free Blueprint</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
