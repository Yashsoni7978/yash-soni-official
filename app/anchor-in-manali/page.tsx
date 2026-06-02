import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle outdoor functions in Manali where the freezing wind kills the crowd's energy?",
    a: "This is the true test of an alpine destination anchor. When the temperature drops rapidly at dusk, guests immediately want to retreat to the heaters. You cannot solve this purely with a DJ. I use 'Psychological Momentum'—accelerating the timeline aggressively, using extreme vocal projection to physically compress the crowd towards the stage, and pulling them into an intense, highly interactive dancing state before the cold sets in."
  },
  {
    q: "We are holding our Varmala by the Beas River. The water is incredibly loud. How do you manage the sound?",
    a: "The acoustic environment at riverside venues like Span Resort is hostile. I actively use 'Acoustic Defense'. Instead of fighting the river with speakers, I restructure the crowd physically—pulling the seating tighter to the mandap—and I project my voice dynamically to overpower the ambient noise, ensuring the emotional depth of the Pheras is completely preserved."
  },
  {
    q: "The demographic driving our Manali wedding is extremely high-profile Chandigarh elite. Can you generate enough hype for a Punjabi Sangeet?",
    a: "Absolutely. I do not do passive hosting. For a Punjabi VIP crowd, you cannot just stand behind a podium. I dive into the crowd natively, using highly rapid, unscripted bilingual code-switching (English/Hindi/Punjabi) to generate an explosive, highly-interactive dance floor that satisfies the highest expectations."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day destination itineraries?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you break eye contact with the high-net-worth audience. I memorize the family lineages, the complicated inside jokes, and the overarching timeline, allowing me to host 100% unscripted to maintain absolute command over the room."
  },
  {
    q: "What if Himalayan weather systems (rain/snow) force us to suddenly move our event indoors at the last minute?",
    a: "Alpine logistics are inherently volatile. If heavy rain forces us to compress an outdoor 4-hour Sangeet into a 2-hour indoor banquet hall timeline, I do not panic. Because I am entirely unscripted, I instantly rewrite the pacing, stitch family performances together on the fly, and accelerate the hype perfectly."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Kullu-Manali?",
    a: "Logistics to Manali (via Bhuntar Airport or the Chandigarh highway) are fully streamlined. Because I am heavily active across Northern India, there are no hidden travel complications; the exact logistical rider is provided instantly to you and your wedding planners upon booking."
  },
  {
    q: "When should we freeze your dates for an alpine event?",
    a: "Manali’s premium destination season aligns directly with peak summer escapes and intense winter snow weddings. The premium properties vanish over a year in advance. The exact moment your luxury venue is locked down, send me a WhatsApp to initiate the calendar block."
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
  title: 'Anchor in Manali | Destination Wedding Emcee | Yash Soni',
  description: 'Planning a destination wedding in Manali? Hire anchor Yash Soni for mountain weddings and events in Manali and Himachal Pradesh.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-manali',
  },
  openGraph: {
    title: 'Anchor in Manali | Destination Wedding Emcee | Yash Soni',
    description: 'Planning a destination wedding in Manali? Hire anchor Yash Soni for mountain weddings and events in Manali and Himachal Pradesh.',
    url: 'https://yashsoni.in/anchor-in-manali',
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
