import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Calendar, Home } from 'lucide-react';
import heroImage from '@/assets/hero-cityscape.jpg';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'rent' | 'buy'>('rent');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="African cityscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Discover 10,000+ properties across Africa
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Find Your Perfect
            <br />
            <span className="text-primary">Place in Africa</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            From urban apartments in Kampala to safari lodges in the Serengeti.
            Your perfect place awaits across Uganda, East Africa, and beyond.
          </p>

          {/* Search Box */}
          <div className="bg-background/95 backdrop-blur-md rounded-2xl p-4 shadow-large animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedTab('rent')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedTab === 'rent'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setSelectedTab('buy')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedTab === 'buy'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Buy
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <input
                    type="text"
                    placeholder="City, region, or country"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-colors">
                <Home className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="text-xs text-muted-foreground">Property Type</p>
                  <p className="text-sm font-medium text-foreground">All Categories</p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-colors">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-medium text-foreground">
                    {selectedTab === 'rent' ? 'Any duration' : 'Purchase'}
                  </p>
                </div>
              </div>

              {/* Search Button */}
              <Button 
                variant="hero" 
                className="h-auto"
                onClick={handleSearch}
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-sm text-primary-foreground/60">Popular:</span>
            {['Kampala Apartments', 'Nairobi Offices', 'Zanzibar Villas', 'Safari Lodges'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1.5 text-sm rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
