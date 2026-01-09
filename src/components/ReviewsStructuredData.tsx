const reviews = [
  {
    id: 1,
    text: '"Kytwo" team did a great job. They was responsive, flexible, and worked through all requested changes to ensure we got what we needed. Happy with the final result!',
    name: "Amanda Abiassi",
    image: "/reviews/amanda.png",
  },
  {
    id: 2,
    text: "People of Kytwo is easy to work with , they shares great ideas, and are very open to feedback. Would recommend. Thanks, you people did great job!",
    name: "Beatrice",
    image: "/reviews/Beatrice.png",
  },
  {
    id: 3,
    text: "Great experience overall. The redesign fixed major layout and mobile issues, with clear communication, fast turnaround, and an excellent final result.",
    name: "Anastasiia",
    image: "/reviews/Anastasiia.png",
  },
  {
    id: 4,
    text: "They was quick, efficient, and delivered exactly what I needed. Communication was smooth and a clear understanding of the requirements. ",
    name: "Alan Thereault",
    image: "/reviews/alan.jpeg",
  },
  {
    id: 5,
    text: "Kytwo agency transformed our online presence, our sales increased by 50% within weeks. Their attention to detail and strategic approach exceeded all expectations.",
    name: "Yaya Inv",
    image: "/reviews/yaya.jpeg",
  },
];

export default function ReviewsStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kytwo.com";

  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kytwo",
    url: baseUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewStructuredData),
      }}
    />
  );
}
