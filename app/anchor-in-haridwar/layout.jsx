/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-haridwar/layout.jsx
// Ultra-Luxury Spiritual Heritage Destination Anchor Layout

const CITY     = "Haridwar";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-haridwar";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "29.9457";
const LNG      = "78.1642";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/haridwar_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Haridwar",
    "Best Wedding Anchor Haridwar",
    "Haridwar Destination Wedding Emcee",
    "Pilibhit House Wedding Anchor",
    "Ganges Luxury Event Host",
    "Spiritual Heritage Wedding Anchor",
    "Bilingual Emcee Haridwar",
    "VIP Ganga Aarti Host",
    "Corporate Retreat Anchor Haridwar",
    "Delhi Elite Spiritual Wedding Host",
  ],
  description: `Anchor Yash Soni is Haridwar's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, high-net-worth spiritual destination weddings across iconic properties like Pilibhit House (IHCL). Flawless unscripted bilingual moderation executing elite Delhi NCR VIP protocols by the Ganges.`,
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
    streetAddress: "Ganges Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "249401",
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
    availableLanguage: ["Hindi","English", "Sanskrit"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Haridwar" },
    { "@type": "City", name: "Rishikesh" },
    { "@type": "AdministrativeArea", name: "Uttarakhand" },
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
      author: { "@type": "Person", name: "NRI Destination Wedding — London" },
      reviewBody: "Hosting at Pilibhit House required absolute reverence but also the ability to run a highly sophisticated timeline. Yash was flawless. His English narration of the Ganga Aarti brought the entire international guest list to tears. Astounding stage command.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Heritage Initiative" },
      reviewBody: "We held an executive spiritual retreat on the ghats. Yash moderated the multi-day event with incredible grace. He possesses an authentic understanding of spiritual logistics combined with raw corporate polish.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Haridwar",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pilibhit House Hosting", description: "Executing highly prestigious, VIP events navigating extreme spiritual and luxury heritage logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VIP Ganga Aarti Execution", description: "Bilingual English/Sanskrit/Hindi bridging translating profound rituals for elite corporate families" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Satvik Event Crowd Command", description: "Generating intense, respectful momentum for massive un-amplified spiritual retreats" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Serenity Moderation", description: "Unscripted, highly articulate hosting for high-stakes leadership symposiums by the Ganges" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Haridwar Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Haridwar's high-altitude spiritual luxury sector, executing flawless bilingual ceremonies at Pilibhit House and the Ganges ghats.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Pilibhit House Protocol",
    "Ghat Logistics",
    "Ganges Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi NCR Executive Crowds",
    "Spiritual Retreat Wedding Flow",
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
  name: `Best Anchor in Haridwar | Pilibhit House & Ganges Emcee — Yash Soni`,
  headline: `Haridwar's Premier Event Anchor for Ultra-Luxury Spiritual Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Haridwar destination weddings. Mastering prestigious properties like Pilibhit House and the Ganges Ghats with unscripted VIP spiritual hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Haridwar | Luxury Spiritual Wedding Emcee`,
  description: `Looking for the best anchor in Haridwar? Anchor Yash Soni — 4.9★. Expert for Pilibhit House, Ganges Aarti logistics, and ultra-prestigious spiritual destination weddings. Flawless unscripted bilingual hosting.`,
  keywords: [
    "anchor in haridwar",
    "best anchor in haridwar",
    "wedding anchor haridwar",
    "pilibhit house wedding host",
    "ganges destination wedding anchor",
    "haridwar ghat event anchor",
    "bilingual english hindi anchor haridwar",
    "luxury event emcee uttarakhand",
    "delhi ncr wedding host haridwar",
    "nri destination anchor",
    "spiritual retreat host haridwar",
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
    title: `Best Anchor in Haridwar | Elite Spiritual Destination Wedding Host`,
    description: `4.9★ rated. Haridwar's premium anchor for highly prestigious destination weddings intersecting the Ganges. Unscripted bilingual spiritual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Haridwar — Anchor Yash Soni at Ganges Luxury Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Haridwar | Anchor Yash Soni — 4.9★`,
    description: `Pilibhit House. The Ganges Ghats. Haridwar's premier bilingual event anchor for exclusive VIP retreats and heavily restricted spiritual ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Haridwar | Ganges VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Spiritual Wedding, VIP Events, ${CITY}, Uttarakhand, India`,
    "DC.coverage": `${CITY}, Uttarakhand, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function HaridwarLayout({ children }) {
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
