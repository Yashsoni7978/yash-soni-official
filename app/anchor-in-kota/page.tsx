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
  geo: { "@type": "GeoCoordinates", latitude: 25.1815, longitude: 75.8322 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Kota?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specialises in Kota's riverside and heritage resort wedding circuit. Completely unscripted and bilingual, he delivers the elegant, high-energy hosting required for premium venues along the Chambal river." },
  { q: "How do you handle the unique logistics of weddings in Kota?", a: "Kota offers a mix of heritage properties and scenic riverside resorts. Managing events here requires a host who can seamlessly transition between the regal, traditional tone of a palace setting and the vibrant, high-energy atmosphere of an open-air resort Sangeet." },
  { q: "Can you host bilingual events for NRI families in Kota?", a: "Yes. Destination weddings in Kota attract families seeking deep Rajasthani heritage. Bilingual cultural bridging ensures international guests remain engaged through sophisticated English, while traditional relatives connect through culturally resonant Hindi." },
  { q: "Do you anchor corporate events in Kota?", a: "Kota is an excellent destination for corporate offsites and dealer meets. The hosting register for these events is sharp, brand-aligned, and professional, perfectly suited for leadership summits and galas." },
  { q: "How far in advance should I book for a Kota wedding?", a: "Kota is highly sought after during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Kota for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Kota destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Kota?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Kota", item: "https://yashsoni.in/anchor-in-kota" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Kota | Yash Soni — Heritage Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-kota",
  description: "Anchor Yash Soni is Kota's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in heritage weddings, corporate offsites, and destination events in Kota, Rajasthan.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for a Kota Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for heritage weddings and corporate events in Kota, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Kota event date and venue. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering travel, stay, and event hosting logistics for Kota is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Kota | Yash Soni — Heritage Wedding Specialist",
  description: "Anchor Yash Soni is Kota's 4.9★ rated wedding anchor and emcee — specialist in heritage weddings, grand Sangeets, and corporate destination events.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-kota" },
  openGraph: { title: "Best Anchor in Kota | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Kota. Heritage weddings and grand destination events.", url: "https://yashsoni.in/anchor-in-kota", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Kota — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Kota | Yash Soni", description: "4.9★ · 200+ reviews. Kota's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
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
