import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for massive weddings in Delhi NCR?",
    a: "Anchor Yash Soni is highly sought after for large-scale Delhi NCR events. With a 4.9★ rating across 1,100+ events, he brings the high-energy command required for massive Chhatarpur farm weddings and the sophisticated protocol needed for properties like Taj Palace and ITC Maurya."
  },
  {
    q: "Do you host high-energy Punjabi Sangeets in Delhi?",
    a: "Yes. Delhi Sangeets operate at a completely different energy level. They require an anchor who refuses to use paper scripts, feeds off massive crowds, and can seamlessly coordinate with large dhol troupes and complex family performances without losing control of the timeline."
  },
  {
    q: "Can you handle corporate summits with politicians and VIPs?",
    a: "Absolutely. Yash has extensive experience hosting protocol-heavy events in Delhi's Diplomatic Enclave and Aerocity. He understands the strict stage chronologies, the VIP acknowledgment hierarchies, and the precise English/Hindi register required for government and corporate elites."
  },
  {
    q: "Are you comfortable hosting outdoor events at Chhatarpur Farms?",
    a: "Yes. Open-air farmhouses present unique acoustic and crowd-control challenges. Yash uses advanced spatial crowd-work techniques — rather than just shouting into a mic, he physically works the zones of a massive lawn to unify a decentralized crowd into a single moment."
  },
  {
    q: "Do you travel to Gurugram and Noida for events?",
    a: "Yes. Anchor Yash covers the entire Delhi NCR region, including premium venues in Gurugram (like the DLF Country Club and Leela Ambiance) and massive exhibition grounds in Greater Noida."
  },
  {
    q: "How far in advance should we book for the Delhi winter wedding season?",
    a: "The Delhi peak wedding season (November to February) is the busiest in the country. Key saaya (auspicious) dates at prime venues like Roseate and Andaz book out 6 to 8 months in advance. Yash operates strictly on a first-to-confirm, advance-payment basis."
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
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export const metadata: Metadata = {
  title: 'Anchor in Delhi | Wedding & Corporate Emcee | Yash Soni',
  description: 'Professional anchor in Delhi for weddings, corporate events and private functions. Yash Soni - experienced bilingual emcee available across Delhi NCR.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-delhi',
  },
  openGraph: {
    title: 'Anchor in Delhi | Wedding & Corporate Emcee | Yash Soni',
    description: 'Professional anchor in Delhi for weddings, corporate events and private functions. Yash Soni - experienced bilingual emcee available across Delhi NCR.',
    url: 'https://yashsoni.in/anchor-in-delhi',
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
