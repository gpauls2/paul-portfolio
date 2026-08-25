import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject } from "@/data/projects";

export default function PetStyleClubPage() {
    const project = getProject("pet-style-club");

    if (!project) return null;

    return <CaseStudy project={project} />;
}