import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  ArrowRight,
  Globe,
  CheckCircle2,
  Edit2,
} from 'lucide-react';
import { saveInquiry } from '../lib/supabase';

export default function PrototypeModal({ isOpen, onClose, isDark }) {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Industrial / Machinery / Manufacturing');
  const [customIndustry, setCustomIndustry] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const displayIndustry = industry === 'Other' ? (customIndustry || 'Custom Solutions') : industry;

  const cleanSlug = businessName
    ? businessName.toLowerCase().replace(/[^a-z0-9]/g, '')
    : 'yourbrand';

  const handleSubmit = (e) => {
    e.preventDefault();
    playCyberTone('success');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }

    // Persist to Supabase if configured
    saveInquiry({
      businessName,
      industry: displayIndustry,
      phone,
      targetUrl: `${cleanSlug}.jagadish.online`,
    });

    const msg = encodeURIComponent(
      `Hi Jagadish! I would like to request a 48-hour live staging prototype for my business: "${businessName}" (${displayIndustry}). Staging preview target: ${cleanSlug}.jagadish.online. My phone: ${phone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border ${
        isDark 
          ? 'bg-[#181818] border-luxury-gold/40 shadow-black/90 text-[#EAEAEA]' 
          : 'bg-white border-fresh-border shadow-emerald-950/20 text-[#0C1F16]'
      }`}>
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberTone('click');
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border ${
              isDark 
                ? 'bg-luxury-gold/10 border-luxury-gold/30 text-luxury-gold' 
                : 'bg-fresh-tint border-fresh-border text-fresh-green'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>NO COMMITMENT &bull; 100% FREE PREVIEW</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-2">
              CLAIM YOUR 48-HOUR <br />
              <span className="text-gradient-main">LIVE STAGING PROTOTYPE</span>
            </h3>

            <p className="text-xs sm:text-sm opacity-75 mb-6">
              Experience your business on a live subdomain with zero upfront domain purchases or retainers.
            </p>

            {/* Live Subdomain Generator Preview */}
            <div className={`p-3.5 rounded-xl border mb-6 flex items-center gap-3 font-mono text-xs ${
              isDark 
                ? 'bg-[#121212] border-luxury-gold/30' 
                : 'bg-fresh-tint border-fresh-border'
            }`}>
              <Globe className={`w-4 h-4 shrink-0 ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`} />
              <span className="opacity-70">Target Staging URL:</span>
              <span className={`font-bold truncate ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>
                {cleanSlug}.jagadish.online
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Industrial Systems"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                      : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  Industry / Product Line
                </label>
                <select
                  value={industry}
                  onChange={(e) => {
                    playCyberTone('click');
                    setIndustry(e.target.value);
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors cursor-pointer ${
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

              {/* Dynamic Input if "Other" is selected */}
              {industry === 'Other' && (
                <div className={`p-3 rounded-xl border animate-fade-in ${
                  isDark ? 'bg-luxury-gold/10 border-luxury-gold/30' : 'bg-fresh-tint border-fresh-border'
                }`}>
                  <label className={`block text-xs font-mono mb-1 flex items-center gap-1.5 ${
                    isDark ? 'text-luxury-gold' : 'text-fresh-green'
                  }`}>
                    <Edit2 className="w-3 h-3" />
                    <span>Enter Your Custom Industry / Product Type:</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Solar Energy, Organic Foods, Drone Tech..."
                    value={customIndustry}
                    onChange={(e) => setCustomIndustry(e.target.value)}
                    className={`w-full px-3.5 py-2 rounded-lg border text-sm focus:outline-none ${
                      isDark 
                        ? 'bg-[#121212] border-luxury-gold/40 text-white focus:border-luxury-gold' 
                        : 'bg-white border-fresh-border text-fresh-forest focus:border-fresh-emerald'
                    }`}
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
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
                  className={`w-full py-3.5 rounded-xl font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                    isDark 
                      ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
                      : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
                  }`}
                >
                  <span>GENERATE PROTOTYPE INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce border ${
              isDark 
                ? 'bg-luxury-gold/15 text-luxury-gold border-luxury-gold/30' 
                : 'bg-fresh-tint text-fresh-green border-fresh-border'
            }`}>
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold font-display">
              Prototype Request Dispatched!
            </h4>

            <p className="text-sm opacity-80 max-w-sm mx-auto">
              Redirecting you to WhatsApp with your staging specifications for{' '}
              <strong className={isDark ? 'text-luxury-gold' : 'text-fresh-green'}>{cleanSlug}.jagadish.online</strong> ({displayIndustry}).
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl border text-xs font-mono opacity-80 hover:opacity-100"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
