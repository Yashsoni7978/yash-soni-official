import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for luxury weddings in Jaisalmer?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specifically caters to the ultra-luxury and NRI demographic in Jaisalmer. With deep experience at high-stakes venues like Suryagarh, the Marriott, and premium desert camps, he delivers the flawless, bilingual, and highly sophisticated hosting required for Jaisalmer's premium clientele."
  },
  {
    q: "How do you handle the acoustics of open desert events at the Sam Sand Dunes?",
    a: "Open deserts are the hardest acoustic environments in the world. Sound dissipates instantly, and the wind interferes with standard microphone usage. The solution isn't just turning up the volume—it's crowd psychology. I use precise pacing to draw the audience physically closer to the stage, creating an intimate 'bubble' of energy that defies the infinite space around it."
  },
  {
    q: "We are an NRI family. Can you host a bilingual event that bridges our modern lives with Rajasthani tradition?",
    a: "Yes. This is the cornerstone of my work at venues like Suryagarh. I frequently host for NRI families from the US, UK, and UAE. The hosting must be perfectly bilingual (formal English and polished Hindi), ensuring international guests are completely engrossed while Indian relatives feel the full cultural depth and respect of the Rajputana setting."
  },
  {
    q: "Do you integrate local Rajasthani folk musicians (like Manganiyars) into your events?",
    a: "Absolutely. In Jaisalmer, the Manganiyar folk tradition is a profound part of the atmosphere. I work directly with the musicians and DJs to ensure their performances are woven seamlessly into the evening—respectfully introduced and strategically placed—so the transition from heritage folk to modern Sangeet beats feels like a natural evolution, not a jarring interruption."
  },
  {
    q: "Have you hosted corporate elite events and offsites in Jaisalmer?",
    a: "Yes. Jaisalmer is a highly sought-after destination for CEO-level retreats and top-tier reward trips. I provide brand-aligned, executive-level anchoring for daytime leadership summits and premium gala hosting for the evening desert safaris, maintaining a professional yet highly engaging tone throughout."
  },
  {
    q: "What makes Jaisalmer different from Jaipur or Udaipur for a wedding host?",
    a: "Jaisalmer is remote and extreme. Families who choose the Golden City are deliberately isolating themselves in luxury at the edge of the Thar Desert. The anchor cannot rely on generic big-city gimmicks; the hosting must match the vastness of the setting. It requires an unmatched level of elegance, profound environmental awareness, and a stage presence that can match the weight of a living 12th-century fort."
  },
  {
    q: "What happens if it gets very cold during our desert Sangeet?",
    a: "Desert temperatures plummet rapidly after sunset from November to February. This is a critical event management issue. As the host, I aggressively adjust the timeline—cutting down long gaps, driving interactive segments rapidly, and immediately moving the crowd to the dance floor to keep their core temperature and energy high."
  },
  {
    q: "How far in advance should we book you for a Jaisalmer event?",
    a: "Because Jaisalmer events often require multi-day blockouts due to travel distance from central Rajasthan, my availability disappears quickly during the peak winter months. Families booking Suryagarh or the Marriott typically lock their host simultaneously with the venue. I recommend WhatsApping me immediately upon confirming your dates."
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
  title: 'Anchor in Jaisalmer | Wedding & Event Emcee | Yash Soni',
  description: 'Hire a professional anchor in Jaisalmer for desert weddings and events. Yash Soni brings energy and elegance to every Jaisalmer celebration.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-jaisalmer',
  },
  openGraph: {
    title: 'Anchor in Jaisalmer | Wedding & Event Emcee | Yash Soni',
    description: 'Hire a professional anchor in Jaisalmer for desert weddings and events. Yash Soni brings energy and elegance to every Jaisalmer celebration.',
    url: 'https://yashsoni.in/anchor-in-jaisalmer',
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
