import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function UiUxDesignPage() {
    const project = getProject("ui-ux-design");

    if (!project) return null;

    return <CaseStudy project={project} />;
}
