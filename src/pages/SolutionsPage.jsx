import React from 'react';
import { playCyberTone } from '../utils/audio';
import { motion } from 'framer-motion';
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  Globe,
  MessageCircle,
  Sparkles,
  Layers,
  Activity,
  HeartPulse,
  Cpu,
  Compass,
} from 'lucide-react';

export default function SolutionsPage({ onOpenPrototypeModal, onNavigateToWork, isDark }) {
  const divisions = [
    {
      id: 'cloud',
      title: 'Merqurie Cloud',
      tag: 'ENTERPRISE PLATFORMS',
      desc: 'High-speed business platforms and custom web software deployed on global edge networks. Includes proprietary visual admin cockpits, lead management, and sub-0.3s page performance with zero ongoing maintenance fees.',
      highlights: [
        'Sub-0.3s lightning load speed on mobile & desktop',
        'Direct WhatsApp button & lead routing for instant conversions',
        'Top Google SEO score for organic market leadership',
        'Zero monthly maintenance or hosting overhead fees',
      ],
      icon: Globe,
    },
    {
      id: 'sports',
      title: 'Merqurie Sports & Dojo',
      tag: 'VERTICAL SAAS',
      desc: 'Complete athletic and martial arts academy software. Proven production system at upskskarate.com serving 1,000+ students with belt grading, tournament registrations, and automated parent communication.',
      highlights: [
        'Student belt progression & grading records',
        'Tournament & championship registration workflows',
        'Automated parent notifications via WhatsApp',
        '100% full code sovereignty with zero monthly per-student tax',
      ],
      icon: Activity,
    },
    {
      id: 'health',
      title: 'Merqurie Health',
      tag: 'CLINICAL SYSTEMS',
      desc: 'Clinical operations software engineered for dental studios, specialty clinics, and medical practices. Modern HIPAA-conscious patient intake, doctor schedule management, and instant confirmation flows.',
      highlights: [
        'One-click WhatsApp appointment confirmations',
        'Digital patient registration & inquiry queues',
        'Doctor schedule management dashboard',
        'Zero vendor lock-in or recurring SaaS license traps',
      ],
      icon: HeartPulse,
    },
    {
      id: 'industrial',
      title: 'Merqurie Industrial & ERP',
      tag: 'MANUFACTURING SYSTEMS',
      desc: 'Heavy machinery and engineering portals with intelligent digital spec sheets, instant RFQ (Request for Quote) flows, and supplier communication pipelines. Proven at pmssolution.',
      highlights: [
        'Comprehensive machinery & engineering catalog viewer',
        'Instant multi-channel RFQ lead capture',
        'High-resolution technical documentation portal',
        'SEO dominance for industrial component discovery',
      ],
      icon: Cpu,
    },
    {
      id: 'mobility',
      title: 'Merqurie Mobility',
      tag: 'HARDWARE & BOARDS',
      desc: 'Next-generation electric skateboards and personal urban micro-mobility hardware engineered for speed, endurance, and street performance — Powered by Merqurie.',
      highlights: [
        'Precision brushless motor telemetry and control',
        'Regenerative braking energy recovery',
        'Companion mobile application architecture',
        'High-durability carbon and composite decks',
      ],
      icon: Compass,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4 border ${
          isDark 
            ? 'bg-[#18181C] border-[#E6C687]/30 text-[#E6C687]' 
            : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-luxury-gold" />
          <span>THE MERQURIE ECOSYSTEM &bull; INDUSTRY PLATFORMS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display mb-6">
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            ENGINEERED PLATFORMS
          </span> <br />
          <span className={isDark ? 'text-[#E6C687]' : 'text-blue-700'}>
            BUILT FOR SCALE
          </span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          From enterprise cloud platforms and vertical SaaS to industrial machinery catalogs and future micro-mobility. Built with zero maintenance overhead and full IP sovereignty.
        </p>

        {/* Action Header CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              playCyberTone('click');
              onOpenPrototypeModal();
            }}
            className={`px-6 py-3 rounded-xl font-semibold font-mono text-xs tracking-wider flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-luxury-gold to-amber-300 text-black'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
            }`}
          >
            <span>REQUEST CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20an%20ecosystem%20platform."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className={`px-5 py-3 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              isDark
                ? 'bg-[#18181C] text-white border-white/10 hover:bg-[#202026]'
                : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* Solutions Cards */}
      <div className="space-y-8 mb-20">
        {divisions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 sm:p-10 rounded-2xl border transition-all ${
                isDark 
                  ? 'bg-[#151518] border-white/10 hover:border-white/20' 
                  : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${
                      isDark 
                        ? 'border-white/10 bg-black/40 text-[#E6C687]' 
                        : 'border-slate-200 bg-slate-100 text-slate-800'
                    }`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-[#E6C687]' : 'text-blue-600'}`} />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-black/10 dark:border-white/10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${
                    isDark ? 'bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20' : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {item.title}
                  </span>
                  <span className={`text-[10px] font-mono mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Zero Maintenance &bull; Edge Native
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
