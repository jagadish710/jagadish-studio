import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Compass, 
  Flame, 
  Swords, 
  Clock, 
  Bug, 
  Search, 
  Smartphone, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ArrowRight,
  Award
} from 'lucide-react';

/* =========================================================================
   1. PHYSICAL WEB AUDIO FOLEY SYNTHESIZER
   ========================================================================= */
class FoleySynthesizer {
  constructor() {
    this.ctx = null;
    this.noiseBuffer = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        const bufferSize = this.ctx.sampleRate * 2;
        this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const channel = this.noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          channel[i] = Math.random() * 2 - 1;
        }
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playRubberPunch(tier = 1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Rubber tension twang
    const rubber = this.ctx.createOscillator();
    const rGain = this.ctx.createGain();
    rubber.type = 'sawtooth';
    rubber.frequency.setValueAtTime(170, now);
    rubber.frequency.exponentialRampToValueAtTime(740, now + 0.12);
    rubber.frequency.exponentialRampToValueAtTime(210, now + 0.22);
    rGain.gain.setValueAtTime(0.24, now);
    rGain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
    rubber.connect(rGain);
    rGain.connect(this.ctx.destination);
    rubber.start(now);
    rubber.stop(now + 0.25);

    // Sub-bass heavy impact thud
    const strikes = tier === 3 ? 3 : tier === 2 ? 2 : 1;
    for (let i = 0; i < strikes; i++) {
      const t0 = now + 0.12 + i * 0.08;
      const punch = this.ctx.createOscillator();
      const pGain = this.ctx.createGain();
      punch.type = 'triangle';
      punch.frequency.setValueAtTime(160, t0);
      punch.frequency.exponentialRampToValueAtTime(32, t0 + 0.28);
      pGain.gain.setValueAtTime(0.55 + tier * 0.1, t0);
      pGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.32);
      punch.connect(pGain);
      pGain.connect(this.ctx.destination);
      punch.start(t0);
      punch.stop(t0 + 0.35);
    }
  }

  playKatana(tier = 1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Scabbard click
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(1620, now);
    clickOsc.frequency.exponentialRampToValueAtTime(380, now + 0.035);
    clickGain.gain.setValueAtTime(0.32, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    clickOsc.connect(clickGain);
    clickGain.connect(this.ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.045);

    // Supersonic air slice whoosh
    if (this.noiseBuffer) {
      const whoosh = this.ctx.createBufferSource();
      whoosh.buffer = this.noiseBuffer;
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.Q.value = 3.2;
      bp.frequency.setValueAtTime(600, now + 0.02);
      bp.frequency.exponentialRampToValueAtTime(4800, now + 0.14);
      bp.frequency.exponentialRampToValueAtTime(800, now + 0.28);

      const whooshGain = this.ctx.createGain();
      whooshGain.gain.setValueAtTime(0.01, now + 0.02);
      whooshGain.gain.linearRampToValueAtTime(0.48, now + 0.12);
      whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      whoosh.connect(bp);
      bp.connect(whooshGain);
      whooshGain.connect(this.ctx.destination);
      whoosh.start(now + 0.02);
      whoosh.stop(now + 0.32);
    }

    // Steel ringing resonance
    [2340, 3190, 4480, 5620].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      const pitchShift = (tier - 1) * 160;
      osc.frequency.setValueAtTime(freq + pitchShift, now + 0.07);
      osc.frequency.exponentialRampToValueAtTime((freq + pitchShift) * 0.985, now + 0.85);

      const level = (0.15 / (i + 1)) * (1 + tier * 0.12);
      gain.gain.setValueAtTime(0.001, now + 0.07);
      gain.gain.linearRampToValueAtTime(level, now + 0.085);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.85);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + 0.07);
      osc.stop(now + 0.88);
    });
  }

  playThunder(tier = 1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const arc = this.ctx.createOscillator();
    const arcGain = this.ctx.createGain();
    arc.type = 'sawtooth';
    arc.frequency.setValueAtTime(2200, now);
    arc.frequency.exponentialRampToValueAtTime(140, now + 0.12);
    arcGain.gain.setValueAtTime(0.3, now);
    arcGain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    arc.connect(arcGain);
    arcGain.connect(this.ctx.destination);
    arc.start(now);
    arc.stop(now + 0.14);

    if (this.noiseBuffer) {
      const thunder = this.ctx.createBufferSource();
      thunder.buffer = this.noiseBuffer;
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(260, now + 0.04);
      lp.frequency.exponentialRampToValueAtTime(75, now + 0.98);

      const tGain = this.ctx.createGain();
      tGain.gain.setValueAtTime(0.01, now + 0.04);
      tGain.gain.linearRampToValueAtTime(0.62 + tier * 0.08, now + 0.12);
      tGain.gain.exponentialRampToValueAtTime(0.001, now + 1.05);
      thunder.connect(lp);
      lp.connect(tGain);
      tGain.connect(this.ctx.destination);
      thunder.start(now + 0.04);
      thunder.stop(now + 1.1);
    }
  }

  playFireKick(tier = 1) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const kick = this.ctx.createOscillator();
    const kickGain = this.ctx.createGain();
    kick.type = 'sine';
    kick.frequency.setValueAtTime(180, now + 0.04);
    kick.frequency.exponentialRampToValueAtTime(32, now + 0.32);
    kickGain.gain.setValueAtTime(0.58 + tier * 0.1, now + 0.04);
    kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    kick.connect(kickGain);
    kickGain.connect(this.ctx.destination);
    kick.start(now + 0.04);
    kick.stop(now + 0.36);

    if (this.noiseBuffer) {
      const fire = this.ctx.createBufferSource();
      fire.buffer = this.noiseBuffer;
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.Q.value = 2.6;
      lp.frequency.setValueAtTime(290, now);
      lp.frequency.exponentialRampToValueAtTime(1850 + tier * 450, now + 0.15);
      lp.frequency.exponentialRampToValueAtTime(320, now + 0.75);

      const fireGain = this.ctx.createGain();
      fireGain.gain.setValueAtTime(0.02, now);
      fireGain.gain.linearRampToValueAtTime(0.55, now + 0.13);
      fireGain.gain.exponentialRampToValueAtTime(0.001, now + 0.78);
      fire.connect(lp);
      lp.connect(fireGain);
      fireGain.connect(this.ctx.destination);
      fire.start(now);
      fire.stop(now + 0.8);
    }
  }

  playUnisonFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, now + idx * 0.08);
      g.gain.setValueAtTime(0.2, now + idx * 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.28);
      o.connect(g);
      g.connect(this.ctx.destination);
      o.start(now + idx * 0.08);
      o.stop(now + idx * 0.08 + 0.3);
    });
  }
}

/* =========================================================================
   2. TIERS & LABELS (STRICTLY CONCISE TO PREVENT 2-LINE WRAPPING)
   ========================================================================= */
