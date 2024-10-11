import Image from "next/image";

import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/svg/StarGrid";
import heroImage from "@/public/images/hero-image.png";

export default function Hero() {
  return (
    <Container className="mt-2 text-center">
      <div className="relative">
        <StarGrid />
        <h1 className="text-balance text-5xl font-medium md:text-7xl">
          Designs that shine with dynamic intelligence.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-balance text-slate-300">
          The AI features you need to transport your business from the little
          leagues to the big time.
        </p>
        <ButtonLink link="/" className="mt-8">
          Download Now
        </ButtonLink>
        <div className="glass-container mt-16 w-fit">
          <div className="absolute inset-0 -z-10 bg-sky-500/30 blur-2xl filter" />
          <Image
            src={heroImage}
            alt="The dashboard of Glisten.ai"
            className="h-full w-full rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
}
