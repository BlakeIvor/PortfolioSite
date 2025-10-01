import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-950 border border-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6 cursor-pointer h-full flex flex-col"
      >
        <div className="mb-4 w-full aspect-[16/9] relative rounded-xl overflow-hidden bg-gray-900">
          <Image
            src={project.thumbnail}
            alt={project.title + ' thumbnail'}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 400px"
            className="rounded-xl"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
        <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <span className="mt-auto text-blue-500 font-medium">Click here to see more</span>
      </motion.div>
    </Link>
  );
}
