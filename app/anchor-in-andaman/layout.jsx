/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-andaman/layout.jsx
// Ultra-Luxury Remote Island Destination Anchor Layout

const CITY     = "Andaman";
const REGION   = "Andaman & Nicobar Islands";
const SLUG     = "anchor-in-andaman";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "11.6670";
const LNG      = "92.7359";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/andaman_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Andaman",
    "Best Wedding Anchor Andaman",
    "Havelock Island Destination Wedding Host",
    "Taj Exotica Radhanagar Wedding Anchor",
    "Andaman Luxury Resort Emcee",
    "Private Island Wedding Anchor India",
    "Bilingual Emcee Port Blair",
    "Ultra-Luxury Beach Event Host",
    "NRI Wedding Anchor Andaman",
  ],
  description: `Anchor Yash Soni is the Andaman Islands' premier ultra-luxury wedding anchor — 4.9★ rated, 1,100+ events. Specialist in executing highly exclusive, high-net-worth private island destination weddings out of Taj Exotica Havelock. Flawless unscripted bilingual executive execution.`,
  url: FULL_URL,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  priceRange: "₹₹₹₹₹",
  image: OG_IMAGE,
  logo: `https://${DOMAIN}/logo.webp`,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
    "https://g.co/kgs/anchoryashsoni",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Havelock & Port Blair Island Circuit",
    addressLocality: CITY,
    addressRegion: "Andaman & Nicobar",
    addressCountry: "IN",
    postalCode: "744101",
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
    { "@type": "City", name: "Havelock Island" },
    { "@type": "City", name: "Port Blair" },
    { "@type": "City", name: "Neil Island" },
    { "@type": "AdministrativeArea", name: "Andaman" },
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
      author: { "@type": "Person", name: "Executive family — UAE" },
      reviewBody: "Flying our 100 closest guests to Havelock was a logistical mountain. We needed an anchor who didn't just 'talk' but actively managed the entire flow of the island resort. Yash was brilliant. His English delivery for our international guests was sharper than any host we've seen in Dubai.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Singhania Foundation" },
      reviewBody: "Taj Exotica Havelock is massive and entirely open to the sea. The acoustics are terrible for ordinary speakers. Yash used sheer stage dominance to physically pull our guests together during the dusk Varmala, making it feel perfectly intimate against the ocean.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Andaman",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Island Emcee Logistics", description: "Flawless timeline management across remote luxury properties like Taj Exotica Havelock" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Net-Worth NRI Sangeets", description: "Executive bilingual hosting merging international VIPs with deep traditional Indian aesthetics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beachfront Acoustic Condensing", description: "Overcoming infinite ocean wind to create extreme intimacy during the main Pheras/Varmala" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Andaman Wedding Emcee"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 1,100+ events. Specialist in the Andaman Islands' highly restrictive, ultra-luxury private island weddings. Translating VIP intimacy globally.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Havelock Island Logistics",
    "Taj Exotica Resort Pacing",
    "Bilingual Executive Moderation",
    "Ultra-Luxury Curated Guest Lists",
    "Remote Island Acoustic Management",
    "Cross-Cultural Ceremonies",
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
  name: `Best Anchor in Andaman | Luxury Island & Havelock Emcee — Yash Soni`,
  headline: `The Andaman's Premier Event Anchor for Ultra-Exclusive VIP Island Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The absolute expert for Andaman destination weddings. Mastering Havelock logistics, Taj Exotica beach acoustics, and elite unscripted VIP event flow.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, India` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Andaman | Elite Island Destination Host`,
  description: `Looking for the best anchor in Andaman? Anchor Yash Soni — 4.9★. Expert for Taj Exotica Havelock and ultra-luxury private island weddings. Bilingual, executive-grade hosting for global VIPs.`,
  keywords: [
    "anchor in andaman",
    "best anchor in andaman",
    "wedding anchor andaman",
    "havelock island event host",
    "taj exotica andaman wedding anchor",
    "private island destination wedding anchor",
    "bilingual english hindi anchor port blair",
    "vip wedding anchor andaman",
    "luxury beach emcee india",
    "nri wedding host andaman",
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
    title: `Best Anchor in Andaman | Ultra-Luxury Island Wedding Host`,
    description: `4.9★ rated. Andaman's premium anchor for highly intimate, ultra-luxury destination weddings at Havelock. Master of unscripted executive bilingual hosting.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Andaman — Anchor Yash Soni at Beach Island Weddings` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Andaman | Anchor Yash Soni — 4.9★`,
    description: `Taj Exotica. Havelock. Andaman's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted island ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-AN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Andaman | Private Island Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Island Wedding, VIP Events, ${CITY}, India`,
    "DC.coverage": `${CITY}, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────
export default function AndamanLayout({ children }) {
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
