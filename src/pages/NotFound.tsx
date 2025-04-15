
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 dark:bg-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
        <Button asChild variant="outline" className="border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10">
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
