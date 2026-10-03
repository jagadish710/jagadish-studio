import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function FaqSection({ isDark }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How is project pricing calculated?',
      a: 'Every project is scoped to your exact business requirements. We believe in 100% transparent, one-time investment with zero recurring monthly or yearly maintenance charges. You own your code, files, and domain completely.',
    },
    {
      q: 'Are there really no monthly or yearly maintenance charges?',
      a: 'Zero. Most traditional web agencies charge recurring monthly fees just to "keep the site online". We build using modern cloud edge technology, meaning you pay once and never receive recurring maintenance bills.',
    },
    {
      q: 'Can I edit text, prices, and products myself without a developer?',
      a: 'Yes. Every project includes your own visual Client Admin Portal. You can log in from your phone or laptop to edit headlines, change prices, add products, and see client inquiries in seconds.',
    },
    {
      q: 'How fast will my website load on mobile phones?',
      a: 'Under 0.4 seconds. Unlike heavy WordPress themes packed with slow plugins, our clean code scores 99+ on Google PageSpeed, giving you top rankings and stopping customers from bouncing.',
    },
    {
      q: 'Can I test and preview the website before launching?',
      a: 'Yes! We set up a live preview staging link for you to test all pages, buttons, and mobile layouts on your phone before connecting your final domain.',
    },
    {
      q: 'How do I start or enquire about a project?',
      a: 'Send a message directly on WhatsApp to +91 73586 18789 or click Enquire Now. Tell us your business requirements, and we will get back to you with a tailored plan.',
    },
  ];

  const toggle = (idx) => {
    playCyberTone('click');
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={`py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t ${
      isDark ? 'border-white/5' : 'border-black/5'
    }`}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
          isDark 
            ? 'bg-[#181818] border-[#673DE6]/40 text-[#A78BFA] shadow-[0_0_20px_rgba(103,61,230,0.3)]' 
            : 'bg-[#F5F2FF] border-[#673DE6]/25 text-[#673DE6]'
        }`}>
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
          EVERYTHING YOU NEED TO KNOW
        </h2>
        <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Clear answers about pricing, ownership, speed, and how we build your digital solution.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4 mb-14">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? isDark
                    ? 'bg-[#18181C] border-[#673DE6]/60 shadow-[0_0_25px_rgba(103,61,230,0.2)]'
                    : 'bg-white border-[#673DE6]/40 shadow-md'
                  : isDark
                    ? 'bg-[#151518] border-white/5 hover:border-white/15'
                    : 'bg-white/80 border-black/5 hover:border-black/15'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className={`text-base sm:text-lg font-bold font-display ${
                  isOpen
                    ? isDark ? 'text-white' : 'text-slate-900'
                    : isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#8B5CF6]' : 'opacity-50'
                  }`}
                />
              </button>

              {isOpen && (
                <div className={`px-6 pb-6 text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick WhatsApp Assistance Banner */}
      <div className={`p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left ${
        isDark ? 'bg-[#161619] border-[#25D366]/30' : 'bg-[#F2FAF5] border-[#25D366]/40 shadow-sm'
      }`}>
        <div>
          <h3 className="text-xl font-bold font-display">Have a specific question about your business?</h3>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Talk directly to Jagadish on WhatsApp for instant pricing &amp; feasibility advice.
          </p>
        </div>

        <a
          href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20have%20a%20question%20about%20building%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playCyberTone('click')}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp (+91 7358618789)</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
