import Hero from "@/components/sections/Hero";
import BentoBox from "@/components/sections/BentoBox";
import Showcase from "@/components/sections/Showcase";
import CaseStudy from "@/components/sections/CaseStudy";
import Integrations from "@/components/sections/Integrations";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoBox />
      <Showcase icon="gear" />
      <CaseStudy />
      <Integrations />
    </>
  );
}
