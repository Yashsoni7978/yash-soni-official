import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for wildlife destination weddings in Ranthambore?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Ranthambore's jungle luxury wedding circuit — Sher Bagh, Khem Villas, The Oberoi Vanyavilas, Nahargarh Fort, and the Sawai Madhopur Lodge. He brings wildlife-adjacent acoustic discipline, the specific hosting register of conservation-luxury destinations, and bilingual English/Hindi fluency for international guest mixes."
  },
  {
    q: "How do you manage sound and amplification within Ranthambore Tiger Reserve's buffer zone?",
    a: "Tiger reserve buffer zones have strict sound ordinances managed by forest department authorities. High-amplification DJs and PA systems that would be standard at a city hotel are simply not permissible — or appropriate — in this environment. The technique required is fundamentally different: voice-led crowd command, storytelling-driven engagement, and spatial crowd-work that creates energy without acoustic disruption to the wildlife habitat."
  },
  {
    q: "Have you hosted events at Sher Bagh and Khem Villas in Ranthambore?",
    a: "Yes. Sher Bagh and Khem Villas are the two most frequently booked luxury tented properties in Ranthambore's destination wedding circuit. Both have specific acoustic characteristics driven by their canvas construction, their open-air dinner integration, and their position within the reserve buffer. Having worked both repeatedly means the venue-specific hosting approach is pre-calibrated before the event begins."
  },
  {
    q: "How do you anchor an event at The Oberoi Vanyavilas?",
    a: "The Oberoi Vanyavilas is the ultra-luxury reference point for Ranthambore's destination circuit — and its guests are among the most discerning in India's hospitality segment. The hosting register at Vanyavilas must be warm, sophisticated, and genuinely attuned to both the conservation ethos of the property and the extraordinary luxury standards of the guests. It is a very specific tone — one that comes from working luxury destinations repeatedly, not from working luxury hotels generically."
  },
  {
    q: "Can you manage international guests at Ranthambore destination weddings?",
    a: "Yes. Ranthambore draws significant international guest mix for destination weddings — wildlife enthusiasts from Europe, corporate families from the UK and USA, and diaspora relatives from multiple countries who have chosen Ranthambore specifically for its unique character. The bilingual hosting here must bridge conservation-aware international guests, Indian urban families, and rural Rajasthan relatives within the same evening — all of whom have completely different entertainment expectations and cultural frameworks."
  },
  {
    q: "What is the best time of year for destination weddings in Ranthambore?",
    a: "Ranthambore Tiger Reserve is open to the public — and therefore available for tented camp events — between October and June. The peak wildlife season (October to April) is also the peak destination wedding season, when tiger sighting probability is highest and the temperature is manageable. The luxury tented properties book 5–7 months in advance for the November to February wedding season. Anchor availability mirrors venue availability — confirm simultaneously."
  },
  {
    q: "Do you anchor corporate retreats and conservation summits in Ranthambore?",
    a: "Yes. Ranthambore is increasingly popular for corporate leadership retreats specifically because of the environmental symbolism it carries — companies use the tiger reserve as a statement about their conservation values. The hosting for these events must reflect that environmental intelligence. A conservation corporation does not want an anchor whose environmental awareness is purely performative. The subject knowledge, the appropriate references, and the tone of engagement all matter."
  },
  {
    q: "How do you handle the multi-day energy arc of a Ranthambore destination wedding?",
    a: "Ranthambore destination weddings are typically 2–3 day affairs with early morning safari departures integrated into the event schedule. The energy arc is completely different from a city hotel event — mornings are shared wildlife experiences that naturally bond the crowd, afternoons are quieter recovery periods, and evenings are the premium event windows. The anchor must understand this rhythm and calibrate the hosting energy accordingly, rather than treating every segment with the same flat-line Sangeet energy."
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
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const metadata: Metadata = {
  title: 'Anchor in Ranthambore | Resort Wedding Host | Yash Soni',
  description: 'Destination wedding anchor in Ranthambore. Yash Soni hosts jungle resort weddings and events in Ranthambore with expert hosting.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-ranthambore',
  },
  openGraph: {
    title: 'Anchor in Ranthambore | Resort Wedding Host | Yash Soni',
    description: 'Destination wedding anchor in Ranthambore. Yash Soni hosts jungle resort weddings and events in Ranthambore with expert hosting.',
    url: 'https://yashsoni.in/anchor-in-ranthambore',
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
