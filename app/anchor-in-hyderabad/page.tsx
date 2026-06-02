import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for luxury and high-profile events in Hyderabad?",
    a: "Anchor Yash Soni is highly sought after across Hyderabad's elite tier. With 1,100+ events and a perfectly calibrated bilingual execution, he provides the deep cultural respect required for Taj Falaknuma weddings and the intellectual sharpness necessary for HITEC City summits."
  },
  {
    q: "Are you familiar with the protocol required for properties like Taj Falaknuma Palace?",
    a: "Absolutely. Taj properties—especially Falaknuma—mandate an 'understated authority.' You cannot use loud, club-style entertainment here. The host must act as the dignified voice of the family, projecting immense respect for the 19th-century architecture while keeping the event seamlessly on schedule."
  },
  {
    q: "Can you manage events at Ramoji Film City where the guest count exceeds 2,000?",
    a: "Yes. Mega-scale events require an entirely different skill set than indoor banquets. Sound dissipates, and guests tend to scatter. At Ramoji, I use aggressive crowd-condensing psychology and specific vocal projection to ensure 2,000 people feel like they are part of a tight, unified celebration."
  },
  {
    q: "Ours is a cross-cultural Marwari and South Indian wedding. How do you bridge the gap?",
    a: "This is the defining dynamic of modern Hyderabad weddings. I use rapid bilingual code-switching. I conduct the ritual aspects in deeply respectful Hindi to satisfy the Marwari elders, but transition instantly to polished, metropolitan English to ensure the local South Indian family and corporate guests are fully engaged."
  },
  {
    q: "Do you use teleprompters or paper scripts for corporate summits?",
    a: "Never. All my corporate anchoring is 100% unscripted. Executive audiences at HITEC city conferences immediately notice when a host is reading. By internalizing the run-sheet, I maintain constant eye contact and can dynamically adjust the timeline if speakers run over."
  },
  {
    q: "Do you host high-energy Sangeet events in Banjara Hills or Jubilee Hills?",
    a: "Yes. For elite metropolitan Sangeets, the key is momentum. I drive the timeline aggressively, transitioning the crowd from seated family dinner performances directly into a high-voltage dance floor environment without letting the energy drop."
  },
  {
    q: "Is it difficult to book you for dates in peak winter?",
    a: "Because I travel Pan-India and anchor extensively across the Rajasthan heritage properties, my winter calendar books out incredibly fast. When you lock a premium Hyderabad venue, I recommend WhatsApping me on the very same day to secure your dates."
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
  title: 'Anchor in Hyderabad | Wedding & Corporate Emcee | Yash Soni',
  description: 'Professional anchor in Hyderabad for weddings, corporate events and award nights. Yash Soni - bilingual event host available in Hyderabad.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-hyderabad',
  },
  openGraph: {
    title: 'Anchor in Hyderabad | Wedding & Corporate Emcee | Yash Soni',
    description: 'Professional anchor in Hyderabad for weddings, corporate events and award nights. Yash Soni - bilingual event host available in Hyderabad.',
    url: 'https://yashsoni.in/anchor-in-hyderabad',
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
