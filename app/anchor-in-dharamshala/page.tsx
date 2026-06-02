import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle open-air events in Dharamshala when the Dhauladhar cold rolls in at sunset?",
    a: "This is the cardinal rule of high-altitude hosting. The second the sun sets over Kangra, the crowd wants to go inside. A basic DJ setup cannot counter this psychology. I utilize 'Temperature Compression'—speeding up the entire timeline aggressively, plunging into the crowd physically, and detonating a massive dancing session with high-intensity unscripted crowd-work before the cold paralyzes the night."
  },
  {
    q: "Our Mussoorie guest list is absolutely exclusive—mostly Chandigarh executives and corporate VIPs. Can you match this tone?",
    a: "Completely. Elite destination properties like Taj Dharamshala do not need a loud, shouting 'hype man'. They require an Executive Moderator. I deliberately drop standard, childish 'wedding gimmicks'. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The properties here are beautiful but sprawling. How do you prevent guests from wandering off to the lounges?",
    a: "Large luxury properties inevitably cause 'Audience Drift'. In Dharamshala, guests go wandering for valley views. I play the role of the 'Timeline Catalyst'—deploying rapid-fire, high-frequency pacing that constantly drags the guests back to the main stage, actively preventing the energy from bleeding away across the resort footprint."
  },
  {
    q: "Do you use teleprompters or scripts during these massive VIP itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if Himalayan weather systems (heavy fog/rain) force us to suddenly move our event indoors into the ballrooms?",
    a: "Mountain logistics are totally volatile. If extreme mountain weather forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor banquet hall dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Dharamshala?",
    a: "Travel to Dharamshala (via Gaggal Airport or the highway) is completely streamlined. I am constantly active across the Northern India luxury wedding circuit (Chandigarh/Punjab/Himachal), so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Dharamshala event?",
    a: "Dharamshala’s premium destination windows perfectly mirror the absolute peak luxury dates of North India. Elite properties like Taj and Hyatt vanish over 18 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
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
  title: 'Anchor in Dharamshala | Event & Wedding Host | Yash Soni',
  description: 'Looking for an anchor in Dharamshala? Yash Soni hosts destination weddings and events in Dharamshala with professional bilingual hosting.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-dharamshala',
  },
  openGraph: {
    title: 'Anchor in Dharamshala | Event & Wedding Host | Yash Soni',
    description: 'Looking for an anchor in Dharamshala? Yash Soni hosts destination weddings and events in Dharamshala with professional bilingual hosting.',
    url: 'https://yashsoni.in/anchor-in-dharamshala',
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
