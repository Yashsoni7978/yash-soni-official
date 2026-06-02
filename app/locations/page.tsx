import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const ALL_LOCATIONS = [
  { city: "Agra", slug: "anchor-in-agra", region: "Uttar Pradesh" },
  { city: "Ajmer", slug: "anchor-in-ajmer", region: "Rajasthan" },
  { city: "Alibaug", slug: "anchor-in-alibaug", region: "Maharashtra" },
  { city: "Alwar", slug: "anchor-in-alwar", region: "Rajasthan" },
  { city: "Andaman", slug: "anchor-in-andaman", region: "Islands" },
  { city: "Bangalore", slug: "anchor-in-bangalore", region: "Karnataka" },
  { city: "Bharatpur", slug: "anchor-in-bharatpur", region: "Rajasthan" },
  { city: "Bikaner", slug: "anchor-in-bikaner", region: "Rajasthan" },
  { city: "Chennai", slug: "anchor-in-chennai", region: "Tamil Nadu" },
  { city: "Chittorgarh", slug: "anchor-in-chittorgarh", region: "Rajasthan" },
  { city: "Coorg", slug: "anchor-in-coorg", region: "Karnataka" },
  { city: "Delhi", slug: "anchor-in-delhi", region: "NCR" },
  { city: "Dharamshala", slug: "anchor-in-dharamshala", region: "Himachal Pradesh" },
  { city: "Goa", slug: "anchor-in-goa", region: "Western" },
  { city: "Haridwar", slug: "anchor-in-haridwar", region: "Uttarakhand" },
  { city: "Hyderabad", slug: "anchor-in-hyderabad", region: "Telangana" },
  { city: "Jaipur", slug: "anchor-in-jaipur", region: "Rajasthan" },
  { city: "Jaisalmer", slug: "anchor-in-jaisalmer", region: "Rajasthan" },
  { city: "Jodhpur", slug: "anchor-in-jodhpur", region: "Rajasthan" },
  { city: "Kolkata", slug: "anchor-in-kolkata", region: "West Bengal" },
  { city: "Kota", slug: "anchor-in-kota", region: "Rajasthan" },
  { city: "Kumbhalgarh", slug: "anchor-in-kumbhalgarh", region: "Rajasthan" },
  { city: "Manali", slug: "anchor-in-manali", region: "Himachal Pradesh" },
  { city: "Mandawa", slug: "anchor-in-mandawa", region: "Rajasthan" },
  { city: "Mount Abu", slug: "anchor-in-mount-abu", region: "Rajasthan" },
  { city: "Mumbai", slug: "anchor-in-mumbai", region: "Maharashtra" },
  { city: "Mussoorie", slug: "anchor-in-mussoorie", region: "Uttarakhand" },
  { city: "Nainital", slug: "anchor-in-nainital", region: "Uttarakhand" },
  { city: "Neemrana", slug: "anchor-in-neemrana", region: "Rajasthan" },
  { city: "Ooty", slug: "anchor-in-ooty", region: "Tamil Nadu" },
  { city: "Pushkar", slug: "anchor-in-pushkar", region: "Rajasthan" },
  { city: "Rajasthan", slug: "anchor-in-rajasthan", region: "State Hub" },
  { city: "Ranthambore", slug: "anchor-in-ranthambore", region: "Rajasthan" },
  { city: "Rishikesh", slug: "anchor-in-rishikesh", region: "Uttarakhand" },
  { city: "Shimla", slug: "anchor-in-shimla", region: "Himachal Pradesh" },
  { city: "Udaipur", slug: "anchor-in-udaipur", region: "Rajasthan" },
  { city: "Varanasi", slug: "anchor-in-varanasi", region: "Uttar Pradesh" },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Event Anchoring and Event Management",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni"
    },
    "areaServed": ALL_LOCATIONS.map(l => l.city),
    "url": "https://yashsoni.in/locations"
  };

export const metadata: Metadata = {
  title: 'Anchor Locations across Jaipur & Rajasthan | Yash Soni',
  description: 'Yash Soni is available as anchor across 30+ cities in India - Jaipur, Delhi, Mumbai, Goa, Udaipur and more. Check all locations.',
  alternates: {
    canonical: 'https://yashsoni.in/locations',
  },
  openGraph: {
    title: 'Anchor Locations across Jaipur & Rajasthan | Yash Soni',
    description: 'Yash Soni is available as anchor across 30+ cities in India - Jaipur, Delhi, Mumbai, Goa, Udaipur and more. Check all locations.',
    url: 'https://yashsoni.in/locations',
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
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <PageClient />
    </>
  );
}
