import { Button } from '@/components/ui/button';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">P</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold block leading-none">
                  PlaceTo Africa
                </span>
                <span className="text-xs text-primary-foreground/60">Find your place</span>
              </div>
            </a>
            <p className="text-primary-foreground/60 mb-6 max-w-sm">
              Your trusted partner in finding the perfect place across Africa.
              From urban apartments to safari lodges, discover your ideal space anywhere on the continent.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon-sm" className="hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon-sm" className="hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon-sm" className="hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon-sm" className="hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="/how-it-works" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="/contact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Browse Properties</a></li>
              <li><a href="/#search-section" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Featured</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Top Locations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Kampala, Uganda</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Nairobi, Kenya</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Dar es Salaam, Tanzania</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Kigali, Rwanda</a></li>
              <li><a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Zanzibar, Tanzania</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const chatButton = document.querySelector('[class*="bottom-6 right-6"]');
                    if (chatButton instanceof HTMLElement) {
                      chatButton.click();
                    }
                  }}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-left"
                >
                  AI Assistant
                </button>
              </li>
              <li><a href="/help" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2025 PlaceTo Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Globe className="w-4 h-4" />
              English (US)
            </button>
            <span className="text-primary-foreground/20">|</span>
            <button className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              USD ($)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
