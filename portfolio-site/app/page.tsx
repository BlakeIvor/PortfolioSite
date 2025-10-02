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
          Hello! I'm Blake. A dedicated software engineer focused on web, 3D, and software development. Currently a senior at Clark University,
          pursuing a <strong className="text-white font-semibold">double B.A. in Computer Science and Interactive Media</strong> while working as a
          <strong className="text-white font-semibold"> Software Engineering Co-Op </strong> at State Street
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-lg mt-8">
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">C#</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Python</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Flask/Django/FastAPI</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">SQL</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">HTML/CSS</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">React</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Unity</span>
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

      {/* Work Experience Section */}
      <section id="work-experience" className="mx-auto max-w-7xl bg-gray-900 rounded-2xl text-white py-12 px-8 mt-12">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="text-lg text-gray-300">
          {/* Add your work experience details here */}
          <p>Software Engineering Co-Op at State Street Corporation's Charles River Development division</p>
          <p>Other relevant experience...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl bg-gray-900 rounded-2xl text-white py-12 px-8 mt-12">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="text-lg text-gray-300">
          <p>Email: <a href="mailto:blakeivorshea@gmail.com" className="text-blue-400 underline">blakeivorshea@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/blake27/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">blake27</a></p>
          <p>GitHub: <a href="https://github.com/BlakeIvor" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">BlakeIvor</a></p>
        </div>
      </section>
    </div>
  );
}
