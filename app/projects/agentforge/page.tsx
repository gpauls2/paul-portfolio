import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function AgentForgePage() {
    const project = getProject("agentforge");

    if (!project) return null;

    return <CaseStudy project={project} />;
}