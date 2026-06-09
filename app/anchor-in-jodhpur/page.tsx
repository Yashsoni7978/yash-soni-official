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
    latitude: 26.2389,
    longitude: 73.0243,
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
    { "@type": "ListItem", position: 3, name: "Anchor in Jodhpur", item: "https://yashsoni.in/anchor-in-jodhpur" },
  ],
};

// ── GEO SCHEMAS ────────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Anchor in Jodhpur | Yash Soni — Palace & Fort Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-jodhpur",
  description: "Anchor Yash Soni is Jodhpur's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in palace weddings at Umaid Bhawan, fort events at Mehrangarh, and NRI destination weddings in the Blue City.",
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
  name: "How to Hire the Best Anchor or Emcee for a Jodhpur Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for palace weddings, fort Sangeets, and corporate functions in Jodhpur, Rajasthan.",
  totalTime: "PT48H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check Availability via WhatsApp",
      text: "Message +91 7737877978 with your Jodhpur event date, type, and venue name. The Jodhpur palace circuit (November–February) books 6–8 months ahead — confirm availability before finalising your venue.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Receive a Jodhpur-Specific Quote",
      text: "A quote covering travel, stay, and event hosting for Jodhpur destination events is provided within the hour. Umaid Bhawan, Mehrangarh Fort, RAAS, and Ajit Bhawan each have different logistics requirements factored into the quote.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Confirm with Advance Payment",
      text: "The date is exclusively blocked on receipt of advance payment. No tentative holds or waitlists for Jodhpur destination dates — competition for premium palace and fort dates is high.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pre-Event Venue Walkthrough",
      text: "For fort and palace venues, a pre-event walkthrough of Mehrangarh Fort or Umaid Bhawan covers acoustics, crowd flow, staging, and royal family protocol requirements. This preparation is non-negotiable for Jodhpur heritage venues.",
    },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Best Anchor in Jodhpur | Yash Soni — Palace & Fort Wedding Specialist",
  description: "Anchor Yash Soni is Jodhpur's 4.9★ rated wedding anchor and emcee — specialist in palace events at Umaid Bhawan, fort Sangeets at Mehrangarh, and NRI destination weddings. The most reviewed anchor and emcee in the Blue City.",
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jodhpur",
  },
  openGraph: {
    title: "Best Anchor in Jodhpur | Yash Soni — Palace & Fort Wedding Specialist",
    description: "Anchor Yash Soni is Jodhpur's 4.9★ rated wedding anchor and emcee — specialist in palace events at Umaid Bhawan, fort Sangeets at Mehrangarh, and NRI destination weddings.",
    url: "https://yashsoni.in/anchor-in-jodhpur",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Jodhpur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jodhpur | Yash Soni",
    description: "4.9★ · 200+ reviews · Umaid Bhawan · Mehrangarh Fort. Jodhpur's top anchor, emcee, and wedding host.",
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
