
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(40deg,#111827_40%,rgba(49,46,129,0.2)_100%)] z-0" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-2">
            John Quantum
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300">
            AI Engineer & Future Architect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building the bridge between human creativity and artificial intelligence.
            Specializing in neural networks, quantum computing, and future-proof architectures.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-400" asChild>
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
