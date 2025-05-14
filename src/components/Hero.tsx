
"use client";

import { useEffect, useRef } from "react";
import img from "Portfolio/build-my-resume-kit/public/aditya_profile.jpeg";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

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

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
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
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-purple-500/20">
              <img
                src="/aditya_profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover border border-purple-500/20 rounded-full"
              />
            </div>
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Aditya kesarwani
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400">
                <span className="text-purple-400"> Web developer & Software Engineer</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Building solution on the based of real-world problems.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-purple-400"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
