import { projects } from "../../content/projects";

export default function ProjectsPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <div key={proj.slug} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{proj.title}</h2>
            <p className="text-gray-600">{proj.tech}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
