
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
                <p className="text-gray-300 text-lg mb-6">
                Hello everyone, my name is Aditya Kesarwani. I belong to Prayagraj and I am pursuing a B.Tech in Computer Science and Engineering, specialized in AI and ML, from United Institute of Technology. I am good at communication skills and a passionate programmer. I enjoy solving problems on LeetCode and have a keen interest in competitive programming. My hobbies include reading books and actively participating in extracurricular activities.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Education</h2>
                <ul className="space-y-4 list-none pl-0">
                  <li className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-400">B.tech CSE-AIML</span>
                      <span className="text-gray-400">2023-2027</span>
                    </div>
                    <p className="text-gray-300 mt-2">United Institute of Technology</p>
                  </li>
                  <li className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-400">Intermedieate</span>
                      <span className="text-gray-400">2021-2023</span>
                    </div>
                    <p className="text-gray-300 mt-2">Maharishi Dayanand Convent School</p>
                  </li>
                  <li className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-semibold text-purple-400">High School</span>
                      <span className="text-gray-400">2019-2021</span>
                    </div>
                    <p className="text-gray-300 mt-2">Jumna Christian Junior High School</p>
                  </li>
                </ul>
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
