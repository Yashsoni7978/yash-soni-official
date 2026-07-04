import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-jodhpur/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas in page.jsx.
const CITY       = "Jodhpur";
const SLUG       = "anchor-in-jodhpur";
const DOMAIN     = "yashsoni.in";
const FULL_URL   = `https://${DOMAIN}/${SLUG}`;
const LAT        = "26.2389";
const LNG        = "73.0243";
const OG_IMAGE   = `https://${DOMAIN}/backgrounds/jodhpur_bg.webp`;
// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "ProfessionalService",
  "@id":      `${FULL_URL}/#business`,
  name:        `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    `Anchor in ${CITY}`,
    `Wedding Anchor ${CITY}`,
    `Emcee ${CITY}`,
    `Destination Wedding Anchor ${CITY}`,
    `Sangeet Host ${CITY}`,
    `Event Host ${CITY}`,
    "Umaid Bhawan Palace Wedding Anchor",
    "Mehrangarh Fort Wedding Host",
    "RAAS Jodhpur Event Host",
  ],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
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
    addressRegion:     "Rajasthan",
    addressCountry:    "IN",
    postalCode:        "342001",
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
    { "@type": "AdministrativeArea", name: "Rajasthan" },
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
    name: "Anchoring Services in Jodhpur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Royal Wedding Anchor Jodhpur", description: "Full bilingual wedding anchoring at Umaid Bhawan Palace and Mehrangarh Fort" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Emcee Jodhpur", description: "Fort courtyard Sangeet hosting at Mehrangarh and RAAS Jodhpur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Anchor Jodhpur", description: "Corporate galas, dealer meets and conferences at Ajit Bhawan and Vivanta Jodhpur" } },
    ],
  },
};
const personSchema = {
  "@context":    "https://schema.org",
  "@type":       "Person",
  "@id":         `https://${DOMAIN}/#person`,
  name:          "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash"],
  jobTitle:      "Professional Event Anchor & Emcee",
  description:   `Yash Soni is a professional event anchor with 5+ years of experience in royal palace weddings and corporate events. He has hosted 700+ shows including luxury destination weddings at Umaid Bhawan Palace and Mehrangarh Fort in Jodhpur.`,
  url:           `https://${DOMAIN}`,
  image:         `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone:     "+917737877978",
  knows:         CITY,
  knowsAbout: [
    "Wedding Anchoring",
    "Royal Palace Wedding Hosting",
    "Fort Courtyard Sangeet Hosting",
    "Rajputana Family Protocol",
    "Bilingual Hindi English Hosting",
    "NRI Wedding Management",
    "Jodhpur Destination Weddings",
    "Umaid Bhawan Palace Events",
    "Mehrangarh Fort Events",
  ],
  award: "4.9★ Rated — 50+ Five-Star Reviews",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan",  item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`,   item: FULL_URL },
  ],
};
// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Jodhpur | Royal Palace & Destination Wedding Host — Anchor Yash Soni`,
  description:
    `Looking for the best anchor in Jodhpur? Anchor Yash Soni — 4.9★ rated, 700+ shows, 5+ years. Expert for royal weddings at Umaid Bhawan Palace, Mehrangarh Fort & RAAS Jodhpur. Bilingual, unscripted, NRI & Rajputana protocol experienced.`,
  keywords: [
    // Core identity
    "anchor in jodhpur",
    "best anchor in jodhpur",
    "wedding anchor jodhpur",
    "event anchor jodhpur",
    "emcee jodhpur",
    "event host jodhpur",
    // Venue-specific — high intent
    "umaid bhawan palace wedding anchor",
    "mehrangarh fort wedding host",
    "raas jodhpur wedding emcee",
    "ajit bhawan anchor",
    "bal samand lake palace anchor",
    "vivanta jodhpur wedding host",
    // Event type
    "destination wedding anchor jodhpur",
    "nri wedding anchor jodhpur",
    "royal wedding anchor jodhpur",
    "sangeet host jodhpur",
    "sangeet emcee jodhpur fort",
    "haldi anchor jodhpur",
    "corporate anchor jodhpur",
    "bilingual anchor jodhpur",
    // Semantic/long-tail
    "anchor for destination wedding jodhpur",
    "best emcee jodhpur",
    "jodhpur palace wedding anchor",
    "jodhpur destination wedding host",
    "royal event host jodhpur",
    "anchor yash soni jodhpur",
    "professional anchor jodhpur rajasthan",
    "fort wedding anchor jodhpur",
    "blue city wedding anchor",
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
    title:       `Best Anchor in Jodhpur | Royal Palace & Destination Wedding Host — Anchor Yash Soni`,
    description: `4.9★ rated. 700+ shows. Jodhpur's most trusted anchor for Umaid Bhawan Palace weddings, Mehrangarh Fort Sangeets & NRI destination events. Bilingual, unscripted, royal protocol aware.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Best Anchor in Jodhpur — Anchor Yash Soni at Mehrangarh Fort`,
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Jodhpur | Anchor Yash Soni — 4.9★`,
    description: `Umaid Bhawan Palace. Mehrangarh Fort. RAAS Jodhpur. The Blue City's most trusted destination wedding anchor — 700+ shows, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },
  other: {
    "geo.region":    "IN-RJ",
    "geo.placename": `${CITY}, Rajasthan, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    "DC.subject":    `Event Anchor, Wedding Anchor, Emcee, ${CITY}, Rajasthan, India`,
    "rating":        "4.9",
    "reviewCount":   "200",
  },
};
// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Jodhpur?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Jodhpur. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Jodhpur?",
    a: "Yash Soni specialises in premium, high-energy events. In Jodhpur, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Jodhpur?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Jodhpur feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Jodhpur, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Jodhpur?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Jodhpur, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Jodhpur, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Jodhpur is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  "@id": `https://yashsoni.in/anchor-in-jodhpur/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Jodhpur | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Jodhpur. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Jodhpur`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Jodhpur.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Jodhpur.` },
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
