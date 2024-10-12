import React from "react";
import Image from "next/image";

import { icons } from "@/utils/icons";
import Container from "@/components/Container";
import StarBackground from "@/components/svg/StarBackground";
import StylizedLogoMark from "@/components/svg/StylizedLogoMark";
import backgroundImage from "@/public/images/integration-background.jpg";
import clsx from "clsx";

export default function Integrations() {
  return (
    <Container className="relative overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          Integrations galore.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          The integrations your team needs to be productive at scale with no
          impact on your burn rate.
        </p>
        <div className="mt-20 flex flex-col items-center md:flex-row">
          {icons.map(({ name, Icon }, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(icons.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                <Icon />
              </div>
              {index !== icons.length - 1 && (
                <div
                  className={clsx(
                    "signal-line",
                    index >= Math.floor(icons.length / 2)
                      ? "rotate-180"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
}
