import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the most reviewed destination wedding anchor in India?",
    a: "Anchor Yash Soni is a 4.9★ rated destination wedding specialist with 1,100+ events hosted across India and international locations. He has hosted destination weddings at Taj Lake Palace and Leela Palace in Udaipur, Umaid Bhawan in Jodhpur, Suryagarh in Jaisalmer, and beach properties in Goa. His bilingual Hindi/English fluency and NRI protocol expertise make him the top choice for families flying in from the UK, USA, Canada, and Gulf.",
  },
  {
    q: "What does the destination wedding package cover?",
    a: "The full 2–3 day destination wedding package covers every event from the Welcome Lunch or Sundowner through the Pool Party or Haldi, Sangeet Gala, Varmala ceremony, and Reception. Every event gets a custom run-of-show, dedicated preparation, and a professional presence that matches the venue's grandeur. There are no hidden hourly charges — it is a flat package fee.",
  },
  {
    q: "Do you travel for weddings in Udaipur and other Rajasthan cities?",
    a: "Yes. Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer, and all Rajasthan destination cities are regularly hosted. Rajasthan is the primary destination wedding territory — the heritage venues, the palace properties, and the visual backdrop are unmatched in India. Travel from Jaipur to any Rajasthan city is seamless.",
  },
  {
    q: "Do you travel for destination weddings in Goa and other Indian states?",
    a: "Yes. Goa, Mumbai, Kerala, Mussoorie, Ranthambore, and other destination locations across India are available. Beach weddings in Goa and hill station weddings in Mussoorie are completely different formats from palace weddings — the energy, the crowd profile, and the hosting style adapt to each location.",
  },
  {
    q: "Do you host international destination weddings?",
    a: "Yes. A valid passport is held and international destination weddings in Dubai, Thailand, Bali, and other global locations are available. International bookings require at least 3–4 months notice for visa logistics and require client arrangement of return flights from Jaipur and accommodation at the wedding venue.",
  },
  {
    q: "Do you have experience with palace weddings — Rambagh, Umaid Bhawan, Leela?",
    a: "Yes. Rambagh Palace Jaipur, Umaid Bhawan Jodhpur, Taj Lake Palace Udaipur, Leela Palace, and City Palace Udaipur have all been hosted. Heritage palace venues have their own acoustic quirks, lighting protocols, and event team hierarchies — knowing these before you arrive is the difference between competent and commanding.",
  },
  {
    q: "Can you handle NRI guests and international families at destination weddings?",
    a: "NRI destination weddings are a core specialisation. Bilingual Hindi/English hosting, international etiquette awareness, and cultural navigation between Rajasthani traditions and Western protocols — all handled seamlessly. Families from the UK, USA, Canada, and Gulf fly in with specific expectations of both the cultural experience and the international standard of presentation. Both are delivered.",
  },
  {
    q: "What is your role during the non-stage events like a Welcome Lunch?",
    a: "At non-stage events, I act as the 'Social Glue.' I move through the room, facilitate introductions between families who are meeting for the first time, run casual ice-breaker games, and ensure both sides of the family are genuinely mixing — not sitting in separate groups. By the time the Sangeet starts, the room already knows each other. That changes everything.",
  },
  {
    q: "Who handles travel and accommodation for destination bookings?",
    a: "The client arranges return flights from Jaipur and accommodation at the wedding venue — same hotel as guests — for the anchor and one assistant. I always arrive at least one full day before the first event specifically to sync with the venue events team, check all technical setups, and anticipate any location-specific challenges.",
  },
  {
    q: "How far in advance should we book a destination wedding anchor?",
    a: "Destination wedding packages block 3–4 full days of the calendar. Book 6–9 months in advance for peak destination season (October–February for Rajasthan, November–January for Goa). International bookings need a minimum 3–4 months notice. WhatsApp the moment your venue and dates are confirmed — destination slots are the first to fill.",
  },
  {
    q: "What languages do you host in at destination weddings?",
    a: "Hindi and English fluently, often simultaneously. For Rajasthani palace weddings, warm Marwari and local cultural references for the family elders. For international guests, completely seamless English with zero code-switching awkwardness. Gujarati and Punjabi phrases are available for additional family connection.",
  },
  {
    q: "Do you bring a team to destination weddings?",
    a: "Yes. I travel with a manager who handles sound check, script cues, and coordination with the venue events team. We work alongside your wedding planner from arrival to departure. A dedicated WhatsApp group with the planner and key family members is set up 2–3 weeks before the wedding for real-time coordination.",
  },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

export const metadata: Metadata = {
  title: 'Destination Wedding Anchor & Emcee | Yash Soni',
  description: 'Destination wedding anchor Yash Soni has hosted weddings across Rajasthan, Goa, Himachal and more. Bilingual hosting, seamless event flow.',
  alternates: {
    canonical: 'https://yashsoni.in/destination-wedding-anchor',
  },
  openGraph: {
    title: 'Destination Wedding Anchor & Emcee | Yash Soni',
    description: 'Destination wedding anchor Yash Soni has hosted weddings across Rajasthan, Goa, Himachal and more. Bilingual hosting, seamless event flow.',
    url: 'https://yashsoni.in/destination-wedding-anchor',
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
          __html: JSON.stringify(faqSchema)
        }}
      />
      <PageClient />
    </>
  );
}
