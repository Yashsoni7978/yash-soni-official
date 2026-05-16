export const metadata = {
  title: "Wedding & Event Blog | Insights by Anchor Yash Soni",
  description: "Expert tips, real event stories, and hosting insights from Anchor Yash Soni — Jaipur's most trusted anchor for weddings, sangeets, and corporate events.",
  keywords: [
    "wedding anchor blog jaipur", "event hosting tips", "sangeet anchor tips",
    "wedding emcee advice", "anchor yash soni blog", "event planning blog rajasthan",
  ],
  alternates: { canonical: "https://yashsoni.in/blog" },
  openGraph: {
    title: "Wedding & Event Blog | Anchor Yash Soni",
    description: "Real stories, expert hosting tips, and event insights from 1,100+ events across Rajasthan and India.",
    url: "https://yashsoni.in/blog",
    siteName: "Anchor Yash Soni",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Anchor Yash Soni Blog" }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
