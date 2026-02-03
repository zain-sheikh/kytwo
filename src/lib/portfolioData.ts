export interface Project {
  id: number;
  slug: string;
  title: string;
  industry: string;
  flag: string;
  location: string;
  clientName: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    description?: string;
  }[];
  timeline: string;
  testimonial?: {
    text: string;
    author: string;
    role?: string;
  };
  liveUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-platform-conversion-optimization",
    title: "Ecommerce Platform Conversion Rate Optimization",
    industry: "Ecommerce Platform",
    flag: "🇺🇸",
    location: "United States",
    clientName: "John j",
    image: "/portfolio/fatty15.png",
    shortDescription:
      "An 18% increase in overall conversions and 3x sales, after we did CRO (conversion rate optimization)",
    fullDescription: `We partnered with a leading US-based ecommerce platform built on Shopify Plus to transform their conversion performance through comprehensive conversion rate optimization. The platform was experiencing significant drop-offs in their checkout flow and low engagement rates across key user journeys.

Our team conducted extensive user behavior analysis, A/B testing, and performance audits to identify critical friction points. We discovered that users were abandoning carts due to complex checkout processes, unclear pricing structures, and lack of trust signals throughout the platform.

Through strategic redesign of key conversion funnels using Shopify Plus's advanced features, implementation of advanced analytics tracking, and optimization of the user experience across mobile and desktop, we achieved remarkable results that transformed the platform's revenue performance.`,
    challenge: `The Shopify Plus ecommerce platform was struggling with low conversion rates despite high traffic volumes. Key challenges included:
- Complex multi-step checkout process causing 40% cart abandonment
- Lack of social proof and trust signals throughout the user journey
- Inconsistent pricing display causing user confusion
- Poor mobile experience leading to high bounce rates
- Limited analytics visibility into user behavior patterns
- Inefficient vendor onboarding process affecting inventory quality
- Underutilization of Shopify Plus's advanced features and capabilities`,
    solution: `We implemented a comprehensive CRO strategy leveraging Shopify Plus's powerful platform:

**Shopify Plus Optimization:**
- Customized checkout flow using Shopify Plus Scripts and Functions
- Implemented Shopify Flow for automated workflows
- Leveraged Shopify Plus's advanced analytics and reporting
- Optimized Shopify theme with custom Liquid templates
- Integrated Shopify Plus APIs for enhanced functionality

**User Experience Optimization:**
- Redesigned checkout flow with streamlined single-page checkout
- Implemented progressive disclosure to reduce cognitive load
- Added trust badges, customer reviews, and security indicators
- Optimized mobile experience with Shopify's responsive themes
- Enhanced product pages with dynamic content

**Technical Enhancements:**
- Integrated advanced analytics and heat mapping tools
- Implemented A/B testing framework using Shopify Plus features
- Built real-time inventory management with Shopify APIs
- Created automated vendor onboarding workflow
- Optimized site speed and performance

**Conversion Tactics:**
- Added urgency indicators and limited-time offers
- Implemented exit-intent popups with special offers
- Created personalized product recommendations
- Optimized pricing display with clear value propositions`,
    technologies: [
      "Shopify Plus",
      "Shopify Liquid",
      "Shopify Scripts",
      "Shopify Flow",
      "Shopify Functions",
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "Google Analytics",
      "Hotjar",
      "Optimizely",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Custom Shopify Plus checkout",
      "Shopify Flow automation",
      "Real-time inventory management",
      "Advanced analytics dashboard",
      "A/B testing framework",
      "Mobile-optimized Shopify theme",
      "Automated vendor onboarding",
      "Personalized recommendations",
      "Multi-payment gateway integration",
      "Shopify Scripts for discounts",
    ],
    results: [
      {
        metric: "Conversion Rate Increase",
        value: "18%",
        description: "Overall conversion rate improvement",
      },
      {
        metric: "Sales Growth",
        value: "3x",
        description: "Triple the sales volume",
      },
      {
        metric: "Cart Abandonment",
        value: "-40%",
        description: "Reduction in cart abandonment rate",
      },
      {
        metric: "Mobile Conversions",
        value: "+65%",
        description: "Increase in mobile conversion rate",
      },
    ],
    timeline: "12 weeks",
    testimonial: {
      text: "Kytwo transformed our Shopify Plus ecommerce platform performance. The conversion rate optimization work they did resulted in triple our sales volume. Their deep understanding of Shopify Plus features and data-driven approach made all the difference.",
      author: "John J",
      role: "Founder & CEO",
    },
  },
  {
    id: 2,
    slug: "truesea-shopify-plus-store",
    title: "TrueSea Shopify Plus Store",
    industry: "Shopify Plus",
    flag: "🇺🇸",
    location: "United States",
    clientName: "Michael Smith",
    image: "/portfolio/truesea.png",
    shortDescription:
      "TrueSea generates $550k+ in monthly sales and supports ~100,000 active Shopify Plus subscriptions, built for scale, speed, and high-converting checkout flows.",
    fullDescription: `We developed a comprehensive Shopify Plus store for TrueSea, a subscription-based ecommerce business that has achieved remarkable success with over $550,000 in monthly sales and 100,000 active subscriptions.

Built entirely on Shopify Plus, the store handles everything from subscription management, recurring billing, inventory management, vendor management, to customer service. It leverages Shopify Plus's advanced features including automated subscription renewals, flexible billing cycles, subscription upgrades/downgrades, and comprehensive analytics.

The store handles everything from subscription management, recurring billing, inventory management, vendor management, to customer service. Shopify Plus's scalability and reliability are critical to handling the high volume of transactions and subscriptions seamlessly.`,
    challenge: `Building a Shopify Plus store capable of handling $550k+ monthly sales and 100,000 subscriptions required solving several complex challenges:
- Managing 100,000+ active subscriptions with different billing cycles on Shopify Plus
- Processing high-volume transactions reliably using Shopify's infrastructure
- Handling complex vendor and supplier relationships
- Managing inventory across multiple suppliers with Shopify's multi-location inventory
- Implementing flexible subscription management (upgrades, downgrades, pauses) using Shopify apps and custom solutions
- Ensuring seamless payment processing for recurring charges
- Leveraging Shopify Plus's scalability to handle peak traffic
- Providing excellent customer experience at scale
- Managing subscription lifecycle and renewals
- Handling customer service and support efficiently`,
    solution: `We built a robust, scalable Shopify Plus store with comprehensive subscription management:

**Shopify Plus Subscription System:**
- Custom subscription app integrated with Shopify Plus
- Flexible subscription plans with multiple billing cycles
- Automated renewal and billing using Shopify's payment processing
- Self-service subscription management portal built with Shopify Storefront API
- Pause, upgrade, downgrade, and cancel capabilities
- Prorated billing for plan changes
- Dunning management for failed payments using Shopify Plus features

**Shopify Plus Store Features:**
- Multi-vendor product catalog managed through Shopify
- Vendor onboarding and management system
- Inventory synchronization across suppliers using Shopify's inventory APIs
- Order routing and fulfillment automation with Shopify Flow
- Commission and payout management
- Vendor analytics dashboard using Shopify Analytics

**Payment & Billing on Shopify Plus:**
- Shopify Payments integration for seamless transactions
- Recurring billing automation through subscription apps
- Failed payment retry logic
- Refund and chargeback handling via Shopify admin
- Tax calculation and compliance using Shopify Tax
- Invoice generation and delivery

**Shopify Plus Scalability:**
- Leveraging Shopify Plus's cloud infrastructure
- Database optimization for high-volume queries
- Shopify CDN for fast content delivery globally
- Load balancing handled by Shopify Plus
- Monitoring and alerting for system health

**Customer Experience:**
- Custom Shopify theme for intuitive subscription management
- Mobile-responsive Shopify design
- Fast Shopify checkout process
- Order tracking and notifications via Shopify
- Customer support portal integrated with Shopify
- Self-service account management`,
    technologies: [
      "Shopify Plus",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Docker",
      "AWS",
      "Elasticsearch",
      "SendGrid",
    ],
    features: [
      "Subscription management system",
      "Recurring billing automation",
      "Inventory management",
      "Order fulfillment automation",
      "Customer portal",
      "Vendor dashboard",
      "Advanced analytics",
      "Payment gateway integration",
      "Email notifications",
      "Mobile-responsive design",
      "API for third-party integrations",
    ],
    results: [
      {
        metric: "Monthly Sales",
        value: "$550k+",
        description: "Average monthly revenue",
      },
      {
        metric: "Active Subscriptions",
        value: "100,000",
        description: "Current active subscriptions",
      },
      {
        metric: "Subscription Retention",
        value: "92%",
        description: "Monthly subscription retention rate",
      },
      {
        metric: "Transaction Success",
        value: "99.5%",
        description: "Successful payment processing rate",
      },
    ],
    timeline: "18 weeks",
    testimonial: {
      text: "Kytwo built us an incredible Shopify Plus store that handles over $550k in monthly sales and 100,000 subscriptions flawlessly. Their deep expertise in Shopify Plus and subscription management is unmatched. The store scales beautifully and we couldn't be happier with the results.",
      author: "Michael Smith",
      role: "Founder & CEO",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
