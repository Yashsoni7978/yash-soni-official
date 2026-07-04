import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-delhi/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas inside.

const CITY       = "Delhi";
const SLUG       = "anchor-in-delhi";
const DOMAIN     = "yashsoni.in";
const FULL_URL   = `https://${DOMAIN}/${SLUG}`;
const LAT        = "28.6139";
const LNG        = "77.2090";
const OG_IMAGE   = `https://${DOMAIN}/backgrounds/delhi_bg.webp`;

// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "ProfessionalService",
  "@id":      `${FULL_URL}/#business`,
  name:        `Anchor Yash Soni — Best Anchor in ${CITY} NCR`,
  alternateName: [
    `Anchor in ${CITY}`,
    `Wedding Anchor ${CITY} NCR`,
    `Corporate Emcee ${CITY}`,
    `Corporate Event Anchor ${CITY}`,
    `Sangeet Host ${CITY}`,
    `Punjabi Sangeet Anchor ${CITY}`,
    "Taj Palace Delhi Wedding Anchor",
    "Chhatarpur Farm Wedding Emcee",
    "Aerocity Corporate Host",
    "ITC Maurya Event Anchor",
  ],
  description: `Yash Soni is a bilingual event anchor serving Delhi NCR. With 700+ shows hosted, he brings high-energy anchoring to Chhatarpur farmhouses, Aerocity hotels, Taj Palace Delhi, and ITC Maurya. Expert in large Punjabi-style weddings, corporate summits, and award nights.`,
  url:         FULL_URL,
  telephone:   "+917737877978",
  priceRange:  "₹₹₹₹",
  image:        OG_IMAGE,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
  ],
  address: {
    "@type":           "PostalAddress",
    addressLocality:   CITY,
    addressRegion:     "Delhi",
    addressCountry:    "IN",
    postalCode:        "70001",
  },
  geo: {
    "@type":    "GeoCoordinates",
    latitude:   LAT,
    longitude:  LNG,
  },
  openingHoursSpecification: {
    "@type":     "OpeningHoursSpecification",
    dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens:       "09:00",
    closes:      "21:00",
  },
  areaServed: [
    { "@type": "City",               name: CITY },
    { "@type": "City",               name: "New Delhi" },
    { "@type": "City",               name: "Gurugram" },
    { "@type": "City",               name: "Noida" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country",            name: "India" },
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.9",
    reviewCount:   "200",
    bestRating:    "5",
    worstRating:   "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Delhi NCR",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Farmhouse Wedding Anchor Delhi", description: "Elite unscripted hosting for massive Chhatarpur farm weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Punjabi Sangeet Emcee Delhi", description: "Bilingual, high-energy hosting for massive Sangeets" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Summit Anchor Delhi", description: "Protocol-aware VIP hosting for Aerocity and Diplomatic Enclave summits" } },
    ],
  },
};

const personSchema = {
  "@context":    "https://schema.org",
  "@type":       "Person",
  "@id":         `https://${DOMAIN}/#person`,
  name:          "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash"],
  jobTitle:      "Professional Event Anchor & Corporate Emcee",
  description:   `Yash Soni is a high-profile corporate and wedding anchor with 5+ years of unscripted stage presence. He regularly commands expansive Chhatarpur farm weddings and Fortune 500 summits at properties like Taj Palace Delhi, The Leela Palace, and ITC Maurya.`,
  url:           `https://${DOMAIN}`,
  image:         `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone:     "+917737877978",
  knows:         CITY,
  knowsAbout: [
    "Corporate Event Anchoring",
    "Luxury Wedding Hosting",
    "Bilingual Emceeing",
    "VIP & Celebrity Discretion",
    "Live Event Crisis Management",
    "Unscripted Stage Mechanics",
    "Massive Farmhouse Weddings",
    "Punjabi Sangeet Hosting",
    "Aerocity Corporate Summits",
  ],
  award: "4.9★ Rated — 50+ Five-Star Reviews",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: `Anchor in ${CITY} NCR`,item: FULL_URL },
  ],
};

// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),

  title: `Best Anchor in Delhi NCR | Wedding Host & Corporate Emcee — Yash Soni`,

  description:
    `Looking for the best anchor in Delhi NCR? Anchor Yash Soni — 4.9★ rated, 700+ shows. Elite corporate emcee & massive Chhatarpur farm wedding host. Bilingual, zero paper scripts, and VIP-trusted.`,

  keywords: [
    // Core identity
    "anchor in delhi",
    "anchor in delhi ncr",
    "best anchor in delhi",
    "corporate emcee delhi",
    "corporate anchor delhi ncr",
    "wedding anchor delhi",
    "event anchor delhi",
    "female anchor in delhi", // Capture lateral traffic
    "male anchor in delhi",
    "emcee delhi",
    "event host delhi",
    // Venue-specific — high intent
    "taj palace delhi wedding anchor",
    "itc maurya corporate emcee",
    "chhatarpur farm wedding anchor",
    "aerocity corporate event anchor",
    "roseate house wedding emcee",
    "the leela palace chanakyapuri anchor",
    // Event type
    "luxury wedding anchor delhi",
    "punjabi sangeet host delhi",
    "farmhouse wedding anchor delhi ncr",
    "award night anchor delhi",
    "diplomatic summit emcee delhi",
    "bilingual anchor delhi",
    // Semantic/long-tail
    "top 10 anchors in delhi",
    "professional emcee in delhi for corporate events",
    "celebrity anchor in delhi",
    "fluent english anchor in delhi",
    "hindi english anchor ncr",
    // Branded
    "anchor yash",
    "anchor yash soni",
    "yash soni anchor",
  ],

  alternates: {
    canonical: FULL_URL,
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:          FULL_URL,
    siteName:    "Anchor Yash Soni",
    title:       `Best Anchor in Delhi NCR | Wedding Host & Corporate Emcee`,
    description: `4.9★ rated. 700+ shows. Delhi NCR's premier unscripted anchor for massive Chhatarpur farm weddings, high-energy Punjabi Sangeets, and Aerocity VIP corporate summits.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Anchor Yash Soni — Best Event Anchor in Delhi NCR`,
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Delhi NCR | Corporate & Wedding Emcee`,
    description: `Massive Farm Weddings. Aerocity Summits. Delhi NCR's most trusted elite anchor — 700+ shows, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },

  other: {
    "geo.region":    "IN-DL",
    "geo.placename": `${CITY}, Delhi, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    "DC.subject":    `Corporate Emcee, Wedding Anchor, Event Host, VIP Events, Farmhouse Weddings, ${CITY}, Delhi, India`,
    "rating":        "4.9",
    "reviewCount":   "200",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Delhi?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Delhi. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Delhi?",
    a: "Yash Soni specialises in premium, high-energy events. In Delhi, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Delhi?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Delhi feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Delhi, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Delhi?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Delhi, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Delhi, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Delhi is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-delhi/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Delhi | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Delhi. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Delhi`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Delhi.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Delhi.` },
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
