
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Microscope, Atom, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Research = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Research Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 dark:bg-slate-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <project.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Status: {project.status}</span>
                    <span className="text-sm text-purple-400">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
