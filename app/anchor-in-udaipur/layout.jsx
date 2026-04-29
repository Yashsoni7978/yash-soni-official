/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-udaipur/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas in page.jsx.
const CITY        = "Udaipur";
const SLUG        = "anchor-in-udaipur";
const DOMAIN      = "yashsoni.in";
const FULL_URL    = `https://${DOMAIN}/${SLUG}`;
const LAT         = "24.5854";
const LNG         = "73.7125";
const OG_IMAGE    = `https://${DOMAIN}/backgrounds/udaipur_bg.webp`;
// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
// LocalBusiness (ProfessionalService)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "ProfessionalService",
  "@id":      `${FULL_URL}/#business`,
  name:        `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    `Anchor in ${CITY}`,
    `Wedding Anchor ${CITY}`,
    `Emcee ${CITY}`,
    `Destination Wedding Anchor ${CITY}`,
    `Sangeet Host ${CITY}`,
    `Event Host ${CITY}`,
    "Taj Lake Palace Wedding Anchor",
    "Oberoi Udaivilas Anchor",
    "Jagmandir Island Wedding Host",
  ],
  description: `Anchor Yash Soni is Udaipur's most trusted destination wedding anchor — 8+ years on stage, 1,100+ events hosted, 4.9★ rated. Specialist for luxury lake palace weddings at Taj Lake Palace, Oberoi Udaivilas, and Jagmandir Island. Bilingual Hindi/English, fully unscripted, and experienced with NRI families from the UK, USA, and Canada.`,
  url:         FULL_URL,
  telephone:   "+917737877978",
  priceRange:  "₹₹₹₹",
  image:        OG_IMAGE,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
  ],
  address: {
    "@type":           "PostalAddress",
    addressLocality:   CITY,
    addressRegion:     "Rajasthan",
    addressCountry:    "IN",
    postalCode:        "313001",
  },
  geo: {
    "@type":    "GeoCoordinates",
    latitude:   LAT,
    longitude:  LNG,
  },
  openingHoursSpecification: {
    "@type":     "OpeningHoursSpecification",
    dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens:       "09:00",
    closes:      "21:00",
  },
  areaServed: [
    { "@type": "City",               name: CITY },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country",            name: "India" },
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.9",
    reviewCount:   "200",
    bestRating:    "5",
    worstRating:   "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Udaipur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Anchor Udaipur", description: "Full-ceremony bilingual wedding anchoring at Udaipur palace venues" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Emcee Udaipur", description: "High-energy Sangeet hosting at Jagmandir Island and Oberoi Udaivilas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Anchor Udaipur", description: "Corporate galas, product launches and dealer meets in Udaipur" } },
    ],
  },
};
// Person schema for E-E-A-T
const personSchema = {
  "@context":        "https://schema.org",
  "@type":           "Person",
  "@id":             `https://${DOMAIN}/#person`,
  name:              "Yash Soni",
  alternateName:     ["Anchor Yash Soni", "Anchor Yash"],
  jobTitle:          "Professional Event Anchor & Emcee",
  description:       `Yash Soni is a professional event anchor with 8+ years of experience in wedding and corporate events. He has hosted 1,100+ events across Rajasthan and India, including luxury destination weddings at Taj Lake Palace and Oberoi Udaivilas in Udaipur.`,
  url:               `https://${DOMAIN}`,
  image:             `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone:         "+917737877978",
  knows:             CITY,
  knowsAbout: [
    "Wedding Anchoring",
    "Destination Wedding Hosting",
    "Sangeet Emceeing",
    "Corporate Event Hosting",
    "Bilingual Hindi English Hosting",
    "NRI Wedding Management",
    "Lake Palace Event Hosting",
    "Rajasthan Destination Weddings",
  ],
  award: "4.9★ Rated — 200+ Five-Star Reviews",
  alumniOf: { "@type": "Organization", name: "Rajasthan Event Industry" },
};
// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`,  item: FULL_URL },
  ],
};
// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Udaipur | Wedding & Destination Event Host — Anchor Yash Soni`,
  description:
    `Looking for the best anchor in Udaipur? Anchor Yash Soni — 4.9★ rated, 1,100+ events, 8+ years. Expert for destination weddings at Taj Lake Palace, Oberoi Udaivilas & Jagmandir Island. Bilingual Hindi/English, unscripted, NRI-experienced.`,
  keywords: [
    // Core identity — highest volume
    "anchor in udaipur",
    "best anchor in udaipur",
    "wedding anchor udaipur",
    "event anchor udaipur",
    "emcee udaipur",
    "event host udaipur",
    // Venue-specific — high intent
    "anchor taj lake palace udaipur",
    "wedding anchor oberoi udaivilas",
    "jagmandir island wedding host",
    "leela udaipur anchor",
    "raffles udaipur wedding emcee",
    "fateh garh wedding anchor",
    // Event type
    "destination wedding anchor udaipur",
    "nri wedding anchor udaipur",
    "sangeet host udaipur",
    "haldi anchor udaipur",
    "corporate anchor udaipur",
    "bilingual anchor udaipur",
    // Semantic/long-tail
    "anchor for destination wedding udaipur",
    "best emcee udaipur wedding",
    "udaipur lake palace wedding anchor",
    "udaipur destination wedding host",
    "anchor yash soni udaipur",
    "professional anchor udaipur rajasthan",
    // Branded
    "anchor yash",
    "anchor yash soni",
    "yash soni anchor",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:          FULL_URL,
    siteName:    "Anchor Yash Soni",
    title:       `Best Anchor in Udaipur | Destination Wedding & Event Host — Anchor Yash Soni`,
    description: `4.9★ rated. 1,100+ events. Udaipur's most trusted anchor for lake palace weddings, Sangeets at Jagmandir Island & NRI destination events. Unscripted, bilingual, premium.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Best Anchor in Udaipur — Anchor Yash Soni at Lake Pichola`,
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Udaipur | Anchor Yash Soni — 4.9★`,
    description: `Taj Lake Palace. Oberoi Udaivilas. Jagmandir Island. Udaipur's most trusted destination wedding anchor — 1,100+ events, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },
  // Geo signals — Google uses these for local SEO
  other: {
    "geo.region":    "IN-RJ",
    "geo.placename": `${CITY}, Rajasthan, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    // Classification
    "DC.subject":    `Event Anchor, Wedding Anchor, Emcee, ${CITY}, Rajasthan, India`,
    // Rating signals
    "rating":        "4.9",
    "reviewCount":   "200",
  },
};
// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function UdaipurLayout({ children }) {
  return (
    <>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* JSON-LD: Person (E-E-A-T) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}