
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:john@quantum.ai",
      color: "text-pink-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com",
      color: "text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com",
      color: "text-purple-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com",
      color: "text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Get In Touch
        </h2>
        <Card className="max-w-lg mx-auto bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <p className="text-center text-gray-300 mb-8">
              Interested in collaborating on cutting-edge AI and quantum computing projects? 
              Let's connect and explore the possibilities of future technology together.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socials.map((social, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10" 
                  asChild
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <social.icon className={`h-5 w-5 ${social.color}`} />
                    <span className="hidden md:inline text-gray-300">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
