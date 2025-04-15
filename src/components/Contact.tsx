
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:your.email@example.com"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com"
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com"
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-6">
            <p className="text-center text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socials.map((social, index) => (
                <Button key={index} variant="outline" asChild className="w-full">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="hidden md:inline">{social.name}</span>
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
