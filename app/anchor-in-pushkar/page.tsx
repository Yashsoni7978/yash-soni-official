import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Pushkar venues often have a 'No Alcohol' (Satvik) policy. Can you still drive a high-energy Sangeet?",
    a: "Absolutely. This is the biggest challenge of a Pushkar destination wedding. When there is no bar to artificially loosen the crowd, the anchor must act as the primary catalyst. I use specific crowd-psychology, hyper-interactive games, and explosive vocal pacing to generate immense organic dancing energy that easily replaces a club environment."
  },
  {
    q: "We have NRI guests flying in from London/USA. Can you conduct the event in English?",
    a: "Yes. Pushkar is one of the heaviest NRI wedding zones in Rajasthan. I provide flawless, executive-grade English anchoring to ensure your international guests understand and appreciate the grandeur of the Indian traditions, while utilizing deep Hindi to honor the local elders. This bilingual bridging is my specialty."
  },
  {
    q: "How do you handle the massive outdoor spaces at properties like The Westin or Ananta Spa?",
    a: "Sprawling resorts suffer from 'acoustic scatter'—the wind carries the sound away, and the 500 guests physically drift apart over the giant lawns. I actively employ 'crowd-condensing' techniques, utilizing stage movement and specific audio projection to draw everyone visually and physically into the center, forcing intimacy into massive spaces."
  },
  {
    q: "Do you use scripts or teleprompters during multi-family Sangeet performances?",
    a: "Never. An anchor reading from a clipboard instantly kills the energy of a Sangeet. I memorize the entire sequence of performances, the family dynamics, and the inside jokes. This allows me to seamlessly transition between dances, interact with the VIP tables, and maintain 100% eye contact."
  },
  {
    q: "Are you familiar with the cultural protocols of the Pushkar/Ajmer area?",
    a: "Yes. I frequently anchor heavily traditional Marwari and Rajput weddings across the Pushkar-Ajmer bypass. I understand the intense respect required for the Brahma Temple vicinity, ensuring the hosting is profoundly dignified while still being spectacularly entertaining."
  },
  {
    q: "Do we need to arrange your logistics if we book you for Pushkar?",
    a: "As I frequently execute events across Rajasthan's Golden Triangle, my logistics into Pushkar are highly streamlined. My technical rider and travel requirements are exceedingly simple and provided instantly upon booking."
  },
  {
    q: "When is the latest we should book you for a Pushkar wedding?",
    a: "Pushkar's wedding season peaks violently between October and February, often clashing directly with the legendary Pushkar Camel Fair dates and heavy NRI inflows. The premier luxury resorts (Westin/Ananta) sell out a year in advance. The moment your resort is locked, send me a WhatsApp to freeze the date."
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
  title: 'Anchor in Pushkar | Desert Wedding Emcee | Yash Soni',
  description: 'Hire a professional anchor in Pushkar for desert weddings and heritage events. Yash Soni - top wedding anchor in Pushkar, Rajasthan.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-pushkar',
  },
  openGraph: {
    title: 'Anchor in Pushkar | Desert Wedding Emcee | Yash Soni',
    description: 'Hire a professional anchor in Pushkar for desert weddings and heritage events. Yash Soni - top wedding anchor in Pushkar, Rajasthan.',
    url: 'https://yashsoni.in/anchor-in-pushkar',
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
