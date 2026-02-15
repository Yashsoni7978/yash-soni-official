export const metadata = {
  title: "Best Mehendi Anchor in Jaipur | Ladies Sangeet Host | Yash Soni",
  description: "Looking for a Mehendi anchor in Jaipur? Yash Soni specializes in high-energy Ladies Sangeet hosting, hands-free interactive games, and seamless crowd engagement.",
  keywords: [
    "Mehendi anchor Jaipur",
    "Ladies Sangeet host",
    "Mehendi games emcee",
    "Wedding anchor Rajasthan",
    "Interactive wedding host",
    "Destination wedding anchor India",
    "Yash Soni anchor"
  ],
  openGraph: {
    title: "Jaipur's Premier Mehendi & Ladies Sangeet Anchor",
    description: "No awkward silences. Just interactive musical games and pure celebration. Hire Jaipur's top Mehendi host.",
    url: "https://yashsoni.in/mehendi-anchor", // Update this to your actual URL path
    siteName: "Anchor Yash Soni",
    images: [
      {
        url: "/gallery-4.webp", // Matches the hero image of the page
        width: 1200,
        height: 630,
        alt: "Yash Soni hosting a vibrant Mehendi ceremony",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mehendi Anchor in Jaipur | Yash Soni",
    description: "Hire Jaipur's top Mehendi and Ladies Sangeet anchor for unforgettable interactive games and energy.",
    images: ["/gallery-4.webp"],
  },
};

export default function MehendiLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}