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
  geo: { "@type": "GeoCoordinates", latitude: 26.4899, longitude: 74.5501 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"],
};

const FAQS = [
  { q: "Who is the best anchor for destination weddings in Pushkar?", a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events across Rajasthan, specialising in Pushkar's unique sacred-city destination wedding circuit — Ananta Spa & Resorts, Westin Pushkar, The Bhanwar Singh Palace, and lakeside heritage properties. Bilingual Hindi/English, unscripted, experienced with NRI families who choose Pushkar for its spiritual and visual significance." },
  { q: "What makes hosting a wedding in Pushkar uniquely challenging?", a: "Pushkar is a sacred city with specific cultural sensitivities around noise levels, timing, and ceremonial respect for the ghats and temple vicinity. Navigating event energy and crowd enthusiasm within those constraints requires a host who understands the city deeply — keeping celebrations joyful while honouring the sanctity of the location." },
  { q: "Can you handle NRI families who choose Pushkar for a destination Mehendi or Sangeet?", a: "Pushkar increasingly attracts NRI families seeking a spiritual, intimate backdrop away from the grand palace circuit. The hosting challenge is intimacy at scale — keeping the energy personal and culturally resonant while ensuring international guests understand and feel part of the Rajasthani heritage. This is a core specialisation." },
  { q: "Do you anchor events near Pushkar Lake and the camel fair grounds?", a: "Lakeside and heritage property events around Pushkar Lake are a distinct circuit. The open-air acoustic environment, crowd proximity to the ghats, and the spiritual atmosphere all require a host who reads the room and calibrates energy accordingly — celebratory without being irreverent." },
  { q: "How far in advance should I book for a Pushkar wedding?", a: "Pushkar's peak season aligns with the Camel Fair (November) and the general Rajasthan wedding season (October–February). Premium heritage properties book out 6+ months ahead. WhatsApp immediately upon confirming your Pushkar venue." },
  { q: "Who is the best emcee or host in Pushkar for destination weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Pushkar destination events — with a 4.9★ rating and experience across Ananta, Westin Pushkar, and heritage lakeside properties. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Pushkar?", a: "Anchor, emcee, host, and MC are four terms for the same professional role. Pushkar's international destination wedding planners typically prefer 'emcee' or 'host'; traditional families say 'anchor'. Yash Soni operates flawlessly across all audience types and event formats regardless of what the role is called." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },{ "@type": "ListItem", position: 2, name: "Locations", item: "https://yashsoni.in/locations" },{ "@type": "ListItem", position: 3, name: "Anchor in Pushkar", item: "https://yashsoni.in/anchor-in-pushkar" }] };

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Best Anchor in Pushkar | Yash Soni — Heritage & Sacred City Wedding Specialist",
  url: "https://yashsoni.in/anchor-in-pushkar",
  description: "Anchor Yash Soni is Pushkar's top-rated wedding anchor and emcee — 4.9★ across 200+ reviews. Specialist in heritage lakeside weddings at Ananta, Westin Pushkar, and NRI destination events in Rajasthan's sacred city.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Anchor or Emcee for a Pushkar Destination Wedding",
  description: "Step-by-step process to book Anchor Yash Soni for heritage lakeside weddings and destination events in Pushkar, Rajasthan.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your Pushkar event date and venue. Pushkar's heritage properties fill 6+ months ahead during peak season." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A destination quote covering travel, stay, and Pushkar-specific event hosting logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Cultural Briefing", text: "A pre-event call covers cultural sensitivities specific to Pushkar's sacred-city context, bilingual scripting, and NRI guest dynamics." },
  ],
};

export const metadata: Metadata = {
  title: "Best Anchor in Pushkar | Yash Soni — Heritage Wedding Specialist",
  description: "Anchor Yash Soni is Pushkar's 4.9★ rated wedding anchor and emcee — specialist in heritage lakeside events at Ananta, Westin Pushkar, and NRI destination weddings in Rajasthan's sacred city.",
  alternates: { canonical: "https://yashsoni.in/anchor-in-pushkar" },
  openGraph: { title: "Best Anchor in Pushkar | Yash Soni", description: "4.9★ rated wedding anchor and emcee in Pushkar. Ananta · Westin Pushkar · Heritage lakeside events.", url: "https://yashsoni.in/anchor-in-pushkar", siteName: "Anchor Yash Soni", locale: "en_IN", type: "website", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Pushkar — Yash Soni" }] },
  twitter: { card: "summary_large_image", title: "Best Anchor in Pushkar | Yash Soni", description: "4.9★ · 200+ reviews · Ananta · Westin Pushkar. Pushkar's top anchor, emcee, and wedding host.", images: [{ url: "/og-image.webp", width: 1200, height: 630 }] },
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
