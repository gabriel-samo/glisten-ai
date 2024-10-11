"use client";

import { useParams } from "next/navigation";

export default function CaseStudyPage() {
  const params = useParams();
  return <div>CaseStudyPage {params.id}</div>;
}
