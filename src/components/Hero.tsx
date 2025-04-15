
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Your Name Here
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Your Title / Profession
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          A brief introduction about yourself and what you do. Make it engaging and professional.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-purple-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
