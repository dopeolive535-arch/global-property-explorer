import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About PlaceTo Africa
              </h1>
              <p className="text-xl text-muted-foreground">
                Your trusted partner in finding the perfect place across Africa
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <section className="mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  PlaceTo Africa is dedicated to simplifying the process of finding and securing properties across the African continent. We believe that everyone deserves access to quality housing, whether you're looking for a cozy studio in Kampala, a luxury villa in Nairobi, or a safari lodge in the Serengeti.
                </p>
                <p className="text-muted-foreground">
                  Our platform connects property seekers with verified listings, making it easier than ever to find your perfect place in Africa.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <MapPin className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Pan-African Coverage</h3>
                    <p className="text-muted-foreground text-sm">
                      Properties across Uganda, Kenya, Tanzania, Rwanda, and expanding to more African countries
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <Users className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">26+ Property Categories</h3>
                    <p className="text-muted-foreground text-sm">
                      From apartments and villas to safari lodges and co-working spaces
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <Shield className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
                    <p className="text-muted-foreground text-sm">
                      All featured properties are verified for authenticity and accuracy
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <Award className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">AI-Powered Search</h3>
                    <p className="text-muted-foreground text-sm">
                      Smart search that understands your needs, even with inaccurate queries
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2025, PlaceTo Africa emerged from a simple observation: finding quality housing across Africa was unnecessarily complex. Property seekers faced fragmented listings, unverified information, and limited options for cross-border searches.
                </p>
                <p className="text-muted-foreground mb-4">
                  We set out to change this by creating a unified platform that brings together properties from across the continent, verifies their authenticity, and makes them easily searchable through innovative technology.
                </p>
                <p className="text-muted-foreground">
                  Today, PlaceTo Africa serves thousands of property seekers, connecting them with their ideal spaces across multiple African countries.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Values</h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                    <p className="text-muted-foreground text-sm">
                      We provide accurate, verified information about every property on our platform
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                    <p className="text-muted-foreground text-sm">
                      Everyone deserves access to quality housing options, regardless of location or budget
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                    <p className="text-muted-foreground text-sm">
                      We leverage technology to make property searching simple, fast, and effective
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Community</h3>
                    <p className="text-muted-foreground text-sm">
                      We build connections between property seekers and providers across Africa
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
