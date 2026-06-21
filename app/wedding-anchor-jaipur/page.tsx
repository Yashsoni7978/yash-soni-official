import type { Metadata } from "next";
import PageClient from "./PageClient";

// ── FAQ DATA ───────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Who is the best wedding anchor in Jaipur for premium weddings?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated wedding anchor with 700+ weddings hosted across Rajasthan and India. He specialises in luxury weddings at palace venues in Kukas and Amer Road, farmhouse Sangeets on Ajmer Road, and NRI destination weddings. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top choice for elite families.",
  },
  {
    q: "Do you prepare scripts for family members hosting performances?",
    a: "Yes. I know Chachas and Masis get nervous. I provide simple, funny script templates and do a quick 10-minute rehearsal with family members before the show so they look confident and professional on stage. This is included as part of the preparation for every Sangeet.",
  },
  {
    q: "Can you handle a crowd that is shy to dance or participate?",
    a: "That is a specialty. I use interactive Ice-Breaker games and crowd psychology techniques that naturally pull even the shyest guests onto the floor — without force or awkwardness. The dance floor at every Sangeet I host ends up packed. That is the benchmark.",
  },
  {
    q: "Do you travel for destination weddings across Rajasthan and India?",
    a: "Absolutely. While Jaipur is the base, I regularly host destination weddings in Udaipur, Jodhpur, Jaisalmer, Pushkar, and across Jaipur & Rajasthan. Travel logistics and accommodation are structured into the booking terms. Early enquiry is recommended as destination slots fill faster.",
  },
  {
    q: "What is your hosting style — traditional or modern?",
    a: "Both, and knowing which to use when is the craft. High-energy, sharp wit for the Sangeet and Baraat. Deeply traditional, poetic, and sophisticated for the Varmala and Pheras. The ability to shift between these registers seamlessly — without the room noticing the switch — is what sets a real wedding anchor apart.",
  },
  {
    q: "Do you provide fluent commentary in English and Hindi?",
    a: "Yes, fluently in both. For NRI families with international guests, I switch between Hindi and English seamlessly — sometimes mid-sentence — without breaking the room's energy. I also add Marwari and Rajasthani cultural touches to connect with family elders.",
  },
  {
    q: "What happens if the wedding timeline runs late?",
    a: "Indian weddings always run late — I plan for it. I carry a library of crowd interactions, games, and filler moments specifically designed for unexpected gaps. When the delay happens, the guests don't see a problem. They see a planned crowd moment. That is the real skill.",
  },
  {
    q: "How far in advance should we book a wedding anchor in Jaipur?",
    a: "Jaipur's peak wedding season (October–February) fills 6–8 months in advance. I do not maintain a waitlist and do not send replacements. Once your date is confirmed, it is exclusively reserved for your event. The moment your venue is locked, reach out via WhatsApp.",
  },
];

// ── STRUCTURED DATA ────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wedding Anchor Jaipur",
      item: "https://yashsoni.in/wedding-anchor-jaipur",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Wedding Anchor in Jaipur | Best Wedding Emcee | Yash Soni",
  url: "https://yashsoni.in/wedding-anchor-jaipur",
  description: "Best wedding anchor in Jaipur. Yash Soni has hosted 700+ shows across Rajasthan — bilingual, energetic and deeply experienced wedding emcee.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Wedding Anchor in Jaipur",
  description: "Step-by-step process to book Anchor Yash Soni for your luxury wedding in Jaipur.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your event dates and venues. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, bilingual scripting requirements, and specific venue logistics." },
  ],
};

// FIXED: VideoObject schema removed — had 3 TODO placeholder fields which
// produce invalid JSON-LD and fail Google Rich Results Test.
// Re-add once you have a real YouTube URL + thumbnail + upload date.

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Wedding Anchor in Jaipur | Best Wedding Emcee | Yash Soni",
  description:
    "Best wedding anchor in Jaipur. Yash Soni has hosted 700+ shows across Rajasthan — bilingual, energetic and deeply experienced wedding emcee. Book now.",
  alternates: {
    canonical: "https://yashsoni.in/wedding-anchor-jaipur",
  },
  openGraph: {
    title: "Wedding Anchor in Jaipur | Best Wedding Emcee | Yash Soni",
    description:
      "Best wedding anchor in Jaipur. Yash Soni has hosted 700+ shows across Rajasthan — bilingual, energetic and deeply experienced wedding emcee.",
    url: "https://yashsoni.in/wedding-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Wedding Anchor Yash Soni hosting a luxury Jaipur wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Anchor in Jaipur | Yash Soni",
    description:
      "700+ weddings. Bilingual. Unscripted. Jaipur's most trusted wedding emcee.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
};

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PageClient />
    </>
  );
}
