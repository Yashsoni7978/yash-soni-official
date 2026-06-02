import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle outdoor functions in Mussoorie where the freezing wind kills the crowd's energy?",
    a: "This is the ultimate test of a Doon Valley anchor. When the temperature drops rapidly at sunset, guests instantly mentally check out and want to retreat indoors. You cannot solve this purely with a loud sound system. I use 'Psychological Momentum'—accelerating the timeline aggressively, using extreme vocal projection to physically compress the crowd towards the stage, and forcing an explosive dancing state before the cold wins."
  },
  {
    q: "Our Mussoorie guest list is absolutely exclusive—mostly South Delhi executives and corporate VIPs. Can you match this tone?",
    a: "Completely. A VIP destination wedding doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop all standard 'wedding gimmicks' and host with sharp, highly conversational, unscripted English. It treats the VIPs with intellectual respect and immediately breaks the sterile barrier between the stage and the high-society audience."
  },
  {
    q: "The properties here like JW Marriott and Jaypee Manor are massive. How do you prevent guests from wandering off?",
    a: "Large-footprint luxury properties cause severe 'Audience Drift'. Guests vanish to the lounges or terraces. I assume the role of the 'Timeline Catalyst'—deploying rapid-fire pacing and unscripted crowd-work that constantly drags the guests back to the main stage, actively keeping the energy trapped and centralized throughout the evening."
  },
  {
    q: "Do you use teleprompters or scripts during these massive VIP itineraries?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you look unprepared and you break eye contact with the high-net-worth audience. I memorize the family lineages, the corporate dynamics, and the overarching timeline, allowing me to host 100% unscripted to maintain absolute command over the room."
  },
  {
    q: "What if Himalayan weather systems (heavy rain) force us to suddenly move our event indoors into the ballrooms?",
    a: "Mountain logistics are inherently volatile. If extreme weather forces us to compress an sprawling outdoor Sangeet into an indoor banquet hall at the last minute, I do not panic. Because I am entirely unscripted, I instantly rewrite the pacing, stitch family performances together on the fly, and reconstruct the hype natively."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Mussoorie?",
    a: "Logistics to Mussoorie (via Dehradun Jolly Grant Airport) are entirely streamlined. I operate heavily across the Delhi-NCR/Dehradun corridor, so there are no hidden travel complications. The exact logistical requirement is verified and provided instantly upon your booking."
  },
  {
    q: "When should we freeze your dates for a Mussoorie event?",
    a: "Mussoorie’s premium destination season aligns directly with the absolute peak luxury dates of North India. Elite properties like JW Marriott and The Savoy vanish over a year in advance for big weekends. Lock my dates the instant your luxury venue contract is signed."
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
  title: 'Anchor in Mussoorie | Destination Wedding Host | Yash Soni',
  description: 'Destination wedding anchor in Mussoorie. Yash Soni hosts hill station weddings and events in Mussoorie with professional hosting.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-mussoorie',
  },
  openGraph: {
    title: 'Anchor in Mussoorie | Destination Wedding Host | Yash Soni',
    description: 'Destination wedding anchor in Mussoorie. Yash Soni hosts hill station weddings and events in Mussoorie with professional hosting.',
    url: 'https://yashsoni.in/anchor-in-mussoorie',
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
