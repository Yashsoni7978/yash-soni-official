import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-shimla/layout.jsx
// Ultra-Luxury High-Altitude Heritage Destination Anchor Layout

const CITY     = "Shimla";
const REGION   = "Himachal Pradesh";
const SLUG     = "anchor-in-shimla";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "31.1048";
const LNG      = "77.1734";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/shimla_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Shimla",
    "Best Wedding Anchor Shimla",
    "Shimla Destination Wedding Emcee",
    "Wildflower Hall Wedding Anchor",
    "Taj Theog Resort Event Host",
    "Himachal Luxury Wedding Anchor",
    "Bilingual Emcee Shimla",
    "High Altitude Destination Wedding Host",
    "Corporate Retreat Anchor Shimla",
    "Chandigarh Elite Wedding Host",
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
    streetAddress: "Mashobra & Theog Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
    postalCode: "171001",
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
    { "@type": "City", name: "Shimla" },
    { "@type": "City", name: "Mashobra" },
    { "@type": "City", name: "Theog" },
    { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  
  review: [
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "Corporate Group — Delhi NCR" },
      reviewBody: "Hosting a sunset reception at Taj Theog requires an anchor who understands immense prestige. Yash’s unscripted English was flawless, and he managed the transition into the evening Sangeet despite the freezing outdoor temperatures with complete authority. He commands the room effortlessly.",
    },
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "Garg Family — Chandigarh" },
      reviewBody: "Choosing Wildflower Hall meant we had a highly restricted, incredibly VIP guest list. We needed an anchor, not a noisy MC. Yash was absolute perfection. Intense conversational flow, no reading from notes, completely owning the space.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Shimla",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Theog Retreat Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme high-altitude logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wildflower Hall Intimacy", description: "Bilingual English/Hindi bridging for incredibly distilled, 100-guest VIP destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Himalayan Ridge Sangeets", description: "Defeating massive mountain winds and freezing temperatures through intense acoustic centralization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Offsite Moderation", description: "Unscripted hosting for high-stakes leadership symposiums holding strategy retreats in Mashobra" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Shimla Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Shimla's high-altitude luxury sector, executing flawless bilingual ceremonies at Taj Theog and Wildflower Hall.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Theog Resort Protocol",
    "Wildflower Hall Exclusivity",
    "Himachal Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi/Chandigarh Executive Crowds",
    "High-Altitude Wedding Logistics",
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
  "@id": `https://yashsoni.in/anchor-in-shimla/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Shimla | Taj Theog & Wildflower Hall Emcee — Yash Soni`,
  headline: `Shimla's Premier Event Anchor for Ultra-Luxury Himalayan Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Shimla destination weddings. Mastering prestigious properties like Taj Theog and Wildflower Hall with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Himachal Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Shimla | Luxury Himalayan Wedding Emcee`,
  description: `Looking for the best anchor in Shimla? Anchor Yash Soni — 4.9★. Expert for Taj Theog, Wildflower Hall, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in shimla",
    "best anchor in shimla",
    "wedding anchor shimla",
    "wildflower hall event host",
    "taj theog wedding anchor",
    "himalayan destination wedding anchor",
    "bilingual english hindi anchor shimla",
    "luxury event emcee himachal",
    "chandigarh elite wedding host",
    "delhi ncr wedding host shimla",
    "corporate retreat host shimla",
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
    title: `Best Anchor in Shimla | Elite High-Altitude Destination Wedding Host`,
    description: `4.9★ rated. Shimla's premium anchor for highly prestigious destination weddings at Taj Theog and Wildflower Hall. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Shimla — Anchor Yash Soni at Himalayan Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Shimla | Anchor Yash Soni — 4.9★`,
    description: `Taj Theog. Wildflower Hall. Shimla's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-HP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Shimla | Himalayan VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Mountain Wedding, VIP Events, ${CITY}, Himachal Pradesh, India`,
    "DC.coverage": `${CITY}, Himachal Pradesh, India`,
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
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Shimla?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Shimla. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Shimla?",
    a: "Yash Soni specialises in premium, high-energy events. In Shimla, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Shimla?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Shimla feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Shimla, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Shimla?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Shimla, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Shimla, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Shimla is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  name: `How to Hire the Best Anchor in Shimla`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Shimla.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Shimla.` },
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
