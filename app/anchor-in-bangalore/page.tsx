import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for luxury and corporate events in Bangalore?",
    a: "Anchor Yash Soni is highly sought after in Bangalore's elite circuit. With 1,100+ events and a flawless bilingual (English/Hindi) capability, he provides the intellectual polish required for Whitefield corporate summits and the deep cultural respect needed for Taj West End or Palace Grounds luxury weddings."
  },
  {
    q: "We are an IT firm hosting a major summit in Bangalore. Do you use scripts?",
    a: "No. All my corporate anchoring is 100% unscripted. Executive and tech audiences instantly disengage when a host reads from cards. I memorize timelines, panelist bios, and transition logic so I can maintain absolute eye contact and command the room dynamically."
  },
  {
    q: "Ours is a cross-cultural wedding (North Indian & South Indian) in Bengaluru. Can you manage both crowds?",
    a: "Yes. This is a very common requirement in Bangalore. The hosting strategy here is bilingual code-switching. I utilize deeply respectful Hindi to honor the North Indian/Marwari rituals, and flawless metropolitan English to ensure the South Indian family and local VIPs are completely integrated and engaged."
  },
  {
    q: "Can you project enough energy for a mega-wedding at Bangalore Palace Grounds?",
    a: "Venues like Palace Grounds require a completely different skill set than indoor banquets due to massive sound dissipation and crowd scatter. I use specific acoustic pacing, strategic stage movement, and crowd-condensing techniques to ensure a 2,000-person event feels tightly unified."
  },
  {
    q: "Are you familiar with the protocol for properties like The Leela Palace or Taj West End?",
    a: "Absolutely. These ultra-premium urban properties mandate 'understated authority.' You cannot use loud, cheap humor here. The anchor must be the authoritative spine of the event—directing proceedings with immaculate diction and ensuring the host family's prestige is protected at all times."
  },
  {
    q: "Do you anchor Sangeet events in Bangalore?",
    a: "Yes. For elite metropolitan Sangeets, I focus on rapid timeline execution. I transition the evening smoothly from formal family dance performances directly into a high-voltage, interactive dance floor environment, ensuring there are no dead spaces in the energy."
  },
  {
    q: "What languages do you anchor in?",
    a: "I provide premium bilingual anchoring in English and Hindi. For Bangalore, this exact combination is usually perfect—English serves the global, professional, and cross-cultural demographic, while Hindi drives the energy for Sangeets and North Indian ceremonial rituals."
  },
  {
    q: "When should we book you for a Bangalore event?",
    a: "Because I travel pan-India from Rajasthan, flying to Bangalore requires dedicated multi-day blockouts. The corporate summit season often clashes directly with peak wedding dates (Oct–Feb). Please reach out via WhatsApp the moment your venue dates are finalized."
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
  title: 'Anchor in Bangalore | Wedding & Corporate Host | Yash Soni',
  description: 'Professional anchor in Bangalore for weddings, sangeet and corporate events. Yash Soni - experienced bilingual emcee available in Bangalore.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-bangalore',
  },
  openGraph: {
    title: 'Anchor in Bangalore | Wedding & Corporate Host | Yash Soni',
    description: 'Professional anchor in Bangalore for weddings, sangeet and corporate events. Yash Soni - experienced bilingual emcee available in Bangalore.',
    url: 'https://yashsoni.in/anchor-in-bangalore',
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
