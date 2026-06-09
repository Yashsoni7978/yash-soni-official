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
    latitude: 26.9157,
    longitude: 70.9083,
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
    q: "Who is the best anchor for luxury weddings in Jaisalmer?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specialises in the ultra-luxury and NRI destination wedding demographic in Jaisalmer — with deep experience at Suryagarh, Marriott Jaisalmer, The Serai, and premium desert camp venues. He delivers the flawless, bilingual, and sophisticated hosting required for Jaisalmer's discerning clientele.",
  },
  {
    q: "How do you handle the acoustics of open desert events at Sam Sand Dunes?",
    a: "Open desert is one of the hardest acoustic environments in the world — sound dissipates instantly and wind interferes with microphone usage. The solution is crowd psychology: using precise pacing to draw the audience physically closer to the stage, creating an intimate bubble of energy that defies the infinite space around it. This is a technique that comes from experience, not theory.",
  },
  {
    q: "Can you host a bilingual event that bridges NRI modern life with Rajasthani tradition?",
    a: "Bilingual cultural bridging is the cornerstone of Jaisalmer destination wedding hosting. NRI families from the US, UK, and UAE bring their extended diaspora — the hosting must be perfectly bilingual, ensuring international guests are completely engrossed while Indian relatives feel the full cultural depth and pride of the Rajputana Thar setting.",
  },
  {
    q: "Do you integrate local Rajasthani folk musicians (like Manganiyars) into your events?",
    a: "Manganiyar folk musicians are woven seamlessly into Jaisalmer events — respectfully introduced and strategically placed so the transition from heritage folk to modern Sangeet beats feels like a natural cultural evolution, not a jarring interruption. Yash coordinates directly with musicians and DJs to manage this flow.",
  },
  {
    q: "Have you hosted corporate elite events and offsites in Jaisalmer?",
    a: "Jaisalmer is a highly sought-after destination for CEO-level retreats and top-tier reward trips. Brand-aligned, executive-level hosting for daytime leadership summits and premium gala hosting for evening desert safaris maintain a professional yet highly engaging tone throughout.",
  },
  {
    q: "What makes Jaisalmer different from Jaipur or Udaipur for a wedding host?",
    a: "Jaisalmer is remote and extreme — families who choose the Golden City are deliberately isolating themselves in luxury at the edge of the Thar Desert. The hosting must match the vastness of the setting: unmatched elegance, profound environmental awareness, and a stage presence that can command an audience under the weight of a living 12th-century fort.",
  },
  {
    q: "What happens if it gets very cold during our desert Sangeet?",
    a: "Desert temperatures plummet rapidly after sunset from November to February. As the host, the timeline is aggressively adjusted — cutting long gaps, driving interactive segments rapidly, and immediately moving the crowd to the dance floor to maintain energy and core temperature. This real-time adaptation is what separates experienced Jaisalmer anchors from untested ones.",
  },
  {
    q: "How far in advance should we book for a Jaisalmer event?",
    a: "Jaisalmer events often require multi-day blockouts due to travel distance from central Rajasthan — availability disappears quickly during peak winter months. Families booking Suryagarh or the Marriott typically lock their anchor simultaneously with the venue. WhatsApp immediately upon confirming your dates.",
  },
  {
    q: "Who is the best emcee in Jaisalmer for desert weddings?",
    a: "Anchor Yash Soni is the top-rated wedding emcee and host for Jaisalmer destination events — with a 4.9★ verified rating and experience at Suryagarh, The Serai, Gorbandh Palace, and Sam Sand Dunes venues. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies across all Jaisalmer settings.",
  },
  {
    q: "What is the difference between a wedding anchor, emcee, and host in Jaisalmer?",
    a: "Anchor, emcee, host, and MC are four terms for the same role. International destination wedding planners typically prefer 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates across all formats flawlessly — the Jaisalmer fort and desert circuit demands the same skill regardless of what the role is called.",
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
    { "@type": "ListItem", position: 3, name: "Anchor in Jaisalmer", item: "https://yashsoni.in/anchor-in-jaisalmer" },
  ],
};

// ── GEO SCHEMAS ────────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Anchor in Jaisalmer | Yash Soni — Desert & Fort Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-jaisalmer",
  description: "Anchor Yash Soni is Jaisalmer's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in desert weddings at Suryagarh, The Serai, Sam Sand Dunes, fort events, and NRI destination weddings in the Golden City.",
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
  name: "How to Hire the Best Anchor or Emcee for a Jaisalmer Desert Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for desert weddings, fort events, and corporate retreats in Jaisalmer, Rajasthan.",
  totalTime: "PT72H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check Availability via WhatsApp",
      text: "Message +91 7737877978 with your Jaisalmer event date, type, and venue. Jaisalmer's desert circuit (November–February) books 6–8 months ahead. Confirm availability simultaneously with venue selection.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Receive a Jaisalmer-Specific Quote",
      text: "A quote covering multi-day travel, stay logistics, and event hosting for the Jaisalmer destination circuit is provided within the hour. Desert camp, fort, and palace venue logistics differ significantly and are factored in.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Confirm with Advance Payment",
      text: "The date is exclusively blocked on receipt of advance payment. No tentative holds — Jaisalmer peak-season dates fill quickly due to limited premium venue availability.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pre-Event Desert Briefing",
      text: "A pre-event briefing covers desert temperature management, acoustic handling for open venues, Manganiyar folk music integration, bilingual scripting for NRI guests, and sunset timing for the Sangeet or ceremony.",
    },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Best Anchor in Jaisalmer | Yash Soni — Desert & Fort Wedding Specialist",
  description: "Anchor Yash Soni is Jaisalmer's 4.9★ rated wedding anchor and emcee — specialist in desert weddings at Suryagarh, The Serai, Sam Sand Dunes, and NRI destination weddings in the Golden City.",
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jaisalmer",
  },
  openGraph: {
    title: "Best Anchor in Jaisalmer | Yash Soni — Desert & Fort Wedding Specialist",
    description: "Anchor Yash Soni is Jaisalmer's 4.9★ rated wedding anchor and emcee — specialist in desert weddings at Suryagarh, The Serai, and NRI destination weddings in the Golden City.",
    url: "https://yashsoni.in/anchor-in-jaisalmer",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Jaisalmer — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaisalmer | Yash Soni",
    description: "4.9★ · 200+ reviews · Suryagarh · The Serai · Sam Sand Dunes. Jaisalmer's top anchor, emcee, and desert wedding host.",
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
