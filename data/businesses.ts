export interface Business {
  slug: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  instagram: string;
  website: string;
  reviewUrl: string;
}

export const businesses: Business[] = [
  {
    slug: "hotel-well-suites-koramangala",
    name: "Hotel Well Suites Koramangala",
    address: "KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560095",
    phone: "",
    whatsapp: "",
    mapsUrl: "https://maps.app.goo.gl/kvaeDqTMn9DWn6TL9",
    instagram: "",
    website: "",
    reviewUrl: "",
  },
  {
    slug: "hotel-well-suites-electronic-city",
    name: "Hotel Well Suites Electronic City",
    address:
      "#21, Konappana Agrahara, Begur Hobli, Beside Bosch Showroom, Electronic City, Bengaluru - 560100",
    phone: "6361109761",
    whatsapp: "6361109761",
    mapsUrl: "https://maps.app.goo.gl/rNpruqgbfAnTQVg97",
    instagram: "https://www.instagram.com/well_suites",
    website: "",
    reviewUrl: "",
  },
  {
    slug: "hotel-well-suites-madivala",
    name: "Hotel Well Suites Madivala",
    address:
      "45, 1st Main Rd, Zuzuvadi, Maruti Nagar, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560068",
    phone: "7338579282",
    whatsapp: "7338579282",
    mapsUrl: "https://maps.app.goo.gl/nHasT5hNQoF4M3y97",
    instagram: "https://www.instagram.com/hotel_well_suites",
    website: "",
    reviewUrl: "",
  },
  {
    slug: "seven-sky-inn",
    name: "Seven Sky Inn",
    address:
      "Maruthi Nagar Main Rd, near Palooda Cafe, Zuzuvadi, Madiwala, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560068",
    phone: "07349473423",
    whatsapp: "07349473423",
    mapsUrl: "https://maps.app.goo.gl/bkjZPGqVExKbJSPe7",
    instagram: "https://www.instagram.com/seven_sky_in",
    website: "",
    reviewUrl: "",
  },
];

/**
 * Retrieves a business by its unique URL slug.
 */
export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Returns all business slugs for static generation.
 */
export function getAllBusinessSlugs(): string[] {
  return businesses.map((b) => b.slug);
}
