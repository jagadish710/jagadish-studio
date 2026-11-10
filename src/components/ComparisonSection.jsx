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
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
      feature: 'Monthly Agency Retainers',
      typical: 'Agencies charge you ₹5,000 to ₹15,000 every single month just for "maintenance" and "plugin updates" that do not bring you any new sales.',
      merqurie: '₹0 monthly retainer fees forever. You pay once for the build, and it is 100% yours forever. Zero recurring debt.',
      typicalTag: '₹5k-₹15k/Mo Drain (₹1.2L/yr)',
      merqurieTag: '₹0 Forever Freedom',
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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070814] text-white border-t border-white/10">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-rose-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-emerald-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-rose-950/80 to-purple-950/80 border border-rose-500/30 text-rose-300 mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="uppercase tracking-wider">THE UNVARNISHED TRUTH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 font-display">
            Traditional Agency Lock-In vs.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Merqurie Freedom.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
                      ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold shadow-lg shadow-rose-900/40 border border-rose-400/40 scale-105'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
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
                className="rounded-3xl border border-white/15 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300"
              >
                {/* Header of Feature */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/20 to-purple-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      COMPARISON 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.feature}
                    </h3>
                  </div>
                </div>

                {/* 2-Column Side-by-Side Colorful Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  
                  {/* Traditional Agency Card: Red/Burgundy Warning Aesthetic */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-red-950/50 via-slate-900/90 to-rose-950/40 border border-red-500/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                          <X className="w-4 h-4 text-rose-500 shrink-0" />
                          <span>Typical Website Agency</span>
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-red-950 border border-red-500/40 text-red-300 font-bold">
                          {item.typicalTag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.typical}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-red-500/20 flex items-center gap-2 text-[11px] font-mono text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>Causes customer frustration & ongoing bills</span>
                    </div>
                  </div>

                  {/* Merqurie Freedom Card: Cyber Emerald / Cyan Vibrant Aesthetic */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900/90 to-cyan-950/50 border-2 border-emerald-500/60 shadow-2xl shadow-emerald-500/15 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Merqurie Architecture</span>
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-400/50 text-emerald-300 font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                          <span>{item.merqurieTag}</span>
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                        {item.merqurie}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-500/30 flex items-center gap-2 text-[11px] font-mono text-emerald-300 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                      <span>You get instant customer inquiries & zero monthly fees</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950/50 to-slate-900 border border-rose-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-xl font-bold text-white tracking-tight">
              Ready to free your business from monthly retainer debt?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We build your working sample website first. You test it on your own phone before spending a single rupee.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Discuss on WhatsApp</span>
            </a>

            <button
              onClick={onOpenPrototypeModal}
              className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-900/30 transition-all cursor-pointer"
            >
              <span>Get Free Blueprint</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
