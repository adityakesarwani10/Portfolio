
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Microscope, Atom, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Resume = () => {
  const projects = [
    {
      title: "Quantum Neural Networks",
      description: "Developing hybrid quantum-classical neural networks for enhanced machine learning capabilities.",
      icon: Atom,
      status: "Ongoing",
      progress: 75
    },
    {
      title: "AI Ethics Framework",
      description: "Creating comprehensive guidelines for ethical AI development and deployment.",
      icon: Microscope,
      status: "Completed",
      progress: 100
    },
    {
      title: "Quantum Error Correction",
      description: "Advanced error correction algorithms for quantum computing systems.",
      icon: Cpu,
      status: "Planning",
      progress: 25
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Resume
        </h1>
        
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
