import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q:"How much does a birthday party anchor in Jaipur cost?",
    a:"Birthday party anchoring in Jaipur starts from ₹15,000 for a standard 2–3 hour event. Milestone birthday galas with custom scripting, multiple game segments, and surprise coordination are quoted based on event complexity and duration. WhatsApp the date, venue, and guest count for a quote within the hour." },
  {
    q:"Do you anchor kids' birthday parties in Jaipur?",
    a:"Yes. Kids' birthday parties for ages 5–14 are a specific specialisation. The hosting approach is completely different from adult events — structured games, high interactivity, character-themed segments, and crowd energy management that keeps children genuinely engaged. Available across all Jaipur venues and farmhouses." },
  {
    q:"Can you host a surprise birthday party reveal in Jaipur?",
    a:"Yes. Surprise party hosting requires pre-event planning with the organising family. The reveal timing, the emotional transition from surprise to celebration, the crowd's energy management during the reveal — all scripted and coordinated before the event. Nothing about a surprise reveal should be improvised." },
  {
    q:"What is the difference between a birthday anchor and a regular DJ?",
    a:"A DJ controls the music. A birthday anchor controls the entire experience — the narrative arc of the evening, the crowd energy between segments, the personalised script, the games, the tributes, the emotional moments, and the physical energy in the room. The anchor is why the evening feels curated rather than accidental." },
  {
    q:"Do you anchor birthday parties outside Jaipur?",
    a:"Yes. Birthday event anchoring is available pan-Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar — and nationally for high-profile or destination birthday events. Travel and accommodation are billed separately and discussed at booking." },
  {
    q:"How far in advance should we book a birthday party anchor in Jaipur?",
    a:"For milestone birthdays with custom scripting, 2–4 weeks minimum. For celebrity-style galas requiring extensive script research and family coordination, 4–6 weeks. Weekend bookings for the October–February peak season fill 6–8 weeks in advance. WhatsApp to check availability immediately." },
  {
    q:"Can you anchor a 50th or 25th milestone birthday in Jaipur?",
    a:"Milestone birthdays are the most emotionally significant events to host well. A 50th birthday script involves research into the guest of honour's life, gathering contributions from family and friends, and building a narrative that genuinely moves the room. These take 2–3 weeks of pre-event preparation and are booked well in advance." },
  {
    q:"Which birthday venues in Jaipur do you work with?",
    a:"All major Jaipur venues have been worked with — Fairmont, ITC Rajputana, Marriott, Leela Palace, Rambagh Palace, Jai Mahal Palace, Samode Haveli, Trident Jaipur, and all standalone banquet venues in Mansarovar, Vaishali Nagar, C-Scheme, and the major farmhouse properties on Ajmer Road." },
  {
    q:"Do you also host anniversary celebrations in Jaipur?",
    a:"Yes. Silver jubilee (25th) and golden jubilee (50th) anniversary celebrations are a natural extension of birthday hosting. The scripting focuses on the couple's journey, with contributions from children, grandchildren, and old friends — building a public tribute that honours the relationship in front of everyone who matters." },
  {
    q:"What games do you use at birthday parties?",
    a:"Never the same games twice. Games are designed based on the specific guest mix — age range, energy level, family dynamics, and what the guest of honour would enjoy. Milestone birthdays get memory-based games, couples get anniversary trivia, kids parties get structured interactive games. Nothing from a recycled template." },
];

const faqSchema = {
  "@context":"https://schema.org","@type":"FAQPage",
  mainEntity: FAQS.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })) };

export const metadata: Metadata = {
  title: 'Birthday Party Anchor in Jaipur | Yash Soni',
  description: 'Make your birthday party unforgettable with anchor Yash Soni in Jaipur. Energetic, fun hosting for birthday parties of all sizes.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-for-birthday-party-jaipur',
  },
  openGraph: {
    title: 'Birthday Party Anchor in Jaipur | Yash Soni',
    description: 'Make your birthday party unforgettable with anchor Yash Soni in Jaipur. Energetic, fun hosting for birthday parties of all sizes.',
    url: 'https://yashsoni.in/anchor-for-birthday-party-jaipur',
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
