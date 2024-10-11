import Image from "next/image";

import Container from "@/components/Container";
import longBento from "@/public/images/long-screenshot.png";
import smallBento from "@/public/images/small-screenshot.png";
import clsx from "clsx";

const items = [
  {
    title: "Endless Ideation",
    body: "Come up with new ideas faster than you can open Photoshop",
    image: smallBento,
    wide: false,
  },
  {
    title: "Benchmark with AI",
    body: "Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.",
    image: longBento,
    wide: true,
  },
  {
    title: "Aesthetic Excellence",
    body: "Never worry about pixel perfection again, thanks to our patented AI critic, telling you when something is misaligned.",
    image: longBento,
    wide: true,
  },
  {
    title: "Pixels Perfected",
    body: "Our features power your next big design, whether it’s a website or an app.",
    image: smallBento,
    wide: false,
  },
];

export default function BentoBox() {
  return (
    <Container>
      <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
        The new
        <br />
        <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
          Gold Standard
        </span>
        .
      </h2>
      <p className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        Introducing a new way of building components and layouts that leaves
        everything else in the dust.
      </p>
      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {items.map((item) => (
          <div
            className={clsx(
              "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4",
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
          >
            <h3 className="text-2xl">{item.title}</h3>
            <p className="max-w-md text-balance text-slate-300">{item.body}</p>
            <Image
              src={item.image}
              alt={item.title}
              className="max-h-36 w-auto"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
