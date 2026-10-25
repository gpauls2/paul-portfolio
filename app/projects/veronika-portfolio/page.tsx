
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
    title: "Veronika De Leon Portfolio | Paul Fangot",
    description:
        "A modern professional portfolio website designed and developed for Veronika Jose De Leon.",
};

export default function VeronikaPortfolioPage() {
    const project = getProject("veronika-portfolio");

    if (!project) {
        notFound();
    }

    return <CaseStudy project={project} />;
}
