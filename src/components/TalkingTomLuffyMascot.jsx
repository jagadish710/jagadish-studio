import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Zap, ArrowUpRight, Smile, Flame } from 'lucide-react';

export default function TalkingTomLuffyMascot({ onOpenPrototypeModal }) {
  const [isMuted, setIsMuted] = useState(false);
  const [meatFuel, setMeatFuel] = useState(85);
  const [speech, setSpeech] = useState(
    '"Shishishi! Click my rubber arms, legs, or neck to watch me stretch, or tap the buttons below!"'
  );
  const [bubbleScale, setBubbleScale] = useState(false);
  const [currentAction, setCurrentAction] = useState(null); // 'nosepick' | 'victory' | 'giantgrin' | 'balloon' | 'hat' | 'rubber-arm-left' | 'rubber-arm-right' | 'rubber-legs' | 'rubber-neck'

  const audioCtxRef = useRef(null);
  const resetTimerRef = useRef(null);
  const svgRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const headGroupRef = useRef(null);

  // Web Audio API Synthesizer
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playCartoonSfx = (type) => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'rubber' || type.startsWith('rubber-')) {
      // Classic Gomu-Gomu rubber stretch twang + snappy boing
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.2);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.38);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
      osc.start(now);
      osc.stop(now + 0.42);
    } else if (type === 'nosepick') {
      // Cheeky slide + flick pop
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(320, now + 0.18);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.34);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      osc.start(now);
      osc.stop(now + 0.38);
    } else if (type === 'victory' || type === 'giantgrin') {
      // Joyful rising 4-note chime
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.setValueAtTime(freq, now + idx * 0.08);
        g.gain.setValueAtTime(0.16, now + idx * 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.16);
        o.start(now + idx * 0.08);
        o.stop(now + idx * 0.08 + 0.17);
      });
    } else if (type === 'balloon') {
      // Cartoon balloon inflate + bouncy boing
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.35);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.6);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      osc.start(now);
      osc.stop(now + 0.65);
    } else if (type === 'hat') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(720, now + 0.18);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    }
  };

  // Cursor & Touch Eye Tracking
  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (!svgRef.current || !leftPupilRef.current || !rightPupilRef.current || !headGroupRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.34;
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.hypot(dx, dy) / 28, 6.5);
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      leftPupilRef.current.setAttribute('transform', `translate(${offsetX.toFixed(2)}, ${offsetY.toFixed(2)})`);
      rightPupilRef.current.setAttribute('transform', `translate(${offsetX.toFixed(2)}, ${offsetY.toFixed(2)})`);
      headGroupRef.current.setAttribute(
        'transform',
        `translate(${(offsetX * 0.5).toFixed(2)}, ${(offsetY * 0.35).toFixed(2)})`
      );
    };

    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const actionQuips = {
    nosepick: [
      '"Hmm... 8-second WordPress lag? *Flick!* Gone! Now your site loads in 0.24s!"',
      '"Inspecting your competitor\'s slow website... Shishishi, we can beat them easily!"',
    ],
    victory: [
      '"WOOHOO!! Arms up! 99/100 Google Mobile Speed & ₹0 Monthly Retainer!"',
      '"Shishishi!! Ready to launch your new customer-winning site in just 2 days!"',
    ],
    giantgrin: [
      '"SHISHISHI!! Look at that 100% code ownership & instant WhatsApp leads!"',
      '"Pure joy! Your customers get a blazing-fast site and you pay ₹0 today for a sample!"',
    ],
    balloon: [
      '"*CHOMP!* MEEAT!! Balloon belly full of high-converting leads & 0.24s edge fuel!"',
      '"BURP! Shishishi! Stuffed with clean code—zero heavy plugins allowed!"',
    ],
    hat: ['"Tipping my hat to smart business owners! Ready for your free 24h sample?"'],
    'rubber-arm-left': [
      '"GOMU GOMU NO... PISTOL!! Shishishi! Elastic edge code reaching customers across 300+ CDN nodes!"',
      '"Rubber punch! Knocking out slow WordPress lag and high maintenance fees!"',
    ],
    'rubber-arm-right': [
      '"GOMU GOMU NO... ROCKET!! Launching your business straight to the top of Google rankings!"',
      '"Stretching out for another 1-tap WhatsApp lead! Shishishi!"',
    ],
    'rubber-legs': [
      '"GOMU GOMU NO... STAMP!! Bouncy rubber legs leaping over heavy 8-second database queries!"',
      '"Springing into action! Sub-0.3s lightning mobile speed guaranteed!"',
    ],
    'rubber-neck': [
      '"GOMU GOMU NO... BELL!! Rubber neck spotting high-value buyers from miles away!"',
      '"Whoa! Stretching my neck to check out your competitors\' clunky websites!"',
    ],
  };

  const techAnswers = {
    sales:
      '"Plain English: When your site opens in 0.24s on mobile and has 1-tap WhatsApp buttons, 3x more visitors actually message you instead of pressing Back!"',
    retainer:
      '"Plain English: WordPress sites break every month because of plugins, so agencies charge monthly fees. Our clean edge code doesn\'t break—you pay once and own it!"',
    admin:
      '"Plain English: Yes! Every Merqurie site includes a phone admin cockpit—open it on your phone, edit any price or text, and publish in 10 seconds!"',
  };

  const bounceSpeechBubble = (text) => {
    setSpeech(text);
    setBubbleScale(true);
    setTimeout(() => setBubbleScale(false), 240);
  };

  const triggerAction = (action) => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    setCurrentAction(action);
    playCartoonSfx(action);

    const quipList = actionQuips[action] || actionQuips.victory;
    bounceSpeechBubble(quipList[Math.floor(Math.random() * quipList.length)]);

    if (action === 'balloon') {
      setMeatFuel((prev) => Math.min(100, prev + 15));
    }

    const duration = action.startsWith('rubber-') ? 1400 : 1800;
    resetTimerRef.current = setTimeout(() => {
      setCurrentAction(null);
    }, duration);
  };

  const askCaptain = (topic) => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    setCurrentAction('giantgrin');
    playCartoonSfx('giantgrin');
    bounceSpeechBubble(techAnswers[topic]);

    resetTimerRef.current = setTimeout(() => {
      setCurrentAction(null);
    }, 2200);
  };

  const isNosePick = currentAction === 'nosepick';
  const isVictory = currentAction === 'victory';
  const isGiantGrin = currentAction === 'giantgrin';
  const isBalloon = currentAction === 'balloon';
  const isHatBounce = currentAction === 'hat';
  const isRubberArmLeft = currentAction === 'rubber-arm-left';
  const isRubberArmRight = currentAction === 'rubber-arm-right';
  const isRubberLegs = currentAction === 'rubber-legs';
  const isRubberNeck = currentAction === 'rubber-neck';

  return (
    <div className="relative w-full max-w-[490px] mascot-stage-bg rounded-3xl p-4 sm:p-5 flex flex-col items-center select-none border border-treasure-400/25 shadow-2xl backdrop-blur-xl">
      <style>{`
        @keyframes rubberArmLeftAnim {
          0% { transform: scaleX(1) scaleY(1); }
          30% { transform: scaleX(2.6) scaleY(0.72) translateX(-42px); }
          65% { transform: scaleX(0.88) scaleY(1.1) translateX(6px); }
          85% { transform: scaleX(1.06) scaleY(0.96) translateX(-2px); }
          100% { transform: scaleX(1) scaleY(1) translateX(0); }
        }
        @keyframes rubberArmRightAnim {
          0% { transform: scaleX(1) scaleY(1); }
          30% { transform: scaleX(2.6) scaleY(0.72) translateX(42px); }
          65% { transform: scaleX(0.88) scaleY(1.1) translateX(-6px); }
          85% { transform: scaleX(1.06) scaleY(0.96) translateX(2px); }
          100% { transform: scaleX(1) scaleY(1) translateX(0); }
        }
        @keyframes rubberLegsAnim {
          0% { transform: scaleY(1); }
          32% { transform: scaleY(2.25) scaleX(0.75) translateY(18px); }
          65% { transform: scaleY(0.86) scaleX(1.12) translateY(-4px); }
          85% { transform: scaleY(1.05) translateY(2px); }
          100% { transform: scaleY(1) translateY(0); }
        }
        @keyframes rubberNeckAnim {
          0% { transform: scaleY(1); }
          32% { transform: scaleY(2.6) translateY(-26px); }
          65% { transform: scaleY(0.86) translateY(4px); }
          85% { transform: scaleY(1.06) translateY(-2px); }
          100% { transform: scaleY(1) translateY(0); }
        }
        @keyframes rubberHeadShiftAnim {
          0% { transform: translateY(0); }
          32% { transform: translateY(-46px) scale(1.08); }
          65% { transform: translateY(6px) scale(0.96); }
          85% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        .anim-rubber-arm-left {
          animation: rubberArmLeftAnim 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 148px 260px;
        }
        .anim-rubber-arm-right {
          animation: rubberArmRightAnim 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 252px 260px;
        }
        .anim-rubber-legs {
          animation: rubberLegsAnim 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 200px 356px;
        }
        .anim-rubber-neck {
          animation: rubberNeckAnim 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 200px 220px;
        }
        .anim-rubber-head-shift {
          animation: rubberHeadShiftAnim 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
      
      {/* Top Status Bar with Sound Toggle */}
      <div className="w-full flex items-center justify-between gap-2 px-4 py-2 rounded-2xl glass-card mb-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white font-display">Captain</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-treasure-500/20 text-treasure-300 font-bold font-mono">
            Stretch Me!
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-400 font-mono">SPEED FUEL</span>
            <div className="w-16 sm:w-20 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-treasure-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${meatFuel}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-treasure-400 transition-colors cursor-pointer"
            title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-treasure-400" />}
          </button>
        </div>
      </div>

      {/* Dynamic Talking Tom Speech Bubble */}
      <div
        className={`relative z-20 mb-1 px-5 py-3 rounded-2xl glass-card border-treasure-400/55 shadow-xl max-w-[380px] text-center transform transition-all duration-300 ${
          bubbleScale ? 'scale-105 border-treasure-400' : 'scale-100'
        }`}
      >
        <p className="font-display text-xs sm:text-sm text-white leading-snug">
          {speech}
        </p>
        <div className="w-3.5 h-3.5 bg-ocean-800 border-r border-b border-treasure-400/45 rotate-45 mx-auto -mb-4 mt-1" />
      </div>

      {/* 3D-Styled Vector Mascot Canvas */}
      <div className="relative w-[290px] h-[340px] sm:w-[340px] sm:h-[380px] flex items-center justify-center animate-float">
        <svg
          ref={svgRef}
          viewBox="0 0 400 455"
          className={`w-full h-full overflow-visible drop-shadow-[0_24px_30px_rgba(0,0,0,0.75)] ${
            isNosePick
              ? 'anim-nose-pick'
              : isVictory
              ? 'anim-victory-stretch'
              : isGiantGrin
              ? 'anim-giant-grin'
              : isBalloon
              ? 'anim-balloon-belly'
              : ''
          }`}
        >
          <defs>
            {/* Soft 3D Warm Peach Skin */}
            <radialGradient id="cuteSkin3D" cx="42%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFE7D1" />
              <stop offset="55%" stopColor="#F9C29B" />
              <stop offset="100%" stopColor="#D48859" />
            </radialGradient>

            {/* 3D Golden Straw Hat Crown */}
            <radialGradient id="hatCrown3D" cx="38%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="50%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#CA8A04" />
            </radialGradient>

            {/* 3D Straw Hat Brim */}
            <linearGradient id="hatBrim3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>

            {/* 3D Crimson Vest */}
            <radialGradient id="vest3D" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#FDA4AF" />
              <stop offset="45%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#9F1239" />
            </radialGradient>

            {/* 3D Golden Sash */}
            <linearGradient id="sash3D" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            {/* 3D Royal Blue Shorts */}
            <linearGradient id="shorts3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="60%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            {/* Glossy Jet-Black Hair */}
            <radialGradient id="hair3D" cx="40%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="45%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#090D16" />
            </radialGradient>

            {/* Roast Meat Gradient */}
            <radialGradient id="meat3D" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="55%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#9A3412" />
            </radialGradient>

            {/* Floor Shadow */}
            <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(6,182,212,0.45)" />
              <stop offset="65%" stopColor="rgba(0,0,0,0.4)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          {/* Sunburst Rays (shown on Giant Grin) */}
          {isGiantGrin && (
            <g className="animate-sunburst" style={{ transformOrigin: '200px 210px' }}>
              <polygon points="200,210 175,15 225,15" fill="rgba(250,204,21,0.22)" />
              <polygon points="200,210 385,115 360,165" fill="rgba(250,204,21,0.22)" />
              <polygon points="200,210 385,305 360,255" fill="rgba(250,204,21,0.22)" />
              <polygon points="200,210 225,405 175,405" fill="rgba(250,204,21,0.22)" />
              <polygon points="200,210 15,305 40,255" fill="rgba(250,204,21,0.22)" />
              <polygon points="200,210 15,115 40,165" fill="rgba(250,204,21,0.22)" />
            </g>
          )}

          {/* Floor Shadow */}
          <ellipse cx="200" cy="430" rx="115" ry="18" fill="url(#floorShadow)" />

          {/* Back Hat Brim */}
          <g className={isHatBounce ? 'anim-hat-bounce' : ''}>
            <ellipse cx="200" cy="116" rx="134" ry="33" fill="#A16207" />
            <ellipse cx="200" cy="112" rx="131" ry="30" fill="url(#hatBrim3D)" />
          </g>

          {/* Legs & Sandals - Interactive Rubber Stretch On Click! */}
          <g 
            className={`cursor-pointer ${isRubberLegs ? 'anim-rubber-legs' : ''}`}
            onClick={() => triggerAction('rubber-legs')}
            title="Click to stretch rubber legs!"
          >
            <rect x="156" y="356" width="23" height="55" rx="11.5" fill="url(#cuteSkin3D)" />
            <rect x="221" y="356" width="23" height="55" rx="11.5" fill="url(#cuteSkin3D)" />
            <ellipse cx="166" cy="415" rx="23" ry="9.5" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
            <path d="M151 413 Q166 405 181 413" stroke="#B45309" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <ellipse cx="234" cy="415" rx="23" ry="9.5" fill="#F59E0B" stroke="#92400E" strokeWidth="2" />
            <path d="M219 413 Q234 405 249 413" stroke="#B45309" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </g>

          {/* Default Arms - Interactive Rubber Stretch On Click! */}
          {!isVictory && !isBalloon && (
            <g>
              {/* Left Arm (Gomu Gomu Pistol) */}
              <g 
                className={`cursor-pointer ${isRubberArmLeft ? 'anim-rubber-arm-left' : ''}`}
                onClick={() => triggerAction('rubber-arm-left')}
                title="Click to stretch rubber left arm!"
              >
                <path d="M148 260 Q98 272 68 292" stroke="url(#cuteSkin3D)" strokeWidth="23" strokeLinecap="round" fill="none" />
                <circle cx="60" cy="296" r="18.5" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
              </g>

              {/* Right Arm (Gomu Gomu Rocket) */}
              <g 
                className={`cursor-pointer ${isRubberArmRight ? 'anim-rubber-arm-right' : ''}`}
                onClick={() => triggerAction('rubber-arm-right')}
                title="Click to stretch rubber right arm!"
              >
                <path d="M252 260 Q302 272 332 292" stroke="url(#cuteSkin3D)" strokeWidth="23" strokeLinecap="round" fill="none" />
                <circle cx="340" cy="296" r="18.5" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
              </g>
            </g>
          )}

          {/* Arms Raised in Victory */}
          {isVictory && (
            <g>
              <path d="M150 250 Q112 155 156 54" stroke="url(#cuteSkin3D)" strokeWidth="22" strokeLinecap="round" fill="none" />
              <ellipse cx="160" cy="46" rx="16" ry="20" transform="rotate(15 160 46)" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
              <path d="M250 250 Q288 155 244 54" stroke="url(#cuteSkin3D)" strokeWidth="22" strokeLinecap="round" fill="none" />
              <ellipse cx="240" cy="46" rx="16" ry="20" transform="rotate(-15 240 46)" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
            </g>
          )}

          {/* Normal Torso */}
          {!isBalloon && (
            <g className="cursor-pointer" onClick={() => triggerAction('balloon')}>
              <path d="M144 324 L256 324 L264 372 L208 372 L200 355 L192 372 L136 372 Z" fill="url(#shorts3D)" stroke="#1E40AF" strokeWidth="2" />
              <rect x="133" y="366" width="62" height="11" rx="5.5" fill="#FFFFFF" />
              <rect x="205" y="366" width="62" height="11" rx="5.5" fill="#FFFFFF" />
              <path d="M150 240 L250 240 L256 326 L144 326 Z" fill="url(#cuteSkin3D)" />
              <circle cx="200" cy="304" r="2.5" fill="#C27849" opacity="0.65" />
              <rect x="142" y="312" width="116" height="21" rx="10" fill="url(#sash3D)" stroke="#B45309" strokeWidth="2" />
              <path d="M148 238 L176 238 L168 316 L138 314 Z" fill="url(#vest3D)" stroke="#9F1239" strokeWidth="2" />
              <path d="M252 238 L224 238 L232 316 L262 314 Z" fill="url(#vest3D)" stroke="#9F1239" strokeWidth="2" />
              <circle cx="163" cy="266" r="5" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
              <circle cx="161" cy="292" r="5" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
            </g>
          )}

          {/* Giant Balloon Belly Mode */}
          {isBalloon && (
            <g>
              <path d="M115 342 L285 342 L278 380 L208 380 L200 364 L192 380 L122 380 Z" fill="url(#shorts3D)" stroke="#1E40AF" strokeWidth="2" />
              <ellipse cx="200" cy="296" rx="106" ry="74" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2.5" />
              <circle cx="200" cy="306" r="4" fill="#C27849" opacity="0.7" />
              <rect x="98" y="335" width="204" height="20" rx="10" fill="url(#sash3D)" stroke="#B45309" strokeWidth="2" />
              <path d="M138 234 Q96 266 102 325 L134 322 Q128 272 156 236 Z" fill="url(#vest3D)" stroke="#9F1239" strokeWidth="2" />
              <path d="M262 234 Q304 266 298 325 L266 322 Q272 272 244 236 Z" fill="url(#vest3D)" stroke="#9F1239" strokeWidth="2" />
              <path d="M122 256 Q116 286 155 294" stroke="url(#cuteSkin3D)" strokeWidth="17" strokeLinecap="round" fill="none" />
              <circle cx="162" cy="295" r="13" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="1.5" />
              <path d="M278 256 Q284 286 245 294" stroke="url(#cuteSkin3D)" strokeWidth="17" strokeLinecap="round" fill="none" />
              <circle cx="238" cy="295" r="13" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="1.5" />
            </g>
          )}

          {/* Neck - Interactive Rubber Stretch On Click! */}
          <rect 
            x="183" 
            y="214" 
            width="34" 
            height="32" 
            rx="12" 
            fill="url(#cuteSkin3D)" 
            className={`cursor-pointer ${isRubberNeck ? 'anim-rubber-neck' : ''}`}
            onClick={() => triggerAction('rubber-neck')}
            title="Click to stretch rubber neck!"
          />

          {/* Expressive Head & Face - Shifts up on Rubber Neck Stretch! */}
          <g 
            ref={headGroupRef} 
            className={`cursor-pointer ${isRubberNeck ? 'anim-rubber-head-shift' : ''}`} 
            onClick={() => triggerAction('giantgrin')}
          >
            <ellipse cx="121" cy="164" rx="14" ry="19" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
            <ellipse cx="279" cy="164" rx="14" ry="19" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
            <rect x="124" y="92" width="152" height="136" rx="68" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />

            {/* Cheek Blush */}
            <g opacity="0.48">
              <ellipse cx="150" cy="181" rx="16" ry="9" fill="#FB7185" />
              <ellipse cx="250" cy="181" rx="16" ry="9" fill="#FB7185" />
              <path d="M143 179 L147 184 M150 179 L154 184 M246 179 L250 184 M253 179 L257 184" stroke="#E11D48" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* Hair */}
            <path d="M120 140 Q116 96 155 84 Q200 72 245 84 Q284 96 280 140 Q266 118 252 132 Q242 110 225 130 Q208 106 194 132 Q176 108 162 132 Q146 112 134 134 Z" fill="url(#hair3D)" />

            {/* Eyebrows */}
            {!isNosePick ? (
              <g>
                <path d="M148 133 Q166 124 183 133" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M217 133 Q234 124 252 133" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
              </g>
            ) : (
              <g>
                <path d="M148 128 L184 138" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M252 128 L216 138" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
              </g>
            )}

            {/* Eyes */}
            {!isVictory && !isGiantGrin && !isBalloon && !isRubberNeck && (
              <g className="eye-blink">
                <circle cx="166" cy="158" r="21" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <g ref={leftPupilRef}>
                  <circle cx="166" cy="158" r="11.5" fill="#0F172A" />
                  <circle cx="161" cy="153" r="4.5" fill="#FFFFFF" />
                  <circle cx="171" cy="163" r="2" fill="#FFFFFF" opacity="0.9" />
                </g>
                <circle cx="234" cy="158" r="21" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <g ref={rightPupilRef}>
                  <circle cx="234" cy="158" r="11.5" fill="#0F172A" />
                  <circle cx="229" cy="153" r="4.5" fill="#FFFFFF" />
                  <circle cx="239" cy="163" r="2" fill="#FFFFFF" opacity="0.9" />
                </g>
              </g>
            )}

            {(isVictory || isGiantGrin) && (
              <g>
                <path d="M147 162 Q166 139 185 162" stroke="#0F172A" strokeWidth="5.8" strokeLinecap="round" fill="none" />
                <path d="M215 162 Q234 139 253 162" stroke="#0F172A" strokeWidth="5.8" strokeLinecap="round" fill="none" />
              </g>
            )}

            {isBalloon && (
              <g>
                <circle cx="166" cy="158" r="22" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <circle cx="166" cy="158" r="5" fill="#0F172A" />
                <circle cx="234" cy="158" r="22" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <circle cx="234" cy="158" r="5" fill="#0F172A" />
              </g>
            )}

            {isRubberNeck && (
              <g>
                <circle cx="166" cy="158" r="23" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <circle cx="166" cy="158" r="8" fill="#0F172A" />
                <circle cx="234" cy="158" r="23" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                <circle cx="234" cy="158" r="8" fill="#0F172A" />
              </g>
            )}

            {/* Nose */}
            <path d="M198 166 Q194 174 202 176" stroke="#C27849" strokeWidth="2.8" strokeLinecap="round" fill="none" />

            {/* Mouth */}
            {!isGiantGrin && !isNosePick && !isBalloon && (
              <g>
                <path d="M158 192 Q200 226 242 192 Q200 200 158 192 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
                <path d="M175 196 L175 207 M191 198 L191 210 M209 198 L209 210 M225 196 L225 207" stroke="#CBD5E1" strokeWidth="1.8" />
              </g>
            )}

            {isGiantGrin && (
              <g>
                <path d="M138 184 Q200 248 262 184 Q200 194 138 184 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="3.2" strokeLinejoin="round" />
                <path d="M152 194 Q200 214 248 194" stroke="#94A3B8" strokeWidth="1.8" fill="none" />
                <path d="M164 188 L164 210 M182 190 L182 216 M200 191 L200 218 M218 190 L218 216 M236 188 L236 210" stroke="#94A3B8" strokeWidth="1.8" />
              </g>
            )}

            {isNosePick && (
              <path d="M185 201 Q200 195 215 202" stroke="#0F172A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            )}

            {isBalloon && (
              <g>
                <path d="M172 196 Q200 210 228 196" stroke="#0F172A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <path d="M168 192 Q173 197 168 201 M232 192 Q227 197 232 201" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </g>
            )}
          </g>

          {/* Nose-Pick Hand Overlay */}
          {isNosePick && (
            <g>
              <path d="M148 256 Q138 215 184 184" stroke="url(#cuteSkin3D)" strokeWidth="21" strokeLinecap="round" fill="none" />
              <circle cx="190" cy="182" r="14" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="2" />
              <rect x="189" y="168" width="9" height="16" rx="4.5" transform="rotate(24 189 168)" fill="url(#cuteSkin3D)" stroke="#C27849" strokeWidth="1.8" />
            </g>
          )}

          {/* Straw Hat Crown & Front Brim - Shifts up on Rubber Neck Stretch! */}
          <g 
            className={`cursor-pointer ${isHatBounce ? 'anim-hat-bounce' : ''} ${isRubberNeck ? 'anim-rubber-head-shift' : ''}`} 
            onClick={() => triggerAction('hat')}
          >
            <path d="M132 106 C134 40, 266 40, 268 106 Z" fill="url(#hatCrown3D)" stroke="#A16207" strokeWidth="2.5" />
            <path d="M152 70 Q200 62 248 70" stroke="#D97706" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.55" />
            <path d="M142 84 Q200 76 258 84" stroke="#D97706" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.55" />
            <ellipse cx="176" cy="66" rx="22" ry="9" transform="rotate(-18 176 66)" fill="rgba(255,255,255,0.5)" />
            <path d="M133 94 Q200 110 267 94 L268 108 Q200 124 132 108 Z" fill="#F43F5E" stroke="#9F1239" strokeWidth="2" />
          </g>

          {/* Roast Meat Prop */}
          {isBalloon && (
            <g transform="translate(245, 198) rotate(-22)">
              <rect x="0" y="16" width="85" height="14" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="4" cy="15" r="8" fill="#FFFFFF" />
              <circle cx="4" cy="31" r="8" fill="#FFFFFF" />
              <circle cx="82" cy="15" r="8" fill="#FFFFFF" />
              <circle cx="82" cy="31" r="8" fill="#FFFFFF" />
              <rect x="18" y="4" width="52" height="38" rx="18" fill="url(#meat3D)" stroke="#7C2D12" strokeWidth="2" />
              <ellipse cx="36" cy="14" rx="12" ry="5" fill="rgba(255,255,255,0.35)" />
            </g>
          )}
        </svg>
      </div>

      {/* 4 Interactive Reaction Action Buttons - STRICTLY SINGLE LINE & ZERO EMOJIS */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 z-20">
        <button
          onClick={() => triggerAction('nosepick')}
          className="pirate-pill px-2 py-2.5 rounded-xl glass-card border-cyanline-400/40 hover:border-cyanline-400 text-[11px] sm:text-xs font-bold text-cyanline-300 flex items-center justify-center gap-1.5 shadow-lg cursor-pointer whitespace-nowrap overflow-hidden"
        >
          <Zap className="w-3.5 h-3.5 text-cyanline-400 shrink-0" />
          <span className="whitespace-nowrap">Flick Lag</span>
        </button>
        <button
          onClick={() => triggerAction('victory')}
          className="pirate-pill px-2 py-2.5 rounded-xl glass-card border-emerald-400/40 hover:border-emerald-400 text-[11px] sm:text-xs font-bold text-emerald-300 flex items-center justify-center gap-1.5 shadow-lg cursor-pointer whitespace-nowrap overflow-hidden"
        >
          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">Arms Up</span>
        </button>
        <button
          onClick={() => triggerAction('giantgrin')}
          className="pirate-pill px-2 py-2.5 rounded-xl glass-card border-treasure-400/40 hover:border-treasure-400 text-[11px] sm:text-xs font-bold text-treasure-300 flex items-center justify-center gap-1.5 shadow-lg cursor-pointer whitespace-nowrap overflow-hidden"
        >
          <Smile className="w-3.5 h-3.5 text-treasure-400 shrink-0" />
          <span className="whitespace-nowrap">Big Grin</span>
        </button>
        <button
          onClick={() => triggerAction('balloon')}
          className="pirate-pill px-2 py-2.5 rounded-xl bg-gradient-to-r from-treasure-400 to-amber-500 text-ocean-950 text-[11px] sm:text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/30 cursor-pointer whitespace-nowrap overflow-hidden"
        >
          <Flame className="w-3.5 h-3.5 text-ocean-950 shrink-0" />
          <span className="whitespace-nowrap">Full Belly</span>
        </button>
      </div>

      {/* Plain-English Business Questions */}
      <div className="w-full mt-3 pt-2.5 border-t border-white/10 z-20">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold text-center mb-2 font-mono">
          Tap a question — Captain explains in plain English:
        </div>
        <div className="flex flex-wrap justify-center gap-1.5">
          <button
            onClick={() => askCaptain('sales')}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/40 text-[11px] font-semibold text-emerald-300 transition-all cursor-pointer"
          >
            How does this get me more customers?
          </button>
          <button
            onClick={() => askCaptain('retainer')}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-treasure-500/20 border border-white/10 hover:border-treasure-400/40 text-[11px] font-semibold text-treasure-300 transition-all cursor-pointer"
          >
            Why ₹0 Monthly Retainer?
          </button>
          <button
            onClick={() => askCaptain('admin')}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyanline-500/20 border border-white/10 hover:border-cyanline-400/40 text-[11px] font-semibold text-cyanline-300 transition-all cursor-pointer"
          >
            Can I edit prices from my phone?
          </button>
        </div>
      </div>

    </div>
  );
}
