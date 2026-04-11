// app/anchor-in-coorg/layout.jsx
// Ultra-Luxury Eco-Estate Destination Anchor Layout

const CITY     = "Coorg";
const REGION   = "Karnataka";
const SLUG     = "anchor-in-coorg";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "12.3375";
const LNG      = "75.8069";
const OG_IMAGE = `https://${DOMAIN}/rose-petal-tree-background.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Coorg",
    "Best Wedding Anchor Coorg",
    "Coorg Destination Wedding Emcee",
    "Taj Madikeri Wedding Anchor",
    "Tamara Coorg Event Host",
    "Evolve Back Coorg Anchor",
    "Bilingual Emcee Coorg",
    "Coffee Estate Destination Wedding Host",
    "Corporate Retreat Anchor Coorg",
    "Bangalore Elite Wedding Host Coorg",
  ],
  description: `Anchor Yash Soni is Coorg's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth eco-estate weddings across iconic properties like Taj Madikeri and Tamara Coorg. Flawless unscripted bilingual moderation executing elite international and Bangalore tech VIP protocols.`,
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
    streetAddress: "Western Ghats Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Karnataka",
    addressCountry: "IN",
    postalCode: "571201",
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
    availableLanguage: ["Hindi","English", "Kannada"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Coorg" },
    { "@type": "City", name: "Madikeri" },
    { "@type": "City", name: "Virajpet" },
    { "@type": "AdministrativeArea", name: "Karnataka" },
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
      author: { "@type": "Person", name: "NRI Destination Wedding — Singapore" },
      reviewBody: "Hosting at Taj Madikeri required absolute poise and the ability to manage a sprawling rainforest estate. Yash was incredible. His English moderation for our international guests was flawlessly professional and unscripted.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Tech Leadership — Bangalore" },
      reviewBody: "We held an executive offsite at Tamara. Yash moderated our high-stakes strategy sessions with pure executive polish. He perfectly bridges the gap between formal corporate needs and high-energy gala hosting.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Coorg",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Madikeri Luxury Hosting", description: "Executing highly prestigious, VIP events within the sprawling architectural scale of Taj's rainforest property" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coffee Estate Sangeet Execution", description: "Bilingual English/Hindi/Kannada bridging for high-net-worth Bangalore families looking for organic mountain vibes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rainforest Acoustic Centralization", description: "Defeating massive outdoor sound dispersion and mist challenges in sprawling Western Ghats estates" } },
      { "@type": "Offer", itemOffered: { "@type": { "@type": "Service", name: "Corporate Retreat Moderation", description: "Unscripted hosting for elite Bangalore tech leadership summits and private MNC offsites" } } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Coorg Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Coorg's eco-luxury sector, executing flawless ceremonies at Taj Madikeri and Tamara Coorg.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Madikeri Protocol",
    "Eco-Resort Logistics",
    "Rainforest Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Bangalore Tech Demographics",
    "Estate Wedding Flow",
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
  name: `Best Anchor in Coorg | Taj Madikeri & Tamara Emcee — Yash Soni`,
  headline: `Coorg's Premier Event Anchor for Ultra-Luxury Coffee Estate Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Coorg destination weddings. Mastering prestigious properties like Taj Madikeri and Tamara Coorg with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Karnataka` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Coorg | Luxury Coffee Estate Wedding Emcee`,
  description: `Looking for the best anchor in Coorg? Anchor Yash Soni — 4.9★. Expert for Taj Madikeri, Tamara, and ultra-prestigious coffee estate weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in coorg",
    "best anchor in coorg",
    "wedding anchor coorg",
    "taj madikeri event host",
    "tamara coorg anchor",
    "evolve back coorg destination wedding anchor",
    "bilingual english hindi anchor coorg",
    "luxury event emcee karnataka",
    "bangalore wedding host coorg",
    "coffee estate destination anchor",
    "cultural retreat host coorg",
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
    title: `Best Anchor in Coorg | Elite Coffee Estate Destination Wedding Host`,
    description: `4.9★ rated. Coorg's premium anchor for highly prestigious destination weddings spanning the Western Ghats luxury ridge. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Coorg — Anchor Yash Soni at Coffee Estate Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Coorg | Anchor Yash Soni — 4.9★`,
    description: `Taj Madikeri. Tamara Coorg. Coorg's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted estate ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Coorg | Western Ghats VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Coffee Estate Wedding, VIP Events, ${CITY}, Karnataka, India`,
    "DC.coverage": `${CITY}, Karnataka, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function CoorgLayout({ children }) {
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