import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-jaipur/layout.jsx
// SERVER COMPONENT — metadata only, no head/script tags
export const metadata: Metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Local Event Host",
  description:
    "Yash Soni — the most trusted anchor in Jaipur. 700+ shows, 4.9★ rated, bilingual Hindi/English host for weddings, sangeets and corporate events.",
  keywords: [
    "anchor in jaipur",
    "best anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "jaipur event host",
    "jaipur anchor",
    "anchor yash soni",
    "anchor yash",
    "wedding emcee jaipur",
    "wedding anchor jaipur",
    "corporate anchor jaipur",
    "sangeet anchor jaipur",
    "local anchor jaipur",
    "anchor near me jaipur",
    "best emcee jaipur",
    "event anchor jaipur",
    "anchor in rajasthan",
    "jaipur destination wedding anchor",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor mansarovar jaipur",
    "anchor sitapura jaipur",
    "anchor vaishali nagar jaipur",
    "anchor amer road jaipur",
    "rambagh palace wedding anchor",
    "fairmont jaipur wedding anchor",
  ],
  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jaipur" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "4.9★ rated local Jaipur anchor. 700+ shows at Rambagh Palace, Fairmont, Kukas, Ajmer Road & JECC Sitapura.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Best Anchor in Jaipur — Anchor Yash Soni" }] },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★ rated. 700+ shows. Jaipur's most trusted local event anchor.",
    images: ["/og-image.webp"] },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873" } };


