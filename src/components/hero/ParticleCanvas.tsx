
"use client";

import { useEffect, useRef } from "react";

type ParticleCanvasProps = {
  className?: string;
};

class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
  angle: number;
  velocity: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = Math.random() * 3 + 1;
    this.density = Math.random() * 40 + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.velocity = 0.05 + Math.random() * 0.2;

    const colors = [
      "rgba(147, 51, 234, 0.9)",
      "rgba(79, 70, 229, 0.9)",
      "rgba(59, 130, 246, 0.9)",
      "rgba(108, 45, 253, 0.9)",
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(mouse: { x: number | null; y: null | number; radius: number }, time: number, waveAmplitude: number) {
    // Autonomous movement based on time
    const autonomousX = Math.sin(this.angle + time * this.velocity) * waveAmplitude;
    const autonomousY = Math.cos(this.angle + time * this.velocity) * waveAmplitude;

    if (mouse.x != null && mouse.y != null) {
      // Mouse interaction takes priority
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        this.x += directionX;
        this.y += directionY;
      } else {
        // Return to base position + autonomous movement
        if (this.x !== this.baseX + autonomousX) {
          const dx = this.x - (this.baseX + autonomousX);
          this.x -= dx / 15;
        }
        if (this.y !== this.baseY + autonomousY) {
          const dy = this.y - (this.baseY + autonomousY);
          this.y -= dy / 15;
        }
      }
    } else {
      // Only autonomous movement when no mouse interaction
      if (this.x !== this.baseX + autonomousX) {
        const dx = this.x - (this.baseX + autonomousX);
        this.x -= dx / 15;
      }
      if (this.y !== this.baseY + autonomousY) {
        const dy = this.y - (this.baseY + autonomousY);
        this.y -= dy / 15;
      }
    }
  }
}

const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particlesArray: Particle[] = [];
    const numberOfParticles = 200;

    // Animation variables
    let time = 0;
    const waveSpeed = 0.002;
    const waveAmplitude = 50;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 200,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    function connect() {
      let opacityValue = 1;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            opacityValue = 1 - distance / 150;
            ctx.strokeStyle = `rgba(147, 112, 219, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      particlesArray.length = 0;

      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Increment time for autonomous movement
      time += waveSpeed;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouse, time, waveAmplitude);
        particlesArray[i].draw(ctx);
      }

      connect();
      animationRef.current = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default ParticleCanvas;
