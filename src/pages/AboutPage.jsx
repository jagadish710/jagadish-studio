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

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function AboutPage({ onOpenPrototypeModal }) {
  const standards = [
    {
      num: '01',
      title: 'Loads in Under 1 Second',
      desc: 'Nobody waits for a slow website. Your site loads instantly on any 4G or 5G mobile phone so customers never leave in frustration.',
      icon: Zap,
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(204,251,241,0.7),transparent_55%),linear-gradient(to_bottom_right,#F0FDFA,#FFFFFF,#F8FAFC)]',
      border: 'border-teal-200/90 hover:border-teal-400',
      tag: 'bg-teal-50 text-teal-800 border-teal-200',
      iconBox: 'bg-teal-100/80 border-teal-200 text-teal-700',
    },
    {
      num: '02',
      title: '1-Tap WhatsApp Direct Chat',
      desc: 'Nobody likes filling out long contact forms. Customers can tap 1 button on their phone to start a WhatsApp conversation with you immediately.',
      icon: MessageSquare,
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(209,250,229,0.75),transparent_55%),linear-gradient(to_bottom_right,#ECFDF5,#FFFFFF,#F0FDFA)]',
      border: 'border-emerald-200/90 hover:border-emerald-400',
      tag: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBox: 'bg-emerald-100/80 border-emerald-200 text-emerald-700',
    },
    {
      num: '03',
      title: '₹0 Monthly Retainer Bills',
      desc: 'You pay once for the website build, that is all. We never bill you ₹5,000 to ₹15,000 every month just to keep your site alive.',
      icon: Lock,
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.7),transparent_55%),linear-gradient(to_bottom_right,#FFF1F2,#FFFFFF,#FFFBEB)]',
      border: 'border-rose-200/90 hover:border-rose-400',
      tag: 'bg-rose-50 text-rose-800 border-rose-200',
      iconBox: 'bg-rose-100/80 border-rose-200 text-rose-700',
    },
    {
      num: '04',
      title: 'Change Prices from Phone in 10s',
      desc: 'Never wait 5 days for a web developer to update a price or announcement. You can edit text and photos from your mobile phone in 10 seconds.',
      icon: Smartphone,
      bg: 'bg-[radial-gradient(ellipse_at_top_left,rgba(224,231,255,0.75),transparent_55%),linear-gradient(to_bottom_right,#EEF2FF,#FFFFFF,#FAF5FF)]',
      border: 'border-indigo-200/90 hover:border-indigo-400',
      tag: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      iconBox: 'bg-indigo-100/80 border-indigo-200 text-indigo-700',
    },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      
      {/* Page Header: Simple, Human & Direct */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-4 bg-white border border-slate-200 text-slate-700 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span className="uppercase tracking-wider">ABOUT MERQURIE &amp; JAGADISH</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight mb-4 leading-tight">
          Big-Tech Rigor for{' '}
          <span className="font-serif italic font-normal text-rose-600">
            Growing Businesses.
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We combine enterprise-grade performance, direct founder partnership, and zero retainer debt so your business can move fast and win customers.
        </p>
      </div>

      {/* Main Founder Story Card with Designful Mesh & Dotted Texture */}
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 bg-[radial-gradient(ellipse_at_top_left,rgba(254,205,211,0.5),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(224,231,255,0.5),transparent_55%),linear-gradient(to_bottom_right,#FFFFFF,#FAFAFC,#F8FAFC)] shadow-xl shadow-slate-900/5 relative overflow-hidden group">
        {/* Subtle Dotted Matrix Texture */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Founder Profile Badge */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-44 h-44 rounded-3xl p-1 bg-gradient-to-br from-rose-500/20 via-slate-200 to-slate-100 shadow-md mb-4">
              <div className="w-full h-full rounded-[22px] bg-white border border-slate-200 flex flex-col items-center justify-center p-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-600 mb-2">
                  <Cpu className="w-8 h-8 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">Jagadish</h3>
                <span className="text-xs font-mono text-rose-600 font-semibold">Founder &amp; Lead Engineer</span>
                <span className="text-[11px] font-mono text-slate-500 mt-0.5">Chennai, India</span>
              </div>
            </div>

            {/* Credibility Badges */}
            <div className="space-y-2 w-full text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200 shadow-2xs text-left flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-black text-xs">
                  A
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Amazon</strong>
                  <span className="text-slate-500 text-[10px]">Former Technical Engineer</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200 shadow-2xs text-left flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-black text-xs">
                  T
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Turing</strong>
                  <span className="text-slate-500 text-[10px]">Frontier AI Systems (Gemini, Claude)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Honest Founder Narrative in Plain English */}
          <div className="md:col-span-8 space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-600 font-bold block">
              THE STORY &amp; MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 leading-tight">
              "Why I Started Merqurie in Chennai"
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                During my career at <strong className="text-slate-900">Amazon</strong> and developing AI systems at <strong className="text-slate-900">Turing</strong>, I saw how top tech companies build software: fast, simple, and laser-focused on the user.
              </p>
              <p>
                When looking at how website agencies treat small businesses in India, I saw an unfair model: agencies build slow WordPress templates that take 8 seconds to load, take 5 days to answer simple emails, and send endless monthly bills of ₹5,000 to ₹15,000 just for "maintenance" that delivers zero value.
              </p>
              <p className="text-slate-900 font-medium bg-rose-50/80 p-3 rounded-xl border border-rose-200/70">
                Merqurie was created to fix this. We build ultra-fast, mobile-first websites that load in under 1 second, connect directly to your WhatsApp, and give you 100% full ownership from day one — with ₹0 monthly retainer fees forever.
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current text-slate-950" />
                <span>Chat with Jagadish</span>
              </a>

              <button
                onClick={onOpenPrototypeModal}
                className="btn-crimson-primary px-5 py-2.5 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-rose-600/15 transition-all active:scale-95 cursor-pointer"
              >
                <span>Request Free Sample</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Core Standards with Colorful Chromatic Mesh Cards */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider block mb-1">
            WHAT WE PROMISE YOU
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Our Four Non-Negotiable Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border ${item.bg} ${item.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 ease-out flex flex-col justify-between relative overflow-hidden group active:scale-[0.99]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.tag} shadow-2xs`}>
                      STANDARD // {item.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl border ${item.iconBox} flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold font-display text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold">
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
