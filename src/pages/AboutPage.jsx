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
      desc: 'Nobody waits for a slow website. Your site loads instantly on any 4G or 5G mobile phone so customers never leave in frustration.',
      icon: Zap,
      bg: 'bg-white',
      border: 'border-teal-200 hover:border-teal-400',
      tag: 'bg-teal-50 text-teal-800 border-teal-200',
      iconBox: 'bg-teal-50 border-teal-200 text-teal-600',
    },
    {
      num: '02',
      title: '1-Tap WhatsApp Direct Chat',
      desc: 'Nobody likes filling out long contact forms. Customers can tap 1 button on their phone to start a WhatsApp conversation with you immediately.',
      icon: MessageSquare,
      bg: 'bg-white',
      border: 'border-emerald-200 hover:border-emerald-400',
      tag: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBox: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    },
    {
      num: '03',
      title: '₹0 Monthly Retainer Bills',
      desc: 'You pay once for the website build, that is all. We never bill you ₹5,000 to ₹15,000 every month just to keep your site alive.',
      icon: Lock,
      bg: 'bg-white',
      border: 'border-rose-200 hover:border-rose-400',
      tag: 'bg-rose-50 text-rose-800 border-rose-200',
      iconBox: 'bg-rose-50 border-rose-200 text-rose-600',
    },
    {
      num: '04',
      title: 'Change Prices from Phone in 10s',
      desc: 'Never wait 5 days for a web developer to update a price or announcement. You can edit text and photos from your mobile phone in 10 seconds.',
      icon: Smartphone,
      bg: 'bg-white',
      border: 'border-indigo-200 hover:border-indigo-400',
      tag: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      iconBox: 'bg-indigo-50 border-indigo-200 text-indigo-600',
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
          We combine enterprise-grade performance, direct founder partnership, and zero retainer debt so your business can move fast and win customers.
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
                When looking at how website agencies treat small and growing businesses in India, I saw an unfair model: agencies build slow WordPress templates that take 8 seconds to load, take 5 days to answer simple emails, and send endless monthly bills of ₹5,000 to ₹15,000 just for "maintenance" that delivers zero value.
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

      {/* 4 Core Standards with Glowing Cards */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider block mb-1">
            WHAT WE PROMISE YOU
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-950">
            Our Four Non-Negotiable Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border ${item.bg} ${item.border} shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.99]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.tag} shadow-2xs`}>
                      STANDARD // {item.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl border ${item.iconBox} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold font-display text-slate-950 mb-2 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-600" />
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
