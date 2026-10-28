import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function FaqSection({ isDark }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does Merqurie eliminate recurring monthly maintenance fees?',
      a: 'Traditional agencies deploy outdated monolithic architectures (e.g., standard WordPress) requiring constant manual patching, plugin updates, and server maintenance retainers. Merqurie engineers on serverless edge infrastructure and modern decoupled frameworks (React 19 / Vite / Edge APIs) that are virtually maintenance-free, immutable, and self-healing.',
    },
    {
      q: 'Do we own 100% of our source code and intellectual property?',
      a: 'Yes, absolutely. Upon completion and milestone sign-off, all Git repositories, production build configurations, and database schemas are transferred directly to your organization. You have complete legal sovereignty with zero vendor lock-in.',
    },
    {
      q: 'Can non-technical team members update content and products easily?',
      a: 'Yes. Every enterprise deployment includes a customized, intuitive Admin Cockpit. Your marketing and operations teams can modify headlines, update catalogs, change service pricing, and inspect customer leads in seconds from mobile or desktop.',
    },
    {
      q: 'What performance benchmarks do Merqurie platforms meet?',
      a: 'Our systems are engineered to achieve sub-0.3s First Contentful Paint and 98+ Core Web Vitals across both mobile and desktop. This speed advantage directly drives superior organic Google search visibility and maximum conversion rates.',
    },
    {
      q: 'What is the typical deployment timeline for a custom platform?',
      a: 'Standard enterprise platforms and vertical SaaS solutions are typically architected, verified on staging, and deployed to production within 7 to 21 business days, depending on custom integration scope and database complexity.',
    },
    {
      q: 'How do we initiate a technical consultation or request a proposal?',
      a: 'You can connect directly with our engineering advisory team via WhatsApp at +91 73586 18789 or submit an inquiry through our consultation modal. We will review your technical requirements and provide an architectural blueprint.',
    },
  ];

  const toggle = (idx) => {
    playCyberTone('click');
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={`py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t ${
      isDark ? 'border-white/5' : 'border-slate-200/80'
    }`}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
          isDark 
            ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <HelpCircle className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider">Enterprise Inquiries &bull; FAQ</span>
        </div>
        
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-display mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Frequently Asked Questions
        </h2>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Essential architectural, operational, and intellectual property details for prospective enterprise partners.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all ${
                isDark 
                  ? isOpen ? 'bg-[#161619] border-white/15' : 'bg-[#121214] border-white/5 hover:border-white/10'
                  : isOpen ? 'bg-white border-blue-200 shadow-sm' : 'bg-slate-50 border-slate-200/80 hover:bg-white'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className={`font-semibold text-sm ${
                  isDark ? (isOpen ? 'text-[#E6C687]' : 'text-slate-200') : (isOpen ? 'text-blue-700' : 'text-slate-900')
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-luxury-gold' : 'text-slate-400'
                  }`}
                />
              </button>

              {isOpen && (
                <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                  isDark ? 'text-slate-300 border-white/5' : 'text-slate-600 border-slate-100'
                }`}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Help CTA */}
      <div className={`mt-10 p-5 rounded-xl border text-center flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isDark ? 'bg-[#141417] border-white/5' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="text-left">
          <div className={`font-semibold text-xs sm:text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Have specialized technical or multi-product requirements?
          </div>
          <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Our principal engineering team is available for real-time consultation.
          </div>
        </div>
        <a
          href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20have%20a%20technical%20question."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playCyberTone('click')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono text-xs font-semibold shrink-0 transition-all shadow-xs cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
