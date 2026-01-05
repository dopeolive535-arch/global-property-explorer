import { PROPERTY_CATEGORIES, PropertyCategory } from '@/types/property';

interface CategoryGridProps {
  onCategorySelect: (category: PropertyCategory) => void;
}

const CategoryGrid = ({ onCategorySelect }: CategoryGridProps) => {
  // Show first 12 categories
  const displayCategories = PROPERTY_CATEGORIES.slice(0, 12);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From cozy studios to luxury villas, find the perfect property type for your needs
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {displayCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 text-left animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View all {PROPERTY_CATEGORIES.length} categories
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
