import React from 'react';
import { X, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20want%20to%20learn%20more%20about%20the%20Merqurie%20approach.';

export default function ComparisonSection({ onOpenPrototypeModal }) {
  const points = [
    {
      feature: 'Mobile Load Speed',
      typical: '8 to 10 seconds (heavy templates, bloated plugins, slow shared hosting)',
      merqurie: 'Under 1 second on any 4G/5G mobile phone via global edge distribution',
    },
    {
      feature: 'Customer Enquiry Flow',
      typical: 'Buried contact forms that clients rarely fill out and get lost in spam',
      merqurie: 'Direct 1-tap WhatsApp chat button with pre-filled enquiry message',
    },
    {
      feature: 'Making Text & Price Edits',
      typical: 'Submit a ticket, wait 3 to 7 days, and pay extra hourly developer fees',
      merqurie: 'Edit headlines, prices, and announcements from your phone in 10 seconds',
    },
    {
      feature: 'Monthly Retainer Cost',
      typical: '₹5,000 to ₹15,000 every single month just to maintain basic templates',
      merqurie: '₹0 monthly retainer fees forever. You pay once for the build, that is all',
    },
    {
      feature: 'Ownership & Intellectual Property',
      typical: 'Agency holds your website hostage on their private hosting or builder account',
      merqurie: '100% full transfer of source code, domain name, and database to you on day one',
    },
    {
      feature: 'Direct Communication',
      typical: 'Passed between junior account managers, interns, and offshore support',
      merqurie: 'Direct WhatsApp communication with Jagadish (Founder & Lead Engineer)',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#07070A] border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider">CLEAR COMPARISON</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
            How Merqurie is Built Differently
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Most business owners don’t need a complicated enterprise contract. They need a fast, reliable website that looks professional and brings in real customer enquiries.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT: Typical Agency */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/60 border border-rose-900/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-900/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-rose-400">
                    Typical Agency Website
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Recurring Retainers
                </span>
              </div>

              <div className="space-y-4">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-rose-400" />
                    </div>
                    <div>
                      <strong className="text-zinc-300 block font-medium">{pt.feature}</strong>
                      <span className="text-zinc-400 leading-snug">{pt.typical}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-900/30 text-center">
              <span className="text-xs font-mono text-zinc-400">
                Result: Slow performance, constant bills, frustration
              </span>
            </div>
          </div>

          {/* RIGHT: Merqurie Approach */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F111A] border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.08)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
                    The Merqurie Approach
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  Zero Retainer Fees
                </span>
              </div>

              <div className="space-y-4">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div>
                      <strong className="text-white block font-medium">{pt.feature}</strong>
                      <span className="text-zinc-300 leading-snug">{pt.merqurie}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Result: Fast, self-sufficient, 100% yours
              </span>
              <button
                onClick={onOpenPrototypeModal}
                className="text-xs font-mono text-white hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Plan your site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
