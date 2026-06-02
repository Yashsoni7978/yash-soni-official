import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for Rajput heritage weddings at Chittorgarh?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific experience with Chittorgarh's deep Rajput heritage ceremony format. He brings Mewar cultural fluency — correct ceremonial vocabulary, Rana and Maharana lineage references, and appropriate emotional register — alongside the practical skills required to manage events in India's largest fort complex."
  },
  {
    q: "Do you understand Mewar Rajput ceremonial protocol and the specific cultural identity of Chittorgarh?",
    a: "Yes. Chittorgarh carries the heaviest cultural identity of any event destination in Rajasthan — possibly in India. The lineage of Rana Kumbha, the sacrifice of Padmini, the battles of Rana Sanga, and the legacy of Maharana Pratap are not background colour — they are the identity of the families who choose to celebrate here. The anchor who does not understand these references deeply cannot serve this room. The anchor who name-drops them incorrectly causes active offence. This fluency is developed through genuine immersion, not quick research."
  },
  {
    q: "How do you manage the acoustic and spatial challenges of Chittorgarh Fort at 700 acres?",
    a: "The sheer scale of Chittorgarh Fort creates event management challenges that most anchors are entirely unprepared for. At this scale, the acoustic behaviour of open stone spaces, the natural crowd dispersal driven by the geography, and the visual attention management across multiple heritage sight lines all need pre-event planning rather than on-stage improvisation. I work with the venue logistics team before every Chittorgarh event to establish crowd gathering strategy, acoustic positioning, and sight-line management."
  },
  {
    q: "Have you hosted events at Padmini Palace and Rana Kumbha Palace within the fort?",
    a: "Yes. Both of these sites have very different acoustic and atmospheric characteristics within the broader fort complex. Padmini Palace's lakeside setting offers natural crowd intimacy but wind-driven acoustic challenges. Rana Kumbha's courtyard offers dramatic scale but requires careful energy management to fill the space without the event feeling empty. Having worked both means these factors are pre-managed rather than discovered on the day."
  },
  {
    q: "Can you host events at boutique heritage properties near Chittorgarh like Bassi Fort or Castle Bijaipur?",
    a: "Yes. The Chittorgarh circuit includes several outstanding boutique heritage properties within 20–40km of the fort that are increasingly popular for destination wedding events. These properties offer heritage character within a more manageable scale for 100–300 guest events. The cultural identity of the region still governs the hosting register even at these smaller properties."
  },
  {
    q: "Is Chittorgarh a good destination for NRI family weddings?",
    a: "Yes. Chittorgarh has a very specific and powerful appeal for non-resident Rajput families — particularly those from the UK, USA, and UAE — who want to ground their child's wedding in the deepest possible expression of their ancestral identity. For a Mewar-lineage NRI family, there is no more meaningful wedding backdrop in the world than Chittorgarh Fort. The hosting must bridge the international entertainment expectations of the diaspora guests with the ceremonial gravity that the Indian family elders require."
  },
  {
    q: "How far in advance should we book for a Chittorgarh destination wedding?",
    a: "Chittorgarh operates as a destination wedding circuit primarily in the winter months — October through February. Fort permissions for private events have a separate approval pathway that requires significant advance planning. I recommend confirming the anchor booking simultaneously with the initial venue application — 6 to 9 months in advance for premium dates."
  },
  {
    q: "Do you host corporate and institutional events in Chittorgarh beyond weddings?",
    a: "Yes. Chittorgarh increasingly draws cultural organisations, heritage foundations, and government departments for conferences, summits, and commemorative events. These require a very different hosting register — intellectual gravitas, historical accuracy, and a deep respect for the site's significance — combined with the practical skills of keeping an audience engaged over a multi-session event day."
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
  title: 'Anchor in Chittorgarh | Wedding Host | Yash Soni',
  description: "Hire a professional anchor in Chittorgarh for royal weddings and heritage events. Yash Soni - Rajasthan's top event anchor.",
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-chittorgarh',
  },
  openGraph: {
    title: 'Anchor in Chittorgarh | Wedding Host | Yash Soni',
    description: "Hire a professional anchor in Chittorgarh for royal weddings and heritage events. Yash Soni - Rajasthan's top event anchor.",
    url: 'https://yashsoni.in/anchor-in-chittorgarh',
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
