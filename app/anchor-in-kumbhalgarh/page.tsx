import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-kumbhalgarh/layout.jsx
const CITY     = "Kumbhalgarh";
const SLUG     = "anchor-in-kumbhalgarh";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "25.1477";
const LNG      = "73.5820";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/kumbhalgarh_bg.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni, Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Kumbhalgarh","Wedding Anchor Kumbhalgarh","Heritage Wedding Host Kumbhalgarh","Fort Wedding Anchor Kumbhalgarh","Kumbha Bagh Wedding Anchor","Aodhi Hotel Event Host","Safari Camp Wedding Emcee"],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "313325" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Heritage Wedding Anchoring","Fort-Wall Event Hosting","NRI Wedding Management","Bilingual Emceeing","Kumbhalgarh Resort Events","Open-Air Heritage Acoustics"],
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
  title: `Best Anchor in Kumbhalgarh | Heritage Fort Wedding Host, Yash Soni`,
  description: `Looking for the best anchor in Kumbhalgarh? Anchor Yash Soni, 4.9★ rated, 700+ shows. Expert for heritage fort weddings at The Kumbha Bagh & Aodhi. Bilingual, unscripted, NRI-experienced.`,
  keywords: ["anchor in kumbhalgarh","best anchor in kumbhalgarh","wedding anchor kumbhalgarh","fort wedding anchor kumbhalgarh","kumbha bagh wedding anchor","aodhi hotel event host","heritage wedding host rajasthan","destination wedding anchor kumbhalgarh","nri wedding anchor kumbhalgarh","sangeet host kumbhalgarh","bilingual anchor kumbhalgarh","anchor yash","anchor yash soni"],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Kumbhalgarh | Heritage Fort Wedding Host`, description: `4.9★ rated. 700+ shows. Kumbhalgarh's most trusted anchor for heritage fort weddings at Kumbha Bagh & Aodhi. Bilingual, unscripted, NRI-experienced.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Kumbhalgarh, Anchor Yash Soni at the Great Wall` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Kumbhalgarh | Anchor Yash Soni, 4.9★`, description: `The Kumbha Bagh. The Aodhi. Kumbhalgarh Fort. The Great Wall City's most trusted heritage wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Heritage Wedding, Fort Wedding, Emcee, ${CITY}, Rajasthan, India` },
};



const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Kumbhalgarh?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Kumbhalgarh. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Kumbhalgarh?",
    a: "Yash Soni specialises in premium, high-energy events. In Kumbhalgarh, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Kumbhalgarh?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Kumbhalgarh feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Kumbhalgarh, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Kumbhalgarh?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Kumbhalgarh, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Kumbhalgarh, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Kumbhalgarh is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  "@id": `https://yashsoni.in/anchor-in-kumbhalgarh/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Kumbhalgarh | Wedding & Event Host, Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Kumbhalgarh. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Kumbhalgarh`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Kumbhalgarh.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Kumbhalgarh.` },
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
