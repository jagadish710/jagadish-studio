import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Sparkles, Zap, Info } from 'lucide-react';

export default function ThreeCenterpiece3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeShader, setActiveShader] = useState('mercury');
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const lightsRef = useRef({});
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const shaderPresets = [
    { 
      id: 'mercury', 
      label: '🔮 Liquid Mercury', 
      color: 0xffffff, 
      metalness: 0.98, 
      roughness: 0.04, 
      clearcoat: 1.0,
      glow: 'from-sky-400/25 via-slate-300/30 to-violet-400/20',
      desc: 'Specular chrome liquid metal'
    },
    { 
      id: 'gold', 
      label: '👑 Liquid Gold', 
      color: 0xffb703, 
      metalness: 0.95, 
      roughness: 0.08, 
      clearcoat: 1.0,
      glow: 'from-amber-400/35 via-yellow-400/25 to-orange-400/20',
      desc: '24K radiant polished gold'
    },
    { 
      id: 'cyber', 
      label: '⚡ Cyber Rose', 
      color: 0xe11d48, 
      metalness: 0.88, 
      roughness: 0.10, 
      clearcoat: 0.9,
      glow: 'from-rose-500/30 via-pink-400/25 to-purple-400/25',
      desc: 'Electric crimson anodized alloy'
    },
    { 
      id: 'emerald', 
      label: '🌿 Radiant Jade', 
      color: 0x10b981, 
      metalness: 0.85, 
      roughness: 0.10, 
      clearcoat: 1.0,
      glow: 'from-emerald-400/30 via-teal-400/20 to-cyan-400/20',
      desc: 'Luminous emerald titanium'
    },
  ];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // High-spec pure studio lighting (neutral white so true metallic colors pop!)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf1f5f9, 2.4);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.2);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    lightsRef.current = { ambientLight, keyLight, fillLight, rimLight };

    // Kinetic Complex Geometry: Torus Knot forming the Merqurie "M" Infinite Loop
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.42, 128, 32, 2, 3);
    
    // Physical Metallic Shading
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.98,
      roughness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.98,
      ior: 1.5,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    // Dynamic Orbiting Particle Ring
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      particlePositions[i] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i + 1] = radius * Math.sin(phi);
      particlePositions[i + 2] = radius * Math.sin(theta) * Math.cos(phi);

      particleColors[i] = 0.85;
      particleColors[i + 1] = 0.88;
      particleColors[i + 2] = 0.92;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particlesRef.current = particles;
    scene.add(particles);

    // Mouse pointer interaction
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 1.2;
      mouseRef.current.targetY = y * 1.2;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // Responsive Canvas Resizing
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth || 360;
      const h = containerRef.current.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (mesh) {
        mesh.rotation.x = elapsed * 0.35 + mouseRef.current.y * 0.8;
        mesh.rotation.y = elapsed * 0.45 + mouseRef.current.x * 0.8;
        mesh.rotation.z = Math.sin(elapsed * 0.5) * 0.15;

        // Subtle breathing scale
        const scale = 1 + Math.sin(elapsed * 1.8) * 0.03;
        mesh.scale.set(scale, scale, scale);
      }

      if (particles) {
        particles.rotation.y = -elapsed * 0.12;
        particles.rotation.x = elapsed * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Update Shader Preset Material dynamically with true vibrant metallic colors
  const applyShaderPreset = (preset) => {
    setActiveShader(preset.id);
    if (!materialRef.current) return;

    materialRef.current.color.setHex(preset.color);
    materialRef.current.metalness = preset.metalness;
    materialRef.current.roughness = preset.roughness;
    materialRef.current.clearcoat = preset.clearcoat;
    materialRef.current.needsUpdate = true;

    confetti({
      particleCount: 22,
      spread: 60,
      origin: { y: 0.4, x: 0.65 },
      colors: ['#F59E0B', '#E11D48', '#10B981', '#0284C7'],
    });
  };

  const handleOrbClick = () => {
    confetti({
      particleCount: 45,
      spread: 80,
      origin: { y: 0.45, x: 0.65 },
      colors: ['#F59E0B', '#E11D48', '#10B981', '#0284C7'],
    });
  };

  const currentPreset = shaderPresets.find(p => p.id === activeShader) || shaderPresets[0];

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex flex-col items-center justify-center select-none group">
      
      {/* Dynamic Ambient Glow Behind 3D Canvas matching selected material */}
      <div className={`absolute inset-0 rounded-full blur-[80px] transition-all duration-700 pointer-events-none bg-gradient-to-tr ${currentPreset.glow}`} />

      {/* Interactive 3D Canvas Container */}
      <div 
        ref={containerRef}
        onClick={handleOrbClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing flex items-center justify-center"
        title="Click or drag to interact with Merqurie's Kinetic 'M' loop!"
      >
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Floating Badge with Exact Meaning */}
        <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[10px] font-mono text-slate-800 font-bold flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          <span>KINETIC "M" EMBLEM</span>
        </div>

        {/* Click hint tooltip */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5 whitespace-nowrap shadow-lg">
          <Zap className="w-3 h-3 text-amber-400" />
          <span>Move mouse or click to pulse</span>
        </div>
      </div>

      {/* Interactive Shader Material Selector Pill Bar */}
      <div className="relative z-20 flex items-center gap-1.5 p-1 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-300/40 -mt-6 max-w-full overflow-x-auto">
        {shaderPresets.map((preset) => {
          const isActive = activeShader === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => applyShaderPreset(preset)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25 font-semibold scale-105'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Precise 1-Line Explanation of the 3D Image */}
      <div className="relative z-20 mt-3 text-center px-4">
        <p className="text-[11px] font-mono text-slate-500 flex items-center justify-center gap-1">
          <Info className="w-3.5 h-3.5 text-rose-500 shrink-0" />
          <span>Kinetic "M" Infinite Loop — Symbolizing speed, fluid motion, and zero latency.</span>
        </p>
      </div>

    </div>
  );
}
