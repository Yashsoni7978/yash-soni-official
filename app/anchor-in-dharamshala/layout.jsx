// app/anchor-in-dharamshala/layout.jsx
// Ultra-Luxury Mountain Retreat Destination Anchor Layout

const CITY     = "Dharamshala";
const REGION   = "Himachal Pradesh";
const SLUG     = "anchor-in-dharamshala";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "32.2190";
const LNG      = "76.3234";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/dharamshala_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Dharamshala",
    "Best Wedding Anchor Dharamshala",
    "Dharamshala Destination Wedding Emcee",
    "Taj Dharamshala Wedding Anchor",
    "Hyatt Regency Dharamshala Host",
    "Kangra Valley Luxury Wedding Anchor",
    "Bilingual Emcee Dharamshala",
    "Dhauladhar Mountain Destination Wedding Host",
    "Corporate Retreat Anchor Dharamshala",
    "Chandigarh Elite Wedding Host Dharamshala",
  ],
  description: `Anchor Yash Soni is Dharamshala's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth mountain destination weddings across iconic properties like Taj Dharamshala and Hyatt Regency Resort. Flawless unscripted bilingual moderation executing elite Chandigarh and Punjab VIP protocols.`,
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
    streetAddress: "Dhauladhar Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
    postalCode: "176215",
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
    availableLanguage: ["Hindi","English", "Punjabi"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Dharamshala" },
    { "@type": "City", name: "Kangra" },
    { "@type": "City", name: "McLeod Ganj" },
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
      author: { "@type": "Person", name: "Corporate Summit — Chandigarh" },
      reviewBody: "Choosing Taj Dharamshala meant we needed an extremely refined host for our executive summit. Yash anchored with pure executive polish. Unscripted, sharp, and totally in control of the multi-day agenda.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Punjabi Destination Sangeet" },
      reviewBody: "Mountain weather is a mood killer. But Yash brought massive Sangeet hype entirely natively. He switched between English for the VIPs and heavy Punjabi crowd-work effortlessly. The dance floor at Hyatt Regency exploded.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Dharamshala",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Dharamshala Retreat Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme high-altitude luxury logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hyatt Regency Sangeet Execution", description: "Bilingual Punjabi/English bridging for incredibly fast-paced VIP destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dhauladhar Acoustic Centralization", description: "Defeating massive mountain winds and freezing temperatures through intense timeline compression" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Peace Offsite Moderation", description: "Unscripted, highly spiritual and strategic hosting for high-stakes leadership symposiums" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Dharamshala Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Dharamshala's high-altitude luxury sector, executing explosive bilingual ceremonies at Taj Dharamshala and Hyatt Regency.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Dharamshala Protocol",
    "Hyatt Regency Logistics",
    "Dhauladhar Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Chandigarh & Punjab Elite Crowds",
    "Mountain Retreat Wedding Flow",
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
  name: `Best Anchor in Dharamshala | Taj & Hyatt Emcee — Yash Soni`,
  headline: `Dharamshala's Premier Event Anchor for Ultra-Luxury Mountain Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Dharamshala destination weddings. Mastering prestigious properties like Taj Dharamshala and Hyatt Regency with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Himachal Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Dharamshala | Luxury Mountain Wedding Emcee`,
  description: `Looking for the best anchor in Dharamshala? Anchor Yash Soni — 4.9★. Expert for Taj Dharamshala, Hyatt Regency, and ultra-prestigious mountain weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in dharamshala",
    "best anchor in dharamshala",
    "wedding anchor dharamshala",
    "taj dharamshala event host",
    "hyatt regency dharamshala anchor",
    "dhauladhar destination wedding anchor",
    "bilingual english punjabi anchor dharamshala",
    "luxury event emcee himachal",
    "chandigarh wedding host dharamshala",
    "mountain retreat destination anchor",
    "corporate retreat host dharamshala",
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
    title: `Best Anchor in Dharamshala | Elite Mountain Destination Wedding Host`,
    description: `4.9★ rated. Dharamshala's premium anchor for highly prestigious destination weddings spanning the Dhauladhar luxury ridge. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Dharamshala — Anchor Yash Soni at Mountain Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Dharamshala | Anchor Yash Soni — 4.9★`,
    description: `Taj Dharamshala. Hyatt Regency. Dharamshala's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted mountain VIP ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-HP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Dharamshala | Dhauladhar VIP Destination Emcee — Yash Soni`,
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
export default function DharamshalaLayout({ children }) {
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