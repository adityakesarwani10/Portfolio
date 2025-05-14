
"use client";

import { useEffect, useRef } from "react";
import img from "Portfolio/build-my-resume-kit/public/aditya_profile.jpeg";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ProfileSection from "./hero/ProfileSection";
import ParticleCanvas from "./hero/ParticleCanvas";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const numberOfParticles = 200; // Increased number of particles

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 200, // Increased radius for better visibility
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1; // Increased size range
        this.density = Math.random() * 40 + 1; // Adjusted density for smoother movement

        const colors = [
          "rgba(147, 51, 234, 0.9)",
          "rgba(79, 70, 229, 0.9)",
          "rgba(59, 130, 246, 0.9)",
          "rgba(108, 45, 253, 0.9)",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (mouse.x != null && mouse.y != null) {
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
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX;
              this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY;
              this.y -= dy / 10;
            }
          }
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    function connect() {
      let opacityValue = 1;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            opacityValue = 1 - distance / 150;
            ctx.strokeStyle = `rgba(147, 112, 219, ${opacityValue})`;
            ctx.lineWidth = 1; // Slightly thicker lines
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

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
      });
      window.removeEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
      });
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-start justify-center pt-32 mt-23 relative overflow-hidden"
    >
      <ParticleCanvas className="absolute top-0 left-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <ProfileSection />
      </div>
    </section>
  );
};

export default Hero;
