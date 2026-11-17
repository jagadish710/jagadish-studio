import React from 'react';
import LiveSpeedRaceSimulator from './LiveSpeedRaceSimulator';

export default function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-20 relative border-t border-white/5 bg-ocean-950/70 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-crimson-400 font-mono">
            The Business Reality Check
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Is Your Website <span className="text-gold-gradient">Making Money or Losing Leads?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            84% of customers open your website on a smartphone over 4G/5G mobile data. Here is what happens when they click your link:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Typical Agency / WordPress Site */}
          <div className="glass-card rounded-3xl p-7 sm:p-8 border-crimson-500/30 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-crimson-500/15 border border-crimson-400/30 text-xs font-extrabold text-crimson-300 font-mono">
                ✕ Typical Agency / WordPress Site
              </span>
              <span className="font-display text-lg font-bold text-crimson-400">
                6–9 Sec Load
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              The Leaky Bucket Problem
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-crimson-400 font-bold mt-0.5">✕</span>
                <span>
                  <strong className="text-white">White loading screen for 7 seconds:</strong> Impatient mobile visitors close the tab and click the next Google result.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crimson-400 font-bold mt-0.5">✕</span>
                <span>
                  <strong className="text-white">Hard-to-find contact forms:</strong> Customers hate filling out 8 fields when they just want a quick quote on WhatsApp.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crimson-400 font-bold mt-0.5">✕</span>
                <span>
                  <strong className="text-white">Hostage monthly fees:</strong> Agencies charge ongoing maintenance just to update plugins or change one phone number.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crimson-400 font-bold mt-0.5">✕</span>
                <span>
                  <strong className="text-white">Outdated template look:</strong> Looks identical to 500 other businesses, hurting your brand authority.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: The Merqurie Edge Engine */}
          <div className="glass-card rounded-3xl p-7 sm:p-8 border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-xs font-extrabold text-emerald-300 font-mono">
                ✓ The Merqurie Edge Architecture
              </span>
              <span className="font-display text-lg font-bold text-emerald-400">
                0.24 Sec Load
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              24/7 Customer Conversion Machine
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>
                  <strong className="text-white">Opens before they blink (0.24s):</strong> Global edge servers deliver your site instantaneously even on weak mobile signals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>
                  <strong className="text-white">1-Tap Pre-Filled WhatsApp Leads:</strong> Buyers tap once and message you directly with the exact product or package they want.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>
                  <strong className="text-white">10-Second Phone Admin Panel:</strong> Change prices, banners, or photos yourself from your phone browser—₹0 monthly retainer.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>
                  <strong className="text-white">Bespoke High-Trust Craft:</strong> Custom interactive design that positions you as the #1 authority in your industry.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Live Mobile 4G Speed Race Simulator */}
        <LiveSpeedRaceSimulator />

      </div>
    </section>
  );
}
