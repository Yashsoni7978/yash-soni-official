import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle the highly intimate, VIP dynamic of an Alibaug villa wedding?",
    a: "Alibaug is the opposite of a mega-banquet. You aren't broadcasting to a thousand strangers; you are hosting 150 incredibly high-net-worth individuals. I utilize 'Conversational Dominance'—putting down the heavy 'stage voice' in favor of sharp, highly intelligent, interactive English that treats the VIPs as participants rather than spectators. It instantly shatters the invisible wall between the stage and the audience."
  },
  {
    q: "Half our guests are traditional Gujarati/Marwari, and half are modern corporate friends from South Bombay. Can you manage both?",
    a: "Absolutely. This 'Cross-Cultural Collision' is my primary specialty. I provide flawless, executive-grade English anchoring to ensure your corporate guests stay locked in, while seamlessly code-switching into deep, respectful Hindi to honor the local elders. Neither side ever feels excluded, and the party remains fully integrated."
  },
  {
    q: "Do you use scripts during a chaotic multi-family Sangeet?",
    a: "Never. Scripts destroy the raw energy of an intimate Alibaug party. When you read from a clipboard, you break eye contact with the audience. I memorize the family dynamics, the complex performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu VIP toast."
  },
  {
    q: "Our event takes place across different areas of The Mansion House. How do you keep the crowd together?",
    a: "Private luxury estates are notorious for 'Audience Drift', where guests split off to the pool, the bar, and the lawn. I act as the central timeline engine. Using specific vocal pacing and hyper-interactive stage movement, I actively 'stitch' the event together, pulling the fragmented crowd back into a single, high-energy focal point."
  },
  {
    q: "Are you familiar with the logistics of Alibaug's top luxury properties?",
    a: "Intimately. Working at ultra-luxury properties like The Mansion House or Radisson Blu requires high-level coordination with the hotel's GM, banquet heads, and shadow planners. I understand the stringent luxury timelines and protocols, ensuring the hosting elevates the prestige of the property perfectly."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Alibaug?",
    a: "Because I travel Jaipur & Rajasthan handling massive volumes of destination weddings, my technical rider and logistics to Alibaug (whether via Mumbai airport and Ro-Ro/Speedboat or by road) are completely streamlined. My team provides the exact requirements instantly upon booking to your planner."
  },
  {
    q: "When should we freeze your dates for an Alibaug wedding?",
    a: "Alibaug’s destination season (October through March) is incredibly dense, heavily overlapping with Mumbai's billionaire weekend retreat schedules. The premium dates vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
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
  title: 'Anchor in Alibaug | Destination Wedding Host | Yash Soni',
  description: 'Destination wedding anchor in Alibaug. Yash Soni hosts beach and resort weddings in Alibaug with professional bilingual emceeing.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-alibaug',
  },
  openGraph: {
    title: 'Anchor in Alibaug | Destination Wedding Host | Yash Soni',
    description: 'Destination wedding anchor in Alibaug. Yash Soni hosts beach and resort weddings in Alibaug with professional bilingual emceeing.',
    url: 'https://yashsoni.in/anchor-in-alibaug',
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
