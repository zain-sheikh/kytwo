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

export default function Home() {
  return (
    <>
      <ReviewsStructuredData />
      <Hero />
      <CeoMessage />
      <Logos />
      <Services />
      <Feedback />
      <Reviews />
      <Showcase />
      <Achivements />
      <CTA />
    </>
  );
}
