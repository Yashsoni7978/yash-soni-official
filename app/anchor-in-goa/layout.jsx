// app/anchor-in-goa/layout.jsx
// International Beach Destination & Luxury Sangeet Anchor Layout

const CITY     = "Goa";
const REGION   = "Goa";
const SLUG     = "anchor-in-goa";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "15.2993";
const LNG      = "74.1240";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/goa_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Goa",
    "Best Wedding Anchor Goa",
    "Goa Destination Wedding Host",
    "Taj Exotica Wedding Anchor",
    "ITC Grand Goa Sangeet Emcee",
    "Beach Wedding Anchor India",
    "Bilingual Emcee Goa",
    "Luxury Event Host Goa",
    "NRI Wedding Anchor Goa",
    "Corporate Retreat Host Goa",
  ],
  description: `Anchor Yash Soni is Goa's premier luxury destination wedding anchor — 4.9★ rated, 1,100+ events. Specialist in navigating massive beach-front acoustics, international NRI guest lists, and high-voltage Sangeets across properties like Taj Exotica, W Goa, and ITC Grand Goa.`,
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
    streetAddress: "North & South Goa Coastal Belt",
    addressLocality: CITY,
    addressRegion: "Goa",
    addressCountry: "IN",
    postalCode: "403001",
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
    { "@type": "City", name: "North Goa" },
    { "@type": "City", name: "South Goa" },
    { "@type": "AdministrativeArea", name: "Goa" },
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
      author: { "@type": "Person", name: "Chowdary Family (Dubai)" },
      reviewBody: "A beach wedding at Taj Exotica is stunning, but the ocean wind completely destroys normal sound systems. Yash knew exactly how to project his voice and physically control the crowd so our 400 guests stayed engaged during the Varmala. Absolute top-tier professional.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Mehta & Singh" },
      reviewBody: "Our Sangeet at W Goa was insane. Yash handled the transition from the formal family performances into an explosive, unscripted dance floor natively. He speaks perfect English for our international friends, but kept the deep Hindi traditions alive for the elders.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Goa",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Beach Wedding Hosting", description: "Navigating immense oceanfront acoustics and massive open-air resort setups" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Destination Sangeets", description: "Bilingual hyper-interactive hype combining traditional aesthetics with club-level energy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Getaway Seminars", description: "Unscripted, executive-grade English moderation for national offsites in Goa" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Exotica // ITC Event Execution", description: "Seamless coordination with 5-star hospitality timelines and sprawling property logistics" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Goa Wedding Emcee"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Goa's massive open-air luxury weddings, managing complex beach acoustics and high-net-worth bilingual networking.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Beachfront Acoustic Dispersion",
    "Taj Exotica Event Logistics",
    "W Goa High-Energy Sangeets",
    "Bilingual NRI Moderation",
    "Open-Air Timeline Pacing",
    "Cross-Cultural Ceremonies",
    "Luxury Resort Crowd Psychology",
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
  name: `Best Anchor in Goa | Taj Exotica & Luxury Beach Wedding Host — Yash Soni`,
  headline: `Goa's Premier Event Anchor for Ultra-Luxury Beach Destination Weddings & NRI Sangeets`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Goa destination weddings. Mastering massive oceanfront acoustics, high-net-worth bilingual hosting, and unscripted VIP logistics.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, India` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Goa | Beach Destination Wedding Emcee — Yash Soni`,
  description: `Looking for the best anchor in Goa? Anchor Yash Soni — 4.9★. Expert for Taj Exotica, ITC Grand, and ultra-luxury beach weddings. Flawless unscripted bilingual hosting bridging deep cultural roots with high-voltage NRI energy.`,
  keywords: [
    "anchor in goa",
    "best anchor in goa",
    "wedding anchor goa",
    "taj exotica event host",
    "itc grand goa wedding anchor",
    "beach destination wedding anchor",
    "bilingual english hindi anchor goa",
    "nri wedding anchor goa",
    "luxury event emcee goa",
    "sangeet anchor goa",
    "corporate retreat host goa",
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
    title: `Best Anchor in Goa | Elite Beach Destination Wedding Host`,
    description: `4.9★ rated. Goa's premium anchor for massive beachfront destination weddings and highly energetic NRI Sangeets. Defeating coastal acoustics with pure command.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Goa — Anchor Yash Soni at Beach Destination Weddings` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Goa | Anchor Yash Soni — 4.9★`,
    description: `Taj Exotica. ITC Grand. W Goa. Goa's premier bilingual event anchor for massive, unscripted beach Sangeets and luxury ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-GA",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Goa | Coastal Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Coastal Wedding, NRI Events, ${CITY}, Goa, India`,
    "DC.coverage": `${CITY}, Goa, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function GoaLayout({ children }) {
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