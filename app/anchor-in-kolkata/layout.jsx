// app/anchor-in-kolkata/layout.jsx
// East India Heritage & Elite Marwari Wedding Anchor

const CITY     = "Kolkata";
const REGION   = "West Bengal";
const SLUG     = "anchor-in-kolkata";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "22.5726";
const LNG      = "88.3639";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/kolkata_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Kolkata",
    "Best Wedding Anchor Kolkata",
    "Taj Bengal Wedding Emcee",
    "ITC Royal Bengal Event Host",
    "Kolkata Destination Wedding Anchor",
    "Marwari Wedding Anchor Kolkata",
    "Bilingual English Hindi Anchor Rajarhat",
    "Corporate Event Host Kolkata",
    "Luxury Sangeet Anchor East India",
    "Elite Wedding Host Bengal",
  ],
  description: `Anchor Yash Soni is Kolkata's premier luxury wedding and corporate anchor — 4.9★ rated, 1,100+ events. Specialist in elite Marwari and cross-cultural weddings at ITC Royal Bengal, Taj Bengal, and JW Marriott. Flawless bilingual Hindi/English hosting tailored for Kolkata's deeply traditional yet globally connected business families.`,
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
    streetAddress: "Park Street Hub",
    addressLocality: CITY,
    addressRegion: "West Bengal",
    addressCountry: "IN",
    postalCode: "700016",
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
    { "@type": "City", name: "Kolkata" },
    { "@type": "City", name: "Howrah" },
    { "@type": "AdministrativeArea", name: "West Bengal" },
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
      author: { "@type": "Person", name: "Kedia Family" },
      reviewBody: "Kolkata’s Marwari weddings are intensely traditional but the guest list is incredibly modern. Yash’s bilingual control at ITC Royal Bengal was flawless. He knew exactly when to be deeply respectful during rituals and when to energize the Sangeet.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Managing Director — FMCG Corporation" },
      reviewBody: "We needed a highly articulate English-speaking host for our national distributor meet in Rajarhat. Yash commanded 600 delegates with no notes, extreme precision, and total authority.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Kolkata",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Royal Bengal Luxury Hosting", description: "Elite-level formal anchoring for massive indoor banquets and high-profile Marwari weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rajarhat Corporate Summit Host", description: "Bilingual tech and industrial corporate moderation for national East-India conferences" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Bengal Heritage Anchor", description: "Respectful, culturally rich event facilitation at Kolkata's premium heritage properties" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elite Sangeet Emcee", description: "High-voltage unscripted Sangeet orchestration bridging traditional families and metropolitan youth" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Kolkata Marwari Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events. Specialist in Kolkata's high-net-worth Marwari weddings at ITC Royal Bengal and corporate summits in Rajarhat. Impeccable bilingual English/Hindi execution.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "ITC Royal Bengal Event Flow",
    "Kolkata Marwari Wedding Traditions",
    "Bilingual English/Hindi Moderation",
    "Rajarhat Corporate Protocols",
    "Cross-Cultural East-North Indian Events",
    "Massive Indoor Banquet Acoustics",
    "Taj Bengal VIP Crowd Management",
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
  name: `Best Anchor in Kolkata | Luxury Wedding & ITC Royal Bengal Host — Yash Soni`,
  headline: `Kolkata's Most Trusted Event Anchor for ITC Royal Bengal, Elite Marwari Weddings & Corporate Summits`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier anchor for Kolkata luxury weddings. Specialist in Marwari heritage events and Rajarhat corporate summits. Bilingual English/Hindi. Zero scripts.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, West Bengal` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Kolkata | Premium Elite Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Kolkata? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for ITC Royal Bengal, Taj Bengal, and Rajarhat tech/corporate summits. Elite bilingual English/Hindi unscripted hosting.`,
  keywords: [
    "anchor in kolkata",
    "best anchor in kolkata",
    "wedding anchor kolkata",
    "itc royal bengal event host",
    "taj bengal wedding anchor",
    "kolkata destination wedding anchor",
    "corporate anchor kolkata",
    "rajarhat corporate host",
    "bilingual english hindi anchor kolkata",
    "marwari wedding anchor kolkata",
    "luxury event emcee west bengal",
    "east india wedding anchor",
    "sangeet anchor kolkata",
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
    title: `Best Anchor in Kolkata | Elite Marwari Wedding & Corporate Host`,
    description: `4.9★ rated. 1,100+ events. Kolkata's most trusted anchor for ITC Royal Bengal luxury weddings and Rajarhat corporate summits. Flawless bilingual English/Hindi execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Kolkata — Anchor Yash Soni at ITC Royal Bengal` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Kolkata | Anchor Yash Soni — 4.9★`,
    description: `ITC Royal Bengal. Taj Bengal. Rajarhat Summits. Kolkata's premier bilingual event anchor. 1,100+ events. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Kolkata | Luxury Urban Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Luxury Wedding, Elite Events, Corporate Emcee, ${CITY}, West Bengal, India`,
    "DC.coverage": `${CITY}, West Bengal, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function KolkataLayout({ children }) {
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