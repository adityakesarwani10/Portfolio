
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "NeuroVerse AI",
      description: "A revolutionary AI platform that combines neural networks with quantum computing capabilities for unprecedented problem-solving abilities.",
      technologies: ["Python", "TensorFlow", "Quantum", "React"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      demo: "https://demo.example.com",
      github: "https://github.com"
    },
    {
      title: "Quantum Bridge",
      description: "Bridging classical computing with quantum systems through an innovative middleware solution.",
      technologies: ["Qiskit", "TypeScript", "Node.js", "AWS"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      demo: "https://demo.example.com",
      github: "https://github.com"
    },
    {
      title: "FutureStack",
      description: "Next-generation cloud infrastructure with built-in quantum-resistant security protocols.",
      technologies: ["Rust", "Go", "Kubernetes", "WebAssembly"],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      demo: "https://demo.example.com",
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              </div>
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
