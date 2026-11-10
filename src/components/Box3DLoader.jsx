import React, { useEffect, useState } from 'react';

export default function Box3DLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast simulated progress to ~850ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 450);
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-400 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        
        {/* 3D Perspective Folding Cube */}
        <div className="relative w-14 h-14">
          <div className="box-3d-spinner w-full h-full rounded-xl bg-gradient-to-tr from-rose-600 to-red-500 shadow-xl shadow-rose-500/30 flex items-center justify-center border border-white/40">
            <span className="font-display font-black text-white text-lg tracking-wider">
              M
            </span>
          </div>
        </div>

        {/* Brand Wordmark & Animated Progress Counter */}
        <div className="text-center space-y-1.5">
          <div className="flex items-center justify-center gap-2">
            <span className="font-display font-black text-slate-900 tracking-[0.2em] text-sm">
              MERQURIE
            </span>
            <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">
              {progress}%
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
            Initializing high-speed edge platform
          </p>
        </div>

        {/* Progress Micro-Bar */}
        <div className="w-36 h-1 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
}
