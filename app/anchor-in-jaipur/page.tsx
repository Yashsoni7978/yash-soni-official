import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor in Jaipur for weddings and corporate events?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 1,100+ events hosted. He is locally based, knows every premium venue in the city, and specialises in luxury weddings, Sangeet nights, corporate award shows, NRI destination weddings, and VIP birthday galas. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top-rated anchor in Jaipur across WedMeGood, WeddingWire, Justdial, and Google.",
  },
  {
    q: "Have you hosted events at our Jaipur wedding venue before?",
    a: "If it is a premium venue in Jaipur, the answer is almost certainly yes. From the grand ballrooms of Fairmont and Marriott to the heritage courtyards of Rambagh Palace, Jai Mahal, and Samode Haveli — from JECC Sitapura to farmhouse venues on Ajmer Road and Bhankrota — every major event zone in Jaipur has been covered.",
  },
  {
    q: "Can we meet in Jaipur to discuss our event?",
    a: "Absolutely. Yash is locally based in Jaipur and happy to meet at any central location — C-Scheme, Vaishali Nagar, or anywhere convenient — to discuss the run-of-show, crowd games, and customise the event plan face-to-face. No Zoom calls required.",
  },
  {
    q: "Do you charge extra travel fees for events in Kukas or Amer?",
    a: "No. All Jaipur zones — Kukas, Amer Road, Ajmer Road, Bhankrota, Jhotwara, Mansarovar, Sitapura — are treated as local. No flight costs, no hotel stays, no travel surcharges for any Jaipur venue. Yash arrives fresh, early, and fully prepared.",
  },
  {
    q: "Do you also host corporate events and award nights in Jaipur?",
    a: "Yes. Corporate events — award nights, product launches, annual galas, and business summits at JECC Sitapura, Tonk Road, Birla Auditorium, and JLN Marg — are a core specialisation. The corporate register is completely different from wedding hosting and both are mastered.",
  },
  {
    q: "Our family loves Marwari culture. Can you host in local languages?",
    a: "Khamma Ghani! As a Jaipur local, Yash switches between fluent Hindi, sophisticated English for international and NRI guests, and warm Marwari-Rajasthani banter that makes the elders feel right at home. Every family's cultural texture is different — he adapts to yours.",
  },
  {
    q: "What is the cost of hiring the best anchor in Jaipur?",
    a: "Pricing reflects premium, unscripted quality and varies based on event type, duration, date, and guest count. For complete transparent pricing, see the Anchor Charges in Jaipur 2026 guide on the blog. For a personalised quote, send a WhatsApp message with your event date, type, and guest count.",
  },
  {
    q: "How far in advance should we book a Jaipur anchor?",
    a: "Jaipur's peak wedding season (October–February) books 6–8 months in advance. No waitlists are maintained and no replacements are sent. Once a date is confirmed, it is exclusively reserved for that event. The moment your venue is locked, reach out via WhatsApp immediately.",
  },
  {
    q: "Can you handle an event with 1000+ guests?",
    a: "Large crowds are a signature strength. Yash has commanded open events of 10,000+ people unscripted. Farmhouse weddings on Ajmer Road with 1,000–1,500 guests are a standard evening. Crowd psychology — reading energy at scale, controlling chaos, and redirecting attention — is the core skill that separates a real anchor from an announcer.",
  },
  {
    q: "Can you host both the Haldi games and the Sangeet night?",
    a: "Highly recommended. When the same anchor hosts the Haldi and the Sangeet, the crowd already knows the energy by evening — the Sangeet starts hot instead of needing to warm up. The momentum compounds across the day.",
  },
  {
    q: "Do you travel outside Rajasthan for destination events?",
    a: "Yes. While Jaipur is the home base, Yash hosts events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and travels Jaipur & Rajasthan for destination weddings and corporate galas. Travel logistics are structured into the booking terms.",
  },
  {
    q: "What makes Anchor Yash the best anchor in Jaipur over other options?",
    a: "Three things: First, 4.9★ across 200+ verified reviews on Google, WedMeGood, and WeddingWire — earned through 1,100+ events, not one viral moment. Second, completely unscripted — zero paper scripts ever. Third, local Jaipur expertise — he knows every venue, every vendor, every zone in the city and uses that knowledge to anticipate problems before your guests ever notice them.",
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
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

export const metadata: Metadata = {
  title: 'Best Anchor in Jaipur | Yash Soni',
  description: 'Looking for the best anchor in Jaipur? Yash Soni has hosted 1100+ events across Rajasthan. Hire a professional wedding and corporate anchor in Jaipur.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-jaipur',
  },
  openGraph: {
    title: 'Best Anchor in Jaipur | Yash Soni',
    description: 'Looking for the best anchor in Jaipur? Yash Soni has hosted 1100+ events across Rajasthan. Hire a professional wedding and corporate anchor in Jaipur.',
    url: 'https://yashsoni.in/anchor-in-jaipur',
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
