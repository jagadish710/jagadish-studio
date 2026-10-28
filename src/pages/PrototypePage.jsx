import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Send,
} from 'lucide-react';
import { saveInquiry } from '../lib/supabase';
import PricingPhilosophy from '../components/PricingPhilosophy';

export default function PrototypePage({ onOpenPrototypeModal, isDark }) {
  const [businessName, setBusinessName] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
      targetUrl: 'jagadish.online',
    });

    setSubmitted(true);

    const msg = encodeURIComponent(
      `Hi Merqurie Team! I would like to initiate an architectural consultation:\n- Organization: ${businessName}\n- Division/Scope: ${projectType}\n- Phone: ${phone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/917358618789?text=${msg}`, '_blank');
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Top Section: The Zero-Maintenance Pricing Manifesto */}
      <PricingPhilosophy onOpenPrototypeModal={onOpenPrototypeModal} isDark={isDark} />

      {/* Clean Consultation Form */}
      <div className={`p-8 sm:p-14 rounded-2xl border max-w-3xl mx-auto shadow-sm ${
        isDark ? 'bg-[#151518] border-white/10' : 'bg-white border-slate-200'
      }`}>
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
            isDark 
              ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-luxury-gold" />
            <span>ARCHITECTURAL CONSULTATION &bull; DIRECT DESK</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold font-display mb-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Discuss Your System Requirements
          </h2>

          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Submit your organizational parameters below. Our principal engineering advisory will review and respond directly via WhatsApp.
          </p>
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
                placeholder="e.g. Apex Industrial Systems / Your Brand"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                  isDark 
                    ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
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
                    : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                }`}
              >
                <option value="Business Website">Business Website</option>
                <option value="Premium Custom Website">Premium Custom Website</option>
                <option value="E-Commerce & Online Store">E-Commerce &amp; Online Store</option>
                <option value="Industrial Machinery Catalog">Industrial Machinery &amp; Product Catalog</option>
                <option value="Academy / Sports Club Portal">Academy / Sports Club Portal</option>
                <option value="Custom Business Software & ERP">Custom Business Software &amp; ERP</option>
                <option value="Website Redesign">Website Redesign (Modern UI &amp; Speed)</option>
              </select>
            </div>

            <div>
              <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
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
                    : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                }`}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all hover:scale-101 active:scale-98 cursor-pointer mt-4 ${
                isDark
                  ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>SUBMIT ENQUIRY</span>
            </button>

            {/* Direct WhatsApp Option */}
            <div className="pt-3 text-center">
              <a
                href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberTone('click')}
                className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-101 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </form>
        ) : (
          <div className="py-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white">
              Enquiry Submitted!
            </h3>

            <p className="text-sm text-zinc-300">
              Thank you, <strong className="text-white font-bold">{businessName}</strong>. We are opening WhatsApp to connect directly with you right now.
            </p>

            <a
              href={`https://wa.me/917358618789?text=${encodeURIComponent(
                `Hi Merqurie Team! I submitted an enquiry for "${businessName}" (${projectType}). Phone: ${phone}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-mono font-bold text-xs shadow-md mt-4 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
