// app/anchor-in-agra/layout.jsx
// Ultra-Luxury Heritage & Taj Mahal Destination Anchor Layout

const CITY     = "Agra";
const REGION   = "Uttar Pradesh";
const SLUG     = "anchor-in-agra";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.1767";
const LNG      = "78.0081";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/agra_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Agra",
    "Best Wedding Anchor Agra",
    "Agra Destination Wedding Host",
    "Oberoi Amarvilas Wedding Anchor",
    "Taj Mahal View Event Emcee",
    "Heritage Wedding Anchor Uttar Pradesh",
    "Bilingual Emcee Agra",
    "Luxury Royal Wedding Host",
    "Corporate Retreat Anchor Agra",
    "ITC Mughal Wedding Anchor",
  ],
  description: `Anchor Yash Soni is Agra's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth destination weddings across iconic properties like The Oberoi Amarvilas and ITC Mughal. Flawless unscripted bilingual execution honoring deep Mughal heritage and modern VIP standards.`,
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
    streetAddress: "Taj East Gate Road Corridors",
    addressLocality: CITY,
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    postalCode: "282001",
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
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
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
      author: { "@type": "Person", name: "Corporate Director — Delhi NCR" },
      reviewBody: "Hosting a sunset reception at The Oberoi Amarvilas requires an anchor who understands immense prestige. Yash’s unscripted English was flawless, and he managed the transition into the evening Sangeet with complete authority. He commands the room effortlessly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Singhania Family" },
      reviewBody: "We had international guests and traditional elders flying into ITC Mughal. Yash’s bilingual code-switching was perfect. He bridged the cultural gap so naturally. No awkward jokes, no loud club behavior—just pure, refined stage presence.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Agra",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oberoi Amarvilas Hosting", description: "Executing highly prestigious, VIP-heavy events with extreme architectural restrictions and noise limits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Cultural Royal Weddings", description: "Bilingual English/Hindi bridging for international guests mixed with deep Indian traditions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Corporate Offsites", description: "Unscripted moderation for high-stakes leadership symposiums holding retreats in Agra" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Mughal Massive Sangeets", description: "Pacing sprawling guest lists and generating intense Sangeet energy in luxury mega-resorts" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Agra Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Agra's highly prestigious heritage sector, executing flawless bilingual ceremonies at The Oberoi Amarvilas and ITC Mughal.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Oberoi Amarvilas Event Protocol",
    "Taj Mahal Proximity Restrictions",
    "Bilingual VIP Moderation",
    "Heritage Architectural Acoustics",
    "Delhi NCR Executive Events",
    "Mughal Era Property Timelines",
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
  name: `Best Anchor in Agra | Oberoi Amarvilas & Heritage Host — Yash Soni`,
  headline: `Agra's Premier Event Anchor for Ultra-Luxury Taj Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Agra destination weddings. Mastering prestigious layouts like The Oberoi Amarvilas and ITC Mughal with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttar Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Agra | Heritage Destination Wedding Emcee`,
  description: `Looking for the best anchor in Agra? Anchor Yash Soni — 4.9★. Expert for The Oberoi Amarvilas, ITC Mughal, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in agra",
    "best anchor in agra",
    "wedding anchor agra",
    "oberoi amarvilas event host",
    "itc mughal agra wedding anchor",
    "heritage destination wedding anchor up",
    "bilingual english hindi anchor agra",
    "royal wedding anchor agra",
    "luxury event emcee taj mahal",
    "delhi ncr wedding host agra",
    "corporate retreat host agra",
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
    title: `Best Anchor in Agra | Elite Heritage Destination Wedding Host`,
    description: `4.9★ rated. Agra's premium anchor for highly prestigious destination weddings at The Oberoi Amarvilas and ITC Mughal. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Agra — Anchor Yash Soni at Oberoi Amarvilas` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Agra | Anchor Yash Soni — 4.9★`,
    description: `The Oberoi Amarvilas. ITC Mughal. Agra's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Agra | Heritage VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, VIP Events, ${CITY}, Uttar Pradesh, India`,
    "DC.coverage": `${CITY}, Uttar Pradesh, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function AgraLayout({ children }) {
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