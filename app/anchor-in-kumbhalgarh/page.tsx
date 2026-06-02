import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Kumbhalgarh?",
    a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events anchored across Jaipur & Rajasthan. He specialises in Kumbhalgarh's heritage and wilderness wedding circuit — The Kumbha Bagh, The Aodhi, Fateh Safari Lodge, and surrounding properties. He brings Mewar cultural fluency, open-air acoustic command, and bilingual Hindi/English hosting tailored for heritage destination families."
  },
  {
    q: "Have you hosted weddings at The Kumbha Bagh in Kumbhalgarh?",
    a: "Yes. The Kumbha Bagh's fort-view courtyard and surrounding gardens are among the most dramatic event spaces in Rajasthan. Working there repeatedly means the venue's acoustic behaviour, the sight lines from different guest positions, and the specific logistical flow of the property are already deeply familiar — not being figured out during your wedding."
  },
  {
    q: "How do you manage the open-air hilltop acoustics at Aodhi or Fateh Safari?",
    a: "The Aravalli terrain creates specific atmospheric sound challenges. Sound carries differently at altitude — there is very little wall reflection and the energy disperses quickly into open space. The technique for holding a large crowd on a hilltop venue is fundamentally different from a Delhi ballroom. It requires spatial crowd-work, not just mic projection, which is a skill built through repeated performance in these environments."
  },
  {
    q: "Can you manage NRI families at Kumbhalgarh destination weddings?",
    a: "Yes. Kumbhalgarh draws families from the UK, Canada, and UAE who specifically want a heritage wilderness wedding rather than a standard hotel event. The hosting challenge is keeping international guests culturally connected and genuinely entertained while ensuring the ritual and heritage moments carry their full weight for the Indian family members. Bilingual unscripted hosting is the only way to manage both simultaneously."
  },
  {
    q: "How far in advance should I book for a Kumbhalgarh destination wedding?",
    a: "Heritage properties in Kumbhalgarh have very limited room inventory, which means event dates are constrained by peak venue availability. The November to February destination season fills 6–8 months in advance at properties like Kumbha Bagh and Aodhi. The anchor calendar mirrors venue booking timelines — secure the date and WhatsApp immediately."
  },
  {
    q: "Do you anchor Sangeet functions in Kumbhalgarh?",
    a: "Yes. Hilltop Sangeets in Kumbhalgarh are among the most visually spectacular and logistically demanding events I anchor. The open-air stage at sunset, the Aravalli backdrop, the acoustic challenges of the terrain, the crowd spread across a large lawn — all of these require preparation, experience, and live adaptability that only comes from having worked these venues repeatedly."
  },
  {
    q: "Can you host corporate retreats and leadership offsites in Kumbhalgarh?",
    a: "Yes. Corporate leadership retreats at Kumbhalgarh's safari and heritage properties are a regular part of my calendar. The format typically includes a day-conference component and an evening awards or performance gala. The tone must shift cleanly between the two — professional and sharp during the day, warm and entertaining through the evening — without the two registers ever bleeding into each other."
  },
  {
    q: "What makes Anchor Yash different from anchors who do Rajasthan generically?",
    a: "Kumbhalgarh is a specific destination with a specific cultural identity. The Mewar heritage, the Maharana Pratap lineage, the isolation of the Aravalli hilltop, the particular acoustic behaviour of the venues — these are details that only matter to someone who has worked here repeatedly. I do not bring a generic Rajasthan set to Kumbhalgarh. I bring a Kumbhalgarh performance to Kumbhalgarh."
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
  title: 'Anchor in Kumbhalgarh | Heritage Wedding Host | Yash Soni',
  description: 'Destination wedding anchor in Kumbhalgarh. Yash Soni hosts royal fort weddings and heritage events in Kumbhalgarh.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-kumbhalgarh',
  },
  openGraph: {
    title: 'Anchor in Kumbhalgarh | Heritage Wedding Host | Yash Soni',
    description: 'Destination wedding anchor in Kumbhalgarh. Yash Soni hosts royal fort weddings and heritage events in Kumbhalgarh.',
    url: 'https://yashsoni.in/anchor-in-kumbhalgarh',
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
