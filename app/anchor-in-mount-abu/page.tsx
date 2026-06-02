import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Mount Abu?",
    a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and has specific, deep experience with Mount Abu's premium circuit including Cama Rajputana Club, Hotel Hillock, and Bikaner House. He brings a unique understanding of the Gujarati-Rajasthani cultural bridge, Jain ceremony protocols, and the specific open-air acoustics of Rajasthan's only hill station."
  },
  {
    q: "Do you have experience anchoring Jain community destination weddings?",
    a: "Yes. Mount Abu is a major hub for Jain weddings due to the proximity of the Dilwara Temples. Jain ceremonies require a distinct hosting register—one that is celebratory but maintains strict boundaries regarding respect, decorum, and specific ritual vocabulary. Applying standard 'big fat Indian wedding' templates here often causes discomfort among the elders; having an anchor who understands these nuances is critical."
  },
  {
    q: "Are you comfortable hosting for predominantly Gujarati guest lists?",
    a: "Absolutely. Around 80% of destination weddings in Mount Abu are hosted by Gujarati families (from Ahmedabad, Surat, or the diaspora) who appreciate the Rajasthani heritage setting without the long travel to Jaipur. My hosting smoothly integrates Gujarati cultural touchpoints and bilingual greetings so the family feels completely at home in the Rajasthani environment."
  },
  {
    q: "How do you handle the acoustics of open-air hilltop venues like Cama Rajputana Club?",
    a: "Hill station sound behaves differently than fort or indoor hotel sound. In open, high-altitude venues like Cama Rajputana, sound has nothing to bounce off and dissipates instantly into the valley. I work closely with your sound team on dynamic range and speaker placement, but more importantly, I use crowd-clustering techniques to pull the audience closer to the stage, ensuring engagement isn't lost to the open air."
  },
  {
    q: "Can you manage events if the temperature drops drastically during a Mount Abu winter Sangeet?",
    a: "Yes. In December and January, Mount Abu nights can be freezing. When the temperature drops, you cannot let the Sangeet lag or people will retreat to their rooms. The anchor must accelerate the pacing, minimize long speeches, and move the crowd physically into interactive segments and dancing much faster. It's an environmental event-management skill."
  },
  {
    q: "Do you anchor corporate retreats in Mount Abu?",
    a: "Yes. Mount Abu is a favored accessible retreat destination for corporate teams from Gujarat. I frequently anchor leadership summits, gala dinners, and team-building events that require a polished, brand-aware, professional delivery—switching between formal corporate structure during the day and entertainment at night."
  },
  {
    q: "Have you hosted at Hotel Hillock?",
    a: "Yes, Hotel Hillock is one of my regular venues in Mount Abu. Its multi-level spaces and Aravalli views offer great versatility, but coordinating guest movement between the indoor banquets and outdoor terraces requires firm, clear anchoring. I ensure transitions are smooth without killing the momentum of the event."
  },
  {
    q: "When should we book you for a Mount Abu wedding?",
    a: "Mount Abu has a very concentrated peak season (October to February) and a much smaller inventory of premium heritage rooms compared to Udaipur or Jaipur. Therefore, dates at top properties book out very early. My calendar aligns with venue availability. Reach out on WhatsApp the moment your venue is secured."
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
  title: 'Anchor in Mount Abu | Hill Station Wedding Host | Yash Soni',
  description: "Professional anchor in Mount Abu for destination weddings and hill station events. Yash Soni - Rajasthan's top wedding emcee.",
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-mount-abu',
  },
  openGraph: {
    title: 'Anchor in Mount Abu | Hill Station Wedding Host | Yash Soni',
    description: "Professional anchor in Mount Abu for destination weddings and hill station events. Yash Soni - Rajasthan's top wedding emcee.",
    url: 'https://yashsoni.in/anchor-in-mount-abu',
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
