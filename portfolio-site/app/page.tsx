"use client";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="w-full mx-auto max-w-5xl lg:max-w-7xl text-white py-8 px-4 sm:py-12 sm:px-4 lg:px-16 my-0 flex flex-col gap-12 bg-gray-900">
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-4 flex flex-col items-center justify-center pb-6"
        >
          <p className="text-4xl sm:text-5xl font-bold text-white text-center">
            Hello, I&apos;m Blake
          </p>
          <p className="mt-8 text-white text-2xl max-w-5xl center text-center px-4">
            I&apos;m a software engineer located in the United States that focuses on creating scalable and performant solutions for large-scale applications, 3D environments, and server development.
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

        <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* Projects Section */}
        <section>
          <h1 className="text-4xl font-bold mb-10 center text-center text-white">Featured Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-stretch">
            {projects.filter((p) => p.featured).slice(0, 10).map((proj) => (
              <div
                key={proj.slug}
                className="overflow-hidden rounded-2xl bg-gray-800 transition-transform duration-300 hover:scale-105 cursor-pointer h-96 lg:h-[28rem] flex flex-col justify-between"
              >
                <ProjectCard project={proj} />
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Co-op, State Street Corporation</h3>
              <div className="text-gray-400 text-sm mb-2">Burlington, MA &mdash; Jul 2025 – Dec 2025</div>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Diagnosed and resolved critical production bugs in C# and .NET trading systems, preventing downtime and functionality loss for 30+ client firms.</li>
                <li>Migrated legacy C# WinForms applications to React thin clients with cached order data, reducing UI latency by 40% while preserving full data integrity.</li>
                <li>Developed automated unit and integration tests for 3 key features, reducing recurring production defects and streamlining deployment.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">AR Development Intern, White Snake Projects</h3>
              <div className="text-gray-400 text-sm mb-2">Boston, MA &mdash; Apr 2025 – Jul 2025</div>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Designed an AR walking tour MVP highlighting indigenous history in Boston using 3D scans and low-code prototyping tools.</li>
                <li>Co-authored a partnership and grant proposal directed to Massachusetts indigenous groups, the City of Boston, and local AR companies, securing over $68k in funding.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Intern, Avilaar, Inc.</h3>
              <div className="text-gray-400 text-sm mb-2">Worcester, MA &mdash; Aug 2024 – Apr 2025</div>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Developed a mobile AR learning companion app using Python and Unreal Engine, integrating GPT4o and ElevenLabs for real-time context-aware interactions.</li>
                <li>Optimized AI chat system with retrieval-augmented generation (RAG), FastAPI, and Docker on AWS EC2, reducing execution time to 10% of the original prototype.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">C# and VR Instructor, ID TECH</h3>
              <div className="text-gray-400 text-sm mb-2">Cambridge, MA &mdash; May 2024 – Nov 2024</div>
              <ul className="list-disc list-inside text-gray-300 ml-4">
                <li>Taught C# and Unity fundamentals to over 100 students, guiding creation of personalized VR applications targeted to the Meta Quest.</li>
                <li>Drafted 3 interactive VR demos to teach physics, programming, and UX principles, enhancing student hands-on skills in immersive environments.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
          <div className="text-lg text-gray-300">
            <p>Email: <a href="mailto:blakeivorshea@gmail.com" className="text-blue-400 underline">blakeivorshea@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/blake27/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">blake27</a></p>
            <p>GitHub: <a href="https://github.com/BlakeIvor" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">BlakeIvor</a></p>
          </div>
        </section>
      </main>
    </div>
  );
}
