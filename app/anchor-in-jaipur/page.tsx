import type { Metadata } from "next";
import PageClient from "./PageClient";

// ── SCHEMA DATA ────────────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Anchor Yash Soni",
  image: "https://yashsoni.in/og-image.webp",
  "@id": "https://yashsoni.in/#organization",
  url: "https://yashsoni.in",
  telephone: "+917737877978",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vaishali Nagar",
    addressLocality: "Jaipur",
    postalCode: "302021",
    addressRegion: "RJ",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.facebook.com/anchoryashsoni",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
  ],
};

const FAQS = [
  {
    q: "Who is the best anchor in Jaipur for weddings and corporate events?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 1,100+ events hosted. He is locally based in Vaishali Nagar, Jaipur, knows every premium venue in the city, and specialises in luxury weddings, Sangeet nights, corporate award shows, NRI destination weddings, and VIP birthday galas. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top-rated anchor in Jaipur across WedMeGood, WeddingWire, Justdial, and Google.",
  },
  {
    q: "Have you hosted events at our Jaipur wedding venue before?",
    a: "Anchor Yash Soni has anchored events at virtually every premium venue in Jaipur — from the grand ballrooms of Fairmont and Marriott to the heritage courtyards of Rambagh Palace, Jai Mahal Palace, and Samode Haveli — and from JECC Sitapura to farmhouse venues on Ajmer Road and Bhankrota. Every major event zone in Jaipur has been covered repeatedly across 1,100+ events.",
  },
  {
    q: "Can we meet in Jaipur to discuss our event?",
    a: "Yash Soni is locally based in Jaipur and available for in-person pre-event meetings at any convenient central location — C-Scheme, Vaishali Nagar, or wherever is most practical — to discuss the run-of-show, crowd games, and customise the event plan face-to-face. No Zoom calls required.",
  },
  {
    q: "Do you charge extra travel fees for events in Kukas or Amer?",
    a: "Zero extra travel fees apply within Jaipur — all zones including Kukas, Amer Road, Ajmer Road, Bhankrota, Jhotwara, Mansarovar, and Sitapura are treated as completely local. No flight costs, no hotel stays, and no travel surcharges for any Jaipur venue. Yash arrives fresh, two hours early, and fully prepared.",
  },
  {
    q: "Do you also host corporate events and award nights in Jaipur?",
    a: "Corporate events are a core specialisation alongside weddings — award nights, product launches, annual galas, and business summits at JECC Sitapura, Tonk Road, Birla Auditorium, and JLN Marg are a major part of the Jaipur calendar. The corporate hosting register is completely separate from wedding hosting, and both are independently mastered.",
  },
  {
    q: "Our family loves Marwari culture. Can you host in local languages?",
    a: "Yash Soni speaks fluent Hindi, polished English for international and NRI guests, and warm Marwari-Rajasthani as a native Jaipur local. He switches between all three registers live and unscripted within the same event — every family's cultural texture is different, and he adapts precisely to yours.",
  },
  {
    q: "What is the cost of hiring the best anchor in Jaipur?",
    a: "Pricing reflects premium, unscripted quality and varies based on event type, duration, date, and guest count. For complete transparent pricing, see the Anchor Charges in Jaipur 2026 guide on the blog. For a personalised quote, send a WhatsApp message with your event date, type, and guest count.",
  },
  {
    q: "How far in advance should we book a Jaipur anchor?",
    a: "Jaipur's peak wedding season (October–February) books 6–8 months in advance. No waitlists are maintained and no replacements are sent. Once a date is confirmed, it is exclusively reserved for that event. The moment your venue is locked, reach out via WhatsApp immediately.",
  },
  {
    q: "Can you handle an event with 1000+ guests?",
    a: "Large crowds are a signature strength — Yash Soni has commanded open events of 10,000+ people unscripted. Farmhouse weddings on Ajmer Road with 1,000–1,500 guests are a standard evening. Crowd psychology — reading energy at scale, controlling chaos, and redirecting attention — is the core skill that separates a real anchor from an announcer.",
  },
  {
    q: "Can you host both the Haldi games and the Sangeet night?",
    a: "Hosting both the Haldi and the Sangeet with the same anchor is strongly recommended. When the anchor has already built rapport and crowd energy at the Haldi, the Sangeet begins with pre-warmed momentum — the crowd starts hot instead of cold, and the energy compounds across the full wedding day in a way two separate anchors cannot replicate.",
  },
  {
    q: "Do you travel outside Rajasthan for destination events?",
    a: "Yash Soni regularly travels outside Rajasthan for destination weddings and corporate events. While Jaipur is the home base, the event calendar includes Udaipur, Jodhpur, Jaisalmer, and Pushkar within Rajasthan, plus Mumbai, Delhi NCR, Goa, Bangalore, and select international destinations. Travel logistics are transparently structured into the booking terms.",
  },
  {
    q: "What makes Anchor Yash the best anchor in Jaipur over other options?",
    a: "Three things distinguish Anchor Yash Soni: First, 4.9★ across 200+ verified reviews on Google, WedMeGood, and WeddingWire — earned through 1,100+ events, not one viral moment. Second, completely unscripted — zero paper scripts across an 8+ year career. Third, local Jaipur expertise — he knows every venue, every vendor, every zone in the city and uses that knowledge to anticipate problems before your guests ever notice them.",
  },
  {
    q: "What is the difference between an anchor, emcee, and host in Jaipur events?",
    a: "Anchor, emcee, host, and MC (Master of Ceremonies) are four terms for the same professional role — the person who leads the event programme, manages transitions, and commands the room. In Jaipur's wedding industry, 'anchor' is the most common term. Corporate event planners prefer 'emcee' or 'MC'. International and NRI families typically say 'host'. Yash Soni operates across all event formats regardless of what the role is called — the skill set is identical.",
  },
  {
    q: "Who is the best emcee in Jaipur for weddings?",
    a: "Anchor Yash Soni is Jaipur's top-rated wedding emcee with a 4.9★ rating across 200+ verified reviews on Google, WedMeGood, and WeddingWire. As a wedding emcee in Jaipur, he has hosted 1,100+ events — Sangeet nights, Haldi functions, Mehndi ceremonies, and grand reception events — across Rambagh Palace, Fairmont Jaipur, Jai Mahal Palace, and farmhouse venues on Ajmer Road.",
  },
  {
    q: "Who is the best corporate emcee in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's most in-demand corporate emcee for award nights, product launches, dealer meets, annual galas, and leadership summits. His corporate emcee and MC work spans JECC Sitapura, Birla Auditorium, Trident Jaipur, Marriott Jaipur, Hyatt Regency, and JLN Marg hotel properties — covering both bilingual Hindi/English hosting and the precise, brand-aligned delivery that senior management events require.",
  },
  {
    q: "Who is the best wedding host in Jaipur for NRI families?",
    a: "Yash Soni is Jaipur's most sought-after wedding host for NRI families and international guests. As a bilingual event host fluent in polished English and sophisticated Hindi, he ensures international guests from the UK, USA, Canada, and UAE feel fully included while Rajasthani traditions and family elders are honoured simultaneously. His track record as a wedding host at Rambagh Palace and Fairmont Jaipur with NRI families is extensive.",
  },
  {
    q: "Is Yash Soni available as MC for corporate events in Jaipur?",
    a: "Yash Soni is available as a professional MC (Master of Ceremonies) for corporate events across Jaipur. Corporate MC services include award ceremony hosting, conference moderation, product launch emceeing, dealer meet facilitation, and gala dinner hosting. His corporate MC work spans JECC Sitapura, Birla Auditorium, Marriott Jaipur, Hyatt Regency, and Trident Jaipur.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Anchor in Jaipur",
      item: "https://yashsoni.in/anchor-in-jaipur",
    },
  ],
};

