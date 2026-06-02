import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for luxury events in Mumbai?",
    a: "Anchor Yash Soni is widely regarded as a premier choice for high-end events in Mumbai. Rated 4.9★ across 200+ reviews, he specializes in elite corporate events in BKC and luxury weddings at iconic properties like the Taj Mahal Palace and The St. Regis."
  },
  {
    q: "Do you host corporate award nights and summits in Mumbai?",
    a: "Yes. Events at properties like the Trident Nariman Point or Grand Hyatt require an anchor who understands corporate tonality. The register used for an FMCG awards gala is distinctly different from a Sangeet, and Yash masters this switch effortlessly."
  },
  {
    q: "How does the travel work for Mumbai events?",
    a: "Mumbai is a major hub. Yash travels nationwide and globally for events. For Mumbai bookings, travel and local hospitality (usually at the same hotel as the event) are handled by the client. Yash always arrives the day prior to ensure zero logistical delays."
  },
  {
    q: "Can you handle a bilingual crowd of NRIs and local guests?",
    a: "Absolutely. Yash is completely bilingual, switching seamlessly between polished English and sophisticated Hindi. This ensures international delegates, NRI family members, and local guests all feel deeply included and engaged."
  },
  {
    q: "Do you use a script for hosting?",
    a: "No. Yash is famous for his zero-paper-script approach. Everything is managed live through crowd psychology and meticulous pre-event research. This allows for real-time interaction and organic, unforgettable moments that scripted anchors simply cannot deliver."
  },
  {
    q: "How far in advance should we book for a Mumbai wedding season date?",
    a: "Mumbai's peak season (November to February) and premium auspicious dates fill up 6 to 8 months in advance. Dates are secured strictly on an advance-payment basis. Reach out via WhatsApp as soon as your venue is confirmed."
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
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export const metadata: Metadata = {
  title: 'Anchor in Mumbai | Wedding & Corporate Emcee | Yash Soni',
  description: 'Professional anchor in Mumbai for weddings, corporate events and private functions. Yash Soni - experienced emcee available across Mumbai.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-mumbai',
  },
  openGraph: {
    title: 'Anchor in Mumbai | Wedding & Corporate Emcee | Yash Soni',
    description: 'Professional anchor in Mumbai for weddings, corporate events and private functions. Yash Soni - experienced emcee available across Mumbai.',
    url: 'https://yashsoni.in/anchor-in-mumbai',
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