const CREW_TIERS = {
  captain: [
    { label: 'T1 • JET PISTOL', msg: 'GOMU-GOMU: 0.24s EDGE SMASH!' },
    { label: 'T2 • GATLING', msg: 'GEAR 2ND: 300+ CDN NODES FIRED!' },
    { label: 'MAX • KING KONG', msg: 'AWAKENING: ZERO LATENCY LOCKED!' }
  ],
  zoro: [
    { label: 'T1 • ONI GIRI', msg: 'SANTORYU: 40 PLUGINS SLICED!' },
    { label: 'T2 • TATSUMAKI', msg: 'DRAGON TWISTER: ZERO VULNERABILITIES!' },
    { label: 'MAX • ENMA HAKI', msg: 'ENMA HAKI: 99.99% UPTIME LOCKED!' }
  ],
  nami: [
    { label: 'T1 • THUNDER', msg: 'THUNDERBOLT TEMPO: #1 GOOGLE SEO!' },
    { label: 'T2 • MIRAGE', msg: 'WHATSAPP FUNNEL: 3X LEADS SURGING!' },
    { label: 'MAX • ZEUS TEMPEST', msg: 'ZEUS STRIKE: CONVERSION MAXIMUM!' }
  ],
  sanji: [
    { label: 'T1 • DIABLE', msg: 'DIABLE JAMBE: CLUNKY UI KICKED!' },
    { label: 'T2 • CONCASSÉ', msg: '60FPS MOBILE UX: BUTTER SMOOTH!' },
    { label: 'MAX • IFRIT JAMBE', msg: 'IFRIT PLASMA: 10s PHONE ADMIN!' }
  ]
};

