import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Resume = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black">
      <BackgroundEffects />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Resume
        </h1>

        {/* Resume Image */}
        <div className="flex justify-center">
          <img
            src="/resumeaditya.jpg"
            alt="Aditya Kesarwani Resume"
            className="w-lg max-w-xl rounded-lg shadow-lg"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <a href="/adityakesarwaniresume.pdf" download aria-label="Download Resume PDF">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition">
              Download PDF
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;