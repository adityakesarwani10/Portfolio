
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 dark:bg-slate-900/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">
                  I'm a quantum computing researcher and AI enthusiast with over 10 years of experience in developing cutting-edge technologies. My work focuses on the intersection of quantum mechanics and artificial intelligence, exploring new possibilities for computation and problem-solving.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Education</h2>
                <ul className="space-y-4 list-none pl-0">
                  <li className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-400">Ph.D. Quantum Computing</span>
                      <span className="text-gray-400">2018-2022</span>
                    </div>
                    <p className="text-gray-300 mt-2">California Institute of Technology</p>
                  </li>
                  <li className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-400">M.S. Computer Science</span>
                      <span className="text-gray-400">2016-2018</span>
                    </div>
                    <p className="text-gray-300 mt-2">Stanford University</p>
                  </li>
                  <li className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-400">B.S. Physics</span>
                      <span className="text-gray-400">2012-2016</span>
                    </div>
                    <p className="text-gray-300 mt-2">MIT</p>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Professional Experience</h2>
                <div className="space-y-6">
                  <div className="p-5 bg-slate-700/30 rounded-lg">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3 className="text-xl font-medium text-purple-400">Senior Quantum Researcher</h3>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <span className="text-gray-400">QuantumTech Labs</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-400">2022-Present</span>
                      </div>
                    </div>
                    <p className="text-gray-300">Leading research in quantum neural networks and developing novel algorithms for quantum computers.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Quantum Computing</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Neural Networks</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">AI</Badge>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-slate-700/30 rounded-lg">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3 className="text-xl font-medium text-purple-400">AI Research Engineer</h3>
                      <div className="flex items-center mt-1 sm:mt-0">
                        <span className="text-gray-400">DeepMind</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-400">2018-2022</span>
                      </div>
                    </div>
                    <p className="text-gray-300">Developed machine learning models for complex problem-solving and optimization challenges.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Machine Learning</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Deep Learning</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">TensorFlow</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
