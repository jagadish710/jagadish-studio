import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function FaqSection({ isDark = true }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Why do you charge zero monthly retainer fees?',
      a: 'We engineer our platforms using decoupled, serverless edge technologies and static site generators. Because the presentation layer is compiled ahead of time and served via global edge networks, there are no heavy dynamic backend servers to maintain, no fragile plugins to patch, and zero ongoing server licensing costs.',
    },
    {
      q: 'Do we own 100% of our code, domain, and data?',
      a: 'Absolutely. Upon project completion and final milestone approval, full source code repositories (GitHub), asset files, and cloud database access are transferred directly into your organization\'s ownership. You are never locked into any proprietary agency vendor lock-in.',
    },
    {
      q: 'How does our team edit website text and prices without developers?',
      a: 'Every platform we build comes equipped with a custom visual Admin Portal. You can easily log in from your mobile phone or laptop, change product headlines, update prices, upload catalog images, and view incoming customer inquiries directly with zero code.',
    },
    {
      q: 'What performance benchmarks do Merqurie platforms meet?',
      a: 'Our systems are engineered to achieve sub-0.3s First Contentful Paint and 99+ Core Web Vitals across both mobile and desktop. This speed advantage directly drives superior organic Google search visibility and maximum conversion rates.',
    },
    {
      q: 'What is the typical deployment timeline for a custom platform?',
      a: 'Standard enterprise platforms and vertical SaaS solutions are typically architected, verified on staging, and deployed to production within 7 to 21 business days, depending on custom integration scope and database complexity.',
    },
    {
      q: 'How do we initiate a technical consultation or request a proposal?',
      a: 'You can connect directly with our engineering advisory team via WhatsApp or submit an inquiry through our consultation modal. We will review your technical requirements and provide an architectural blueprint.',
    },
  ];

  const toggle = (idx) => {
    playCyberTone('click');
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <motion.section 
      id="faq" 
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t ${
        isDark ? 'border-zinc-900' : 'border-slate-200'
      }`}
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 border ${
          isDark 
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <HelpCircle className={`w-3.5 h-3.5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
          <span className="uppercase tracking-wider">Frequently Asked Questions</span>
        </div>
        
        <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight font-display mb-2 ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Questions &amp; Architectural Clarity
        </h2>
        <p className={`text-xs sm:text-sm leading-relaxed ${
          isDark ? 'text-zinc-400' : 'text-slate-600'
        }`}>
          Essential details on code ownership, zero maintenance fees, and technical delivery.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-2.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all ${
                isOpen 
                  ? isDark 
                    ? 'bg-zinc-950 border-zinc-700 shadow-md' 
                    : 'bg-white border-slate-300 shadow-md'
                  : isDark 
                    ? 'bg-[#0E0E12] border-zinc-800/80 hover:border-zinc-700' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className={`font-semibold text-xs sm:text-sm ${
                  isOpen 
                    ? isDark ? 'text-white' : 'text-slate-950' 
                    : isDark ? 'text-zinc-300' : 'text-slate-800'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? isDark ? 'rotate-180 text-white' : 'rotate-180 text-slate-950' 
                      : isDark ? 'text-zinc-400' : 'text-slate-500'
                  }`}
                />
              </button>

              {isOpen && (
                <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                  isDark ? 'border-zinc-800/80 text-zinc-400' : 'border-slate-200 text-slate-600'
                }`}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Help CTA */}
      <div className={`mt-8 p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isDark ? 'border-zinc-800 bg-zinc-950' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="text-left">
          <div className={`font-semibold text-xs sm:text-sm ${isDark ? 'text-white' : 'text-slate-950'}`}>
            Have custom technical or e-commerce requirements?
          </div>
          <div className={`text-xs ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
            Our engineering desk is available for real-time consultation.
          </div>
        </div>
        <a
          href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20have%20a%20technical%20question."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playCyberTone('click')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border font-mono text-xs font-semibold shrink-0 transition-all shadow-xs cursor-pointer ${
            isDark 
              ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white' 
              : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-900'
          }`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-500 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </motion.section>
  );
}
