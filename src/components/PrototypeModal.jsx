import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { saveInquiry } from '../lib/supabase';

export default function PrototypeModal({ isOpen, onClose, isDark }) {
  const [businessName, setBusinessName] = useState('');
  const [projectType, setProjectType] = useState('Business Website');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playCyberTone('success');

    try {
      confetti({
        particleCount: 80,
        spread: 70,
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
      `Hi Jagadish! I would like to discuss my project:\n- Business Name: ${businessName}\n- Project Type: ${projectType}\n- Phone: ${phone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/917358618789?text=${msg}`, '_blank');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border ${
        isDark 
          ? 'bg-[#181818] border-luxury-gold/40 shadow-black/90 text-[#EAEAEA]' 
          : 'bg-white border-slate-200 shadow-2xl text-slate-900'
      }`}>
        {/* Close Button */}
        <button
          onClick={() => {
            playCyberTone('click');
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border ${
              isDark 
                ? 'bg-luxury-gold/10 border-luxury-gold/30 text-luxury-gold' 
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-luxury-gold" />
              <span>DIRECT ENQUIRY &bull; FAST RESPONSE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-2">
              Start Your Project &amp; <br />
              <span className="text-gradient-main">Get in Touch</span>
            </h3>

            <p className="text-xs sm:text-sm opacity-75 mb-6">
              Share your business details below or message directly on WhatsApp. We respond within minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Retailers / Your Brand"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  What type of website or software do you need?
                </label>
                <select
                  value={projectType}
                  onChange={(e) => {
                    playCyberTone('click');
                    setProjectType(e.target.value);
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors cursor-pointer ${
                    isDark 
                      ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                  }`}
                >
                  <option value="Business Website">Business Website</option>
                  <option value="Premium Custom Website">Premium Custom Website</option>
                  <option value="E-Commerce & Online Store">E-Commerce &amp; Online Store</option>
                  <option value="Industrial Machinery Catalog">Industrial Machinery &amp; Product Catalog</option>
                  <option value="Academy / School Platform">Academy / School / Sports Club Platform</option>
                  <option value="Custom Business Software & ERP">Custom Software / ERP / Admin Panel</option>
                  <option value="Website Redesign">Website Redesign (Speed &amp; Modern UI)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 73586 18789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-[#121212] border-white/15 text-white focus:border-luxury-gold' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'
                  }`}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-101 active:scale-98 cursor-pointer shadow-md mt-2 ${
                  isDark
                    ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT ENQUIRY</span>
              </button>
            </form>

            <div className="relative my-5 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-white/10" />
              </div>
              <span className={`relative px-3 text-xs font-mono uppercase opacity-60 ${
                isDark ? 'bg-[#181818]' : 'bg-white'
              }`}>
                or connect directly
              </span>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20looking%20for%20a%20website%20solution."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCyberTone('click')}
              className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-101 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp: +91 73586 18789</span>
            </a>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold font-display">
              Enquiry Received!
            </h4>

            <p className="text-sm opacity-80 max-w-sm mx-auto">
              Thank you, <strong className={isDark ? 'text-luxury-gold' : 'text-slate-900 font-bold'}>{businessName}</strong>. We are opening WhatsApp to connect directly with you right now.
            </p>

            <a
              href={`https://wa.me/917358618789?text=${encodeURIComponent(
                `Hi Jagadish! I just submitted an enquiry for "${businessName}" (${projectType}). Phone: ${phone}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-mono font-bold text-xs shadow-md mt-4"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Open WhatsApp Conversation (+91 73586 18789)</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
