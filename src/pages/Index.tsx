import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import PropertyGrid from '@/components/property/PropertyGrid';
import PropertyDetailModal from '@/components/property/PropertyDetailModal';
import LocationsShowcase from '@/components/home/LocationsShowcase';
import FeaturesSection from '@/components/home/FeaturesSection';
import AISupportChat from '@/components/chat/AISupportChat';
import { Property, PropertyCategory } from '@/types/property';
import { mockProperties, getFeaturedProperties, fuzzySearchProperties } from '@/data/mockProperties';

const Index = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedProperties, setDisplayedProperties] = useState<Property[]>(mockProperties);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProperty(null), 300);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = fuzzySearchProperties(query);
      setDisplayedProperties(results.length > 0 ? results : mockProperties);
    } else {
      setDisplayedProperties(mockProperties);
    }
  };

  const handleCategorySelect = (category: PropertyCategory) => {
    const filtered = mockProperties.filter(p => p.category === category);
    setDisplayedProperties(filtered.length > 0 ? filtered : mockProperties);
    setSearchQuery(category.replace('-', ' '));
  };

  const handleLocationSelect = (location: string) => {
    handleSearch(location);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        onSearchClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Category Grid */}
      <CategoryGrid onCategorySelect={handleCategorySelect} />

      {/* Featured Properties */}
      <div id="search-section">
        <PropertyGrid
          properties={getFeaturedProperties()}
          title="Featured Properties"
          subtitle="Handpicked properties with exceptional quality and value"
          onPropertyClick={handlePropertyClick}
        />
      </div>

      {/* All Properties / Search Results */}
      <PropertyGrid
        properties={displayedProperties}
        title={searchQuery ? `Results for "${searchQuery}"` : "Explore All Properties"}
        subtitle={searchQuery ? `Found ${displayedProperties.length} properties matching your search` : "Browse our complete collection of properties across Africa"}
        onPropertyClick={handlePropertyClick}
      />

      {/* Locations Showcase */}
      <LocationsShowcase onLocationSelect={handleLocationSelect} />

      {/* Footer */}
      <Footer />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* AI Support Chat */}
      <AISupportChat />
    </div>
  );
};

export default Index;
