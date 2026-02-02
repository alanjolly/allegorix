import React, { useEffect, useRef } from 'react';

export const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Star properties
    const stars: { x: number; y: number; size: number; speed: number; brightness: number }[] = [];
    const starCount = Math.floor((width * height) / 3000); // Responsive star count

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.2 + 0.05,
        brightness: Math.random(),
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = '#050B14'; // Deep space background
      ctx.fillRect(0, 0, width, height);

      // Draw Nebulas (Gradients)
      const gradient1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 0, width * 0.2, height * 0.3, width * 0.6);
      gradient1.addColorStop(0, 'rgba(76, 29, 149, 0.05)'); // Purple
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 0, width * 0.8, height * 0.7, width * 0.5);
      gradient2.addColorStop(0, 'rgba(6, 182, 212, 0.05)'); // Cyan
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Draw Stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move stars slowly upwards (drift effect)
        star.y -= star.speed;
        
        // Reset if off screen
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Twinkle
        star.brightness += (Math.random() - 0.5) * 0.05;
        if (star.brightness > 1) star.brightness = 1;
        if (star.brightness < 0.3) star.brightness = 0.3;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60"></div>
    </div>
  );
};