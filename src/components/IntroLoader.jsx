import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { playCyberTone } from '../utils/audio';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function IntroLoader({ onComplete, isDark }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 1100);
          return 100;
        }
        const jump = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + jump, 100);
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Three.js 3D Core with Theme Adaptation
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const primaryColorHex = isDark ? 0xE6C687 : 0x00C853; // Champagne Gold or Emerald Green
    const secondaryColorHex = isDark ? 0xEAEAEA : 0x059669;

    // Outer Wireframe Orb
    const geo1 = new THREE.IcosahedronGeometry(1.6, 2);
    const mat1 = new THREE.MeshBasicMaterial({
      color: primaryColorHex,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.4,
    });
    const sphere1 = new THREE.Mesh(geo1, mat1);
    scene.add(sphere1);

    // Inner Core
    const geo2 = new THREE.OctahedronGeometry(0.9, 1);
    const mat2 = new THREE.MeshBasicMaterial({
      color: secondaryColorHex,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const sphere2 = new THREE.Mesh(geo2, mat2);
    scene.add(sphere2);

    // Particle Swarm
    const count = 250;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color(primaryColorHex);
    const c2 = new THREE.Color(secondaryColorHex);

    for (let i = 0; i < count * 3; i += 3) {
      const radius = 2.2 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i + 2] = radius * Math.cos(phi);

      const color = Math.random() > 0.5 ? c1 : c2;
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    let animationFrameId;
    let clock = new THREE.Clock();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      const t = clock.getElapsedTime();
      sphere1.rotation.x = t * 0.3;
      sphere1.rotation.y = t * 0.4;
      sphere2.rotation.x = -t * 0.45;
      sphere2.rotation.y = -t * 0.55;
      particles.rotation.y = t * 0.15;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo1.dispose();
      mat1.dispose();
      geo2.dispose();
      mat2.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, [isDark]);

  const handleEnter = () => {
    playCyberTone('access');
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-12 transition-all duration-700 select-none ${
        isDark ? 'bg-[#121212] text-[#EAEAEA]' : 'bg-[#F7FAF8] text-[#0C1F16]'
      } ${isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Top Header */}
      <div className={`relative z-10 w-full flex items-center justify-between text-xs font-mono border-b pb-4 ${
        isDark ? 'border-white/10 text-slate-400' : 'border-emerald-900/10 text-slate-600'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full animate-ping ${isDark ? 'bg-luxury-gold' : 'bg-fresh-emerald'}`} />
          <span className="font-bold tracking-wider">JAGADISH.ONLINE</span>
          <span className="hidden sm:inline opacity-60">| DIGITAL PRODUCT &amp; AI STUDIO</span>
        </div>
        <div className={`text-xs font-mono font-semibold ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>
          EX-AMAZON ARCHITECT
        </div>
      </div>

      {/* Center Stage */}
      <div className="relative z-10 text-center my-auto flex flex-col items-center max-w-xl">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6 backdrop-blur-md border ${
          isDark 
            ? 'bg-[#1A1815] border-luxury-gold/40 text-luxury-gold shadow-gold-glow' 
            : 'bg-fresh-tint border-fresh-border text-fresh-green shadow-emerald-glow'
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>EX-AMAZON &bull; NEXT-GEN MULTIMODAL AI ARCHITECTURES</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display">
          ENGINEERING <br />
          <span className="text-gradient-main">SOVEREIGN SYSTEMS</span>
        </h1>

        <p className={`text-sm sm:text-base max-w-md font-sans mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Replacing fragile agency websites with autonomous, zero-maintenance digital architectures.
        </p>

        {/* Progress & Enter Button */}
        <div className="w-full max-w-xs flex flex-col items-center gap-4">
          <div className="w-full flex justify-between text-xs font-mono">
            <span>PREPARING ENVIRONMENT</span>
            <span className={`font-bold ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>{progress}%</span>
          </div>

          <div className={`w-full h-1.5 rounded-full overflow-hidden border ${
            isDark ? 'bg-black border-white/10' : 'bg-slate-200 border-slate-300'
          }`}>
            <div
              className={`h-full transition-all duration-150 ease-out ${
                isDark 
                  ? 'bg-gradient-to-r from-slate-400 via-luxury-gold to-amber-300' 
                  : 'bg-gradient-to-r from-emerald-400 to-green-600'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {isReady ? (
            <button
              onClick={handleEnter}
              onMouseEnter={() => playCyberTone('hover')}
              className={`mt-4 px-8 py-3.5 rounded-xl font-bold font-mono text-sm tracking-wider flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ${
                isDark 
                  ? 'bg-gradient-to-r from-luxury-gold via-amber-300 to-luxury-gold text-black shadow-gold-glow' 
                  : 'bg-gradient-to-r from-fresh-emerald to-fresh-green text-white shadow-emerald-glow'
              }`}
            >
              <span>ENTER STUDIO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="text-[11px] font-mono opacity-60 animate-pulse mt-2">
              INITIALIZING ASSETS...
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footnote */}
      <div className={`relative z-10 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono border-t pt-4 gap-2 ${
        isDark ? 'border-white/10 text-slate-500' : 'border-emerald-900/10 text-slate-500'
      }`}>
        <div>ZERO MAINTENANCE CHARGES &bull; FULL CLIENT CODE OWNERSHIP</div>
        <div>
          STAGING: <span className={`font-semibold ${isDark ? 'text-luxury-gold' : 'text-fresh-green'}`}>pmssolution.jagadish.online</span>
        </div>
      </div>
    </div>
  );
}
