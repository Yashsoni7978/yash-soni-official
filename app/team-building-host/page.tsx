import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best corporate team building host in Jaipur?",
    a: "Anchor Yash Soni is a 4.9★ rated corporate team building host with 70+ national brands served and 1,100+ events hosted. He specialises in employee engagement, drum circles, scavenger hunts, corporate tournaments, and annual day hosting for groups of 50–1,000+ employees across Jaipur, Rajasthan, and Jaipur & Rajasthan offsites.",
  },
  {
    q: "Why do we need a professional host for team building instead of HR?",
    a: "An internal HR manager can organise the games — but a professional host brings neutral authority, high energy, and the crowd psychology to manage 100–500 people simultaneously without office politics interfering. The intern participates the same as the CEO. That psychological safety is what makes team building actually work.",
  },
  {
    q: "Can you manage large groups of 100+ employees for team building?",
    a: "Yes. Large-format employee engagement is a core specialisation. Groups of 100–1,000+ are managed using clear microphone instructions, subgroup division strategies, and a pace that keeps every team engaged simultaneously — nobody waits, nobody sits out.",
  },
  {
    q: "Do you conduct team building activities in Jaipur resorts?",
    a: "Yes. Corporate offsites at Jaipur's Aravalli circuit resorts — Rambagh, Fairmont, Trident, and resort properties near Ajmer Road — are a regular format. Scavenger hunts, drum circles, and outdoor challenges are customised for the specific property layout.",
  },
  {
    q: "Do you bring your own props and materials?",
    a: "Yes. Standard game kits — ropes, balls, placards, blindfolds, trivia boards, and tournament brackets — are carried. The client provides the venue and audience. Everything else is handled.",
  },
  {
    q: "Can you conduct indoor team building for small offices in Jaipur?",
    a: "Yes. A dedicated conference room module is designed for small spaces — mental challenges, rapid fire quizzes, virtual scavenger hunts, and Pictionary formats that work with 20–50 people in a standard office setting.",
  },
  {
    q: "Do you host virtual team building sessions?",
    a: "Yes. Virtual team building via Zoom and Microsoft Teams — virtual scavenger hunts, online Pictionary, rapid fire quizzes, and digital ice-breakers — for remote and hybrid teams across Jaipur & Rajasthan.",
  },
  {
    q: "How long does a typical team building session last?",
    a: "A standard high-energy session runs 60–90 minutes. Full-day facilitation for residential offsites ranges from 4–6 hours across multiple activity modules. Annual Day programmes run 3–5 hours including awards, entertainment, and engagement segments.",
  },
  {
    q: "Can you host Annual Day events for companies in Jaipur?",
    a: "Yes. Annual Day hosting — awards ceremony, entertainment anchoring, employee recognition, and engagement activities — for 200–1,000+ employees is a core corporate format. Venues across Jaipur including JECC Sitapura, Birla Auditorium, and five-star hotel ballrooms are regularly hosted.",
  },
  {
    q: "How far in advance should corporate team building be booked?",
    a: "For large-format offsites and Annual Day events, 4–6 weeks in advance is recommended. For smaller Fun Friday or monthly sessions, 2 weeks is usually sufficient. Reach out via WhatsApp with your date, group size, and activity preference for a quick confirmation.",
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
  title: 'Team Building Event Host & Facilitator | Yash Soni',
  description: 'Professional team building event host Yash Soni. Engaging facilitation for corporate team building activities, retreats and annual days.',
  alternates: {
    canonical: 'https://yashsoni.in/team-building-host',
  },
  openGraph: {
    title: 'Team Building Event Host & Facilitator | Yash Soni',
    description: 'Professional team building event host Yash Soni. Engaging facilitation for corporate team building activities, retreats and annual days.',
    url: 'https://yashsoni.in/team-building-host',
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
