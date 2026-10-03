import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasHero({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 24;

    // Optimized WebGL renderer (capped pixel ratio for ultra-smooth 60/120fps)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // Turned off for massive GPU speedup with wireframe
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));

    const group = new THREE.Group();
    scene.add(group);

    // Color palette: Modern Tech Luxury / Hostinger Purple / Fresh Emerald
    const primaryColorHex = isDark ? 0xE6C687 : 0x00C853; 
    const secondaryColorHex = isDark ? 0x8B5CF6 : 0x673DE6; // Hostinger electric purple accent
    const accentColorHex = isDark ? 0xEAEAEA : 0x059669;

    // Ultra-optimized Torus Knot Wireframe (60x16 segments instead of 120x24)
    const torusGeo = new THREE.TorusKnotGeometry(7.2, 1.4, 60, 16, 2, 3);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primaryColorHex,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.24 : 0.18,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    group.add(torusMesh);

    // Lightweight Particle Cloud (320 particles instead of 700)
    const particleCount = 320;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(primaryColorHex);
    const c2 = new THREE.Color(secondaryColorHex);
    const c3 = new THREE.Color(accentColorHex);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 9 + Math.random() * 16;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = (radius * Math.cos(phi)) * 0.7;

      const p = Math.random();
      const chosenColor = p > 0.5 ? c1 : p > 0.25 ? c2 : c3;
      colors[i] = chosenColor.r;
      colors[i + 1] = chosenColor.g;
      colors[i + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.75 : 0.65,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Responsive, jitter-free cursor tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isVisible = true;

    const handleMouseMove = (event) => {
      // Direct normalized cursor offset
      mouseX = ((event.clientX / window.innerWidth) - 0.5) * 0.7;
      mouseY = ((event.clientY / window.innerHeight) - 0.5) * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Performance: Pause rendering when page scrolled far down or tab hidden
    const handleScroll = () => {
      isVisible = window.scrollY < window.innerHeight * 1.5;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || document.hidden) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Snappy lerp (0.09) so mouse response feels immediate without lagging
      targetX += (mouseX - targetX) * 0.09;
      targetY += (mouseY - targetY) * 0.09;

      torusMesh.rotation.x = elapsedTime * 0.15 + targetY;
      torusMesh.rotation.y = elapsedTime * 0.18 + targetX;

      particles.rotation.y = elapsedTime * 0.08 + targetX * 1.2;
      particles.rotation.x = targetY * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isDark]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Ambient Atmospheric Glows with Hostinger Purple + Luxury Gold/Emerald */}
      <div className={`absolute w-[600px] h-[600px] -top-32 -right-32 rounded-full filter blur-[140px] pointer-events-none opacity-20 ${
        isDark ? 'bg-[#673DE6]' : 'bg-[#673DE6]/40'
      }`} />
      <div className={`absolute w-[700px] h-[700px] top-1/3 -left-48 rounded-full filter blur-[160px] pointer-events-none opacity-15 ${
        isDark ? 'bg-[#E6C687]' : 'bg-[#00C853]'
      }`} />
      
      {/* Optimized 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-80 transition-opacity duration-700"
      />
    </div>
  );
}
