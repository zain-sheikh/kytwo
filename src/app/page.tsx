import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import CeoMessage from "@/components/CeoMessage";
import Feedback from "@/components/Feedback";
import Reviews from "@/components/Reviews";
import Showcase from "@/components/Showcase";
import Achivements from "@/components/Achivements";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <>
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
