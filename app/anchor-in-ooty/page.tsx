import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle outdoor weddings in Ooty when the Nilgiri mist and cold roll in at sunset?",
    a: "This is the cardinal rule of high-altitude hosting. The second the sun sets over the tea gardens, the crowd wants to retreat. A basic DJ setup cannot counter this psychology. I utilize 'Temperature Compression'—speeding up the entire timeline aggressively, plunging into the crowd physically, and detonating a massive dancing session before the cold forces families indoors."
  },
  {
    q: "Our Bangalore guest list is incredibly sophisticated—tech founders and corporate VIPs. Can you match this tone?",
    a: "Completely. Elite heritage properties like Savoy do not need a loud, shouting 'hype man'. They require an Executive Moderator. I deliberately drop standard, childish 'wedding gimmicks'. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The properties here are heritage sites with strict noise and acoustic rules. How do you adapt?",
    a: "I execute 'Acoustic Precision'. In locations like Coonoor or Ooty, I am extremely mindful of property decibel limits during the Day. I host conversationally. However, when the Sangeet begins, I use 'Crowd Condensing'—physically pulling the guests towards the core stage area to generate massive perceived energy without needing to volume-blast the whole mountain."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day Ooty itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if the mountain weather forces us to suddenly move our event from the lawns into the ballrooms?",
    a: "Himalayan and Nilgiri weather systems are volatile. If rain forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor banquet hall dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Ooty?",
    a: "Travel to Ooty (via Coimbatore Airport or the highway) is completely streamlined. I am constantly active across the South India luxury wedding circuit (Bangalore/Chennai/Ooty/Coorg), so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Nilgiri heritage event?",
    a: "Ooty’s premium destination windows (especially for Savoy and Ferrnhills) vanish over 12 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
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
  })),
};

export const metadata: Metadata = {
  title: 'Anchor in Ooty | Destination Wedding Host | Yash Soni',
  description: 'Destination wedding anchor in Ooty. Yash Soni hosts hill station weddings and events in Ooty with professional bilingual hosting.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-ooty',
  },
  openGraph: {
    title: 'Anchor in Ooty | Destination Wedding Host | Yash Soni',
    description: 'Destination wedding anchor in Ooty. Yash Soni hosts hill station weddings and events in Ooty with professional bilingual hosting.',
    url: 'https://yashsoni.in/anchor-in-ooty',
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
