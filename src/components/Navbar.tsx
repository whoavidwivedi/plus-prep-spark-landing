import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Code, Target, Users, Star } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Features", href: "#features", icon: Code },
    { name: "Syllabus", href: "#syllabus", icon: Target },
    { name: "Reviews", href: "#reviews", icon: Star },
    { name: "Pricing", href: "#pricing", icon: Users },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="block focus:outline-none" aria-label="Home">
                <span className="inline-flex items-center justify-center bg-black dark:bg-background rounded-lg p-1 transition-colors duration-300">
                  <img
                    src="/tuflogo.jpeg"
                    alt="TUF Logo"
                    className="h-10 w-auto object-contain drop-shadow-md"
                    style={{ maxWidth: 140 }}
                  />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="hero-gradient">
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-2 px-3 py-2">
              <Button variant="outline" size="sm" className="flex-1">
                Login
              </Button>
              <Button size="sm" className="flex-1 hero-gradient">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;