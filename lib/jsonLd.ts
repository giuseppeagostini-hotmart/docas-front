// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Pousada Docas",
  "image": "https://www.pousadadocas.com.br/images/pousada-exterior.jpg",
  "description": "Uma pousada aconchegante em Minas Gerais, próxima a Belo Horizonte. Rodeada pela natureza, com piscina, ar-condicionado, área de lazer e estrutura para eventos e casamentos.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua das Flores, 123",
    "addressLocality": "Brumadinho",
    "addressRegion": "MG",
    "postalCode": "35460-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-20.1511",
    "longitude": "-44.2007"
  },
  "telephone": "+553133333333",
  "priceRange": "R$ 300 - R$ 600",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Piscina"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Wi-Fi Gratuito"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Ar-condicionado"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Área para churrasco"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Salão para eventos"
    }
  ],
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5"
  }
};

export default jsonLd;