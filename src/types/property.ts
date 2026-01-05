export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  priceUnit: 'night' | 'month' | 'year' | 'total';
  listingType: 'rent-short' | 'rent-mid' | 'rent-long' | 'sale';
  category: PropertyCategory;
  location: PropertyLocation;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  size: number;
  sizeUnit: 'sqft' | 'sqm';
  furnished: 'furnished' | 'semi-furnished' | 'unfurnished';
  amenities: string[];
  availability: 'available' | 'pending' | 'rented' | 'sold';
  featured?: boolean;
  verified?: boolean;
}

export interface PropertyLocation {
  country: string;
  region: string;
  district: string;
  town: string;
  neighborhood: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export type PropertyCategory =
  | 'self-contained'
  | 'bedsitter'
  | 'studio'
  | 'apartment'
  | 'condominium'
  | 'house'
  | 'bungalow'
  | 'townhouse'
  | 'boys-quarters'
  | 'hostel'
  | 'shared-room'
  | 'student-housing'
  | 'furnished-apartment'
  | 'guest-house'
  | 'lodge'
  | 'safari-lodge'
  | 'eco-lodge'
  | 'villa'
  | 'cabin'
  | 'tiny-house'
  | 'tree-house'
  | 'farm-stay'
  | 'village-house'
  | 'staff-quarters'
  | 'office'
  | 'co-working'
  | 'shop'
  | 'stall'
  | 'warehouse'
  | 'event-hall'
  | 'mixed-use';

export interface CategoryInfo {
  id: PropertyCategory;
  name: string;
  icon: string;
  description: string;
}

export const PROPERTY_CATEGORIES: CategoryInfo[] = [
  { id: 'apartment', name: 'Apartments', icon: '🏢', description: 'Modern urban living spaces' },
  { id: 'house', name: 'Houses', icon: '🏠', description: 'Standalone family homes' },
  { id: 'villa', name: 'Villas', icon: '🏡', description: 'Luxury residential estates' },
  { id: 'studio', name: 'Studios', icon: '🛋️', description: 'Compact living spaces' },
  { id: 'self-contained', name: 'Self-Contained', icon: '🚿', description: 'Independent units with amenities' },
  { id: 'bedsitter', name: 'Bedsitters', icon: '🛏️', description: 'Single room with kitchenette' },
  { id: 'furnished-apartment', name: 'Furnished', icon: '🪑', description: 'Move-in ready homes' },
  { id: 'condominium', name: 'Condos', icon: '🏙️', description: 'High-rise luxury units' },
  { id: 'bungalow', name: 'Bungalows', icon: '🏘️', description: 'Single-story homes' },
  { id: 'townhouse', name: 'Townhouses', icon: '🏚️', description: 'Multi-level attached homes' },
  { id: 'boys-quarters', name: 'Boys Quarters', icon: '🏗️', description: 'Auxiliary housing units' },
  { id: 'hostel', name: 'Hostels', icon: '🛎️', description: 'Shared accommodation' },
  { id: 'student-housing', name: 'Student Housing', icon: '📚', description: 'Campus-area housing' },
  { id: 'guest-house', name: 'Guest Houses', icon: '🏨', description: 'Short-term stays' },
  { id: 'lodge', name: 'Lodges', icon: '🌲', description: 'Nature retreats' },
  { id: 'safari-lodge', name: 'Safari Lodges', icon: '🦁', description: 'Wildlife experience stays' },
  { id: 'eco-lodge', name: 'Eco-Lodges', icon: '🌿', description: 'Sustainable tourism' },
  { id: 'cabin', name: 'Cabins', icon: '🏔️', description: 'Rustic getaways' },
  { id: 'tiny-house', name: 'Tiny Houses', icon: '🏕️', description: 'Minimalist living' },
  { id: 'farm-stay', name: 'Farm Stays', icon: '🌾', description: 'Agricultural experiences' },
  { id: 'office', name: 'Offices', icon: '💼', description: 'Commercial workspaces' },
  { id: 'co-working', name: 'Co-Working', icon: '👥', description: 'Shared office spaces' },
  { id: 'shop', name: 'Shops', icon: '🏪', description: 'Retail spaces' },
  { id: 'warehouse', name: 'Warehouses', icon: '🏭', description: 'Storage and industrial' },
  { id: 'event-hall', name: 'Event Halls', icon: '🎪', description: 'Venues for gatherings' },
];

export const LOCATIONS = {
  countries: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Ethiopia', 'South Africa', 'Nigeria', 'Ghana', 'Egypt', 'Morocco'],
  regions: {
    Uganda: ['Central', 'Eastern', 'Northern', 'Western'],
    Kenya: ['Nairobi', 'Coast', 'Rift Valley', 'Western'],
    Tanzania: ['Dar es Salaam', 'Arusha', 'Zanzibar', 'Mwanza'],
  },
  districts: {
    Central: ['Kampala', 'Wakiso', 'Mukono', 'Entebbe'],
    Eastern: ['Jinja', 'Mbale', 'Soroti', 'Tororo'],
    Nairobi: ['Westlands', 'Karen', 'Kilimani', 'Lavington'],
  },
};