// ── GEO SCHEMAS — Generative Engine Optimization ────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Anchor in Jaipur | Yash Soni — 1100+ Events",
  url: "https://yashsoni.in/anchor-in-jaipur",
  description:
    "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 1,100+ events hosted. Trusted for palace weddings at Rambagh and Fairmont Jaipur, Sangeet nights on Ajmer Road, and corporate galas at JECC Sitapura.",
  inLanguage: "en-IN",
  about: {
    "@type": "Person",
    name: "Yash Soni",
    alternateName: "Anchor Yash Soni",
    jobTitle: "Professional Event Anchor and Emcee",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/anchor_yash_official",
      "https://www.facebook.com/anchoryashsoni",
      "https://www.wedmegood.com/profile/anchor-yash-25628297",
      "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Hire the Best Anchor in Jaipur",
  description:
    "Step-by-step process to book Anchor Yash Soni for weddings, Sangeet nights, and corporate events in Jaipur, Rajasthan.",
  totalTime: "PT24H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check Availability via WhatsApp",
      text: "Message +91 7737877978 on WhatsApp with your event date, type (wedding / Sangeet / corporate), venue location in Jaipur, and approximate guest count. Jaipur's peak wedding season (October through February) books 6–8 months in advance.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Receive a Personalised Quote",
      text: "A customised quote is provided within the hour. Pricing depends on event type, duration, date, and venue zone within Jaipur. All Jaipur venues — Kukas, Amer Road, Ajmer Road, Mansarovar, and Sitapura — are treated as fully local with zero travel surcharges.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Confirm with Advance Payment",
      text: "The event date is exclusively blocked on receipt of the agreed advance payment. No tentative holds or waitlists are maintained — the date is reserved exclusively for your event.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pre-Event Research Call",
      text: "A dedicated pre-event call covers the full run-of-show, crowd games, family dynamics, cultural and ceremonial specifics, and any VIP or NRI guest requirements. Yash Soni arrives at the venue two hours early on event day.",
    },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Best Anchor in Jaipur | Yash Soni — 1100+ Events",
  description:
    "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 1,100+ events hosted. Trusted for palace weddings, Sangeet nights, and corporate galas across all Jaipur venues — from Rambagh Palace to JECC Sitapura.",
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jaipur",
  },
  openGraph: {
    title: "Best Anchor in Jaipur | Yash Soni — 1100+ Events",
    description:
      "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 1,100+ events hosted. Trusted for palace weddings, Sangeet nights, and corporate galas across all Jaipur venues — from Rambagh Palace to JECC Sitapura.",
    url: "https://yashsoni.in/anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Best Anchor in Jaipur — Yash Soni on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Yash Soni",
    description:
      "1,100+ events. 4.9★ across 200+ verified reviews. Jaipur's most trusted anchor for palace weddings, Sangeet nights, and corporate galas.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
};

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, localBusinessSchema]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <PageClient />
    </>
  );
}
