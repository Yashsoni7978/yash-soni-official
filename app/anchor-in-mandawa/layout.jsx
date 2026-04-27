// app/anchor-in-mandawa/layout.jsx
// Shekhawati Haveli Wedding Anchor — Full Triple Schema + Rich SEO Layout

const CITY     = "Mandawa";
const REGION   = "Shekhawati, Jhunjhunu";
const SLUG     = "anchor-in-mandawa";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "28.0538";
const LNG      = "75.1477";
const OG_IMAGE = `https://${DOMAIN}/bride-groom-fort-shoot.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Mandawa",
    "Best Wedding Anchor Mandawa",
    "Shekhawati Haveli Wedding Host",
    "Castle Mandawa Event Anchor",
    "Fresco Haveli Wedding Emcee",
    "Murmuria Haveli Anchor Rajasthan",
    "Open Air Gallery Wedding Host",
    "Marwari Heritage Wedding Anchor Shekhawati",
    "Mandawa Destination Event Anchor",
    "Dundlod Fort Wedding Host",
    "Nawalgarh Heritage Anchor",
  ],
  description: `Anchor Yash Soni is Mandawa's premier Shekhawati destination wedding anchor — 4.9★ rated, 1,100+ events, 8+ years experience. Specialist in open-air fresco haveli weddings at Castle Mandawa, Murmuria Haveli, and the wider Shekhawati belt. Bilingual Hindi/English, fully unscripted, deeply experienced with Marwari mercantile family culture and heritage haveli ceremony staging.`,
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
    streetAddress: "Castle Mandawa Circuit",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "333704",
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
    { "@type": "City", name: "Mandawa" },
    { "@type": "City", name: "Nawalgarh" },
    { "@type": "City", name: "Jhunjhunu" },
    { "@type": "City", name: "Fatehpur Shekhawati" },
    { "@type": "City", name: "Dundlod" },
    { "@type": "AdministrativeArea", name: "Shekhawati" },
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
      author: { "@type": "Person", name: "Birla Family" },
      reviewBody: "Yash's references to the Marwari heritage and the fresco tradition were accurate and deeply felt. The elders were genuinely moved.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Poddar Family" },
      reviewBody: "The Castle Mandawa rooftop Sangeet was a moment we will never forget. Yash held the crowd for four hours in a setting that would overwhelm lesser anchors.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Mandawa & Shekhawati",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haveli Fresco Wedding Anchor Mandawa", description: "Royal painted haveli courtyard wedding ceremonies at Castle Mandawa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rooftop Sangeet Emcee Mandawa", description: "Castle Mandawa rooftop Sangeet events with Shekhawati desert horizon" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marwari Heritage Pre-Wedding Host", description: "Fresco-courtyard Mehndi and Haldi events for Shekhawati destination families" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heritage Cultural Summit Host", description: "Art connoisseur and heritage tourism events at Shekhawati's UNESCO-quality frescoes" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Yash Soni Anchor Rajasthan"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events across Rajasthan, India. Specialist in heritage destination weddings, Marwari ceremony hosting, and bilingual English/Hindi event management.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Shekhawati Heritage Wedding Anchoring",
    "Haveli Fresco Courtyard Events",
    "Marwari Mercantile Family Ceremonies",
    "Castle Mandawa Event Hosting Protocol",
    "Bilingual Hindi English Emceeing",
    "Open-Air Heritage Art Venue Acoustics",
    "Destination Wedding Anchoring Rajasthan",
    "International Heritage Art Tourism Events",
    "Marwari Business Family Cultural Register",
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
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: "Shekhawati Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#shekhawati` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Mandawa | Shekhawati Fresco Haveli Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Mandawa, Castle Mandawa & Shekhawati Heritage Havelis`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier Shekhawati fresco haveli wedding anchor for Castle Mandawa, Murmuria Haveli & the whole Shekhawati belt. Bilingual, unscripted, Marwari heritage specialist.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Shekhawati, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Mandawa | Shekhawati Fresco Haveli Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Mandawa? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for Shekhawati haveli destination weddings at Castle Mandawa & Murmuria Haveli. Bilingual, unscripted, Marwari heritage specialist.`,
  keywords: [
    "anchor in mandawa",
    "best anchor in mandawa",
    "wedding anchor mandawa",
    "shekhawati wedding anchor",
    "castle mandawa event host",
    "fresco haveli wedding anchor",
    "murmuria haveli anchor",
    "open air gallery wedding emcee",
    "marwari heritage wedding anchor",
    "shekhawati destination wedding",
    "nawalgarh heritage anchor",
    "dundlod fort wedding host",
    "mandawa castle sangeet emcee",
    "bilingual anchor mandawa",
    "destination wedding anchor shekhawati rajasthan",
    "anchor yash",
    "anchor yash soni",
    "best anchor rajasthan shekhawati",
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
    title: `Best Anchor in Mandawa | Shekhawati Fresco Haveli Wedding Host`,
    description: `4.9★ rated. 1,100+ events. Premier anchor for Shekhawati fresco destination weddings at Castle Mandawa & Murmuria Haveli. Marwari heritage fluency. Bilingual, unscripted.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Mandawa — Anchor Yash Soni at Castle Mandawa, Shekhawati` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Mandawa | Anchor Yash Soni — 4.9★`,
    description: `Castle Mandawa. Murmuria Haveli. Shekhawati's most trusted Marwari heritage wedding anchor. 1,100+ events. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Mandawa | Shekhawati Heritage Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Marwari Emcee, Shekhawati, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Shekhawati, Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function MandawaLayout({ children }) {
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
