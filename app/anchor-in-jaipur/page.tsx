import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-jaipur/layout.jsx
// SERVER COMPONENT — metadata only, no head/script tags
export const metadata: Metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor in Jaipur — Yash Soni | Local Event Host for Weddings & Corporate",
  description:
    "Looking for a professional anchor in Jaipur? Yash Soni has hosted 700+ events across Jaipur — weddings, corporate events, sangeets & sports. Locally based, bilingual Hindi/English. Available for bookings.",
  keywords: [
    "anchor in jaipur",
    "best anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "jaipur event host",
    "jaipur anchor",
    "anchor yash soni",
    "anchor yash",
    "wedding emcee jaipur",
    "wedding anchor jaipur",
    "corporate anchor jaipur",
    "sangeet anchor jaipur",
    "local anchor jaipur",
    "anchor near me jaipur",
    "best emcee jaipur",
    "event anchor jaipur",
    "anchor in rajasthan",
    "jaipur destination wedding anchor",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor mansarovar jaipur",
    "anchor sitapura jaipur",
    "anchor vaishali nagar jaipur",
    "anchor amer road jaipur",
    "rambagh palace wedding anchor",
    "fairmont jaipur wedding anchor",
  ],
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jaipur" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Anchor in Jaipur — Yash Soni | Local Event Host",
    description:
      "Locally based anchor in Jaipur. 700+ events hosted — weddings, sangeets, corporate & sports. Rambagh Palace, Fairmont, Kukas, Ajmer Road farmhouses & JECC Sitapura.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Anchor in Jaipur — Yash Soni locally based professional event host" }] },
  twitter: {
    card: "summary_large_image",
    title: "Anchor in Jaipur — Yash Soni | Local Event Host",
    description: "Locally based anchor in Jaipur. 700+ events. Weddings, Sangeets, corporate & sports. All Jaipur venues covered.",
    images: ["/og-image.webp"] },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873" } };


const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Jaipur?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Jaipur. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Jaipur?",
    a: "Yash Soni specialises in premium, high-energy events. In Jaipur, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Jaipur?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Jaipur feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Jaipur, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Jaipur?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Jaipur, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Jaipur, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Jaipur is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-jaipur/#webpage`,
  url: `https://yashsoni.in/anchor-in-jaipur`,
  name: `Anchor in Jaipur — Yash Soni | Local Event Host for Weddings & Corporate`,
  description: `Yash Soni is a professional event anchor based in Jaipur, Rajasthan. He hosts weddings, corporate events, sangeets, and award nights across Jaipur and Rajasthan. With 700+ shows hosted, he is one of the most experienced anchors in Jaipur.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire a Professional Anchor in Jaipur`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Jaipur.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in jaipur.` },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show and specific venue logistics." }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, howToSchema, faqSchema]) }} />
      <PageClient />
    </>
  );
}
