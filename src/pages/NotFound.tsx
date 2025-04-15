
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">404</h1>
          <p className="text-xl text-gray-400 mb-6">Oops! This page has vanished into the quantum realm</p>
          <p className="text-gray-500 mb-10 max-w-md mx-auto">The page you're looking for doesn't exist or might have been moved to another dimension.</p>
          <Button asChild variant="outline" className="border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10">
            <Link to="/" className="text-purple-400 hover:text-purple-300">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
