import React, { useEffect, useRef } from 'react';

export default function OceanCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: 36 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.9 + 0.6,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -Math.random() * 0.3 - 0.08,
        gold: Math.random() > 0.6,
      }));
    };

    const animateOceanParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? 'rgba(250, 204, 21, 0.42)'
          : 'rgba(34, 211, 238, 0.34)';
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animateOceanParticles);
    };

    resizeCanvas();
    initParticles();
    animateOceanParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
}
