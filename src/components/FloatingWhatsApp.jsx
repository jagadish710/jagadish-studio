import React from 'react';
import { playCyberTone } from '../utils/audio';

export default function FloatingWhatsApp({ isDark }) {
  const phoneNumber = '917358618789';
  const defaultMessage = encodeURIComponent(
    'Hi Jagadish! I saw your portfolio at jagadish.online and would like to discuss a website solution for my business.'
  );

  const handleClick = () => {
    playCyberTone('click');
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <button
        onClick={handleClick}
        onMouseEnter={() => playCyberTone('hover')}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Direct WhatsApp Inquiry"
      >
        {/* Pulsing Green Online Ring */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.88-2.059-.98-.276-.101-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.176.2-.352.225-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.3-.019-.462.132-.612.135-.135.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.595-.494-.514-.678-.524-.176-.01-.377-.01-.578-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.079 2.913 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.2-.577-.35zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2 22l4.966-1.399A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.17 8.17 0 0 1-4.215-1.164l-.302-.18-2.955.833.844-2.88-.196-.312A8.17 8.17 0 1 1 12 20.2z"/>
        </svg>

        <div className="flex flex-col text-left font-mono">
          <span className="text-[10px] uppercase font-bold tracking-wider leading-none text-white/90">
            WhatsApp Inquiry
          </span>
          <span className="text-xs font-extrabold leading-tight">
            +91 73586 18789
          </span>
        </div>
      </button>
    </div>
  );
}
