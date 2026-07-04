import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-ooty/layout.jsx
// Ultra-Luxury Heritage Hill Destination Anchor Layout

const CITY     = "Ooty";
const REGION   = "Tamil Nadu";
const SLUG     = "anchor-in-ooty";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "11.4102";
const LNG      = "76.6950";
const OG_IMAGE = `https://${DOMAIN}/rose-petal-tree-background.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Ooty",
    "Best Wedding Anchor Ooty",
    "Ooty Destination Wedding Emcee",
    "Savoy Ooty Wedding Anchor",
    "Ferrnhills Royale Palace Emcee",
    "Nilgiris Luxury Wedding Anchor",
    "Bilingual Emcee Ooty",
    "Tea Estate Destination Wedding Host",
    "Corporate Retreat Anchor Ooty",
    "Bangalore Elite Wedding Host Ooty",
  ],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
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
    streetAddress: "Nilgiri Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
    postalCode: "643001",
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
    availableLanguage: ["Hindi","English", "Tamil"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Ooty" },
    { "@type": "City", name: "Coonoor" },
    { "@type": "City", name: "Coimbatore" },
    { "@type": "AdministrativeArea", name: "Tamil Nadu" },
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
      author: { "@type": "Person", name: "NRI Destination Wedding — USA" },
      reviewBody: "Hosting a colonial-themed wedding at Ferrnhills Royale Palace meant we needed someone with absolute poise and flawless English. Yash was the perfect choice. He managed the global guest list with incredible unscripted wit and authority.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Summit — Bangalore" },
      reviewBody: "We held a leadership retreat at Savoy. Yash moderated our gala evening with pure executive class. He is much more than a wedding anchor; he is a sophisticated moderator who understands corporate pedigree.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Ooty",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Savoy Heritage Hosting", description: "Executing highly prestigious, VIP-heavy events navigating Ooty's historical and colonial-era luxury logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tea Estate Sangeet Execution", description: "Bilingual English/Hindi bridging for high-net-worth families looking for a sophisticated mountain vibe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nilgiri Acoustic Mastery", description: "Defeating massive outdoor sound dispersion in sprawling mountain estates through intense stage command" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Leadership Offsite Moderation", description: "Unscripted, zero-notes hosting for high-stakes Bangalore tech summits and private MNC retreats" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Ooty Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Ooty's heritage luxury sector, executing flawless ceremonies at Savoy and Ferrnhills Royale Palace.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Savoy Ooty Protocol",
    "Heritage Hotel Logistics",
    "Mountain Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "NRI & Bangalore Elite Crowds",
    "Colonial Heritage Wedding Flow",
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
  "@id": `https://yashsoni.in/anchor-in-ooty/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Ooty | Savoy & Ferrnhills Emcee — Yash Soni`,
  headline: `Ooty's Premier Event Anchor for Ultra-Luxury Colonial Heritage Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Ooty destination weddings. Mastering prestigious properties like Savoy and Ferrnhills Royale Palace with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Tamil Nadu` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Ooty | Luxury Colonial Heritage Wedding Emcee`,
  description: `Looking for the best anchor in Ooty? Anchor Yash Soni — 4.9★. Expert for Savoy (IHCL), Ferrnhills Royale Palace, and ultra-prestigious tea estate weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in ooty",
    "best anchor in ooty",
    "wedding anchor ooty",
    "savoy ooty event host",
    "ferrnhills royale palace anchor",
    "nilgiris destination wedding anchor",
    "bilingual english hindi anchor ooty",
    "luxury event emcee tamil nadu",
    "bangalore wedding host ooty",
    "tea estate destination anchor",
    "cultural heritage host ooty",
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
    title: `Best Anchor in Ooty | Elite Colonial Heritage Destination Wedding Host`,
    description: `4.9★ rated. Ooty's premium anchor for highly prestigious destination weddings spanning the Nilgiri heritage corridors. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ooty — Anchor Yash Soni at Nilgiri Heritage Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Ooty | Anchor Yash Soni — 4.9★`,
    description: `Savoy Ooty. Ferrnhills Royale Palace. Ooty's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted mountain VIP ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Ooty | Nilgiri VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, VIP Events, ${CITY}, Tamil Nadu, India`,
    "DC.coverage": `${CITY}, Tamil Nadu, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Ooty?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Ooty. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Ooty?",
    a: "Yash Soni specialises in premium, high-energy events. In Ooty, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Ooty?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Ooty feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Ooty, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Ooty?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Ooty, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Ooty, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Ooty is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Ooty`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Ooty.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Ooty.` },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show and specific venue logistics." }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, personSchema, breadcrumbSchema, webPageSchema, howToSchema, faqSchema]) }} />
      <PageClient />
    </>
  );
}
