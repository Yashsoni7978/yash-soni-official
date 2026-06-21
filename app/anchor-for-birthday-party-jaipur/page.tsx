import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-for-birthday-party-jaipur/layout.jsx
// SERVER COMPONENT — metadata + all schemas
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/anchor-for-birthday-party-jaipur",
  name: "Anchor for Birthday Party Jaipur — Yash Soni",
  description: "700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Professional Birthday Party Anchor & Event Host",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/anchor-for-birthday-party-jaipur",
  serviceType: "Birthday Party Anchor & Host",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Birthday Anchoring Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Milestone Birthday Anchor Jaipur" },
      { "@type": "Offer", name: "Kids Birthday Party Host Jaipur" },
      { "@type": "Offer", name: "Surprise Birthday Event Anchor Jaipur" },
      { "@type": "Offer", name: "Celebrity Birthday Gala Host Jaipur" },
      { "@type": "Offer", name: "Anniversary Celebration Anchor Jaipur" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Anchor in Jaipur", item: "https://yashsoni.in/anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Birthday Party Anchor Jaipur", item: "https://yashsoni.in/anchor-for-birthday-party-jaipur" },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor for Birthday Party in Jaipur | Professional Birthday Host | Yash Soni",
  description:
    "Looking for an anchor for birthday party in Jaipur? Yash Soni hosts milestone birthdays, kids parties, surprise events & celebrity galas — custom scripts, bilingual Hindi/English. Book via WhatsApp.",
  keywords: [
    "anchor for birthday party jaipur",
    "birthday party anchor jaipur",
    "birthday party host jaipur",
    "birthday anchor jaipur",
    "birthday party emcee jaipur",
    "anchor for birthday in jaipur",
    "milestone birthday anchor jaipur",
    "kids birthday party anchor jaipur",
    "surprise birthday anchor jaipur",
    "birthday event anchor jaipur",
    "anchor for 50th birthday jaipur",
    "anchor for 25th birthday jaipur",
    "birthday gala anchor jaipur",
    "birthday anchor rajasthan",
    "professional birthday host jaipur",
    "anchor for anniversary jaipur",
    "anniversary celebration anchor jaipur",
    "yash soni birthday anchor",
    "anchor for birthday party near me",
    "anchor for private party jaipur",
  ],
  alternates: { canonical: "https://yashsoni.in/anchor-for-birthday-party-jaipur" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/anchor-for-birthday-party-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Anchor for Birthday Party Jaipur | Yash Soni",
    description: "Custom scripted, bilingual birthday party anchor in Jaipur. Milestone birthdays, kids parties, surprise events & celebrity galas.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Birthday Party Anchor Jaipur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Party Anchor Jaipur | Yash Soni",
    description: "Custom scripted. Bilingual. 700+ shows. Professional birthday party anchor in Jaipur.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873", ICBM: "26.9124, 75.7873",
  },
};


const FAQS = [
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  {
    q:"How much does a birthday party anchor in Jaipur cost?",
    a:"Birthday party anchoring in Jaipur starts from ₹15,000 for a standard 2–3 hour event. Milestone birthday galas with custom scripting, multiple game segments, and surprise coordination are quoted based on event complexity and duration. WhatsApp the date, venue, and guest count for a quote within the hour." },
  {
    q:"Do you anchor kids' birthday parties in Jaipur?",
    a:"Yes. Kids' birthday parties for ages 5–14 are a specific specialisation. The hosting approach is completely different from adult events — structured games, high interactivity, character-themed segments, and crowd energy management that keeps children genuinely engaged. Available across all Jaipur venues and farmhouses." },
  {
    q:"Can you host a surprise birthday party reveal in Jaipur?",
    a:"Yes. Surprise party hosting requires pre-event planning with the organising family. The reveal timing, the emotional transition from surprise to celebration, the crowd's energy management during the reveal — all scripted and coordinated before the event. Nothing about a surprise reveal should be improvised." },
  {
    q:"What is the difference between a birthday anchor and a regular DJ?",
    a:"A DJ controls the music. A birthday anchor controls the entire experience — the narrative arc of the evening, the crowd energy between segments, the personalised script, the games, the tributes, the emotional moments, and the physical energy in the room. The anchor is why the evening feels curated rather than accidental." },
  {
    q:"Do you anchor birthday parties outside Jaipur?",
    a:"Yes. Birthday event anchoring is available pan-Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and nationally for high-profile or destination birthday events. Travel and accommodation are billed separately and discussed at booking." },
  {
    q:"How far in advance should we book a birthday party anchor in Jaipur?",
    a:"For milestone birthdays with custom scripting, 2–4 weeks minimum. For celebrity-style galas requiring extensive script research and family coordination, 4–6 weeks. Weekend bookings for the October–February peak season fill 6–8 weeks in advance. WhatsApp to check availability immediately." },
  {
    q:"Can you anchor a 50th or 25th milestone birthday in Jaipur?",
    a:"Milestone birthdays are the most emotionally significant events to host well. A 50th birthday script involves research into the guest of honour's life, gathering contributions from family and friends, and building a narrative that genuinely moves the room. These take 2–3 weeks of pre-event preparation and are booked well in advance." },
  {
    q:"Which birthday venues in Jaipur do you work with?",
    a:"All major Jaipur venues have been worked with — Fairmont, ITC Rajputana, Marriott, Leela Palace, Rambagh Palace, Jai Mahal Palace, Samode Haveli, Trident Jaipur, and all standalone banquet venues in Mansarovar, Vaishali Nagar, C-Scheme, and the major farmhouse properties on Ajmer Road." },
  {
    q:"Do you also host anniversary celebrations in Jaipur?",
    a:"Yes. Silver jubilee (25th) and golden jubilee (50th) anniversary celebrations are a natural extension of birthday hosting. The scripting focuses on the couple's journey, with contributions from children, grandchildren, and old friends — building a public tribute that honours the relationship in front of everyone who matters." },
  {
    q:"What games do you use at birthday parties?",
    a:"Never the same games twice. Games are designed based on the specific guest mix — age range, energy level, family dynamics, and what the guest of honour would enjoy. Milestone birthdays get memory-based games, couples get anniversary trivia, kids parties get structured interactive games. Nothing from a recycled template." },
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
  "@id": `https://yashsoni.in/anchor-for-birthday-party-jaipur/#webpage`,
  url: `https://yashsoni.in/anchor-for-birthday-party-jaipur`,
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
