import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function MillenniumTrainingPage() {
    const project = getProject("millennium-training");

    if (!project) return null;

    return <CaseStudy project={project} />;
}