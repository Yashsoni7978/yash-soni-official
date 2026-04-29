/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-rishikesh/layout.jsx
// Ultra-Luxury Satvik Destination & Himalayan Foothills Anchor Layout

const CITY     = "Rishikesh";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-rishikesh";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "30.0869";
const LNG      = "78.2676";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/rishikesh_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Rishikesh",
    "Best Wedding Anchor Rishikesh",
    "Rishikesh Destination Wedding Host",
    "Taj Rishikesh Wedding Anchor",
    "Satvik Wedding Anchor Uttarakhand",
    "Himalayan Wellness Wedding Emcee",
    "Bilingual Emcee Rishikesh",
    "Luxury Riverside Event Anchor",
    "Aloha on the Ganges Wedding Host",
    "Spiritual Destination Wedding Emcee",
  ],
  description: `Anchor Yash Soni is Rishikesh's premier luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in navigating strict Satvik (no-alcohol) timelines and extreme mountain acoustics at properties like Taj Rishikesh and Roseate Ganges. Flawless unscripted bilingual moderation merging elite Delhi NCR VIPs with deep spiritual heritage.`,
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
    streetAddress: "Ganges Valley Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "249201",
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
    { "@type": "City", name: "Rishikesh" },
    { "@type": "City", name: "Haridwar" },
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
      author: { "@type": "Person", name: "Bansal Family — Delhi" },
      reviewBody: "Hosting a Satvik wedding at Taj Rishikesh was beautiful but we were terrified the Sangeet would be boring without alcohol. Yash completely changed the game. He brought an insane level of pure, organic hype using his voice and crowd interaction. The dance floor was packed till the venue shut down.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Venture Capital Summit — Gurgaon" },
      reviewBody: "We held a 3-day wellness and strategy summit at The Roseate Ganges. Yash anchored the entire schedule. His English is exceptionally sharp, and his ability to pace a room without relying on notes made him look like one of the executives. True professional.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Rishikesh",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Satvik Sangeet Hype Generation", description: "Creating massive, explosive organic party momentum without relying on alcohol or basic DJ tracks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Rishikesh // Roseate Hosting", description: "Navigating Himalayan valley acoustics and ultra-luxury spiritual retreat protocols" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spiritual Cross-Cultural Ceremonies", description: "Bilingual English/Hindi bridging for modern executives engaging in deeply traditional Pheras" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Wellness Offsites", description: "Unscripted, highly articulate moderation for leadership retreats in the Ganges foothills" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Rishikesh Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Rishikesh's luxury wellness sector, overcoming strictly Satvik environments to produce high-voltage events for VIPs at Taj Rishikesh.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Satvik Event Momentum",
    "Taj Rishikesh Logistics",
    "Himalayan Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Spiritual Retreat Timelines",
    "Delhi NCR Executive Crowds",
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
  name: `Best Anchor in Rishikesh | Taj Rishikesh & Satvik Host — Yash Soni`,
  headline: `Rishikesh's Premier Event Anchor for Ultra-Luxury Satvik Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Rishikesh destination weddings. Mastering Satvik (no-alcohol) party momentum, Taj Rishikesh protocols, and elite bilingual hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Rishikesh | Elite Satvik Destination Wedding Emcee`,
  description: `Looking for the best anchor in Rishikesh? Anchor Yash Soni — 4.9★. Expert for Taj Rishikesh, The Roseate, and luxury Satvik destination weddings. Flawless unscripted bilingual hosting driving pure organic energy.`,
  keywords: [
    "anchor in rishikesh",
    "best anchor in rishikesh",
    "wedding anchor rishikesh",
    "taj rishikesh event host",
    "satvik wedding anchor",
    "spiritual destination wedding anchor",
    "bilingual english hindi anchor uttarakhand",
    "luxury wellness wedding anchor",
    "nri wedding anchor rishikesh",
    "delhi ncr wedding host rishikesh",
    "corporate wellness retreat host",
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
    title: `Best Anchor in Rishikesh | Luxury Riverside Destination Host`,
    description: `4.9★ rated. Rishikesh's premium anchor for highly exclusive Satvik destination weddings at Taj Rishikesh. Driving massive, unscripted organic energy for elite crowds.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Rishikesh — Anchor Yash Soni at Himalayan Destinations` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Rishikesh | Anchor Yash Soni — 4.9★`,
    description: `Taj Rishikesh. The Roseate. Rishikesh's premier bilingual event anchor for exclusive VIP Satvik Sangeets and luxury riverside ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Rishikesh | Satvik VIP Destination Emcee — Yash Soni`,
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
export default function RishikeshLayout({ children }) {
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
