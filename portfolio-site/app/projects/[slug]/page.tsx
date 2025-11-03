'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../content/projects";
import { getProjectContent } from "../../../lib/mdx-content";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const MDXContent = getProjectContent(params.slug);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        {MDXContent ? (
          <div className="mdx-content">
            <MDXContent />
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="project-tech">
              <strong>Technologies used:</strong> {project.tech}
            </div>
            <p className="text-lg text-gray-400 mt-6">{project.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
