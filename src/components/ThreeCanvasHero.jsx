import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvasHero({ isDark }) {
  const canvasRef = useRef(null);
  const materialsRef = useRef({ torusMat: null, innerRingMat: null, particleMat: null });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    // Dynamic initial colors based on isDark
    const primaryColorHex = isDark ? 0xE6C687 : 0x00C853; // Champagne Gold in dark, Emerald in light
    const secondaryColorHex = isDark ? 0xEAEAEA : 0x059669;

    // Torus Knot Wireframe Mesh
    const torusGeo = new THREE.TorusKnotGeometry(7.5, 1.8, 120, 24, 2, 3);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primaryColorHex,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.22 : 0.18,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    group.add(torusMesh);

    // Inner Ring
    const innerRingGeo = new THREE.TorusGeometry(5, 0.25, 16, 100);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: secondaryColorHex,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
      wireframe: true,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    group.add(innerRing);

    // Dynamic Particle Cloud
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(primaryColorHex);
    const c2 = new THREE.Color(secondaryColorHex);
    const c3 = new THREE.Color(isDark ? 0xFFF2D1 : 0x48BB78);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 10 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = (radius * Math.cos(phi)) * 0.7;

      const p = Math.random();
      const chosenColor = p > 0.5 ? c1 : p > 0.2 ? c2 : c3;
      colors[i] = chosenColor.r;
      colors[i + 1] = chosenColor.g;
      colors[i + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.7 : 0.6,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    materialsRef.current = { torusMat, innerRingMat, particleMat, colors, particleGeo };

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      torusMesh.rotation.x = elapsedTime * 0.14 + targetY;
      torusMesh.rotation.y = elapsedTime * 0.18 + targetX;

      innerRing.rotation.z = -elapsedTime * 0.22;

      particles.rotation.y = elapsedTime * 0.07 + targetX * 1.4;
      particles.rotation.x = targetY * 1.4;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isDark]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Theme Adaptive Atmospheric Glow Orbs */}
      <div className="glow-ambient-1 w-[700px] h-[700px] -top-32 -right-32" />
      <div className="glow-ambient-2 w-[800px] h-[800px] top-1/3 -left-48" />
      
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-75"
      />
    </div>
  );
}
