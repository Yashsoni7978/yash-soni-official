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
  geo: { "@type": "GeoCoordinates", latitude: 26.0173, longitude: 76.3505 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Ranthambore?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and is a specialist in Ranthambore's luxury jungle resort wedding circuit. Completely unscripted and bilingual, he delivers the elegant, high-energy hosting required for premium wildlife-adjacent venues." },
  { q: "How do you handle the unique acoustic and timeline constraints of Ranthambore jungle resorts?", a: "Ranthambore's proximity to the national park means strict noise regulations after certain hours and open-air acoustic challenges. Managing the timeline to ensure high-energy segments peak before restrictions, and shifting the crowd's energy seamlessly into intimate, late-night acoustic or DJ sessions, requires a highly experienced host." },
  { q: "Can you host bilingual events for NRI families in Ranthambore?", a: "Yes. Destination weddings in Ranthambore attract a mix of domestic luxury clients and NRI families. Bilingual hosting ensures international guests remain engaged through sophisticated English, while traditional Indian relatives connect deeply through culturally resonant Hindi." },
  { q: "What makes Ranthambore different from other destination wedding locations?", a: "Ranthambore offers an exotic, wildlife-adjacent backdrop that feels both luxurious and wild. The hosting must mirror this — elegant and sophisticated, yet dynamic enough to match the adventurous spirit of a jungle destination." },
  { q: "How far in advance should I book for a Ranthambore wedding?", a: "Ranthambore is highly sought after during the winter wedding season (October–March). Premium jungle resorts book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Ranthambore for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Ranthambore destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Ranthambore?", a: "Anchor, emcee, host, and MC are terms for the same professional role. International event planners often use 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the term used." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Ranthambore", item: "https://yashsoni.in/anchor-in-ranthambore" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Ranthambore | Yash Soni — Jungle Resort Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-ranthambore",
  description: "Anchor Yash Soni is Ranthambore's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in luxury jungle resort weddings and destination events in Ranthambore, Rajasthan.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for a Ranthambore Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for luxury jungle resort weddings and destination events in Ranthambore, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Ranthambore event date and venue. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering travel, stay, and event hosting logistics for Ranthambore is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue noise regulations." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Ranthambore | Yash Soni — Jungle Resort Wedding Specialist",
  description: "Anchor Yash Soni is Ranthambore's 4.9★ rated wedding anchor and emcee — specialist in luxury jungle resort weddings, grand Sangeets, and NRI destination events.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-ranthambore" },
  openGraph: { title: "Best Anchor in Ranthambore | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Ranthambore. Luxury jungle resort weddings and grand destination events.", url: "https://yashsoni.in/anchor-in-ranthambore", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Ranthambore — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Ranthambore | Yash Soni", description: "4.9★ · 200+ reviews. Ranthambore's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
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
