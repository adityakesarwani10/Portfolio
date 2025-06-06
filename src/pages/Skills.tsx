
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, Code, Database, Cpu, LineChart } from "lucide-react";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 95 },
    { name: "DSA", level: 92 },
    { name: "Python", level: 90 },
    { name: "C", level: 88 },
    { name: "MySQL", level: 85 },
    { name: "JavaScript/TypeScript", level: 80 },
    { name: "React", level: 78 },
    { name: "C++", level: 75 },
    { name: "MongoDB", level: 85 }
  ];


  const softSkills = [
    { name: "Problem Solving", level: 93 },
    { name: "Scientific Writing", level: 90 },
    { name: "Team Leadership", level: 85 },
    { name: "Project Management", level: 80 },
    { name: "Public Speaking", level: 78 },
    { name: "Collaboration", level: 88 }
  ];

  const skillCategories = [
    {
      id: "technical",
      label: "Technical",
      icon: <Code className="h-4 w-4" />,
      skills: technicalSkills
    },
    {
      id: "soft",
      label: "Soft Skills",
      icon: <LineChart className="h-4 w-4" />,
      skills: softSkills
    }
  ];

  const tools = [
    { name: "React", icon: Cpu, level: "Expert" },
    { name: "JS", icon: Atom, level: "Expert" },
    { name: "TS", icon: Atom, level: "Expert" },
    { name: "SQL", icon: Database, level: "Advanced" },
    { name: "React", icon: Code, level: "Intermediate" },
    { name: "Git", icon: Code, level: "Advanced" },
    { name: "Node.js", icon: Code, level: "Intermediate" },];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Expertise
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="technical" className="mb-12">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8 bg-slate-800/50 dark:bg-slate-900/50">
              {skillCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-purple-300"
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <Card className="bg-slate-800/50 dark:bg-slate-900/50 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-purple-400">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-slate-700/50"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          <h2 className="text-2xl font-semibold text-center text-gray-200 mb-8">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 dark:bg-slate-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <tool.icon className="h-10 w-10 text-purple-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-200">{tool.name}</h3>
                  <span className="text-sm text-purple-400 mt-1">{tool.level}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
