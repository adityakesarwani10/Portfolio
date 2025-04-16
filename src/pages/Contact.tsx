import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-black dark:from-blue-950 dark:via-slate-900 dark:to-black relative overflow-hidden animate-fade-in">
      {/* Futuristic animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent animate-pulse" />
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%)] bg-[length:4rem_4rem] animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-pulse">
          Get In Touch
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Keep existing card code but update their styling */}
          <Card className="bg-slate-900/40 dark:bg-slate-950/40 border-cyan-500/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(31,127,255,0.2)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <p className="text-gray-400">contact@quantum-dev.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Location</h3>
                    <p className="text-gray-400">San Francisco, California</p>
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
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900/40 dark:bg-slate-950/40 border-cyan-500/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(31,127,255,0.2)]">
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

      {/* Animated background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

      <Footer />
    </div>
  );
};

export default Contact;
