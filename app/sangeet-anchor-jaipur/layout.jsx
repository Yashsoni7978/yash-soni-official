export const metadata = {
  title: "Best Sangeet Anchor in Jaipur | High-Energy Wedding Emcee | Yash Soni",
  description: "Transform your Sangeet night into a blockbuster concert with Yash Soni. Premium Sangeet anchor in Jaipur specializing in family roasts, awards nights, and high-energy crowd engagement.",
  keywords: [
    "Sangeet anchor Jaipur",
    "Wedding Sangeet emcee Rajasthan",
    "Sangeet awards night host",
    "Best anchor for Sangeet in Jaipur",
    "Interactive wedding host India",
    "Sangeet script writer",
    "Destination wedding anchor Jaipur",
    "Yash Soni Sangeet host"
  ],
  openGraph: {
    title: "Yash Soni | Jaipur's Premier Sangeet & Show Host",
    description: "Don't just host a Sangeet, create a concert. Hire the top-rated Sangeet anchor for high-octane energy and interactive family fun.",
    url: "https://yashsoni.in/sangeet-anchor", // Replace with your actual slug
    siteName: "Anchor Yash Soni",
    images: [
      {
        url: "/hero-slide-1.webp", // Matches the high-energy hero image
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni hosting a high-energy Sangeet night in Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sangeet Anchor in Jaipur | Yash Soni",
    description: "Turning Sangeet nights into concerts with unscripted humor and high-voltage energy.",
    images: ["/hero-slide-1.webp"],
  },
};

export default function SangeetLayout({ children }) {
  return (
    <section>
      {/* The children will be your SangeetAnchor component */}
      {children}
    </section>
  );
}