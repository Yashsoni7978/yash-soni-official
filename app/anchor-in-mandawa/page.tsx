import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-mandawa/layout.jsx
// Minimal layout — all metadata & schemas are in page.tsx


const FAQS = [
  { q: "Who is the best anchor for destination weddings in Mandawa?", a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and specialises in Mandawa's haveli and heritage resort wedding circuit. Completely unscripted and bilingual, he delivers the regal, high-energy hosting required for premium venues in the heart of the Shekhawati region." },
  { q: "How do you handle the logistics of heritage weddings in Mandawa?", a: "Mandawa offers majestic havelis and heritage properties with unique acoustic challenges and intimate courtyard layouts. Managing event energy in these settings requires an experienced host who uses precise pacing to create a vibrant, high-energy atmosphere that complements the historic surroundings." },
  { q: "Can you host bilingual events for NRI families in Mandawa?", a: "Yes. Destination weddings in Mandawa attract families seeking deep Rajasthani heritage. Bilingual hosting ensures international guests remain engaged through sophisticated English, while traditional relatives connect deeply through culturally resonant Hindi." },
  { q: "Do you anchor corporate events in Mandawa?", a: "Mandawa is a unique destination for corporate offsites and leadership retreats. The hosting register for these events is sharp, brand-aligned, and professional, perfectly suited for intimate summits and galas." },
  { q: "How far in advance should I book for a Mandawa wedding?", a: "Mandawa is highly sought after during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Mandawa for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Mandawa destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Mandawa?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
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
  "@id": `https://yashsoni.in/anchor-in-mandawa/#webpage`,
  url: `https://yashsoni.in/anchor-in-mandawa`,
  name: `Best Anchor in mandawa | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in mandawa. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in mandawa`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in mandawa.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in mandawa.` },
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
