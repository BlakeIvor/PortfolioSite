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
        className="pt-4 flex flex-col items-center justify-center bg-gray-900 pb-10"
      >
        
        <p className="mt-16 text-white text-2xl max-w-5xl center text-center px-4">
          Hello! I'm Blake. A dedicated software engineer focused on web, 3D, and software development. I am a senior at Clark University,
          pursuing a <strong className="text-white font-semibold">dual B.A. in Computer Science and Interactive Media</strong> while working as a
          <strong className="text-white font-semibold"> Software Engineering Co-Op </strong> at State Street Corporation's Charles River Development division.
          Feel free to explore my skills and portfolio.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-lg mt-8">
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">C#</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Asp.NET</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Python</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Flask/Django/FastAPI</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">SQL</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">React</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">HTML/CSS</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Next.js</span> 
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Unity</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">OpenCV</span>
        </div>
      </motion.section>
      
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <section className="mx-auto max-w-7xl bg-gray-900 rounded-2xl text-white py-12 px-8">
        <h1 className="text-4xl font-bold mb-10 center text-center">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {projects.filter((p) => p.featured).slice(0, 5).map((proj) => (
            <div
              key={proj.slug}
              className="overflow-hidden rounded-xl bg-gray-800/50 transition-transform duration-300 hover:scale-105 cursor-pointer h-full"
            >
              <ProjectCard project={proj} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
