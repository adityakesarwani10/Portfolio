import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black animate-fade-in">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Get In Touch
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] bg-slate-900/40 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-500 ease-out group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <p className="text-gray-400">adityakesarwani073@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                    <p className="text-gray-400">+91 91400 40247</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Location</h3>
                    <p className="text-gray-400">Prayagraj, India</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-200 mt-10 mb-4">Connect</h3>
              <div className="flex space-x-4">
                {/* Social buttons with hover effects */}
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => window.open("https://github.com/adityakesarwani10", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => window.open("https://www.linkedin.com/in/aditya-kesarwani-057b56311/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => window.open("https://x.com/adityakesa64986", "_blank")}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards] bg-slate-900/40 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-500 ease-out group">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">Send a Message</h2>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="name">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="email">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="subject">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="Subject" 
                    className="bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={5}
                    className="bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
