import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Udaipur?",
    a: "Anchor Yash Soni is rated 4.9★ by clients across Jaipur & Rajasthan with 1,100+ events anchored. He specialises specifically in Udaipur's lake palace destination wedding circuit — Taj Lake Palace, Oberoi Udaivilas, Jagmandir Island, Leela Udaipur, Raffles, and Fateh Garh. Bilingual Hindi/English, unscripted, NRI-experienced, with zero paper scripts across his entire career."
  },
  {
    q: "Have you hosted events at Taj Lake Palace and Jagmandir Island?",
    a: "Yes — extensively. Both venues have specific acoustic challenges, boat-arrival timing, and heritage sound protocols. The Lago (lake) setting changes how crowd energy travels. These are not venues you learn on the job. The operational knowledge for Maharana Pratap Sthal, the terrace at Udaivilas, and the courtyard stages at Jagmandir comes from repeated work at these properties."
  },
  {
    q: "Can you manage a bilingual NRI wedding crowd in Udaipur?",
    a: "That is the core specialty for the Udaipur circuit. NRI families from the UK, USA, and Canada bring their extended diaspora. Three generations in one room means three different emotional vocabularies. Sophisticated English for the international crowd, warm rooted Hindi for the parents and elders, and cultural Rajasthani references that make the home crowd feel the pride of the city they chose."
  },
  {
    q: "What is the typical cost of hiring an anchor for a destination wedding in Udaipur?",
    a: "Destination wedding anchoring fees include event duration, travel logistics, pre-event research time, and programme complexity. Multi-day weddings with bi-lingual scripting and full event management are priced differently from single-ceremony events. WhatsApp the event details — a customised quote comes within the hour."
  },
  {
    q: "How far in advance should I book for Udaipur's peak wedding season?",
    a: "Udaipur's peak season runs October through March. Dates at lake palace venues fill 6–8 months ahead, especially for Diwali, New Year, and Valentine's weekend. I do not send replacements and do not maintain a waitlist. Your date is exclusively blocked on receipt of advance — WhatsApp the moment your date is confirmed."
  },
  {
    q: "Do you anchor Sangeet functions on Jagmandir Island?",
    a: "Yes. Jagmandir Island Sangeets are among the most technically complex events on the Udaipur circuit — island acoustics, elevated crowd spread, boat-transfer timing for guest flow, and the echo off Lake Pichola. I have managed Sangeets here that ran 4+ hours without an energy drop. Unscripted crowd games, high-energy bilingual hosting, and real-time adaptation to the island's quirks."
  },
  {
    q: "Can you anchor corporate events and dealer meets in Udaipur?",
    a: "Yes. Udaipur's corporate circuit includes Leela Udaipur, Radisson Blu, and Trident Udaipur. Annual galas, product launches, dealer meets, and leadership summits are a strong specialisation. The hosting register is sharp, brand-aligned, and aware of C-suite hierarchy — not a wedding energy copy-pasted into a boardroom setting."
  },
  {
    q: "What makes Anchor Yash different from local Udaipur anchors?",
    a: "Local anchors know the city. I know the city and the crowd psychology to command every segment of it. 1,100+ events, 10,000+ crowds commanded, 4.9★ rating, and a specific track record at Udaipur's top-tier palace properties. The difference shows in how the NRI grandfather from London feels as included as the local Rajasthani family cousin dancing in the front row."
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
  title: 'Anchor in Udaipur | Lake Palace Wedding Emcee | Yash Soni',
  description: 'Hire a professional anchor in Udaipur for palace and lake weddings. Yash Soni - top destination wedding host in the City of Lakes.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-udaipur',
  },
  openGraph: {
    title: 'Anchor in Udaipur | Lake Palace Wedding Emcee | Yash Soni',
    description: 'Hire a professional anchor in Udaipur for palace and lake weddings. Yash Soni - top destination wedding host in the City of Lakes.',
    url: 'https://yashsoni.in/anchor-in-udaipur',
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
