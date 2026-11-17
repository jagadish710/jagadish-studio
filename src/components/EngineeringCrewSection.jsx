import React, { useState } from 'react';
import { Zap, ShieldCheck, Compass, Utensils, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EngineeringCrewSection({ onOpenQuote }) {
  const [activeMember, setActiveMember] = useState('captain');

  const crewDetails = {
    captain: {
      icon: Zap,
      title: 'Captain — Sovereign Architecture & Sub-0.3s Edge Engine',
      desc: 'Orchestrates decoupled edge architecture deployed across 300+ global CDN nodes. Delivers instant first-paint speeds with zero database lag and zero vendor lock-in.',
      accent: 'text-treasure-400',
      badgeBg: 'bg-treasure-500/20 text-treasure-300',
      tag: 'ARCHITECTURE • SUB-0.3S',
      stat: '0.24s Edge',
      role: 'Lead Architect & Systems Engineer',
    },
    zoro: {
      icon: ShieldCheck,
      title: 'Zoro R. — Zero-Vulnerability Security & Pure Code Standards',
      desc: 'Eliminates bloated plugins, unpatched PHP vulnerabilities, and memory leaks. Hardens every deployment with automated SSL, DDoS shielding, and 99.99% uptime.',
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300',
      tag: 'SECURITY • 0 PLUGINS',
      stat: '99.99% Uptime',
      role: 'Core Systems & Infrastructure Security',
    },
    nami: {
      icon: Compass,
      title: 'Nami N. — Conversion Psychology & WhatsApp Funnel Routing',
      desc: 'Charts high-converting buyer navigation paths, structured Google SEO schemas, and friction-free 1-tap WhatsApp quote buttons that turn search traffic into booked clients.',
      accent: 'text-orange-400',
      badgeBg: 'bg-orange-500/20 text-orange-300',
      tag: 'SEO • CONVERSION FUNNEL',
      stat: '3x Leads',
      role: 'Lead Funnel Cartographer & SEO Strategist',
    },
    sanji: {
      icon: Utensils,
      title: 'Sanji V. — Fluid Responsive UI/UX & Visual Polish',
      desc: 'Crafts responsive interfaces with sub-millisecond interaction feedback, thumb-friendly touch targets, and razor-sharp typographic balance on both flagship and budget phones.',
      accent: 'text-cyanline-400',
      badgeBg: 'bg-cyanline-500/20 text-cyanline-300',
      tag: 'UI/UX • MOBILE EXCELLENCE',
      stat: '100% Fluid',
      role: 'Performance UI/UX & Design Engineer',
    },
  };

  const current = crewDetails[activeMember];
  const CurrentIcon = current.icon;

  return (
    <section id="crew" className="py-20 relative border-t border-white/5 bg-ocean-950/70 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-treasure-400 font-mono">
            Four Specialists • One Unstoppable Website
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Meet Your <span className="text-gold-gradient">Engineering Crew</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every website we build unifies four uncompromising disciplines—sub-0.3s edge speed, zero-vulnerability code, conversion psychology, and precision mobile ergonomics. Tap any specialist below:
          </p>
        </div>

        {/* 4 Crew Cards Grid - ZERO EMOJIS, SLEEK SVG ICONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Crew 1: Captain */}
          <div
            onClick={() => setActiveMember('captain')}
            className={`crew-card glass-card glass-card-hover rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all ${
              activeMember === 'captain' ? 'border-2 border-treasure-400 shadow-xl shadow-amber-500/15' : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-treasure-500/20 text-treasure-300 text-[11px] font-extrabold font-mono flex items-center gap-1">
                  <Zap className="w-3 h-3 text-treasure-400" />
                  <span>CAPTAIN • SPEED</span>
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

              <h3 className="font-display text-xl font-bold text-white text-center">Captain</h3>
              <p className="text-xs font-bold text-treasure-400 text-center mb-3">Sovereign Architecture & Speed</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Stretches your site's performance to <strong className="text-white">0.24s load times</strong> with zero heavy plugins so mobile customers never bounce.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-treasure-300 font-mono flex items-center justify-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>{activeMember === 'captain' ? 'Specialty Active' : 'Select Specialist'}</span>
            </div>
          </div>

          {/* Crew 2: Zoro R. */}
          <div
            onClick={() => setActiveMember('zoro')}
            className={`crew-card glass-card glass-card-hover rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all ${
              activeMember === 'zoro' ? 'border-2 border-emerald-400 shadow-xl shadow-emerald-500/15' : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>SECURITY • ZERO BUGS</span>
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

              <h3 className="font-display text-xl font-bold text-white text-center">Zoro R.</h3>
              <p className="text-xs font-bold text-emerald-400 text-center mb-3">Pure Architecture & Zero-Bug Core</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Slices away fragile third-party plugins, security backdoors, and crash points with <strong className="text-white">Cloudflare Edge SSL</strong>.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-emerald-300 font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{activeMember === 'zoro' ? 'Specialty Active' : 'Select Specialist'}</span>
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
                <span className="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-[11px] font-extrabold font-mono flex items-center gap-1">
                  <Compass className="w-3 h-3 text-orange-400" />
                  <span>SEO • CONVERSION</span>
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
              <p className="text-xs font-bold text-orange-400 text-center mb-3">Google SEO & Funnel Cartographer</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Engineers buyer psychology, <strong className="text-white">Google SEO rankings</strong>, and 1-tap WhatsApp quote buttons that turn traffic into paying clients.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-orange-300 font-mono flex items-center justify-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>{activeMember === 'nami' ? 'Specialty Active' : 'Select Specialist'}</span>
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
                <span className="px-2.5 py-1 rounded-lg bg-cyanline-500/20 text-cyanline-300 text-[11px] font-extrabold font-mono flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-cyanline-400" />
                  <span>UI/UX • MOBILE</span>
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
              <p className="text-xs font-bold text-cyanline-400 text-center mb-3">Mobile UI/UX & Visual Ergonomics</p>
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                Plates mouth-watering visuals and thumb-friendly interactions that look <strong className="text-white">mirror-smooth on every phone</strong>.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 text-center text-xs font-extrabold text-cyanline-300 font-mono flex items-center justify-center gap-1.5">
              <Utensils className="w-3.5 h-3.5" />
              <span>{activeMember === 'sanji' ? 'Specialty Active' : 'Select Specialist'}</span>
            </div>
          </div>

        </div>

        {/* Live Crew Power Banner - ZERO EMOJIS, SLEEK SVG ICON */}
        <div className="mt-8 glass-card rounded-2xl p-5 sm:p-6 border-treasure-400/35 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-treasure-500/20 border border-treasure-400/30 flex items-center justify-center text-treasure-400 shrink-0 shadow-lg shadow-amber-500/10">
              <CurrentIcon className="w-6 h-6 stroke-[2.2]" />
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
            className="shrink-0 px-5 py-2.5 rounded-xl bg-treasure-400 hover:bg-treasure-300 text-ocean-950 font-extrabold text-xs transition-all cursor-pointer font-mono shadow-md shadow-amber-400/25 flex items-center gap-1.5"
          >
            <span>Put The Crew To Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
