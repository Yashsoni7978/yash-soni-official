/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-mount-abu/layout.jsx
// Hill Station Wedding Anchor — Full Triple Schema + Rich SEO Layout

const CITY     = "Mount Abu";
const REGION   = "Sirohi, South Rajasthan";
const SLUG     = "anchor-in-mount-abu";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "24.5926";
const LNG      = "72.7156";
const OG_IMAGE = `https://${DOMAIN}/varmala-fireworks-color-shots.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Mount Abu",
    "Best Wedding Anchor Mount Abu",
    "Hill Station Wedding Anchor Rajasthan",
    "Cama Rajputana Club Event Host",
    "Nakki Lake Wedding Anchor",
    "Hotel Hillock Wedding Emcee",
    "Jain Heritage Wedding Anchor Mount Abu",
    "Aravalli Hill Wedding Host",
    "Mount Abu Destination Wedding Anchor",
    "Mount Abu Sangeet Emcee",
    "Gujarat Rajasthan Wedding Bridge Anchor",
    "Dilwara Temple Circuit Event Host",
  ],
  description: `Anchor Yash Soni is Mount Abu's premier hill station destination wedding anchor — 4.9★ rated, 1,100+ events, 8+ years experience. Specialist in Aravalli hilltop weddings at The Cama Rajputana Club, Hotel Hillock, and Nakki Lake properties. Bilingual Hindi/English, fully unscripted, uniquely experienced with Jain ceremony protocol, Gujarat-Rajasthan cultural bridging, and the cool mountain venue acoustic dynamics of Rajasthan's only hill station.`,
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
    streetAddress: "Nakki Lake Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "307501",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LAT,
    longitude: LNG,
  },
  hasMap: `https://maps.google.com/?q=${LAT},${LNG}`,
  elevation: "1220",
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
    availableLanguage: ["Hindi","English","Gujarati"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Mount Abu" },
    { "@type": "City", name: "Abu Road" },
    { "@type": "City", name: "Sirohi" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "AdministrativeArea", name: "Gujarat" },
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
      author: { "@type": "Person", name: "Shah Family" },
      reviewBody: "Yash was completely attuned to our Jain community's values and ceremonial structure. The event felt both joyful and dignified throughout.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Mehta Family" },
      reviewBody: "The Nakki Lake Sangeet was a dream. Yash read the environment completely — building the energy through the mist and the lake atmosphere with masterful timing.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Mount Abu",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hilltop Heritage Wedding Anchor Mount Abu", description: "Aravalli hilltop wedding ceremonies at Cama Rajputana Club and Hotel Hillock" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nakki Lake Sangeet Emcee", description: "Lakeside Sangeet events at Mount Abu's Nakki Lake properties" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jain Heritage Wedding Host Mount Abu", description: "Jain community destination weddings with full ceremony protocol awareness" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gujarat Rajasthan Corporate Retreat Host", description: "Corporate events at Mount Abu heritage properties for cross-state teams" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Yash Soni Mount Abu Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 8+ years and 1,100+ events across Rajasthan, India. Specialist in Jain ceremony hosting, Gujarat-Rajasthan bilingual events, hill station venue acoustics, and NRI destination wedding management.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Jain Ceremony Protocol and Wedding Hosting",
    "Hill Station Open-Air Acoustic Management",
    "Nakki Lake Venue Event Dynamics",
    "Gujarat Rajasthan Cultural Bilingualism",
    "Cama Rajputana Club Heritage Protocol",
    "NRI Destination Wedding Management",
    "Bilingual Hindi English Gujarati Emceeing",
    "Mountain Venue Crowd Command Technique",
    "Year-Round Hill Station Event Management",
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
    { "@type": "ListItem", position: 3, name: "South Rajasthan Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#south` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Mount Abu | Jain Heritage & Hill Station Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Mount Abu — Aravalli Hill Station Weddings, Jain Heritage Ceremonies & Nakki Lake Sangeets`,
  description: `Anchor Yash Soni — 4.9★ rated, 1,100+ events. Premier hill station wedding anchor for Mount Abu — Cama Rajputana Club, Nakki Lake & Hotel Hillock. Jain ceremony protocol. Gujarat-Rajasthan bilingual. Unscripted.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Sirohi, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Mount Abu | Jain Heritage Hill Station Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Mount Abu? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for Aravalli hilltop Jain destination weddings at Cama Rajputana Club & Nakki Lake. Bilingual, unscripted, Gujarat-Rajasthan fluent.`,
  keywords: [
    "anchor in mount abu",
    "best anchor in mount abu",
    "wedding anchor mount abu",
    "hill station wedding anchor rajasthan",
    "nakki lake wedding anchor",
    "cama rajputana club event host",
    "hotel hillock wedding emcee",
    "jain wedding anchor mount abu",
    "jain destination wedding host rajasthan",
    "aravalli hill wedding anchor",
    "mount abu destination wedding",
    "gujarat rajasthan wedding anchor",
    "bilingual anchor mount abu",
    "nri wedding anchor mount abu",
    "mount abu sangeet emcee",
    "mount abu corporate retreat host",
    "anchor yash",
    "anchor yash soni",
    "best anchor rajasthan hill station",
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
    title: `Best Anchor in Mount Abu | Jain Heritage Hill Station Wedding Host`,
    description: `4.9★ rated. 1,100+ events. Mount Abu's most trusted anchor — Cama Rajputana Club, Nakki Lake & Hotel Hillock. Jain ceremony protocol. Gujarat-Rajasthan bilingual. Unscripted.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Mount Abu — Anchor Yash Soni at Nakki Lake, Aravalli Hills` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Mount Abu | Anchor Yash Soni — 4.9★`,
    description: `Cama Rajputana Club. Nakki Lake. Rajasthan's only hill station's most trusted Jain heritage wedding anchor. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Mount Abu | Hill Station Wedding Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Jain Heritage Wedding, Hill Station Emcee, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Sirohi, Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function MountAbuLayout({ children }) {
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
