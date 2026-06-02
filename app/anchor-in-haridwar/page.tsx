import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "How do you handle Sangeets and high-energy functions in Haridwar where alcohol is strictly prohibited?",
    a: "This is the true test of a destination anchor. You cannot rely on the bar to loosen the crowd up. I utilize 'Psychological Combat'—speeding up the entire timeline aggressively, plunging into the audience physically, and detonating a massive dancing session through pure unscripted, highly personalized interaction. I manufacture the hype out of thin air."
  },
  {
    q: "Our guest list is half Delhi NCR executives and half international (NRI) family members. Can you bridge the cultural gap?",
    a: "Completely. This is my exact specialization. A VIP spiritual destination wedding does not need a loud 'hype man'; it requires a Cultural Bridge. I host with pristine, unscripted English that translates the incredible depth of the rituals for the NRI guests, while seamlessly flipping into high-end Hindi to respect the traditional elders."
  },
  {
    q: "Properties by the Ganges (like Pilibhit House) have extremely strict silence and acoustic curfews. How do you adapt?",
    a: "I execute 'Acoustic Reverence'. I never fight the property rules. If the timeline hits a strict decibel curfew by the river, I drop the microphone. I pull the entire audience physically tighter to the stage and transition into an incredibly intimate, unplugged hosting style that preserves the exclusivity without ruining the momentum."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day spiritual itineraries?",
    a: "Never. Reading from a clipboard instantly destroys the authenticity of a spiritual retreat. It breaks eye contact, and the high-net-worth audience realizes you are a spectator, not a leader. I memorize the complex family lineages and the entire timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What happens if massive crowds near the ghats or sudden weather forces us to abruptly change our outdoor ceremony timing?",
    a: "Spiritual corridors are deeply unpredictable. If extreme crowds or weather forces us to rip down an outdoor setup and compress the entire event flow into the indoor courtyards dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing and reconstruct the sequence flawlessly."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Haridwar?",
    a: "Travel to Haridwar (via Dehradun Jolly Grant Airport or the NCR highway corridor) is completely streamlined. I am constantly active across the Uttarakhand luxury wedding circuit (Rishikesh/Mussoorie/Haridwar), so there are zero hidden logistical risks. All exact requirements are calculated instantly upon booking."
  },
  {
    q: "When should we freeze your dates for a Haridwar spiritual event?",
    a: "Haridwar’s premium destination windows are incredibly tight, mirroring massive auspicious dates. Elite properties like Pilibhit House vanish over 12 months in advance. Lock my dates the instant your luxury venue contract is confirmed."
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
  title: 'Anchor in Haridwar | Wedding & Event Host | Yash Soni',
  description: 'Professional anchor in Haridwar for weddings and special events. Yash Soni brings warmth and energy to every Haridwar celebration.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-haridwar',
  },
  openGraph: {
    title: 'Anchor in Haridwar | Wedding & Event Host | Yash Soni',
    description: 'Professional anchor in Haridwar for weddings and special events. Yash Soni brings warmth and energy to every Haridwar celebration.',
    url: 'https://yashsoni.in/anchor-in-haridwar',
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
