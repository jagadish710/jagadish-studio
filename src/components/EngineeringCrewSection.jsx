import React, { useState } from 'react';
import { Zap, ShieldCheck, Compass, Utensils, ArrowRight } from 'lucide-react';

export default function EngineeringCrewSection({ onOpenQuote }) {
  const [activeMember, setActiveMember] = useState('merq');

  const crewDetails = {
    merq: {
      emoji: '⚡',
      title: 'Captain Merq — Sub-0.3s Edge Speed Guarantee',
      desc: 'Your customers get instant page loads without spinning wheels, boosting Google rankings and inquiry conversions from Day 1.',
      accent: 'text-treasure-400',
      badgeBg: 'bg-treasure-500/20 text-treasure-300',
    },
    zoro: {
      emoji: '⚔️',
      title: 'Roronoa Z. — Zero-Bug Security & Clean Architecture',
      desc: 'No fragile WordPress plugins to get hacked or crash during your ad campaigns. Protected by global Cloudflare SSL & 99.99% uptime.',
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300',
    },
    nami: {
      emoji: '🧭',
      title: 'Nami N. — Google SEO & WhatsApp Lead Funnel Navigation',
      desc: 'Every section is engineered to rank on Google and guide mobile visitors directly to your 1-tap WhatsApp quote button.',
      accent: 'text-orange-400',
      badgeBg: 'bg-orange-500/20 text-orange-300',
    },
    sanji: {
      emoji: '🍽️',
      title: 'Sanji V. — Michelin-Star Mobile UI/UX Craft',
      desc: 'Whether your customer uses a ₹10,000 Android phone or an iPhone Pro, your brand looks trustworthy, modern, and effortless to buy from.',
      accent: 'text-cyanline-400',
      badgeBg: 'bg-cyanline-500/20 text-cyanline-300',
    },
  };

  const current = crewDetails[activeMember];

  return (
    <section id="crew" className="py-20 relative border-t border-white/5 bg-ocean-950/70 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-treasure-400 font-mono">
            Four Specialists • One Unstoppable Website
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Meet Your <span className="text-gold-gradient">Merqurie Engineering Crew</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every website we build combines four critical disciplines—speed, security, conversion psychology, and Michelin-star mobile design. Tap any specialist below!
          </p>
        </div>

        {/* 4 Crew Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Crew 1: Captain Merq */}
          <div
            onClick={() => setActiveMember('merq')}
            className={`crew-card glass-card glass-card-hover rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all ${
              activeMember === 'merq' ? 'border-2 border-treasure-400 shadow-xl shadow-amber-500/15' : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-treasure-500/20 text-treasure-300 text-[11px] font-extrabold font-mono">
                  CAPTAIN • SPEED
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">0.24s Edge</span>
              </div>

              {/* Chibi Straw Hat Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-b from-amber-500/20 to-rose-500/20 border border-treasure-400/30 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-20 h-20">
                  <ellipse cx="60" cy="42" rx="44" ry="12" fill="#EAB308" />
                  <circle cx="60" cy="68" r="28" fill="#F9C29B" />
                  <ellipse cx="47" cy="73" rx="6" ry="3.5" fill="#FB7185" opacity="0.6" />
                  <ellipse cx="73" cy="73" rx="6" ry="3.5" fill="#FB7185" opacity="0.6" />
                  <path d="M32 58 Q35 36 60 34 Q85 36 88 58 Q78 48 70 55 Q60 44 50 55 Q42 48 32 58 Z" fill="#1E293B" />
                  <path d="M44 65 Q50 56 56 65" stroke="#0F172A" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M64 65 Q70 56 76 65" stroke="#0F172A" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M43 76 Q60 94 77 76 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <path d="M36 40 C38 16, 82 16, 84 40 Z" fill="#FACC15" stroke="#A16207" strokeWidth="2" />
                  <rect x="36" y="34" width="48" height="6" fill="#F43F5E" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-white text-center">Captain Merq</h3>
              <p className="text-xs font-bold text-treasure-400 text-center mb-3">Elastic Speed & Full-Stack Captain</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Stretches your site's performance to <strong className="text-white">0.24s load times</strong> with zero plugins so customers never bounce.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-treasure-300 font-mono">
              {activeMember === 'merq' ? '● Power Active' : 'Tap to Activate Power ⚡'}
            </div>
          </div>

          {/* Crew 2: Roronoa Z. */}
          <div
            onClick={() => setActiveMember('zoro')}
            className={`crew-card glass-card glass-card-hover rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all ${
              activeMember === 'zoro' ? 'border-2 border-emerald-400 shadow-xl shadow-emerald-500/15' : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold font-mono">
                  SECURITY • ZERO BUGS
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">99.99% Uptime</span>
              </div>

              {/* Swordsman Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-b from-emerald-500/20 to-teal-900/30 border border-emerald-400/30 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-20 h-20">
                  <line x1="22" y1="26" x2="98" y2="94" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
                  <line x1="98" y1="26" x2="22" y2="94" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="60" cy="64" r="28" fill="#F9C29B" />
                  <path d="M30 56 L26 38 L42 44 L48 24 L60 38 L72 24 L78 44 L94 38 L90 56 Q60 44 30 56 Z" fill="#10B981" stroke="#065F46" strokeWidth="1.5" />
                  <circle cx="50" cy="63" r="4" fill="#0F172A" />
                  <circle cx="70" cy="63" r="4" fill="#0F172A" />
                  <path d="M44 56 L55 59 M76 56 L65 59" stroke="#065F46" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M50 77 Q60 83 71 75" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-white text-center">Roronoa Z.</h3>
              <p className="text-xs font-bold text-emerald-400 text-center mb-3">Clean-Code & Security Swordsman</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Slices away bloated WordPress plugins, malware vulnerabilities, and server crashes with <strong className="text-white">Cloudflare Edge SSL</strong>.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-emerald-300 font-mono">
              {activeMember === 'zoro' ? '● Power Active' : 'Tap to Activate Power ⚔️'}
            </div>
          </div>

          {/* Crew 3: Nami N. */}
          <div
            onClick={() => setActiveMember('nami')}
            className={`crew-card glass-card glass-card-hover rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all ${
              activeMember === 'nami' ? 'border-2 border-orange-400 shadow-xl shadow-orange-500/15' : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-[11px] font-extrabold font-mono">
                  SEO • CONVERSION
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">3x Leads</span>
              </div>

              {/* Navigator Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-b from-orange-500/20 to-amber-900/30 border border-orange-400/30 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-20 h-20">
                  <path d="M26 78 Q24 30 60 28 Q96 30 94 78 Q86 88 80 76 L80 56 L40 56 L40 76 Q34 88 26 78 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="1.5" />
                  <circle cx="60" cy="64" r="26" fill="#FFE7D1" />
                  <path d="M34 56 Q48 44 60 54 Q72 44 86 56 Q84 34 60 32 Q36 34 34 56 Z" fill="#FB923C" />
                  <ellipse cx="47" cy="70" rx="5" ry="3" fill="#FB7185" opacity="0.65" />
                  <ellipse cx="73" cy="70" rx="5" ry="3" fill="#FB7185" opacity="0.65" />
                  <circle cx="50" cy="62" r="4.5" fill="#0F172A" />
                  <circle cx="48.5" cy="60.5" r="1.5" fill="#FFFFFF" />
                  <circle cx="70" cy="62" r="4.5" fill="#0F172A" />
                  <circle cx="68.5" cy="60.5" r="1.5" fill="#FFFFFF" />
                  <path d="M51 75 Q60 83 69 75" stroke="#E11D48" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-white text-center">Nami N.</h3>
              <p className="text-xs font-bold text-orange-400 text-center mb-3">Google SEO & Lead Funnel Navigator</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Charts high-converting buyer journeys, <strong className="text-white">Google Search rankings</strong>, and 1-tap WhatsApp quote buttons that turn clicks into cash.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-orange-300 font-mono">
              {activeMember === 'nami' ? '● Power Active' : 'Tap to Activate Power 🧭'}
            </div>
          </div>

          {/* Crew 4: Sanji V. */}
          <div
            onClick={() => setActiveMember('sanji')}
            className={`crew-card glass-card glass-card-hover rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all ${
              activeMember === 'sanji' ? 'border-2 border-cyanline-400 shadow-xl shadow-cyanline-500/15' : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-cyanline-500/20 text-cyanline-300 text-[11px] font-extrabold font-mono">
                  UI/UX • MOBILE
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">100% Fluid</span>
              </div>

              {/* Chef Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-b from-yellow-500/20 to-sky-900/30 border border-cyanline-400/30 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-20 h-20">
                  <circle cx="60" cy="65" r="27" fill="#FFE7D1" />
                  <path d="M32 58 Q34 30 62 30 Q90 30 88 58 Q74 44 58 64 Q46 46 32 58 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
                  <circle cx="69" cy="63" r="4" fill="#0F172A" />
                  <path d="M63 56 Q69 53 75 56" stroke="#CA8A04" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                  <path d="M51 77 Q60 83 69 76" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <polygon points="44,92 60,104 76,92" fill="#0F172A" />
                  <polygon points="56,92 64,92 60,106" fill="#38BDF8" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-bold text-white text-center">Sanji V.</h3>
              <p className="text-xs font-bold text-cyanline-400 text-center mb-3">UI/UX & Mobile Experience Chef</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Plates mouth-watering visuals and thumb-friendly layouts that look <strong className="text-white">razor-sharp on every smartphone</strong> and laptop.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-cyanline-300 font-mono">
              {activeMember === 'sanji' ? '● Power Active' : 'Tap to Activate Power 🍽️'}
            </div>
          </div>

        </div>

        {/* Live Crew Power Banner */}
        <div className="mt-8 glass-card rounded-2xl p-5 sm:p-6 border-treasure-400/35 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-treasure-500/20 flex items-center justify-center text-2xl shrink-0">
              {current.emoji}
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white">
                {current.title}
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {current.desc}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-treasure-400 hover:bg-treasure-300 text-ocean-950 font-extrabold text-xs transition-all cursor-pointer font-mono"
          >
            Put The Crew To Work →
          </button>
        </div>

      </div>
    </section>
  );
}
