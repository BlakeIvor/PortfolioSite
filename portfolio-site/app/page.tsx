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
        
        <p className="mt-14 text-white text-2xl max-w-5xl center text-center">
          Hello! I'm Blake. A dedicated software engineer with interests in web, game, and software development. I am currently in my final year at Clark University,
          pursuing a <strong className="text-white font-semibold">dual B.A. in Computer Science and Interactive Media</strong> while working full time as a 
          <strong className="text-white font-semibold"> Software Engineering Co-Op at State Street Corporation's Charles River Development division</strong>. 
          Feel free to explore my portfolio to see some of the projects I've worked on!
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

      <section className="mx-auto max-w-6xl bg-gray-900 rounded-2xl text-white py-12 px-8">
        <h1 className="text-4xl font-bold mb-10 center text-center">Featured Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.filter((p) => p.featured).slice(0, 5).map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
