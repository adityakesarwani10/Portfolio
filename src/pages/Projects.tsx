import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Projects = () => {
  const projects = [
    {
      title: "NutriScan",
      description: "An AI-based website that shows the Nutritional informations.",
      image: "/NutrScan.png",
      tags: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/adityakesarwani10/NutriScan",
      demo: "https://nutri-scan-plum.vercel.app"
    },
    {
      title: "RescuePrint",
      description: "An real-word based problem based site that shows the the details of an unconsious victum an an accident case.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["HTML", "CSS", "Javascript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/adityakesarwani10/RescuePrint",
      demo: "https://adityakesarwani10.github.io/RescuePrint/Component/Login/index.html"
    },
    {
      title: "Weather forecast",
      description: "This is a site that shows the weather details in a real-time.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/adityakesarwani10/Weather-App",
      demo: "https://weather-app-tau-six-74.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 animate-fade-in">
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
                <div className="flex gap justify-between">
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
