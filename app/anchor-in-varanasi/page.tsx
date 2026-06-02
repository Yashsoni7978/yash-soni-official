import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "We are holding a highly traditional Varmala by the ghats, but half our guests are from the US. Will they understand the gravity of it?",
    a: "This is a massive priority for Varanasi events. I execute highly specialized 'Bilingual Code-Switching'. Instead of treating the rituals as an afterthought, I narrate the profound significance in sharp, highly intelligent English for the international guests, while seamlessly shifting into deep, respectful Hindi for the elders. It bridges the gap instantly and elevates the entire room."
  },
  {
    q: "How do you handle the strict acoustic and logistical constraints of heritage venues like BrijRama Palace?",
    a: "Hosting at ancient stone structures requires architectural awareness. You cannot just crank the DJ volume—the echo becomes chaotic, and the heritage rules are incredibly strict. I rely on 'Acoustic Centralizing'—using advanced vocal projection and intense physical crowd-pacing to compress the energy tightly around the stage. I generate the momentum organically rather than relying purely on noise."
  },
  {
    q: "Our Sangeet at Taj Nadesar is purely VIP executives. We do not want standard, generic MC games. Can you match the tone?",
    a: "Completely. A corporate VIP crowd immediately checks out if they hear a standard 'hype man' yelling script. I am an Executive Moderator. I host with a highly refined, entirely unscripted conversational flow. It creates a deeply sophisticated environment that transitions the executives from formal networking directly onto the dance floor seamlessly."
  },
  {
    q: "Do you use teleprompters or scripts during chaotic cross-cultural timelines?",
    a: "Never. Scripts destroy the raw intimacy of an event. When you read from a clipboard, you break eye contact with the high-net-worth audience. I memorize the complex family backgrounds, the cultural intersections, and the exact evening cues. This allows me to maintain absolute control of the stage 100% unscripted."
  },
  {
    q: "The logistics of getting all our guests down through the narrow lanes to the ghats will be chaotic. Can you handle timeline delays?",
    a: "Varanasi logistics are beautifully chaotic. You will almost certainly face timeline shifts. Because I am entirely unscripted, I can instantly rewrite the evening. If we lose an hour, I stitch performances together, accelerate the pacing, and bring the hype forward rapidly—and the audience never even senses that the timeline was compressed."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Varanasi?",
    a: "Varanasi is heavily serviced via direct flights from Delhi and Mumbai. My travel logistics are fully streamlined for Northern deployments. The exact requirement for flights and local transfers (especially crucial for ghat access) is detailed immediately upon your booking enquiry. My team handles the backend completely."
  },
  {
    q: "When should we freeze your dates for a Varanasi wedding?",
    a: "Varanasi’s absolute peak season runs alongside the major winter and religious auspicious dates. Because securing properties like Taj Nadesar or BrijRama happens over a year in advance for high-net-worth families, premium anchoring dates vanish equally as fast. Lock the dates the moment your venue contract is signed."
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
  title: 'Anchor in Varanasi | Wedding & Event Host | Yash Soni',
  description: 'Professional anchor in Varanasi for weddings and special events. Yash Soni brings cultural sensitivity and expert hosting to every Varanasi occasion.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-varanasi',
  },
  openGraph: {
    title: 'Anchor in Varanasi | Wedding & Event Host | Yash Soni',
    description: 'Professional anchor in Varanasi for weddings and special events. Yash Soni brings cultural sensitivity and expert hosting to every Varanasi occasion.',
    url: 'https://yashsoni.in/anchor-in-varanasi',
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
