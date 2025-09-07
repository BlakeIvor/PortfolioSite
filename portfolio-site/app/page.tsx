"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 flex flex-col items-center justify-center bg-gray-900"
      >
        <div className="rounded-full overflow-hidden border-4 border-gray-800 w-40 h-40 bg-gray-800 mb-6">
          <Image
            src="/static/images/meltdown.png"
            alt="Meltdown Hero"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">Blake Shea</h1>
        <p className="text-2xl text-gray-400">
          Software Engineer & Full-Stack Developer
        </p>
      </motion.section>

      <section className="mx-auto max-w-4xl bg-gray-900 rounded-2xl text-white py-12 px-8">
        <h1 className="text-4xl font-bold mb-6">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter((p) => p.featured).slice(0, 4).map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
