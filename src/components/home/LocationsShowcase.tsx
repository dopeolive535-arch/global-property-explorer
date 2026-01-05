import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Kampala', country: 'Uganda', properties: 2450, image: 'https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=400' },
  { name: 'Nairobi', country: 'Kenya', properties: 3200, image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400' },
  { name: 'Dar es Salaam', country: 'Tanzania', properties: 1800, image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400' },
  { name: 'Kigali', country: 'Rwanda', properties: 950, image: 'https://images.unsplash.com/photo-1580063558957-05e9d4f36f9a?w=400' },
  { name: 'Zanzibar', country: 'Tanzania', properties: 650, image: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=400' },
  { name: 'Entebbe', country: 'Uganda', properties: 420, image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400' },
];

interface LocationsShowcaseProps {
  onLocationSelect: (location: string) => void;
}

const LocationsShowcase = ({ onLocationSelect }: LocationsShowcaseProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Top Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover properties across East Africa's most vibrant cities and hidden gems
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {locations.map((location, index) => (
            <button
              key={location.name}
              onClick={() => onLocationSelect(location.name)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <h3 className="font-display font-semibold text-lg text-primary-foreground">
                  {location.name}
                </h3>
                <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {location.country}
                </p>
                <p className="text-xs text-primary-foreground/60 mt-1">
                  {location.properties.toLocaleString()} properties
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsShowcase;
