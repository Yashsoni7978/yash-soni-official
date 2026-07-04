import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-ranthambore/layout.jsx
const CITY     = "Ranthambore";
const SLUG     = "anchor-in-ranthambore";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "26.0173";
const LNG      = "76.5026";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/ranthambore_bg.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Ranthambore","Wedding Anchor Ranthambore","Wildlife Destination Wedding Anchor","Ranthambore Safari Wedding Host","Sher Bagh Anchor","Khem Villas Event Emcee","Nahargarh Fort Ranthambore Anchor","Jungle Luxury Wedding Anchor"],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: "Sawai Madhopur", addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "322001" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "City", name: "Sawai Madhopur" },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Anchoring Services in Ranthambore",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jungle Luxury Wedding Anchor Ranthambore", description: "Wildlife-adjacent destination wedding hosting at Sher Bagh and Khem Villas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Host Ranthambore", description: "Open-air tented Sangeet emcee in the tiger reserve circuit" } },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Wildlife Destination Wedding Anchoring","Jungle Luxury Event Hosting","NRI Wedding Management","Bilingual Emceeing","Ranthambore Tiger Reserve Acoustics","Tented Camp Event Management"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`, item: FULL_URL },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Ranthambore | Jungle Luxury Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Ranthambore? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for wildlife tented destination weddings at Sher Bagh & Khem Villas. Bilingual, unscripted, NRI-experienced.`,
  keywords: [
    "anchor in ranthambore","best anchor in ranthambore","wedding anchor ranthambore",
    "wildlife wedding anchor ranthambore","jungle luxury wedding host",
    "sher bagh wedding anchor","khem villas event emcee",
    "nahargarh fort ranthambore anchor","tiger reserve wedding anchor",
    "destination wedding anchor ranthambore","nri wedding anchor ranthambore",
    "sangeet host ranthambore","tented camp wedding anchor",
    "bilingual anchor ranthambore","anchor yash","anchor yash soni"
  ],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Ranthambore | Jungle Luxury Wedding Host`, description: `4.9★ rated. 700+ shows. Ranthambore's most trusted anchor for wildlife tented weddings at Sher Bagh & Khem Villas. Bilingual, unscripted, NRI-experienced.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ranthambore — Anchor Yash Soni jungle luxury wedding` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Ranthambore | Anchor Yash Soni — 4.9★`, description: `Sher Bagh. Khem Villas. Nahargarh Fort. Ranthambore's most trusted jungle luxury wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Sawai Madhopur, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Wildlife Wedding, Jungle Luxury, ${CITY}, Rajasthan, India` },
};



const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Ranthambore?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Ranthambore. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Ranthambore?",
    a: "Yash Soni specialises in premium, high-energy events. In Ranthambore, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Ranthambore?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Ranthambore feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Ranthambore, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Ranthambore?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Ranthambore, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Ranthambore, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Ranthambore is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  "@id": `https://yashsoni.in/anchor-in-ranthambore/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Ranthambore | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Ranthambore. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Ranthambore`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Ranthambore.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Ranthambore.` },
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
