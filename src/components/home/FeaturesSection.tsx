import { Globe, Shield, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Browse properties across Uganda, East Africa, and beyond from anywhere in the world.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Search',
    description: 'Get personalized recommendations and instant answers from our intelligent assistant.',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'Every featured property is verified for authenticity and accurate information.',
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    description: 'From nightly stays to yearly leases, find options that match your needs.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
