import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Zap, 
  Search, 
  ShieldCheck, 
  RotateCw, 
  CheckCircle2, 
  Sparkles,
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function InteractiveCardsSection({ isDark, onOpenPrototypeModal }) {
  // Simple rotating typing words
  const typingWords = [
    'Local Businesses & Retailers',
    'Martial Arts Academies (upskskarate.com)',
    'Industrial Machineries (pmssolution)',
    'Custom Softwares & Management ERPs',
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[currentWordIdx];
    const typingSpeed = isDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2400);
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
      badge: 'PROVEN WORK',
      title: '100+ Projects Delivered',
      tagline: 'Delivered with excellence',
      frontBullets: [
        'Worked on 100+ websites & apps',
        'upskskarate.com & pmssolution',
        'Custom business softwares & tools',
      ],
      backTitle: 'Selected Deliveries',
      backBullets: [
        { label: 'upskskarate.com', desc: 'Martial arts academy portal with automated student registration' },
        { label: 'pmssolution', desc: 'Machinery catalog with direct instant WhatsApp quotation' },
        { label: 'Custom Softwares', desc: 'Internal business ERPs, billing, and inventory dashboards' },
      ],
      glowColor: '#8B5CF6',
    },
    {
      id: 1,
      icon: Zap,
      badge: 'NO RETAINER',
      title: 'Zero Maintenance Fees',
      tagline: 'One-time cost. No monthly bills.',
      frontBullets: [
        '₹0 monthly or yearly charges',
        'Self-serve admin panel included',
        'Edit text and photos in seconds',
      ],
      backTitle: 'What You Receive',
      backBullets: [
        { label: 'Visual Admin Panel', desc: 'Add products, change prices, and post updates yourself' },
        { label: 'Zero Extra Bills', desc: 'Never pay an agency a monthly fee just to change a phone number' },
        { label: 'Free Cloud Hosting', desc: 'High-speed hosting with free auto-renewing SSL security' },
      ],
      glowColor: isDark ? '#E6C687' : '#059669',
    },
    {
      id: 2,
      icon: Search,
      badge: 'RANK #1',
      title: 'Google SEO Built-In',
      tagline: 'Get found by local customers',
      frontBullets: [
        'Sub-0.4s instant page loading speed',
        'Google rich snippets & schema tags',
        'Keywords for local & high rankings',
      ],
      backTitle: 'SEO Performance',
      backBullets: [
        { label: 'Speed Optimization', desc: 'Scores 95+ on Google PageSpeed for top mobile rankings' },
        { label: 'Local Search Reach', desc: 'Optimized for local customers searching your services' },
        { label: 'Social Previews', desc: 'Rich image and title preview when links are shared on WhatsApp' },
      ],
      glowColor: '#8B5CF6',
    },
    {
      id: 3,
      icon: ShieldCheck,
      badge: '100% OWNED',
      title: 'Full Code Ownership',
      tagline: 'You own everything. Zero lock-in.',
      frontBullets: [
        'Full source code access in your GitHub',
        'Direct ownership of domain & assets',
        'No agency holds your site hostage',
      ],
      backTitle: 'Complete Freedom',
      backBullets: [
        { label: 'Code Sovereignty', desc: 'All source files transferred to your own private repository' },
        { label: 'Domain Autonomy', desc: 'Your domain stays in your own Hostinger or GoDaddy account' },
        { label: 'Forever Yours', desc: 'The site runs forever without any dependency on us' },
      ],
      glowColor: isDark ? '#E6C687' : '#059669',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* High-Contrast Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        {/* Crystal Clear High Contrast Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-4 border backdrop-blur-md ${
          isDark 
            ? 'bg-[#1C1829] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.45)]' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-blue-600'}`} />
          <span>PROVEN TRACK RECORD • 100+ DEPLOYMENTS</span>
        </div>

        <h2 className={`text-3xl sm:text-5xl font-extrabold font-display tracking-tight mb-4 ${
          isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'
        }`}>
          WE BUILD DIGITAL SOLUTIONS FOR
        </h2>

        {/* Animated Typing Industry Text */}
        <div className="min-h-[46px] flex items-center justify-center">
          <span className={`text-lg sm:text-2xl font-mono font-bold px-4 py-1.5 rounded-xl border ${
            isDark
              ? 'bg-[#1A1A1E] text-luxury-gold border-luxury-gold/50 shadow-gold-glow'
              : 'bg-slate-50 text-slate-900 border-slate-200 shadow-sm'
          }`}>
            {displayText}
            <span className="animate-pulse ml-0.5 font-normal opacity-80">|</span>
          </span>
        </div>

        <p className={`mt-4 text-xs sm:text-sm font-normal max-w-xl mx-auto ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Click on any card to view detailed delivery specs and real-world examples.
        </p>
      </div>

      {/* Interactive Enterprise Bento Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, idx) => {
          const isFlipped = flipped[idx];
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className="perspective-1000 h-[380px] w-full cursor-pointer select-none group transition-transform duration-300 hover:-translate-y-1.5"
              onClick={() => toggleFlip(idx)}
            >
              <div
                className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col justify-between border transition-all ${
                    isDark 
                      ? 'bg-[#18181C] border-[#8B5CF6]/40 hover:border-[#8B5CF6] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] shadow-lg' 
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xl shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-xs ${
                        isDark 
                          ? 'bg-[#221C35] text-[#C4B5FD] border-[#8B5CF6]/40' 
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${
                        isDark 
                          ? 'bg-[#1D1B26] text-luxury-gold border-luxury-gold/40' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Title & Tagline */}
                    <h3 className={`text-xl font-bold font-display tracking-tight leading-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`text-xs font-mono mt-1 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                      {card.tagline}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-5 space-y-2.5">
                      {card.frontBullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs font-medium">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isDark ? 'text-emerald-400' : 'text-emerald-600'
                          }`} />
                          <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flip Action Hint */}
                  <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    isDark ? 'border-white/10 text-slate-300 group-hover:text-white' : 'border-slate-100 text-slate-500 group-hover:text-slate-900'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                      <span>Click to view details</span>
                    </span>
                    <span className="text-xs font-bold">→</span>
                  </div>
                </div>

                {/* BACK FACE (FLIPPED) */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col justify-between border ${
                    isDark
                      ? 'bg-gradient-to-b from-[#1C172E] to-[#12101B] border-[#8B5CF6]/70 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]'
                      : 'bg-white border-slate-200 text-slate-900 shadow-xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/10 dark:border-white/15">
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                        isDark ? 'text-[#C4B5FD]' : 'text-slate-800'
                      }`}>
                        {card.backTitle}
                      </span>
                      <RotateCw className="w-3.5 h-3.5 opacity-70" />
                    </div>

                    <div className="space-y-3 mt-3">
                      {card.backBullets.map((item, iIdx) => (
                        <div key={iIdx} className={`p-2.5 rounded-xl border text-left ${
                          isDark ? 'bg-black/60 border-white/10' : 'bg-slate-50 border-slate-200/80'
                        }`}>
                          <div className={`text-xs font-mono font-bold ${
                            isDark ? 'text-luxury-gold' : 'text-slate-900'
                          }`}>
                            {item.label}
                          </div>
                          <div className={`text-[11px] mt-0.5 leading-snug ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {item.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-2 text-center text-[10px] font-mono ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Click again to flip back
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
