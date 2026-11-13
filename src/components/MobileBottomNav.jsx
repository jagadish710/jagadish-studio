import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsapp = 'https://wa.me/917358618789?text=Hi%20Jagadish!%20I%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.';

/**
 * Clean Instagram / YouTube style navigation icons with visible inner cutout lines
 */
function HomeNavIcon({ active }) {
  return (
    <svg 
      className={`w-6 h-6 transition-transform duration-200 ${active ? 'scale-110' : ''}`}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={active ? "2.4" : "1.8"} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {active ? (
        <>
          {/* Filled silhouette with distinct inner cutout door */}
          <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H15v-6a3 3 0 0 0-6 0v6H4.5A1.5 1.5 0 0 1 3 20v-9.5z" fill="currentColor" />
          <path d="M9 21.5v-6a3 3 0 0 1 6 0v6" fill="#F8FAFC" stroke="#F8FAFC" strokeWidth="1" />
        </>
      ) : (
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" />
      )}
    </svg>
  );
}

function ServicesNavIcon({ active }) {
  return (
    <svg 
      className={`w-6 h-6 transition-transform duration-200 ${active ? 'scale-110' : ''}`}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={active ? "2.4" : "1.8"} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* 3 crisp stacked layer plates with clear separator lines */}
      <polygon points="12 2 2 7 12 12 22 7 12 2" fill={active ? "currentColor" : "none"} fillOpacity={active ? "0.2" : "0"} />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

function WorkNavIcon({ active }) {
  return (
    <svg 
      className={`w-6 h-6 transition-transform duration-200 ${active ? 'scale-110' : ''}`}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={active ? "2.4" : "1.8"} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Primary sparkle star with inner line detail */}
      <path 
        d="M12 2l2.4 6.8L21 11.2l-5.6 4.4L17.2 22 12 17.8 6.8 22l1.8-6.4L3 11.2l6.6-2.4L12 2z" 
        fill={active ? "currentColor" : "none"} 
        fillOpacity={active ? "0.25" : "0"} 
      />
    </svg>
  );
}

function StudioNavIcon({ active }) {
  return (
    <svg 
      className={`w-6 h-6 transition-transform duration-200 ${active ? 'scale-110' : ''}`}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={active ? "2.4" : "1.8"} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Shield with interior check line cutout */}
      <path 
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
        fill={active ? "currentColor" : "none"} 
        fillOpacity={active ? "0.2" : "0"} 
      />
      <path d="M9 12l2 2 4-4" strokeWidth={active ? "2.6" : "2"} />
    </svg>
  );
}

export default function MobileBottomNav({ 
  activePage, 
  setActivePage, 
  onOpenChat, 
  chatOpen, 
  isDark = false 
}) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 py-1.5 backdrop-blur-2xl transition-colors duration-300 border-t border-slate-200/90 bg-white/95 shadow-[0_-4px_25px_rgba(15,23,42,0.08)]"
      style={{ paddingBottom: 'calc(0.4rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        
        {/* 1. Home */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer ${
            activePage === 'home' 
              ? 'text-rose-600 font-bold' 
              : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Home"
        >
          <HomeNavIcon active={activePage === 'home'} />
          <span className="text-[10px] font-sans leading-none tracking-tight">Home</span>
        </button>

        {/* 2. Services */}
        <button
          onClick={() => handleNav('solutions')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer ${
            activePage === 'solutions' 
              ? 'text-rose-600 font-bold' 
              : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Services"
        >
          <ServicesNavIcon active={activePage === 'solutions'} />
          <span className="text-[10px] font-sans leading-none tracking-tight">Services</span>
        </button>

        {/* 3. Selected Work */}
        <button
          onClick={() => handleNav('work')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer ${
            activePage === 'work' 
              ? 'text-rose-600 font-bold' 
              : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Work"
        >
          <WorkNavIcon active={activePage === 'work'} />
          <span className="text-[10px] font-sans leading-none tracking-tight">Work</span>
        </button>

        {/* 4. Studio / About */}
        <button
          onClick={() => handleNav('about')}
          className={`flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer ${
            activePage === 'about' 
              ? 'text-rose-600 font-bold' 
              : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Studio"
        >
          <StudioNavIcon active={activePage === 'about'} />
          <span className="text-[10px] font-sans leading-none tracking-tight">Studio</span>
        </button>

        {/* 5. Direct WhatsApp Button */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-emerald-600 font-bold transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="WhatsApp"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <WhatsAppIcon className="w-5 h-5 fill-emerald-600 text-emerald-600" />
          </div>
          <span className="text-[10px] font-sans leading-none tracking-tight">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
