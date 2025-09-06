import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../content/projects";

export default function ProjectsPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </div>
    </div>
  );
}
