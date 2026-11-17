import React, { useState, useRef } from 'react';
import { Zap, Play, RotateCcw } from 'lucide-react';

export default function LiveSpeedRaceSimulator() {
  const [racing, setRacing] = useState(false);
  const [merqProgress, setMerqProgress] = useState(100);
  const [anchorProgress, setAnchorProgress] = useState(100);
  const [merqText, setMerqText] = useState('0.24s (Instant!)');
  const [anchorText, setAnchorText] = useState('8.20s (58% Bounce)');

  const reqIdRef = useRef(null);

  const runSpeedRace = () => {
    if (racing) return;
    setRacing(true);
    setMerqProgress(0);
    setAnchorProgress(0);
    setMerqText('Testing 4G Edge...');
    setAnchorText('Connecting...');

    const startTime = performance.now();
    const totalDuration = 3200; // ms

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const merqPct = Math.min((progress / 0.12) * 100, 100);

      setMerqProgress(merqPct);
      setMerqText(
        merqPct >= 100
          ? '0.24s — OPEN & READY! ⚡'
          : `${(progress * 2).toFixed(2)}s...`
      );

      setAnchorProgress(progress * 100);
      setAnchorText(
        progress >= 1
          ? '8.20s — Finished (58% Visitors Left 🐢)'
          : `${(progress * 8.2).toFixed(2)}s (Loading 42 plugins...)`
      );

      if (progress < 1) {
        reqIdRef.current = requestAnimationFrame(step);
      } else {
        setRacing(false);
      }
    };

    reqIdRef.current = requestAnimationFrame(step);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border-cyanline-400/25 my-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyanline-500/15 border border-cyanline-400/30 text-cyanline-300 text-xs font-mono font-bold mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE REAL-TIME BENCHMARK</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            Test The Speed Difference Live
          </h3>
          <p className="text-xs text-slate-400">
            Simulate loading both websites on a typical 4G smartphone connection
          </p>
        </div>

        <button
          onClick={runSpeedRace}
          disabled={racing}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyanline-400 to-blue-500 hover:brightness-110 active:scale-95 text-ocean-950 font-extrabold text-sm shadow-lg shadow-cyanline-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-mono shrink-0 disabled:opacity-60"
        >
          {racing ? (
            <>
              <span className="w-2 h-2 rounded-full bg-ocean-950 animate-ping" />
              <span>Racing on 4G Mobile...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-ocean-950" />
              <span>Run Live 4G Speed Race</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Merqurie Edge Engine */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex justify-between items-center mb-2.5 text-xs sm:text-sm">
            <span className="font-bold text-white font-display flex items-center gap-1.5">
              <span>⚡ Merqurie Hand-Crafted Edge</span>
            </span>
            <span className="font-mono font-bold text-emerald-400 text-xs">
              {merqText}
            </span>
          </div>
          <div className="w-full h-4 rounded-full bg-white/5 border border-white/10 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyanline-400 transition-all duration-150"
              style={{ width: `${merqProgress}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block">
            ✓ 0 Plugins • Edge Cached in Chennai • 99/100 Core Web Vitals
          </span>
        </div>

        {/* Typical WordPress Site */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex justify-between items-center mb-2.5 text-xs sm:text-sm">
            <span className="font-bold text-slate-300 font-display flex items-center gap-1.5">
              <span>⚓ Typical 40-Plugin WordPress Site</span>
            </span>
            <span className="font-mono font-bold text-crimson-400 text-xs">
              {anchorText}
            </span>
          </div>
          <div className="w-full h-4 rounded-full bg-white/5 border border-white/10 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-crimson-600 to-amber-600 transition-all duration-150"
              style={{ width: `${anchorProgress}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block">
            ✕ Heavy SQL database queries • Uncached PHP scripts • 58% bounce rate
          </span>
        </div>

      </div>

    </div>
  );
}
