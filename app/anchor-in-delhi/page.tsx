import type { Metadata } from 'next';
import PageClient from './PageClient';

// SERVER COMPONENT — Technical SEO & Structured Data Schema
const CITY       = "Delhi";
const SLUG       = "anchor-in-delhi";
const DOMAIN     = "yashsoni.in";
const FULL_URL   = `https://${DOMAIN}/${SLUG}`;
const LAT        = "28.6139";
const LNG        = "77.2090";
const OG_IMAGE   = `https://${DOMAIN}/backgrounds/delhi_hero_desktop.png`;

// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: "Anchor Yash Soni — Professional Event Host & Emcee in Delhi",
  alternateName: [
    "Anchor in Delhi",
    "Wedding Anchor Delhi",
    "Wedding Emcee Delhi",
    "Event Host Delhi",
    "Professional Emcee Delhi",
    "Corporate Event Host Delhi",
    "Sangeet Anchor Delhi",
    "Wedding Host Delhi",
    "Emcee for Corporate Events in Delhi",
    "Delhi NCR Event Host",
    "Chattarpur Wedding Anchor",
    "South Delhi Event Host",
    "Aerocity Corporate Event Host",
    "Gurugram Event Host",
    "Noida Event Host"
  ],
  description: "Book Anchor Yash for weddings, Sangeet celebrations, corporate events and large-format experiences across Delhi NCR. Explore his hosting style, event experience and availability.",
  url: FULL_URL,
  telephone: "+917737877978",
  priceRange: "₹₹₹₹",
  image: OG_IMAGE,
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: "Delhi",
    addressCountry: "IN",
    postalCode: "110001"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LAT,
    longitude: LNG
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00"
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "South Delhi" },
    { "@type": "City", name: "Chattarpur" },
    { "@type": "City", name: "Aerocity" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country", name: "India" }
  ],
    hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Delhi NCR",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Anchor Delhi", description: "Elite unscripted hosting for grand farmhouse & palace weddings across Delhi NCR." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Anchor Delhi", description: "Bilingual, high-energy hosting for massive Punjabi Sangeets & cocktail nights." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Host Delhi", description: "Protocol-aware VIP hosting for Aerocity summits, corporate galas & product launches." } }
    ]
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash", "Anchor Yash Soni"],
  jobTitle: "Professional Event Host & Emcee",
  description: "Yash Soni is a premier event anchor commanding grand weddings, corporate galas, and live stage events across Delhi NCR and India with 700+ hosted shows.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  knows: CITY,
  knowsAbout: [
    "Corporate Event Anchoring",
    "Luxury Wedding Hosting",
    "Bilingual Emceeing",
    "Stage Mechanics",
    "Crowd Command",
    "Chhatarpur Farmhouse Weddings",
    "Aerocity Corporate Summits",
    "Punjabi Sangeet Hosting"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Delhi", item: FULL_URL }
  ]
};

const FAQS = [
  {
    q: "Can you host weddings in Chattarpur?",
    a: "Yes. Sprawling Chattarpur farmhouses are a mainstay of Delhi weddings. Anchor Yash specializes in managing open-air acoustic distribution, massive baraat entries, and unscripted family Sangeets on multi-acre lawns."
  },
  {
    q: "Do you travel across Delhi NCR?",
    a: "Yes. Anchor Yash hosts events across South Delhi, Chattarpur, Aerocity, Gurugram, Noida, and Faridabad, maintaining seamless punctuality and venue familiarity across the entire National Capital Region."
  },
  {
    q: "Can you host events in Gurugram?",
    a: "Yes. From corporate leadership summits at Cyber City to luxury ballroom galas at Golf Course Road hotels, Yash brings sharp executive presence and bilingual command to Gurugram stages."
  },
  {
    q: "Do you host corporate events in Aerocity?",
    a: "Yes. Aerocity hosts major national summits and corporate galas at venues like Andaz Delhi, Roseate House, and Pullman. Yash handles protocol-heavy stages with cabinet ministers, C-suite executives, and international delegates."
  },
  {
    q: "Can you handle large wedding audiences?",
    a: "Yes. Anchor Yash regularly commands 1,000+ guest audiences in Delhi. His unscripted crowd work and vocal command keep expansive crowds focused without relying on paper scripts."
  },
  {
    q: "Do you host Sangeet and cocktail evenings?",
    a: "Yes. High-energy Punjabi Sangeets and glamorous cocktail nights in Delhi are his signature events, bridging upbeat crowd interaction with structured sequence transitions."
  },
  {
    q: "Can you coordinate with wedding planners and event production teams?",
    a: "Yes. Yash collaborates seamlessly with top wedding planners, dhol troupes, production crews, and DJs across Delhi NCR to ensure tight cue execution and zero stage downtime."
  },
  {
    q: "How early should we book an anchor for a Delhi event?",
    a: "For peak Delhi winter wedding season (November to February), bookings are recommended 6 to 8 months in advance as prime dates sell out rapidly."
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
  "@id": `${FULL_URL}/#webpage`,
  url: FULL_URL,
  name: "Anchor Yash | Professional Event Host & Emcee in Delhi",
  description: "Book Anchor Yash for weddings, Sangeet celebrations, corporate events and large-format experiences across Delhi NCR.",
  inLanguage: "en-IN"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book Anchor Yash for a Delhi Event",
  description: "Step-by-step process to secure Anchor Yash for your event in Delhi NCR.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Share Event Details", text: "Submit your event date, venue in Delhi NCR, and expected guest count." },
    { "@type": "HowToStep", position: 2, name: "Check Date Availability", text: "Receive date confirmation and hosting proposal within 1 hour." },
    { "@type": "HowToStep", position: 3, name: "Align on Hosting Vision", text: "Briefing call to define run-of-show, crowd energy, and stage protocol." },
    { "@type": "HowToStep", position: 4, name: "Stage Execution", text: "Flawless live execution on event day across Delhi NCR." }
  ]
};

// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: "Anchor Yash | Professional Event Host & Emcee in Delhi",
  description: "Book Anchor Yash for weddings, Sangeet celebrations, corporate events and large-format experiences across Delhi NCR. Explore his hosting style, event experience and availability.",
  keywords: [
    "Anchor in Delhi",
    "Wedding Anchor Delhi",
    "Wedding Emcee Delhi",
    "Event Host Delhi",
    "Professional Emcee Delhi",
    "Corporate Event Host Delhi",
    "Sangeet Anchor Delhi",
    "Wedding Host Delhi",
    "Emcee for Corporate Events in Delhi",
    "Delhi NCR Event Host",
    "Chattarpur Wedding Anchor",
    "South Delhi Event Host",
    "Aerocity Corporate Event Host",
    "Gurugram Event Host",
    "Noida Event Host",
    "Anchor Yash",
    "Anchor Yash Soni"
  ],
  alternates: {
    canonical: FULL_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: FULL_URL,
    siteName: "Anchor Yash Soni",
    title: "Anchor Yash | Professional Event Host & Emcee in Delhi",
    description: "Book Anchor Yash for weddings, Sangeet celebrations, corporate events and large-format experiences across Delhi NCR. Explore his hosting style, event experience and availability.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Professional Event Host & Emcee in Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor Yash | Professional Event Host & Emcee in Delhi",
    description: "Book Anchor Yash for weddings, Sangeet celebrations, corporate events and large-format experiences across Delhi NCR.",
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi, India",
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
            personSchema,
            breadcrumbSchema,
            webPageSchema,
            howToSchema,
            faqSchema
          ]),
        }}
      />
      <PageClient />
    </>
  );
}
