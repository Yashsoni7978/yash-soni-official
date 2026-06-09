import type { Metadata } from 'next';
import PageClient from './PageClient';

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
    latitude: 24.5854,
    longitude: 73.7125,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
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
    q: "Who is the best anchor for destination weddings in Udaipur?",
    a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events anchored across Rajasthan, specialising in Udaipur's lake palace destination wedding circuit — Taj Lake Palace, Oberoi Udaivilas, Jagmandir Island, Leela Udaipur, Raffles, and Fateh Garh. Bilingual Hindi/English, unscripted, NRI-experienced, with zero paper scripts across his entire career.",
  },
  {
    q: "Have you hosted events at Taj Lake Palace and Jagmandir Island?",
    a: "Taj Lake Palace and Jagmandir Island are both venues with specific acoustic challenges, boat-arrival timing, and heritage sound protocols. The lake setting changes how crowd energy travels — these are not venues you learn on the job. The operational knowledge for Maharana Pratap Sthal, the terrace at Udaivilas, and the courtyard stages at Jagmandir comes from repeated work at these properties.",
  },
  {
    q: "Can you manage a bilingual NRI wedding crowd in Udaipur?",
    a: "Bilingual hosting for NRI families is the core specialty of the Udaipur destination circuit. NRI families from the UK, USA, and Canada bring their extended diaspora — three generations in one room means three different emotional vocabularies. Sophisticated English for the international crowd, warm rooted Hindi for the parents and elders, and cultural Rajasthani references that make the home crowd feel the pride of the city they chose.",
  },
  {
    q: "What is the typical cost of hiring an anchor for a destination wedding in Udaipur?",
    a: "Destination wedding anchoring fees cover event duration, travel logistics, pre-event research time, and programme complexity. Multi-day weddings with bilingual scripting and full event management are priced differently from single-ceremony events. WhatsApp the event details for a customised quote within the hour.",
  },
  {
    q: "How far in advance should I book for Udaipur's peak wedding season?",
    a: "Udaipur's peak season runs October through March. Dates at lake palace venues fill 6–8 months ahead, especially for Diwali, New Year, and Valentine's weekend. No replacements are sent and no waitlist is maintained. The date is exclusively blocked on receipt of advance — WhatsApp the moment your venue date is confirmed.",
  },
  {
    q: "Do you anchor Sangeet functions on Jagmandir Island?",
    a: "Jagmandir Island Sangeets are among the most technically complex events on the Udaipur circuit — island acoustics, elevated crowd spread, boat-transfer timing for guest flow, and the echo off Lake Pichola. Sangeets here have run 4+ hours without an energy drop using unscripted crowd games, high-energy bilingual hosting, and real-time adaptation to the island's quirks.",
  },
  {
    q: "Can you anchor corporate events and dealer meets in Udaipur?",
    a: "Corporate events — annual galas, product launches, dealer meets, and leadership summits at Leela Udaipur, Radisson Blu, and Trident Udaipur — are a strong specialisation. The hosting register is sharp, brand-aligned, and aware of C-suite hierarchy, not a wedding energy copy-pasted into a boardroom setting.",
  },
  {
    q: "What makes Anchor Yash different from local Udaipur anchors?",
    a: "Local anchors know the city. Anchor Yash Soni knows the city and the crowd psychology to command every segment of it — 1,100+ events, 10,000+ crowds commanded, 4.9★ rating, and a specific track record at Udaipur's top-tier palace properties. The difference shows when the NRI grandfather from London feels as included as the local Rajasthani family cousin dancing in the front row.",
  },
  {
    q: "Who is the best emcee in Udaipur for lake palace weddings?",
    a: "Anchor Yash Soni is the top-rated wedding emcee for Udaipur destination events — 4.9★ verified, with deep experience at Taj Lake Palace, Jagmandir Island, Oberoi Udaivilas, and Leela Udaipur. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies across all Udaipur lake palace venues.",
  },
  {
    q: "What is the difference between a wedding anchor, emcee, and host in Udaipur?",
    a: "Anchor, emcee, host, and MC are four terms for the same role — the professional who leads the event programme, manages transitions, and commands the room. Wedding planners in Udaipur's destination circuit often use 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates flawlessly across all formats and audience types.",
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
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },
    { "@type": "ListItem", position: 3, name: "Anchor in Udaipur", item: "https://yashsoni.in/anchor-in-udaipur" },
  ],
};

// ── GEO SCHEMAS ────────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Anchor in Udaipur | Yash Soni — Lake Palace Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-udaipur",
  description: "Anchor Yash Soni is Udaipur's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in lake palace weddings at Taj Lake Palace, Jagmandir Island, Oberoi Udaivilas, and NRI destination weddings in the City of Lakes.",
  inLanguage: "en-IN",
  about: {
    "@type": "Person",
    name: "Yash Soni",
    alternateName: "Anchor Yash Soni",
    jobTitle: "Professional Event Anchor, Emcee, and Host",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
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
  name: "How to Hire the Best Anchor or Emcee for a Udaipur Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for lake palace weddings, island Sangeets, and corporate events in Udaipur, Rajasthan.",
  totalTime: "PT48H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check Availability via WhatsApp",
      text: "Message +91 7737877978 with your Udaipur event date, type, and venue name. The Udaipur lake palace circuit (October–March) books 6–8 months ahead — confirm availability early, especially for Diwali and New Year dates.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Receive a Udaipur-Specific Quote",
      text: "A quote covering travel, stay, and event hosting for Udaipur destination events is provided within the hour. Taj Lake Palace, Jagmandir Island, Udaivilas, and Leela each have different logistics that are factored into the quote.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Confirm with Advance Payment",
      text: "The date is exclusively blocked on receipt of advance payment. No tentative holds — Udaipur's peak lake palace dates are highly contested.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pre-Event Research Call",
      text: "A dedicated pre-event call covers the full run-of-show, bilingual scripting, NRI guest dynamics, island logistics, and boat-transfer timing for island venues like Jagmandir.",
    },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Best Anchor in Udaipur | Yash Soni — Lake Palace Wedding Specialist",
  description: "Anchor Yash Soni is Udaipur's 4.9★ rated wedding anchor and emcee — specialist in lake palace events at Taj Lake Palace, Jagmandir Island, Oberoi Udaivilas, and NRI destination weddings in the City of Lakes.",
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-udaipur",
  },
  openGraph: {
    title: "Best Anchor in Udaipur | Yash Soni — Lake Palace Wedding Specialist",
    description: "Anchor Yash Soni is Udaipur's 4.9★ rated wedding anchor and emcee — specialist in lake palace events at Taj Lake Palace, Jagmandir Island, and Oberoi Udaivilas.",
    url: "https://yashsoni.in/anchor-in-udaipur",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Udaipur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Udaipur | Yash Soni",
    description: "4.9★ · 200+ reviews · Taj Lake Palace · Jagmandir Island · Oberoi Udaivilas. Udaipur's top anchor, emcee, and wedding host.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
};

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, localBusinessSchema]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PageClient />
    </>
  );
}
