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
  geo: { "@type": "GeoCoordinates", latitude: 27.9866, longitude: 76.3888 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Neemrana?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specialises in Neemrana's fort palace and heritage resort wedding circuit. Bilingual Hindi/English, completely unscripted, and deeply experienced in managing grand destination weddings for families travelling from Delhi-NCR and abroad." },
  { q: "How do you handle the logistics and acoustics of fort weddings in Neemrana?", a: "Neemrana's heritage venues, particularly Neemrana Fort Palace, feature multi-level open-air settings and unique acoustic challenges. Managing event energy across these stepped terraces requires an experienced host who uses precise pacing and crowd psychology to draw guests together, maintaining a high-energy atmosphere despite the vertical spread." },
  { q: "Can you host bilingual events for NRI families in Neemrana?", a: "Yes. Given its proximity to Delhi, Neemrana frequently hosts NRI destination weddings. Bilingual cultural bridging is essential here — sophisticated English for international guests combined with culturally rich Hindi ensures everyone connects with the royal Rajasthani setting." },
  { q: "Do you anchor corporate events in Neemrana?", a: "Neemrana is a prime location for corporate offsites, dealer meets, and leadership summits from the Delhi-NCR region. The hosting register for these events is sharp, brand-aligned, and professional, distinctly different from a high-energy wedding tone." },
  { q: "How far in advance should I book for a Neemrana wedding?", a: "Neemrana is highly sought after year-round but especially during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Neemrana for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Neemrana destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless royal event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Neemrana?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families might say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Neemrana", item: "https://yashsoni.in/anchor-in-neemrana" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Neemrana | Yash Soni — Fort Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-neemrana",
  description: "Anchor Yash Soni is Neemrana's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in royal fort weddings, corporate offsites, and destination events in Neemrana, Rajasthan.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for a Neemrana Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for royal fort weddings and corporate events in Neemrana, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Neemrana event date and venue. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering travel, stay, and event hosting logistics for Neemrana is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific heritage venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Neemrana | Yash Soni — Fort Wedding Specialist",
  description: "Anchor Yash Soni is Neemrana's 4.9★ rated wedding anchor and emcee — specialist in royal fort weddings, grand Sangeets, and corporate destination events.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-neemrana" },
  openGraph: { title: "Best Anchor in Neemrana | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Neemrana. Royal fort weddings and grand destination events.", url: "https://yashsoni.in/anchor-in-neemrana", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Neemrana — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Neemrana | Yash Soni", description: "4.9★ · 200+ reviews. Neemrana's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
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
