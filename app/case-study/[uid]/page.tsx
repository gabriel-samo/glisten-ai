import { Metadata } from "next";
import Image from "next/image";

import Container from "@/components/Container";
import StarGrid from "@/components/svg/StarGrid";
import { TCaseStudy, caseStudies } from "@/utils/caseStudies";

type CaseStudyProps = {
  params: {
    uid: string;
  };
};

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const {
    company,
    description,
    logo_image,
    article: Article,
  } = caseStudies.find((study: TCaseStudy) => study.company === params.uid)!;

  return (
    <Container as="article">
      <div className="relative grid place-items-center text-center">
        <StarGrid />
        <h1 className="text-7xl font-medium capitalize">
          {company}
          <p className="text-lg text-yellow-500">Case Study</p>
        </h1>
        <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
          {description}
        </p>
        <Image
          src={logo_image ?? ""}
          alt={`${company} logo`}
          className="rounded-lg"
          quality={100}
        />
      </div>
      <div className="prose prose-lg prose-slate prose-invert pt-10">
        {Article && <Article />}
      </div>
    </Container>
  );
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const metaData = caseStudies.find((study) => study.company === params.uid);
  return {
    title: `${metaData?.meta_title} Case Study`,
    description: metaData?.meta_description,
  };
}
