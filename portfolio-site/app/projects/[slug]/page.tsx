import { notFound } from "next/navigation";
import { projects } from "../../../content/projects";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold">{project?.title}</h1>
      <p className="text-gray-500 mb-4">{project?.tech}</p>
      <p className="text-lg">{project?.description}</p>
    </div>
  );
}
