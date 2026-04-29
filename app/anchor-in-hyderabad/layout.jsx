/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-hyderabad/layout.jsx
// Royal Nizam Heritage & Ramoji Mega Scale Wedding Anchor

const CITY     = "Hyderabad";
const REGION   = "Telangana";
const SLUG     = "anchor-in-hyderabad";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "17.3850";
const LNG      = "78.4867";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/hyderabad_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Hyderabad",
    "Best Wedding Anchor Hyderabad",
    "Taj Falaknuma Wedding Anchor",
    "Ramoji Film City Event Emcee",
    "Hyderabad Destination Wedding Anchor",
    "HITEC City Corporate Host",
    "Bilingual Emcee Hyderabad",
    "Marwari Wedding Anchor Hyderabad",
    "Luxury Event Host Telangana",
    "Nizam Heritage Wedding Anchor",
  ],
  description: `Anchor Yash Soni is Hyderabad's premier luxury wedding and corporate event anchor — 4.9★ rated, 1,100+ events. Specialist in elite events at the grand Taj Falaknuma Palace, Ramoji Film City mega-weddings, and corporate summits in HITEC City. Impeccable English and Hindi bilingual hosting for high-net-worth business families across Telangana.`,
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
    streetAddress: "Banjara Hills Hub",
    addressLocality: CITY,
    addressRegion: "Telangana",
    addressCountry: "IN",
    postalCode: "500034",
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
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Secunderabad" },
    { "@type": "AdministrativeArea", name: "Telangana" },
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
      author: { "@type": "Person", name: "Reddy Family" },
      reviewBody: "Anchoring at Taj Falaknuma requires absolute vocal command without resorting to shouting. Yash understood the architectural authority of the palace perfectly. He bridged our North and South Indian relatives flawlessly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Director — Media Conglomerate" },
      reviewBody: "Ramoji Film City is so incredibly large that you need an anchor with pure stage dominance to stop a 2,000-person crowd from fracturing. Yash held the event together start to finish with no script.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Hyderabad",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Falaknuma Luxury Hosting", description: "Bespoke formal anchoring bridging Nizam heritage and global elite standards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ramoji Mega-Scale Wedding Emcee", description: "Extreme physical and vocal crowd control for 2,000+ guest film city productions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HITEC City Corporate Anchor", description: "Tech industry and medical summit executive hosting in flawless English" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banjara Hills Intimate Sangeet", description: "High-energy, interactive Sangeet hosting for premium private club events" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Hyderabad Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events. Specialist in Hyderabad's extreme event dichotomy: commanding the intimate royal protocol of Taj Falaknuma and the sprawling mega-scale productions of Ramoji Film City.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Falaknuma Palace Heritage Protcol",
    "Ramoji Film City Mega Events",
    "Bilingual Hindi English Emceeing",
    "Tech Summit Moderation HITEC City",
    "North/South Cross Cultural Integration",
    "Extravagant Marwari Weddings in Telangana",
    "High-Net-Worth VIP Crowd Management",
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
  name: `Best Anchor in Hyderabad | Taj Falaknuma & Ramoji Host — Yash Soni`,
  headline: `Hyderabad's Most Trusted Event Anchor for Falaknuma Palace, Ramoji Film City & Corporate Summits`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier anchor for Hyderabad luxury weddings. Mega-event specialist for Ramoji Film City. Flawless bilingual English/Hindi execution. Zero scripts.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Telangana` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Hyderabad | Luxury Wedding Emcee — Yash Soni`,
  description: `Looking for the best anchor in Hyderabad? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for Taj Falaknuma Palace, Ramoji Film City weddings, and HITEC City corporate summits. Flawless elite bilingual hosting.`,
  keywords: [
    "anchor in hyderabad",
    "best anchor in hyderabad",
    "wedding anchor hyderabad",
    "taj falaknuma wedding anchor",
    "ramoji film city event host",
    "corporate anchor hyderabad",
    "hitec city tech summit host",
    "bilingual english hindi anchor hyderabad",
    "marwari wedding anchor hyderabad",
    "destinaton wedding anchor telangana",
    "hni wedding host hyderabad",
    "luxury event emcee telangana",
    "banjara hills wedding host",
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
    title: `Best Anchor in Hyderabad | Elite Wedding & Corporate Host`,
    description: `4.9★ rated. 1,100+ events. Hyderabad's most trusted anchor for Taj Falaknuma Palace and Ramoji Film City mega-events. Impeccable bilingual English/Hindi execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Hyderabad — Anchor Yash Soni at Taj Falaknuma Palace` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Hyderabad | Anchor Yash Soni — 4.9★`,
    description: `Taj Falaknuma. Ramoji Film City. HITEC City. Hyderabad's premier bilingual event anchor. 1,100+ events. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Hyderabad | Luxury Heritage Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Luxury Wedding, Mega Events, Corporate Emcee, ${CITY}, Telangana, India`,
    "DC.coverage": `${CITY}, Telangana, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function HyderabadLayout({ children }) {
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
