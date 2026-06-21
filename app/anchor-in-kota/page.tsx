import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-kota/layout.jsx
// Minimal layout — all metadata & schemas are in page.tsx


const FAQS = [
  { q: "Who is the best anchor for destination weddings in Kota?", a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and specialises in Kota's riverside and heritage resort wedding circuit. Completely unscripted and bilingual, he delivers the elegant, high-energy hosting required for premium venues along the Chambal river." },
  { q: "How do you handle the unique logistics of weddings in Kota?", a: "Kota offers a mix of heritage properties and scenic riverside resorts. Managing events here requires a host who can seamlessly transition between the regal, traditional tone of a palace setting and the vibrant, high-energy atmosphere of an open-air resort Sangeet." },
  { q: "Can you host bilingual events for NRI families in Kota?", a: "Yes. Destination weddings in Kota attract families seeking deep Rajasthani heritage. Bilingual cultural bridging ensures international guests remain engaged through sophisticated English, while traditional relatives connect through culturally resonant Hindi." },
  { q: "Do you anchor corporate events in Kota?", a: "Kota is an excellent destination for corporate offsites and dealer meets. The hosting register for these events is sharp, brand-aligned, and professional, perfectly suited for leadership summits and galas." },
  { q: "How far in advance should I book for a Kota wedding?", a: "Kota is highly sought after during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Kota for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Kota destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Kota?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
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
  "@id": `https://yashsoni.in/anchor-in-kota/#webpage`,
  url: `https://yashsoni.in/anchor-in-kota`,
  name: `Best Anchor in kota | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in kota. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in kota`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in kota.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in kota.` },
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
