import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  Database,
  Bot,
  CloudLightning,
} from 'lucide-react';

export default function SolutionsPage({ onOpenPrototypeModal, isDark }) {
  const solutions = [
    {
      id: 'pillar-1',
      title: 'High-Conversion Industrial & Product Engines',
      tag: 'FLAGSHIP ARCHITECTURE',
      desc: 'Engineered specifically for heavy machinery, manufacturing, wholesale, and direct B2B sellers. Replaces slow PDF downloads and static pages with reactive, lightning-fast product portals.',
      highlights: [
        'Sub-0.4s Global Edge Load Times across mobile & desktop',
        'Direct WhatsApp Quotation Engine with SKU pre-fill',
        'Instant Search, Technical Spec Tables & High-Res Machinery Gallery',
        'Zero monthly hosting or database maintenance overhead',
      ],
      icon: CloudLightning,
    },
    {
      id: 'pillar-2',
      title: 'Autonomous Client Admin Cockpits',
      tag: '100% SELF-OPERATED',
      desc: 'Never send an email or pay an agency fee just to change a product price, update your phone number, or upload a festival banner. Full sovereign control at your fingertips.',
      highlights: [
        'Intuitive visual editor accessible from any phone or laptop',
        'Add, edit, or archive machinery and products in seconds',
        'Manage live site alerts and promotional banners on demand',
        'Instant CSV download of all inbound customer leads and inquiries',
      ],
      icon: Database,
    },
    {
      id: 'pillar-3',
      title: 'Next-Generation Autonomous AI Concierge',
      tag: 'FRONTIER INTELLIGENCE',
      desc: 'Embed intelligent multimodal AI conversational agents into your platform that qualify incoming business leads, explain complex technical machinery specs, and transfer ready buyers directly to your WhatsApp.',
      highlights: [
        '24/7 lead qualification without hiring overnight support staff',
        'Understands technical catalogs, machinery dimensions & power specs',
        'Zero hallucination boundaries tailored strictly to your inventory',
        'Instant notification dispatch to your team phone on qualified leads',
      ],
      icon: Bot,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4 border ${
          isDark 
            ? 'bg-[#181818] border-luxury-gold/30 text-luxury-gold shadow-gold-glow' 
            : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
        }`}>
          <Cpu className="w-3.5 h-3.5" />
          <span>SOLUTIONS MATRIX // ENTERPRISE STANDARDS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6">
          WE ENGINEER ASSETS. <br />
          <span className="text-gradient-main">NOT EXPENDABLE BROCHURES.</span>
        </h1>
        <p className="opacity-75 text-base sm:text-lg">
          Explore the three core engineering pillars we deploy for high-growth enterprises, industrial manufacturers, and modern digital brands.
        </p>
      </motion.div>

      {/* 3 Pillars Deep Dive */}
      <div className="space-y-12 mb-24">
        {solutions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-12 rounded-3xl theme-card relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${
                      isDark 
                        ? 'border-luxury-gold/30 bg-luxury-gold/10 text-luxury-gold' 
                        : 'border-fresh-border bg-fresh-tint text-fresh-green'
                    }`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono opacity-50">PILLAR 0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
                    {item.title}
                  </h3>

                  <p className="opacity-80 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-3 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                          isDark ? 'text-luxury-gold' : 'text-fresh-emerald'
                        }`} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className={`w-full max-w-sm p-6 rounded-2xl border shadow-2xl relative ${
                    isDark ? 'bg-black/60 border-white/10' : 'bg-slate-50 border-black/10'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${
                      isDark 
                        ? 'bg-luxury-gold/15 border-luxury-gold/30 text-luxury-gold' 
                        : 'bg-fresh-tint border-fresh-border text-fresh-green'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`text-xs font-mono font-bold mb-1 ${
                      isDark ? 'text-luxury-gold' : 'text-fresh-green'
                    }`}>
                      ENTERPRISE SPECIFICATION
                    </div>
                    <div className="text-base font-bold mb-2 font-display">
                      Autonomous Operational Architecture
                    </div>
                    <div className="text-xs opacity-75 space-y-2">
                      <div className="flex justify-between border-b border-black/5 dark:border-white/5 py-1">
                        <span>Maintenance Cost:</span>
                        <span className={`font-bold ${isDark ? 'text-luxury-gold' : 'text-fresh-emerald'}`}>$0 / Month</span>
                      </div>
                      <div className="flex justify-between border-b border-black/5 dark:border-white/5 py-1">
                        <span>Admin Access:</span>
                        <span className="font-semibold">100% Sovereign</span>
                      </div>
                      <div className="flex justify-between border-b border-black/5 dark:border-white/5 py-1">
                        <span>Speed Latency:</span>
                        <span className={`font-bold ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>&lt; 350ms TTFB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className={`p-8 sm:p-12 rounded-3xl border text-center flex flex-col items-center ${
        isDark 
          ? 'bg-gradient-to-b from-[#181818] to-[#121212] border-luxury-gold/35 shadow-black/80' 
          : 'bg-white border-fresh-border shadow-emerald-950/10'
      }`}>
        <h3 className="text-2xl sm:text-4xl font-extrabold font-display mb-4">
          Ready to Build Your Custom Business Engine?
        </h3>
        <p className="opacity-75 text-sm sm:text-base max-w-xl mb-8">
          We build live interactive staging links in 48 hours for you to test on your own mobile and computer before any commitment.
        </p>
        <button
          onClick={() => {
            playCyberTone('click');
            onOpenPrototypeModal();
          }}
          className={`px-8 py-4 rounded-xl font-mono font-bold text-sm flex items-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer ${
            isDark 
              ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
              : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
          }`}
        >
          <span>REQUEST 48H STAGING PROTOTYPE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
