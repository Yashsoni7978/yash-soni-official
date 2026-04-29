/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-chennai/layout.jsx
// Ultra-Luxury Coastal Heritage Destination Anchor Layout

const CITY     = "Chennai";
const REGION   = "Tamil Nadu";
const SLUG     = "anchor-in-chennai";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "13.0827";
const LNG      = "80.2707";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/chennai_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Chennai",
    "Best Wedding Anchor Chennai",
    "Chennai Destination Wedding Emcee",
    "Taj Fisherman's Cove Wedding Anchor",
    "ITC Grand Chola Event Host",
    "Leela Palace Chennai Anchor",
    "Bilingual Emcee Chennai",
    "ECR Destination Wedding Host",
    "Corporate Summit Anchor Chennai",
    "South India Elite Wedding Host",
  ],
  description: `Anchor Yash Soni is Chennai's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth coastal and heritage weddings across iconic properties like Taj Fisherman's Cove and ITC Grand Chola. Flawless unscripted bilingual moderation executing elite international and pan-India VIP protocols.`,
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
    streetAddress: "Coastal Luxury Corridor, ECR",
    addressLocality: CITY,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
    postalCode: "600001",
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
    availableLanguage: ["Hindi","English", "Tamil"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Mahabalipuram" },
    { "@type": "City", name: "Pondicherry" },
    { "@type": "AdministrativeArea", name: "Tamil Nadu" },
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
      author: { "@type": "Person", name: "NRI Destination Wedding — Australia" },
      reviewBody: "Hosting at Taj Fisherman's Cove required absolute poise and the ability to manage a massive coastal lawn. Yash was incredible. His English moderation for our global guests was flawlessly professional and unscripted.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Summit — ITC Grand Chola" },
      reviewBody: "We held an international leadership summit at ITC Grand Chola. Yash moderated our strategic gala sessions with pure executive polish. He perfectly bridges the gap between formal corporate requirements and high-energy hosting.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Chennai",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fisherman's Cove Luxury Hosting", description: "Executing highly prestigious, VIP events within the sprawling architectural scale of Taj's coastal property" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Grand Chola Gala Execution", description: "Bilingual English/Hindi bridging for high-net-worth pan-India families in grand ballroom settings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ECR Acoustic Centralization", description: "Defeating massive beachside sound dispersion and humidity challenges in sprawling coastal resorts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Summit Moderation", description: "Unscripted hosting for elite international leadership symposiums and private MNC offsites" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Chennai Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Chennai's coastal luxury sector, executing flawless ceremonies at Taj Fisherman's Cove and ITC Grand Chola.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Fisherman's Cove Protocol",
    "ITC Grand Chola Logistics",
    "Coastal Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Pan-India Corporate Demographics",
    "South India Wedding Flow",
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
  name: `Best Anchor in Chennai | Taj & ITC Grand Chola Emcee — Yash Soni`,
  headline: `Chennai's Premier Event Anchor for Ultra-Luxury Coastal Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Chennai destination weddings. Mastering prestigious properties like Taj Fisherman's Cove and ITC Grand Chola with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Tamil Nadu` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Chennai | Luxury Coastal Wedding Emcee`,
  description: `Looking for the best anchor in Chennai? Anchor Yash Soni — 4.9★. Expert for Taj Fisherman's Cove, ITC Grand Chola, and ultra-prestigious coastal weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in chennai",
    "best anchor in chennai",
    "wedding anchor chennai",
    "taj fisherman's cove event host",
    "itc grand chola anchor",
    "leela palace chennai destination wedding anchor",
    "bilingual english hindi anchor chennai",
    "luxury event emcee tamil nadu",
    "corporate summit host chennai",
    "ecr destination anchor",
    "cultural heritage host chennai",
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
    title: `Best Anchor in Chennai | Elite Coastal Destination Wedding Host`,
    description: `4.9★ rated. Chennai's premium anchor for highly prestigious destination weddings spanning the ECR luxury ridge. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Chennai — Anchor Yash Soni at Coastal Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Chennai | Anchor Yash Soni — 4.9★`,
    description: `Taj Fisherman's Cove. ITC Grand Chola. Chennai's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted coastal ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Chennai | Coastal VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Coastal Wedding, VIP Events, ${CITY}, Tamil Nadu, India`,
    "DC.coverage": `${CITY}, Tamil Nadu, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function ChennaiLayout({ children }) {
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
