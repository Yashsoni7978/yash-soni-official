import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-agra/layout.jsx
// Ultra-Luxury Heritage & Taj Mahal Destination Anchor Layout

const CITY     = "Agra";
const REGION   = "Uttar Pradesh";
const SLUG     = "anchor-in-agra";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.1767";
const LNG      = "78.0081";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/agra_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Agra",
    "Best Wedding Anchor Agra",
    "Agra Destination Wedding Host",
    "Oberoi Amarvilas Wedding Anchor",
    "Taj Mahal View Event Emcee",
    "Heritage Wedding Anchor Uttar Pradesh",
    "Bilingual Emcee Agra",
    "Luxury Royal Wedding Host",
    "Corporate Retreat Anchor Agra",
    "ITC Mughal Wedding Anchor",
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
    streetAddress: "Taj East Gate Road Corridors",
    addressLocality: CITY,
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    postalCode: "282001",
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
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
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
      author: { "@type": "Person", name: "Corporate Director — Delhi NCR" },
      reviewBody: "Hosting a sunset reception at The Oberoi Amarvilas requires an anchor who understands immense prestige. Yash’s unscripted English was flawless, and he managed the transition into the evening Sangeet with complete authority. He commands the room effortlessly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Singhania Family" },
      reviewBody: "We had international guests and traditional elders flying into ITC Mughal. Yash’s bilingual code-switching was perfect. He bridged the cultural gap so naturally. No awkward jokes, no loud club behavior—just pure, refined stage presence.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Agra",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oberoi Amarvilas Hosting", description: "Executing highly prestigious, VIP-heavy events with extreme architectural restrictions and noise limits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Cultural Royal Weddings", description: "Bilingual English/Hindi bridging for international guests mixed with deep Indian traditions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Corporate Offsites", description: "Unscripted moderation for high-stakes leadership symposiums holding retreats in Agra" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Mughal Massive Sangeets", description: "Pacing sprawling guest lists and generating intense Sangeet energy in luxury mega-resorts" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Agra Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Agra's highly prestigious heritage sector, executing flawless bilingual ceremonies at The Oberoi Amarvilas and ITC Mughal.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Oberoi Amarvilas Event Protocol",
    "Taj Mahal Proximity Restrictions",
    "Bilingual VIP Moderation",
    "Heritage Architectural Acoustics",
    "Delhi NCR Executive Events",
    "Mughal Era Property Timelines",
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
  "@id": `https://yashsoni.in/anchor-in-agra/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Agra | Oberoi Amarvilas & Heritage Host — Yash Soni`,
  headline: `Agra's Premier Event Anchor for Ultra-Luxury Taj Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Agra destination weddings. Mastering prestigious layouts like The Oberoi Amarvilas and ITC Mughal with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttar Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Agra | Heritage Destination Wedding Emcee`,
  description: `Looking for the best anchor in Agra? Anchor Yash Soni — 4.9★. Expert for The Oberoi Amarvilas, ITC Mughal, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in agra",
    "best anchor in agra",
    "wedding anchor agra",
    "oberoi amarvilas event host",
    "itc mughal agra wedding anchor",
    "heritage destination wedding anchor up",
    "bilingual english hindi anchor agra",
    "royal wedding anchor agra",
    "luxury event emcee taj mahal",
    "delhi ncr wedding host agra",
    "corporate retreat host agra",
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
    title: `Best Anchor in Agra | Elite Heritage Destination Wedding Host`,
    description: `4.9★ rated. Agra's premium anchor for highly prestigious destination weddings at The Oberoi Amarvilas and ITC Mughal. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Agra — Anchor Yash Soni at Oberoi Amarvilas` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Agra | Anchor Yash Soni — 4.9★`,
    description: `The Oberoi Amarvilas. ITC Mughal. Agra's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Agra | Heritage VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, VIP Events, ${CITY}, Uttar Pradesh, India`,
    "DC.coverage": `${CITY}, Uttar Pradesh, India`,
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
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Agra?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Agra. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Agra?",
    a: "Yash Soni specialises in premium, high-energy events. In Agra, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Agra?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Agra feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Agra, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Agra?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Agra, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Agra, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Agra is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  name: `How to Hire the Best Anchor in Agra`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Agra.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Agra.` },
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
