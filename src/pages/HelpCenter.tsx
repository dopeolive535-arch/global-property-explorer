import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'Search',
      question: 'How do I search for properties?',
      answer: 'Use the search bar on the homepage to enter a location, property type, or any keywords. Our intelligent fuzzy search understands even misspelled queries and will show you relevant results. You can also browse by category or explore specific locations.',
    },
    {
      category: 'Search',
      question: 'What if I don\'t find properties in my area?',
      answer: 'PlaceTo Africa is continuously expanding our coverage across Africa. If your specific area isn\'t available yet, try searching nearby towns or cities. You can also contact us to request coverage in your area.',
    },
    {
      category: 'Search',
      question: 'Can I save my favorite properties?',
      answer: 'Yes, you can click the heart icon on any property card to add it to your favorites. This makes it easy to compare properties and return to listings you\'re interested in.',
    },
    {
      category: 'Listings',
      question: 'Are all properties verified?',
      answer: 'Properties marked with a "Verified" badge have been confirmed by our team for authenticity and accuracy. We verify property details, photos, and owner information. Featured properties always include verification.',
    },
    {
      category: 'Listings',
      question: 'What does "furnished" mean?',
      answer: 'Furnished properties come with essential furniture like beds, sofas, and dining tables. Semi-furnished includes basic fixtures but may need additional furniture. Unfurnished properties are empty and require you to bring all furniture.',
    },
    {
      category: 'Listings',
      question: 'What property categories are available?',
      answer: 'We offer 26+ categories including apartments, villas, studios, self-contained units, bedsitters, houses, safari lodges, offices, co-working spaces, shops, warehouses, and more. Each category is tailored to specific needs.',
    },
    {
      category: 'Booking',
      question: 'How do I schedule a property viewing?',
      answer: 'Click "Schedule Visit" on any property listing. Select your preferred date and time, provide your contact details, and we\'ll coordinate with the property owner. You\'ll receive confirmation via email with all details.',
    },
    {
      category: 'Booking',
      question: 'Is there a fee to use PlaceTo Africa?',
      answer: 'Browsing properties and scheduling viewings on PlaceTo Africa is completely free. Some property owners may charge service fees, which will be clearly indicated in the listing details.',
    },
    {
      category: 'Booking',
      question: 'Can I book multiple property viewings?',
      answer: 'Absolutely! We encourage viewing multiple properties to find the perfect fit. You can schedule several viewings on the same day if they\'re in the same area.',
    },
    {
      category: 'Pricing',
      question: 'Why are prices shown in USD?',
      answer: 'We display prices in USD for consistency across multiple African countries. However, prices can be converted to local currencies including UGX, KES, TZS, and others based on current exchange rates.',
    },
    {
      category: 'Pricing',
      question: 'What does the price include?',
      answer: 'The listed price typically covers the rent or purchase cost. Additional costs like utilities, security deposits, service charges, and agent fees are usually specified in the property description or discussed during viewing.',
    },
    {
      category: 'Pricing',
      question: 'Can I negotiate the price?',
      answer: 'Price negotiation depends on the property owner\'s policies. During your viewing or when contacting the owner, you can discuss pricing. Some owners, especially for long-term rentals, may be open to negotiation.',
    },
    {
      category: 'AI Assistant',
      question: 'How does the AI assistant work?',
      answer: 'Our AI assistant is available 24/7 via the chat button in the bottom right corner. It can answer questions about properties, explain categories, provide neighborhood information, and guide you through the rental process.',
    },
    {
      category: 'AI Assistant',
      question: 'What can I ask the AI assistant?',
      answer: 'You can ask about property availability, pricing, location details, differences between property types, the booking process, amenities, and much more. The assistant learns from thousands of property listings to provide accurate answers.',
    },
    {
      category: 'Location',
      question: 'Which countries do you cover?',
      answer: 'Currently, PlaceTo Africa covers Uganda, Kenya, Tanzania, and Rwanda, with properties in major cities and tourist destinations. We\'re actively expanding to more African countries.',
    },
    {
      category: 'Location',
      question: 'Do you have rural or countryside properties?',
      answer: 'Yes! We list properties in urban areas, suburbs, and rural locations including farm stays, village houses, and countryside retreats. Use our location filter to explore different areas.',
    },
    {
      category: 'Account',
      question: 'Do I need an account to search properties?',
      answer: 'No, you can browse and search all properties without an account. However, creating an account (coming soon) will allow you to save favorites, track viewing appointments, and receive personalized recommendations.',
    },
    {
      category: 'Account',
      question: 'How do I contact property owners?',
      answer: 'Each property listing includes a "Contact via AI" button that connects you with the owner through our messaging system. This ensures your privacy while facilitating communication.',
    },
  ];

  const categories = ['all', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = activeCategory === 'all'
    ? faqs
    : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Help Center
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to commonly asked questions about PlaceTo Africa
              </p>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-soft"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="text-xs text-primary font-semibold mb-1 block">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ml-4',
                        openIndex === index && 'rotate-180'
                      )}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary/10 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our AI assistant is available 24/7 to help
              </p>
              <button
                onClick={() => {
                  const chatButton = document.querySelector('[class*="bottom-6 right-6"]');
                  if (chatButton instanceof HTMLElement) {
                    chatButton.click();
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Chat with AI Assistant
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;
