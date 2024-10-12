import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import { caseStudies } from "@/utils/caseStudies";

export default function CaseStudy() {
  return (
    <Container>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        Designers like you love Glisten
      </h2>
      <p className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        Learn how thousands of designers have used Glisten’s mind-blowing AI
        features in these case studies.
      </p>
      <div className="mt-20 grid gap-16">
        {caseStudies.map((caseStudy, index) => (
          <div
            className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
            key={caseStudy.company}
          >
            <div className="col-span-1 flex flex-col justify-center gap-4">
              <h3 className="text-4xl capitalize">{caseStudy.company}</h3>
              <p className="text-xl">{caseStudy.description}</p>
              <Link
                href={`/case-study/${caseStudy.company}`}
                className="after:absolute after:inset-0 hover:underline"
              >
                Read <span className="capitalize">{caseStudy.company}</span>{" "}
                case study
              </Link>
            </div>
            <Image
              src={caseStudy.logo_image}
              alt={caseStudy.company}
              className={clsx(
                "rounded-xl lg:col-span-2",
                index % 2 && "md:-order-1",
              )}
              quality={100}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
