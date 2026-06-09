import type { Metadata } from 'next';
import PageClient from './PageClient';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Anchor Yash Soni",
  image: "https://yashsoni.in/og-image.webp",
  "@id": "https://yashsoni.in/#organization",
  url: "https://yashsoni.in",
  telephone: "+917737877978",
  address: { "@type": "PostalAddress", streetAddress: "Vaishali Nagar", addressLocality: "Jaipur", postalCode: "302021", addressRegion: "RJ", addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: 27.5529, longitude: 76.6346 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Alwar?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specialises in Alwar's palace and heritage resort wedding circuit. Completely unscripted and bilingual, he delivers the elegant, high-energy hosting required for premium venues near the Delhi-NCR region." },
  { q: "How do you handle the unique logistics of weddings in Alwar?", a: "Alwar offers a mix of grand palaces like Tijara Fort-Palace and nature-adjacent resorts. Managing events here requires a host who can seamlessly transition between the regal, traditional tone of a palace setting and the vibrant, high-energy atmosphere of an open-air resort Sangeet." },
  { q: "Can you host bilingual events for NRI families in Alwar?", a: "Yes. Given its proximity to Delhi, Alwar is a prime location for NRI destination weddings. Bilingual cultural bridging ensures international guests remain engaged through sophisticated English, while traditional relatives connect through culturally resonant Hindi." },
  { q: "Do you anchor corporate events in Alwar?", a: "Alwar is an excellent destination for corporate offsites and dealer meets from the Delhi-NCR region. The hosting register for these events is sharp, brand-aligned, and professional, perfectly suited for leadership summits and galas." },
  { q: "How far in advance should I book for an Alwar wedding?", a: "Alwar is highly sought after during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Alwar for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Alwar destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Alwar?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Alwar", item: "https://yashsoni.in/anchor-in-alwar" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Alwar | Yash Soni — Heritage Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-alwar",
  description: "Anchor Yash Soni is Alwar's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in heritage weddings, corporate offsites, and destination events in Alwar, Rajasthan.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for an Alwar Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for heritage weddings and corporate events in Alwar, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Alwar event date and venue. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering travel, stay, and event hosting logistics for Alwar is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Alwar | Yash Soni — Heritage Wedding Specialist",
  description: "Anchor Yash Soni is Alwar's 4.9★ rated wedding anchor and emcee — specialist in heritage weddings, grand Sangeets, and corporate destination events.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-alwar" },
  openGraph: { title: "Best Anchor in Alwar | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Alwar. Heritage weddings and grand destination events.", url: "https://yashsoni.in/anchor-in-alwar", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Alwar — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Alwar | Yash Soni", description: "4.9★ · 200+ reviews. Alwar's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
};

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
