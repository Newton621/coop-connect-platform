import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Phone, Egg } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <Egg className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">ChickStage360</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your complete smart poultry platform for tracking, managing, and growing 
              your poultry farm business from chick to profit.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/254707971235"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-farm"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              
              <a
                href="https://tiktok.com/@n.l.a877"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-farm"
                title="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/lifecycle" className="hover:text-primary-foreground/80 transition-farm">
                  Lifecycle Tracker
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-primary-foreground/80 transition-farm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-primary-foreground/80 transition-farm">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link to="/interviews" className="hover:text-primary-foreground/80 transition-farm">
                  Farmer Interviews
                </Link>
              </li>
              <li>
                <Link to="/livestream" className="hover:text-primary-foreground/80 transition-farm">
                  Live Stream
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-primary-foreground/80 transition-farm cursor-pointer">
                  Chick Management
                </span>
              </li>
              <li>
                <span className="hover:text-primary-foreground/80 transition-farm cursor-pointer">
                  Feed Optimization
                </span>
              </li>
              <li>
                <span className="hover:text-primary-foreground/80 transition-farm cursor-pointer">
                  Health Monitoring
                </span>
              </li>
              <li>
                <span className="hover:text-primary-foreground/80 transition-farm cursor-pointer">
                  Market Analysis
                </span>
              </li>
              <li>
                <span className="hover:text-primary-foreground/80 transition-farm cursor-pointer">
                  Farm Consulting
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+254707971235" 
                  className="hover:text-primary-foreground/80 transition-farm"
                >
                  +254 707 971 235
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <a 
                  href="https://wa.me/254707971235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-farm"
                >
                  WhatsApp Support
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:info@chickstage360.com" 
                  className="hover:text-primary-foreground/80 transition-farm"
                >
                  info@chickstage360.com
                </a>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Kenya, East Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 ChickStage360. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-primary-foreground/80 transition-farm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground/80 transition-farm">
                Terms of Service
              </Link>
              <Link to="/support" className="hover:text-primary-foreground/80 transition-farm">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;