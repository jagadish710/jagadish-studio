import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Activity, 
  HeartPulse, 
  Cpu, 
  Compass, 
  ArrowRight, 
  RotateCw,
  CheckCircle2, 
  ShieldCheck,
  Zap,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { playCyberTone } from '../utils/audio';

export default function InteractiveCardsSection({ 
  isDark, 
  ambientColor, 
  setAmbientColor, 
  onOpenPrototypeModal 
}) {
  // Flip states for individual cards
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (idx, colorKey) => {
    playCyberTone('click');
    setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }));
    if (colorKey && setAmbientColor) {
      setAmbientColor(colorKey);
    }
  };

  const divisions = [
    {
      id: 'cloud',
      title: 'Merqurie Cloud',
      category: 'ENTERPRISE PLATFORMS',
      colorKey: 'gold',
      accentColor: isDark ? '#E6C687' : '#B45309',
      accentBg: isDark ? 'bg-[#E6C687]/10 text-[#E6C687] border-[#E6C687]/30' : 'bg-amber-50 text-amber-900 border-amber-200',
      icon: Cloud,
      tagline: 'High-Performance Web Platforms & Self-Serve Admin Infrastructure',
      frontDesc: 'Enterprise web systems deployed on distributed edge networks with proprietary visual admin cockpits, lead pipelines, and sub-second page performance.',
      metrics: [
        { label: 'Core Load Speed', val: '< 0.3s' },
        { label: 'Ongoing Retainer', val: '₹0 / Year' },
        { label: 'Uptime Reliability', val: '99.99%' },
      ],
      backTech: [
        'React 19 & Next.js Decoupled Frontend',
        'Supabase Distributed PostgreSQL Cloud DB',
        'Vercel Global Edge CDN & Auto-SSL',
        'Role-Based Executive Content Management',
      ],
      proof: 'Enterprise Client Architecture',
    },
    {
      id: 'sports',
      title: 'Merqurie Sports',
      category: 'MARTIAL ARTS SAAS',
      colorKey: 'emerald',
      accentColor: isDark ? '#34D399' : '#059669',
      accentBg: isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Activity,
      tagline: 'Martial Arts, Taekwondo & Athletics Academy Ecosystems',
      frontDesc: 'Proven operating system at upskskarate.com managing 1,000+ students with belt grading, tournament rosters, and automated parent communication.',
      metrics: [
        { label: 'Active Students', val: '1,000+' },
        { label: 'Production Proof', val: 'upskskarate.com' },
        { label: 'Monthly SaaS Tax', val: '₹0' },
      ],
      backTech: [
        'Student Progression & Dan / Kyu Grade Records',
        'Tournament Bracket & Entry Registration Engine',
        'Instant WhatsApp Broadcast & Alert Webhooks',
        '100% Full Source Code & Database Ownership',
      ],
      proof: 'Live Production: upskskarate.com',
      liveUrl: 'https://upskskarate.com',
    },
    {
      id: 'health',
      title: 'Merqurie Health',
      category: 'CLINICAL PLATFORMS',
      colorKey: 'cyan',
      accentColor: isDark ? '#38BDF8' : '#0284C7',
      accentBg: isDark ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' : 'bg-sky-50 text-sky-800 border-sky-200',
      icon: HeartPulse,
      tagline: 'Clinical Management, Patient Intake & Specialty Workflows',
      frontDesc: 'Streamlined operational platforms for clinics, dental studios, and diagnostic centers with real-time patient queues and zero maintenance debt.',
      metrics: [
        { label: 'Intake Latency', val: 'Instant' },
        { label: 'Schedule Leakage', val: '-85%' },
        { label: 'Data Encryption', val: 'End-to-End' },
      ],
      backTech: [
        'One-Click WhatsApp Appointment Booking',
        'HIPAA-Conscious Digital Patient Intake Queue',
        'Doctor On-Duty Scheduling Dashboard',
        'Self-Healing Serverless Database Foundation',
      ],
      proof: 'Specialty Practices & Clinics',
    },
    {
      id: 'industrial',
      title: 'Merqurie Industrial',
      category: 'MACHINERY & ERP',
      colorKey: 'amber',
      accentColor: isDark ? '#FBBF24' : '#D97706',
      accentBg: isDark ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Cpu,
      tagline: 'Engineering Specification Catalogs & Industrial Automation',
      frontDesc: 'Heavy packaging machinery specification portal with instant multi-channel RFQ lead routing and visual catalog management at pmssolution.',
      metrics: [
        { label: 'Production Proof', val: 'pmssolution' },
        { label: 'Inquiry Lift', val: '+320%' },
        { label: 'Catalog Speed', val: '0.38s' },
      ],
      backTech: [
        'High-Resolution Machinery Blueprints & Videos',
        'Instant Multi-Channel RFQ Routing',
        'Visual Self-Serve Inventory & Spec Cockpit',
        'Technical Component SEO Optimization',
      ],
      proof: 'Live Production: pmssolution',
      liveUrl: 'https://pmssolution.jagadish.online',
    },
    {
      id: 'mobility',
      title: 'Merqurie Mobility',
      category: 'ELECTRIC HARDWARE',
      colorKey: 'purple',
      accentColor: isDark ? '#C084FC' : '#7C3AED',
      accentBg: isDark ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' : 'bg-purple-50 text-purple-800 border-purple-200',
      icon: Compass,
      tagline: 'Next-Generation Electric Boards & Intelligent Micro-Mobility',
      frontDesc: 'The physical frontier of the Merqurie speed philosophy. Precision-engineered electric skateboards and urban transit hardware powered by smart telemetry.',
      metrics: [
        { label: 'Architecture', val: 'In Development' },
        { label: 'Engineering', val: 'High-Precision' },
        { label: 'Brand Endorser', val: 'By Merqurie' },
      ],
      backTech: [
        'Brushless Motor Telemetry & Power Management',
        'Regenerative Kinetic Braking Energy Recovery',
        'Bluetooth Mobile Companion Application',
        'Carbon Fiber & Composite Deck Construction',
      ],
      proof: 'Division: Merqurie Boards & Urban Mobility',
    },
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t transition-colors duration-700 ${
      isDark ? 'border-white/5 bg-[#121214]/60' : 'border-slate-200/80 bg-white/60'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border transition-all ${
            isDark 
              ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
              : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="uppercase tracking-wider">Interactive 3D Architecture &bull; Click to Flip</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight font-display mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            The Merqurie Ecosystem. <br />
            <span className={`transition-colors duration-500 ${
              ambientColor === 'emerald'
                ? isDark ? 'text-emerald-400' : 'text-emerald-600'
                : ambientColor === 'cyan'
                ? isDark ? 'text-sky-400' : 'text-sky-600'
                : ambientColor === 'amber'
                ? isDark ? 'text-amber-400' : 'text-amber-600'
                : ambientColor === 'purple'
                ? isDark ? 'text-purple-400' : 'text-purple-600'
                : isDark ? 'text-[#E6C687]' : 'text-blue-700'
            }`}>
              Interactive Systems Architecture.
            </span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Click any card to flip it and inspect the underlying technical architecture, database foundation, and verified deployment benchmarks.
          </p>

          {/* Quick Color-Ambient Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className={`text-[10px] font-mono tracking-wider uppercase mr-1 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Filter Atmosphere:
            </span>
            {divisions.map((div) => {
              const isSelected = ambientColor === div.colorKey;
              return (
                <button
                  key={div.id}
                  onClick={() => {
                    playCyberTone('click');
                    setAmbientColor(div.colorKey);
                  }}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer border ${
                    isSelected
                      ? isDark
                        ? 'bg-white/10 text-white font-bold border-white/30 shadow-xs'
                        : 'bg-slate-900 text-white font-bold border-slate-900 shadow-xs'
                      : isDark
                        ? 'bg-black/30 text-slate-400 border-white/5 hover:text-white hover:border-white/15'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
                  }`}
                >
                  {div.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((card, idx) => {
            const Icon = card.icon;
            const isFlipped = !!flippedCards[idx];
            const isSelectedTheme = ambientColor === card.colorKey;

            return (
              <div
                key={card.id}
                className="perspective-1000 min-h-[380px] w-full cursor-pointer select-none"
                onClick={() => toggleCardFlip(idx, card.colorKey)}
              >
                <div 
                  className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-out rounded-2xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT FACE */}
                  <div className={`absolute inset-0 backface-hidden p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                    isDark 
                      ? isSelectedTheme
                        ? 'bg-[#18181C] border-white/25 shadow-xl shadow-black/80'
                        : 'bg-[#151518]/90 border-white/10 hover:border-white/20'
                      : isSelectedTheme
                        ? 'bg-white border-blue-300 shadow-md'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                  }`}>
                    <div>
                      {/* Top Bar with Category Badge & Flip Indicator */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border ${card.accentBg}`}>
                          {card.category}
                        </span>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx, card.colorKey);
                          }}
                          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                            isDark 
                              ? 'bg-black/30 border-white/10 text-slate-400 hover:text-white hover:border-white/30' 
                              : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                          }`}
                          title="Click to flip card and inspect technical architecture"
                        >
                          <RotateCw className="w-3 h-3 text-luxury-gold" />
                          <span className="text-[9px] font-mono font-medium">FLIP</span>
                        </button>
                      </div>

                      {/* Title & Icon Header */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                          isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50 border-slate-200'
                        }`}>
                          <Icon className="w-5 h-5" style={{ color: card.accentColor }} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {card.title}
                          </h3>
                          <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {card.proof}
                          </span>
                        </div>
                      </div>

                      <p className={`text-xs leading-relaxed mt-3 mb-5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {card.frontDesc}
                      </p>

                      {/* Benchmarks Matrix */}
                      <div className={`p-3 rounded-xl border mb-4 space-y-1.5 ${
                        isDark ? 'bg-black/30 border-white/5' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {card.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{m.label}:</span>
                            <span className="font-bold" style={{ color: card.accentColor }}>{m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/5 text-xs">
                      <span className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Click card to flip
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-luxury-gold font-mono text-[11px]">
                        <span>Architecture</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Flipped 180 deg) */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between ${
                    isDark 
                      ? 'bg-[#18181C] border-[#E6C687]/40 shadow-xl' 
                      : 'bg-white border-blue-400 shadow-lg'
                  }`}>
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/5 dark:border-white/5">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className={`text-xs font-mono font-bold tracking-wider ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            TECHNICAL STACK &bull; SLA
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardFlip(idx, card.colorKey);
                          }}
                          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                            isDark 
                              ? 'bg-black/30 border-white/10 text-slate-400 hover:text-white' 
                              : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <RotateCw className="w-3 h-3 text-luxury-gold" />
                          <span className="text-[9px] font-mono">BACK</span>
                        </button>
                      </div>

                      <div className={`text-xs font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {card.tagline}
                      </div>

                      {/* Technical Checklist */}
                      <div className="space-y-2 mb-4">
                        {card.backTech.map((item, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: card.accentColor }} />
                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Footer Actions */}
                    <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playCyberTone('click');
                          onOpenPrototypeModal();
                        }}
                        className={`w-full py-2.5 px-3 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                          isDark
                            ? 'bg-gradient-to-r from-luxury-gold to-amber-300 text-black'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        <span>Enquire on this Division</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      {card.liveUrl && (
                        <a
                          href={card.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`w-full py-1.5 text-center block text-[11px] font-mono underline transition-colors ${
                            isDark ? 'text-luxury-gold hover:text-white' : 'text-blue-700 hover:text-blue-900'
                          }`}
                        >
                          View Live Deployment ({card.liveUrl.replace('https://', '')}) &rarr;
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
