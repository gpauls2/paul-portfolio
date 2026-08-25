import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function SupportFlowPage() {
    const project = getProject("supportflow-ai");

    if (!project) return null;

    return <CaseStudy project={project} />;
}