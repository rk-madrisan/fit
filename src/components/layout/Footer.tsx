import { Link } from "react-router-dom";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fight-black border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="fight-glow rounded-full p-2 bg-fight-red">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-display font-bold hero-text">
                  FIT FOR FIGHT
                </span>
                <p className="text-xs text-muted-foreground font-medium">
                  Powerhouse
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your body with the ultimate fitness platform. Power, Strength, Dedication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-fight-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-fight-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-fight-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-fight-red transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Home</Link></li>
              <li><Link to="/workouts" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Workouts</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Strength Training</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Cardio Workouts</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Yoga Classes</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">HIIT Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">891, FitForFight</li>
              <li className="text-sm text-muted-foreground">Mount Road,, Chennai-600 002</li>
              <li><a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">+91-9385838485</a></li>
              <li><a href="mailto:info@fitforfight.com" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">info@fitforfight.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FIT FOR FIGHT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-fight-red transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;