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
    q: "Who is the best corporate event anchor in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated corporate event anchor with 700+ shows hosted and 70+ national brands served. He specialises in award nights, conferences, product launches, gala dinners, dealer meets, and annual day celebrations at venues including JECC Sitapura, Birla Auditorium, Marriott Jaipur, Fairmont, and corporate campuses across Jaipur.",
  },
  {
    q: "Do you provide a GST invoice for corporate bookings?",
    a: "Yes. A fully compliant GST invoice is issued for every corporate booking. The booking process includes a formal agreement, advance confirmation, and complete documentation for your accounts team.",
  },
  {
    q: "Are you comfortable with teleprompters for televised events?",
    a: "Yes. For high-stakes summits, product launches, and broadcast-quality corporate productions, teleprompter work is standard. Reading naturally while maintaining full eye contact with a live audience — so it never looks scripted on camera — is a trained skill that comes from experience.",
  },
  {
    q: "Can you moderate panel discussions and Q&A sessions?",
    a: "Yes. Panel moderation includes pre-event research into each speaker's recent work and positions, preparation of insightful questions, and real-time management of audience Q&A. The discussion flows, stays on time, and the panellists feel respected.",
  },
  {
    q: "Do you travel for corporate events outside Jaipur?",
    a: "Yes. While Jaipur is the base, corporate events in Delhi, Mumbai, Bangalore, and other cities are a regular part of the calendar. A significant portion of corporate work happens outside Rajasthan. Travel and accommodation are typically arranged by the client as part of the engagement terms.",
  },
  {
    q: "How do you handle audience engagement in long conferences?",
    a: "Long conferences lose audiences in the gaps between sessions. The craft is in managing those transitions — using sharp wit, brief interactive moments, and energy pivots at exactly the right points. The audience stays present and your message gets through. This is what 70+ corporate brands have paid for.",
  },
  {
    q: "Can you anchor both the formal ceremony and the gala dinner afterparty?",
    a: "Yes. Shifting from formal award ceremony to high-energy gala entertainment in the same evening — without the room noticing the gear change — is a core corporate skill. Both registers are mastered.",
  },
  {
    q: "What is your approach to brand alignment on stage?",
    a: "I read the brand brief before every event. Tone of voice, prohibited language, key messages to reinforce, and the exact persona the brand wants on stage. I dress the part, speak the part, and never deviate from the brand's positioning. No freelancing.",
  },
  {
    q: "How far in advance should corporate events be booked?",
    a: "For large-format corporate events at JECC Sitapura and five-star venues, 3–4 months in advance is recommended during peak season. Annual Day events and Q4 award nights book even faster. Reach out via WhatsApp as soon as the venue is confirmed.",
  },
  {
    q: "What sets Anchor Yash apart from other corporate anchors in Jaipur?",
    a: "Three things: First, 70+ national brands served — the experience shows. Second, completely unscripted crisis management — PA failures, delayed speakers, schedule overruns all handled invisible to the audience. Third, broadcast-ready precision — for events that are recorded or livestreamed, there are zero on-air errors.",
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
      name: "Corporate Event Anchor Jaipur",
      item: "https://yashsoni.in/corporate-event-anchor-jaipur",
    },
  ],
};

// FIXED: VideoObject schema removed — had 3 TODO placeholder fields which
// produce invalid JSON-LD. Re-add when you have a real YouTube corporate showreel.

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Corporate Event Anchor in Jaipur | Emcee | Yash Soni",
  url: "https://yashsoni.in/corporate-event-anchor-jaipur",
  description: "Top corporate event anchor and emcee in Jaipur. Yash Soni has hosted 500+ corporate events — conferences, annual days, product launches, and award nights.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Corporate Event Anchor in Jaipur",
  description: "Step-by-step process to book Anchor Yash Soni for your corporate event or summit in Jaipur.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your corporate event dates and venues. Q4 and annual day dates fill 3-4 months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote & Invoice", text: "A comprehensive quote and GST invoice covering all event logistics is provided." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment and formal agreement." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the brand guidelines, run-of-show, panel moderation notes, and specific stage logistics." },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Corporate Event Anchor in Jaipur | Emcee | Yash Soni",
  description:
    "Top corporate event anchor and emcee in Jaipur. Yash Soni has hosted 500+ corporate events — conferences, annual days, product launches, and award nights.",
  alternates: {
    canonical: "https://yashsoni.in/corporate-event-anchor-jaipur",
  },
  openGraph: {
    title: "Corporate Event Anchor in Jaipur | Emcee | Yash Soni",
    description:
      "Top corporate event anchor in Jaipur. 500+ corporate events — conferences, annual days, product launches, and award nights.",
    url: "https://yashsoni.in/corporate-event-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Event Anchor Yash Soni — Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Anchor in Jaipur | Yash Soni",
    description: "500+ corporate events. 70+ national brands. Jaipur's top corporate emcee.",
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
