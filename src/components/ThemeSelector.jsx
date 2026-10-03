import React from 'react';
import { playCyberTone } from '../utils/audio';
import { Palette, Check } from 'lucide-react';

export default function ThemeSelector({ activeTheme, setActiveTheme }) {
  const themes = [
    {
      id: 'sky',
      name: 'Linear Sky',
      colors: 'from-cyan-400 to-indigo-500',
      dot: 'bg-cyan-400',
    },
    {
      id: 'violet',
      name: 'Neon Violet',
      colors: 'from-violet-400 to-fuchsia-500',
      dot: 'bg-violet-400',
    },
    {
      id: 'emerald',
      name: 'Hyper Mint',
      colors: 'from-emerald-400 to-teal-400',
      dot: 'bg-emerald-400',
    },
    {
      id: 'amber',
      name: 'Solar Gold',
      colors: 'from-amber-400 to-orange-500',
      dot: 'bg-amber-400',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl">
      <div className="px-2.5 py-1 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 border-r border-white/10 mr-1">
        <Palette className="w-3 h-3 text-white" />
        <span>PALETTE:</span>
      </div>

      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => {
            playCyberTone('click');
            setActiveTheme(t.id);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-mono transition-all cursor-pointer ${
            activeTheme === t.id
              ? 'bg-white/15 text-white font-bold border border-white/20'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
          title={`Switch to ${t.name}`}
        >
          <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
          <span>{t.name}</span>
        </button>
      ))}
    </div>
  );
}
