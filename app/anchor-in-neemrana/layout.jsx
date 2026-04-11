// app/anchor-in-neemrana/layout.jsx
// Delhi NCR Weekend Heritage & Corporate Retreat Anchor Layout

const CITY     = "Neemrana";
const REGION   = "Rajasthan";
const SLUG     = "anchor-in-neemrana";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.9890";
const LNG      = "76.3888";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/neemrana_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Neemrana",
    "Best Wedding Anchor Neemrana",
    "Neemrana Fort Palace Event Host",
    "Delhi NCR Corporate Retreat Host",
    "Tijara Fort Palace Anchor",
    "Weekend Destination Wedding Anchor",
    "Bilingual Emcee Neemrana",
    "Luxury Event Host Rajasthan",
    "Heritage Wedding Emcee NCR",
    "15th Century Fort Event Host",
  ],
  description: `Anchor Yash Soni is Neemrana's premier luxury wedding and corporate retreat anchor — 4.9★ rated, 1,100+ events. Specialist in navigating the complex acoustics of the 15th-century Neemrana Fort Palace, and executing high-intellect bilingual moderation for Delhi NCR corporate getaways and elite weekend destination weddings.`,
  url: FULL_URL,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  priceRange: "₹₹₹₹",
  image: OG_IMAGE,
  logo: `https://${DOMAIN}/logo.png`,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
    "https://g.co/kgs/anchoryashsoni",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Delhi-Jaipur Highway Zone",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "301705",
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
    { "@type": "City", name: "Neemrana" },
    { "@type": "City", name: "Alwar" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
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
      author: { "@type": "Person", name: "Director — Tech Startup NCR" },
      reviewBody: "We brought our entire C-suite out to Neemrana for a leadership summit. Yash anchored the daytime panels with incredible English precision, and then transitioned into hosting our evening gala flawlessly. True executive hosting.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Malhotra Family (Delhi)" },
      reviewBody: "Neemrana Fort has 14 different levels. It’s impossible to manage guests naturally, and they don't allow loud DJs. Yash stepped up and literally kept our entire wedding together using purely his voice and stage presence. Magic.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Neemrana",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Neemrana Fort Palace Hosting", description: "Navigating archaic venue regulations and complex 14-tier fortress acoustics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NCR Corporate Retreats", description: "Intellectual, unscripted moderation for Delhi/Gurgaon executive teams on weekend offsites" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Weekend Sangeet", description: "Acoustic control across sprawling heritage resorts driving natural energy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tijara Fort Event Execution", description: "Bridging modern Delhi corporate friends with traditional family customs in a heritage venue" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Neemrana Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Neemrana's unique weekend proximity to NCR: acting as the executive moderator for Delhi corporate retreats, and overcoming the architectural challenges of 15th-century stepped forts.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Neemrana Fort Palace Acoustic Zones",
    "Tijara Fort Heritage Logistics",
    "Bilingual NCR Executive Moderation",
    "Weekend Destination Weekend Timelines",
    "Stepped Fortress Crowd Control",
    "Delhi/Gurgaon Corporate Demographics",
    "Strict Heritage Decibel Control Policies",
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
    { "@type": "ListItem", position: 2, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Neemrana | Delhi NCR Corporate Retreat & Fort Host — Yash Soni`,
  headline: `Neemrana's Most Trusted Anchor for 15th-Century Fort Weddings & Gurgaon Corporate Escapes`,
  description: `Anchor Yash Soni — 4.9★ rated. Premier anchor for Neemrana weekend destination weddings and NCR corporate retreats. Specialist in managing complex heritage acoustics at Neemrana Fort Palace and Tijara Fort.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Neemrana | Corporate Retreat & Fort Emcee — Yash Soni`,
  description: `Looking for the best anchor in Neemrana? Anchor Yash Soni — 4.9★. Expert for Neemrana Fort Palace, Tijara Fort, and Delhi NCR weekend corporate retreats. Flawless unscripted bilingual hosting for extreme heritage venues.`,
  keywords: [
    "anchor in neemrana",
    "best anchor in neemrana",
    "wedding anchor neemrana",
    "neemrana fort palace event host",
    "tijara fort wedding anchor",
    "delhi ncr corporate retreat host rajasthan",
    "bilingual english hindi anchor neemrana",
    "weekend destination wedding anchor neemrana",
    "heritage wedding emcee rajasthan",
    "corporate summit host neemrana",
    "luxury event emcee alwar region",
    "gurgaon offsite anchor",
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
    title: `Best Anchor in Neemrana | Corporate Offsite & Elite Fort Host`,
    description: `4.9★ rated. Neemrana's premium anchor for 15th-century fort weddings and elite Delhi NCR corporate retreats. Flawless bilingual execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Neemrana — Anchor Yash Soni at Neemrana Fort Palace` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Neemrana | Anchor Yash Soni — 4.9★`,
    description: `Neemrana Fort. Tijara Fort. NCR Corporate Retreats. Neemrana's premier event anchor for extreme heritage and executive hosting.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Neemrana | Heritage Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Corporate Retreats, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function NeemranaLayout({ children }) {
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