import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best celebrity event host in Jaipur?",
    a: "Anchor Yash Soni is one of Jaipur's most reviewed public event hosts with a 4.9★ rating across 50+ verified reviews. He has hosted celebrity meet-and-greets, India Kids Fashion Week at The Lalit Jaipur, luxury brand launches, corporate award galas at JECC Sitapura, and music events across Rajasthan. His experience spans 1,100+ events including 70+ national brand formats.",
  },
  {
    q: "Can you manage a crowd of 5,000+ at a public event?",
    a: "Large-scale public event management is a core specialisation. Yash has commanded open events of 10,000+ people unscripted. Managing crowd energy at scale — keeping thousands energised and safe simultaneously — requires a completely different discipline from wedding or corporate hosting. Both have been mastered.",
  },
  {
    q: "Do you host Bollywood celebrity interviews and red carpet events?",
    a: "Yes. Celebrity Q&A and red carpet hosting involves research into the star's recent work, preparation of PR-friendly questions, and smooth management of fan interactions. The goal: the celebrity feels respected and at ease, the fans feel connected, and the media gets clean, usable footage.",
  },
  {
    q: "Can you anchor a fashion show or runway event in Jaipur?",
    a: "Fashion show hosting is a specialisation. The voice of the runway must match the aesthetic of the collection — sophisticated, confident, and never overshadowing the designs. Yash has hosted fashion events at premium Jaipur venues including The Lalit and Marriott.",
  },
  {
    q: "Do you work with teleprompters for televised events?",
    a: "Yes. For televised events, formal product launches, and broadcast-quality corporate productions, teleprompter work is standard. Reading naturally while maintaining eye contact with a live audience — so it never looks scripted on camera — is a trained skill.",
  },
  {
    q: "Can you host a luxury brand launch or store opening?",
    a: "Luxury brand launches are a core format. Creating the anticipation, the queue culture, the social media moment, and the VIP experience that turns a store opening into a city event — this is the craft. From premium brand events on JLN Marg to large-format launches at Jaipur's five-star hotels.",
  },
  {
    q: "Do you travel for celebrity events outside Jaipur?",
    a: "Yes. While Jaipur is the base, Yash hosts public events, concerts, and celebrity events across Rajasthan and pan-India. Delhi, Mumbai, Goa, Dubai destination events are available for the right engagements. Travel logistics are structured into the booking terms.",
  },
  {
    q: "What is your experience with music concerts and festivals?",
    a: "Concert hosting involves inter-set crowd activation, headliner builds, and keeping thousands of people at peak energy from doors open to last song. Yash has hosted music events as both opening act host and primary MC for DJ shows and live performances across Jaipur and Rajasthan.",
  },
  {
    q: "How far in advance should a celebrity event be booked?",
    a: "For peak-season events and large public formats, 3–6 months advance is recommended. No waitlists are maintained and no replacement anchors are sent. Once a date is confirmed, it is exclusively reserved. WhatsApp the moment the event is confirmed to secure availability.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Celebrity & Public Events Host",
      item: "https://yashsoni.in/celebrity-public-events-host",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Celebrity & Public Event Host | Yash Soni",
  url: "https://yashsoni.in/celebrity-public-events-host",
  description: "Professional celebrity event host and public event anchor Yash Soni. Experienced in high-profile events, award nights and brand launches across India.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire a Celebrity & Public Event Host in Jaipur",
  description: "Step-by-step process to book Anchor Yash Soni for your high-profile celebrity event, concert, or brand launch.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your public event dates, crowd size, and specific venue details. Large formats require 3-6 months notice." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote and GST invoice covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment and signed agreement." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the celebrity protocols, PR notes, run-of-show, brand guidelines, and crowd management plans." },
  ],
};

export const metadata: Metadata = {
  title: 'Celebrity & Public Event Host | Yash Soni',
  description: 'Professional celebrity event host and public event anchor Yash Soni. Experienced in high-profile events, award nights and brand launches across India.',
  alternates: {
    canonical: 'https://yashsoni.in/celebrity-public-events-host',
  },
  openGraph: {
    title: 'Celebrity & Public Event Host | Yash Soni',
    description: 'Professional celebrity event host and public event anchor Yash Soni. Experienced in high-profile events, award nights and brand launches across India.',
    url: 'https://yashsoni.in/celebrity-public-events-host',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PageClient />
    </>
  );
}
