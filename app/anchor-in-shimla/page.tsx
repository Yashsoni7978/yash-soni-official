import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle outdoor functions in Shimla where the freezing wind kills the crowd's energy?",
    a: "This is the true test of a mountain destination anchor. When the temperature drops rapidly at dusk, guests immediately want to retreat indoors. You cannot solve this purely with a DJ. I use 'Psychological Momentum'—accelerating the timeline aggressively, using extreme vocal projection to physically compress the crowd towards the stage, and pulling them into an intense, highly interactive dancing state before the cold sets in."
  },
  {
    q: "Our Shimla guest list is highly exclusive—mostly C-suite executives and VIP families. Can you match this tone?",
    a: "Completely. A VIP wedding doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop the standard 'wedding tropes' and host with sharp, highly conversational, unscripted English that treats the VIPs with intellectual respect, immediately breaking the sterile barrier between the stage and the audience."
  },
  {
    q: "We have international guests flying in and traditional relatives from Punjab/Chandigarh. Can you manage both?",
    a: "Absolutely. This 'Cross-Cultural Collision' is my primary specialty. I provide flawless, executive-grade English anchoring to ensure your corporate/international guests stay locked in, while seamlessly code-switching to handle the high-voltage Punjabi elements that Northern traditional families expect during the Sangeet."
  },
  {
    q: "Do you use teleprompters or scripts during these complex destination itineraries?",
    a: "Never. Scripts destroy the raw intimacy of an event. When you read from a clipboard, you break eye contact with the high-net-worth audience. I memorize the family lineages, the complex itineraries, and the cross-border dynamics. This allows me to maintain absolute control of the stage 100% unscripted."
  },
  {
    q: "What if Himalayan weather systems force us to suddenly move our event indoors at the last minute?",
    a: "Mountain logistics are inherently volatile. If heavy rain or snow forces us to compress an outdoor 4-hour Sangeet into a 2-hour indoor banquet hall timeline, I do not panic. Because I am entirely unscripted, I instantly rewrite the pacing, stitch performances together on the fly, and accelerate the hype without the audience ever realizing the timeline was compromised."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Shimla?",
    a: "Because I am heavily active across the Delhi-NCR and Chandigarh corridors, the logistics to Shimla (whether via Chandigarh airport or the Kalka expressway) are completely streamlined. There are no hidden travel complications; the exact logistical rider is provided instantly upon booking."
  },
  {
    q: "When should we freeze your dates for a Shimla event?",
    a: "Shimla’s destination season aligns directly with the absolute peak summer and winter extreme dates of North India. The premium properties vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
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
  title: 'Anchor in Shimla | Hill Wedding Host | Yash Soni',
  description: 'Professional anchor in Shimla for destination weddings and hill station events. Yash Soni - experienced emcee across Himachal Pradesh.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-shimla',
  },
  openGraph: {
    title: 'Anchor in Shimla | Hill Wedding Host | Yash Soni',
    description: 'Professional anchor in Shimla for destination weddings and hill station events. Yash Soni - experienced emcee across Himachal Pradesh.',
    url: 'https://yashsoni.in/anchor-in-shimla',
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
