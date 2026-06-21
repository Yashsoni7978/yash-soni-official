import type { Metadata } from "next";
import PageClient from "./PageClient";

// ── FAQ DATA ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  {
    q: "Who is the best sports commentator and anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's highly sought-after sports commentator, host, and anchor. He brings high-energy live commentary, engaging crowd interaction, and deep sports knowledge to marathons, cricket leagues, corporate sports events, and fitness festivals.",
  },
  {
    q: "What types of sports events do you host?",
    a: "I host a wide variety of sports events including cricket tournaments, marathons, football leagues, corporate sports days, fitness challenges, and esports tournaments across Jaipur and Rajasthan.",
  },
  {
    q: "Can you provide live play-by-play commentary in both English and Hindi?",
    a: "Yes. Bilingual commentary is a strong suit. Switching seamlessly between high-energy Hindi and professional English ensures the entire crowd, regardless of their preferred language, stays engaged and hyped during the matches.",
  },
  {
    q: "Do you handle post-match presentations and award ceremonies?",
    a: "Absolutely. Hosting the post-match presentation, interviewing the Man of the Match, interacting with team owners, and managing the trophy distribution is handled with broadcast-level professionalism.",
  },
  {
    q: "How do you keep the crowd engaged during breaks in the game?",
    a: "The downtime in sports is when the anchor's job truly begins. I use interactive crowd games, music coordination, sponsor shoutouts, and live interviews to keep the energy peaking even when the play is paused.",
  },
  {
    q: "Do you travel for sports events outside Jaipur?",
    a: "Yes, I regularly travel across Rajasthan and India to host regional and national level sports events, leagues, and marathons.",
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
      name: "Sports Commentator Jaipur",
      item: "https://yashsoni.in/sports-commentator-jaipur",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Sports Commentator, Host and Anchor in Jaipur | Yash Soni",
  url: "https://yashsoni.in/sports-commentator-jaipur",
  description: "Top sports commentator, host, and anchor in Jaipur. Yash Soni brings high-octane energy and expert commentary to cricket leagues, marathons, and corporate sports events.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Sports Commentator and Event Anchor", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni"] },
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sports Commentator, Host & Anchor in Jaipur | Yash Soni",
  description:
    "Top sports commentator, host, and anchor in Jaipur. Yash Soni brings high-octane energy and expert commentary to cricket leagues, marathons, and corporate sports events.",
  alternates: {
    canonical: "https://yashsoni.in/sports-commentator-jaipur",
  },
  openGraph: {
    title: "Sports Commentator & Anchor in Jaipur | Yash Soni",
    description:
      "Top sports commentator, host, and anchor in Jaipur. Yash Soni brings high-octane energy to cricket leagues and marathons.",
    url: "https://yashsoni.in/sports-commentator-jaipur",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sports Commentator Anchor Yash Soni — Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Commentator & Anchor in Jaipur | Yash Soni",
    description: "Jaipur's top sports commentator and host.",
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
      <PageClient />
    </>
  );
}
