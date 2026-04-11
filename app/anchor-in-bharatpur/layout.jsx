// app/anchor-in-bharatpur/layout.jsx
// Fort Heritage & Golden Triangle Wedding Anchor — Full Schema + Rich SEO Layout

const CITY     = "Bharatpur";
const REGION   = "Eastern Rajasthan, Golden Triangle";
const SLUG     = "anchor-in-bharatpur";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.2152";
const LNG      = "77.5030";
const OG_IMAGE = `https://${DOMAIN}/vintage-car-couple-shoot.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Bharatpur",
    "Best Wedding Anchor Bharatpur",
    "Lohagarh Fort Wedding Anchor",
    "Laxmi Vilas Palace Event Host",
    "Keoladeo Bird Sanctuary Wedding Anchor",
    "Braj Heritage Wedding Emcee",
    "Golden Triangle Wedding Anchor",
    "Brij Bhoomi Event Host Rajasthan",
    "Deeg Palace Wedding Anchor",
    "The Bagh Heritage Wedding Anchor",
    "Bharatpur Jat Heritage Event Host",
    "Agra Jaipur Corridor Anchor",
  ],
  description: `Anchor Yash Soni is Bharatpur's premier destination wedding and heritage event anchor — 4.9★ rated, 1,100+ events, 8+ years experience. Specialist in fort heritage weddings at Lohagarh Fort (India's only unconquered fort) and royal ceremonies at Laxmi Vilas Palace. Bilingual Hindi/English, fully unscripted, strategically positioned at the Agra-Jaipur-Delhi Golden Triangle heritage corridor with deep Braj cultural fluency.`,
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
    streetAddress: "Lohagarh Fort Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "321001",
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
    { "@type": "City", name: "Bharatpur" },
    { "@type": "City", name: "Deeg" },
    { "@type": "City", name: "Keoladeo" },
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "AdministrativeArea", name: "Braj Region" },
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
      author: { "@type": "Person", name: "Singhania Family" },
      reviewBody: "Yash understood that Lohagarh was not just a beautiful venue but a statement about our heritage. His references to the fort's history were specific and accurate. The family felt genuinely honoured.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Agarwal Family" },
      reviewBody: "The Laxmi Vilas Sangeet ran from 7pm to midnight without dropping energy once. 300 guests from Delhi, Agra and Jaipur — Yash managed all three communities with complete authority.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Bharatpur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lohagarh Fort Heritage Wedding Anchor", description: "India's only unconquered fort wedding ceremonies — Jat heritage fluency" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laxmi Vilas Palace Sangeet Emcee", description: "Colonial heritage garden Sangeet events with multi-city guest management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Golden Triangle Corporate Retreat Host", description: "Delhi-Agra-Jaipur corporate events at Bharatpur heritage properties" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Braj Heritage Pre-Wedding Event Host", description: "Mehndi and Haldi events with Braj devotional cultural warmth" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Yash Soni Bharatpur Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events across Rajasthan, India. Specialist in fort heritage weddings, Braj cultural events, Golden Triangle multi-city guest management, and bilingual English/Hindi destination wedding hosting.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Lohagarh Fort Heritage Identity and Jat Community Protocol",
    "Braj Regional Cultural References and Vaishnava Tradition",
    "Golden Triangle Multi-City Guest Management",
    "Keoladeo Sanctuary Environmental Event Protocol",
    "Laxmi Vilas Palace Heritage Hosting Register",
    "Delhi NCR Metropolitan and Heritage Family Bilingualism",
    "Destination Wedding Corporate Retreat Anchoring",
    "Bilingual Hindi English Emceeing",
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
    { "@type": "ListItem", position: 3, name: "Eastern Rajasthan Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#eastern` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Bharatpur | Lohagarh Fort & Golden Triangle Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Bharatpur — Lohagarh Fort, Laxmi Vilas Palace & the Golden Triangle Heritage Circuit`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier anchor for Bharatpur's Lohagarh Fort weddings & Laxmi Vilas Palace Sangeets. Braj cultural fluency. Delhi-Agra-Jaipur guest management. Bilingual, unscripted.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Eastern Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Bharatpur | Lohagarh Fort Heritage Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Bharatpur? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for Lohagarh Fort weddings & Laxmi Vilas Palace Sangeets. Braj cultural fluency, Delhi-Agra-Jaipur guest management, bilingual, unscripted.`,
  keywords: [
    "anchor in bharatpur",
    "best anchor in bharatpur",
    "wedding anchor bharatpur",
    "lohagarh fort wedding anchor",
    "laxmi vilas palace event host",
    "heritage wedding anchor bharatpur",
    "braj wedding anchor",
    "braj heritage emcee",
    "destination wedding bharatpur",
    "golden triangle wedding anchor",
    "agra jaipur delhi corridor anchor",
    "keoladeo bird sanctuary wedding",
    "brij bhoomi wedding emcee",
    "bharatpur jat community anchor",
    "deeg palace wedding host",
    "the bagh heritage wedding",
    "bilingual anchor bharatpur",
    "nri wedding anchor bharatpur eastern rajasthan",
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
    title: `Best Anchor in Bharatpur | Lohagarh Fort Heritage Wedding Host`,
    description: `4.9★ rated. 1,100+ events. Bharatpur's most trusted anchor — Lohagarh Fort (India's only unconquered fort), Laxmi Vilas Palace & Keoladeo. Braj cultural fluency. Bilingual, unscripted.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Bharatpur — Anchor Yash Soni at Lohagarh Fort, Golden Triangle` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Bharatpur | Anchor Yash Soni — 4.9★`,
    description: `Lohagarh Fort. Laxmi Vilas Palace. Keoladeo UNESCO. India's Golden Triangle gateway's most trusted heritage wedding anchor.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Bharatpur | Fort Heritage Wedding Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Fort Emcee, Braj Culture, Golden Triangle, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Eastern Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function BharatpurLayout({ children }) {
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