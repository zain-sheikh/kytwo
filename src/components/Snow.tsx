'use client';
import { JSX, useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  r: number;
  d: number;
};

export default function SnowCanvas(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let angle = 0;
    let animationId = 0;
    const mp = Math.min(50, Math.floor(window.innerWidth / 35));
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 1,
        d: Math.random() * mp,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';

      angle += 0.01;

      for (let i = 0; i < mp; i++) {
        const p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r * 0.5;
        p.x += Math.sin(angle) * 0.8;

        if (p.y > H || p.x > W + 5 || p.x < -5) {
          p.x = Math.random() * W;
          p.y = -10;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
      <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2,
            willChange: 'transform',
          }}
      />
  );
}
