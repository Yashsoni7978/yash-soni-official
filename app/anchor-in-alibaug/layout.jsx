// app/anchor-in-alibaug/layout.jsx
// Mumbai Elite Weekend Destination & Ultra-Luxury Coastal Anchor Layout

const CITY     = "Alibaug";
const REGION   = "Maharashtra";
const SLUG     = "anchor-in-alibaug";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "18.6414";
const LNG      = "72.8722";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/alibaug_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Alibaug",
    "Best Wedding Anchor Alibaug",
    "Alibaug Destination Wedding Host",
    "Mansion House Wedding Anchor",
    "Radisson Blu Alibaug Event Emcee",
    "Mumbai Elite Weekend Wedding Anchor",
    "Bilingual Emcee Alibaug",
    "Luxury Private Villa Event Host",
    "Coastal Wedding Anchor Maharashtra",
  ],
  description: `Anchor Yash Soni is Alibaug's premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly intimate, high-net-worth weekend destination weddings for Mumbai's billionaires and corporate elite across properties like The Mansion House and Radisson Blu. Flawless unscripted bilingual execution.`,
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
    streetAddress: "Mandwa-Alibaug Coastal Belt",
    addressLocality: CITY,
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    postalCode: "402201",
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
    { "@type": "City", name: "Alibaug" },
    { "@type": "City", name: "Mandwa" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "AdministrativeArea", name: "Maharashtra" },
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
      author: { "@type": "Person", name: "Corporate Director — Mumbai" },
      reviewBody: "Alibaug weddings are incredibly intimate and highly scrutinized because the guest list is pure VIP. Yash anchored our Sangeet at The Mansion House flawlessly. Phenomenal English dialect mixed with perfect timing—he didn't just host the event, he controlled the entire weekend.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Shah & Agarwal Families" },
      reviewBody: "We chose Radisson Blu for a 300-guest event. The challenge was transitioning the crowd from the massive lawn to the indoor parties dynamically. Yash was absolute magic. He brought a totally unscripted, high-voltage energy that kept the Mumbai crowd hyped till 3 AM.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Alibaug",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ultra-Luxury Villa Hosting", description: "Navigating highly intimate, VIP-heavy settings typical of Mumbai billionaire retreats" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mumbai Business Family Sangeets", description: "Bilingual hyper-interactive hype combining traditional aesthetics with high-society energy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Getaway Seminars", description: "Unscripted, executive-grade English moderation for high-stakes leadership offsites" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Radisson Blu // Mansion House Execution", description: "Seamless coordination with Alibaug's top 5-star properties and tight event timelines" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Alibaug Wedding Emcee"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 8+ years and 1,100+ events. Specialist in Alibaug's highly exclusive, VIP-dense luxury weddings, managing complex coastal logistics and Mumbai's high-net-worth business crowds.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Ultra-Luxury Intimate Pacing",
    "Mansion House Event Logistics",
    "Mumbai Billionaire Guest Demographics",
    "Bilingual VIP Moderation",
    "Coastal Open-Air Acoustic Control",
    "Cross-Cultural Ceremonies",
    "Executive Retreat Hosting",
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
  name: `Best Anchor in Alibaug | Luxury Villa & Coastal Wedding Host — Yash Soni`,
  headline: `Alibaug's Premier Event Anchor for Ultra-Luxury Mumbai VIP Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Alibaug destination weddings. Mastering highly intimate luxury villa acoustics, high-net-worth bilingual hosting, and unscripted VIP event flow.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, India` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Alibaug | Elite Weekend Destination Wedding Emcee`,
  description: `Looking for the best anchor in Alibaug? Anchor Yash Soni — 4.9★. Expert for The Mansion House, Radisson Blu, and ultra-luxury private villa weddings. Flawless unscripted bilingual hosting bridging deep cultural roots with high-voltage elite energy.`,
  keywords: [
    "anchor in alibaug",
    "best anchor in alibaug",
    "wedding anchor alibaug",
    "mansion house event host",
    "radisson blu alibaug wedding anchor",
    "coastal destination wedding anchor",
    "bilingual english hindi anchor alibaug",
    "vip wedding anchor maharashtra",
    "luxury event emcee alibaug",
    "mumbai elite wedding host alibaug",
    "corporate retreat host alibaug",
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
    title: `Best Anchor in Alibaug | Elite VIP Destination Wedding Host`,
    description: `4.9★ rated. Alibaug's premium anchor for highly intimate, ultra-luxury destination weddings and exclusive corporate retreats for Mumbai's elite.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Alibaug — Anchor Yash Soni at Luxury Coastal Villas` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Alibaug | Anchor Yash Soni — 4.9★`,
    description: `The Mansion House. Radisson Blu. Alibaug's premier bilingual event anchor for exclusive VIP Sangeets and luxury ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Alibaug | Luxury VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Coastal Wedding, VIP Events, ${CITY}, Maharashtra, India`,
    "DC.coverage": `${CITY}, Maharashtra, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function AlibaugLayout({ children }) {
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