import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function SocialMediaPage() {
    const project = getProject("social-media");

    if (!project) return null;

    return <CaseStudy project={project} />;
}