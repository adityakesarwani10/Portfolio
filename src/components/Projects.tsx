
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project. What was it about and what did you achieve?",
      technologies: ["React", "TypeScript", "Tailwind"],
      image: "/placeholder.svg"
    },
    {
      title: "Project 2",
      description: "Description of your second project. What problems did it solve?",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      image: "/placeholder.svg"
    },
    {
      title: "Project 3",
      description: "Description of your third project. What was your role and impact?",
      technologies: ["Vue", "Express", "PostgreSQL"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
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
