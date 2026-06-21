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
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  { q: "Who is the best anchor for destination weddings in Ranthambore?", a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and is a specialist in Ranthambore's luxury jungle resort wedding circuit. Completely unscripted and bilingual, he delivers the elegant, high-energy hosting required for premium wildlife-adjacent venues." },
  { q: "How do you handle the unique acoustic and timeline constraints of Ranthambore jungle resorts?", a: "Ranthambore's proximity to the national park means strict noise regulations after certain hours and open-air acoustic challenges. Managing the timeline to ensure high-energy segments peak before restrictions, and shifting the crowd's energy seamlessly into intimate, late-night acoustic or DJ sessions, requires a highly experienced host." },
  { q: "Can you host bilingual events for NRI families in Ranthambore?", a: "Yes. Destination weddings in Ranthambore attract a mix of domestic luxury clients and NRI families. Bilingual hosting ensures international guests remain engaged through sophisticated English, while traditional Indian relatives connect deeply through culturally resonant Hindi." },
  { q: "What makes Ranthambore different from other destination wedding locations?", a: "Ranthambore offers an exotic, wildlife-adjacent backdrop that feels both luxurious and wild. The hosting must mirror this — elegant and sophisticated, yet dynamic enough to match the adventurous spirit of a jungle destination." },
  { q: "How far in advance should I book for a Ranthambore wedding?", a: "Ranthambore is highly sought after during the winter wedding season (October–March). Premium jungle resorts book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Ranthambore for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Ranthambore destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Ranthambore?", a: "Anchor, emcee, host, and MC are terms for the same professional role. International event planners often use 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the term used." },
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
