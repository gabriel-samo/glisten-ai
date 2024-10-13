"use client";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/svg/StarGrid";
import heroImage from "@/public/images/hero-image.png";

export default function Hero() {
  gsap.registerPlugin(useGSAP);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow",
          {
            opacity: 1,
          },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      // tl allows us to stagger the animations. if we used gsap.fromTo() directly, they would all play at the same time
      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 },
      );
      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.8",
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3",
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1",
      );
    },
    { scope: containerRef },
  );

  return (
    <Container className="mt-2 text-center">
      <div className="relative" ref={containerRef}>
        <StarGrid />
        <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-7xl">
          Designs that shine with dynamic intelligence.
        </h1>
        <p className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
          The AI features you need to transport your business from the little
          leagues to the big time.
        </p>
        <ButtonLink link="/" className="hero__button mt-8 opacity-0">
          Download Now
        </ButtonLink>
        <div className="hero__image glass-container mt-16 w-fit opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 bg-sky-500/30 opacity-0 blur-2xl filter" />
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
