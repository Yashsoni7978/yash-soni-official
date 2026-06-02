import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for prestige destination weddings in Ajmer?",
    a: "Anchor Yash Soni is widely regarded as the top tier host for Ajmer's luxury circuit, particularly for venues like Pratap Palace (Taj) and Mansingh Palace. His 4.9★ rating stems from his meticulous ability to bridge high-net-worth NRI expectations with deep, authentic central Rajasthani warmth."
  },
  {
    q: "We are an NRI family organizing an event in Ajmer. Are you fluent in English?",
    a: "Absolutely. I specialize in bilingual (English/Hindi) hosting. When hosting for NRI or multi-cultural families at properties like Pratap Palace, the anchoring must be perfectly polished in English while retaining the rich emotional vocabulary of Hindi for the traditional rituals."
  },
  {
    q: "How do you manage the difference between Ajmer events and Pushkar events?",
    a: "Though they are sister cities, they require different registers. Pushkar is often bohemian, deeply traditional, and highly spiritual. Ajmer is syncretic, metropolitan-adjacent, and anchored by premium formal properties. I transition between the two by shifting from formal grandeur (Ajmer) to traditional warmth (Pushkar) as the venue demands."
  },
  {
    q: "Do you have experience anchoring at Taj properties like Pratap Palace?",
    a: "Yes. Anchoring at Taj properties requires adherence to a very specific standard of luxury. The staff, the ambiance, and the guest list all operate at an elite frequency. The host cannot bring 'street' event energy in; the delivery must be highly sophisticated, deeply respectful, and effortlessly authoritative."
  },
  {
    q: "Can you handle complex corporate and medical summits in Ajmer?",
    a: "Yes. Ajmer’s central location makes it a prime hub for statewide corporate and medical association events. I anchor these with zero scripts, managing complex timelines, multi-speaker transitions, and VIP protocols with absolute precision, followed by seamless transitions into evening entertainment."
  },
  {
    q: "How do you handle outdoor acoustics by the lakes in Ajmer?",
    a: "Properties near Ana Sagar Lake suffer from rapid sound dissipation and wind interference. I work actively with the sound team to ensure correct monitor placement, and more importantly, I use physical spacing techniques to pull the audience closer together—creating a pocket of contained energy that defeats the open air."
  },
  {
    q: "Do you use scripts during your anchoring?",
    a: "Never. Every event I anchor is 100% unscripted. Scripts create a wall between the host and the audience. Real crowd command requires constant eye contact and the ability to instantly react to spontaneous moments. This is what separates premium hosting from generic announcing."
  },
  {
    q: "When should we secure you for an Ajmer wedding?",
    a: "Ajmer shares its peak season with the rest of the Rajasthan golden triangle (October to February). Because premium venues like Pratap Palace are booked out months in advance, elite anchor availability evaporates at the exact same time. Send a WhatsApp message immediately after blocking your venue."
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
  title: 'Anchor in Ajmer | Wedding Emcee & Event Host | Yash Soni',
  description: "Professional anchor in Ajmer for weddings, corporate events and functions. Yash Soni - Rajasthan's top event anchor.",
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-ajmer',
  },
  openGraph: {
    title: 'Anchor in Ajmer | Wedding Emcee & Event Host | Yash Soni',
    description: "Professional anchor in Ajmer for weddings, corporate events and functions. Yash Soni - Rajasthan's top event anchor.",
    url: 'https://yashsoni.in/anchor-in-ajmer',
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
