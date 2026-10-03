import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  RotateCw, 
  Zap, 
  Search, 
  Bot, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function InteractiveCardsSection({ isDark, onOpenPrototypeModal }) {
  // Auto-typing headline like Hostinger
  const typingWords = [
    'Martial Arts Academies (upskskarate.com)',
    'Industrial Heavy Machinery (pmssolution)',
    'Custom Enterprise SaaS & ERP Systems',
    'High-Conversion Digital Assets',
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[currentWordIdx];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIdx]);

  // Flip states for cards
  const [flipped, setFlipped] = useState({ 0: false, 1: false, 2: false, 3: false });

  const toggleFlip = (idx) => {
    playCyberTone('click');
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const cardsData = [
    {
      id: 0,
      icon: Award,
      badge: 'PROVEN SCALE',
      title: '100+ Projects Delivered',
      tagline: 'Excellence Across High-Stakes Industries',
      frontBullets: [
        '100+ custom systems launched worldwide',
        '<0.38s Time-To-First-Byte edge performance',
        'Built with Ex-Amazon operational rigor',
      ],
      backTitle: 'Selected Flagship Deployments',
      backBullets: [
        { label: 'upskskarate.com', desc: 'Martial Arts Academy platform & student enrollment portal' },
        { label: 'pmssolution', desc: 'Precision industrial packaging machinery & quotation engine' },
        { label: 'Bespoke Softwares', desc: 'Multi-tenant ERPs, inventory sync & internal management cockpits' },
      ],
      glowColor: '#673DE6', // Hostinger purple
    },
    {
      id: 1,
      icon: Zap,
      badge: '$0 MAINTENANCE',
      title: 'Solutions, Not Just Websites',
      tagline: 'Radical Client Sovereignty & Control',
      frontBullets: [
        'Zero monthly maintenance retainers',
        'Self-serve visual admin portal included',
        '100% source code & domain ownership',
      ],
      backTitle: 'What "Solution" Actually Means',
      backBullets: [
        { label: 'Visual Admin Portal', desc: 'Add products, update pricing & edit copy in 1 click' },
        { label: 'Source Code Freedom', desc: 'Full GitHub repository transferred directly to your name' },
        { label: 'Edge Infrastructure', desc: 'Hosted on global serverless edge with free auto-renewing SSL' },
      ],
      glowColor: isDark ? '#E6C687' : '#00C853',
    },
    {
      id: 2,
      icon: Search,
      badge: 'TOP RANKINGS',
      title: 'Dominant SEO & CWV',
      tagline: 'Engineered for Page 1 Google Discoverability',
      frontBullets: [
        '100/100 Google Core Web Vitals optimization',
        'Automated JSON-LD rich snippet schemas',
        'OpenGraph social cards pre-configured',
      ],
      backTitle: 'Engineered SEO Architecture',
      backBullets: [
        { label: 'Structured Data', desc: 'Pre-indexed schemas for LocalBusiness, Products & Reviews' },
        { label: 'Zero Bloat', desc: 'No heavy WordPress themes or slow SQL bottlenecks' },
        { label: 'Instant Indexing', desc: 'Automated XML sitemaps & dynamic robots directives' },
      ],
      glowColor: '#673DE6',
    },
    {
      id: 3,
      icon: Bot,
      badge: 'AUTONOMOUS AI',
      title: 'AI Workflow Concierge',
      tagline: 'Convert Cold Traffic Into Paying Clients',
      frontBullets: [
        '24/7 intelligent customer inquiry qualification',
        'Direct WhatsApp & CRM pipeline integration',
        'Zero monthly third-party chatbot fees',
      ],
      backTitle: 'Intelligent Lead Acceleration',
      backBullets: [
        { label: 'Natural Language', desc: 'Answers questions accurately about your specific services' },
        { label: 'Lead Verification', desc: 'Collects verified phone numbers & business requirements' },
        { label: 'Instant Routing', desc: 'Delivers qualified leads straight to your WhatsApp inbox' },
      ],
      glowColor: isDark ? '#E6C687' : '#00C853',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Dynamic Typewriting Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-4 border ${
          isDark 
            ? 'bg-[#181818] border-[#673DE6]/40 text-[#A78BFA] shadow-[0_0_20px_rgba(103,61,230,0.3)]' 
            : 'bg-[#F3EFFE] border-[#673DE6]/25 text-[#673DE6]'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>SOLUTIONS MATRIX • 100+ DEPLOYMENTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
          WE ENGINEER TAILORED SYSTEMS FOR
        </h2>

        {/* Animated Typing Industry Text (Hostinger-inspired) */}
        <div className="min-h-[44px] flex items-center justify-center">
          <span className={`text-xl sm:text-2xl font-mono font-bold px-4 py-1 rounded-xl border ${
            isDark
              ? 'bg-[#181818]/90 text-luxury-gold border-luxury-gold/40 shadow-gold-glow'
              : 'bg-white text-fresh-green border-fresh-border shadow-sm'
          }`}>
            {displayText}
            <span className="animate-pulse ml-0.5 font-normal opacity-80">|</span>
          </span>
        </div>

        <p className={`mt-4 text-sm sm:text-base font-normal max-w-xl mx-auto ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Click on any card to flip and inspect the technical architecture and real client impact.
        </p>
      </div>

      {/* 3D Interactive Flip Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, idx) => {
          const isFlipped = flipped[idx];
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className="perspective-1000 h-[380px] w-full cursor-pointer select-none group"
              onClick={() => toggleFlip(idx)}
              onMouseEnter={() => playCyberTone('hover')}
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col justify-between border card-glow-hostinger ${
                    isDark ? 'bg-[#151518]' : 'bg-white'
                  }`}
                  style={{
                    borderColor: isDark ? 'rgba(103, 61, 230, 0.35)' : 'rgba(103, 61, 230, 0.2)',
                  }}
                >
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-sm ${
                        isDark 
                          ? 'bg-[#221C35] text-[#A78BFA] border-[#673DE6]/40' 
                          : 'bg-[#F5F2FF] text-[#673DE6] border-[#673DE6]/20'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${
                        isDark 
                          ? 'bg-[#1D1B26] text-luxury-gold border-luxury-gold/30' 
                          : 'bg-[#F2FAF5] text-fresh-green border-fresh-border'
                      }`}>
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Title & Tagline */}
                    <h3 className="text-xl font-bold font-display tracking-tight leading-tight">
                      {card.title}
                    </h3>
                    <p className={`text-xs font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {card.tagline}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-5 space-y-2.5">
                      {card.frontBullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs font-medium">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isDark ? 'text-luxury-gold' : 'text-fresh-emerald'
                          }`} />
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flip Action Hint */}
                  <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    isDark ? 'border-white/10 text-slate-400 group-hover:text-white' : 'border-black/10 text-slate-500 group-hover:text-black'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                      <span>Click to flip</span>
                    </span>
                    <span className="text-xs">→</span>
                  </div>
                </div>

                {/* BACK FACE (FLIPPED) */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col justify-between border ${
                    isDark
                      ? 'bg-gradient-to-b from-[#1C172E] to-[#12101B] border-[#673DE6]/60 text-white shadow-[0_0_30px_rgba(103,61,230,0.3)]'
                      : 'bg-gradient-to-b from-[#FAF8FF] to-[#FFFFFF] border-[#673DE6]/40 text-slate-900 shadow-xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10 dark:border-black/10">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isDark ? 'text-[#C4B5FD]' : 'text-[#673DE6]'
                      }`}>
                        {card.backTitle}
                      </span>
                      <RotateCw className="w-3.5 h-3.5 opacity-60" />
                    </div>

                    <div className="space-y-3 mt-3">
                      {card.backBullets.map((item, iIdx) => (
                        <div key={iIdx} className={`p-2.5 rounded-xl border text-left ${
                          isDark ? 'bg-black/40 border-white/10' : 'bg-white border-black/10 shadow-xs'
                        }`}>
                          <div className={`text-xs font-mono font-bold ${
                            isDark ? 'text-luxury-gold' : 'text-[#673DE6]'
                          }`}>
                            {item.label}
                          </div>
                          <div className="text-[11px] opacity-75 mt-0.5 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-center text-[10px] font-mono opacity-60">
                    Click again to return
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
