import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best Mehendi anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated Mehendi host with 700+ shows hosted. He specialises in hands-free interactive Mehendi games, Ladies Sangeet hosting, musical trivia, and combined Mehendi-Sangeet events. His bilingual Hindi/English fluency makes him the top choice for both local Jaipur families and NRI weddings.",
  },
  {
    q: "Why hire a specialised Mehendi anchor in Jaipur?",
    a: "Mehendi ceremonies run 3–4 hours while guests have wet henna. Without a specialised host, those hours drag. A Mehendi anchor curates hands-free musical games, verbal trivia, and crowd interactions that keep energy peaking for the entire ceremony — no awkward silences, no guests on their phones, no boring waiting.",
  },
  {
    q: "What kind of Mehendi games are played for guests with henna on?",
    a: "Because guests can't use their hands freely, all games are specifically designed for verbal and visual participation. Bollywood Antakshari with modern rules, Guess the Song Challenge, Couple Trivia Roasts, Musical Tambola, and Rapid Fire Ice-Breakers. Every game keeps the crowd active without requiring hands.",
  },
  {
    q: "Do you host Ladies Sangeet alongside the Mehendi ceremony?",
    a: "Yes. Combined Mehendi and Ladies Sangeet events are a core specialisation. The challenge is bridging traditional Dholak sessions for the elders and modern Bollywood games for the youth — doing both in the same evening without losing either group. That transition is a skill that takes 700+ shows to perfect.",
  },
  {
    q: "Can you handle the groom's entry at a combined Mehendi event?",
    a: "Absolutely. Combined Mehendi events with a groom's entry are incredibly energetic. The Bride Squad vs. Groom Squad dynamic, a Dhol-backed entry build, and the couple games that follow — all choreographed to feel spontaneous and organic, never rehearsed.",
  },
  {
    q: "Do you coordinate with the DJ and Dhol team for Mehendi?",
    a: "Yes. Arriving at least 1.5 hours early for a coordination call with the DJ and Dholwala is standard. Specific music cues, game background beats, and entry tracks are all synced so the audio-visual experience is seamless throughout the Mehendi.",
  },
  {
    q: "What if some family members are shy to participate?",
    a: "That's exactly what professional crowd psychology is for. I use seamless Ice-Breakers that pull people in naturally without putting them on the spot. The goal is for every guest — from Nani to the youngest cousin — to feel included and engaged, never forced.",
  },
  {
    q: "Do you travel for Mehendi events outside Jaipur?",
    a: "Yes. Destination Mehendi events in Udaipur, Jodhpur, Jaisalmer, Goa, Dubai, and across Jaipur & Rajasthan are a regular part of the calendar. Travel logistics are structured into the booking terms. Early enquiry is recommended as destination slots fill before regular Jaipur dates.",
  },
  {
    q: "What is the hosting duration for a Mehendi ceremony?",
    a: "A standard Mehendi package is 3–4 hours — from guest arrivals through the henna application games and into the open Dholak or dance session at the end. For combined Mehendi + Ladies Sangeet events, extended 5–6 hour formats are available.",
  },
  {
    q: "How far in advance should we book a Mehendi anchor in Jaipur?",
    a: "Mehendi and Sangeet dates fill faster than wedding ceremony slots during peak season (October–February) because multiple clients from the same week compete for the same anchor. Booking 6–8 months in advance is strongly recommended. WhatsApp the moment your venue is confirmed.",
  },
  {
    q: "What languages does the Mehendi anchor host in?",
    a: "Hindi and English fluently, often simultaneously. For NRI families and international guests, the switch between the two is seamless. Warm Marwari and Rajasthani touches for local family elders are included — Nani's reaction is always the best moment of the ceremony.",
  },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
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
      name: "Mehendi Anchor Jaipur",
      item: "https://yashsoni.in/mehendi-anchor-jaipur",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Mehendi Ceremony Anchor in Jaipur | Yash Soni",
  url: "https://yashsoni.in/mehendi-anchor-jaipur",
  description: "Hire a professional mehendi anchor in Jaipur. Yash Soni brings energy, music coordination and crowd engagement to your mehendi function.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Mehendi Anchor in Jaipur",
  description: "Step-by-step process to book Anchor Yash Soni for your high-energy Mehendi ceremony in Jaipur.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your event dates and venues. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: 'Mehendi Ceremony Anchor in Jaipur | Yash Soni',
  description: 'Hire a professional mehendi anchor in Jaipur. Yash Soni brings energy, music coordination and crowd engagement to your mehendi function.',
  alternates: {
    canonical: 'https://yashsoni.in/mehendi-anchor-jaipur',
  },
  openGraph: {
    title: 'Mehendi Ceremony Anchor in Jaipur | Yash Soni',
    description: 'Hire a professional mehendi anchor in Jaipur. Yash Soni brings energy, music coordination and crowd engagement to your mehendi function.',
    url: 'https://yashsoni.in/mehendi-anchor-jaipur',
    siteName: 'Yash Soni - Anchor & Emcee',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PageClient />
    </>
  );
}
