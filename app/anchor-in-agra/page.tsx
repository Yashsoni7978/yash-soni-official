import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle the strict acoustic/noise ordinances around heritage zones like the Taj East Gate?",
    a: "This is the true test of a heritage anchor. Properties near the Taj Mahal have aggressive volume limiters to protect the monument. You cannot rely on a 100-decibel DJ to create the energy. Instead, I use 'Psychological Momentum'—intense timeline pacing, physical crowd interaction, and deep vocal projection to manufacture a massive party atmosphere entirely organically, without violating venue limits."
  },
  {
    q: "Our Agra guest list is highly exclusive—mostly C-suite executives and VIP families. Can you match this tone?",
    a: "Completely. A VIP wedding doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop the standard 'wedding tropes' and host with sharp, highly conversational, unscripted English that treats the VIPs with intellectual respect, immediately breaking the sterile barrier between the stage and the audience."
  },
  {
    q: "Half our guests are flying in from abroad, and half are traditional relatives. Can you manage both?",
    a: "Absolutely. This 'Cross-Border Collision' is my primary specialty. I provide flawless, executive-grade English anchoring to ensure your international guests understand the nuance of the Indian rituals, while seamlessly code-switching into deep, respectful Hindi to honor the local elders. Neither side ever feels excluded."
  },
  {
    q: "Do you use scripts during a chaotic multi-family Sangeet?",
    a: "Never. Scripts destroy the raw energy of an intimate Sangeet. When you read from a clipboard, you break eye contact with the audience. I memorize the family dynamics, the performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu VIP toast."
  },
  {
    q: "Properties like ITC Mughal are massive. How do you keep the crowd together across huge lawns?",
    a: "Sprawling venues cause 'Audience Drift', where guests split off to the bar, the buffet, and the corners. I act as the central timeline engine. Using specific vocal pacing and hyper-interactive stage movement, I actively 'stitch' the event together, pulling the fragmented crowd back into a single, high-energy focal point near the stage."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Agra?",
    a: "Because I am heavily active across the Delhi-NCR and Rajasthan corridors, Agra is incredibly accessible for my team. The travel logistics via the Expressway are completely streamlined. There are no hidden flight complications, and the exact rider is provided instantly upon booking."
  },
  {
    q: "When should we freeze your dates for an Agra wedding?",
    a: "Agra’s destination season aligns directly with the absolute peak winter dates of North India (October through March). The premium properties vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anchor Yash Soni",
  "image": "https://yashsoni.in/og-image.webp",
  "@id": "https://yashsoni.in/#organization",
  "url": "https://yashsoni.in",
  "telephone": "+917737877978",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vaishali Nagar",
    "addressLocality": "Jaipur",
    "postalCode": "302021",
    "addressRegion": "RJ",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/anchoryashsoni",
    "https://www.facebook.com/anchoryashsoni"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  })) };

export const metadata: Metadata = {
  title: 'Anchor in Agra | Wedding & Event Host | Yash Soni',
  description: 'Hire a professional anchor in Agra for weddings and events. Yash Soni brings expert hosting to your Agra celebration.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-agra',
  },
  openGraph: {
    title: 'Anchor in Agra | Wedding & Event Host | Yash Soni',
    description: 'Hire a professional anchor in Agra for weddings and events. Yash Soni brings expert hosting to your Agra celebration.',
    url: 'https://yashsoni.in/anchor-in-agra',
    siteName: 'Yash Soni - Anchor & Emcee',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, localBusinessSchema])
        }}
      />
      <PageClient />
    </>
  );
}
