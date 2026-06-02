import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best anchor for destination weddings in Jodhpur?",
    a: "Anchor Yash Soni is rated 4.9★ with 1,100+ events anchored across Jaipur & Rajasthan. He specialises in Jodhpur's fort and palace wedding circuit — Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur, Ajit Bhawan, Bal Samand, and Vivanta. Bilingual Hindi/English, unscripted, experienced in royal family protocols and NRI destination weddings."
  },
  {
    q: "Have you hosted weddings at Umaid Bhawan Palace?",
    a: "Yes. Umaid Bhawan is among the most demanding venues in India. The palace management has strict protocols — specific staging areas, sound system limitations in the heritage wings, and the requirement to interact respectfully with members of the royal family who may attend. Knowing what is and isn't appropriate in this setting comes from working there, not from research."
  },
  {
    q: "How do you manage the acoustics at Mehrangarh Fort events?",
    a: "The fort courtyard bounces sound off thick stone walls and loses it to the open sky simultaneously. The technique is to use the crowd rather than fight the acoustics — pulling people closer, building circular energy rather than projecting out. It is why this setting specifically requires an anchor who has worked it before, not one figuring it out during your wedding."
  },
  {
    q: "Can you manage a large NRI crowd at a Jodhpur palace wedding?",
    a: "The Jodhpur destination circuit consistently brings families from the UK, US, and UAE. The hosting challenge is specific — the international cousins need English that sounds native, not anchored. The Rajputana family elders need a tone that respects the heritage of the house. Both needs are real and neither can be ignored. Code-switching across these registers, live and unscripted, is the core skill."
  },
  {
    q: "How far in advance should I book for a Jodhpur destination wedding?",
    a: "Palace venues in Jodhpur — particularly Umaid Bhawan — have extremely limited availability windows. The anchor calendar for November through February fills 6–8 months ahead at premium properties. Blocking the date requires an advance payment and I do not hold tentative reservations. WhatsApp the moment your venue is confirmed."
  },
  {
    q: "Do you anchor Sangeet functions at Jodhpur fort venues?",
    a: "Yes. Mehrangarh Fort Sangeets are among the most complex events I anchor — the courtyard layout, the acoustic behavior of the stone, the crowd movement across multiple levels, and the desert chill that arrives after 9 PM affecting crowd energy. All of these are variables I manage in real time. The result is a Sangeet that feels electric rather than fighting the space."
  },
  {
    q: "Can you anchor corporate events in Jodhpur?",
    a: "Yes. Dealer meets, annual galas, and leadership summits at Ajit Bhawan, Vivanta Jodhpur, and WelcomHeritage Mandir Palace are a regular part of the calendar. The corporate register is brand-specific and sharp — not a wedding tone re-purposed for a boardroom. Bilingual Hindi/English is standard."
  },
  {
    q: "What makes Anchor Yash different from local Jodhpur anchors?",
    a: "Local anchors know Jodhpur. I know Jodhpur and the full spectrum of event formats, crowd psychologies, and venue-specific requirements that come with the destination wedding and corporate circuit. The 4.9★ rating from 200+ clients, the track record at palace properties, and 1,100+ events without a paper script are the evidence. The question to ask any anchor is: what happens when something goes wrong at Mehrangarh at 11 PM? The answer tells you everything."
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
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export const metadata: Metadata = {
  title: 'Anchor in Jodhpur | Royal Wedding Host | Yash Soni',
  description: 'Hire a professional anchor in Jodhpur for royal palace weddings and heritage events. Yash Soni - top event anchor in the Blue City.',
  alternates: {
    canonical: 'https://yashsoni.in/anchor-in-jodhpur',
  },
  openGraph: {
    title: 'Anchor in Jodhpur | Royal Wedding Host | Yash Soni',
    description: 'Hire a professional anchor in Jodhpur for royal palace weddings and heritage events. Yash Soni - top event anchor in the Blue City.',
    url: 'https://yashsoni.in/anchor-in-jodhpur',
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
