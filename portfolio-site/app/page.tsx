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
        <div className="rounded-full overflow-hidden border-4 border-gray-800 w-40 h-40 bg-gray-800 mb-6">
          <Image
            src="/static/images/avatar.png"
            alt="Avatar"
            width={160}
            height={160}
            className="object-cover w-full h-full scale-x-[-1]"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">Blake Shea</h1>
        <p className="text-2xl text-gray-400 center text-center">
          Software Engineer & Full-Stack Developer
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-lg mt-4">
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
        <p className="mt-8 text-white-600 max-w-xl center text-center">
          Hello! I'm Blake. A dedicated software engineer with interests in web, game, and software development. I am currently in my final year at Clark University,
          pursuing a <strong className="text-white font-semibold">dual B.A. in Computer Science and Interactive Media</strong> while working full time as a 
          <strong className="text-white font-semibold"> Software Engineering Co-Op at State Street Corporation's Charles River Development division</strong>. 
          Feel free to explore my portfolio to see some of the projects I've worked on!
        </p>
      </motion.section>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <section className="mx-auto max-w-6xl bg-gray-900 rounded-2xl text-white py-12 px-8">
        <h1 className="text-4xl font-bold mb-10 center text-center">Featured Projects</h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.filter((p) => p.featured).slice(0, 4).map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
