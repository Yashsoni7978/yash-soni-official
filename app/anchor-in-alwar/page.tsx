import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-alwar/layout.jsx
// Minimal layout, all metadata & schemas are in page.tsx


const FAQS = [
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Alwar?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Alwar. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Alwar?",
    a: "Yash Soni specialises in premium, high-energy events. In Alwar, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Alwar?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Alwar feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Alwar, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Alwar?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Alwar, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Alwar, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Alwar is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-alwar/#webpage`,
  url: `https://yashsoni.in/anchor-in-alwar`,
  name: `Best Anchor in alwar | Wedding & Event Host, Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in alwar. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in alwar`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in alwar.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in alwar.` },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show and specific venue logistics." }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, howToSchema, faqSchema]) }} />
      <PageClient />
    </>
  );
}
