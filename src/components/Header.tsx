import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Egg, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Lifecycle Tracker", path: "/lifecycle" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Learning Center", path: "/learning" },
    { name: "Farmer Interviews", path: "/interviews" },
    { name: "Live Stream", path: "/livestream" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Egg className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">ChickStage360</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-farm hover:text-primary ${
                  isActive(item.path) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Media & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/254707971235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success hover:text-success/80 transition-farm"
              title="Contact us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            
            {/* TikTok */}
            <a
              href="https://tiktok.com/@n.l.a877"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-farm"
              title="Follow us on TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            <Link to="/auth">
              <Button variant="farm">Sign In</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-sm font-medium transition-farm hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 pt-4 border-t">
              <a
                href="https://wa.me/254707971235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success hover:text-success/80 transition-farm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              
              <a
                href="https://tiktok.com/@n.l.a877"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-farm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              <Link to="/auth">
                <Button variant="farm" size="sm">Sign In</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;