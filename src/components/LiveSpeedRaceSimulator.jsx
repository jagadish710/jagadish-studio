import React, { useState, useRef } from 'react';
import { Zap, Play, AlertTriangle } from 'lucide-react';

/**
 * An intentionally illustrative animation, not a benchmark.
 *
 * It compares what a lean, hand-built payload feels like next to a plugin-heavy
 * stack. It never prints invented load times or Lighthouse scores — the numbers
 * it shows are the page-weight budget (≈0.5 MB) the studio actually builds to.
 */
export default function LiveSpeedRaceSimulator() {
  const [racing, setRacing] = useState(false);
  const [merqProgress, setMerqProgress] = useState(100);
  const [anchorProgress, setAnchorProgress] = useState(100);
  const [merqText, setMerqText] = useState('≈0.5 MB — ready to use');
  const [anchorText, setAnchorText] = useState('Heavy plugin stack');

  const reqIdRef = useRef(null);

  const runSpeedRace = () => {
    if (racing) return;
    setRacing(true);
    setMerqProgress(0);
    setAnchorProgress(0);
    setMerqText('Loading lean payload...');
    setAnchorText('Downloading plugin scripts...');

    const startTime = performance.now();
    const totalDuration = 3200; // ms

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const merqPct = Math.min((progress / 0.12) * 100, 100);

      setMerqProgress(merqPct);
      setMerqText(
        merqPct >= 100
          ? '≈0.5 MB — ready to use'
          : 'Loading lean payload...'
      );

      setAnchorProgress(progress * 100);
      setAnchorText(
        progress >= 1
          ? 'Heavy plugin stack — still working'
          : 'Downloading plugin scripts...'
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
            <span>ILLUSTRATIVE PAYLOAD COMPARISON</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            See What A Lean Build Avoids
          </h3>
          <p className="text-xs text-slate-300 max-w-lg">
            A visual illustration, not a benchmark: we build to ≈0.5 MB per mobile page, so visitors are not waiting on plugin scripts to download.
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
              <span>Comparing payloads...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-ocean-950" />
              <span>Run The Comparison</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* Merqurie Edge Engine */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex justify-between items-center gap-3 mb-2.5 text-xs sm:text-sm">
            <span className="font-bold text-white font-display flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Merqurie Hand-Crafted Edge</span>
            </span>
            <span className="font-mono font-bold text-emerald-400 text-xs text-right">
              {merqText}
            </span>
          </div>
          <div className="w-full h-4 rounded-full bg-white/5 border border-white/10 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyanline-400 transition-all duration-150"
              style={{ width: `${merqProgress}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-300 mt-2 block">
            ✓ 0 plugins • ≈0.5 MB mobile payload • static edge delivery
          </span>
        </div>

        {/* Typical WordPress Site */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex justify-between items-center gap-3 mb-2.5 text-xs sm:text-sm">
            <span className="font-bold text-slate-300 font-display flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-crimson-400" />
              <span>Typical 40-Plugin WordPress Site</span>
            </span>
            <span className="font-mono font-bold text-crimson-400 text-xs text-right">
              {anchorText}
            </span>
          </div>
          <div className="w-full h-4 rounded-full bg-white/5 border border-white/10 p-0.5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-crimson-600 to-amber-600 transition-all duration-150"
              style={{ width: `${anchorProgress}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-300 mt-2 block">
            ✕ Heavy plugin stack • uncached PHP and database calls before first paint
          </span>
        </div>

      </div>

    </div>
  );
}
