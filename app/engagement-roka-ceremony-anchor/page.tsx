import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  {
    q:"How much does an engagement or roka ceremony anchor in Jaipur cost?",
    a:"Engagement and roka ceremony anchoring in Jaipur starts from ₹12,000 for a standard 2–3 hour event. Ring ceremony galas with custom scripting, family games, and ring exchange narration are priced based on event duration and complexity. WhatsApp the event details for a quote within the hour." },
  {
    q:"What does an engagement ceremony anchor actually do?",
    a:"An engagement anchor scripts and manages the entire ceremony flow — the ring exchange build-up, family introductions, both-family games, ritual narration, and the transition from formal ceremony to celebration. The anchor is the reason the two families stop being strangers and start feeling like one extended family." },
  {
    q:"Do you anchor roka ceremonies in Jaipur?",
    a:"Yes. Roka ceremonies are a specific specialisation — the first formal family meeting is the highest-pressure icebreaker situation in the wedding calendar. Custom games, bilingual hosting, and genuine warmth that turns a formal agreement into a real celebration." },
  {
    q:"Can you host a ring ceremony or sagai in Jaipur?",
    a:"Yes. Ring ceremony and sagai anchoring includes custom scripted ring exchange narration, both-family games, cultural ritual guidance for guests unfamiliar with traditions, and bilingual Hindi/English hosting throughout." },
  {
    q:"What makes a roka ceremony anchor different from a wedding anchor?",
    a:"A roka is about two families meeting for the first time and leaving as one. A wedding is about celebrating a union already established. The roka anchor's job is fundamentally about icebreaking — building warmth and laughter between strangers. This is a different skill set from wedding ceremony anchoring." },
  {
    q:"Do you handle bilingual and NRI families at engagements?",
    a:"Yes. NRI and cross-cultural engagements are common — families where one side is from the UK or US and the other from Rajasthan or Delhi. Genuine bilingual Hindi/English hosting that adapts in real time to the demographic in front of you, not a scripted code-switch every paragraph." },
  {
    q:"How far in advance should we book an engagement anchor in Jaipur?",
    a:"For engagement ceremonies at premium venues, 3–4 weeks minimum. For large-format engagement galas with extensive game design and custom scripting, 4–6 weeks. Weekend dates in peak season fill quickly. WhatsApp as soon as the date and venue are confirmed." },
  {
    q:"Which venues in Jaipur do you anchor engagement events at?",
    a:"All major Jaipur engagement venues — hotel ballrooms and banquet halls at Fairmont, ITC Rajputana, Marriott, Leela, Jai Mahal Palace, standalone event venues in Mansarovar and Vaishali Nagar, and farmhouses on Ajmer Road. The anchor adapts the format to the venue's size, acoustic properties, and audience." },
  {
    q:"Do you design the family games for the engagement ceremony?",
    a:"Yes. Games are custom-designed for each engagement based on the specific families — their backgrounds, the couple's story, and what will work for the exact guest mix present. Never recycled templates. The 'who knows them better' game uses real information gathered from both families in the pre-event briefing." },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })) };

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Engagement Roka Ceremony Anchor",
      item: "https://yashsoni.in/engagement-roka-ceremony-anchor",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "Engagement & Roka Ceremony Anchor | Yash Soni",
  url: "https://yashsoni.in/engagement-roka-ceremony-anchor",
  description: "Professional engagement and roka ceremony anchor Yash Soni. Fun, warm hosting that makes your engagement celebration truly special.",
  inLanguage: "en-IN",
  about: { "@type": "Person", name: "Yash Soni", alternateName: "Anchor Yash Soni", jobTitle: "Professional Event Anchor, Emcee, and Host", url: "https://yashsoni.in", telephone: "+917737877978", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" }, sameAs: ["https://www.instagram.com/anchor_yash_official","https://www.facebook.com/anchoryashsoni","https://www.wedmegood.com/profile/anchor-yash-25628297","https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"] },
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] },
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Hire the Best Engagement & Roka Anchor in Jaipur",
  description: "Step-by-step process to book Anchor Yash Soni for your engagement, roka, or ring ceremony in Jaipur.",
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: "WhatsApp +91 7737877978 with your event dates and venues. Peak season dates fill 6+ months ahead." },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment. No tentative holds are maintained." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show, family dynamics, and custom game planning." },
  ],
};

export const metadata: Metadata = {
  title: 'Engagement & Roka Ceremony Anchor | Yash Soni',
  description: 'Professional engagement and roka ceremony anchor Yash Soni. Fun, warm hosting that makes your engagement celebration truly special.',
  alternates: {
    canonical: 'https://yashsoni.in/engagement-roka-ceremony-anchor',
  },
  openGraph: {
    title: 'Engagement & Roka Ceremony Anchor | Yash Soni',
    description: 'Professional engagement and roka ceremony anchor Yash Soni. Fun, warm hosting that makes your engagement celebration truly special.',
    url: 'https://yashsoni.in/engagement-roka-ceremony-anchor',
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
