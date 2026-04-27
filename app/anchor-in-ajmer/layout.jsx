// app/anchor-in-ajmer/layout.jsx
// Sufi Heritage & Regional Palace Wedding Anchor — Full Schema + SEO Layout

const CITY     = "Ajmer";
const REGION   = "Central Rajasthan";
const SLUG     = "anchor-in-ajmer";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "26.4499";
const LNG      = "74.6399";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/pushkar_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Ajmer",
    "Best Wedding Anchor Ajmer",
    "Ajmer Heritage Wedding Anchor",
    "Pratap Palace Wedding Emcee",
    "Kishangarh Heritage Wedding Host",
    "Pushkar-Ajmer Corridor Event Anchor",
    "Central Rajasthan Destination Wedding",
    "Gateway Resort Ajmer Anchor",
    "Ana Sagar Lake Wedding Host",
    "Sufi Culture Destination Anchor",
    "Ajmer NRI Destination Host",
  ],
  description: `Anchor Yash Soni is Ajmer's premier heritage wedding and event anchor — 4.9★ rated, 1,100+ events, 8+ years experience. Specialist in luxury weddings at Pratap Palace (Taj), Mansingh Palace, and the Ajmer-Pushkar golden corridor. Bilingual Hindi/English, fully unscripted, highly attuned to the deeply secular, syncretic cultural traditions of central Rajasthan.`,
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
    streetAddress: "Ana Sagar Circular Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "305001",
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
    { "@type": "City", name: "Ajmer" },
    { "@type": "City", name: "Pushkar" },
    { "@type": "City", name: "Kishangarh" },
    { "@type": "City", name: "Beawar" },
    { "@type": "AdministrativeArea", name: "Central Rajasthan" },
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
      author: { "@type": "Person", name: "Bansal Family" },
      reviewBody: "Choosing Pratap Palace meant we needed someone who matched the Taj standard. Yash's hosting was flawless. He merged our formal ceremonies with unscripted celebration that got both sides of the family invested.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Qureshi Family" },
      reviewBody: "Bilingual, sophisticated, and deeply aware of our traditions. Yash hosted our 500-guest reception near Ana Sagar with incredible dignity and warmth.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Ajmer & Central Rajasthan",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pratap Palace Heritage Anchor", description: "Bespoke ceremony facilitation at Ajmer's premium heritage hotel properties" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ana Sagar Lake Sangeet Emcee", description: "Outdoor, high-energy Sangeet hosting against Ajmer's historic lake" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ajmer Pushkar Corridor Host", description: "Seamless logistical understanding of events split between Ajmer and Pushkar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Destination Wedding Emcee", description: "Bilingual formal hosting for international families returning to their roots" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Ajmer Heritage Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events across Rajasthan, India. Specialist in Ajmer's premium heritage properties, lake-side acoustics, and syncretic cultural hosting.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Pratap Palace Keys to Taj Protocol",
    "Ana Sagar Open Air Acoustic Management",
    "Central Rajasthan Syncretic Heritage",
    "Ajmer to Pushkar Guest Flow Logistics",
    "Bilingual English/Hindi Code Switching",
    "Marwari and Rajput Ceremonial Protocols",
    "VIP Security Contexts in Ajmer",
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
    { "@type": "ListItem", position: 3, name: "Central Rajasthan Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#central` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Ajmer | Pratap Palace & Heritage Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Ajmer — Pratap Palace, Mansingh & the Central Rajasthan Circuit`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier anchor for Ajmer destination weddings at Pratap Palace (Taj) & Ana Sagar properties. Regional cultural fluency. Bilingual, unscripted.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Central Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Ajmer | Premium Heritage Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Ajmer? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for luxury weddings at Pratap Palace & Ana Sagar lake outposts. Syncretic cultural fluency, bilingual English/Hindi, completely unscripted.`,
  keywords: [
    "anchor in ajmer",
    "best anchor in ajmer",
    "wedding anchor ajmer",
    "pratap palace taj ajmer wedding",
    "ajmer heritage wedding anchor",
    "mansingh palace event host",
    "ana sagar lake wedding emcee",
    "pushkar ajmer wedding anchor",
    "central rajasthan destination wedding",
    "kishangarh wedding anchor",
    "nri destination wedding ajmer",
    "ajmer sufi heritage host",
    "marwari wedding anchor ajmer",
    "bilingual anchor ajmer",
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
    title: `Best Anchor in Ajmer | Premium Heritage Wedding Host`,
    description: `4.9★ rated. 1,100+ events. Ajmer's most trusted anchor for Pratap Palace and premium heritage properties. Seamless bilingual hosting for central Rajasthan's elite families.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ajmer — Anchor Yash Soni at Pratap Palace` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Ajmer | Anchor Yash Soni — 4.9★`,
    description: `Pratap Palace. Ana Sagar. Central Rajasthan's premium bilingual heritage wedding anchor. 1,100+ events. Zero paper scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Ajmer | Heritage Palace Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Destination Emcee, Syncretic Culture, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Central Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function AjmerLayout({ children }) {
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
