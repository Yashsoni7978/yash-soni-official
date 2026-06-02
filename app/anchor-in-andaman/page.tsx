import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you manage the massive, open acoustics of a remote Andaman beach?",
    a: "The ocean is essentially an acoustic void—it absorbs all standard sound. Furthermore, properties on Radhanagar Beach are sprawling. I actively prevent 'audience drift'. I use targeted vocal projection and physical stage boundaries to condense the VIPs exactly where the energy needs to be, forcing an intimate, tightly-packed atmosphere despite the infinite horizon."
  },
  {
    q: "Our Andaman guest list is incredibly distilled—only 100 highly important VIPs. Can you host a room this small?",
    a: "This is exactly my specialty. A 1,000-person wedding requires broadcasting. A 100-person island wedding requires 'Conversational Dominance'. I dismantle the formal 'stage persona' and interact with the VIPs intimately, in immaculate English. It feels more like a high-end executive gala hosted by a close friend than a scripted show."
  },
  {
    q: "We have international guests flying into Port Blair and traditional family from mainland India. Can you bridge them?",
    a: "Absolutely. I execute pristine 'Bilingual Code-Switching'. The modern, global guests receive sharp, highly intelligent English validation, while I seamlessly intertwine deep, respectful Hindi so the traditional family feels completely centered and secure in the rituals."
  },
  {
    q: "Do you use teleprompters or scripts for these intricate VIP events?",
    a: "Never. Reading from paper in front of 100 highly intelligent VIPs instantly drops your authority. I memorize the family lineages, the complex itineraries, and the cross-border dynamics. This allows me to maintain absolute eye contact and run the entire multi-day itinerary 100% unscripted."
  },
  {
    q: "How are your logistics and travel managed for the Andamans?",
    a: "Because I travel Pan-India handling massive volumes of destination weddings, my technical rider is highly optimized. Travel to Port Blair (and the subsequent ferry to Havelock/Neil) is clearly defined in the initial contract. There are no hidden surprises; my team coordinates seamlessly with your destination planner."
  },
  {
    q: "What if island logistics (like ferry delays) force a sudden change in our Sangeet timeline?",
    a: "Island logistics are inherently volatile. If a ferry delay forces us to compress a 4-hour Sangeet into 2 hours, I do not panic. Because I am entirely unscripted, I can instantly rewrite the pacing, stitch performances together on the fly, and accelerate the hype without the audience ever realizing the timeline was compromised."
  },
  {
    q: "When should we freeze your dates for an Andaman event?",
    a: "The Andaman wedding season aligns closely with extreme peak winter dates nationwide. Because flying into Port Blair and transferring to Havelock requires a multi-day blackout on my calendar, I strictly do not hold dates. The moment your resort is finalized, secure the dates immediately."
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
  title: 'Anchor in Andaman | Beach Wedding Emcee | Yash Soni',
  description: 'Planning a beach wedding in Andaman? Hire anchor Yash Soni for a seamless, memorable destination wedding experience.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-andaman',
  },
  openGraph: {
    title: 'Anchor in Andaman | Beach Wedding Emcee | Yash Soni',
    description: 'Planning a beach wedding in Andaman? Hire anchor Yash Soni for a seamless, memorable destination wedding experience.',
    url: 'https://yashsoni.in/anchor-in-andaman',
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
