"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type ShowcaseTitleAnimationProps = {
  children: React.ReactNode;
};

export default function ShowcaseTitleAnimation({
  children,
}: ShowcaseTitleAnimationProps) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(containerRef.current, { y: 0 });
        return;
      }

      gsap.fromTo(
        containerRef.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
}
