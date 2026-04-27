// app/anchor-in-ooty/layout.jsx
// Ultra-Luxury Heritage Hill Destination Anchor Layout

const CITY     = "Ooty";
const REGION   = "Tamil Nadu";
const SLUG     = "anchor-in-ooty";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "11.4102";
const LNG      = "76.6950";
const OG_IMAGE = `https://${DOMAIN}/rose-petal-tree-background.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Ooty",
    "Best Wedding Anchor Ooty",
    "Ooty Destination Wedding Emcee",
    "Savoy Ooty Wedding Anchor",
    "Ferrnhills Royale Palace Emcee",
    "Nilgiris Luxury Wedding Anchor",
    "Bilingual Emcee Ooty",
    "Tea Estate Destination Wedding Host",
    "Corporate Retreat Anchor Ooty",
    "Bangalore Elite Wedding Host Ooty",
  ],
  description: `Anchor Yash Soni is Ooty's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth heritage weddings across iconic properties like Savoy (IHCL) and WelcomHeritage Ferrnhills Royale Palace. Flawless unscripted bilingual moderation executing elite international and corporate VIP protocols.`,
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
    streetAddress: "Nilgiri Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
    postalCode: "643001",
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
    { "@type": "City", name: "Ooty" },
    { "@type": "City", name: "Coonoor" },
    { "@type": "City", name: "Coimbatore" },
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
      author: { "@type": "Person", name: "NRI Destination Wedding — USA" },
      reviewBody: "Hosting a colonial-themed wedding at Ferrnhills Royale Palace meant we needed someone with absolute poise and flawless English. Yash was the perfect choice. He managed the global guest list with incredible unscripted wit and authority.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Summit — Bangalore" },
      reviewBody: "We held a leadership retreat at Savoy. Yash moderated our gala evening with pure executive class. He is much more than a wedding anchor; he is a sophisticated moderator who understands corporate pedigree.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Ooty",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Savoy Heritage Hosting", description: "Executing highly prestigious, VIP-heavy events navigating Ooty's historical and colonial-era luxury logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tea Estate Sangeet Execution", description: "Bilingual English/Hindi bridging for high-net-worth families looking for a sophisticated mountain vibe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nilgiri Acoustic Mastery", description: "Defeating massive outdoor sound dispersion in sprawling mountain estates through intense stage command" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Leadership Offsite Moderation", description: "Unscripted, zero-notes hosting for high-stakes Bangalore tech summits and private MNC retreats" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Ooty Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Ooty's heritage luxury sector, executing flawless ceremonies at Savoy and Ferrnhills Royale Palace.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Savoy Ooty Protocol",
    "Heritage Hotel Logistics",
    "Mountain Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "NRI & Bangalore Elite Crowds",
    "Colonial Heritage Wedding Flow",
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
  name: `Best Anchor in Ooty | Savoy & Ferrnhills Emcee — Yash Soni`,
  headline: `Ooty's Premier Event Anchor for Ultra-Luxury Colonial Heritage Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Ooty destination weddings. Mastering prestigious properties like Savoy and Ferrnhills Royale Palace with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Tamil Nadu` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Ooty | Luxury Colonial Heritage Wedding Emcee`,
  description: `Looking for the best anchor in Ooty? Anchor Yash Soni — 4.9★. Expert for Savoy (IHCL), Ferrnhills Royale Palace, and ultra-prestigious tea estate weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in ooty",
    "best anchor in ooty",
    "wedding anchor ooty",
    "savoy ooty event host",
    "ferrnhills royale palace anchor",
    "nilgiris destination wedding anchor",
    "bilingual english hindi anchor ooty",
    "luxury event emcee tamil nadu",
    "bangalore wedding host ooty",
    "tea estate destination anchor",
    "cultural heritage host ooty",
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
    title: `Best Anchor in Ooty | Elite Colonial Heritage Destination Wedding Host`,
    description: `4.9★ rated. Ooty's premium anchor for highly prestigious destination weddings spanning the Nilgiri heritage corridors. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ooty — Anchor Yash Soni at Nilgiri Heritage Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Ooty | Anchor Yash Soni — 4.9★`,
    description: `Savoy Ooty. Ferrnhills Royale Palace. Ooty's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted mountain VIP ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Ooty | Nilgiri VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, VIP Events, ${CITY}, Tamil Nadu, India`,
    "DC.coverage": `${CITY}, Tamil Nadu, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function OotyLayout({ children }) {
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
