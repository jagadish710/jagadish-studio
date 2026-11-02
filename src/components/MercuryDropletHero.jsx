import React from 'react';
import { motion } from 'framer-motion';

export default function MercuryDropletHero() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center pointer-events-none select-none">
      
      {/* Background Soft Ice-Blue Ambient Glow */}
      <div className="absolute inset-0 rounded-full blur-[80px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent opacity-80" />

      {/* SVG Goo Filter & Liquid Quicksilver Beads */}
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full relative z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Goo Filter: Blurs and thresholds alpha to fuse droplets like mercury */}
          <filter id="mercuryGoo" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 24 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          {/* Liquid Metal Chrome Gradient (Silver, Titanium, Platinum) */}
          <linearGradient id="mercuryMetal" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E6EAF1" />
            <stop offset="50%" stopColor="#B9C1CE" />
            <stop offset="75%" stopColor="#8E97A6" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Specular Highlight Sheen */}
          <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Ice Refraction Ring */}
          <radialGradient id="iceHalo" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#8CB4FF" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#1E293B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#07070A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Group with Goo Filter applied to organic moving liquid beads */}
        <g filter="url(#mercuryGoo)">
          {/* Central Main Liquid Mercury Nucleus */}
          <motion.circle
            cx="200"
            cy="200"
            r="86"
            fill="url(#mercuryMetal)"
            animate={{
              scale: [1, 1.04, 0.98, 1],
              cx: [200, 203, 197, 200],
              cy: [200, 197, 202, 200],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Satellite Droplet 1 (Drifts, fuses into center, and pulls away) */}
          <motion.circle
            cx="140"
            cy="150"
            r="42"
            fill="url(#mercuryMetal)"
            animate={{
              cx: [135, 175, 145, 135],
              cy: [145, 175, 135, 145],
              scale: [1, 1.12, 0.95, 1]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Satellite Droplet 2 (Smooth orbital drift) */}
          <motion.circle
            cx="265"
            cy="225"
            r="38"
            fill="url(#mercuryMetal)"
            animate={{
              cx: [265, 225, 275, 265],
              cy: [225, 215, 245, 225],
              scale: [1, 0.92, 1.08, 1]
            }}
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Tiny Floating Micro-droplet */}
          <motion.circle
            cx="220"
            cy="120"
            r="20"
            fill="url(#mercuryMetal)"
            animate={{
              cx: [220, 205, 230, 220],
              cy: [120, 155, 110, 120],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Bottom Satellite Droplet */}
          <motion.circle
            cx="170"
            cy="275"
            r="32"
            fill="url(#mercuryMetal)"
            animate={{
              cx: [170, 190, 160, 170],
              cy: [275, 240, 280, 275],
            }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </g>

        {/* Specular Light Reflections over the surface (Mirror Sheen) */}
        <ellipse
          cx="175"
          cy="165"
          rx="52"
          ry="30"
          transform="rotate(-25 175 165)"
          fill="url(#specularGlint)"
          opacity="0.75"
        />

        <ellipse
          cx="245"
          cy="235"
          rx="22"
          ry="12"
          transform="rotate(35 245 235)"
          fill="url(#specularGlint)"
          opacity="0.45"
        />

        {/* Crisp Rim Light Arc */}
        <path
          d="M 140 160 A 85 85 0 0 1 255 155"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
      </svg>

      {/* Subtle floating speed label below */}
      <div className="absolute bottom-2 px-3 py-1 rounded-full bg-[#0E0F14]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300 shadow-xl flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        <span>0.24s Edge Response</span>
      </div>
    </div>
  );
}
