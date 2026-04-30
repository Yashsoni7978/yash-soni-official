/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-jodhpur/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas in page.jsx.
const CITY       = "Jodhpur";
const SLUG       = "anchor-in-jodhpur";
const DOMAIN     = "yashsoni.in";
const FULL_URL   = `https://${DOMAIN}/${SLUG}`;
const LAT        = "26.2389";
const LNG        = "73.0243";
const OG_IMAGE   = `https://${DOMAIN}/backgrounds/jodhpur_bg.webp`;
// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
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
    "Umaid Bhawan Palace Wedding Anchor",
    "Mehrangarh Fort Wedding Host",
    "RAAS Jodhpur Event Host",
  ],
  description: `1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
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
    postalCode:        "342001",
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
    name: "Anchoring Services in Jodhpur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Royal Wedding Anchor Jodhpur", description: "Full bilingual wedding anchoring at Umaid Bhawan Palace and Mehrangarh Fort" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Emcee Jodhpur", description: "Fort courtyard Sangeet hosting at Mehrangarh and RAAS Jodhpur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Anchor Jodhpur", description: "Corporate galas, dealer meets and conferences at Ajit Bhawan and Vivanta Jodhpur" } },
    ],
  },
};
const personSchema = {
  "@context":    "https://schema.org",
  "@type":       "Person",
  "@id":         `https://${DOMAIN}/#person`,
  name:          "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash"],
  jobTitle:      "Professional Event Anchor & Emcee",
  description:   `Yash Soni is a professional event anchor with 8+ years of experience in royal palace weddings and corporate events. He has hosted 1,100+ events including luxury destination weddings at Umaid Bhawan Palace and Mehrangarh Fort in Jodhpur.`,
  url:           `https://${DOMAIN}`,
  image:         `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone:     "+917737877978",
  knows:         CITY,
  knowsAbout: [
    "Wedding Anchoring",
    "Royal Palace Wedding Hosting",
    "Fort Courtyard Sangeet Hosting",
    "Rajputana Family Protocol",
    "Bilingual Hindi English Hosting",
    "NRI Wedding Management",
    "Jodhpur Destination Weddings",
    "Umaid Bhawan Palace Events",
    "Mehrangarh Fort Events",
  ],
  award: "4.9★ Rated — 200+ Five-Star Reviews",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan",  item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`,   item: FULL_URL },
  ],
};
// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Jodhpur | Royal Palace & Destination Wedding Host — Anchor Yash Soni`,
  description:
    `Looking for the best anchor in Jodhpur? Anchor Yash Soni — 4.9★ rated, 1,100+ events, 8+ years. Expert for royal weddings at Umaid Bhawan Palace, Mehrangarh Fort & RAAS Jodhpur. Bilingual, unscripted, NRI & Rajputana protocol experienced.`,
  keywords: [
    // Core identity
    "anchor in jodhpur",
    "best anchor in jodhpur",
    "wedding anchor jodhpur",
    "event anchor jodhpur",
    "emcee jodhpur",
    "event host jodhpur",
    // Venue-specific — high intent
    "umaid bhawan palace wedding anchor",
    "mehrangarh fort wedding host",
    "raas jodhpur wedding emcee",
    "ajit bhawan anchor",
    "bal samand lake palace anchor",
    "vivanta jodhpur wedding host",
    // Event type
    "destination wedding anchor jodhpur",
    "nri wedding anchor jodhpur",
    "royal wedding anchor jodhpur",
    "sangeet host jodhpur",
    "sangeet emcee jodhpur fort",
    "haldi anchor jodhpur",
    "corporate anchor jodhpur",
    "bilingual anchor jodhpur",
    // Semantic/long-tail
    "anchor for destination wedding jodhpur",
    "best emcee jodhpur",
    "jodhpur palace wedding anchor",
    "jodhpur destination wedding host",
    "royal event host jodhpur",
    "anchor yash soni jodhpur",
    "professional anchor jodhpur rajasthan",
    "fort wedding anchor jodhpur",
    "blue city wedding anchor",
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
    title:       `Best Anchor in Jodhpur | Royal Palace & Destination Wedding Host — Anchor Yash Soni`,
    description: `4.9★ rated. 1,100+ events. Jodhpur's most trusted anchor for Umaid Bhawan Palace weddings, Mehrangarh Fort Sangeets & NRI destination events. Bilingual, unscripted, royal protocol aware.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Best Anchor in Jodhpur — Anchor Yash Soni at Mehrangarh Fort`,
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Jodhpur | Anchor Yash Soni — 4.9★`,
    description: `Umaid Bhawan Palace. Mehrangarh Fort. RAAS Jodhpur. The Blue City's most trusted destination wedding anchor — 1,100+ events, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },
  other: {
    "geo.region":    "IN-RJ",
    "geo.placename": `${CITY}, Rajasthan, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    "DC.subject":    `Event Anchor, Wedding Anchor, Emcee, ${CITY}, Rajasthan, India`,
    "rating":        "4.9",
    "reviewCount":   "200",
  },
};
// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function JodhpurLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}