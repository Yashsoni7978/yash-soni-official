import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
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
      <PageClient />
    </>
  );
}
