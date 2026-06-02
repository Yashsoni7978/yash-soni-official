import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "A lot of our guests are worried the Sangeet will be dull because it’s a strict dry (no-alcohol) event. How do you fix this?",
    a: "This is arguably the most valuable skillset an anchor can possess. When alcohol isn't present to loosen up a crowd, the anchor must become the catalyst. I employ 'Psychological Momentum'—using rapid-fire interactive segments, highly personalized unscripted humor, and aggressive timeline pacing to pull guests onto the dance floor via pure, organic energy."
  },
  {
    q: "We are holding a corporate offsite at Taj Rishikesh. Our crowd is purely C-Suite. Can you match this tone?",
    a: "Absolutely. A VIP corporate audience doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop all standard 'entertainment tropes' and host with sharp, highly conversational English taking zero paper notes to the stage. It bridges the gap between formal strategy and luxury relaxation seamlessly."
  },
  {
    q: "How do you handle the massive outdoor acoustics of a riverside Varmala?",
    a: "The Himalayan valley wind acts as a giant vacuum, instantly sucking away standard DJ sound. I actively prevent 'audience drift'. I use targeted vocal projection and physical stage boundaries to condense the VIPs exactly where the energy needs to be, forcing an intimate, tightly-packed atmosphere despite the infinite backdrop."
  },
  {
    q: "Do you use scripts during a chaotic multi-family timeline?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you break eye contact with the audience. I memorize the complex family dynamics, the performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu delay."
  },
  {
    q: "Since our event is heavily spiritual, can you ensure the modern English hosting doesn't disrespect the traditions?",
    a: "This is exactly why couples book me for Rishikesh. I execute pristine 'Bilingual Code-Switching'. The modern, global guests receive sharp, highly intelligent English validation, while I seamlessly intertwine deep, respectful Hindi so the gravity of the spiritual rituals by the Ganges is completely honored."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Rishikesh?",
    a: "Because I am heavily active across the Delhi-NCR circuit, the logistics to Rishikesh (via Dehradun Jolly Grant Airport or highway) are completely streamlined. There are no hidden complications, and the exact travel rider is provided instantly upon booking to your planner."
  },
  {
    q: "When should we freeze your dates for a Rishikesh wedding?",
    a: "Rishikesh’s destination season aligns directly with the absolute peak winter dates of North India. The premium luxury properties (like Taj and Roseate) vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
  },
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
    acceptedAnswer: { "@type": "Answer", text: f.a }
  })) };

export const metadata: Metadata = {
  title: 'Anchor in Rishikesh | Destination Wedding Emcee | Yash Soni',
  description: 'Planning a destination wedding in Rishikesh? Hire anchor Yash Soni for riverside weddings and events in Rishikesh and Uttarakhand.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-rishikesh',
  },
  openGraph: {
    title: 'Anchor in Rishikesh | Destination Wedding Emcee | Yash Soni',
    description: 'Planning a destination wedding in Rishikesh? Hire anchor Yash Soni for riverside weddings and events in Rishikesh and Uttarakhand.',
    url: 'https://yashsoni.in/anchor-in-rishikesh',
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
