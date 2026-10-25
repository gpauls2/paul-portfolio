import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
    title: "JSM & WWIB Marketing Automation | Paul Fangot",
    description:
        "Lead capture, CRM tagging, Zapier integrations and Mailchimp automations for Jasmine Sandler Marketing and Warrior Women in Business.",
};

export default function JSMWWIBPage() {
    const project = getProject("jsm-wwib");

    if (!project) {
        notFound();
    }

    return <CaseStudy project={project} />;
}
