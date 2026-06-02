import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle the massive outdoor acoustics of a Goa beach wedding?",
    a: "This is the primary failure point for most anchors in Goa. Ocean wind carries sound away instantly, and guests tend to spread out across massive resort lawns. An anchor cannot just 'yell louder'. I use a technique called 'Acoustic Condensing'—physically repositioning the crowd, utilizing specific speaker triangulations with the DJ, and using vocal pacing to force intimacy into an otherwise infinite space."
  },
  {
    q: "Half our guests are flying in from the US/UK, and half are traditional relatives from Delhi. Can you manage both?",
    a: "Absolutely. This 'Cross-Border Collision' is my primary specialty. I provide flawless, executive-grade English anchoring to ensure your international guests understand the nuance of the Indian rituals, while seamlessly code-switching into deep, respectful Hindi to honor the local elders. Neither side ever feels excluded."
  },
  {
    q: "Do you use scripts during a chaotic Goan Sangeet?",
    a: "Never. Scripts destroy the raw energy of a Goa party. When you read from a clipboard, you break eye contact with the audience. I memorize the family dynamics, the performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke, a delay, or a sudden burst of energy."
  },
  {
    q: "Our Sangeet starts on the lawn but has to move indoors at 10 PM due to noise limits. Can you keep the energy alive?",
    a: "Yes. The 'Location Shift' is notorious for killing party momentum. I act as the central catalyst in that moment. Instead of passively announcing the move, I generate a massive, high-hype 'train' or interactive segment that literally drags the ecstatic crowd from the outdoor lawn straight onto the indoor dance floor without dropping a single decibel of energy."
  },
  {
    q: "Are you familiar with the logistics of mega-resorts like Taj Exotica or Grand Hyatt Goa?",
    a: "Intimately. Working at ultra-luxury 5-star properties requires high-level coordination with the hotel's GM, banquet heads, and shadow planners. I understand the stringent timelines and protocols of these mega-resorts, ensuring the hosting elevates the prestige of the property rather than clashing with it."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Goa?",
    a: "Because I travel Pan-India handling massive volumes of destination weddings, my technical rider and flight logistics to Goa (Dabolim/Mopa) are completely streamlined and provided instantly upon booking to your planner. No hidden complications."
  },
  {
    q: "When should we freeze your dates for a Goa wedding?",
    a: "Goa’s destination season (October through March) is incredibly violent. The premium dates vanish over a year in advance as high-net-worth NRIs lock down properties. The exact moment your resort is confirmed, send me a WhatsApp to initiate the calendar block."
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
  })),
};

export const metadata: Metadata = {
  title: 'Anchor in Goa | Beach Wedding & Event Host | Yash Soni',
  description: 'Destination wedding anchor in Goa. Yash Soni hosts beach weddings, resort events and corporate functions in Goa with expert bilingual hosting.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-goa',
  },
  openGraph: {
    title: 'Anchor in Goa | Beach Wedding & Event Host | Yash Soni',
    description: 'Destination wedding anchor in Goa. Yash Soni hosts beach weddings, resort events and corporate functions in Goa with expert bilingual hosting.',
    url: 'https://yashsoni.in/anchor-in-goa',
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
