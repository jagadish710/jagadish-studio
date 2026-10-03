import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Send,
} from 'lucide-react';
import { saveInquiry } from '../lib/supabase';
import PricingPhilosophy from '../components/PricingPhilosophy';

export default function PrototypePage({ onOpenPrototypeModal, isDark }) {
  const [businessName, setBusinessName] = useState('');
  const [projectType, setProjectType] = useState('Business Website (Under ₹15,000)');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const cleanSlug = businessName
    ? businessName.toLowerCase().replace(/[^a-z0-9]/g, '')
    : 'yourbusiness';

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
      industry: projectType,
      phone,
      targetUrl: `${cleanSlug}.jagadish.online`,
    });

    setSubmitted(true);

    const msg = encodeURIComponent(
      `Hi Jagadish! I would like to request a quote for my business:\n- Business Name: ${businessName}\n- Project Type: ${projectType}\n- Phone: ${phone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/917358618789?text=${msg}`, '_blank');
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Top Section: The Zero-Maintenance Pricing Manifesto */}
      <PricingPhilosophy onOpenPrototypeModal={onOpenPrototypeModal} isDark={isDark} />

      {/* Free Quote & Consultation Form */}
      <div className={`p-8 sm:p-14 rounded-3xl border max-w-4xl mx-auto shadow-2xl ${
        isDark ? 'bg-[#18181D] border-[#8B5CF6]/40' : 'bg-white border-black/10'
      }`}>
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-4 border ${
            isDark 
              ? 'bg-[#1C1829] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
              : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>FREE CONSULTATION &bull; ZERO OBLIGATION</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold font-display mb-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Request a Free Quote &amp; Preview
          </h2>

          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Enter your brand details below. We will analyze your project and connect with you on WhatsApp with a free live staging preview on <code className={`font-mono px-1.5 py-0.5 rounded border ${
              isDark ? 'text-luxury-gold bg-black/60 border-white/10' : 'text-fresh-green bg-white border-black/10'
            }`}>*.jagadish.online</code>.
          </p>
        </div>

        {/* Dynamic URL Card Preview */}
        <div className={`p-4 rounded-2xl border mb-8 flex items-center justify-between font-mono text-xs max-w-xl mx-auto ${
          isDark ? 'bg-black/60 border-luxury-gold/40' : 'bg-fresh-tint border-fresh-border'
        }`}>
          <div className="flex items-center gap-2.5 truncate">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
              isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'
            }`} />
            <span className={`opacity-70 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Preview URL:</span>
            <span className={`font-bold text-sm truncate ${
              isDark ? 'text-luxury-gold' : 'text-fresh-green'
            }`}>
              {cleanSlug}.jagadish.online
            </span>
          </div>
          <span className="text-[10px] opacity-60 hidden sm:inline">FREE SSL INCLUDED</span>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
            <div>
              <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Business / Company Name
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
              <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Project Type / Website Need
              </label>
              <select
                value={projectType}
                onChange={(e) => {
                  playCyberTone('click');
                  setProjectType(e.target.value);
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors cursor-pointer ${
                  isDark 
                    ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                    : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                }`}
              >
                <option value="Business Website (Under ₹15,000)">Business Website (Under ₹15,000)</option>
                <option value="Starter Website (Under ₹10,000)">Starter Website (Under ₹10,000)</option>
                <option value="Luxury Custom Website (Under ₹20,000)">Luxury Custom Website (Under ₹20,000)</option>
                <option value="E-Commerce & Online Store">E-Commerce &amp; Online Store</option>
                <option value="Industrial Machinery Catalog">Industrial Machinery Catalog &amp; Quote Engine</option>
                <option value="Academy / Sports Club Portal">Academy / Sports Club Portal</option>
                <option value="Custom Business Software & ERP">Custom Business Software &amp; ERP</option>
              </select>
            </div>

            <div>
              <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+91 73586 18789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                    : 'bg-white border-black/15 text-fresh-forest focus:border-fresh-emerald'
                }`}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-all hover:scale-102 active:scale-98 cursor-pointer mt-4 ${
                isDark
                  ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                  : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>SUBMIT ENQUIRY FOR FREE QUOTE</span>
            </button>

            {/* Direct WhatsApp Option */}
            <div className="pt-4 text-center">
              <a
                href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20interested%20in%20a%20website%20solution."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberTone('click')}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-102 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Directly on WhatsApp (+91 73586 18789)</span>
              </a>
            </div>
          </form>
        ) : (
          <div className="py-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className={`text-2xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Enquiry Submitted!
            </h3>

            <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Thank you, <strong className={isDark ? 'text-luxury-gold' : 'text-fresh-green'}>{businessName}</strong>. We are opening WhatsApp to share your quote and project details with Jagadish right now.
            </p>

            <a
              href={`https://wa.me/917358618789?text=${encodeURIComponent(
                `Hi Jagadish! I submitted an enquiry for "${businessName}" (${projectType}). Phone: ${phone}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-mono font-bold text-xs shadow-md mt-4"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Open WhatsApp Chat (+91 73586 18789)</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
