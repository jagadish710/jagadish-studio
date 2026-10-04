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

    // Ultra-smooth high-performance renderer capped at native 1x for 120fps zero-lag cursor response
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(1);

    const group = new THREE.Group();
    scene.add(group);

    // Color palette
    const primaryColorHex = isDark ? 0xE6C687 : 0x94A3B8; 
    const secondaryColorHex = isDark ? 0x8B5CF6 : 0x64748B;
    const accentColorHex = isDark ? 0xEAEAEA : 0xCBD5E1;

    // Ultra-lightweight Torus Knot Wireframe (Visible only in Dark mode for aesthetic constellation)
    const torusGeo = new THREE.TorusKnotGeometry(7.0, 1.35, 44, 12, 2, 3);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primaryColorHex,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.22 : 0,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.visible = isDark;
    group.add(torusMesh);

    // Lightweight Particle Cloud (180 particles)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(primaryColorHex);
    const c2 = new THREE.Color(secondaryColorHex);
    const c3 = new THREE.Color(accentColorHex);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 9 + Math.random() * 15;
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
      size: isDark ? 0.18 : 0.13,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.7 : 0.35,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Instant, ultra-smooth mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isVisible = true;

    const handleMouseMove = (event) => {
      mouseX = ((event.clientX / window.innerWidth) - 0.5) * 0.6;
      mouseY = ((event.clientY / window.innerHeight) - 0.5) * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const handleScroll = () => {
      isVisible = window.scrollY < window.innerHeight * 1.4;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || document.hidden) return;

      const elapsedTime = clock.getElapsedTime();

      // Fluid dampening
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      // Rotate group as unified 3D element (zero stutter)
      group.rotation.x = targetY * 0.6;
      group.rotation.y = targetX * 0.6;

      torusMesh.rotation.x = elapsedTime * 0.12;
      torusMesh.rotation.y = elapsedTime * 0.15;
      particles.rotation.y = elapsedTime * 0.07;

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
      {/* Hardware-accelerated radial glow (clean and subtle) */}
      <div 
        className="absolute w-[500px] h-[500px] -top-24 -right-24 rounded-full pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(103, 61, 230, 0.22) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] top-1/3 -left-36 rounded-full pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(230, 198, 135, 0.14) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
        }}
      />
      
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-80"
      />
    </div>
  );
}
