import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for luxury Marwari weddings in Kolkata?",
    a: "Anchor Yash Soni is highly specialized in hosting for the elite business families of East India. With a deep understanding of Marwari rituals and the ability to project massive authority across giant venues like the ITC Royal Bengal, he delivers a flawless, premium experience."
  },
  {
    q: "How do you handle the massive indoor acoustics at venues like ITC Royal Bengal or JW Marriott?",
    a: "Massive pillarless banquets suffer from extreme sound reverberation. A host who just 'yells louder' will create a wall of noise that drives guests outside. I use very specific mic pacing, strategic pausing, and visual crowd control to cut through the echo and force the audience's attention to the stage."
  },
  {
    q: "Can you host corporate tech and FMCG summits in Rajarhat?",
    a: "Yes. Kolkata's corporate belt in Rajarhat requires absolute professional polish. My corporate delivery is 100% unscripted, utilizing flawless English to moderate panels, manage multi-speaker schedules, and execute complex award felicitations without breaking eye contact with the audience."
  },
  {
    q: "Ours is a cross-cultural wedding. Are you fluent in English and Hindi?",
    a: "I am perfectly bilingual. For cross-cultural events spanning Marwari, Bengali, and NRI demographics in Kolkata, I seamlessly code-switch between languages to ensure no segment of the 1,000+ guest list ever feels excluded."
  },
  {
    q: "Do you use scripts during your anchoring?",
    a: "Never. Scripts destroy the connection between an anchor and the audience. Whether I am guiding a deeply traditional ritual at Taj Bengal or hosting a 600-person tech summit, I operate entirely unscripted to maintain total situational control."
  },
  {
    q: "We are concerned about keeping our older guests engaged during the Sangeet.",
    a: "A great Sangeet honors the family first. I ensure the choreographed family performances are introduced with immense respect and tailored, unscripted introductions. Once the family feels validated, I rapidly shift the gear to high-energy, pulling both elders and youth onto the floor."
  },
  {
    q: "When should we secure your availability for a Kolkata event?",
    a: "Because I travel Pan-India and manage heavy volumes during the Rajasthan wedding season, my availability gets locked extremely fast during winter (Oct–Feb). The moment your venue—like the ITC or Taj—is confirmed, please send a WhatsApp inquiry to block the date."
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
  title: 'Anchor in Kolkata | Wedding & Event Emcee | Yash Soni',
  description: 'Professional anchor in Kolkata for weddings, corporate events and private functions. Yash Soni - experienced bilingual emcee in Kolkata.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-kolkata',
  },
  openGraph: {
    title: 'Anchor in Kolkata | Wedding & Event Emcee | Yash Soni',
    description: 'Professional anchor in Kolkata for weddings, corporate events and private functions. Yash Soni - experienced bilingual emcee in Kolkata.',
    url: 'https://yashsoni.in/anchor-in-kolkata',
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
