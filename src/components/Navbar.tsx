
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const menuItems = ["Home", "About", "Projects", "Skills", "Resume", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 w-full h-full bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20" />
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Aditya kesarwani
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-300 hover:text-purple-400"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-300"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-900/95 dark:bg-slate-950/95 border-purple-500/20">
                <div className="flex flex-col space-y-6 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item}
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
