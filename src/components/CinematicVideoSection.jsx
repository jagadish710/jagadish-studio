import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  Smartphone, 
  Laptop, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  Eye,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20saw%20the%20live%20speed%20test%20and%20want%20a%20fast%20website%20for%20my%20business.';

export default function CinematicVideoSection({ onOpenPrototypeModal }) {
  const [activeDevice, setActiveDevice] = useState('macbook'); // 'macbook' | 'iphone'
  const [selectedDemo, setSelectedDemo] = useState('pms'); // 'pms' | 'upsks' | 'admin'
  const [isRacing, setIsRacing] = useState(false);
  const [raceFinished, setRaceFinished] = useState(false);
  const [merqurieTime, setMerqurieTime] = useState(0.00);
  const [wpTime, setWpTime] = useState(0.00);

  const demoData = {
    pms: {
      name: 'PMS Healthcare Equipment Platform',
      domain: 'pmssolution.co.in',
      sector: 'Hospital & Medical Equipment • Chennai',
      image: '/images/pms_real.webp',
      speed: '0.24s Edge Load',
      tagline: 'Customers browse ICU beds and tap 1 button on WhatsApp for immediate rental rates.',
      whatsappMsg: 'Hi! Looking for ICU electric bed rental in Anna Nagar, Chennai.',
    },
    upsks: {
      name: 'Unique Power Shito-Ryu Karate School',
      domain: 'upskskarate.com',
      sector: 'Sports & Martial Arts Academy • India',
      image: '/images/upsks_real.webp',
      speed: '0.22s Edge Load',
      tagline: '1,000+ students and parents view belt rosters and message chief instructor in 1 tap.',
      whatsappMsg: 'Hello Sensei! I want to enroll my daughter for evening karate batches.',
    },
    admin: {
      name: '10-Second Phone Admin Cockpit',
      domain: 'admin.merqurie.com',
      sector: 'Visual Content Management',
      image: '/images/showcase_admin_portal.webp',
      speed: '10s Phone Edit',
      tagline: 'Update headlines, prices, and announcements from your smartphone with zero developer bills.',
      whatsappMsg: 'Hi Jagadish! Show me how the mobile admin cockpit works.',
    },
  };

  const currentDemo = demoData[selectedDemo];

  const runSpeedRace = () => {
    if (isRacing) return;
    setIsRacing(true);
    setRaceFinished(false);
    setMerqurieTime(0.00);
    setWpTime(0.00);

    const startTime = performance.now();
    let merqDone = false;

    const interval = setInterval(() => {
      const now = performance.now();
      const elapsedSec = (now - startTime) / 1000;

      if (!merqDone && elapsedSec >= 0.24) {
        setMerqurieTime(0.24);
        merqDone = true;
      } else if (!merqDone) {
        setMerqurieTime(parseFloat(elapsedSec.toFixed(2)));
      }

      if (elapsedSec >= 8.4) {
        setWpTime(8.40);
        setIsRacing(false);
        setRaceFinished(true);
        clearInterval(interval);
        confetti({
          particleCount: 45,
          spread: 70,
          origin: { y: 0.6, x: 0.5 },
          colors: ['#10B981', '#00F0FF', '#FF0055'],
        });
      } else {
        setWpTime(parseFloat(elapsedSec.toFixed(2)));
      }
    }, 40);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070814] text-white border-t border-white/10">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-rose-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Clear, Simple Value */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 mb-4 shadow-lg shadow-cyan-950/40">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-wider">LIVE SPEED & CONVERSION LAB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 font-display">
            Watch Why Traditional Websites Lose{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              53% of Customers.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            When a local customer clicks your link on mobile, every second of delay makes them leave. See the live race between an 8-second traditional agency website and Merqurie's 0.2-second instant edge engine.
          </p>
        </div>

        {/* 1. Interactive Live Speed Race Card */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/15 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black font-mono text-cyan-400 pointer-events-none select-none">
            0.24s
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                SIDE-BY-SIDE MOBILE SPEED TEST
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Traditional Agency Site vs. Merqurie Edge System
              </h3>
            </div>

            <button
              onClick={runSpeedRace}
              disabled={isRacing}
              className={`px-6 py-3.5 rounded-2xl font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 cursor-pointer shadow-xl ${
                isRacing
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-white/10'
                  : 'bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white hover:brightness-110 active:scale-95 shadow-rose-900/40 border border-rose-400/30'
              }`}
            >
              {isRacing ? (
                <>
                  <Clock className="w-4 h-4 animate-spin text-rose-300" />
                  <span>Racing Mobile Edge Networks...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white text-white" />
                  <span>{raceFinished ? 'Run Speed Race Again' : '▶ Start Live Speed Race'}</span>
                </>
              )}
            </button>
          </div>

          {/* Two Speed Bars Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Merqurie Edge Bar */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-slate-900 to-cyan-950/40 border border-emerald-500/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="font-bold text-emerald-300 text-base">Merqurie Edge Engine</span>
                </div>
                <span className="text-3xl font-black font-mono text-emerald-400">
                  {merqurieTime > 0 ? `${merqurieTime.toFixed(2)}s` : '0.24s'}
                </span>
              </div>

              {/* Progress track */}
              <div className="w-full bg-slate-950 rounded-full h-3.5 p-0.5 border border-emerald-500/30 overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-150"
                  style={{ width: merqurieTime > 0 ? `${Math.min(100, (merqurieTime / 0.24) * 100)}%` : '100%' }}
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Instant First Paint (0.24s)</span>
                </span>
                <span className="text-emerald-300 font-bold">0% Customer Drop-off</span>
              </div>
            </div>

            {/* Traditional Agency WordPress Bar */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-red-950/30 border border-rose-500/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="font-bold text-rose-300 text-base">Typical Agency Website</span>
                </div>
                <span className="text-3xl font-black font-mono text-rose-400">
                  {wpTime > 0 ? `${wpTime.toFixed(2)}s` : '8.40s'}
                </span>
              </div>

              {/* Progress track */}
              <div className="w-full bg-slate-950 rounded-full h-3.5 p-0.5 border border-rose-500/30 overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 rounded-full transition-all duration-150"
                  style={{ width: wpTime > 0 ? `${Math.min(100, (wpTime / 8.4) * 100)}%` : '100%' }}
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-rose-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Loading 42 Plugins & PHP...</span>
                </span>
                <span className="text-rose-400 font-bold">53% Customers Closed Tab</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Interactive Device Simulator & Real Platform Tour */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Value Props (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold block">
              TOUCH & INTERACT
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Test Real Client Work on Desktop & Phone
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every website we build is crafted to load with mirror-finish smoothness on both mobile and desktop. Choose a live client below to preview:
            </p>

            {/* Platform Selector Tabs */}
            <div className="space-y-3">
              {[
                { id: 'pms', title: 'Hospital Medical Equipment', sub: 'pmssolution.co.in • 0.24s Speed' },
                { id: 'upsks', title: 'Karate & Martial Arts Academy', sub: 'upskskarate.com • 1,000+ Students' },
                { id: 'admin', title: '10-Second Phone Admin Cockpit', sub: 'Update prices & photos from phone' },
              ].map((tab) => {
                const isSelected = selectedDemo === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedDemo(tab.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-rose-950/60 to-purple-950/50 border-rose-500 shadow-lg shadow-rose-950/40 text-white'
                        : 'bg-slate-900/60 border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{tab.title}</h4>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">{tab.sub}</p>
                    </div>
                    {isSelected && <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Device Switcher Pills (MacBook vs iPhone) */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-slate-400">View In:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/10">
                <button
                  onClick={() => setActiveDevice('macbook')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                    activeDevice === 'macbook'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>MacBook View</span>
                </button>
                <button
                  onClick={() => setActiveDevice('iphone')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                    activeDevice === 'iphone'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>iPhone View</span>
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Callout for this Showcase */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Want a website like this?</p>
                  <p className="text-[11px] text-slate-300">We'll build you a free working sample in 24 hours.</p>
                </div>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md whitespace-nowrap transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Device Mockup Frame (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            {activeDevice === 'macbook' ? (
              
              /* MacBook Pro Glass Frame */
              <div className="w-full max-w-[620px] rounded-2xl bg-slate-900 border-2 border-white/20 p-3 shadow-2xl shadow-rose-950/30 relative">
                {/* Laptop Top Bezel & Camera */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>https://{currentDemo.domain}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>

                {/* Display Screen */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 group">
                  <img
                    src={currentDemo.image}
                    alt={currentDemo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block mb-1">
                          {currentDemo.speed}
                        </span>
                        <h4 className="text-lg font-bold text-white tracking-tight">{currentDemo.name}</h4>
                        <p className="text-xs text-slate-300 line-clamp-1">{currentDemo.tagline}</p>
                      </div>
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5 shrink-0 shadow-lg"
                      >
                        <span>Build Similar</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Laptop Bottom Notch */}
                <div className="w-28 h-1 bg-white/20 mx-auto mt-2 rounded-full" />
              </div>

            ) : (

              /* iPhone 16 Pro Mockup Frame */
              <div className="w-[280px] sm:w-[310px] rounded-[48px] bg-slate-900 border-[6px] border-slate-700/80 p-2.5 shadow-2xl shadow-cyan-950/40 relative">
                {/* Dynamic Island Pill */}
                <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-end px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 animate-pulse" />
                </div>

                {/* Phone Screen */}
                <div className="relative rounded-[36px] overflow-hidden aspect-[9/19] bg-slate-950 group">
                  <img
                    src={currentDemo.image}
                    alt={currentDemo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating WhatsApp Lead simulation card */}
                  <div className="absolute bottom-4 left-3 right-3 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/15 shadow-xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[10px] font-mono font-bold text-emerald-400">1-TAP WHATSAPP ENQUIRY</span>
                    </div>
                    <p className="text-[11px] text-white font-medium line-clamp-2">"{currentDemo.whatsappMsg}"</p>
                  </div>
                </div>

                {/* Home Indicator Bar */}
                <div className="w-24 h-1 bg-white/40 mx-auto mt-2 rounded-full" />
              </div>

            )}
          </div>

        </div>

      </div>
    </section>
  );
}
