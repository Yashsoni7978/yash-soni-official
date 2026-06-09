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
  geo: { "@type": "GeoCoordinates", latitude: 26.4499, longitude: 74.6399 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Ajmer?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events, specialising in Ajmer and Pushkar's unique destination wedding circuit — including premium resorts and heritage properties. Bilingual Hindi/English, completely unscripted, and experienced in managing large-scale destination events for NRI and traditional Indian families." },
  { q: "How do you manage events in Ajmer given its proximity to Pushkar?", a: "Ajmer and Pushkar often operate as a combined destination wedding hub. While Pushkar venues focus on lakeside heritage, Ajmer venues often accommodate larger capacities with a blend of modern luxury and tradition. The hosting style adapts seamlessly between the spiritual depth required for a Pushkar ceremony and the high-energy luxury needed for an Ajmer reception." },
  { q: "Can you host bilingual events for NRI families in Ajmer?", a: "Yes. Destination weddings in Ajmer frequently attract NRI families. Bilingual hosting is critical here — sophisticated English for the international guests and respectful, culturally rich Hindi for the local relatives. This ensures every guest feels completely connected to the celebration." },
  { q: "Do you anchor corporate events in Ajmer?", a: "Corporate events, dealer meets, and annual galas at Ajmer's premium hotels are a strong specialisation. The corporate hosting register is sharp, brand-aligned, and professional, distinctly different from a wedding tone." },
  { q: "How far in advance should I book for an Ajmer wedding?", a: "Ajmer's peak season aligns with the general Rajasthan wedding season (October–March). Premium properties and top anchors book out 6–8 months ahead. Secure your dates via WhatsApp as soon as your venue is confirmed." },
  { q: "Who is the best emcee or host in Ajmer for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Ajmer destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies across all Ajmer venues." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Ajmer?", a: "Anchor, emcee, host, and MC refer to the same professional role leading the event. While event planners may say 'emcee' and traditional families say 'anchor', the skill set — managing transitions, commanding the room, and engaging the crowd — remains identical." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Ajmer", item: "https://yashsoni.in/anchor-in-ajmer" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Ajmer | Yash Soni — Heritage & Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-ajmer",
  description: "Anchor Yash Soni is Ajmer's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in heritage weddings, corporate events, and NRI destination weddings in Ajmer, Rajasthan.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for an Ajmer Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Ajmer, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Ajmer event date and venue. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering travel, stay, and event hosting logistics in Ajmer is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Ajmer | Yash Soni — Wedding & Event Specialist",
  description: "Anchor Yash Soni is Ajmer's 4.9★ rated wedding anchor and emcee — specialist in heritage weddings, resort Sangeets, and NRI destination events in Ajmer.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-ajmer" },
  openGraph: { title: "Best Anchor in Ajmer | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Ajmer. Heritage weddings, resort Sangeets, and destination events.", url: "https://yashsoni.in/anchor-in-ajmer", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Ajmer — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Ajmer | Yash Soni", description: "4.9★ · 200+ reviews. Ajmer's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
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
