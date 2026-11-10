import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Sparkles, RefreshCw, Zap } from 'lucide-react';

export default function ThreeCenterpiece3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeShader, setActiveShader] = useState('mercury');
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const shaderPresets = [
    { id: 'mercury', label: '🔮 Liquid Mercury', color: 0xffffff, metalness: 0.98, roughness: 0.04, clearcoat: 1.0 },
    { id: 'cyber', label: '⚡ Cyber Neon', color: 0x00f0ff, metalness: 0.85, roughness: 0.15, clearcoat: 0.8 },
    { id: 'gold', label: '👑 Liquid Gold', color: 0xf59e0b, metalness: 0.95, roughness: 0.08, clearcoat: 1.0 },
    { id: 'obsidian', label: '💎 Deep Obsidian', color: 0x1e1b4b, metalness: 0.6, roughness: 0.12, clearcoat: 1.0 },
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
    renderer.toneMappingExposure = 1.3;

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff0055, 3.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00f0ff, 3.0);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 4.0);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Kinetic Complex Geometry: Torus Knot with liquid organic proportions
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.42, 128, 32, 2, 3);
    
    // Physical Metallic Shading
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.98,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.98,
      ior: 1.5,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    // Background Orbiting Particle Ring
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

      const isCyan = Math.random() > 0.5;
      particleColors[i] = isCyan ? 0.0 : 1.0;
      particleColors[i + 1] = isCyan ? 0.85 : 0.1;
      particleColors[i + 2] = isCyan ? 1.0 : 0.4;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse tilt tracking with smooth damping
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 1.2;
      mouseRef.current.targetY = y * 1.2;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth inertia lerp for mouse orientation
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

  // Update Shader Preset Material dynamically
  const applyShaderPreset = (preset) => {
    setActiveShader(preset.id);
    if (!materialRef.current) return;

    materialRef.current.color.setHex(preset.color);
    materialRef.current.metalness = preset.metalness;
    materialRef.current.roughness = preset.roughness;
    materialRef.current.clearcoat = preset.clearcoat;
    materialRef.current.needsUpdate = true;

    // Small celebratory burst
    confetti({
      particleCount: 20,
      spread: 60,
      origin: { y: 0.4, x: 0.65 },
      colors: ['#FF0055', '#00F0FF', '#F59E0B', '#8B5CF6'],
    });
  };

  const handleOrbClick = () => {
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.45, x: 0.65 },
      colors: ['#FF0055', '#00F0FF', '#FFFFFF', '#F59E0B'],
    });
  };

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex flex-col items-center justify-center select-none group">
      
      {/* Dynamic Ambient Glow Behind 3D Canvas */}
      <div className={`absolute inset-0 rounded-full blur-[80px] transition-all duration-700 pointer-events-none ${
        activeShader === 'mercury' ? 'bg-gradient-to-tr from-sky-500/25 via-rose-500/20 to-violet-500/20' :
        activeShader === 'cyber' ? 'bg-gradient-to-tr from-cyan-500/35 via-blue-500/20 to-purple-500/30' :
        activeShader === 'gold' ? 'bg-gradient-to-tr from-amber-500/30 via-yellow-500/20 to-rose-500/20' :
        'bg-gradient-to-tr from-purple-900/40 via-indigo-900/30 to-slate-900/40'
      }`} />

      {/* Interactive 3D Canvas Container */}
      <div 
        ref={containerRef}
        onClick={handleOrbClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing flex items-center justify-center"
        title="Click or drag to interact with the 3D Liquid Mercury emblem!"
      >
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Floating Badge on Canvas */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>REAL-TIME 3D</span>
        </div>

        {/* Click hint tooltip */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5 whitespace-nowrap">
          <Zap className="w-3 h-3 text-rose-400" />
          <span>Move mouse or click to pulse</span>
        </div>
      </div>

      {/* Interactive Shader Material Selector Pill Bar */}
      <div className="relative z-20 flex items-center gap-1.5 p-1 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-2xl -mt-6 max-w-full overflow-x-auto">
        {shaderPresets.map((preset) => {
          const isActive = activeShader === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => applyShaderPreset(preset)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium font-sans whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/30 font-semibold scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