export default function EngineeringCrewSection({ onOpenQuote }) {
  const [hitCounts, setHitCounts] = useState({ captain: 0, zoro: 0, nami: 0, sanji: 0 });
  const [totalCombo, setTotalCombo] = useState(0);
  const [comboBump, setComboBump] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeAttacks, setActiveAttacks] = useState({ captain: false, zoro: false, nami: false, sanji: false });

  const foleyRef = useRef(null);
  const timersRef = useRef({});
  const canvasRefs = {
    captain: useRef(null),
    zoro: useRef(null),
    nami: useRef(null),
    sanji: useRef(null)
  };
  const vfxSystemsRef = useRef({});
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    foleyRef.current = new FoleySynthesizer();
    return () => {
      Object.values(timersRef.current).forEach(t => clearTimeout(t));
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (foleyRef.current) foleyRef.current.enabled = !next;
  };

  const getTier = (hits) => (hits >= 6 ? 3 : hits >= 3 ? 2 : 1);

  // Setup Canvas VFX Systems
  useEffect(() => {
    const systems = {};

    ['captain', 'zoro', 'nami', 'sanji'].forEach(hero => {
      const canvas = canvasRefs[hero].current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      systems[hero] = {
        canvas,
        ctx,
        particles: [],
        rings: [],
        slashes: [],
        bolts: [],
        width: 320,
        height: 240,
        resize() {
          const rect = canvas.parentElement.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          this.width = rect.width;
          this.height = rect.height;
          canvas.width = Math.round(rect.width * dpr);
          canvas.height = Math.round(rect.height * dpr);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        },
        spawnAttack(tier) {
          const impactX = this.width * 0.76;
          const impactY = this.height * 0.52;

          if (hero === 'captain') {
            for (let r = 0; r < tier; r++) {
              this.rings.push({
                x: impactX,
                y: impactY,
                radius: 12 + r * 10,
                maxRadius: 90 + tier * 28,
                color: tier === 3 ? '#FFD700' : '#F43F5E',
                alpha: 1
              });
            }
            for (let i = 0; i < 18 + tier * 10; i++) {
              const angle = Math.random() * Math.PI * 2;
              const speed = 2.5 + Math.random() * (4.5 + tier * 1.5);
              this.particles.push({
                x: impactX,
                y: impactY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1,
                size: 3 + Math.random() * 4.5,
                color: i % 2 === 0 ? '#FFD700' : '#FB7185',
                alpha: 1,
                decay: 0.024,
                type: 'spark'
              });
            }
          } else if (hero === 'zoro') {
            const slashCount = tier === 3 ? 3 : tier === 2 ? 2 : 1;
            for (let s = 0; s < slashCount; s++) {
              this.slashes.push({
                x1: impactX - 70,
                y1: impactY + 45 - s * 20,
                x2: impactX + 70,
                y2: impactY - 45 + s * 20,
                color: tier === 3 ? '#A7F3D0' : '#10B981',
                alpha: 1
              });
            }
            for (let i = 0; i < 22 + tier * 8; i++) {
              const angle = (Math.random() - 0.5) * Math.PI;
              const speed = 3.5 + Math.random() * 6.5;
              this.particles.push({
                x: impactX,
                y: impactY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1.5,
                size: 2.5 + Math.random() * 3.5,
                color: i % 2 === 0 ? '#34D399' : '#ECFDF5',
                alpha: 1,
                decay: 0.025,
                type: 'spark'
              });
            }
          } else if (hero === 'nami') {
            const boltCount = tier === 3 ? 3 : tier === 2 ? 2 : 1;
            for (let b = 0; b < boltCount; b++) {
              const pts = [];
              const startX = impactX + (b - 1) * 20;
              let curX = startX;
              let curY = 14;
              pts.push({ x: curX, y: curY });
              const steps = 6;
              for (let step = 1; step <= steps; step++) {
                curX = startX + (Math.random() - 0.5) * 36;
                curY = 14 + ((impactY - 14) * step) / steps;
                pts.push({ x: curX, y: curY });
              }
              this.bolts.push({
                pts,
                color: tier === 3 ? '#38BDF8' : '#FFD700',
                alpha: 1
              });
            }
            for (let c = 0; c < 7 + tier * 4; c++) {
              this.particles.push({
                x: impactX + (Math.random() - 0.5) * 65,
                y: impactY - 25,
                vx: (Math.random() - 0.5) * 5,
                vy: -3.5 - Math.random() * 3.5,
                gravity: 0.22,
                size: 7,
                color: '#FFD700',
                alpha: 1,
                decay: 0.016,
                type: 'coin',
                spin: Math.random() * Math.PI
              });
            }
          } else if (hero === 'sanji') {
            for (let i = 0; i < 30 + tier * 12; i++) {
              const angle = -Math.PI * 0.75 + Math.random() * Math.PI * 0.95;
              const speed = 3.0 + Math.random() * 6.5;
              const flameColor =
                tier === 3
                  ? (i % 2 === 0 ? '#38BDF8' : '#E0F2FE')
                  : (i % 2 === 0 ? '#F97316' : '#FACC15');
              this.particles.push({
                x: impactX - 25 + (Math.random() - 0.5) * 28,
                y: impactY + 10 + (Math.random() - 0.5) * 28,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1.8,
                size: 5.5 + Math.random() * 6.5,
                color: flameColor,
                alpha: 0.95,
                decay: 0.024,
                type: 'flame'
              });
            }
          }
        },
        render() {
          const c = this.ctx;
          c.clearRect(0, 0, this.width, this.height);

          for (let i = this.rings.length - 1; i >= 0; i--) {
            const r = this.rings[i];
            r.radius += (r.maxRadius - r.radius) * 0.16;
            r.alpha -= 0.04;
            if (r.alpha <= 0) {
              this.rings.splice(i, 1);
              continue;
            }
            c.save();
            c.beginPath();
            c.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            c.strokeStyle = r.color;
            c.globalAlpha = r.alpha;
            c.lineWidth = 3.8;
            c.stroke();
            c.restore();
          }

          for (let i = this.slashes.length - 1; i >= 0; i--) {
            const s = this.slashes[i];
            s.alpha -= 0.048;
            if (s.alpha <= 0) {
              this.slashes.splice(i, 1);
              continue;
            }
            c.save();
            c.globalAlpha = s.alpha;
            c.strokeStyle = s.color;
            c.shadowColor = s.color;
            c.shadowBlur = 18;
            c.lineWidth = 6.5;
            c.lineCap = 'round';
            c.beginPath();
            c.moveTo(s.x1, s.y1);
            c.quadraticCurveTo((s.x1 + s.x2) / 2, (s.y1 + s.y2) / 2 - 24, s.x2, s.y2);
            c.stroke();
            c.restore();
          }

          for (let i = this.bolts.length - 1; i >= 0; i--) {
            const b = this.bolts[i];
            b.alpha -= 0.055;
            if (b.alpha <= 0) {
              this.bolts.splice(i, 1);
              continue;
            }
            c.save();
            c.globalAlpha = b.alpha;
            c.strokeStyle = b.color;
            c.shadowColor = b.color;
            c.shadowBlur = 20;
            c.lineWidth = 4.8;
            c.lineJoin = 'round';
            c.beginPath();
            b.pts.forEach((pt, idx) => {
              if (idx === 0) c.moveTo(pt.x, pt.y);
              else c.lineTo(pt.x, pt.y);
            });
            c.stroke();
            c.restore();
          }

          for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.gravity) p.vy += p.gravity;
            p.alpha -= p.decay;
            if (p.alpha <= 0) {
              this.particles.splice(i, 1);
              continue;
            }

            c.save();
            c.globalAlpha = Math.max(0, p.alpha);
            if (p.type === 'coin') {
              p.spin += 0.25;
              const scaleX = Math.max(0.25, Math.abs(Math.cos(p.spin)));
              c.translate(p.x, p.y);
              c.scale(scaleX, 1);
              c.beginPath();
              c.arc(0, 0, p.size, 0, Math.PI * 2);
              c.fillStyle = '#FFD700';
              c.fill();
              c.strokeStyle = '#92400E';
              c.lineWidth = 1.4;
              c.stroke();
              c.fillStyle = '#78350F';
              c.font = 'bold 9px sans-serif';
              c.textAlign = 'center';
              c.textBaseline = 'middle';
              c.fillText('₹', 0, 0.5);
            } else {
              c.beginPath();
              c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              c.fillStyle = p.color;
              c.shadowColor = p.color;
              c.shadowBlur = p.type === 'flame' ? 14 : 9;
              c.fill();
            }
            c.restore();
          }
        }
      };
      systems[hero].resize();
    });

    vfxSystemsRef.current = systems;

    const handleResize = () => {
      Object.values(vfxSystemsRef.current).forEach(sys => sys.resize());
    };
    window.addEventListener('resize', handleResize);

    const loop = () => {
      Object.values(vfxSystemsRef.current).forEach(sys => sys.render());
      animFrameIdRef.current = requestAnimationFrame(loop);
    };
    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  const triggerAttack = useCallback((hero) => {
    setHitCounts(prev => {
      const nextHits = prev[hero] + 1;
      const tier = getTier(nextHits);

      if (foleyRef.current) {
        if (hero === 'captain') foleyRef.current.playRubberPunch(tier);
        if (hero === 'zoro') foleyRef.current.playKatana(tier);
        if (hero === 'nami') foleyRef.current.playThunder(tier);
        if (hero === 'sanji') foleyRef.current.playFireKick(tier);
      }

      if (vfxSystemsRef.current[hero]) {
        vfxSystemsRef.current[hero].spawnAttack(tier);
      }

      return { ...prev, [hero]: nextHits };
    });

    setTotalCombo(prev => prev + 1);
    setComboBump(true);
    setTimeout(() => setComboBump(false), 240);

    setActiveAttacks(prev => ({ ...prev, [hero]: true }));
    clearTimeout(timersRef.current[hero]);
    timersRef.current[hero] = setTimeout(() => {
      setActiveAttacks(prev => ({ ...prev, [hero]: false }));
    }, 720);
  }, []);

  const triggerUnison = () => {
    if (foleyRef.current) foleyRef.current.playUnisonFanfare();
    ['captain', 'zoro', 'nami', 'sanji'].forEach((hero, index) => {
      setTimeout(() => triggerAttack(hero), index * 190);
    });
  };

  return (
    <section id="crew" className="py-20 relative bg-[#060B16] text-white border-t border-white/10 overflow-hidden">
      
      {/* Background Radial Glow Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Four Disciplines • One Unstoppable Business Site</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Meet Your <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 bg-clip-text text-transparent">Engineering Crew</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every website we build unifies four uncompromising disciplines—sub-0.3s edge speed, zero-vulnerability code, conversion psychology, and thumb-friendly mobile UI. Tap any specialist below to trigger their attack!
          </p>
        </div>

        {/* Top Global Status Bar (Combo Pill, Unison Button, Foley Sound Toggle) */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-8 shadow-xl">
          
          {/* Global Combo Counter */}
          <div className="flex items-center gap-2">
            <div className={`px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-xs sm:text-sm font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-transform duration-150 ${comboBump ? 'scale-110 shadow-lg shadow-amber-500/30' : 'scale-100'}`}>
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              <span>Crew Combo: {totalCombo}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono hidden md:inline whitespace-nowrap">
              Tap cards to unleash attacks!
            </span>
          </div>

          {/* Action Center: Unison Attack & Sound Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={triggerUnison}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950 font-display font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Flame className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Trigger All-Out Unison Attack</span>
            </button>

            <button
              onClick={toggleSound}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              title={isMuted ? 'Unmute Foley Audio' : 'Mute Foley Audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="hidden sm:inline">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="hidden sm:inline">Foley ON</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Interactive 3D Battle Arena Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* =========================================================================
              CARD 1: CAPTAIN MERQ (100% IDENTICAL TO HERO MASCOT + CONNECTED ARM)
             ========================================================================= */}
          <CrewBattleCard
            heroKey="captain"
            name="Captain"
            heroShortName="Captain"
            role="Sovereign Architecture & Speed"
            metric="0.24s Edge"
            desc="Stretches performance to sub-0.3s load times across 300+ CDN nodes with zero bloated plugins."
            tagText="SPEED • 0.24S"
            tagIcon={Zap}
            tagBg="bg-amber-500/20 text-amber-300 border-amber-500/30"
            hits={hitCounts.captain}
            isAttacking={activeAttacks.captain}
            onAttack={() => triggerAttack('captain')}
            canvasRef={canvasRefs.captain}
            tierInfo={CREW_TIERS.captain[getTier(hitCounts.captain) - 1]}
            monolithIcon={Clock}
            monolithTitle="8.2s Slow Load Lag"
            monolithSub="Heavy Bloated DOM"
            monolithClass="monolith-luffy"
          >
            {/* Captain Merq SVG Rig — 100% Matching Face, Hair & Connected Punch Arm */}
            <svg viewBox="40 25 320 405" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <radialGradient id="cardSkin3D" cx="42%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFE7D1" />
                  <stop offset="55%" stopColor="#F9C29B" />
                  <stop offset="100%" stopColor="#D48859" />
                </radialGradient>
                <radialGradient id="cardHatCrown3D" cx="38%" cy="28%" r="72%">
                  <stop offset="0%" stopColor="#FEF9C3" />
                  <stop offset="50%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#CA8A04" />
                </radialGradient>
                <linearGradient id="cardHatBrim3D" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="50%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#A16207" />
                </linearGradient>
                <radialGradient id="cardVest3D" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#FDA4AF" />
                  <stop offset="45%" stopColor="#E11D48" />
                  <stop offset="100%" stopColor="#9F1239" />
                </radialGradient>
                <linearGradient id="cardSash3D" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="50%" stopColor="#FDE047" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <linearGradient id="cardShorts3D" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="60%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <radialGradient id="cardHair3D" cx="40%" cy="28%" r="72%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="45%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#090D16" />
                </radialGradient>
                <radialGradient id="cardHakiFist" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="45%" stopColor="#312E81" />
                  <stop offset="100%" stopColor="#0F172A" />
                </radialGradient>
              </defs>

              <g className={`transition-transform duration-200 ${activeAttacks.captain ? 'translate-x-3 rotate-1' : 'animate-float'}`}>
                
                {/* Back Hat Brim */}
                <ellipse cx="200" cy="116" rx="134" ry="33" fill="#A16207" />
                <ellipse cx="200" cy="112" rx="131" ry="30" fill="url(#cardHatBrim3D)" />

                {/* Legs & Sandals */}
                <rect x="156" y="356" width="23" height="55" rx="11.5" fill="url(#cardSkin3D)" />
                <rect x="221" y="356" width="23" height="55" rx="11.5" fill="url(#cardSkin3D)" />
                <ellipse cx="166" cy="415" rx="23" ry="9.5" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
                <path d="M151 413 Q166 405 181 413" stroke="#B45309" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <ellipse cx="234" cy="415" rx="23" ry="9.5" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
                <path d="M219 413 Q234 405 249 413" stroke="#B45309" strokeWidth="3.5" fill="none" strokeLinecap="round" />

                {/* Permanent Anatomical Shoulder Sockets */}
                <circle cx="148" cy="260" r="13" fill="url(#cardSkin3D)" />
                <circle cx="252" cy="260" r="13" fill="url(#cardSkin3D)" />

                {/* Left Arm (Resting) */}
                <path d="M148 260 Q98 272 68 292" stroke="url(#cardSkin3D)" strokeWidth="23" strokeLinecap="round" fill="none" />
                <circle cx="60" cy="296" r="18.5" fill="url(#cardSkin3D)" stroke="#C27849" strokeWidth="2" />

                {/* Torso: Open Crimson Vest, Chest, Golden Sash, Denim Shorts */}
                <path d="M144 324 L256 324 L264 372 L208 372 L200 355 L192 372 L136 372 Z" fill="url(#cardShorts3D)" stroke="#1E40AF" strokeWidth="2" />
                <rect x="133" y="366" width="62" height="11" rx="5.5" fill="#FFFFFF" />
                <rect x="205" y="366" width="62" height="11" rx="5.5" fill="#FFFFFF" />
                <path d="M150 240 L250 240 L256 326 L144 326 Z" fill="url(#cardSkin3D)" />
                <circle cx="200" cy="304" r="2.5" fill="#C27849" opacity="0.65" />
                <rect x="142" y="312" width="116" height="21" rx="10" fill="url(#cardSash3D)" stroke="#B45309" strokeWidth="2" />
                <path d="M148 238 L176 238 L168 316 L138 314 Z" fill="url(#cardVest3D)" stroke="#9F1239" strokeWidth="2" />
                <path d="M252 238 L224 238 L232 316 L262 314 Z" fill="url(#cardVest3D)" stroke="#9F1239" strokeWidth="2" />
                <circle cx="163" cy="266" r="5" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
                <circle cx="161" cy="292" r="5" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />

                {/* Neck */}
                <rect x="183" y="214" width="34" height="32" rx="12" fill="url(#cardSkin3D)" />

                {/* Head, Face & Ears (100% Identical to Hero Mascot) */}
                <ellipse cx="121" cy="164" rx="14" ry="19" fill="url(#cardSkin3D)" stroke="#C27849" strokeWidth="2" />
                <ellipse cx="279" cy="164" rx="14" ry="19" fill="url(#cardSkin3D)" stroke="#C27849" strokeWidth="2" />
                <rect x="124" y="92" width="152" height="136" rx="68" fill="url(#cardSkin3D)" stroke="#C27849" strokeWidth="2" />

                {/* Rosy Cheeks with Tick Marks */}
                <ellipse cx="150" cy="181" rx="16" ry="9" fill="#FB7185" opacity="0.5" />
                <ellipse cx="250" cy="181" rx="16" ry="9" fill="#FB7185" opacity="0.5" />
                <path d="M143 179 L147 184 M150 179 L154 184 M246 179 L250 184 M253 179 L257 184" stroke="#E11D48" strokeWidth="1.8" strokeLinecap="round" />

                {/* Rounded Anime Hair Bangs (Exact Matching Model) */}
                <path d="M120 140 Q116 96 155 84 Q200 72 245 84 Q284 96 280 140 Q266 118 252 132 Q242 110 225 130 Q208 106 194 132 Q176 108 162 132 Q146 112 134 134 Z" fill="url(#cardHair3D)" />

                {/* Eyebrows */}
                <path d="M148 133 Q166 124 183 133" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M217 133 Q234 124 252 133" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />

                {/* Big Anime Eyes with Specular Highlights */}
                <circle cx="166" cy="158" r="21" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <circle cx="166" cy="158" r="11.5" fill="#0F172A" />
                <circle cx="161" cy="153" r="4.5" fill="#FFFFFF" />
                <circle cx="171" cy="163" r="2" fill="#FFFFFF" opacity="0.9" />

                <circle cx="234" cy="158" r="21" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <circle cx="234" cy="158" r="11.5" fill="#0F172A" />
                <circle cx="229" cy="153" r="4.5" fill="#FFFFFF" />
                <circle cx="239" cy="163" r="2" fill="#FFFFFF" opacity="0.9" />

                {/* Big Open Smile with Teeth */}
                <path d="M152 196 Q200 236 248 196 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3" />
                <path d="M152 196 Q200 206 248 196" stroke="#0F172A" strokeWidth="2" fill="none" />
                <line x1="176" y1="198" x2="176" y2="216" stroke="#CBD5E1" strokeWidth="1.8" />
                <line x1="200" y1="200" x2="200" y2="220" stroke="#CBD5E1" strokeWidth="1.8" />
                <line x1="224" y1="198" x2="224" y2="216" stroke="#CBD5E1" strokeWidth="1.8" />

                {/* Front Straw Hat Crown & Red Ribbon */}
                <path d="M132 106 C134 40, 266 40, 268 106 Z" fill="url(#cardHatCrown3D)" stroke="#A16207" strokeWidth="2.5" />
                <path d="M152 70 Q200 62 248 70" stroke="#D97706" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.55" />
                <path d="M142 84 Q200 76 258 84" stroke="#D97706" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.55" />
                <ellipse cx="176" cy="66" rx="22" ry="9" transform="rotate(-18 176 66)" fill="rgba(255,255,255,0.4)" />
                <path d="M133 94 Q200 110 267 94 L268 108 Q200 124 132 108 Z" fill="#F43F5E" stroke="#9F1239" strokeWidth="2" />

                {/* 100% CONNECTED RUBBER PUNCH ARM (Anchored at Right Shoulder Socket) */}
                <g 
                  className="transition-transform duration-200"
                  style={{
                    transformOrigin: '252px 260px',
                    transform: activeAttacks.captain ? 'translateX(35px) scaleX(2.1) scaleY(1.08)' : 'none'
                  }}
                >
                  {/* Elastic Rubber Arm extending from shoulder */}
                  <path d="M252 260 Q286 270 306 288" stroke="url(#cardSkin3D)" strokeWidth="23" strokeLinecap="round" fill="none" />
                  
                  {/* Haki-Infused Fist */}
                  <g transform="translate(304, 276)">
                    <rect x="0" y="0" width="36" height="34" rx="14" fill="url(#cardHakiFist)" stroke="#F43F5E" strokeWidth="2.2" />
                    <line x1="12" y1="4" x2="12" y2="30" stroke="#FB7185" strokeWidth="1.6" opacity="0.8" />
                    <line x1="22" y1="4" x2="22" y2="30" stroke="#FB7185" strokeWidth="1.6" opacity="0.8" />
                    <circle cx="26" cy="10" r="3" fill="#FDA4AF" opacity="0.75" />
                  </g>
                </g>

              </g>
            </svg>
          </CrewBattleCard>

          {/* =========================================================================
              CARD 2: ZORO R. (Santoryu Three-Sword Style & 40 Bloated Plugins Sliced)
             ========================================================================= */}
          <CrewBattleCard
            heroKey="zoro"
            name="Zoro R."
            heroShortName="Zoro"
            role="Zero Vulnerabilities & Security"
            metric="0 Plugins"
            desc="Slices 40 bloated plugins, memory leaks, and unpatched PHP risks with pure hardened code."
            tagText="SECURITY • 0 BUGS"
            tagIcon={ShieldCheck}
            tagBg="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
            hits={hitCounts.zoro}
            isAttacking={activeAttacks.zoro}
            onAttack={() => triggerAttack('zoro')}
            canvasRef={canvasRefs.zoro}
            tierInfo={CREW_TIERS.zoro[getTier(hitCounts.zoro) - 1]}
            monolithIcon={Bug}
            monolithTitle="40 Bloated Plugins"
            monolithSub="Security Vulnerabilities"
            monolithClass="monolith-zoro"
          >
            {/* Zoro R. SVG Rig — Santoryu (Mouth Katana + Dual Wielded Blades) */}
            <svg viewBox="0 0 280 250" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <radialGradient id="zoroSkin" cx="42%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFEDD5" />
                  <stop offset="65%" stopColor="#FED7AA" />
                  <stop offset="100%" stopColor="#EA580C" stopOpacity="0.65" />
                </radialGradient>
                <linearGradient id="zoroTunic" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#065F46" />
                  <stop offset="100%" stopColor="#022C22" />
                </linearGradient>
                <linearGradient id="katanaBlade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E2E8F0" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>

              <g className={`transition-transform duration-200 ${activeAttacks.zoro ? 'translate-x-12 rotate-3 scale-105' : 'animate-float'}`}>
                
                {/* Triple Scabbards at Hip */}
                <g transform="translate(52, 196) rotate(-24)">
                  <rect x="-42" y="0" width="90" height="7" rx="3.5" fill="#0F172A" stroke="#34D399" strokeWidth="1.2" />
                  <rect x="-39" y="10" width="90" height="7" rx="3.5" fill="#7F1D1D" stroke="#FBBF24" strokeWidth="1.2" />
                  <rect x="-36" y="20" width="90" height="7" rx="3.5" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.2" />
                </g>

                {/* Hunter Green Samurai Robes & Haramaki Sash */}
                <path d="M74 128 L152 128 L148 196 L78 196 Z" fill="url(#zoroTunic)" stroke="#022C22" strokeWidth="2.2" />
                <path d="M94 128 L113 158 L132 128 L122 128 L113 144 L104 128 Z" fill="#BE123C" />
                <rect x="76" y="188" width="74" height="28" rx="7" fill="#16A34A" stroke="#052E16" strokeWidth="2" />
                <line x1="78" y1="195" x2="148" y2="195" stroke="#14532D" strokeWidth="1.8" />
                <line x1="78" y1="202" x2="148" y2="202" stroke="#14532D" strokeWidth="1.8" />
                <line x1="78" y1="209" x2="148" y2="209" stroke="#14532D" strokeWidth="1.8" />
                <path d="M78 216 L148 216 L152 244 L74 244 Z" fill="#0F172A" stroke="#020617" strokeWidth="2" />

                {/* Head, Spiky Emerald Hair & Triple Gold Earrings */}
                <rect x="103" y="110" width="20" height="22" rx="7" fill="url(#zoroSkin)" />
                <ellipse cx="113" cy="82" rx="32" ry="34" fill="url(#zoroSkin)" stroke="#7C2D12" strokeWidth="2" />
                <ellipse cx="80" cy="84" rx="5.5" ry="8.5" fill="url(#zoroSkin)" stroke="#7C2D12" strokeWidth="1.6" />
                <circle cx="77" cy="93" r="2.2" fill="#FFD700" />
                <circle cx="79" cy="97" r="2.2" fill="#FFD700" />
                <circle cx="81" cy="101" r="2.2" fill="#FFD700" />
                <path d="M79 76 L73 54 L87 62 L94 40 L106 57 L115 38 L125 57 L137 42 L141 62 L152 55 L146 77 Q131 58 113 58 Q95 58 79 76 Z" fill="#15803D" stroke="#052E16" strokeWidth="1.8" />

                {/* Piercing Swordsman Eyes */}
                <ellipse cx="101" cy="82" rx="7" ry="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
                <circle cx="101" cy="82" r="3.8" fill="#064E3B" />
                <circle cx="99.5" cy="80.5" r="1.3" fill="#FFFFFF" />
                <ellipse cx="125" cy="82" rx="7" ry="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
                <circle cx="125" cy="82" r="3.8" fill="#064E3B" />
                <circle cx="123.5" cy="80.5" r="1.3" fill="#FFFFFF" />
                <path d="M90 71 L109 77" stroke="#052E16" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M136 71 L117 77" stroke="#052E16" strokeWidth="2.8" strokeLinecap="round" />

                {/* 1. Wado Ichimonji Clamped in Mouth */}
                <g transform="translate(113, 101)">
                  <rect x="-46" y="-4" width="34" height="8" rx="3" fill="#F8FAFC" stroke="#334155" strokeWidth="1.5" />
                  <ellipse cx="-11" cy="0" rx="3.5" ry="9" fill="#FFD700" stroke="#854D0E" strokeWidth="1.2" />
                  <polygon points="-8,-3.5 102,-2 114,0 102,3.5 -8,3.5" fill="url(#katanaBlade)" stroke="#059669" strokeWidth="1.2" />
                </g>

                {/* 2 & 3. Dual-Wielded Katanas Rig */}
                <g 
                  className="transition-transform duration-200"
                  style={{
                    transformOrigin: '130px 145px',
                    transform: activeAttacks.zoro ? 'rotate(36deg) translateX(24px)' : 'none'
                  }}
                >
                  {/* Right Hand Katana (Kitetsu) */}
                  <g transform="translate(86, 154) rotate(-38)">
                    <rect x="-8" y="0" width="16" height="22" rx="7" fill="url(#zoroSkin)" stroke="#7C2D12" strokeWidth="1.6" />
                    <rect x="-4" y="18" width="8" height="26" rx="2" fill="#581C87" />
                    <ellipse cx="0" cy="-2" rx="10" ry="3.5" fill="#FFD700" />
                    <polygon points="-3.5,-4 3.5,-4 2.5,-105 0,-118 -3.5,-105" fill="url(#katanaBlade)" stroke="#10B981" strokeWidth="1.4" />
                  </g>

                  {/* Left Hand Katana (Enma) */}
                  <g transform="translate(148, 152) rotate(32)">
                    <rect x="-8" y="0" width="16" height="22" rx="7" fill="url(#zoroSkin)" stroke="#7C2D12" strokeWidth="1.6" />
                    <rect x="-4" y="18" width="8" height="26" rx="2" fill="#991B1B" />
                    <ellipse cx="0" cy="-2" rx="10" ry="3.5" fill="#FFD700" />
                    <polygon points="-3.5,-4 3.5,-4 2.5,-108 0,-120 -3.5,-108" fill="url(#katanaBlade)" stroke="#10B981" strokeWidth="1.4" />
                  </g>
                </g>

              </g>
            </svg>
          </CrewBattleCard>

          {/* =========================================================================
              CARD 3: NAMI N. (Sorcery Clima-Tact & #1 Google SEO Thunderbolt)
             ========================================================================= */}
          <CrewBattleCard
            heroKey="nami"
            name="Nami N."
            heroShortName="Nami"
            role="Conversion Psychology & SEO"
            metric="3x Leads"
            desc="Charts high-converting buyer navigation paths and 1-tap WhatsApp funnels that multiply leads."
            tagText="SEO • #1 RANK"
            tagIcon={Compass}
            tagBg="bg-sky-500/20 text-sky-300 border-sky-500/30"
            hits={hitCounts.nami}
            isAttacking={activeAttacks.nami}
            onAttack={() => triggerAttack('nami')}
            canvasRef={canvasRefs.nami}
            tierInfo={CREW_TIERS.nami[getTier(hitCounts.nami) - 1]}
            monolithIcon={Search}
            monolithTitle="Page-5 Invisible SEO"
            monolithSub="Zero Organic Leads"
            monolithClass="monolith-nami"
          >
            {/* Nami N. SVG Rig — Sorcery Clima-Tact & High-Voltage Thunderbolt */}
            <svg viewBox="0 0 280 250" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <linearGradient id="namiHair" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDBA74" />
                  <stop offset="45%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#C2410C" />
                </linearGradient>
                <radialGradient id="namiSkin" cx="42%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFF7ED" />
                  <stop offset="68%" stopColor="#FED7AA" />
                  <stop offset="100%" stopColor="#FB923C" stopOpacity="0.65" />
                </radialGradient>
                <linearGradient id="namiTop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#0369A1" />
                </linearGradient>
              </defs>

              <g className={`transition-transform duration-200 ${activeAttacks.nami ? '-translate-y-2 -rotate-2 scale-105' : 'animate-float'}`}>
                
                {/* Flowing Tangerine Hair */}
                <path d="M72 72 C58 118, 60 168, 74 196 Q114 206 154 196 C168 168, 170 118, 156 72 Z" fill="url(#namiHair)" stroke="#9A3412" strokeWidth="2" />
                
                {/* Torso & Blue Striped Bikini Top */}
                <path d="M88 128 L140 128 L135 194 L93 194 Z" fill="url(#namiSkin)" stroke="#9A3412" strokeWidth="1.8" />
                <path d="M86 130 L142 130 L139 164 L89 164 Z" fill="url(#namiTop)" stroke="#075985" strokeWidth="2" />
                <line x1="88" y1="141" x2="140" y2="141" stroke="#FFFFFF" strokeWidth="3.2" />
                <line x1="89" y1="153" x2="139" y2="153" stroke="#FFFFFF" strokeWidth="3.2" />

                {/* Denim Low-Rise Jeans & Belt */}
                <path d="M88 192 L140 192 L146 242 L82 242 Z" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="2" />
                <rect x="87" y="191" width="54" height="11" rx="4" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
                <rect x="108" y="189" width="12" height="15" rx="3" fill="#FFD700" stroke="#854D0E" strokeWidth="1.5" />

                {/* Left Arm with Navigation Log Pose */}
                <path d="M88 132 Q68 162 78 190" fill="none" stroke="url(#namiSkin)" strokeWidth="12" strokeLinecap="round" />
                <circle cx="77" cy="183" r="6.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
                <line x1="77" y1="183" x2="80" y2="180" stroke="#E11D48" strokeWidth="1.8" />

                {/* Expressive Anime Head & Face */}
                <rect x="105" y="110" width="18" height="20" rx="7" fill="url(#namiSkin)" />
                <ellipse cx="114" cy="82" rx="31" ry="33" fill="url(#namiSkin)" stroke="#9A3412" strokeWidth="2" />
                <path d="M82 78 Q92 52 114 50 Q138 52 146 78 Q134 62 122 68 Q114 58 104 68 Q92 62 82 78 Z" fill="url(#namiHair)" stroke="#9A3412" strokeWidth="1.6" />

                {/* Large Warm Amber Eyes & Blush */}
                <ellipse cx="101" cy="82" rx="7.5" ry="8.2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
                <circle cx="102" cy="82" r="4.2" fill="#B45309" />
                <circle cx="100.5" cy="80" r="1.7" fill="#FFFFFF" />
                <ellipse cx="127" cy="82" rx="7.5" ry="8.2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
                <circle cx="126" cy="82" r="4.2" fill="#B45309" />
                <circle cx="124.5" cy="80" r="1.7" fill="#FFFFFF" />
                <ellipse cx="92" cy="93" rx="4.5" ry="2.4" fill="#FB7185" opacity="0.5" />
                <ellipse cx="136" cy="93" rx="4.5" ry="2.4" fill="#FB7185" opacity="0.5" />
                <path d="M104 99 Q114 107 124 99" fill="none" stroke="#9A3412" strokeWidth="2.2" strokeLinecap="round" />

                {/* Sorcery Clima-Tact Staff & Arm Rig */}
                <g 
                  className="transition-transform duration-200"
                  style={{
                    transformOrigin: '145px 145px',
                    transform: activeAttacks.nami ? 'rotate(-38deg) translateY(-18px)' : 'none'
                  }}
                >
                  <path d="M140 134 Q162 148 168 132" fill="none" stroke="url(#namiSkin)" strokeWidth="12" strokeLinecap="round" />
                  <g transform="translate(168, 128) rotate(24)">
                    <rect x="-4" y="-84" width="8" height="168" rx="4" fill="#0284C7" stroke="#E0F2FE" strokeWidth="1.4" />
                    <rect x="-5.5" y="-32" width="11" height="6" rx="2" fill="#FFD700" />
                    <rect x="-5.5" y="26" width="11" height="6" rx="2" fill="#FFD700" />
                    <circle cx="0" cy="-86" r="10" fill="#38BDF8" stroke="#FFD700" strokeWidth="2.5" />
                    <circle cx="0" cy="86" r="10" fill="#38BDF8" stroke="#FFD700" strokeWidth="2.5" />
                  </g>
                </g>

              </g>
            </svg>
          </CrewBattleCard>

          {/* =========================================================================
              CARD 4: SANJI V. (ELEGANT MARTIAL ARTS KICK & DIABLE JAMBE FLAME SHOES)
             ========================================================================= */}
          <CrewBattleCard
            heroKey="sanji"
            name="Sanji V."
            heroShortName="Sanji"
            role="Fluid Responsive UI/UX & Polish"
            metric="100% Fluid"
            desc="Crafts responsive interfaces with sub-millisecond interaction feedback and thumb-friendly touch targets."
            tagText="UI/UX • 60FPS"
            tagIcon={Flame}
            tagBg="bg-orange-500/20 text-orange-300 border-orange-500/30"
            hits={hitCounts.sanji}
            isAttacking={activeAttacks.sanji}
            onAttack={() => triggerAttack('sanji')}
            canvasRef={canvasRefs.sanji}
            tierInfo={CREW_TIERS.sanji[getTier(hitCounts.sanji) - 1]}
            monolithIcon={Smartphone}
            monolithTitle="Clunky Mobile UI"
            monolithSub="High Bounce Rate"
            monolithClass="monolith-sanji"
          >
            {/* Sanji V. SVG Rig — Dynamic Martial Arts Roundhouse Kick & Pointed Italian Dress Shoes */}
            <svg viewBox="0 0 280 250" className="w-full h-full overflow-visible select-none pointer-events-none">
              <defs>
                <linearGradient id="sanjiHair" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="55%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#CA8A04" />
                </linearGradient>
                <radialGradient id="sanjiSkin" cx="42%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFF7ED" />
                  <stop offset="68%" stopColor="#FED7AA" />
                  <stop offset="100%" stopColor="#EA580C" stopOpacity="0.6" />
                </radialGradient>
                <linearGradient id="sanjiSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="45%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
                {/* Diable Jambe Multi-Stop Flame Gradient */}
                <linearGradient id="sanjiDiableFlame" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="35%" stopColor="#F97316" />
                  <stop offset="70%" stopColor="#E11D48" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
                <filter id="sanjiFlameGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g className={`transition-transform duration-200 ${activeAttacks.sanji ? 'translate-x-10 -translate-y-2 scale-105' : 'animate-float'}`}>
                
                {/* Standing Support Leg & Polished Black Shoe Planted on Floor */}
                <path d="M96 195 L90 238 L114 238 L110 195 Z" fill="url(#sanjiSuit)" stroke="#020617" strokeWidth="1.8" />
                <path d="M84 236 L118 236 L120 244 L80 244 Z" fill="#020617" stroke="#334155" strokeWidth="1.4" />
                <line x1="88" y1="238" x2="114" y2="238" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.4" />

                {/* Midnight Navy Suit Body & Gold Double-Breasted Buttons */}
                <path d="M76 128 L146 128 L142 202 L78 202 Z" fill="url(#sanjiSuit)" stroke="#020617" strokeWidth="2.2" />
                <polygon points="96,128 124,128 110,162" fill="#38BDF8" />
                <polygon points="108,130 114,130 116,154 110,162 106,154" fill="#020617" />
                <circle cx="98" cy="170" r="2.8" fill="#FDE047" />
                <circle cx="122" cy="170" r="2.8" fill="#FDE047" />
                <circle cx="98" cy="186" r="2.8" fill="#FDE047" />
                <circle cx="122" cy="186" r="2.8" fill="#FDE047" />

                {/* Arms with Hands in Pockets */}
                <path d="M76 130 L64 172 L82 198 L88 192 L76 170 L86 134 Z" fill="url(#sanjiSuit)" stroke="#020617" strokeWidth="1.8" />
                <path d="M146 130 L158 172 L140 198 L134 192 L146 170 L136 134 Z" fill="url(#sanjiSuit)" stroke="#020617" strokeWidth="1.8" />

                {/* Head, Swept Blonde Hair & Curly Eyebrow */}
                <rect x="102" y="110" width="18" height="20" rx="7" fill="url(#sanjiSkin)" />
                <ellipse cx="111" cy="82" rx="30" ry="33" fill="url(#sanjiSkin)" stroke="#9A3412" strokeWidth="2" />
                <ellipse cx="124" cy="83" rx="6.5" ry="7.2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                <circle cx="125" cy="83" r="3.5" fill="#0284C7" />
                <circle cx="123.5" cy="81.5" r="1.3" fill="#FFFFFF" />
                <path d="M117 72 Q125 68 132 73 Q134 76 130 76" fill="none" stroke="#A16207" strokeWidth="2.1" strokeLinecap="round" />
                <path d="M79 82 C76 52, 102 42, 132 50 C146 54, 148 74, 142 82 C134 64, 122 62, 112 68 C106 82, 100 94, 84 98 C79 94, 79 88, 79 82 Z" fill="url(#sanjiHair)" stroke="#A16207" strokeWidth="1.8" />
                <path d="M102 100 Q114 105 125 98" fill="none" stroke="#7C2D12" strokeWidth="2.2" strokeLinecap="round" />

                {/* DYNAMIC MARTIAL ARTS ROUNDHOUSE KICKING LEG & SHARP ITALIAN DRESS SHOE */}
                <g 
                  className="transition-transform duration-200"
                  style={{
                    transformOrigin: '125px 190px',
                    transform: activeAttacks.sanji ? 'rotate(-18deg) scale(1.16)' : 'none'
                  }}
                >
                  {/* Blazing Diable Jambe Flame Aura wrapped around leg and shoe */}
                  <g filter="url(#sanjiFlameGlow)">
                    {/* Fiery trail path following thigh, knee, and shoe */}
                    <path 
                      d="M 125 192 Q 165 170 195 150 Q 230 135 248 118 Q 256 126 238 144 Q 212 165 170 188 Z" 
                      fill="url(#sanjiDiableFlame)" 
                      opacity="0.9" 
                    />
                    {/* Flame tongues licking upward off the shoe heel and toe */}
                    <path 
                      d="M 235 116 Q 258 96 264 112 Q 270 128 248 140 Q 262 152 250 164 Q 230 154 220 138 Z" 
                      fill="url(#sanjiDiableFlame)" 
                      opacity="0.95" 
                    />
                  </g>

                  {/* Tailored Black Suit Trouser Leg: Thigh to Bent Knee to Ankle */}
                  <path 
                    d="M 124 192 L 168 168 L 216 138 L 226 150 L 176 182 L 134 204 Z" 
                    fill="url(#sanjiSuit)" 
                    stroke="#020617" 
                    strokeWidth="2.2" 
                  />

                  {/* Sharp Pointed Italian Dress Shoe (Heel, Arch & Pointed Toe) */}
                  <path 
                    d="M 212 144 L 218 156 L 226 154 L 248 132 Q 256 124 252 118 L 234 126 Z" 
                    fill="#090D16" 
                    stroke="#FEF08A" 
                    strokeWidth="1.8" 
                  />
                  {/* Shoe Heel Block */}
                  <rect x="214" y="148" width="8" height="7" rx="1.5" fill="#020617" stroke="#F59E0B" strokeWidth="1.2" />
                  {/* Gloss Specular Highlight on Patent Leather Shoe */}
                  <path d="M 226 134 L 244 124" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
                  {/* Glowing Core Flame Tongue on Toe Tip */}
                  <ellipse cx="250" cy="120" rx="9" ry="4.5" fill="#FEF08A" transform="rotate(-32 250 120)" />
                </g>

              </g>
            </svg>
          </CrewBattleCard>

        </div>

        {/* Bottom Conversion Banner / Guarantee */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-mono text-xs font-extrabold uppercase tracking-widest whitespace-nowrap">
              <Award className="w-4 h-4 shrink-0" />
              <span>Full Code Ownership • Zero Vendor Lock-In</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Ready to deploy these 4 engineering disciplines on your website?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
              Get your custom edge prototype built in 24 hours. If it doesn't load in under 0.3s and outshine your competitors, you pay ₹0.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-display font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Claim Your Free 24h Sample</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>

      {/* Embedded CSS for 3D Battle Arena Styling & Damage Keyframes */}
      <style>{`
        @keyframes floatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: floatIdle 3.2s ease-in-out infinite;
        }

        /* Monolith Damage Styles */
        .monolith-luffy.smashed {
          transform: translateX(18px) rotate(8deg) scale(0.92);
          filter: drop-shadow(0 0 16px rgba(244, 63, 94, 0.8));
        }
        .monolith-zoro.sliced {
          transform: translateX(20px) rotate(-12deg) skewX(8deg);
          filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.8));
        }
        .monolith-nami.zapped {
          transform: translateY(8px) scale(0.95);
          filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.9)) brightness(1.4);
        }
        .monolith-sanji.punted {
          transform: translateX(24px) translateY(-12px) rotate(16deg) scale(0.9);
          filter: drop-shadow(0 0 18px rgba(249, 115, 22, 0.9));
        }

        /* Screen Shake on Impact */
        .card-shake {
          animation: cardImpactShake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        @keyframes cardImpactShake {
          10%, 90% { transform: translate3d(-1.5px, 0, 0); }
          20%, 80% { transform: translate3d(2.5px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-3.5px, 0, 0); }
          40%, 60% { transform: translate3d(3.5px, 0, 0); }
        }
      `}</style>
    </section>
  );
}

/* =========================================================================
   3. INDIVIDUAL CREW BATTLE CARD COMPONENT (STRICT SINGLE-LINE BUTTONS & BADGES)
   ========================================================================= */
function CrewBattleCard({
  heroKey,
  name,
  heroShortName,
  role,
  metric,
  desc,
  tagText,
  tagIcon: TagIcon,
  tagBg,
  hits,
  isAttacking,
  onAttack,
  canvasRef,
  tierInfo,
  monolithIcon: MonolithIcon,
  monolithTitle,
  monolithSub,
  monolithClass,
  children
}) {
  const isAwakened = hits >= 6;

  return (
    <div
      onClick={onAttack}
      className={`relative group rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden border ${
        isAwakened
          ? 'bg-slate-900/90 border-amber-400 shadow-2xl shadow-amber-500/20'
          : 'bg-slate-900/75 border-white/10 hover:border-white/20 shadow-xl'
      } ${isAttacking ? 'card-shake' : ''}`}
    >
      {/* Top Header & Badges — STRICTLY SINGLE LINE */}
      <div>
        <div className="flex items-center justify-between gap-1 mb-3">
          <span className={`px-2 py-0.5 rounded-lg text-[9.5px] font-extrabold font-mono border whitespace-nowrap flex items-center gap-1 shrink-0 ${tagBg}`}>
            <TagIcon className="w-3 h-3 shrink-0" />
            <span>{tagText}</span>
          </span>

          <span className={`text-[9.5px] font-extrabold font-mono px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 ${
            isAwakened ? 'bg-amber-400 text-slate-950 font-black' : 'bg-white/10 text-slate-300'
          }`}>
            {tierInfo.label}
          </span>
        </div>

        {/* 3D Battle Arena Stage */}
        <div className="relative w-full h-[230px] rounded-2xl bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/90 border border-white/5 overflow-hidden mb-4 flex items-center justify-between px-2">
          
          {/* Floor Perspective Grid Lines */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none" />
          <div 
            className="absolute inset-x-0 bottom-0 h-14 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 20px)'
            }}
          />

          {/* Dynamic Callout Message Banner (Slides down on attack) */}
          <div className={`absolute top-2 inset-x-2 z-20 transition-all duration-200 pointer-events-none ${
            isAttacking ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-3 scale-95'
          }`}>
            <div className="px-3 py-1.5 rounded-xl bg-slate-950/95 border border-amber-400/60 shadow-lg shadow-amber-500/25 text-center">
              <span className="font-display font-black text-[11px] text-amber-300 tracking-wide uppercase whitespace-nowrap">
                {tierInfo.msg}
              </span>
            </div>
          </div>

          {/* 60FPS Canvas VFX Overlay */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          />

          {/* Hero SVG Stage (Left Side) */}
          <div className="relative w-[170px] h-[210px] z-[5] flex items-center justify-center">
            {children}
          </div>

          {/* Villain Monolith Target (Right Side) */}
          <div className={`relative z-[4] w-[92px] h-[125px] rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-red-500/30 p-2 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 ${
            isAttacking ? `${monolithClass} smashed sliced zapped punted` : ''
          }`}>
            <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center mb-1.5">
              <MonolithIcon className="w-4 h-4 text-red-400 shrink-0" />
            </div>
            <span className="font-display font-extrabold text-[10px] text-white leading-tight line-clamp-2">
              {monolithTitle}
            </span>
            <span className="text-[8px] text-slate-400 font-mono mt-0.5 whitespace-nowrap">
              {monolithSub}
            </span>
          </div>
        </div>

        {/* Hero Title & Description */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-between gap-1 mb-1">
            <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
              {name}
            </h3>
            <span className="text-xs font-mono font-extrabold text-amber-400 whitespace-nowrap">{metric}</span>
          </div>
          <p className="text-xs font-bold text-slate-400 mb-2 whitespace-nowrap">{role}</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      {/* Attack Button with Live Hit Counter — STRICTLY SINGLE LINE & PREMIUM PILL */}
      <div className="mt-5 pt-3 border-t border-white/10">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onAttack();
          }}
          className={`w-full py-2.5 px-3.5 rounded-xl font-display font-extrabold text-xs whitespace-nowrap flex items-center justify-between transition-all shadow-md cursor-pointer ${
            isAwakened
              ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-slate-950 hover:brightness-110 shadow-orange-500/25'
              : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
          }`}
        >
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <TagIcon className="w-3.5 h-3.5 shrink-0 text-current" />
            <span>Trigger {heroShortName}'s Attack</span>
          </span>

          <span className={`px-2 py-0.5 rounded-md font-mono text-[10.5px] font-bold shrink-0 ${
            isAwakened ? 'bg-black/25 text-slate-950' : 'bg-white/10 text-amber-300'
          }`}>
            {hits} Hits
          </span>
        </button>
      </div>
    </div>
  );
}
