// app/anchor-in-varanasi/layout.jsx
// Ultra-Luxury Heritage & Spiritual Destination Anchor Layout

const CITY     = "Varanasi";
const REGION   = "Uttar Pradesh";
const SLUG     = "anchor-in-varanasi";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "25.3176";
const LNG      = "83.0062";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/varanasi_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Varanasi",
    "Best Wedding Anchor Varanasi",
    "BrijRama Palace Wedding Emcee",
    "Taj Nadesar Palace Anchor",
    "Ghats Wedding Host Varanasi",
    "Spiritual Destination Wedding Anchor UP",
    "Bilingual Emcee Kashi",
    "Luxury Heritage Event Host",
    "Corporate Anchor Varanasi",
    "NRI Destination Wedding Varanasi",
  ],
  description: `Anchor Yash Soni is Varanasi's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly prestigious, spiritually profound destination weddings across iconic properties like Taj Nadesar Palace and BrijRama Palace. Flawless unscripted bilingual execution honoring deep Kashi heritage.`,
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
    streetAddress: "Kashi Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    postalCode: "221001",
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
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
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
      author: { "@type": "Person", name: "NRI Family — London" },
      reviewBody: "Hosting a wedding on the ghats of Varanasi at BrijRama Palace is incredibly complex logistically. We needed someone who could translate the immense depth of the rituals for our UK guests without turning it into a lecture. Yash's bilingual anchoring was absolute perfection. He commanded the space elegantly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Group — Mumbai" },
      reviewBody: "We held an executive strategy retreat and spiritual trip in Varanasi. Yash anchored our evening panels at Taj Nadesar Palace. He doesn't rely on paper notes at all. His ability to moderate high-level discussions while respecting the city's aura is unmatched.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Varanasi",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ghats Ceremony Hosting", description: "Bilingual English/Hindi ceremonial bridging during complex spiritual Varmalas on the Ganges" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Nadesar & BrijRama Protocol", description: "Navigating ultra-luxury heritage property constraints and VIP guest list management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Sangeet Management", description: "Creating explosive, dignified Sangeet energy crossing cultural boundaries without 'club' gimmicks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Corporate Summits", description: "Unscripted moderation for highly intellectual leadership retreats visiting Kashi" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Varanasi Emcee"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Varanasi's highly spiritual heritage sector, executing flawless cross-cultural ceremonies at Taj Nadesar Palace and BrijRama.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "BrijRama Palace Logistics",
    "Taj Nadesar Protocol",
    "Ganges Ghats Acoustics",
    "Spiritual Ceremony Moderation",
    "Bilingual NRI Hosting",
    "Heritage Cross-Cultural Events",
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
  name: `Best Anchor in Varanasi | Taj Nadesar & BrijRama Emcee — Yash Soni`,
  headline: `Varanasi's Premier Event Anchor for Ultra-Luxury Spiritual Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Varanasi destination weddings. Mastering prestigious properties like Taj Nadesar Palace and BrijRama with unscripted bilingual hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttar Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Varanasi | Heritage Spiritual Wedding Host`,
  description: `Looking for the best anchor in Varanasi? Anchor Yash Soni — 4.9★. Expert for Taj Nadesar Palace, BrijRama, and heritage Kashi weddings. Flawless bilingual hosting merging modern VIPs with deep traditions.`,
  keywords: [
    "anchor in varanasi",
    "best anchor in varanasi",
    "wedding anchor varanasi",
    "taj nadesar palace event host",
    "brijrama palace wedding anchor",
    "heritage destination wedding anchor up",
    "bilingual english hindi anchor kashi",
    "spiritual wedding anchor varanasi",
    "nri luxury event emcee varanasi",
    "corporate retreat host varanasi",
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
    title: `Best Anchor in Varanasi | Elite Spiritual Heritage Wedding Host`,
    description: `4.9★ rated. Varanasi's premium anchor for highly profound destination weddings at Taj Nadesar Palace and BrijRama. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Varanasi — Anchor Yash Soni at Kashi Heritage Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Varanasi | Anchor Yash Soni — 4.9★`,
    description: `BrijRama Palace. Taj Nadesar. Varanasi's premier bilingual event anchor bridging international VIPs with deep spiritual traditions on the Ganges.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Varanasi | Heritage Spiritual VIP Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Spiritual Wedding, VIP Events, ${CITY}, Uttar Pradesh, India`,
    "DC.coverage": `${CITY}, Uttar Pradesh, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function VaranasiLayout({ children }) {
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