import { Property } from '@/types/property';
import { Heart, MapPin, Bed, Bath, Maximize, Star, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <article
      onClick={onClick}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.featured && (
            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </span>
          )}
          {property.verified && (
            <span className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Check className="w-3 h-3" />
              Verified
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        >
          <Heart
            className={cn(
              "w-5 h-5 transition-colors",
              isLiked ? "fill-destructive text-destructive" : "text-foreground"
            )}
          />
        </button>

        {/* Image Dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentImageIndex
                    ? "bg-primary-foreground w-4"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
                )}
              />
            ))}
          </div>
        )}

        {/* Listing Type Badge */}
        <div className="absolute bottom-3 right-3">
          <span className={cn(
            "px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm",
            property.listingType === 'sale' 
              ? "bg-accent/90 text-accent-foreground" 
              : "bg-background/80 text-foreground"
          )}>
            {property.listingType === 'sale' ? 'For Sale' : 
             property.listingType === 'rent-short' ? 'Short Stay' :
             property.listingType === 'rent-mid' ? 'Mid-Term' : 'Long-Term'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-sm truncate">
            {property.location.town}, {property.location.country}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" />
              {property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" />
              {property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            {property.size} {property.sizeUnit}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="font-display text-xl font-bold text-foreground">
            {formatPrice()}
          </span>
          <span className="text-xs text-muted-foreground capitalize px-2 py-1 bg-muted rounded-full">
            {property.furnished}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
