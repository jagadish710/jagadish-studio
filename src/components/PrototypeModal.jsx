import WhatsAppIcon from './WhatsAppIcon';
import React, { useState } from 'react';
import { playCyberTone } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
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

    const cleanBusinessName = (businessName || '').trim().slice(0, 100);
    const cleanPhone = (phone || '').trim().replace(/[^\d+()\s-]/g, '').slice(0, 30);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}

    saveInquiry({
      businessName: cleanBusinessName,
      industry: projectType,
      phone: cleanPhone,
      targetUrl: 'jagadish.online',
    });

    setSubmitted(true);

    const msg = encodeURIComponent(
      `Hi Merqurie Team! I would like to discuss a project:\n- Organization: ${cleanBusinessName}\n- Division/Type: ${projectType}\n- Contact: ${cleanPhone}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/917358618789?text=${msg}`, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border ${
        isDark 
          ? 'bg-[#0E0E12] border-zinc-800 shadow-black/90 text-[#EAEAEA]' 
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
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
              <span>MERQURIE ARCHITECTURAL CONSULTATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mb-2">
              Initiate Consultation &amp; <br />
              <span className={isDark ? 'text-zinc-400' : 'text-slate-600'}>Discuss Technical Scope</span>
            </h3>

            <p className="text-xs sm:text-sm opacity-75 mb-6">
              Connect directly with the Merqurie engineering desk. We review requirements and provide a detailed blueprint.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  Organization / Business Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="e.g. Acme Enterprise / Modern Brand"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-white focus:ring-1 focus:ring-white/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-slate-950 focus:bg-white'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  Target Technology Scope
                </label>
                <select
                  value={projectType}
                  onChange={(e) => {
                    playCyberTone('click');
                    setProjectType(e.target.value);
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors cursor-pointer ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-white' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-slate-950 focus:bg-white'
                  }`}
                >
                  <option value="High-Converting Business Website">High-Converting Business Website</option>
                  <option value="Visual Self-Serve Admin Portal">Visual Self-Serve Admin Portal</option>
                  <option value="Interactive E-Commerce & Online Store">Interactive E-Commerce &amp; Online Store</option>
                  <option value="Industrial Machinery Catalog & RFQ">Industrial Machinery Catalog &amp; RFQ System</option>
                  <option value="Custom Software & Edge Database Architecture">Custom Software &amp; Edge Database Architecture</option>
                  <option value="Website Redesign & Performance Upgrade">Website Redesign (Sub-0.3s Core Web Vitals)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono opacity-80 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  maxLength={30}
                  pattern="[+0-9\s\-()]{7,25}"
                  title="Please enter a valid phone number with country code"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-zinc-900 border-zinc-700 text-white focus:border-white focus:ring-1 focus:ring-white/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-slate-950 focus:bg-white'
                  }`}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-101 active:scale-95 cursor-pointer shadow-md mt-2 ${
                  isDark
                    ? 'bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm'
                    : 'bg-slate-950 hover:bg-slate-800 text-white shadow-sm'
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
                isDark ? 'bg-[#0E0E12]' : 'bg-white'
              }`}>
                or connect directly
              </span>
            </div>

            {/* Direct WhatsApp Callout: Solid Green */}
            <a
              href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20looking%20for%20a%20website%20solution."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCyberTone('click')}
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
              <span>Chat on WhatsApp Directly</span>
            </a>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-bold font-display text-white">
              Enquiry Received!
            </h4>

            <p className="text-sm text-zinc-300 max-w-sm mx-auto">
              Thank you, <strong className="text-white font-bold">{businessName}</strong>. We are opening WhatsApp to connect directly with you right now.
            </p>

            <a
              href={`https://wa.me/917358618789?text=${encodeURIComponent(
                `Hi Merqurie Team! I just submitted an enquiry for "${businessName}" (${projectType}). Phone: ${phone}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-mono font-bold text-xs shadow-md mt-4 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 fill-current" />
              <span>Open WhatsApp Conversation</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
