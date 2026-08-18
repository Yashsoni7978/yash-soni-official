import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-nainital/layout.jsx
// Ultra-Luxury Lakeside Heritage Destination Anchor Layout

const CITY     = "Nainital";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-nainital";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "29.3919";
const LNG      = "79.4542";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/nainital_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni, Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Nainital",
    "Best Wedding Anchor Nainital",
    "Nainital Destination Wedding Emcee",
    "The Naini Retreat Wedding Anchor",
    "Bhimtal Luxury Event Host",
    "Kumaon Heritage Wedding Anchor",
    "Bilingual Emcee Nainital",
    "Lakeside Destination Wedding Host",
    "Corporate Retreat Anchor Nainital",
    "Delhi Elite Wedding Host Nainital",
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
    streetAddress: "Nainital & Bhimtal Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "263001",
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
    { "@type": "City", name: "Nainital" },
    { "@type": "City", name: "Bhimtal" },
    { "@type": "City", name: "Jim Corbett" },
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
      author: { "@type": "Person", name: "Executive Offsite, Gurgaon" },
      reviewBody: "Hosting our annual corporate retreat at a heritage property in Nainital required a very specific tone. Yash was exactly what we needed. High-end English hosting, entirely unscripted, blending the corporate strategy daytime talks immediately into the lakeside evening gala.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Kapur Family, Delhi NCR" },
      reviewBody: "The logistics of lakeside acoustic drop-off are real. Our Sangeet threatened to lose energy, but Yash physically compressed the crowd dynamically and pushed the interactions into overdrive. He saved the Sangeet entirely.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Nainital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lakeside Heritage Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme acoustic lakeside logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bhimtal Resort Exclusivity", description: "Bilingual English/Hindi bridging for incredibly distilled, VIP destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kumaon Ridge Sangeets", description: "Defeating massive mountain winds and dropping temperatures through intense acoustic centralization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Offsite Moderation", description: "Unscripted hosting for high-stakes leadership symposiums holding strategy retreats in the Kumaon hills" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Nainital Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Nainital's high-altitude luxury sector, executing flawless bilingual ceremonies across Kumaon lakeside heritage properties.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "The Naini Retreat Protocol",
    "Bhimtal Lakeside Logistics",
    "Kumaon Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi NCR Executive Crowds",
    "Heritage Lakeside Wedding Flow",
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
  "@id": `https://yashsoni.in/anchor-in-nainital/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Nainital | Kumaon Lakeside Emcee, Yash Soni`,
  headline: `Nainital's Premier Event Anchor for Ultra-Luxury Lakeside Destination Weddings`,
  description: `Anchor Yash Soni, 4.9★ rated. The definitive expert for Nainital destination weddings. Mastering prestigious properties like The Naini Retreat with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Nainital | Luxury Heritage Lakeside Emcee`,
  description: `Looking for the best anchor in Nainital? Anchor Yash Soni, 4.9★. Expert for The Naini Retreat, Bhimtal luxury, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in nainital",
    "best anchor in nainital",
    "wedding anchor nainital",
    "naini retreat event host",
    "bhimtal wedding anchor",
    "kumaon destination wedding anchor",
    "bilingual english hindi anchor nainital",
    "luxury event emcee uttarakhand",
    "delhi ncr wedding host nainital",
    "lakeside destination anchor",
    "corporate retreat host nainital",
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
    title: `Best Anchor in Nainital | Elite Lakeside Destination Wedding Host`,
    description: `4.9★ rated. Nainital's premium anchor for highly prestigious destination weddings spanning the Kumaon lakes. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Nainital, Anchor Yash Soni at Lakeside Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Nainital | Anchor Yash Soni, 4.9★`,
    description: `The Naini Retreat. Bhimtal Estates. Nainital's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Nainital | Kumaon VIP Destination Emcee, Yash Soni`,
    "DC.subject": `Event Anchor, Mountain Lakeside Wedding, VIP Events, ${CITY}, Uttarakhand, India`,
    "DC.coverage": `${CITY}, Uttarakhand, India`,
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
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Nainital?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Nainital. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Nainital?",
    a: "Yash Soni specialises in premium, high-energy events. In Nainital, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Nainital?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Nainital feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Nainital, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Nainital?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Nainital, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Nainital, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Nainital is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  name: `How to Hire the Best Anchor in Nainital`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Nainital.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Nainital.` },
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
