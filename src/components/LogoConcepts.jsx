import React from 'react';

/**
 * OPTION 1: The Quicksilver Möbius M
 * Continuous fluid liquid-metal ribbon with a precision planetary orbit arc & crimson accent
 */
export function LogoConcept1({ className = "w-10 h-10", isDark = false }) {
  const gradId = `qsilver-grad-${Math.random().toString(36).substr(2, 9)}`;
  const glowId = `qsilver-glow-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Merqurie Quicksilver Monogram"
    >
      <defs>
        <linearGradient id={gradId} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#0F172A"} />
          <stop offset="35%" stopColor={isDark ? "#E2E8F0" : "#334155"} />
          <stop offset="70%" stopColor={isDark ? "#94A3B8" : "#64748B"} />
          <stop offset="100%" stopColor={isDark ? "#CBD5E1" : "#1E293B"} />
        </linearGradient>
        <linearGradient id={`${gradId}-crimson`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Fluid Möbius M Backbone */}
      <path
        d="M20 72 C20 42, 28 24, 38 24 C46 24, 48 38, 50 48 C52 38, 54 24, 62 24 C72 24, 80 42, 80 72"
        stroke={`url(#${gradId})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Flowing Orbital Mercury Sweep */}
      <path
        d="M26 62 C34 76, 66 76, 76 60 C82 50, 86 64, 86 68"
        stroke={`url(#${gradId})`}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Mercurial Crimson Core Beacon */}
      <circle
        cx="50"
        cy="48"
        r="4.5"
        fill={`url(#${gradId}-crimson)`}
        filter={`url(#${glowId})`}
      />
    </svg>
  );
}

/**
 * OPTION 2: The Mercurial Horizon (Precision Sonic Wings)
 * Architectural dual monolithic pillars with aerodynamic golden-ratio angles and crimson laser crest
 */
export function LogoConcept2({ className = "w-10 h-10", isDark = false }) {
  const gradId = `mhorizon-grad-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Merqurie Sonic Horizon"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#0F172A"} />
          <stop offset="50%" stopColor={isDark ? "#E2E8F0" : "#334155"} />
          <stop offset="100%" stopColor={isDark ? "#64748B" : "#0F172A"} />
        </linearGradient>
        <linearGradient id={`${gradId}-red`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
      </defs>

      {/* Left Monolith Pillar */}
      <path
        d="M22 76 L22 28 L36 28 L48 60 L40 64 L22 76 Z"
        fill={`url(#${gradId})`}
      />

      {/* Right Monolith Pillar */}
      <path
        d="M78 76 L78 28 L64 28 L52 60 L60 64 L78 76 Z"
        fill={`url(#${gradId})`}
      />

      {/* Center Sonic Chevron / Crimson Heart */}
      <path
        d="M40 38 L50 24 L60 38 L50 48 Z"
        fill={`url(#${gradId}-red)`}
      />
    </svg>
  );
}

/**
 * OPTION 3: The Infinite Quicksilver Knot
 * A continuous 3D loop that forms an M and an infinity symbol, embodying continuous speed & zero friction
 */
export function LogoConcept3({ className = "w-10 h-10", isDark = false }) {
  const gradId = `iknot-grad-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Merqurie Infinite Knot"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#0F172A"} />
          <stop offset="40%" stopColor={isDark ? "#CBD5E1" : "#334155"} />
          <stop offset="70%" stopColor={isDark ? "#64748B" : "#1E293B"} />
          <stop offset="100%" stopColor={isDark ? "#94A3B8" : "#475569"} />
        </linearGradient>
      </defs>

      {/* Smooth Continuous Isometric Ribbon */}
      <path
        d="M24 70 L24 34 C24 26, 34 22, 40 28 L50 42 L60 28 C66 22, 76 26, 76 34 L76 70 C76 76, 68 80, 62 74 L50 60 L38 74 C32 80, 24 76, 24 70 Z"
        stroke={`url(#${gradId})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Red Pulse Horizon Ray */}
      <line
        x1="36"
        y1="50"
        x2="64"
        y2="50"
        stroke="#E11D48"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * OPTION 4: The Sovereign Hex-Shield
 * Isometric 3D titanium faceted crystal with negative-space M, symbolizing security, speed, and cloud authority
 */
export function LogoConcept4({ className = "w-10 h-10", isDark = false }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Merqurie Sovereign Shield"
    >
      <defs>
        <linearGradient id="hex-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#1E293B"} />
          <stop offset="100%" stopColor={isDark ? "#94A3B8" : "#0F172A"} />
        </linearGradient>
        <linearGradient id="hex-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
      </defs>

      {/* Hexagonal Outer Chassis */}
      <path
        d="M50 14 L82 32 L82 68 L50 86 L18 68 L18 32 Z"
        stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.15)"}
        strokeWidth="2.5"
      />

      {/* Carved Facet M Geometry */}
      <path
        d="M30 64 L30 36 L44 54 L50 46 L56 54 L70 36 L70 64"
        stroke="url(#hex-top)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Floating Apex Diamond */}
      <polygon
        points="50,22 56,30 50,38 44,30"
        fill="url(#hex-crimson)"
      />
    </svg>
  );
}
