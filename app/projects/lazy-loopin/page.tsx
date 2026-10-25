import { notFound } from "next/navigation";
import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export const metadata = {
  title: "Lazy Loopin | Paul Fangot",
  description: "AI-assisted storytelling and short-form video production.",
};

export default function LazyLoopinPage() {
  const project = getProject("lazy-loopin");
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
