/**
 * localVenueBlocks.ts
 * ──────────────────────────────────────────────────────────────────────────────
 * Typed data structure for the hyper-local venue block pattern used across
 * service pages (wedding-anchor, sangeet-anchor) and city pages.
 *
 * PATTERN (extracted from /sangeet-anchor-jaipur and /wedding-anchor-jaipur):
 *   { area, venueType, detail, ctaHref }
 *
 * Usage example in a page component:
 *   import { JAIPUR_WEDDING_ZONES } from "@/lib/localVenueBlocks";
 *   JAIPUR_WEDDING_ZONES.map(z => <VenueCard {...z} />)
 *
 * For expansion cities (Jodhpur, Ajmer, Kota, Pushkar): insert blocks below
 * with real local venue data. Do NOT invent specific venue names.
 * ──────────────────────────────────────────────────────────────────────────────
 */

export interface LocalVenueBlock {
  /** Display name of the area / micro-locality */
  area: string;
  /** Type of event the area is known for (used as badge label) */
  venueType: string;
  /** One specific, factual detail that distinguishes this area, real detail only */
  detail: string;
  /** Optional internal CTA link (e.g., city page or anchor page) */
  ctaHref?: string;
}

// ─────────────────────────────────────────────
// JAIPUR, Wedding Zones
// Source: /app/wedding-anchor-jaipur/PageClient.jsx
// ─────────────────────────────────────────────
export const JAIPUR_WEDDING_ZONES: LocalVenueBlock[] = [
  {
    area: "Kukas and Amer Road",
    venueType: "Palace and Heritage Weddings",
    detail: "NRI families, international guests, heritage protocol, Fairmont Jaipur is the signature venue.",
    ctaHref: "/wedding-anchor-jaipur",
  },
  {
    area: "Ajmer Road and Bhankrota",
    venueType: "Farmhouse Sangeet Specialist",
    detail: "1,000 to 1,500 guests, packed dance floors until 4 AM. Jaipur's largest farmhouse event strip.",
    ctaHref: "/sangeet-anchor-jaipur",
  },
  {
    area: "Mansarovar and Vaishali Nagar",
    venueType: "Premium Banquet Weddings",
    detail: "Urban elite families, milestone celebrations, premium banquet halls.",
    ctaHref: "/wedding-anchor-jaipur",
  },
  {
    area: "Sitapura and JLN Marg",
    venueType: "5-Star Hotel Weddings",
    detail: "Fairmont, Marriott, ITC Rajputana, broadcast-quality events and destination weddings.",
    ctaHref: "/wedding-anchor-jaipur",
  },
];

// ─────────────────────────────────────────────
// UDAIPUR, Venue Data
// Source: /app/anchor-in-udaipur/PageClient.jsx (real venue data confirmed)
// ─────────────────────────────────────────────
export const UDAIPUR_VENUE_BLOCKS: LocalVenueBlock[] = [
  {
    area: "Lake Pichola",
    venueType: "Palace Wedding",
    detail: "Taj Lake Palace, island ceremony, boat entry, NRI destination weddings.",
    ctaHref: "/anchor-in-udaipur",
  },
  {
    area: "Haridas Ji Ki Magri",
    venueType: "Heritage Palace",
    detail: "Oberoi Udaivilas, 5-star luxury destination weddings with international guests.",
    ctaHref: "/anchor-in-udaipur",
  },
  {
    area: "Jagmandir Island",
    venueType: "Island Sangeet",
    detail: "High-energy Sangeet events on the island, sunset settings, 500+ guests.",
    ctaHref: "/anchor-in-udaipur",
  },
  {
    area: "Raffles Udaipur",
    venueType: "Luxury Resort Wedding",
    detail: "Private island resort weddings, intimate format, ultra-premium families.",
    ctaHref: "/anchor-in-udaipur",
  },
];

// ─────────────────────────────────────────────
// EXPANSION CITIES, Placeholder stubs
// TODO: Fill with real local venue data before publishing city pages.
// Do NOT invent venue names, insert factual details only.
// ─────────────────────────────────────────────

// TODO: JODHPUR, needs real local venue detail for Mehrangarh fort weddings,
// Umaid Bhawan Palace context, rooftop events in the Blue City old town.
export const JODHPUR_VENUE_BLOCKS: LocalVenueBlock[] = [
  // { area: "Mehrangarh Fort", venueType: "Heritage Fort Wedding", detail: "TODO: real venue detail", ctaHref: "/anchor-in-jodhpur" },
];

// TODO: AJMER, needs real local venue detail for Pushkar-adjacent destination
// weddings, dargah-area heritage hotels, Ana Sagar lakeside events.
export const AJMER_VENUE_BLOCKS: LocalVenueBlock[] = [
  // { area: "Ana Sagar Lake", venueType: "Lakeside Event", detail: "TODO: real venue detail", ctaHref: "/anchor-in-ajmer" },
];

// TODO: KOTA, needs real local venue detail for Chambal river-adjacent venues,
// Kishore Sagar lake events, heritage palace properties in Kota city.
export const KOTA_VENUE_BLOCKS: LocalVenueBlock[] = [
  // { area: "Kishore Sagar", venueType: "Lakeside Wedding", detail: "TODO: real venue detail", ctaHref: "/anchor-in-kota" },
];

// TODO: PUSHKAR, needs real local venue detail for desert camp weddings,
// Pushkar Lake ghats ceremonies, Ananta Spa Resort, Brahma temple backdrop events.
export const PUSHKAR_VENUE_BLOCKS: LocalVenueBlock[] = [
  // { area: "Pushkar Lake Ghats", venueType: "Destination Wedding", detail: "TODO: real venue detail", ctaHref: "/anchor-in-pushkar" },
];
