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
  geo: { "@type": "GeoCoordinates", latitude: 24.5926, longitude: 72.7156 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Mount Abu?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specialises in Mount Abu's hill station and heritage resort wedding circuit. Bilingual Hindi/English, completely unscripted, and highly experienced in managing grand destination weddings in Rajasthan's only hill station." },
  { q: "How do you handle the logistics and weather conditions of weddings in Mount Abu?", a: "Mount Abu's hill station environment offers a unique climate, especially during winter and summer evenings. Managing open-air events here requires pacing the timeline effectively to maintain high crowd energy against cooler temperatures, ensuring the celebration remains vibrant and engaging." },
  { q: "Can you host bilingual events for NRI families in Mount Abu?", a: "Yes. Mount Abu attracts NRI families and high-profile domestic clients seeking a scenic destination. Bilingual hosting is critical — sophisticated English for international guests and culturally resonant Hindi for local relatives, ensuring every guest feels connected to the celebration." },
  { q: "What makes Mount Abu different from other Rajasthan destination wedding locations?", a: "Unlike the desert forts or lake palaces, Mount Abu provides a lush, elevated, and serene backdrop. The hosting style must complement this — offering elegant, sophisticated, and warm interaction that suits a scenic hill station environment." },
  { q: "How far in advance should I book for a Mount Abu wedding?", a: "Mount Abu is a popular year-round destination, particularly in summer and early winter. Premium dates at top properties book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Mount Abu for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Mount Abu destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Mount Abu?", a: "Anchor, emcee, host, and MC refer to the same professional role. Event planners often use 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Mount Abu", item: "https://yashsoni.in/anchor-in-mount-abu" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Mount Abu | Yash Soni — Hill Station Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-mount-abu",
  description: "Anchor Yash Soni is Mount Abu's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in hill station weddings and destination events in Mount Abu, Rajasthan.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for a Mount Abu Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for hill station weddings and destination events in Mount Abu, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Mount Abu event date and venue. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering travel, stay, and event hosting logistics for Mount Abu is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Mount Abu | Yash Soni — Hill Station Wedding Specialist",
  description: "Anchor Yash Soni is Mount Abu's 4.9★ rated wedding anchor and emcee — specialist in hill station weddings, grand Sangeets, and NRI destination events.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-mount-abu" },
  openGraph: { title: "Best Anchor in Mount Abu | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Mount Abu. Hill station weddings and grand destination events.", url: "https://yashsoni.in/anchor-in-mount-abu", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Mount Abu — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Mount Abu | Yash Soni", description: "4.9★ · 200+ reviews. Mount Abu's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
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
