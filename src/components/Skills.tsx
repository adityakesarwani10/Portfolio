
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision", "NLP", "Deep Learning"]
    },
    {
      category: "Quantum Computing",
      skills: ["Qiskit", "Q#", "Quantum Algorithms", "Quantum ML", "Error Correction", "Circuit Design"]
    },
    {
      category: "Full Stack Development",
      skills: ["React", "Node.js", "Python", "TypeScript", "GraphQL", "WebAssembly"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                    >
                      {skill}
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

export default Skills;
