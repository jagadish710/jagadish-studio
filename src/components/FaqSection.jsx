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
      a: 'You can connect directly with our engineering advisory team via WhatsApp or submit an inquiry through our consultation modal. We will review your technical requirements and provide an architectural blueprint.',
    },
  ];

  const toggle = (idx) => {
    playCyberTone('click');
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-3 bg-zinc-900 border border-zinc-800 text-zinc-300">
          <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
          <span className="uppercase tracking-wider">Frequently Asked Questions</span>
        </div>
        
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-2">
          Questions &amp; Architectural Clarity
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
                isOpen ? 'bg-zinc-950 border-zinc-700 shadow-md' : 'bg-[#0E0E12] border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className={`font-semibold text-xs sm:text-sm ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 text-zinc-400 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/80 text-zinc-400">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Help CTA */}
      <div className="mt-8 p-5 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <div className="font-semibold text-xs sm:text-sm text-white">
            Have custom technical or e-commerce requirements?
          </div>
          <div className="text-xs text-zinc-400">
            Our engineering desk is available for real-time consultation.
          </div>
        </div>
        <a
          href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20have%20a%20technical%20question."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playCyberTone('click')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-xs font-semibold shrink-0 transition-all shadow-xs cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
