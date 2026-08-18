import type { Metadata } from 'next';
import PageClient from './PageClient';

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
  name: `Anchor Yash Soni, Best Anchor in ${CITY}`,
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
      author: { "@type": "Person", name: "Corporate Director, Mumbai" },
      reviewBody: "Alibaug weddings are incredibly intimate and highly scrutinized because the guest list is pure VIP. Yash anchored our Sangeet at The Mansion House flawlessly. Phenomenal English dialect mixed with perfect timing-he didn't just host the event, he controlled the entire weekend.",
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
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Alibaug's highly exclusive, VIP-dense luxury weddings, managing complex coastal logistics and Mumbai's high-net-worth business crowds.",
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
  "@id": `https://yashsoni.in/anchor-in-alibaug/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Alibaug | Luxury Villa & Coastal Wedding Host, Yash Soni`,
  headline: `Alibaug's Premier Event Anchor for Ultra-Luxury Mumbai VIP Destination Weddings`,
  description: `Anchor Yash Soni, 4.9★ rated. The definitive expert for Alibaug destination weddings. Mastering highly intimate luxury villa acoustics, high-net-worth bilingual hosting, and unscripted VIP event flow.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, India` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Alibaug | Elite Weekend Destination Wedding Emcee`,
  description: `Looking for the best anchor in Alibaug? Anchor Yash Soni, 4.9★. Expert for The Mansion House, Radisson Blu, and ultra-luxury private villa weddings. Flawless unscripted bilingual hosting bridging deep cultural roots with high-voltage elite energy.`,
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Alibaug, Anchor Yash Soni at Luxury Coastal Villas` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Alibaug | Anchor Yash Soni, 4.9★`,
    description: `The Mansion House. Radisson Blu. Alibaug's premier bilingual event anchor for exclusive VIP Sangeets and luxury ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Alibaug | Luxury VIP Destination Emcee, Yash Soni`,
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


const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Alibaug?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Alibaug. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Alibaug?",
    a: "Yash Soni specialises in premium, high-energy events. In Alibaug, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Alibaug?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Alibaug feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Alibaug, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Alibaug?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Alibaug, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Alibaug, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Alibaug is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  name: `How to Hire the Best Anchor in Alibaug`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Alibaug.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Alibaug.` },
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
