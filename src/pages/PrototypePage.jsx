import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Edit2,
} from 'lucide-react';
import { saveInquiry } from '../lib/supabase';
import PricingPhilosophy from '../components/PricingPhilosophy';

export default function PrototypePage({ onOpenPrototypeModal, isDark }) {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Industrial / Machinery / Manufacturing');
  const [customIndustry, setCustomIndustry] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const displayIndustry = industry === 'Other' ? (customIndustry || 'Custom Solutions') : industry;

  const cleanSlug = businessName
    ? businessName.toLowerCase().replace(/[^a-z0-9]/g, '')
    : 'yourcompany';

  const handleSubmit = (e) => {
    e.preventDefault();
    playCyberTone('success');

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
      });
    } catch {}

    saveInquiry({
      businessName,
      industry: displayIndustry,
      phone,
      targetUrl: `${cleanSlug}.jagadish.online`,
    });

    setSubmitted(true);

    const msg = encodeURIComponent(
      `Hi Jagadish! I want to claim a 48-hour live staging prototype for my business: "${businessName}" (${displayIndustry}). Staging subdomain target: ${cleanSlug}.jagadish.online. My phone: ${phone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/917358618789?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Top Section: The Zero-Maintenance Pricing Manifesto */}
      <PricingPhilosophy onOpenPrototypeModal={onOpenPrototypeModal} isDark={isDark} />

      {/* Live Interactive Staging Subdomain Hub */}
      <div className={`p-8 sm:p-14 rounded-3xl theme-card max-w-4xl mx-auto shadow-2xl`}>
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
            isDark 
              ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
              : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
          }`}>
            <Globe className="w-3.5 h-3.5" />
            <span>INSTANT STAGING URL GENERATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-2">
            Claim Your 48-Hour Staging Link
          </h2>
          <p className="opacity-75 text-sm">
            Enter your brand details below to reserve your dedicated review subdomain on <code className={`font-mono px-1.5 py-0.5 rounded border ${
              isDark ? 'text-luxury-gold bg-black/60 border-white/10' : 'text-fresh-green bg-white border-black/10'
            }`}>*.jagadish.online</code> with zero commitment.
          </p>
        </div>

        {/* Dynamic URL Card */}
        <div className={`p-4 rounded-2xl border mb-8 flex items-center justify-between font-mono text-xs max-w-xl mx-auto ${
          isDark ? 'bg-black/80 border-luxury-gold/30' : 'bg-fresh-tint border-fresh-border'
        }`}>
          <div className="flex items-center gap-2.5 truncate">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
            }`} />
            <span className="opacity-70">Target Staging URL:</span>
            <span className={`font-bold text-sm truncate ${
              isDark ? 'text-luxury-gold' : 'text-fresh-green'
            }`}>
              {cleanSlug}.jagadish.online
            </span>
          </div>
          <span className="text-[10px] opacity-60 hidden sm:inline">SSL INCLUDED</span>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
            <div>
              <label className="block text-xs font-mono opacity-80 mb-1.5">
                Business / Enterprise Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Industrial Systems"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                    : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono opacity-80 mb-1.5">
                Industry / Product Line
              </label>
              <select
                value={industry}
                onChange={(e) => {
                  playCyberTone('click');
                  setIndustry(e.target.value);
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors cursor-pointer ${
                  isDark 
                    ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                    : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                }`}
              >
                <option value="Industrial / Machinery / Manufacturing">Industrial / Machinery / Manufacturing</option>
                <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                <option value="Healthcare & Diagnostics">Healthcare & Diagnostics</option>
                <option value="Corporate & Professional Services">Corporate & Professional Services</option>
                <option value="Other">Other (Click to specify your industry)</option>
              </select>
            </div>

            {industry === 'Other' && (
              <div className={`p-3.5 rounded-xl border animate-fade-in ${
                isDark ? 'bg-luxury-gold/10 border-luxury-gold/30' : 'bg-fresh-tint border-fresh-border'
              }`}>
                <label className={`block text-xs font-mono mb-1 flex items-center gap-1.5 ${
                  isDark ? 'text-luxury-gold' : 'text-fresh-green'
                }`}>
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Enter Your Custom Industry or Product Type:</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Solar Energy, Organic Foods, Drone Tech..."
                  value={customIndustry}
                  onChange={(e) => setCustomIndustry(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none ${
                    isDark 
                      ? 'bg-[#121212] border-luxury-gold/40 text-white focus:border-luxury-gold' 
                      : 'bg-white border-fresh-border text-fresh-forest focus:border-fresh-emerald'
                  }`}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-mono opacity-80 mb-1.5">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                    : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                }`}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                onMouseEnter={() => playCyberTone('hover')}
                className={`w-full py-4 rounded-xl font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                  isDark 
                    ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
                    : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
                }`}
              >
                <span>GENERATE 48H STAGING DISPATCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="py-10 text-center space-y-4 max-w-md mx-auto">
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto mb-4 animate-bounce ${
              isDark 
                ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' 
                : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-display">
              Staging Specifications Generated!
            </h4>
            <p className="text-sm opacity-80">
              Redirecting you to WhatsApp to connect directly with Jagadish with your staging requirements for{' '}
              <strong className={isDark ? 'text-luxury-gold' : 'text-fresh-green'}>{cleanSlug}.jagadish.online</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
