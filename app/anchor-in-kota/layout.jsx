/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-kota/layout.jsx
// Chambal River & Heritage Palace Wedding Anchor — Full Schema + Rich SEO Layout

const CITY     = "Kota";
const REGION   = "Hadoti, South-Eastern Rajasthan";
const SLUG     = "anchor-in-kota";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "25.1825";
const LNG      = "75.8391";
const OG_IMAGE = `https://${DOMAIN}/varmala-fireworks-color-shots.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Kota",
    "Best Wedding Anchor Kota",
    "Kota Heritage Wedding Anchor",
    "Chambal River Wedding Emcee",
    "Umed Bhawan Palace Event Host",
    "Hadoti Region Wedding Anchor",
    "Kota Destination Wedding Anchor",
    "Brijraj Bhawan Wedding Anchor",
    "Garh Palace Kota Event Emcee",
    "Kota Industrial Corporate Host",
    "Bundi Wedding Anchor",
    "Kota Sangeet Emcee",
  ],
  description: `1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  priceRange: "₹₹₹₹",
  image: OG_IMAGE,
  logo: `https://${DOMAIN}/logo.webp`,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
    "https://g.co/kgs/anchoryashsoni",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Station Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "324001",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LAT,
    longitude: LNG,
  },
  hasMap: `https://maps.google.com/?q=${LAT},${LNG}`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917737877978",
    contactType: "booking",
    availableLanguage: ["Hindi","English"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Kota" },
    { "@type": "City", name: "Bundi" },
    { "@type": "City", name: "Jhalawar" },
    { "@type": "AdministrativeArea", name: "Hadoti" },
    { "@type": "AdministrativeArea", name: "Chambal Valley" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Gupta Family" },
      reviewBody: "At Umed Bhawan, the heritage architecture commands respect. Yash balanced the royal gravity of the property with the warm celebration of our Marwari family flawlessly. Not one misstep in three days.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Director — Coaching Institute Kota" },
      reviewBody: "Anchoring an annual faculty felicitation for 800 highly educated professionals requires absolute intellectual polish. Yash was formidable. The standard in Kota has been raised.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Kota & Hadoti Region",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umed Bhawan Heritage Wedding Anchor", description: "Royal palace wedding ceremonies and logistics deeply integrated into Hadoti culture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chambal River Sangeet Emcee", description: "River-facing open-air Sangeet hosting at boutique hotels and farmhouses" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Educational Corporate Summit Host", description: "Elite-level anchoring for Kota's multi-crore education and industrial sectors" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marwari Heritage Pre-Wedding Host", description: "Culturally fluent Haldi and Mehndi ceremonies for local business families" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Kota Heritage Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events across Rajasthan, India. Specialist in Hadoti heritage weddings, Chambal Valley outdoor acoustics, and corporate event hosting for Kota's premium education and industrial sectors.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Hadoti Regional Cultural Heritage",
    "Umed Bhawan Palace Hosting Protocol",
    "Chambal River Venue Acoustic Management",
    "Kota Industrial and Education Sector Protocol",
    "Marwari and Rajput Wedding Rituals in Kota",
    "Bilingual Formal English Hindi Emceeing",
    "Destination Wedding Crowd Management",
    "Heritage Property Logistic Coordination",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Anchor Yash Soni Events",
    url: `https://${DOMAIN}`,
  },
};

// ─── 3. BREADCRUMB SCHEMA ─────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: "South Eastern Rajasthan Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#hadoti` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Kota | Hadoti Heritage & Palace Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Kota, Umed Bhawan Palace & River Chambal Celebrations`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier anchor for Kota heritage weddings at Umed Bhawan & Brijraj Bhawan. Hadoti culture expert. Industrial/educational corporate host. Bilingual, unscripted.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Hadoti, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Kota | Umed Bhawan Palace Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Kota? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for Umed Bhawan Palace weddings, Chambal river pre-wedding events & premium corporate galas. Hadoti cultural fluency, bilingual, unscripted.`,
  keywords: [
    "anchor in kota",
    "best anchor in kota",
    "wedding anchor kota",
    "umed bhawan palace wedding anchor",
    "brijraj bhawan event host",
    "kota heritage wedding anchor",
    "chambal wedding emcee",
    "hadoti regional wedding anchor",
    "kota destination wedding",
    "bundi wedding anchor",
    "corporate anchor kota rajasthan",
    "kota coaching institute event anchor",
    "marwari wedding anchor kota",
    "bilingual anchor kota",
    "rajasthan palace wedding anchor",
    "anchor yash",
    "anchor yash soni",
  ],
  alternates: { canonical: FULL_URL },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: FULL_URL,
    siteName: "Anchor Yash Soni",
    title: `Best Anchor in Kota | Umed Bhawan Heritage Wedding Host`,
    description: `4.9★ rated. 1,100+ events. Kota's most trusted anchor for Umed Bhawan Palace and high-profile educational network events. Hadoti cultural fluency. Bilingual, unscripted.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Kota — Anchor Yash Soni at Umed Bhawan Palace, Hadoti` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Kota | Anchor Yash Soni — 4.9★`,
    description: `Umed Bhawan Palace. Chambal. The Hadoti region's most trusted heritage wedding and corporate anchor. 1,100+ events. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Kota | Palace Heritage Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Corporate Emcee, Hadoti, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Hadoti, Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function KotaLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {children}
    </>
  );
}
