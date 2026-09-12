import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function StrayversePage() {
    const project = getProject("strayverse");

    if (!project) return null;

    return <CaseStudy project={project} />;
}
