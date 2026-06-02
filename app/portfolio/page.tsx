import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const schemaData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Anchor Yash Soni Portfolio",
    "description": "Live event hosting portfolio of Anchor Yash Soni.",
    "url": "https://yashsoni.in/portfolio",
    "author": {
      "@type": "Person",
      "name": "Yash Soni"
    }
  };

export const metadata: Metadata = {
  title: 'Event Portfolio | Yash Soni Anchor Jaipur',
  description: "Browse Yash Soni's event portfolio - weddings, corporate events, sangeet nights and destination events hosted across Jaipur & Rajasthan.",
  alternates: {
    canonical: 'https://yashsoni.in/portfolio',
  },
  openGraph: {
    title: 'Event Portfolio | Yash Soni Anchor Jaipur',
    description: "Browse Yash Soni's event portfolio - weddings, corporate events, sangeet nights and destination events hosted across Jaipur & Rajasthan.",
    url: 'https://yashsoni.in/portfolio',
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
          __html: JSON.stringify(schemaData)
        }}
      />
      <PageClient />
    </>
  );
}
