import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle the massive outdoor sound dispersion of Chennai's ECR beachfront properties?",
    a: "This is the cardinal rule of coastal hosting. The second you are on a 10-acre ECR lawn, the guests want to drift. A basic setup fails. I utilize 'Crowd Compression'—speeding up the timeline, initiating physical interaction, and detonating a massive dancing session that pulls the dispersed VIPs into a tight, high-energy core."
  },
  {
    q: "Our guest list includes international dignitaries and board directors. Can you match this tone?",
    a: "Completely. Elite properties like ITC Grand Chola and The Leela Palace do not need 'shouting MCs'. They require an Executive Moderator. I deliberately drop standard gimmicks. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The humidity on Chennai's coast can drain guest energy. How do you adapt?",
    a: "I execute 'Phase-Based Pacing'. I allow for formal, seated elegance during the high-humidity sunset phase, then once the temperature drops slightly and the after-party begins, I deploy aggressively high-frequency energy work to 're-start' the room and drive the dance floor unhinged."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day Chennai itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if the coastal rains force us to suddenly move our event from the lawns into the banquets?",
    a: "Chennai weather systems are volatile. If rain forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor ballroom dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Chennai?",
    a: "Travel to Chennai is completely streamlined. I am constantly active across the South India luxury wedding circuit, so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Chennai coastal event?",
    a: "Chennai’s premium destination windows (especially for Fisherman's Cove and Grand Chola) vanish over 12 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
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
  title: 'Anchor in Chennai | Wedding & Corporate Emcee | Yash Soni',
  description: 'Professional anchor in Chennai for weddings, award nights and corporate events. Yash Soni - bilingual event host available in Chennai.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-chennai',
  },
  openGraph: {
    title: 'Anchor in Chennai | Wedding & Corporate Emcee | Yash Soni',
    description: 'Professional anchor in Chennai for weddings, award nights and corporate events. Yash Soni - bilingual event host available in Chennai.',
    url: 'https://yashsoni.in/anchor-in-chennai',
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
