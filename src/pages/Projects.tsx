
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Quantum Neural Network Framework",
      description: "A framework for building and training quantum neural networks that combines classical deep learning with quantum computing principles.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070",
      tags: ["Quantum Computing", "Neural Networks", "Python", "TensorFlow"],
      github: "https://github.com/username/quantum-nn",
      demo: "https://quantum-nn-demo.com"
    },
    {
      title: "AI Ethics Dashboard",
      description: "Interactive dashboard for monitoring and assessing ethical implications of AI systems, with real-time analysis and recommendations.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070",
      tags: ["Ethics", "AI", "Dashboard", "React", "D3.js"],
      github: "https://github.com/username/ai-ethics",
      demo: "https://ai-ethics-dashboard.com"
    },
    {
      title: "Quantum Error Correction Simulator",
      description: "Simulation tool for testing various quantum error correction codes and their effectiveness in different noise environments.",
      image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=2036",
      tags: ["Quantum Computing", "Error Correction", "Simulation", "C++"],
      github: "https://github.com/username/qec-sim",
      demo: "https://qec-simulator.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-slate-800/50 dark:bg-slate-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-slate-900 opacity-60"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
