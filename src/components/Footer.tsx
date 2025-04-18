import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-purple-500/20 backdrop-blur-md bg-slate-900/90 dark:bg-slate-950/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Aditya.kesarwani
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Exploring the frontiers of Developing and Software systems.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/adityakesarwani10" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/adityakesa64986" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-kesarwani-057b56311/" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:aditykesarwani073@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Skills</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Resume</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                <span className="block">Email: adityakesarwani073@gmail.com</span>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block">Phone: +91 9140040247</span>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block">Location: Praygraj, India</span>
              </li>
              <li>
                <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Aditya kesarwani. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-xs">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
