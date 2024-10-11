import clsx from "clsx";
import Image from "next/image";
import { PiGear, PiArrowsClockwise } from "react-icons/pi";

import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import showcaseImage from "@/public/images/showcase-image.png";

const icons = {
  gear: <PiGear />,
  cycle: <PiArrowsClockwise />,
};

type ShowcaseProps = {
  icon: "gear" | "cycle";
  variant?: "default" | "reverse";
};

export default function Showcase({ icon, variant = "default" }: ShowcaseProps) {
  return (
    <Container className="relative">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />
      <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
        Your Glisten.
        <br /> Your workflow.
      </h2>

      <div className="mt-16 grid items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12">
        <div className="">
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
            {icons[icon]}
          </div>
          <h3 className="mt-6 text-2xl font-normal">
            Design the next big thing.
          </h3>
          <p className="prose prose-invert mt-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <ButtonLink className="mt-6" link="/features">
            Sign up
          </ButtonLink>
        </div>

        <Image
          className={clsx(
            "opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
            variant === "default" && "lg:-order-1 lg:translate-x-[-15%]",
            variant === "reverse" && "lg:order-last lg:translate-x-[15%]",
          )}
          src={showcaseImage}
          alt="Image with code window"
        />
      </div>
    </Container>
  );
}
