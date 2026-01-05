import { useState } from 'react';
import { Property } from '@/types/property';
import { Button } from '@/components/ui/button';
import { 
  X, Heart, Share2, MapPin, Bed, Bath, Maximize, Calendar,
  Check, ChevronLeft, ChevronRight, Star, Shield, Wifi, Car
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailModal = ({ property, isOpen, onClose }: PropertyDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!property || !isOpen) return null;

  const formatPrice = () => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: property.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(property.price);

    const unitLabel = {
      night: '/night',
      month: '/month',
      year: '/year',
      total: '',
    }[property.priceUnit];

    return `${formatted}${unitLabel}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const amenityIcons: Record<string, React.ReactNode> = {
    'WiFi': <Wifi className="w-4 h-4" />,
    'Parking': <Car className="w-4 h-4" />,
    'Security': <Shield className="w-4 h-4" />,
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 animate-fade-up"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-8 lg:inset-16 bg-background rounded-2xl z-50 overflow-hidden shadow-large animate-scale-in">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Gallery */}
          <div className="relative lg:w-3/5 h-64 sm:h-80 lg:h-full bg-muted">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            />

            {/* Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium">
              {currentImageIndex + 1} / {property.images.length}
            </div>

            {/* Top Actions */}
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <Heart className={cn("w-5 h-5", isLiked && "fill-destructive text-destructive")} />
                </button>
                <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {property.images.length > 1 && (
              <div className="absolute bottom-14 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
                {property.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all",
                      index === currentImageIndex ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Panel */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {property.verified && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}
                {property.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    <Star className="w-3.5 h-3.5" />
                    Featured
                  </span>
                )}
                <span className={cn(
                  "px-3 py-1 text-sm font-medium rounded-full",
                  property.availability === 'available' ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  {property.availability === 'available' ? 'Available Now' : 'Coming Soon'}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {property.title}
              </h2>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span>
                  {property.location.neighborhood}, {property.location.town}, {property.location.district}, {property.location.country}
                </span>
              </div>

              {/* Price */}
              <div className="bg-muted rounded-xl p-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {formatPrice()}
                  </span>
                  <span className="text-muted-foreground">
                    {property.listingType === 'sale' ? 'asking price' : 'rental price'}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {property.bedrooms > 0 && (
                  <div className="text-center p-4 bg-card rounded-xl border border-border">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-bold text-foreground">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                )}
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-bold text-foreground">{property.bathrooms}</p>
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <Maximize className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-bold text-foreground">{property.size}</p>
                  <p className="text-sm text-muted-foreground">{property.sizeUnit}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">About this property</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm"
                    >
                      {amenityIcons[amenity] || <Check className="w-4 h-4 text-primary" />}
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground">Furnishing</p>
                  <p className="font-semibold capitalize">{property.furnished}</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-semibold capitalize">{property.category.replace('-', ' ')}</p>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-6 border-t border-border bg-background">
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Visit
                </Button>
                <Button className="flex-1" size="lg">
                  Contact via AI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[60] bg-foreground flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="max-w-full max-h-full object-contain"
          />
          {property.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-primary-foreground" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-primary-foreground" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PropertyDetailModal;
