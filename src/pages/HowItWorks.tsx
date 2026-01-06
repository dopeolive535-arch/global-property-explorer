import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, MapPin, Calendar, MessageCircle, CheckCircle, Key } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search for Your Place',
      description: 'Use our intelligent search to find properties across Africa. Search by location, category, price range, or any combination. Our fuzzy search understands even inaccurate queries.',
      tips: [
        'Try broad searches like "apartment Kampala" or specific ones like "2 bedroom furnished Nakasero"',
        'Use filters to narrow down by price, size, or amenities',
        'Browse by category to explore different property types',
      ],
    },
    {
      icon: MapPin,
      title: 'Explore Listings',
      description: 'Browse detailed property listings with verified information, multiple photos, and comprehensive amenities lists. Each property shows exact location details and pricing.',
      tips: [
        'Look for the "Verified" badge on listings',
        'Check multiple photos to get a complete view',
        'Read the full description for important details',
      ],
    },
    {
      icon: Calendar,
      title: 'Schedule a Visit',
      description: 'Found something you like? Schedule a property viewing directly through our platform. Select your preferred date and time, and we\'ll coordinate with the property owner.',
      tips: [
        'Book visits during daylight hours for better visibility',
        'Schedule multiple viewings on the same day if possible',
        'Prepare questions about utilities, neighborhood, and terms',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Get AI Assistance',
      description: 'Use our AI assistant anytime for instant answers about properties, pricing, locations, or the rental process. Get personalized recommendations based on your needs.',
      tips: [
        'Ask about neighborhood safety and amenities',
        'Compare multiple properties side by side',
        'Get guidance on rental agreements and processes',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Make Your Decision',
      description: 'Take your time reviewing options, comparing prices, and considering locations. Our platform keeps track of your favorite properties for easy reference.',
      tips: [
        'Create a checklist of must-have features',
        'Consider commute times to work or school',
        'Factor in utility costs and security deposits',
      ],
    },
    {
      icon: Key,
      title: 'Secure Your Place',
      description: 'Once you\'ve found your perfect place, contact the property owner to finalize details, sign agreements, and move in. We provide guidance throughout the process.',
      tips: [
        'Read the rental agreement carefully',
        'Document the property condition at move-in',
        'Keep copies of all payment receipts',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                How PlaceTo Africa Works
              </h1>
              <p className="text-xl text-muted-foreground">
                Finding your perfect place across Africa is simple with our step-by-step process
              </p>
            </div>

            <div className="space-y-12 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
                  )}
                  <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center relative z-10">
                          <step.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <div className="bg-muted/30 rounded-xl p-4">
                          <h3 className="font-semibold text-sm mb-2 text-foreground">Pro Tips:</h3>
                          <ul className="space-y-2">
                            {step.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-primary flex-shrink-0">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Ready to Find Your Place?
              </h2>
              <p className="text-muted-foreground mb-6">
                Start your search now and discover thousands of properties across Africa
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Searching
                <Search className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
