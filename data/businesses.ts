export interface Business {
  slug: string;
  name: string;
  branch?: string;
  city?: string;
  logo?: string;
  coverImage?: string;
  logoBg?: string;
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
    name: "Hotel Well Suites",
    branch: "Koramangala",
    city: "Bengaluru, Karnataka",
    logo: "/logos/hotel-well-suites.png",
    coverImage: "/images/hotel-well-suites-koramangala-cover.jpg",
    logoBg: "bg-white",
    address: "KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560095",
    phone: "9187610916",
    whatsapp: "9187610916",
    mapsUrl: "https://maps.app.goo.gl/kvaeDqTMn9DWn6TL9",
    instagram: "",
    website: "",
    reviewUrl: "https://maps.app.goo.gl/kvaeDqTMn9DWn6TL9",
  },
  {
    slug: "hotel-well-suites-electronic-city",
    name: "Hotel Well Suites",
    branch: "Electronic City",
    city: "Bengaluru, Karnataka",
    logo: "/logos/hotel-well-suites.png",
    coverImage: "/images/hotel-well-suites-electronic-city-cover.png",
    logoBg: "bg-white",
    address:
      "#21, Konappana Agrahara, Begur Hobli, Beside Bosch Showroom, Electronic City, Bengaluru - 560100",
    phone: "6361109761",
    whatsapp: "6361109761",
    mapsUrl: "https://maps.app.goo.gl/rNpruqgbfAnTQVg97",
    instagram: "https://www.instagram.com/well_suites",
    website: "https://hotelwellsuites.com",
    reviewUrl: "https://maps.app.goo.gl/rNpruqgbfAnTQVg97",
  },
  {
    slug: "hotel-well-suites-madivala",
    name: "Hotel Well Suites",
    branch: "Madivala",
    city: "Bengaluru, Karnataka",
    logo: "/logos/hotel-well-suites.png",
    coverImage: "/images/hotel-well-suites-madivala-cover.png",
    logoBg: "bg-white",
    address:
      "45, 1st Main Rd, Zuzuvadi, Maruti Nagar, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560068",
    phone: "7338579282",
    whatsapp: "7338579282",
    mapsUrl: "https://maps.app.goo.gl/nHasT5hNQoF4M3y97",
    instagram: "https://www.instagram.com/hotel_well_suites",
    website: "",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJybyh63AVrjsRjKrsFRd6jfg&utm",
  },
  {
    slug: "seven-sky-inn",
    name: "Seven Sky Inn",
    branch: "Madiwala",
    city: "Bengaluru, Karnataka",
    logo: "/logos/seven-sky-inn.png",
    coverImage: "/images/seven-sky-cover.jpg",
    logoBg: "bg-black",
    address:
      "Maruthi Nagar Main Rd, near Palooda Cafe, Zuzuvadi, Madiwala, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560068",
    phone: "07349473423",
    whatsapp: "8197422688",
    mapsUrl: "https://maps.app.goo.gl/bkjZPGqVExKbJSPe7",
    instagram: "https://www.instagram.com/seven_sky_in",
    website: "",
    reviewUrl: "https://g.page/r/CemtN639KSJzEBM/review",
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
