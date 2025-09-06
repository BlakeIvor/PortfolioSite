"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";

export default function HomePage() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 text-center"
      >
        <h1 className="text-4xl font-bold">Hi, I’m Blake Shea 👋</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Software Engineer | AR/VR Enthusiast | Full-Stack Developer
        </p>
      </motion.section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </section>
    </div>
  );
}
