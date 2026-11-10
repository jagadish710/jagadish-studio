import React from 'react';
import { X, Check, ShieldCheck, ArrowRight, Sparkles, AlertTriangle, Zap, MessageSquare, Smartphone, Ban, Lock, UserCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20want%20to%20learn%20more%20about%20the%20Merqurie%20approach.';

export default function ComparisonSection({ onOpenPrototypeModal }) {
  const points = [
    {
      feature: 'Mobile Load Speed',
      typical: '8 to 10 seconds with heavy templates, bloated plugins, and cheap shared hosting.',
      merqurie: 'Under 1 second on any 4G/5G mobile phone via global edge CDN distribution.',
      typicalTag: '8-10s Slow Lag',
      merqurieTag: '< 0.3s Instant Edge',
      icon: Zap,
    },
    {
      feature: 'Customer Enquiry Flow',
      typical: 'Buried contact forms with 12 fields that customers abandon and get lost in spam.',
      merqurie: 'Direct 1-tap WhatsApp chat button with pre-filled enquiry message routed to you.',
      typicalTag: 'Lost in Spam',
      merqurieTag: '1-Tap WhatsApp',
      icon: MessageSquare,
    },
    {
      feature: 'Making Text & Price Edits',
      typical: 'Submit a support ticket, wait 3 to 7 days, and pay extra hourly developer bills.',
      merqurie: 'Edit headlines, prices, and announcements from your smartphone in 10 seconds.',
      typicalTag: '3-7 Days Delay',
      merqurieTag: '10s Phone Cockpit',
      icon: Smartphone,
    },
    {
      feature: 'Monthly Retainer Cost',
      typical: '₹5,000 to ₹15,000 billed every single month just to keep basic templates alive.',
      merqurie: '₹0 monthly retainer fees forever. You pay once for the build, that is all.',
      typicalTag: '₹5k-₹15k/Mo Drain',
      merqurieTag: '₹0 Forever Freedom',
      icon: Ban,
    },
    {
      feature: 'Ownership & Sovereignty',
      typical: 'Agency holds your website hostage on their private hosting or builder account.',
      merqurie: '100% full transfer of source code, domain name, and database to you on day one.',
      typicalTag: 'Agency Lock-In',
      merqurieTag: '100% Client Owned',
      icon: Lock,
    },
    {
      feature: 'Direct Communication',
      typical: 'Passed between junior account managers, interns, and offshore support reps.',
      merqurie: 'Direct WhatsApp communication with Jagadish (Founder & Lead Systems Architect).',
      typicalTag: 'Junior Interns',
      merqurieTag: 'Direct Founder Access',
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FAFAFC] border-t border-slate-200/80">
      
      {/* Dynamic Ambient Background Chromatic Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] rounded-full blur-[150px] pointer-events-none bg-rose-400/15" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full blur-[150px] pointer-events-none bg-emerald-400/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] pointer-events-none bg-sky-400/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-3 bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider font-semibold">HONEST SIDE-BY-SIDE COMPARISON</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.1]">
            How Merqurie is Built <span className="font-serif italic font-normal text-rose-600">Differently.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Most business owners don’t need an inflated retainer contract. They need a fast, reliable website that looks professional and brings in real customer enquiries without recurring headaches.
          </p>
        </div>

        {/* Comparison Cards Grid with Colorful & Designful Backgrounds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: Typical Agency Reality - Designful Coral & Rose Warning Mesh */}
          <div className="rounded-3xl border border-rose-300/80 bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.7),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(254,226,226,0.65),transparent_55%),linear-gradient(to_bottom_right,#FFF1F2,#FFE4E6,#FEF2F2)] p-6 sm:p-9 shadow-xl shadow-rose-950/5 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:border-rose-400 transition-all duration-400">
            {/* Subtle Dotted Matrix Texture */}
            <div className="absolute inset-0 opacity-45 bg-[radial-gradient(#FDA4AF_1.2px,transparent_1.2px)] [background-size:18px_18px] pointer-events-none" />
            
            {/* Ambient Warning Glare */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-rose-400/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-rose-200/90">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-rose-950">
                    Typical Agency Website
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full bg-white/95 text-rose-800 border border-rose-300 font-bold shadow-2xs">
                  Recurring Retainers
                </span>
              </div>

              {/* Pain Point Micro-Cards with Colorful Text & Badges */}
              <div className="space-y-3">
                {points.map((pt, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-rose-200/90 shadow-2xs hover:bg-white hover:border-rose-300 hover:shadow-sm transition-all duration-300 flex items-start gap-3.5 text-xs group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center shrink-0 mt-0.5 text-rose-600 shadow-2xs">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <strong className="text-rose-950 font-mono font-bold uppercase tracking-wider text-[11px]">
                          {pt.feature}
                        </strong>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 border border-rose-200/80 shrink-0">
                          {pt.typicalTag}
                        </span>
                      </div>
                      <p className="text-rose-900/90 text-[12px] leading-relaxed">
                        {pt.typical}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Penalty Result Box */}
            <div className="mt-8 pt-4 border-t border-rose-200/90 relative z-10">
              <div className="p-3.5 rounded-2xl bg-rose-100/90 border border-rose-300/80 flex items-center gap-2.5 text-xs font-mono text-rose-950 font-bold shadow-2xs">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Result: Slow page loads, constant monthly invoices, and lock-in</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Merqurie Engineering - Designful Emerald & Mint Aurora Mesh */}
          <div className="rounded-3xl border-2 border-slate-900 bg-[radial-gradient(ellipse_at_top_right,rgba(167,243,208,0.75),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(254,205,211,0.5),transparent_55%),linear-gradient(to_bottom_right,#ECFDF5,#F0FDF4,#FFF1F2)] p-6 sm:p-9 shadow-2xl shadow-emerald-500/10 flex flex-col justify-between relative overflow-hidden group hover:shadow-3xl hover:border-emerald-600 transition-all duration-400">
            {/* Subtle Emerald Dotted Matrix Texture */}
            <div className="absolute inset-0 opacity-45 bg-[radial-gradient(#6EE7B7_1.2px,transparent_1.2px)] [background-size:18px_18px] pointer-events-none" />
            
            {/* Soft Ambient Radiance Aura */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-emerald-400/25 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-emerald-200/90">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900">
                    The Merqurie Approach
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-xs">
                  Zero Retainer Fees
                </span>
              </div>

              {/* Superpower Micro-Cards with Colorful Text & Badges */}
              <div className="space-y-3">
                {points.map((pt, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-2xs hover:bg-white hover:border-emerald-400 hover:shadow-sm transition-all duration-300 flex items-start gap-3.5 text-xs group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5 text-emerald-700 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <strong className="text-slate-900 font-mono font-bold uppercase tracking-wider text-[11px]">
                          {pt.feature}
                        </strong>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                          {pt.merqurieTag}
                        </span>
                      </div>
                      <p className="text-slate-700 text-[12px] leading-relaxed">
                        {pt.merqurie}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Benefit Banner with Direct Action */}
            <div className="mt-8 pt-4 border-t border-emerald-200/90 relative z-10">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fast, self-sufficient, 100% owned by you</span>
                </span>
                <button
                  onClick={onOpenPrototypeModal}
                  className="w-full sm:w-auto px-4 py-2 rounded-full text-xs font-mono font-bold bg-white text-slate-950 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span>Plan your site</span>
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
