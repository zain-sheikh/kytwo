import Hero from "@/components/Hero";
import Logos from "@/components/Logos";

import Services from "@/components/Services";
import CeoMessage from "@/components/CeoMessage";
import Feedback from "@/components/Feedback";
import Reviews from "@/components/Reviews";
import Showcase from "@/components/Showcase";
import Achivements from "@/components/Achivements";
import CTA from "@/components/CTA";
import ReviewsStructuredData from "@/components/ReviewsStructuredData";
import VoucherStrip from "@/components/VoucherStrip";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  const processSteps = [
    {
      label: "FREE STEP #1",
      title: "Project Discovery & Planning",
      gradient: "from-blue-400 to-blue-600",
      free: true,
      mt: "100",
    },
    {
      label: "STEP #2",
      title: "Wireframes & Concept",
      gradient: "from-cyan-400 to-teal-500",
      mt: "100",
    },
    {
      label: "STEP #3",
      title: "UI Design & Visual Refinement",
      gradient: "from-teal-400 to-green-500",
      mt: "100",
    },
    {
      label: "STEP #4",
      title: "Development & Integration",
      gradient: "from-green-400 to-emerald-600",
      mt: "120",
    },
    {
      label: "STEP #5",
      title: "Quality Assurance & Testing",
      gradient: "from-lime-400 to-yellow-400",
      mt: "140",
    },
    {
      label: "STEP #6",
      title: "Launch & Post-Launch",
      gradient: "from-orange-400 to-red-500",
      mt: "140",
    },
  ];
  return (
    <>
      <ReviewsStructuredData />
      <Hero />
      <CeoMessage />
      <Logos />
      <Services ctaMessage="Building ecommerce stores that convert visitors into customers and drive revenue." />
      <ProcessSection
        title="OUR"
        highlightText="DEVELOPMENT PROCESS"
        steps={processSteps}
      />
      <Feedback />

      <Reviews />
      <Showcase />
      <Achivements />

      <VoucherStrip />

      <CTA />
    </>
  );
}
