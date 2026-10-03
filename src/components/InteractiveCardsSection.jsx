import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Zap, 
  Search, 
  Bot, 
  RotateCw, 
  CheckCircle2, 
  Sparkles,
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function InteractiveCardsSection({ isDark }) {
  // Auto-typing headline like Hostinger
  const typingWords = [
    'Martial Arts Academies (upskskarate.com)',
    'Industrial Businesses (pmssolution)',
    'Enterprise Software & ERP Tools',
    'Custom High-Conversion Businesses',
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[currentWordIdx];
    const typingSpeed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2200);
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
      badge: '100+ PROJECTS',
      title: '100+ Systems Delivered',
      tagline: 'Proven results across businesses',
      frontBullets: [
        '100+ real-world platforms delivered',
        'Sub-0.4s instant page loading speed',
        'Engineered with Ex-Amazon scale',
      ],
      backTitle: 'Notable Deliveries',
      backBullets: [
        { label: 'upskskarate.com', desc: 'Martial Arts Academy platform & student enrollment portal' },
        { label: 'pmssolution', desc: 'Industrial machinery catalog & instant quotation engine' },
        { label: 'Custom Softwares', desc: 'Internal business ERPs, inventory sync & management cockpits' },
      ],
      glowColor: '#673DE6',
    },
    {
      id: 1,
      icon: Zap,
      badge: 'NO RETAINER',
      title: 'Solutions, Not Websites',
      tagline: 'You own everything. Zero lock-in.',
      frontBullets: [
        'No monthly or yearly maintenance fees',
        'Self-serve admin panel to edit text in seconds',
        '100% full ownership of your code & domain',
      ],
      backTitle: 'What You Receive',
      backBullets: [
        { label: 'Visual Admin Panel', desc: 'Add new products, change text, and edit prices yourself' },
        { label: 'Full Code Ownership', desc: 'Source code in your own private GitHub. No vendor lock-in' },
        { label: 'Fast Cloud Hosting', desc: 'Runs on fast global servers with free auto-renewing SSL' },
      ],
      glowColor: isDark ? '#E6C687' : '#00C853',
    },
    {
      id: 2,
      icon: Search,
      badge: 'RANK #1',
      title: 'Top Google SEO',
      tagline: 'Get found by real customers',
      frontBullets: [
        '100/100 Google page speed performance',
        'Structured Google rich snippet data included',
        'Instant social sharing previews on WhatsApp',
      ],
      backTitle: 'SEO Built Into Code',
      backBullets: [
        { label: 'Google Schemas', desc: 'Pre-configured data for local business, reviews & products' },
        { label: 'Zero Lag', desc: 'No heavy plugins or slow databases to hurt your rankings' },
        { label: 'Fast Mobile Index', desc: 'Instant mobile loading so customers never click away' },
      ],
      glowColor: '#673DE6',
    },
    {
      id: 3,
      icon: Bot,
      badge: '24/7 AI CHAT',
      title: 'Smart AI Assistant',
      tagline: 'Turn visitors into direct leads',
      frontBullets: [
        'Answers customer questions day and night',
        'Sends inquiries straight to your WhatsApp',
        'Zero recurring monthly chatbot fees',
      ],
      backTitle: 'Automated Lead Capture',
      backBullets: [
        { label: 'Custom Trained', desc: 'Answers questions accurately about your services & prices' },
        { label: 'Lead Collection', desc: 'Collects verified phone numbers & customer requests' },
        { label: 'WhatsApp Routing', desc: 'Alerts you on your phone the moment a lead asks for a quote' },
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
          <span>PROVEN WORK • 100+ DEPLOYMENTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4">
          WE BUILD DIGITAL SOLUTIONS FOR
        </h2>

        {/* Animated Typing Industry Text (Hostinger-inspired) */}
        <div className="min-h-[44px] flex items-center justify-center">
          <span className={`text-lg sm:text-2xl font-mono font-bold px-4 py-1 rounded-xl border ${
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
          Click on any floating card below to flip and see what is included.
        </p>
      </div>

      {/* 3D Floating Interactive Flip Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, idx) => {
          const isFlipped = flipped[idx];
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + idx * 0.7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
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
                  className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col justify-between border card-glow-hostinger shadow-lg ${
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
