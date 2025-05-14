
"use client";

import { Button } from "../ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

type ProfileSectionProps = {
  className?: string;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ className }) => {
  return (
    <div className={`max-w-4xl mx-auto space-y-8 ${className}`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-purple-500/20">
          <img
            src="/aditya_profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover border border-purple-500/20 rounded-full"
          />
        </div>
        <div className="text-left space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Aditya kesarwani
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            <span className="text-purple-400"> Web developer & Software Engineer</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Building solution on the based of real-world problems.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-start">
        <Button className="bg-purple-600 hover:bg-purple-700" asChild>
          <a href="#contact" className="flex items-center gap-2">
            Get in Touch
          </a>
        </Button>
        <Button
          variant="outline"
          className="border-purple-600 text-purple-400"
          asChild
        >
          <a href="#projects" className="flex items-center gap-2">
            View Projects
          </a>
        </Button>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-purple-400"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-purple-400"
            asChild
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
