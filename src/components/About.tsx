
import { Card, CardContent } from "./ui/card";
import { Cpu, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "AI Development",
      description: "Developing cutting-edge AI solutions with advanced neural networks and machine learning algorithms."
    },
    {
      icon: Brain,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and their applications in solving complex computational problems."
    },
    {
      icon: Rocket,
      title: "Future Tech",
      description: "Building scalable and future-proof architectures for next-generation applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-8 leading-relaxed">
                With over a decade of experience in AI and quantum computing, I've been at the 
                forefront of technological innovation. My work focuses on bridging the gap between 
                theoretical quantum mechanics and practical AI applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
