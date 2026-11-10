import React from 'react';
import { 
  Home, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Bot 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

export default function MobileBottomNav({ 
  activePage, 
  setActivePage, 
  onOpenChat, 
  chatOpen, 
  isDark = true 
}) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 py-2 backdrop-blur-2xl transition-colors duration-300 ${
        isDark 
          ? 'border-t border-zinc-800/90 bg-[#09090D]/95 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]' 
          : 'border-t border-slate-200/90 bg-white/95 shadow-[0_-4px_25px_rgba(15,23,42,0.08)]'
      }`}
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        
        {/* 1. Overview */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'home' 
              ? (isDark ? 'text-white' : 'text-rose-600 font-bold') 
              : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-900')
          }`}
          aria-label="Home"
        >
          <div className="relative">
            <Home 
              className={`w-5 h-5 transition-transform duration-200 ${
                activePage === 'home' ? 'fill-current scale-110' : ''
              }`} 
            />
            {activePage === 'home' && (
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-rose-600 shadow-[0_0_8px_#e11d48]'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Home</span>
        </button>

        {/* 2. Services */}
        <button
          onClick={() => handleNav('solutions')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'solutions' 
              ? (isDark ? 'text-white' : 'text-rose-600 font-bold') 
              : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-900')
          }`}
          aria-label="Services"
        >
          <div className="relative">
            <Layers 
              className={`w-5 h-5 transition-transform duration-200 ${
                activePage === 'solutions' ? 'fill-current scale-110' : ''
              }`} 
            />
            {activePage === 'solutions' && (
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-rose-600 shadow-[0_0_8px_#e11d48]'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Services</span>
        </button>

        {/* 3. Selected Work */}
        <button
          onClick={() => handleNav('work')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'work' 
              ? (isDark ? 'text-white' : 'text-rose-600 font-bold') 
              : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-900')
          }`}
          aria-label="Work"
        >
          <div className="relative">
            <Sparkles 
              className={`w-5 h-5 transition-transform duration-200 ${
                activePage === 'work' ? 'fill-current scale-110' : ''
              }`} 
            />
            {activePage === 'work' && (
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-cyan-400 shadow-[0_0_8px_#06b6d4]' : 'bg-rose-600 shadow-[0_0_8px_#e11d48]'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Work</span>
        </button>

        {/* 4. Studio */}
        <button
          onClick={() => handleNav('about')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'about' 
              ? (isDark ? 'text-white' : 'text-rose-600 font-bold') 
              : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-900')
          }`}
          aria-label="Studio"
        >
          <div className="relative">
            <ShieldCheck 
              className={`w-5 h-5 transition-transform duration-200 ${
                activePage === 'about' ? 'fill-current scale-110' : ''
              }`} 
            />
            {activePage === 'about' && (
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-rose-600 shadow-[0_0_8px_#e11d48]'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Studio</span>
        </button>

        {/* 5. Direct WhatsApp */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-emerald-500 hover:text-emerald-400 transition-all duration-200 active:scale-90 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <WhatsAppIcon className="w-5 h-5 fill-current transition-transform duration-200 hover:scale-110" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight font-semibold text-emerald-500">
            WhatsApp
          </span>
        </a>

      </div>
    </nav>
  );
}
