import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, User, Heart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onSearchClick?: () => void;
  onAuthClick?: () => void;
}

const Header = ({ onSearchClick, onAuthClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-semibold text-foreground block leading-none">
                PlaceTo Africa
              </span>
              <span className="text-xs text-muted-foreground">Find your place</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </a>
            <a href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="/help" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Help
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <button
            onClick={onSearchClick}
            className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-muted rounded-full hover:bg-muted/80 transition-colors cursor-pointer border border-border"
          >
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search properties...</span>
            <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </button>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Globe className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={onAuthClick}
              className="hidden sm:flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          <a href="/" className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
            Home
          </a>
          <a href="/about" className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
            About
          </a>
          <a href="/how-it-works" className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
            How It Works
          </a>
          <a href="/help" className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
            Help
          </a>
          <a href="/contact" className="py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium">
            Contact
          </a>
          <div className="flex gap-2 pt-2 border-t border-border mt-2">
            <Button variant="outline" className="flex-1" onClick={onAuthClick}>
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
