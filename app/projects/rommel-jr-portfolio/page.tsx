
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
    title: "Rommel Fangot Jr. Portfolio | Paul Fangot",
    description:
        "A modern personal portfolio website designed and developed for Rommel Fangot Jr.",
};

export default function RommelJrPortfolioPage() {
    const project = getProject("rommel-jr-portfolio");

    if (!project) {
        notFound();
    }

    return <CaseStudy project={project} />;
}
