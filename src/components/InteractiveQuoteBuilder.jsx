import React, { useState } from 'react';
import { Check, ShieldCheck, Smile, CreditCard } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function InteractiveQuoteBuilder() {
  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Growth Engine',
    scope: 'Catalog + WhatsApp orders',
  });
  const [addons, setAddons] = useState({
    mascot: false,
    payments: false,
  });
  const [businessName, setBusinessName] = useState('');

  const plans = [
    {
      name: 'Starter Edge',
      shortName: 'Starter Edge',
      scope: '5-page presence build',
      color: 'text-cyanline-400',
    },
    {
      name: 'Growth Engine',
      shortName: 'Growth Engine',
      scope: 'Catalog + WhatsApp orders',
      color: 'text-treasure-400',
      popular: true,
    },
    {
      name: 'Custom Cloud',
      shortName: 'Custom Cloud',
      scope: 'Portals & custom apps',
      color: 'text-crimson-400',
    },
  ];

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleWhatsApp = () => {
    const cleanBiz = businessName.trim() || 'my business';
    const chosenAddons = [];
    if (addons.mascot) chosenAddons.push('Interactive 3D Motion Companion');
    if (addons.payments) chosenAddons.push('Stripe, Wise, Cards & UPI Checkout');
    const addonText = chosenAddons.length ? ` + ${chosenAddons.join(', ')}` : '';

    const text = encodeURIComponent(
      `Hi Merqurie! I would like to claim my Free 24h Website Sample for ${cleanBiz}.\n` +
      `Selected package: ${selectedPlan.name}${addonText}.\n` +
      `Please share the investment and timeline for this scope in a written proposal.`
    );

    window.open(`https://wa.me/917358618789?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote-builder" className="py-20 relative border-t border-white/5 bg-ocean-950/80 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="glass-card rounded-3xl p-6 sm:p-10 border-treasure-400/35">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Builder Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-400 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero-Risk Offer • No Payment Today</span>
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
                  Claim Your Free 24h Website Sample
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Pick your package below and tell us your business name. We'll build a working sample homepage for your brand within 24 hours so you can test it on your phone before committing to anything.
                </p>
              </div>

              {/* 1. Base Plan Selector */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2.5 font-mono">
                  1. Choose Your Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {plans.map((p) => {
                    const isSelected = selectedPlan.name === p.name;
                    return (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setSelectedPlan(p)}
                        className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-2 border-treasure-400 bg-treasure-500/15 shadow-md shadow-amber-500/10'
                            : 'border border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="font-bold text-xs text-white flex items-center justify-between">
                          <span>{p.shortName}</span>
                          {p.popular && (
                            <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-mono font-bold">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <div className={`font-display text-sm font-bold ${p.color} mt-1`}>
                          {p.scope}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Optional Power-Ups */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2.5 font-mono">
                  2. Optional Power-Ups
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    onClick={() => toggleAddon('mascot')}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                      addons.mascot
                        ? 'border-treasure-400 bg-treasure-500/10'
                        : 'bg-white/5 border-white/10 hover:border-treasure-400/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={addons.mascot}
                      onChange={() => {}}
                      aria-label="Add Interactive 3D Motion Companion"
                      className="w-4 h-4 accent-amber-400 rounded mt-0.5 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-200 flex items-center gap-1">
                        <Smile className="w-3.5 h-3.5 text-treasure-400" />
                        <span>Interactive 3D Motion Companion</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Animated guide with audio &amp; touch reactions explaining your services.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => toggleAddon('payments')}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                      addons.payments
                        ? 'border-treasure-400 bg-treasure-500/10'
                        : 'bg-white/5 border-white/10 hover:border-treasure-400/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={addons.payments}
                      onChange={() => {}}
                      aria-label="Add Stripe, Wise, Cards and UPI instant checkout"
                      className="w-4 h-4 accent-amber-400 rounded mt-0.5 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-200 flex items-center gap-1">
                        <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Stripe, Wise &amp; UPI Instant Checkout</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Accept international cards, Wise, Apple Pay, or UPI / Razorpay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Business Name Input */}
              <div>
                <label
                  htmlFor="businessNameInput"
                  className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2 font-mono"
                >
                  3. Your Business Name / Industry
                </label>
                <input
                  id="businessNameInput"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g., Sri Balaji Dental Clinic or Royal Builders"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-treasure-400 transition-colors"
                />
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 rounded-3xl bg-ocean-900 border border-treasure-400/45 p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-treasure-400 font-mono">
                    YOUR SELECTED SCOPE
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[11px] font-bold font-mono">
                    No Advance
                  </span>
                </div>

                <div className="my-5 text-center">
                  <div className="text-xs font-bold text-cyanline-300 font-display">
                    {selectedPlan.name}
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gold-gradient mt-1">
                    Proposal on request
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    Your exact investment, timeline, and inclusions are shared in a written proposal after a short scope call.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-5 space-y-1.5">
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Includes Free 24h Sample Preview</span>
                  </div>
                  <div className="font-bold text-cyanline-300 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Includes 10-Sec Phone Admin Cockpit</span>
                  </div>
                  <div className="font-bold text-treasure-300 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Zero Mandatory Monthly Retainer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:brightness-110 active:scale-95 text-ocean-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-mono"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-ocean-950 text-ocean-950" />
                  <span>Get My Free Sample on WhatsApp</span>
                </button>

                <p className="text-center text-[11px] font-semibold text-slate-400">
                  Chat directly with Jagadish • Response in under 15 mins
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
