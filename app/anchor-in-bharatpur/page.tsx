import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for heritage weddings in Bharatpur?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Bharatpur's heritage event circuit — Lohagarh Fort, Laxmi Vilas Palace, The Bagh, and Deeg Palace. He brings Bharatpur Jat community cultural fluency, Golden Triangle guest mix management experience, and bilingual hosting that bridges Delhi NCR metropolitan sophistication with the region's genuine Braj heritage identity."
  },
  {
    q: "Do you understand Lohagarh Fort's specific heritage identity and the Bharatpur Jat community?",
    a: "Yes. Lohagarh Fort — the only fort in India that was never captured by the British — carries a very specific identity within the Bharatpur Jat community. The families who host events within the fort are drawing on that identity deliberately. The anchor who understands this — who knows why Lohagarh matters beyond its generic heritage value — creates a connection with the family that generic hosting simply cannot achieve."
  },
  {
    q: "How do you manage the Golden Triangle guest mix at Bharatpur events?",
    a: "Bharatpur's strategic position at the intersection of Agra, Jaipur, and Delhi means that events here routinely assemble guest lists from three very different urban cultures simultaneously. Delhi NCR guests bring metropolitan professional expectations. Jaipur guests may bring heritage community expectations. Agra guests bring a different regional identity. The anchor must hold all three within a cohesive event experience — and do so while the heritage venue asserts its own strong identity."
  },
  {
    q: "Have you hosted events at Laxmi Vilas Palace in Bharatpur?",
    a: "Yes. Laxmi Vilas Palace is Bharatpur's flagship heritage hotel — a colonial-era property with formal garden ballrooms and open terrace event spaces. The property carries a very specific formal register that shapes what hosting is appropriate. Understanding the balance between the palace's heritage gravity and the warmth of an Indian family celebration is a skill developed through repeated work at heritage hotel properties across Rajasthan."
  },
  {
    q: "Can you manage events near or alongside the Keoladeo National Park?",
    a: "Yes. The Keoladeo UNESCO World Heritage bird sanctuary creates a unique atmosphere for adjacent events — particularly evening Sangeet events where the ambient sounds of the sanctuary form part of the natural acoustic. The hosting at sanctuary-edge venues must be environmentally aware: sound management discipline, respect for the sanctuary's protected status, and the ability to incorporate the extraordinary natural environment as a positive element of the event experience."
  },
  {
    q: "Is Bharatpur accessible for Delhi-based destination wedding families?",
    a: "Yes. Bharatpur is one of the closest true heritage destination options to Delhi — approximately 180km on the Yamuna Expressway and Jaipur highway, making it a 2.5 to 3-hour comfortable drive. For Delhi families whose guest mix is split between Delhi and Agra — 55km from Bharatpur — it is the most strategically accessible heritage destination in the entire corridor."
  },
  {
    q: "Do you have experience with Braj cultural references at Bharatpur heritage events?",
    a: "Yes. Bharatpur sits at the edge of the Braj region — the cultural and devotional heartland of Krishna worship in India. Events in this region carry a warm Vaishnava cultural undertone — specific musical traditions, devotional aesthetic references, and a spiritual warmth that permeates the community culture. Incorporating these references correctly and warmly — not academically — creates genuine emotional resonance with heritage Bharatpur families at a depth that generic hosting cannot touch."
  },
  {
    q: "How far in advance should we book for a Bharatpur destination wedding?",
    a: "Bharatpur's heritage properties — particularly Lohagarh Fort and Laxmi Vilas Palace — have limited event space capacity and book 4–6 months in advance for the October-February heritage wedding season. The anchor calendar mirrors venue availability. WhatsApp the moment your venue and date are confirmed — I operate strictly first-to-confirm."
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
  title: 'Anchor in Bharatpur | Event & Wedding Host | Yash Soni',
  description: 'Hire a professional anchor in Bharatpur for weddings and corporate events. Yash Soni brings expert hosting to every occasion.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-bharatpur',
  },
  openGraph: {
    title: 'Anchor in Bharatpur | Event & Wedding Host | Yash Soni',
    description: 'Hire a professional anchor in Bharatpur for weddings and corporate events. Yash Soni brings expert hosting to every occasion.',
    url: 'https://yashsoni.in/anchor-in-bharatpur',
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
