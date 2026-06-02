import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  {
    q: "Who is the best wedding anchor in Jaipur for premium weddings?",
    a: "Anchor Yash Soni is Jaipur's 4.9★ rated wedding anchor with 1,100+ weddings hosted across Rajasthan and India. He specialises in luxury weddings at palace venues in Kukas and Amer Road, farmhouse Sangeets on Ajmer Road, and NRI destination weddings. His bilingual Hindi/English fluency and unscripted crowd psychology make him the top choice for elite families."
  },
  {
    q: "Do you prepare scripts for family members hosting performances?",
    a: "Yes. I know Chachas and Masis get nervous. I provide simple, funny script templates and do a quick 10-minute rehearsal with family members before the show so they look confident and professional on stage. This is included as part of the preparation for every Sangeet."
  },
  {
    q: "Can you handle a crowd that is shy to dance or participate?",
    a: "That is a specialty. I use interactive Ice-Breaker games and crowd psychology techniques that naturally pull even the shyest guests onto the floor — without force or awkwardness. The dance floor at every Sangeet I host ends up packed. That is the benchmark."
  },
  {
    q: "Do you travel for destination weddings across Rajasthan and India?",
    a: "Absolutely. While Jaipur is the base, I regularly host destination weddings in Udaipur, Jodhpur, Jaisalmer, Pushkar, and across Jaipur & Rajasthan. Travel logistics and accommodation are structured into the booking terms. Early enquiry is recommended as destination slots fill faster."
  },
  {
    q: "What is your hosting style — traditional or modern?",
    a: "Both, and knowing which to use when is the craft. High-energy, sharp wit for the Sangeet and Baraat. Deeply traditional, poetic, and sophisticated for the Varmala and Pheras. The ability to shift between these registers seamlessly — without the room noticing the switch — is what sets a real wedding anchor apart."
  },
  {
    q: "Do you provide fluent commentary in English and Hindi?",
    a: "Yes, fluently in both. For NRI families with international guests, I switch between Hindi and English seamlessly — sometimes mid-sentence — without breaking the room's energy. I also add Marwari and Rajasthani cultural touches to connect with family elders."
  },
  {
    q: "What happens if the wedding timeline runs late?",
    a: "Indian weddings always run late — I plan for it. I carry a library of crowd interactions, games, and filler moments specifically designed for unexpected gaps. When the delay happens, the guests don't see a problem. They see a planned crowd moment. That is the real skill."
  },
  {
    q: "How far in advance should we book a wedding anchor in Jaipur?",
    a: "Jaipur's peak wedding season (October–February) fills 6–8 months in advance. I do not maintain a waitlist and do not send replacements. Once your date is confirmed, it is exclusively reserved for your event. The moment your venue is locked, reach out via WhatsApp."
  }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };

export const metadata: Metadata = {
  title: 'Wedding Anchor in Jaipur | Best Wedding Emcee | Yash Soni',
  description: 'Best wedding anchor in Jaipur. Yash Soni has hosted 800+ weddings across Rajasthan - bilingual, energetic and deeply experienced wedding emcee.',
  alternates: {
    canonical: 'https://yashsoni.in/wedding-anchor-jaipur',
  },
  openGraph: {
    title: 'Wedding Anchor in Jaipur | Best Wedding Emcee | Yash Soni',
    description: 'Best wedding anchor in Jaipur. Yash Soni has hosted 800+ weddings across Rajasthan - bilingual, energetic and deeply experienced wedding emcee.',
    url: 'https://yashsoni.in/wedding-anchor-jaipur',
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
