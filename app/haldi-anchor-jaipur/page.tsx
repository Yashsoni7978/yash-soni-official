import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const FAQS = [
  { q: "Why hire a specialized Haldi Games Anchor?", a: "A Haldi requires a completely different energy than a formal reception. It’s loud, messy, and intimate. You need a specialized emcee who excels at high-energy crowd control, interactive games, and bringing out the crazy side of your family without making it awkward." },
  { q: "Do you host combined Haldi ceremonies (Bride & Groom together)?", a: "Yes! Combined Haldis are my favorite. It allows for incredible 'Bride Squad vs. Groom Squad' game dynamics, creating massive energy and unforgettable photos." },
  { q: "Do you travel for Destination Weddings?", a: "Absolutely. Whether your Haldi is in a heritage palace in Jaipur or a beachfront resort in Goa, I travel globally to bring unmatched energy to your destination wedding." },
  { q: "What kind of interactive Haldi games do you play?", a: "I completely customize the games based on your crowd. We do everything from high-voltage Tug-of-War and Saree Draping Challenges for the boys, to intimate Couple Trivia and Bollywood Dance-Offs." },
  { q: "Do you bring the props for the games?", a: "Yes! I bring a dedicated 'Fun Kit' loaded with buzzers, blindfolds, placards, and game accessories. You just show up and play." },
  { q: "Will the games be too messy or wild for elders?", a: "Not at all. I categorize the interactions. We have 'Messy & Wild' games for the friends, and 'Classy & Entertaining' games for the elders. Dadis and Nanis love judging the contests while the youth gets dirty!" },
  { q: "Do you handle the Dholwala and DJ coordination?", a: "Yes. The music makes the Haldi. I coordinate directly with your DJ and Dhol team to sync the beats with my commentary, the games, and the couple's grand entry." },
  { q: "Do you coordinate with the photographers?", a: "Always. I ensure the photographers are in position before executing high-impact moments like the Phoolon Ki Holi or the winning game celebrations so you get the perfect candid shots." },
  { q: "Can you host a Phoolon Ki Holi?", a: "100%. It is the most photogenic part of the ceremony. I choreograph the entire flower shower so your wedding photographers get those perfect, viral-worthy shots." },
  { q: "What if my family members are shy to play?", a: "That is exactly why you hire a professional. I don't force anyone; I use seamless 'Ice-Breakers' that naturally pull people in. Within the first 15 minutes, even the shyest relatives are cheering." },
  { q: "What happens if our event timeline is running late?", a: "Indian weddings are rarely on time! I am fully adaptable. If we are running behind, I seamlessly condense the games to keep the energy high without disrupting your checkout or next event." },
  { q: "Do you wear yellow to match the Haldi theme?", a: "Always. I wear vibrant, premium traditional wear (usually yellow, mustard, or floral) to blend perfectly into your Haldi aesthetics like a true family member." },
  { q: "What languages do you host in?", a: "I seamlessly switch between English, Hindi, and regional touches like Marwari or Punjabi. I make sure the NRI friends and the local relatives all feel equally involved." },
  { q: "What is the ideal time to start the Haldi games?", a: "It depends on your schedule, but mid-morning (11 AM) or late afternoon (4 PM) works best for lighting and energy. We usually play games before the actual paste is applied!" },
  { q: "How long is your Haldi hosting package?", a: "Typically 3 to 4 hours. I am there from the first welcome dhol beat to the final 'throw the groom in the pool' moment." },
  { q: "How do we secure our wedding date?", a: "Hit the 'Secure Your Date' button. Haldi dates, especially morning slots during peak wedding season, book out 6-8 months in advance!" }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

export const metadata: Metadata = {
  title: 'Haldi Ceremony Anchor in Jaipur | Yash Soni',
  description: "Make your haldi ceremony unforgettable with Yash Soni, Jaipur's top haldi anchor. Fun, energetic hosting that keeps the celebration alive.",
  alternates: {
    canonical: 'https://yashsoni.in/haldi-anchor-jaipur',
  },
  openGraph: {
    title: 'Haldi Ceremony Anchor in Jaipur | Yash Soni',
    description: "Make your haldi ceremony unforgettable with Yash Soni, Jaipur's top haldi anchor. Fun, energetic hosting that keeps the celebration alive.",
    url: 'https://yashsoni.in/haldi-anchor-jaipur',
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
