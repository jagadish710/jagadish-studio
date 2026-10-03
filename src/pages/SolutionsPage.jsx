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
  Search,
} from 'lucide-react';

export default function SolutionsPage({ onOpenPrototypeModal, onNavigateToWork, isDark }) {
  const solutions = [
    {
      id: 'pillar-1',
      title: 'Fast Business & Product Websites',
      tag: 'WEBSITE SOLUTIONS',
      desc: 'High-speed modern websites designed to turn visitors into paying customers. Perfect for local businesses, industrial suppliers, retail brands, and professional services.',
      highlights: [
        'Sub-0.4s lightning load speed on mobile & desktop',
        'Direct WhatsApp button for instant customer inquiries',
        'High Google SEO score so customers can find you easily',
        'Zero monthly maintenance or hosting overhead fees',
      ],
      icon: Globe,
    },
    {
      id: 'pillar-2',
      title: 'Easy Self-Serve Admin Panel',
      tag: '100% SELF OPERATED',
      desc: 'Never pay an agency a monthly fee or wait days just to change a price or phone number. We include a visual control panel that anyone can use from their phone.',
      highlights: [
        'Update text, photos, and announcements in 10 seconds',
        'Add and manage products or machinery catalogs on demand',
        'Receive and download customer inquiries directly to Excel / CSV',
        'Runs in the cloud with zero software installation required',
      ],
      icon: Database,
    },
    {
      id: 'pillar-3',
      title: 'Custom Business Software & ERP',
      tag: 'OPERATIONAL SOFTWARE',
      desc: 'Tailor-made software tools for businesses that outgrew manual spreadsheets. Manage inventory, automate customer invoices, and streamline your daily operations.',
      highlights: [
        'Secure cloud database (PostgreSQL) with automatic backups',
        'Role-based access for staff, managers, and owners',
        'Instant WhatsApp notifications for new orders & leads',
        '100% code ownership with zero monthly user license fees',
      ],
      icon: Layers,
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
          <span>WHAT WE DELIVER • ZERO MAINTENANCE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display mb-6">
          <span className={isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]' : 'text-slate-900'}>
            DIGITAL SOLUTIONS
          </span> <br />
          <span className="text-gradient-main">BUILT FOR YOUR BUSINESS</span>
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
          Whether you need a high-ranking business website, a product catalog, or custom software to run your daily operations, we deliver complete solutions with zero maintenance fees.
        </p>

        {/* Action Header CTAs */}
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
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20am%20interested%20in%20your%20website%20and%20software%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberTone('click')}
            className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp: +91 73586 18789</span>
          </a>
        </div>
      </motion.div>

      {/* 3 Solutions Cards */}
      <div className="space-y-10 mb-20">
        {solutions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 sm:p-12 rounded-3xl border shadow-xl transition-all ${
                isDark 
                  ? 'bg-[#18181D] border-[#8B5CF6]/40 hover:border-[#8B5CF6]' 
                  : 'bg-white border-black/10 hover:border-fresh-emerald/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      isDark 
                        ? 'border-[#8B5CF6]/50 bg-[#221C35] text-[#C4B5FD]' 
                        : 'border-fresh-border bg-fresh-tint text-fresh-green'
                    }`}>
                      {item.tag}
                    </span>
                  </div>

                  <h2 className={`text-2xl sm:text-4xl font-extrabold font-display ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h2>

                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isDark ? 'text-emerald-400' : 'text-fresh-emerald'
                        }`} />
                        <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className={`w-32 h-32 rounded-3xl border flex items-center justify-center shadow-lg ${
                    isDark 
                      ? 'bg-[#221C35] border-[#8B5CF6]/50 text-[#C4B5FD]' 
                      : 'bg-[#F5F2FF] border-[#673DE6]/20 text-[#673DE6]'
                  }`}>
                    <Icon className="w-14 h-14" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Prominent Page Bottom CTA */}
      <div className={`p-8 sm:p-12 rounded-3xl border text-center max-w-4xl mx-auto shadow-2xl ${
        isDark ? 'bg-[#18181C] border-[#8B5CF6]/40' : 'bg-[#F9F7FF] border-[#673DE6]/30'
      }`}>
        <h3 className={`text-2xl sm:text-3xl font-extrabold font-display mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Ready to Upgrade Your Business Website?
        </h3>
        <p className={`text-sm max-w-xl mx-auto mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Get a professional website with an easy admin panel, zero maintenance charges, and 100% full ownership.
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
            href="https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20solution."
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
