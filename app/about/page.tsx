import type { Metadata } from 'next';
import PageClient from './PageClient';

// Schema data — moved here from PageClient.jsx for server-side rendering
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yash Soni",
    "jobTitle": "Event Anchor & Host",
    "url": "https://yashsoni.in/about",
    "sameAs": [
      "https://instagram.com/anchor_yash_official",
      "https://youtube.com/@anchor_yash",
      "https://linkedin.com/in/anchoryashsoni"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Anchor Yash Soni Studio",
      "url": "https://yashsoni.in"
    }
  };

export const metadata: Metadata = {
  title: 'About Yash Soni | Professional Anchor & Emcee Jaipur',
  description: "Meet Yash Soni - Jaipur's top anchor and emcee with 1100+ events hosted across Jaipur & Rajasthan. His story, experience and what makes him different.",
  alternates: {
    canonical: 'https://yashsoni.in/about',
  },
  openGraph: {
    title: 'About Yash Soni | Professional Anchor & Emcee Jaipur',
    description: "Meet Yash Soni - Jaipur's top anchor and emcee with 1100+ events hosted across Jaipur & Rajasthan. His story, experience and what makes him different.",
    url: 'https://yashsoni.in/about',
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
          __html: JSON.stringify(personSchema)
        }}
      />
      <PageClient />
    </>
  );
}
