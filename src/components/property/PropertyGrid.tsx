import { Property } from '@/types/property';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
  onPropertyClick: (property: Property) => void;
}

const PropertyGrid = ({ properties, title, subtitle, onPropertyClick }: PropertyGridProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PropertyCard
                property={property}
                onClick={() => onPropertyClick(property)}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {properties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No properties found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;
