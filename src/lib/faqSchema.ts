export interface FAQItem {
  q: string;
  a: string;
}

export function buildFaqSchema(
  featuredQuestion: string,
  featuredAnswer: string,
  faqItems: FAQItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: featuredQuestion,
        acceptedAnswer: {
          "@type": "Answer",
          text: featuredAnswer,
        },
      },
      ...faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    ],
  };
}

