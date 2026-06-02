import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Properties like Neemrana Fort have strict limits on DJ volume. How do you handle the Sangeet?",
    a: "This is the true test of a heritage anchor. When you cannot rely on 100-decibel subwoofers to blast the crowd into dancing, you have to use psychological momentum. I employ hyper-interactive timeline pacing, verbal hype, and intimate crowd engagement to generate a massive, organic energy spike that doesn't trigger the venue's decibel meters."
  },
  {
    q: "We are hosting a corporate strategy offsite from Gurgaon. Do you use scripts?",
    a: "I never use scripts. For Delhi/NCR executive crowds, reading from paper instantly destroys authority. I memorize the strategy flow, the panelists, and the schedule so I can modulate the panels flawlessly while maintaining continuous eye contact with the CEO and delegates."
  },
  {
    q: "How do you manage the acoustic scatter inside a 14-tiered stepped fortress?",
    a: "Fortresses are acoustic black holes; sound either dissipates totally or echoes chaotically off the stone. Instead of yelling, I use specific 'voice-compression' stage techniques, physically anchoring myself at the most central choke point, using pacing to pull the wandering guests back into the main action frame."
  },
  {
    q: "Can you bridge a highly modern Delhi crowd with deeply traditional Rajasthani relatives?",
    a: "This is precisely what makes Neemrana the perfect weekend destination—and exactly where my bilingual expertise shines. I use rapid code-switching, delivering pristine English to validate the NCR corporate/modern demographic while immediately countering with deeply respectful Hindi to honor the Rajasthani elders."
  },
  {
    q: "Are you familiar with the logistics of Tijara Fort Palace as well?",
    a: "Yes. Both Neemrana Fort and Tijara Fort fall into the same extreme-heritage event category. They require a host who respects the architectural boundaries, operates smoothly within the strict timings, and elevates the prestige of the property rather than trying to turn it into a cheap nightclub."
  },
  {
    q: "A lot of anchors charge heavy logistics from Delhi. Where do you travel from?",
    a: "I frequently bounce across the Delhi-Jaipur highway corridor. Because Neemrana is essentially the midpoint of my primary working territory, my logistics and technical riders are incredibly seamless and cost-effective compared to flying someone in."
  },
  {
    q: "How early should we book you for a Neemrana event?",
    a: "Neemrana's booking season is brutal because corporate 'weekend offsites' directly clash with 'weekend destination weddings'. The properties sell out fast. The exact day you lock your Fort Palace or resort dates, WhatsApp me to freeze the anchoring calendar."
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
  title: 'Anchor in Neemrana | Fort Wedding Host | Yash Soni',
  description: 'Professional anchor in Neemrana for royal fort weddings and heritage events. Yash Soni brings elegance and energy to every Neemrana celebration.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-neemrana',
  },
  openGraph: {
    title: 'Anchor in Neemrana | Fort Wedding Host | Yash Soni',
    description: 'Professional anchor in Neemrana for royal fort weddings and heritage events. Yash Soni brings elegance and energy to every Neemrana celebration.',
    url: 'https://yashsoni.in/anchor-in-neemrana',
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
