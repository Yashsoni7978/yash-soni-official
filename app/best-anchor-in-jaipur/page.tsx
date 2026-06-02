import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  { q: "Who is the best anchor in Jaipur for weddings and events?", a: "Anchor Yash Soni is one of Jaipur's most reviewed event anchors with a 4.9★ rating across 200+ verified reviews on Google, WedMeGood, WeddingWire, and Justdial. He has hosted 1,100+ events across Rajasthan and India, specialising in luxury weddings, Sangeet nights, corporate award shows, Haldi and Mehendi ceremonies, NRI destination weddings, and VIP birthday galas." },
  { q: "What areas of Jaipur does the anchor cover?", a: "Yash Soni covers all major event zones across Jaipur — palace and heritage venues in Kukas, Amer Road, and Delhi Road; farmhouse wedding venues on Ajmer Road, Bhankrota, and Jhotwara; premium banquets in Mansarovar, Vaishali Nagar, and C-Scheme; and corporate hubs including JECC Sitapura, Tonk Road, and JLN Marg. He also travels Jaipur & Rajasthan and across Rajasthan for destination events." },
  { q: "Is Anchor Yash Soni available for Sangeet and Haldi in Jaipur?", a: "Yes. Sangeet and Haldi ceremonies are core specialisations. For Sangeet events on Ajmer Road and Bhankrota farmhouses, he routinely manages 500–1,500 guests with dance floors packed until 4 AM. For Haldi, he curates interactive games, viral moments, and crowd energy that makes the ceremony genuinely memorable." },
  { q: "Can this anchor handle a large farmhouse crowd of 1000+ guests on Ajmer Road?", a: "This is a signature strength. Yash Soni has commanded open events of 10,000+ people unscripted. A farmhouse crowd of 1,000–1,500 guests on Ajmer Road is a standard evening. The ability to read a large crowd's energy, control chaos, and redirect attention is the core skill that separates a real anchor from an announcer." },
  { q: "Does Anchor Yash Soni host NRI and destination weddings in Jaipur?", a: "NRI families and international guests are a core specialisation. Yash is completely fluent in English and Hindi, understands international etiquette and protocols, and has deep knowledge of traditional Rajasthani wedding customs — making him the anchor of choice for families flying into Jaipur from the UK, USA, Canada, and the Gulf." },
  { q: "How far in advance should I book the anchor?", a: "The calendar fills 6–8 months ahead for peak wedding season (October–February). No waitlists are maintained and no replacement anchors are sent. Once your date is confirmed, it is exclusively reserved for your event. Reach out via WhatsApp the moment your date is finalised." },
  { q: "Is Anchor Yash Soni available for corporate events at JECC Sitapura?", a: "Yes. Corporate events — award nights, product launches, annual galas, and business summits — are a core specialisation. Events at JECC Sitapura, Tonk Road, JLN Marg, and Malviya Nagar for national corporations are a regular part of the calendar. The corporate register is completely different from wedding hosting — sharp, concise, brand-aligned, and capable of matching the gravitas of keynote speakers." },
  { q: "What languages does Anchor Yash Soni host in?", a: "Hindi and English fluently, often simultaneously. For NRI families and international guests, transitions between Hindi and English are completely seamless — sometimes mid-sentence. There is also working knowledge of Rajasthani and Marwari for traditional ceremonies and rituals." },
  { q: "Is Anchor Yash available for birthday parties in Jaipur?", a: "Yes. Milestone birthdays, anniversary galas, and VIP private events in Mansarovar, Vaishali Nagar, and C-Scheme are a significant part of the calendar. Every event is fully customised — the energy and tone matched precisely to the family's personality and vision." },
  { q: "What makes this anchor different from other anchors in Jaipur?", a: "Three things: First, not a single paper script has been used in 1,100+ events. Second, crisis management — power cuts, audio failures, delayed schedules — are all handled invisible to guests. Third, cultural fluency across Rajasthani traditions, NRI international protocols, and corporate decorum that most anchors simply don't have." },
  { q: "Does Yash Soni travel outside Jaipur for events?", a: "Yes. Events across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer — are a regular part of the calendar. Jaipur & Rajasthan destination events are also available for the right engagements. Travel logistics and accommodation are structured into the booking terms." },
  { q: "How much does the best anchor in Jaipur charge?", a: "Pricing varies based on event type, duration, date, and location. For a transparent pricing breakdown, see the Anchor Charges in Jaipur 2026 guide on the blog. To get an exact quote for your event, reach out via WhatsApp with your event date, type, and guest count." },
  { q: "What is the booking process?", a: "Step 1: Send a WhatsApp message with your event date, type, and guest count. Step 2: Availability check and introductory call. Step 3: Simple written agreement and 50% advance to confirm the date. The remaining balance is due on the event day before the show begins." },
  { q: "Can Anchor Yash Soni do virtual or hybrid events?", a: "Yes. Virtual town halls, hybrid corporate galas, and online award ceremonies are part of the service offering. The craft of engaging an audience through a camera lens is fundamentally different from stage hosting, and both have been mastered." },
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
  title: 'Best Anchor in Jaipur for Weddings & Events | Yash Soni',
  description: 'Yash Soni is rated the best anchor in Jaipur for weddings, sangeet, corporate events and more. 1100+ events hosted. Book now.',
  alternates: {
    canonical: 'https://yashsoni.in/best-anchor-in-jaipur',
  },
  openGraph: {
    title: 'Best Anchor in Jaipur for Weddings & Events | Yash Soni',
    description: 'Yash Soni is rated the best anchor in Jaipur for weddings, sangeet, corporate events and more. 1100+ events hosted. Book now.',
    url: 'https://yashsoni.in/best-anchor-in-jaipur',
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
