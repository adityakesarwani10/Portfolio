import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black animate-fade-in">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-blue-500/10 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-[float_6s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600/10 rounded-full filter blur-3xl animate-[float_10s_ease-in-out_infinite]" />

      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Get In Touch
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] bg-slate-900/40 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(31,127,255,0.2)] transition-all duration-500 ease-out group">
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
          
          <Card className="opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards] bg-slate-900/40 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(31,127,255,0.2)] transition-all duration-500 ease-out group">
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

      {/* Neural network-like background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20" />
      
      <Footer />
    </div>
  );
};

export default Contact;
