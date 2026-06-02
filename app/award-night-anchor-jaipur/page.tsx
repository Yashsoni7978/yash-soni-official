import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q:"Who is the best award night anchor in Jaipur?",
    a:"Anchor Yash Soni is Jaipur's 4.9★ rated corporate anchor with 70+ national brands served. Specialist in award ceremonies, annual day hosting, CEO galas, and dealer meets at JECC Sitapura, Fairmont, ITC Rajputana, and all major Jaipur corporate venues. Teleprompter-free, brand-aligned, bilingual Hindi/English." },
  {
    q:"Do you anchor corporate award nights at JECC Sitapura in Jaipur?",
    a:"Yes. JECC Sitapura is a core venue specialisation — Jaipur's largest convention centre at 5,000 person capacity. National brand summits, government award nights, and corporate galas at JECC have been anchored multiple times. The venue's AV infrastructure, staging protocols, and operational requirements are known from direct experience." },
  {
    q:"What makes a corporate award night anchor different from a wedding anchor?",
    a:"Register, precision, and brand alignment. A wedding anchor builds emotion and energy. A corporate award night anchor must hold a professional audience's attention across a 3–4 hour programme with multiple award categories, keynote speakers, and sponsor moments — while maintaining brand tone throughout. These are completely different skill sets." },
  {
    q:"Do you anchor dealer meets and channel partner events in Jaipur?",
    a:"Yes. Dealer meets are a regular format — typically 300–2,000 delegates, bilingual Hindi/English mandatory, day programme combined with evening gala. The anchor manages both the structured business programme and the evening celebration. National brands including FMCG, automotive, and BFSI sectors have been served." },
  {
    q:"Can you anchor a product launch event in Jaipur?",
    a:"Yes. Product launches require the anchor to build genuine pre-reveal tension, manage media and trade interactions, facilitate CEO-to-camera moments, and sustain audience engagement across what is often a technically complex programme. Brand briefing happens in advance to ensure the hosting is an extension of the product's communication strategy." },
  {
    q:"What is the cost of hiring an award night anchor in Jaipur?",
    a:"Corporate award night anchoring fees depend on event duration, programme complexity, and whether bilingual scripting and pre-event research are required. WhatsApp the event details for a quote within the hour." },
  {
    q:"Which corporate venues in Jaipur do you anchor events at?",
    a:"JECC Sitapura, Fairmont Jaipur, ITC Rajputana, Marriott Jaipur, Birla Auditorium, Novotel Jaipur, and all major corporate event hotels on JLN Marg and Tonk Road. Each venue has its own technical setup, staging protocols, and AV capabilities — all known from prior events." },
  {
    q:"How far in advance should we book a corporate anchor in Jaipur?",
    a:"For large-format award nights at JECC and major hotels, 4–6 weeks minimum to allow for brand briefing, script research, and winner list preparation. For complex multi-brand events with teleprompter rejection, book 6–8 weeks out. WhatsApp immediately once the date and venue are confirmed." },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })) };

export const metadata: Metadata = {
  title: 'Award Night Anchor in Jaipur | Corporate Emcee | Yash Soni',
  description: 'Professional award night anchor and corporate emcee in Jaipur. Yash Soni hosts award ceremonies, gala dinners and corporate nights with polish.',
  alternates: {
    canonical: 'https://yashsoni.in/award-night-anchor-jaipur',
  },
  openGraph: {
    title: 'Award Night Anchor in Jaipur | Corporate Emcee | Yash Soni',
    description: 'Professional award night anchor and corporate emcee in Jaipur. Yash Soni hosts award ceremonies, gala dinners and corporate nights with polish.',
    url: 'https://yashsoni.in/award-night-anchor-jaipur',
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
