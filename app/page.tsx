import Hero from "@/components/sections/Hero";
import BentoBox from "@/components/sections/BentoBox";
import Showcase from "@/components/sections/Showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoBox />
      <Showcase icon="gear" />
    </>
  );
}