const FAQS = [
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  {
    q: "Who is the best anchor in Jaipur for weddings and corporate events?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated event anchor with 700+ shows hosted. He is locally based in Vaishali Nagar, Jaipur, knows every premium venue in the city, and specialises in luxury weddings, Sangeet nights, corporate award shows, NRI destination weddings, and VIP birthday galas. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top-rated anchor in Jaipur across WedMeGood, WeddingWire, Justdial, and Google.",
  },
  {
    q: "Have you hosted events at our Jaipur wedding venue before?",
    a: "Anchor Yash Soni has anchored events at virtually every premium venue in Jaipur — from the grand ballrooms of Fairmont and Marriott to the heritage courtyards of Rambagh Palace, Jai Mahal Palace, and Samode Haveli — and from JECC Sitapura to farmhouse venues on Ajmer Road and Bhankrota. Every major event zone in Jaipur has been covered repeatedly across 700+ shows.",
  },
  {
    q: "Can we meet in Jaipur to discuss our event?",
    a: "Yash Soni is locally based in Jaipur and available for in-person pre-event meetings at any convenient central location — C-Scheme, Vaishali Nagar, or wherever is most practical — to discuss the run-of-show, crowd games, and customise the event plan face-to-face. No Zoom calls required.",
  },
  {
    q: "Do you charge extra travel fees for events in Kukas or Amer?",
    a: "Zero extra travel fees apply within Jaipur — all zones including Kukas, Amer Road, Ajmer Road, Bhankrota, Jhotwara, Mansarovar, and Sitapura are treated as completely local. No flight costs, no hotel stays, and no travel surcharges for any Jaipur venue. Yash arrives fresh, two hours early, and fully prepared.",
  },
  {
    q: "Do you also host corporate events and award nights in Jaipur?",
    a: "Corporate events are a core specialisation alongside weddings — award nights, product launches, annual galas, and business summits at JECC Sitapura, Tonk Road, Birla Auditorium, and JLN Marg are a major part of the Jaipur calendar. The corporate hosting register is completely separate from wedding hosting, and both are independently mastered.",
  },
  {
    q: "Our family loves Marwari culture. Can you host in local languages?",
    a: "Yash Soni speaks fluent Hindi, polished English for international and NRI guests, and warm Marwari-Rajasthani as a native Jaipur local. He switches between all three registers live and unscripted within the same event — every family's cultural texture is different, and he adapts precisely to yours.",
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
    a: "Large crowds are a signature strength — Yash Soni has commanded open events of 10,000+ people unscripted. Farmhouse weddings on Ajmer Road with 1,000–1,500 guests are a standard evening. Crowd psychology — reading energy at scale, controlling chaos, and redirecting attention — is the core skill that separates a real anchor from an announcer.",
  },
  {
    q: "Can you host both the Haldi games and the Sangeet night?",
    a: "Hosting both the Haldi and the Sangeet with the same anchor is strongly recommended. When the anchor has already built rapport and crowd energy at the Haldi, the Sangeet begins with pre-warmed momentum — the crowd starts hot instead of cold, and the energy compounds across the full wedding day in a way two separate anchors cannot replicate.",
  },
  {
    q: "Do you travel outside Rajasthan for destination events?",
    a: "Yash Soni regularly travels outside Rajasthan for destination weddings and corporate events. While Jaipur is the home base, the event calendar includes Udaipur, Jodhpur, Jaisalmer, and Pushkar within Rajasthan, plus Mumbai, Delhi NCR, Goa, Bangalore, and select international destinations. Travel logistics are transparently structured into the booking terms.",
  },
  {
    q: "What makes Anchor Yash the best anchor in Jaipur over other options?",
    a: "Three things distinguish Anchor Yash Soni: First, 4.9★ across 50+ verified reviews on Google, WedMeGood, and WeddingWire — earned through 700+ shows, not one viral moment. Second, completely unscripted — zero paper scripts across an 5+ year career. Third, local Jaipur expertise — he knows every venue, every vendor, every zone in the city and uses that knowledge to anticipate problems before your guests ever notice them.",
  },
  {
    q: "What is the difference between an anchor, emcee, and host in Jaipur events?",
    a: "Anchor, emcee, host, and MC (Master of Ceremonies) are four terms for the same professional role — the person who leads the event programme, manages transitions, and commands the room. In Jaipur's wedding industry, 'anchor' is the most common term. Corporate event planners prefer 'emcee' or 'MC'. International and NRI families typically say 'host'. Yash Soni operates across all event formats regardless of what the role is called — the skill set is identical.",
  },
  {
    q: "Who is the best emcee in Jaipur for weddings?",
    a: "Anchor Yash Soni is Jaipur's top-rated wedding emcee with a 4.9★ rating across 50+ verified reviews on Google, WedMeGood, and WeddingWire. As a wedding emcee in Jaipur, he has hosted 700+ shows — Sangeet nights, Haldi functions, Mehndi ceremonies, and grand reception events — across Rambagh Palace, Fairmont Jaipur, Jai Mahal Palace, and farmhouse venues on Ajmer Road.",
  },
  {
    q: "Who is the best corporate emcee in Jaipur?",
    a: "Anchor Yash Soni is Jaipur's most in-demand corporate emcee for award nights, product launches, dealer meets, annual galas, and leadership summits. His corporate emcee and MC work spans JECC Sitapura, Birla Auditorium, Trident Jaipur, Marriott Jaipur, Hyatt Regency, and JLN Marg hotel properties — covering both bilingual Hindi/English hosting and the precise, brand-aligned delivery that senior management events require.",
  },
  {
    q: "Who is the best wedding host in Jaipur for NRI families?",
    a: "Yash Soni is Jaipur's most sought-after wedding host for NRI families and international guests. As a bilingual event host fluent in polished English and sophisticated Hindi, he ensures international guests from the UK, USA, Canada, and UAE feel fully included while Rajasthani traditions and family elders are honoured simultaneously. His track record as a wedding host at Rambagh Palace and Fairmont Jaipur with NRI families is extensive.",
  },
  {
    q: "Is Yash Soni available as MC for corporate events in Jaipur?",
    a: "Yash Soni is available as a professional MC (Master of Ceremonies) for corporate events across Jaipur. Corporate MC services include award ceremony hosting, conference moderation, product launch emceeing, dealer meet facilitation, and gala dinner hosting. His corporate MC work spans JECC Sitapura, Birla Auditorium, Marriott Jaipur, Hyatt Regency, and Trident Jaipur.",
  },
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
  "@id": `https://yashsoni.in/anchor-in-jaipur/#webpage`,
  url: `https://yashsoni.in/anchor-in-jaipur`,
  name: `Best Anchor in jaipur | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in jaipur. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in jaipur`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in jaipur.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in jaipur.` },
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
