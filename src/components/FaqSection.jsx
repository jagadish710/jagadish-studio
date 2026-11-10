import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20have%20a%20question%20about%20a%20website%20project.';

export default function FaqSection({ onOpenPrototypeModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Why should I work with you instead of a big agency or cheap template freelancer?',
      a: 'Big agencies charge inflated retainers and hand your project to inexperienced interns. Cheap freelancers use brittle WordPress templates that break after 3 months and take 8 seconds to load. With Merqurie, you work directly with Jagadish (former Technical Engineer at Amazon & Turing). You get big-tech engineering quality, under 1-second load speeds, direct WhatsApp support, and zero recurring maintenance fees.',
    },
    {
      q: 'Do you charge any recurring monthly maintenance or retainer fees?',
      a: 'No. Zero monthly retainer fees. Traditional agencies lock you into ₹5,000 to ₹15,000 monthly retainers just to keep basic plugins alive. We engineer clean, durable code that runs on modern global networks with virtually zero maintenance debt. You fund the build once and you own the asset completely.',
    },
    {
      q: 'How do customer enquiries reach me from the website?',
      a: 'Directly to your WhatsApp and email. We install a high-conversion, prominent WhatsApp button that opens directly into a chat with your business, pre-filling the exact service or product the customer was viewing. No buried forms or lost leads.',
    },
    {
      q: 'Can I really change my own text and prices from my phone in 10 seconds?',
      a: 'Yes. Every website includes a clean, self-serve mobile admin cockpit. You log in securely from your phone or laptop, edit any headline, update a product price, or post a new announcement, tap save, and it updates live on your site in seconds—without needing a developer.',
    },
    {
      q: 'How long will it take to build and launch my website?',
      a: 'A standard high-converting business website is typically completed in 5 to 7 business days from our initial conversation. Larger custom catalogs or multi-page platforms take 10 to 14 days. We move fast and keep you updated at every step.',
    },
    {
      q: 'Do I own 100% of the website and domain?',
      a: 'Yes, 100%. Upon project completion and launch, we hand over full access to your source code repository, domain DNS keys, and content databases. You have complete legal sovereignty over your digital asset.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-3 bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Everything You Need to <span className="font-serif italic font-normal text-rose-600">Know.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct, honest answers about pricing, ownership, timelines, and how we work together.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? 'bg-white shadow-sm border-slate-300' 
                    : 'bg-[#FAFAFC] border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-rose-50 border-rose-200 text-rose-600' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Card: Still have questions? */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Have a specific question about your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Message Jagadish directly on WhatsApp. You will get a quick, honest reply within an hour.
            </p>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-slate-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
