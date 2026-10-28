import React from 'react';
import { 
  Home, 
  Layers, 
  Sparkles, 
  Bot, 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { playCyberTone } from '../utils/audio';

export default function MobileBottomNav({ 
  activePage, 
  setActivePage, 
  onOpenChat, 
  chatOpen, 
  isDark = true 
}) {
  const handleNav = (pageId) => {
    playCyberTone('click');
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAiClick = () => {
    playCyberTone('click');
    onOpenChat();
  };

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 py-2 border-t backdrop-blur-2xl transition-all duration-300 ${
        isDark 
          ? 'bg-[#09090b]/95 border-zinc-800/90 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-white/95 border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]'
      }`}
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        
        {/* 1. Home */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'home'
              ? isDark ? 'text-white' : 'text-slate-950 font-bold'
              : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700'
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
                isDark ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-slate-950'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Home</span>
        </button>

        {/* 2. Solutions */}
        <button
          onClick={() => handleNav('solutions')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'solutions'
              ? isDark ? 'text-white' : 'text-slate-950 font-bold'
              : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700'
          }`}
          aria-label="Solutions"
        >
          <div className="relative">
            <Layers 
              className={`w-5 h-5 transition-transform duration-200 ${
                activePage === 'solutions' ? 'fill-current scale-110' : ''
              }`} 
            />
            {activePage === 'solutions' && (
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-slate-950'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Solutions</span>
        </button>

        {/* 3. Live Demo (Interactive Workstation / Simulator) */}
        <button
          onClick={() => handleNav('work')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activePage === 'work'
              ? isDark ? 'text-white' : 'text-slate-950 font-bold'
              : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700'
          }`}
          aria-label="Live Demo"
        >
          <div className="relative">
            <Sparkles 
              className={`w-5 h-5 transition-transform duration-200 ${
                activePage === 'work' ? 'fill-current scale-110 text-emerald-400' : ''
              }`} 
            />
            {activePage === 'work' && (
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">Live Demo</span>
        </button>

        {/* 4. AI Concierge */}
        <button
          onClick={handleAiClick}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
            chatOpen
              ? isDark ? 'text-white' : 'text-slate-950 font-bold'
              : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700'
          }`}
          aria-label="AI Concierge"
        >
          <div className="relative">
            <Bot 
              className={`w-5 h-5 transition-transform duration-200 ${
                chatOpen ? 'fill-current scale-110' : ''
              }`} 
            />
            {chatOpen && (
              <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-slate-950'
              }`} />
            )}
          </div>
          <span className="text-[10px] font-mono leading-none tracking-tight">AI Desk</span>
        </button>

        {/* 5. Direct WhatsApp */}
        <a
          href="https://wa.me/917358618789?text=Hi%20Merqurie%20Team!%20I%20am%20interested%20in%20a%20website%20solution."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playCyberTone('click')}
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
