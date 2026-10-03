import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Search,
  MessageCircle,
  Sparkles,
  Award,
} from 'lucide-react';

export default function AboutPage({ onOpenPrototypeModal, isDark }) {
  const seoStrengths = [
    {
      title: 'Affordable Luxury Websites',
      subtitle: 'Starting Under ₹10k, ₹15k, and ₹20k',
      desc: 'We believe premium digital quality should be accessible to all businesses. We provide luxury designs with zero monthly maintenance charges.',
    },
    {
      title: 'Zero Maintenance Fees Forever',
      subtitle: 'One-Time Investment Guarantee',
      desc: 'Traditional agencies bill ₹3,000 to ₹10,000 every month just for basic hosting and text updates. With us, you pay once and own your website forever.',
    },
    {
      title: 'Built For Top Google Rankings',
      subtitle: 'Lightning Fast Sub-0.4s Loading',
      desc: 'Google ranks fast websites higher. We build on React and modern edge servers with full schema metadata so your local business stands out on top.',
    },
    {
      title: '100% Code & Asset Sovereignty',
      subtitle: 'Complete Freedom, No Lock-In',
      desc: 'Your domain, source code, and customer inquiries belong to you. We transfer everything to your private GitHub repository with full control.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-4 border ${
          isDark 
            ? 'bg-[#1C1829] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
            : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>ABOUT OUR STUDIO &bull; LOCAL &bull; AFFORDABLE LUXURY</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6 leading-tight">
          <span className={isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'}>
            AFFORDABLE WEBSITES
          </span> <br />
          <span className="text-gradient-main">WITHOUT MONTHLY FEES</span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-slate-200' : 'text-slate-600'
        }`}>
          We are a dedicated local web design and software studio delivering high-speed, modern websites for businesses across India and worldwide. One-time transparent pricing with zero recurring maintenance fees.
        </p>

        {/* WhatsApp & Quote CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-6 py-3.5 rounded-xl font-bold font-mono text-xs tracking-wider flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20interested%20in%20a%20website%20solution."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: +91 73586 18789</span>
          </a>
        </div>
      </motion.div>

      {/* SEO-Rich Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {seoStrengths.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-8 sm:p-10 rounded-3xl border transition-all shadow-md ${
              isDark 
                ? 'bg-[#18181D] border-[#8B5CF6]/30 hover:border-[#8B5CF6]' 
                : 'bg-white border-black/10 hover:border-fresh-emerald/40'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold mb-3">
              <span className={`px-2.5 py-0.5 rounded-full border ${
                isDark ? 'bg-[#221C35] text-[#C4B5FD] border-[#8B5CF6]/40' : 'bg-[#F5F2FF] text-[#673DE6] border-[#673DE6]/20'
              }`}>
                {pillar.subtitle}
              </span>
            </div>

            <h2 className={`text-2xl font-bold font-display mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {pillar.title}
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us & SEO Keyword Section */}
      <div className={`p-8 sm:p-12 rounded-3xl border mb-20 ${
        isDark ? 'bg-[#18181D] border-[#8B5CF6]/30' : 'bg-[#F9F7FF] border-[#673DE6]/25'
      }`}>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className={`text-2xl sm:text-3xl font-extrabold font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Why Businesses Choose Jagadish Studio
          </h3>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Looking for the <strong>best website builder</strong>, <strong>affordable website under ₹10,000, ₹15,000, or ₹20,000</strong>, or a <strong>local web developer in Chennai and India</strong>? Most agencies charge high recurring retainer fees for basic websites that take weeks to launch. At Jagadish Studio, we build premium, luxury-grade web solutions and custom software with an easy-to-use visual admin panel, zero maintenance charges, and sub-0.4s Google loading speeds.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs pt-4">
            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
              <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>100+</div>
              <div className="opacity-70 mt-1">Projects Delivered</div>
            </div>
            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
              <div className="text-xl font-bold text-emerald-400">₹0 / yr</div>
              <div className="opacity-70 mt-1">Maintenance Fees</div>
            </div>
            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
              <div className={`text-xl font-bold ${isDark ? 'text-luxury-gold' : 'text-[#673DE6]'}`}>&lt; 0.4s</div>
              <div className="opacity-70 mt-1">Page Load Speed</div>
            </div>
            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-black/50 border-white/10' : 'bg-white border-black/10'}`}>
              <div className="text-xl font-bold text-emerald-400">100%</div>
              <div className="opacity-70 mt-1">Code Ownership</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Bottom WhatsApp Contact CTA */}
      <div className={`p-8 sm:p-12 rounded-3xl border text-center max-w-4xl mx-auto shadow-2xl ${
        isDark ? 'bg-[#18181C] border-[#8B5CF6]/40' : 'bg-white border-black/10'
      }`}>
        <h3 className={`text-2xl sm:text-3xl font-extrabold font-display mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Let&apos;s Build Your Business Website
        </h3>
        <p className={`text-sm max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Send an enquiry or message directly on WhatsApp. We discuss your requirements and share an instant transparent quote.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow'
                : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
            }`}
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20saw%20your%20portfolio%20and%20want%20to%20enquire%20about%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp (+91 73586 18789)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
