
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 w-full h-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20" />
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Quantum.Dev
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-900/95 border-purple-500/20">
              <div className="flex flex-col space-y-6 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
