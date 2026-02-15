export const metadata = {
  title: "Portfolio & Showreel | Anchor Yash Soni | Jaipur",
  description: "Explore the live stage portfolio of Anchor Yash Soni. Watch showreels and image galleries from luxury weddings, sangeets, and corporate events across India.",
  keywords: ["Anchor Yash Soni Portfolio", "Wedding Anchor Videos", "Sangeet Host Jaipur Showreel", "Corporate Event Anchor Gallery", "Event Emcee Videos"],
  openGraph: {
    title: "Portfolio & Showreel | Anchor Yash Soni",
    description: "A curated collection of moments where energy meets elegance.",
    url: "https://yashsoni.in/portfolio",
    siteName: "Anchor Yash",
    images: [
      {
        url: "/gallery-1.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni live event portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
