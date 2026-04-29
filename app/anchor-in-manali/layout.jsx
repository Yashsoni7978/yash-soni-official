/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-manali/layout.jsx
// Ultra-Luxury Alpine Resort & Punjabi Heritage Destination Anchor Layout

const CITY     = "Manali";
const REGION   = "Himachal Pradesh";
const SLUG     = "anchor-in-manali";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "32.2396";
const LNG      = "77.1887";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/manali_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Manali",
    "Best Wedding Anchor Manali",
    "Manali Destination Wedding Emcee",
    "Span Resort Wedding Anchor",
    "Baragarh Resort Event Host",
    "Alpine Luxury Wedding Anchor",
    "Bilingual Emcee Kullu Manali",
    "High Altitude Destination Wedding Host",
    "Corporate Retreat Anchor Manali",
    "Punjabi Elite Wedding Host Manali",
  ],
  description: `Anchor Yash Soni is Manali's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth alpine destination weddings across iconic properties like Span Resort and Baragarh Resort & Spa. Flawless unscripted bilingual moderation driving immense Punjabi Sangeet hype despite extreme weather constraints.`,
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
    streetAddress: "Kullu-Manali Alpine Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
    postalCode: "175131",
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
    { "@type": "City", name: "Manali" },
    { "@type": "City", name: "Kullu" },
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
      author: { "@type": "Person", name: "Gill Family — Chandigarh" },
      reviewBody: "Hosting a Punjabi Sangeet at Span Resort in November is risky because the cold kills the crowd. Yash bypassed the weather entirely. He generated so much interactive, unscripted hype that the dance floor was packed instantly. The best anchor we've ever hired.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Tech Startup Offsite — Gurgaon" },
      reviewBody: "We held an executive strategy retreat at Baragarh Resort. Yash anchored the summit gracefully, shifting completely away from the 'wedding MC' vibe into a sharp, articulate moderator. Highly recommended for corporate VIPs.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Manali",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Span Resort Alpine Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme alpine riverside logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Voltage Punjabi Sangeets", description: "Bilingual bridging specifically tailored to drive intense energy for Chandigarh/Punjab elite families" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mountain Weather Crowd Compression", description: "Defeating massive valley winds and freezing temperatures through intense acoustic centralization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Offsite Moderation", description: "Unscripted hosting for high-stakes leadership symposiums holding strategy retreats in Kullu-Manali" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Manali Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Manali's alpine luxury sector, executing explosive bilingual Sangeets and corporate offsites at Span Resort and Baragarh Resort.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Span Resort River Protocol",
    "Baragarh Venue Exclusivity",
    "Pine Forest Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Chandigarh Elite Crowds",
    "Alpine Wedding Logistics",
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
  name: `Best Anchor in Manali | Span Resort & Alpine Emcee — Yash Soni`,
  headline: `Manali's Premier Event Anchor for Ultra-Luxury Alpine Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Manali destination weddings. Mastering prestigious properties like Span Resort and Baragarh with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Himachal Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Manali | Luxury Alpine Wedding Emcee`,
  description: `Looking for the best anchor in Manali? Anchor Yash Soni — 4.9★. Expert for Span Resort, Baragarh, and ultra-prestigious destination weddings. Flawless unscripted hosting for high-voltage VIP events.`,
  keywords: [
    "anchor in manali",
    "best anchor in manali",
    "wedding anchor manali",
    "span resort event host",
    "baragarh resort wedding anchor",
    "alpine destination wedding anchor",
    "bilingual english hindi anchor kullu manali",
    "luxury event emcee himachal",
    "chandigarh punjabi wedding host manali",
    "delhi ncr wedding host manali",
    "corporate retreat host manali",
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
    title: `Best Anchor in Manali | Elite Alpine Destination Wedding Host`,
    description: `4.9★ rated. Manali's premium anchor for highly prestigious destination weddings at Span Resort and Baragarh. Unscripted high-voltage excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Manali — Anchor Yash Soni at Alpine Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Manali | Anchor Yash Soni — 4.9★`,
    description: `Span Resort. Baragarh. Manali's premier bilingual event anchor for exclusive VIP Sangeets and massive alpine ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-HP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Manali | Alpine VIP Destination Emcee — Yash Soni`,
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
export default function ManaliLayout({ children }) {
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
