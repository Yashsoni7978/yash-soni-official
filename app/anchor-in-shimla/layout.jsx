/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-shimla/layout.jsx
// Ultra-Luxury High-Altitude Heritage Destination Anchor Layout

const CITY     = "Shimla";
const REGION   = "Himachal Pradesh";
const SLUG     = "anchor-in-shimla";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "31.1048";
const LNG      = "77.1734";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/shimla_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Shimla",
    "Best Wedding Anchor Shimla",
    "Shimla Destination Wedding Emcee",
    "Wildflower Hall Wedding Anchor",
    "Taj Theog Resort Event Host",
    "Himachal Luxury Wedding Anchor",
    "Bilingual Emcee Shimla",
    "High Altitude Destination Wedding Host",
    "Corporate Retreat Anchor Shimla",
    "Chandigarh Elite Wedding Host",
  ],
  description: `Anchor Yash Soni is Shimla's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth Himalayan destination weddings across iconic properties like Taj Theog and Wildflower Hall. Flawless unscripted bilingual moderation handling Delhi/Chandigarh VIPs.`,
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
    streetAddress: "Mashobra & Theog Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
    postalCode: "171001",
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
    { "@type": "City", name: "Shimla" },
    { "@type": "City", name: "Mashobra" },
    { "@type": "City", name: "Theog" },
    { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
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
      author: { "@type": "Person", name: "Corporate Group — Delhi NCR" },
      reviewBody: "Hosting a sunset reception at Taj Theog requires an anchor who understands immense prestige. Yash’s unscripted English was flawless, and he managed the transition into the evening Sangeet despite the freezing outdoor temperatures with complete authority. He commands the room effortlessly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Garg Family — Chandigarh" },
      reviewBody: "Choosing Wildflower Hall meant we had a highly restricted, incredibly VIP guest list. We needed an anchor, not a noisy MC. Yash was absolute perfection. Intense conversational flow, no reading from notes, completely owning the space.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Shimla",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Theog Retreat Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme high-altitude logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wildflower Hall Intimacy", description: "Bilingual English/Hindi bridging for incredibly distilled, 100-guest VIP destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Himalayan Ridge Sangeets", description: "Defeating massive mountain winds and freezing temperatures through intense acoustic centralization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Offsite Moderation", description: "Unscripted hosting for high-stakes leadership symposiums holding strategy retreats in Mashobra" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Shimla Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Shimla's high-altitude luxury sector, executing flawless bilingual ceremonies at Taj Theog and Wildflower Hall.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Theog Resort Protocol",
    "Wildflower Hall Exclusivity",
    "Himachal Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi/Chandigarh Executive Crowds",
    "High-Altitude Wedding Logistics",
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
  name: `Best Anchor in Shimla | Taj Theog & Wildflower Hall Emcee — Yash Soni`,
  headline: `Shimla's Premier Event Anchor for Ultra-Luxury Himalayan Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Shimla destination weddings. Mastering prestigious properties like Taj Theog and Wildflower Hall with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Himachal Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Shimla | Luxury Himalayan Wedding Emcee`,
  description: `Looking for the best anchor in Shimla? Anchor Yash Soni — 4.9★. Expert for Taj Theog, Wildflower Hall, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in shimla",
    "best anchor in shimla",
    "wedding anchor shimla",
    "wildflower hall event host",
    "taj theog wedding anchor",
    "himalayan destination wedding anchor",
    "bilingual english hindi anchor shimla",
    "luxury event emcee himachal",
    "chandigarh elite wedding host",
    "delhi ncr wedding host shimla",
    "corporate retreat host shimla",
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
    title: `Best Anchor in Shimla | Elite High-Altitude Destination Wedding Host`,
    description: `4.9★ rated. Shimla's premium anchor for highly prestigious destination weddings at Taj Theog and Wildflower Hall. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Shimla — Anchor Yash Soni at Himalayan Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Shimla | Anchor Yash Soni — 4.9★`,
    description: `Taj Theog. Wildflower Hall. Shimla's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-HP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Shimla | Himalayan VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Mountain Wedding, VIP Events, ${CITY}, Himachal Pradesh, India`,
    "DC.coverage": `${CITY}, Himachal Pradesh, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function ShimlaLayout({ children }) {
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
