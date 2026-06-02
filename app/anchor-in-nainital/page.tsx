import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle outdoor functions by Naini Lake where the altitude drops the temperature drastically?",
    a: "This is the true test of a Kumaon destination anchor. When the evening cold hits the lake, guests instantly mentally check out and want to go inside. A generic DJ set will fail here. I use 'Psychological Momentum'—accelerating the timeline aggressively, physically moving into the crowd, and forcing an explosive dancing state via unscripted interaction before the cold ruins the event."
  },
  {
    q: "We are holding our Varmala outdoors. The wind off the lake is usually very loud. Can you manage the audio spread?",
    a: "The acoustic drop-off at properties in Bhimtal and Nainital is massive. I actively deploy 'Acoustic Defense'. Instead of just telling the DJ to max the volume (which causes terrible echo), I restructure the crowd physically—pulling the seating tighter to the stage—and I use heavy vocal projection to overpower the ambient wind, ensuring the emotional depth of the Pheras is deeply felt."
  },
  {
    q: "Our guest list is highly exclusive—mostly South Delhi executives and VIP corporate legacy families. Can you match this tone?",
    a: "Completely. A VIP destination wedding at The Naini Retreat does not need a high-pitched 'hype man'; it requires an Executive Moderator. I drop all standard 'wedding gimmick' games. I host with sharp, highly conversational, unscripted English that treats the VIPs with intellectual respect, bridging the gap between networking and raw celebration."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day lakeside itineraries?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you look unprepared and you completely break eye contact with a high-net-worth audience. I memorize the family lineages, the corporate dynamics, and the overarching timeline. This allows me to host 100% unscripted to maintain absolute command over the sprawling property."
  },
  {
    q: "What if sudden mountain rain systems force us to spontaneously move our open-air Sangeet indoors?",
    a: "High-altitude logistics are inherently volatile. If extreme weather forces us to compress an sprawling outdoor Sangeet into an indoor banquet hall dynamically, I do not panic. Because I am entirely unscripted, I instantly synthesize the new pacing, stitch family performances together on the fly, and reconstruct the Sangeet hype natively."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Nainital/Bhimtal?",
    a: "Logistics to the Kumaon region (via Pantnagar Airport or the Kathgodam highway) are highly streamlined. I operate heavily across the Delhi-NCR/Uttarakhand corridor, so there are no massive travel delays. The exact logistical rider is verified and provided instantly upon booking."
  },
  {
    q: "When should we freeze your dates for a Kumaon event?",
    a: "Nainital’s destination season aligns directly with the absolute peak luxury resort dates. Elite properties vanish over a year in advance for high-net-worth weddings. Lock my dates the exact moment your luxury venue contract is signed."
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
  title: 'Anchor in Nainital | Destination Wedding Emcee | Yash Soni',
  description: 'Hire an anchor in Nainital for destination weddings and hill events. Yash Soni - experienced event host across Uttarakhand.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-nainital',
  },
  openGraph: {
    title: 'Anchor in Nainital | Destination Wedding Emcee | Yash Soni',
    description: 'Hire an anchor in Nainital for destination weddings and hill events. Yash Soni - experienced event host across Uttarakhand.',
    url: 'https://yashsoni.in/anchor-in-nainital',
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
