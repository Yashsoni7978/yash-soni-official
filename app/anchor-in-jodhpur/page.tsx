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
  description: `1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
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
  description:   `Yash Soni is a professional event anchor with 4+ years of experience in royal palace weddings and corporate events. He has hosted 1,100+ events including luxury destination weddings at Umaid Bhawan Palace and Mehrangarh Fort in Jodhpur.`,
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
  award: "4.9★ Rated — 200+ Five-Star Reviews",
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
    `Looking for the best anchor in Jodhpur? Anchor Yash Soni — 4.9★ rated, 1,100+ events, 4+ years. Expert for royal weddings at Umaid Bhawan Palace, Mehrangarh Fort & RAAS Jodhpur. Bilingual, unscripted, NRI & Rajputana protocol experienced.`,
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
    description: `4.9★ rated. 1,100+ events. Jodhpur's most trusted anchor for Umaid Bhawan Palace weddings, Mehrangarh Fort Sangeets & NRI destination events. Bilingual, unscripted, royal protocol aware.`,
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
    description: `Umaid Bhawan Palace. Mehrangarh Fort. RAAS Jodhpur. The Blue City's most trusted destination wedding anchor — 1,100+ events, 4.9★ rated.`,
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
    q: "Who is the best anchor for destination weddings in Jodhpur?",
    a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events anchored across Rajasthan, specialising in Jodhpur's fort and palace wedding circuit — Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur, Ajit Bhawan, Bal Samand Lake Palace, and Vivanta. Bilingual Hindi/English, unscripted, experienced in royal family protocols and NRI destination weddings.",
  },
  {
    q: "Have you hosted weddings at Umaid Bhawan Palace?",
    a: "Umaid Bhawan Palace is among the most demanding venues in India. The palace management has strict protocols — specific staging areas, sound system limitations in the heritage wings, and the requirement to interact respectfully with members of the royal family who may attend. Knowing what is and is not appropriate in this setting comes from working there, not from research.",
  },
  {
    q: "How do you manage the acoustics at Mehrangarh Fort events?",
    a: "The fort courtyard bounces sound off thick stone walls and loses it to the open sky simultaneously. The technique is to use the crowd rather than fight the acoustics — pulling people closer, building circular energy rather than projecting outward. This setting specifically requires an anchor who has worked it before, not one figuring it out during your wedding.",
  },
  {
    q: "Can you manage a large NRI crowd at a Jodhpur palace wedding?",
    a: "Jodhpur's destination circuit consistently brings families from the UK, US, and UAE. The hosting challenge is specific — the international cousins need English that sounds native, not anchored. The Rajputana family elders need a tone that respects the heritage of the house. Code-switching across these registers, live and unscripted, is the core skill.",
  },
  {
    q: "How far in advance should I book for a Jodhpur destination wedding?",
    a: "Palace venues in Jodhpur — particularly Umaid Bhawan — have extremely limited availability windows. The anchor calendar for November through February fills 6–8 months ahead at premium properties. Blocking the date requires an advance payment. No tentative holds or waitlists — WhatsApp the moment your venue is confirmed.",
  },
  {
    q: "Do you anchor Sangeet functions at Jodhpur fort venues?",
    a: "Mehrangarh Fort Sangeets are among the most complex events to anchor — the courtyard layout, the acoustic behaviour of the stone, crowd movement across multiple levels, and the desert chill after 9 PM all affect crowd energy. These are variables managed in real time, producing a Sangeet that feels electric rather than fighting the space.",
  },
  {
    q: "Can you anchor corporate events in Jodhpur?",
    a: "Corporate events — dealer meets, annual galas, and leadership summits at Ajit Bhawan, Vivanta Jodhpur, and WelcomHeritage Mandir Palace — are a regular part of the Jodhpur calendar. The corporate hosting register is brand-specific and sharp, not a wedding tone re-purposed for a boardroom. Bilingual Hindi/English is standard.",
  },
  {
    q: "What makes Anchor Yash different from local Jodhpur anchors?",
    a: "The difference is range and record. Local anchors know Jodhpur. Anchor Yash Soni knows Jodhpur and the full spectrum of event formats, crowd psychologies, and venue-specific requirements of the destination wedding circuit — backed by 1,100+ events, a 4.9★ rating from 200+ verified clients, and a zero-paper-script career.",
  },
  {
    q: "Who is the best emcee in Jodhpur for destination weddings?",
    a: "Anchor Yash Soni is the top-rated wedding emcee for Jodhpur destination events — with a 4.9★ verified rating and deep experience at Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur, and Ajit Bhawan. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies across all Jodhpur venues.",
  },
  {
    q: "What is the difference between a wedding anchor, emcee, and host in Jodhpur?",
    a: "Anchor, emcee, host, and MC are four terms for the same role — the professional who leads the event programme, manages transitions, and commands the room. Wedding planners in Jodhpur's destination circuit often prefer 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates flawlessly across all formats regardless of what the role is called.",
  },
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
