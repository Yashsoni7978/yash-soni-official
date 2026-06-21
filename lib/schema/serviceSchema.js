export function buildServiceSchema({ 
  pageUrl, 
  name, 
  description, 
  serviceType, 
  ratingValue = "4.9", 
  reviewCount = "40",
  providerJobTitle = "Premium Anchor & Emcee",
  areaServed = [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
  ],
  hasOfferCatalog,
  knowsLanguage
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "Product"],
    "@id": pageUrl,
    name,
    description,
    provider: {
      "@type": "Person",
      name: "Yash Soni",
      url: "https://yashsoni.in",
      telephone: "+917737877978",
      jobTitle: providerJobTitle,
    },
    areaServed,
    url: pageUrl,
    serviceType,
    brand: {
      "@type": "Brand",
      name: "Anchor Yash Soni",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: "5",
    },
  };

  if (knowsLanguage) {
    schema.provider.knowsLanguage = knowsLanguage;
  }

  if (hasOfferCatalog) {
    schema.hasOfferCatalog = hasOfferCatalog;
  }

  return schema;
}
