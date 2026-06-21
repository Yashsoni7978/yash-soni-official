import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best Sangeet anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated Sangeet host with 700+ shows hosted. He specialises in farmhouse Sangeets on Ajmer Road with 500–1,500 guests, palace Sangeet events in Kukas and Amer Road, and destination Sangeets across Jaipur & Rajasthan. His unscripted crowd psychology keeps dance floors packed until 4 AM — consistently.",
  },
  {
    q: "Why hire a professional Sangeet anchor instead of a family member?",
    a: "A professional anchor manages the technical coordination with the DJ, eliminates dead air between performances, handles crises invisibly, and keeps energy peaking for 4–6 hours without fatigue. Family members bring personal moments — Yash brings the architecture that makes those moments land perfectly.",
  },
  {
    q: "Do you help script family performances and entries?",
    a: "Yes. Script templates for family members, creative entry concepts, and a pre-show briefing are included. The goal is to make every family member's announcement sound like a blockbuster movie intro. Nervous Chacha becomes a crowd favourite within 60 seconds.",
  },
  {
    q: "Can you handle farmhouse Sangeets on Ajmer Road with 1,000+ guests?",
    a: "This is a core specialisation. Farmhouse Sangeets on Ajmer Road and Bhankrota with 1,000–1,500 guests are a regular format. Commanding open-air crowds at scale without a script — reading energy, redirecting it, and keeping the dance floor electric until 4 AM — is the skill that separates Yash from announcers.",
  },
  {
    q: "How do you handle technical glitches or delays?",
    a: "A library of 50+ crowd interactions exists specifically for this. If a track doesn't play or a performer is running late, the audience sees a planned crowd moment, not a problem. In 700+ shows, no guest has ever known when something went wrong.",
  },
  {
    q: "Can you host a Bollywood-style Awards Night Sangeet?",
    a: "The Sangeet Awards segment is a signature format — custom award categories like 'The Drama Queen' or 'The Late Arrival', acceptance speeches, trophy moments, and fanfares that involve the whole family. It turns a standard Sangeet into a full production.",
  },
  {
    q: "Do you coordinate with our DJ and sound team?",
    a: "Yes. Arriving 2 hours early for a rigorous sound check is standard. Coordination with the DJ includes specific 'stingers' (punchline sounds), entry tracks, and background scores timed to the millisecond. The audio-visual experience is flawless because it's rehearsed.",
  },
  {
    q: "Do you travel for destination Sangeet events?",
    a: "Yes. Sangeets in Udaipur, Jodhpur, Jaisalmer, Goa, Dubai, and Jaipur & Rajasthan are a regular part of the calendar. The same concert-level energy travels with the anchor. Travel logistics and accommodation are structured into the booking terms.",
  },
  {
    q: "How far in advance should we book a Sangeet anchor in Jaipur?",
    a: "Jaipur's peak wedding season (October–February) books 6–8 months in advance. No waitlists are maintained and no replacement anchors are sent. The moment your venue is locked, reach out via WhatsApp immediately — Sangeet dates in peak season fill before wedding slots.",
  },
  {
    q: "What is the hosting duration for a Sangeet?",
    a: "A standard Sangeet shift is 4–6 hours — from guest arrivals and family entries through the stage show and into the open dance floor. For large farmhouse events on Ajmer Road that run until 4 AM, extended duration terms are available.",
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
      name: "Sangeet Anchor Jaipur",
      item: "https://yashsoni.in/sangeet-anchor-jaipur",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Sangeet Ceremony Anchor in Jaipur | Yash Soni",
  url: "https://yashsoni.in/sangeet-anchor-jaipur",
  description: "Best sangeet anchor in Jaipur. Yash Soni hosts high energy sangeet nights with music coordination, crowd games and family performance management.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Sangeet Anchor in Jaipur",
  description: "Step-by-step process to book Anchor Yash Soni for your high-energy Sangeet night in Jaipur.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your event dates and venues. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: 'Sangeet Ceremony Anchor in Jaipur | Yash Soni',
  description: 'Best sangeet anchor in Jaipur. Yash Soni hosts high energy sangeet nights with music coordination, crowd games and family performance management.',
  alternates: {
    canonical: 'https://yashsoni.in/sangeet-anchor-jaipur',
  },
  openGraph: {
    title: 'Sangeet Ceremony Anchor in Jaipur | Yash Soni',
    description: 'Best sangeet anchor in Jaipur. Yash Soni hosts high energy sangeet nights with music coordination, crowd games and family performance management.',
    url: 'https://yashsoni.in/sangeet-anchor-jaipur',
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
