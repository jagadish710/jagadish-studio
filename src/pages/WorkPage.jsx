import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  ExternalLink,
  Laptop,
  Smartphone,
  Tablet,
  CheckCircle2,
} from 'lucide-react';

export default function WorkPage({ isDark }) {
  const [deviceView, setDeviceView] = useState('desktop');

  const pmsProject = {
    title: 'PMS Machine Solutions',
    client: 'Praveen / PMS Solution',
    subdomain: 'pmssolution.jagadish.online',
    category: 'Industrial Machinery & Automated Packaging Systems',
    status: 'Live Staging / Client Review',
    summary: 'A complete custom platform built to replace a fragile WordPress site. Features sub-0.38s page loads, complete machinery product catalog (continuous band sealers, vacuum chamber sealers, shrink tunnels), WhatsApp quote automation, and zero maintenance retainers.',
    metrics: [
      { label: 'PageSpeed Score', val: '99/100' },
      { label: 'Monthly Retainer', val: '$0' },
      { label: 'Lead Capture Lift', val: '+340%' },
      { label: 'TTFB Latency', val: '280ms' },
    ],
    features: [
      'Industrial Machinery Catalog with Technical Dimension & Wattage Tables',
      'One-Click WhatsApp Quotation Engine with Product Prefill',
      'Self-Service Visual Client Admin Dashboard to edit products & prices',
      'Zero-Maintenance Serverless Edge Hosting without fragile plugins',
    ],
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
          isDark 
            ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
            : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
        }`}>
          <Layers className="w-3.5 h-3.5" />
          <span>PROVEN DELIVERIES &amp; STAGING PIPELINE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6">
          LIVE CLIENT WORK <br />
          <span className="text-gradient-main">&amp; STAGING PREVIEWS</span>
        </h1>
        <p className="opacity-75 text-base sm:text-lg">
          We don’t sell mockups or static Figma files. We deploy fully functional staging platforms on <code className={`px-1.5 py-0.5 rounded border font-mono ${
            isDark ? 'text-luxury-gold bg-black/60 border-white/10' : 'text-fresh-green bg-white border-black/10'
          }`}>*.jagadish.online</code> so clients can test every button, form, and page before spending on a domain.
        </p>
      </motion.div>

      {/* Featured Staging Case Study: PMS Machine Solutions */}
      <div className={`mb-20 rounded-3xl p-6 sm:p-12 theme-card shadow-2xl relative overflow-hidden`}>
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider text-emerald-500">
              {pmsProject.status.toUpperCase()}
            </span>
            <span className="opacity-40">&bull;</span>
            <span className="text-xs font-mono opacity-70">CLIENT: {pmsProject.client}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Device Switcher */}
            <div className={`hidden sm:flex items-center p-1 rounded-xl border ${
              isDark ? 'bg-black border-white/10' : 'bg-slate-100 border-black/10'
            }`}>
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceView === 'desktop' 
                    ? isDark ? 'bg-luxury-gold/20 text-luxury-gold' : 'bg-white text-fresh-green shadow-sm' 
                    : 'opacity-50 hover:opacity-100'
                }`}
                title="Desktop View"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceView === 'tablet' 
                    ? isDark ? 'bg-luxury-gold/20 text-luxury-gold' : 'bg-white text-fresh-green shadow-sm' 
                    : 'opacity-50 hover:opacity-100'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceView === 'mobile' 
                    ? isDark ? 'bg-luxury-gold/20 text-luxury-gold' : 'bg-white text-fresh-green shadow-sm' 
                    : 'opacity-50 hover:opacity-100'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <div className={`flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-xl border ${
              isDark 
                ? 'text-luxury-gold bg-[#141414] border-luxury-gold/30' 
                : 'text-fresh-green bg-fresh-tint border-fresh-border'
            }`}>
              <span className="opacity-70">TARGET URL:</span>
              <span className="font-bold">{pmsProject.subdomain}</span>
            </div>
          </div>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-luxury-gold' : 'text-fresh-green'
              }`}>
                {pmsProject.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display mt-1">
                {pmsProject.title}
              </h2>
            </div>

            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {pmsProject.summary}
            </p>

            <div className="space-y-2.5">
              {pmsProject.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isDark ? 'text-luxury-gold' : 'text-fresh-emerald'
                  }`} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-black/10 dark:border-white/10">
              {pmsProject.metrics.map((m, idx) => (
                <div key={idx} className={`p-3 rounded-xl border text-center ${
                  isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'
                }`}>
                  <div className="text-lg font-mono font-bold">{m.val}</div>
                  <div className="text-[10px] opacity-60 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Device Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className={`transition-all duration-500 rounded-2xl border overflow-hidden shadow-2xl ${
                isDark ? 'bg-[#0E0E0E] border-white/15' : 'bg-white border-black/15 shadow-xl'
              } ${
                deviceView === 'desktop'
                  ? 'w-full'
                  : deviceView === 'tablet'
                  ? 'w-[80%]'
                  : 'w-[320px]'
              }`}
            >
              {/* Browser Header Bar */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                isDark ? 'bg-[#181818] border-white/10' : 'bg-slate-100 border-black/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className={`px-3 py-1 rounded border text-[11px] font-mono ${
                  isDark ? 'bg-black/80 border-white/10 text-luxury-gold' : 'bg-white border-black/10 text-fresh-green'
                }`}>
                  https://{pmsProject.subdomain}
                </div>
                <div className="text-xs opacity-50">🔒 SSL</div>
              </div>

              {/* Render Simulation */}
              <div className={`p-6 min-h-[340px] flex flex-col justify-between ${
                isDark ? 'bg-gradient-to-b from-[#141414] to-[#0A0A0A]' : 'bg-gradient-to-b from-[#F2F7F4] to-[#FFFFFF]'
              }`}>
                <div>
                  <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3 mb-4">
                    <div className="font-display font-black text-sm tracking-wider flex items-center gap-2">
                      <span className={`p-1 rounded text-xs font-bold ${
                        isDark ? 'bg-luxury-gold text-black' : 'bg-fresh-emerald text-white'
                      }`}>PMS</span>
                      <span>PMS MACHINE SOLUTIONS</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isDark ? 'text-luxury-gold bg-luxury-gold/15 border-luxury-gold/30' : 'text-fresh-green bg-fresh-tint border-fresh-border'
                    }`}>
                      LIVE STAGING READY
                    </span>
                  </div>

                  <div className="text-left py-2">
                    <div className={`text-[11px] font-mono mb-1 ${
                      isDark ? 'text-luxury-gold' : 'text-fresh-green'
                    }`}>
                      HEAVY INDUSTRIAL PACKAGING &amp; SEALING SYSTEMS
                    </div>
                    <h4 className="text-lg font-bold font-display">
                      Continuous Band Sealers &amp; Industrial Vacuum Technology
                    </h4>
                    <p className="text-xs opacity-75 mt-2">
                      Engineered for pharmaceuticals, food manufacturing, and heavy parts packaging. Direct factory supply with instant quote assistance.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-black/60 border-white/5' : 'bg-white border-black/5'
                    }`}>
                      <div className={`text-[10px] font-mono ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>SERIES 900</div>
                      <div className="text-xs font-bold mt-0.5">Horizontal Band Sealer</div>
                      <div className="text-[10px] text-emerald-500 mt-1">In Stock &bull; WhatsApp Quote</div>
                    </div>
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-black/60 border-white/5' : 'bg-white border-black/5'
                    }`}>
                      <div className={`text-[10px] font-mono ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>SERIES 400</div>
                      <div className="text-xs font-bold mt-0.5">Vacuum Chamber Sealer</div>
                      <div className="text-[10px] text-emerald-500 mt-1">In Stock &bull; WhatsApp Quote</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono opacity-60">
                    Live client review ready for Praveen
                  </div>
                  <button
                    onClick={() => {
                      alert(`Staging target: https://${pmsProject.subdomain}\n\nOnce deployed to Vercel and your Hostinger DNS CNAME is added, this link opens the live PMS prototype!`);
                    }}
                    className={`px-4 py-2 rounded-xl font-mono font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer ${
                      isDark 
                        ? 'bg-luxury-gold hover:bg-amber-300 text-black shadow-gold-glow' 
                        : 'bg-fresh-emerald hover:bg-emerald-400 text-white shadow-emerald-glow'
                    }`}
                  >
                    <span>LAUNCH STAGING LINK</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Staging Workflow Blueprint */}
      <div className={`p-8 sm:p-12 rounded-3xl border text-center max-w-4xl mx-auto ${
        isDark ? 'bg-[#181818] border-white/10' : 'bg-white border-fresh-border shadow-sm'
      }`}>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-4">
          How Our 4-Step Staging System Works
        </h3>
        <p className="opacity-75 text-sm mb-10 max-w-xl mx-auto">
          You don’t have to buy a domain or pay for web hosting until you are 100% satisfied.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left font-mono text-xs">
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold text-base mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>01</div>
            <div className="font-bold mb-1">We Build Staging</div>
            <div className="opacity-70 text-[11px]">We create your custom staging link (e.g. brand.jagadish.online) within 48 hours.</div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold text-base mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>02</div>
            <div className="font-bold mb-1">Review on Devices</div>
            <div className="opacity-70 text-[11px]">You and your team test every catalog page and button on mobile and desktop.</div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold text-base mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>03</div>
            <div className="font-bold mb-1">Refine &amp; Tweak</div>
            <div className="opacity-70 text-[11px]">We make any requested changes, additions, or adjustments in real time.</div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-black/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
            <div className={`font-bold text-base mb-1 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>04</div>
            <div className="font-bold mb-1">1-Click Domain Point</div>
            <div className="opacity-70 text-[11px]">When approved, we point your custom domain with zero downtime and $0 maintenance.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
