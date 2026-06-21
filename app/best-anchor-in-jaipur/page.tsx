import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/best-anchor-in-jaipur/layout.jsx
// SERVER COMPONENT
// RULE: This file ONLY exports metadata + a simple layout wrapper.
// NO <head> tags. NO <script> tags. NO dangerouslySetInnerHTML.
// Schemas go in page.jsx (client component body). Geo signals go in metadata.other.
export const metadata: Metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Rated Wedding & Event Host",
  description: "Jaipur's highest-rated anchor with 50+ reviews. Yash Soni — unscripted, bilingual, trusted for weddings and corporate events across Rajasthan.",
  keywords: [
    "best anchor in jaipur",
    "anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "best wedding anchor in jaipur",
    "anchor yash soni",
    "anchor yash",
    "wedding anchor jaipur",
    "sangeet anchor jaipur",
    "haldi anchor jaipur",
    "mehendi anchor jaipur",
    "corporate anchor jaipur",
    "anchor for birthday party jaipur",
    "farmhouse wedding anchor jaipur",
    "nri wedding anchor jaipur",
    "destination wedding anchor jaipur",
    "anchor near me jaipur",
    "anchor in rajasthan",
    "best anchor rajasthan",
    "event host jaipur",
    "wedding emcee jaipur",
    "anchor for events jaipur",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor sitapura jaipur",
    "anchor mansarovar jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/best-anchor-in-jaipur",
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
    url: "https://yashsoni.in/best-anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Rated",
    description:
      "1100+ events. 4.9★ across 50+ reviews. Jaipur's most trusted anchor for weddings, Sangeets, corporate galas & VIP events.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Anchor in Jaipur on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description:
      "4.9★ rated. 1100+ events. Jaipur's most commanding anchor for weddings, Sangeets & corporate events.",
    images: ["/og-image.webp"],
  },
  // Geo signals — Next.js renders these as <meta> tags correctly
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
// Layout: just pass children through. Nothing else.


const FAQS = [
  { q: "Who is the best anchor in Jaipur for weddings and events?", a: "Anchor Yash Soni is one of Jaipur's most reviewed event anchors with a 4.9★ rating across 50+ verified reviews on Google, WedMeGood, WeddingWire, and Justdial. He has hosted 1,100+ events across Rajasthan and India, specialising in luxury weddings, Sangeet nights, corporate award shows, Haldi and Mehendi ceremonies, NRI destination weddings, and VIP birthday galas." },
  { q: "What areas of Jaipur does the anchor cover?", a: "Yash Soni covers all major event zones across Jaipur — palace and heritage venues in Kukas, Amer Road, and Delhi Road; farmhouse wedding venues on Ajmer Road, Bhankrota, and Jhotwara; premium banquets in Mansarovar, Vaishali Nagar, and C-Scheme; and corporate hubs including JECC Sitapura, Tonk Road, and JLN Marg. He also travels Jaipur & Rajasthan and across Rajasthan for destination events." },
  { q: "Is Anchor Yash Soni available for Sangeet and Haldi in Jaipur?", a: "Yes. Sangeet and Haldi ceremonies are core specialisations. For Sangeet events on Ajmer Road and Bhankrota farmhouses, he routinely manages 500–1,500 guests with dance floors packed until 4 AM. For Haldi, he curates interactive games, viral moments, and crowd energy that makes the ceremony genuinely memorable." },
  { q: "Can this anchor handle a large farmhouse crowd of 1000+ guests on Ajmer Road?", a: "This is a signature strength. Yash Soni has commanded open events of 10,000+ people unscripted. A farmhouse crowd of 1,000–1,500 guests on Ajmer Road is a standard evening. The ability to read a large crowd's energy, control chaos, and redirect attention is the core skill that separates a real anchor from an announcer." },
  { q: "Does Anchor Yash Soni host NRI and destination weddings in Jaipur?", a: "NRI families and international guests are a core specialisation. Yash is completely fluent in English and Hindi, understands international etiquette and protocols, and has deep knowledge of traditional Rajasthani wedding customs — making him the anchor of choice for families flying into Jaipur from the UK, USA, Canada, and the Gulf." },
  { q: "How far in advance should I book the anchor?", a: "The calendar fills 6–8 months ahead for peak wedding season (October–February). No waitlists are maintained and no replacement anchors are sent. Once your date is confirmed, it is exclusively reserved for your event. Reach out via WhatsApp the moment your date is finalised." },
  { q: "Is Anchor Yash Soni available for corporate events at JECC Sitapura?", a: "Yes. Corporate events — award nights, product launches, annual galas, and business summits — are a core specialisation. Events at JECC Sitapura, Tonk Road, JLN Marg, and Malviya Nagar for national corporations are a regular part of the calendar. The corporate register is completely different from wedding hosting — sharp, concise, brand-aligned, and capable of matching the gravitas of keynote speakers." },
  { q: "What languages does Anchor Yash Soni host in?", a: "Hindi and English fluently, often simultaneously. For NRI families and international guests, transitions between Hindi and English are completely seamless — sometimes mid-sentence. There is also working knowledge of Rajasthani and Marwari for traditional ceremonies and rituals." },
  { q: "Is Anchor Yash available for birthday parties in Jaipur?", a: "Yes. Milestone birthdays, anniversary galas, and VIP private events in Mansarovar, Vaishali Nagar, and C-Scheme are a significant part of the calendar. Every event is fully customised — the energy and tone matched precisely to the family's personality and vision." },
  { q: "What makes this anchor different from other anchors in Jaipur?", a: "Three things: First, not a single paper script has been used in 1,100+ events. Second, crisis management — power cuts, audio failures, delayed schedules — are all handled invisible to guests. Third, cultural fluency across Rajasthani traditions, NRI international protocols, and corporate decorum that most anchors simply don't have." },
  { q: "Does Yash Soni travel outside Jaipur for events?", a: "Yes. Events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer — are a regular part of the calendar. Jaipur & Rajasthan destination events are also available for the right engagements. Travel logistics and accommodation are structured into the booking terms." },
  { q: "How much does the best anchor in Jaipur charge?", a: "Pricing varies based on event type, duration, date, and location. For a transparent pricing breakdown, see the Anchor Charges in Jaipur 2026 guide on the blog. To get an exact quote for your event, reach out via WhatsApp with your event date, type, and guest count." },
  { q: "What is the booking process?", a: "Step 1: Send a WhatsApp message with your event date, type, and guest count. Step 2: Availability check and introductory call. Step 3: Simple written agreement and 50% advance to confirm the date. The remaining balance is due on the event day before the show begins." },
  { q: "Can Anchor Yash Soni do virtual or hybrid events?", a: "Yes. Virtual town halls, hybrid corporate galas, and online award ceremonies are part of the service offering. The craft of engaging an audience through a camera lens is fundamentally different from stage hosting, and both have been mastered." },
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
  "@id": `https://yashsoni.in/best-anchor-in-jaipur/#webpage`,
  url: `https://yashsoni.in/best-anchor-in-jaipur`,
  name: `Best Anchor in jaipur | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in jaipur. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in jaipur`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in jaipur.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in jaipur.` },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show and specific venue logistics." }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, howToSchema, faqSchema]) }} />
      <PageClient />
    </>
  );
}
