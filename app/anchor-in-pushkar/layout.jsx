/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-pushkar/layout.jsx
// International NRI Wedding & Heritage Desert Anchor Layout

const CITY     = "Pushkar";
const REGION   = "Rajasthan";
const SLUG     = "anchor-in-pushkar";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "26.4883";
const LNG      = "74.5509";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/pushkar_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Pushkar",
    "Best Wedding Anchor Pushkar",
    "Westin Pushkar Event Host",
    "Ananta Resort Pushkar Wedding Anchor",
    "Pushkar Destination Wedding Host",
    "NRI Marwari Wedding Anchor",
    "Bilingual Emcee Pushkar",
    "Luxury Event Host Rajasthan",
    "Satvik Protocol Wedding Anchor",
    "Brahma Temple Heritage Host",
  ],
  description: `Anchor Yash Soni is Pushkar's premier destination wedding anchor — 4.9★ rated, 1,100+ events. Specialist in managing international and NRI elite guest lists across Westin Pushkar, Ananta Spa & Resorts, and heritage camps. Expert in driving high-voltage unscripted energy even within the strict Satvik (no-alcohol/no-meat) protocols of the holy city.`,
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
    streetAddress: "Central Ajmer-Pushkar Bypass Hub",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "305022",
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
    { "@type": "City", name: "Pushkar" },
    { "@type": "City", name: "Ajmer" },
    { "@type": "City", name: "Kishangarh" },
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
      author: { "@type": "Person", name: "Jindal Family (NRI)" },
      reviewBody: "Pushkar is a holy town with strict alcohol restrictions, so we were terrified the Sangeet at Ananta Resort would fall flat. Yash came in completely unscripted and generated so much raw energy that nobody even noticed the lack of a bar. An absolute masterclass.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Deshmukh & Sharma Families" },
      reviewBody: "Our wedding at Westin Pushkar featured guests from London and Dubai alongside traditional elders. Yash's bilingual capability ensured the ceremonies felt impossibly grand but culturally connected. Best host in Rajasthan.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Pushkar",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Destination Wedding Hosting", description: "Flawless bilingual execution for international guests arriving in Pushkar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Satvik High-Energy Sangeet", description: "Driving extreme momentum and hype without reliance on modern club environments" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Westin // Ananta Mega-Events", description: "Acoustic control across sprawling desert luxury resorted and open-air dunes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Cultural Desert Integration", description: "Bridging modern metropolitan corporate friends with traditional Marwari customs" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Pushkar Destination Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Pushkar's unique event dichotomy: driving massive Sangeet energy under strict traditional venue protocols, and hosting ultra-premium NRI weddings across the Westin-Ananta corridor.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Westin Pushkar Resort Event Flow",
    "Ananta Spa Logistics and Acoustics",
    "Bilingual NRI English Moderation",
    "Satvik Protocol Crowd Psychology",
    "Cross-Cultural Desert Weddings",
    "Marwari Wedding Traditions",
    "Open-Air Wind Acoustic Dispersion",
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
  name: `Best Anchor in Pushkar | Elite NRI Destination Wedding Host — Yash Soni`,
  headline: `Pushkar's Most Trusted Event Anchor for Westin, Ananta & Luxury Desert Inter-Cultural Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier anchor for Pushkar luxury destination weddings. Specialist in handling global VIPs, massive open-air acoustics, and driving organic energy under strict traditional protocols.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Pushkar | Luxury Destination Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Pushkar? Anchor Yash Soni — 4.9★. Expert for Westin Pushkar, Ananta Spa, and luxury desert NRI weddings. Flawless unscripted bilingual hosting that bridges deep traditions with global premium standards.`,
  keywords: [
    "anchor in pushkar",
    "best anchor in pushkar",
    "wedding anchor pushkar",
    "westin pushkar event host",
    "ananta resort wedding anchor pushkar",
    "nri destination wedding anchor rajasthan",
    "bilingual english hindi anchor pushkar",
    "marwari wedding anchor pushkar",
    "desert wedding emcee rajasthan",
    "taj pratap palace event host",
    "luxury event emcee rajasthan",
    "satvik wedding anchor",
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
    title: `Best Anchor in Pushkar | Elite Desert & NRI Wedding Host`,
    description: `4.9★ rated. 1,100+ events. Pushkar's premium anchor for Westin and Ananta resort luxury weddings. Flawless bilingual English/Hindi execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Pushkar — Anchor Yash Soni at Desert Luxury Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Pushkar | Anchor Yash Soni — 4.9★`,
    description: `Westin. Ananta. Pushkar's premier bilingual event anchor for NRI and luxury destination weddings. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Pushkar | Luxury Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Luxury Wedding, NRI Events, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function PushkarLayout({ children }) {
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
