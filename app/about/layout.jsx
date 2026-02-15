export const metadata = {
  title: "About Anchor Yash Soni | Premium Event Emcee in Jaipur",
  description: "With over 5 years of experience and 1100+ live events, Anchor Yash Soni is Jaipur's top choice for luxury weddings, sangeets, and corporate hosting.",
  keywords: ["Anchor Yash Soni", "About Yash Soni", "Best Anchor in Jaipur", "Professional Emcee Rajasthan", "Luxury Event Host"],
  openGraph: {
    title: "About Anchor Yash Soni | Premium Event Emcee",
    description: "The difference between a mic holder and a Master of Ceremonies. 1100+ stages later, I’m just getting started.",
    url: "https://yashsoni.in/about",
    siteName: "Anchor Yash Soni",
    images: [
      {
        url: "/intro-portrait-top.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni - Premium Event Host",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
