import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 border rounded-2xl shadow-md hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-sm text-gray-500">{project.tech}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
      <Link href={`/projects/${project.slug}`} className="text-blue-500 mt-3 inline-block">
        View Project →
      </Link>
    </motion.div>
  );
}
