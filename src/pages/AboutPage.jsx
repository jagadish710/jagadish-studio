import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Smartphone, 
  MessageSquare, 
  Lock, 
  Check 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { GoogleLogo, AmazonLogo, TuringLogo } from '../components/CompanyLogos';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function AboutPage({ onOpenPrototypeModal }) {
  const standards = [
    {
      num: '01',
      title: 'Loads in Under 1 Second',
      desc: 'Nobody waits for a slow website. Your site loads instantly on any 4G or 5G mobile phone so customers never bounce to a competitor in frustration.',
      icon: Zap,
      metric: '0.24s Mobile Paint • 99/100 Google Vitals',
      gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
      glow: 'bg-teal-400/20',
      border: 'border-teal-300/80 hover:border-teal-500 hover:shadow-teal-500/15',
      tag: 'bg-teal-50 text-teal-800 border-teal-200',
      iconBox: 'bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25',
    },
    {
      num: '02',
      title: '1-Tap WhatsApp Direct Chat',
      desc: 'Nobody likes filling out long contact forms. Customers can tap 1 button on their phone to start a direct WhatsApp inquiry with you immediately.',
      icon: MessageSquare,
      metric: '1-Tap Lead Route • Zero Form Drop-offs',
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      glow: 'bg-emerald-400/20',
      border: 'border-emerald-300/80 hover:border-emerald-500 hover:shadow-emerald-500/15',
      tag: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBox: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25',
    },
    {
      num: '03',
      title: '₹0 Forced Retainer Contracts',
      desc: 'You pay once for the website build, that is all. We never trap you into expensive mandatory maintenance contracts just to keep your site alive.',
      icon: Lock,
      metric: '100% Legal Code Handover • ₹0 Monthly Bills',
      gradient: 'from-rose-500 via-pink-500 to-amber-500',
      glow: 'bg-rose-400/20',
      border: 'border-rose-300/80 hover:border-rose-500 hover:shadow-rose-500/15',
      tag: 'bg-rose-50 text-rose-800 border-rose-200',
      iconBox: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25',
    },
    {
      num: '04',
      title: 'Change Prices from Phone in 10s',
      desc: 'Never wait 5 days for a web developer to update a price or announcement. You can edit text and photos from your mobile phone in 10 seconds.',
      icon: Smartphone,
      metric: 'Self-Serve Phone Control • Zero Agency Delays',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      glow: 'bg-indigo-400/20',
      border: 'border-indigo-300/80 hover:border-indigo-500 hover:shadow-indigo-500/15',
      tag: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      iconBox: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25',
    },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 text-slate-900">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-white border border-slate-200 text-slate-800 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span className="uppercase tracking-wider">ABOUT MERQURIE &amp; JAGADISH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-950 tracking-tight mb-4 leading-tight">
          Big-Tech Rigor for{' '}
          <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            Growing Businesses.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We combine enterprise-grade performance, direct founder partnership, and full client sovereignty so your business can move fast and win customers.
        </p>
      </div>

      {/* Main Founder Story VIP Card */}
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/60 relative overflow-hidden group">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Founder Profile Badge */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="w-52 h-64 rounded-3xl p-1 bg-gradient-to-br from-rose-500 via-amber-400 to-sky-500 shadow-xl shadow-rose-200/50 mb-4">
              <div className="w-full h-full rounded-[22px] bg-white border border-slate-200 flex flex-col items-center justify-center p-4">
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-3 shadow-lg ring-2 ring-rose-500/20 border-2 border-slate-100 bg-slate-100 shrink-0">
                  <img
                    src="/images/jagadish_founder.png"
                    alt="Jagadish - Founder & Lead Engineer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-950">Jagadish</h3>
                <span className="text-xs font-mono text-rose-600 font-semibold">Founder &amp; Lead Engineer</span>
                <span className="text-[10px] font-mono text-slate-500 mt-0.5">Chennai, India</span>
              </div>
            </div>

            {/* Credibility Badges with Official Logos */}
            <div className="space-y-2 w-full text-xs font-mono">
              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <GoogleLogo className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-slate-950 block font-bold text-xs">Google</strong>
                  <span className="text-slate-600 text-[10px]">Frontier AI Evaluation (Gemini)</span>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <AmazonLogo className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <strong className="text-slate-950 block font-bold text-xs">Amazon</strong>
                  <span className="text-slate-600 text-[10px]">Former Technical Engineer</span>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <TuringLogo className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-slate-950 block font-bold text-xs">Turing</strong>
                  <span className="text-slate-600 text-[10px]">Frontier AI Systems (Gemini, Claude)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Honest Founder Narrative in Plain English */}
          <div className="md:col-span-7 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-600 font-bold block">
              THE STORY &amp; MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 leading-tight">
              "Why I Started Merqurie in Chennai"
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                During my engineering career at <strong className="text-slate-950">Amazon</strong> and evaluating frontier AI models for clients like <strong className="text-slate-950">Google (Gemini)</strong> via <strong className="text-slate-950">Turing</strong>, I saw how top tech companies build software: fast, simple, and laser-focused on user experience.
              </p>
              <p>
                When looking at how website agencies treat small and growing businesses in India, I saw an unfair model: agencies build slow WordPress templates that take 8 seconds to load, take 5 days to answer simple emails, and push expensive recurring maintenance retainers that deliver zero real value.
              </p>
              <p className="text-slate-900 font-medium bg-rose-50 p-4 rounded-2xl border border-rose-200">
                Merqurie was created to fix this. We build ultra-fast, mobile-first websites that load in under 1 second, connect directly to your WhatsApp, and give you 100% full ownership from day one — with ₹0 monthly retainer fees forever.
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat with Jagadish</span>
              </a>

              <button
                onClick={onOpenPrototypeModal}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:brightness-105 text-white flex items-center gap-1.5 shadow-lg shadow-rose-500/25 transition-all active:scale-95 cursor-pointer border border-rose-400/40"
              >
                <span>Request Free Sample</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Core Standards with Ultra-Attractive Glowing Luxury Cards */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider block mb-1">
            WHAT WE PROMISE YOU
          </span>
          <h3 className="text-2xl sm:text-4xl font-black font-display text-slate-950 tracking-tight">
            Our Four Non-Negotiable Standards
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every line of code we write is held to these exact operational benchmarks:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border-2 ${item.border} bg-white shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.99]`}
              >
                {/* Glowing Top Ambient Flare Bar */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.gradient}`} />
                
                {/* Ambient Subtle Radial Glow in Card Corner */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity pointer-events-none ${item.glow}`} />

                {/* Big Artistic Watermark Number in Background */}
                <span className="absolute right-5 bottom-3 text-7xl sm:text-8xl font-black font-display text-slate-100 select-none pointer-events-none group-hover:text-slate-200 transition-colors z-0">
                  {item.num}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.tag} shadow-xs`}>
                      STANDARD // {item.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl ${item.iconBox} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 stroke-[2.4]" />
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-2.5 group-hover:text-rose-600 transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  
                  {/* Micro-metric Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{item.metric}</span>
                  </div>
                </div>

                <div className="relative z-10 mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                  <Check className="w-4 h-4 stroke-[3] text-emerald-600" />
                  <span>Guaranteed on Every Single Project</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
