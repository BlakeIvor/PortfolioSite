import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { HiDocument, HiDocumentText } from "react-icons/hi";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between px-6 pt-6 bg-gray-900 text-white shadow-lg gap-6">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-6 min-w-0">
        <div className="rounded-full overflow-hidden border-4 border-gray-700 w-28 h-28 bg-gray-800 flex-shrink-0">
          <Image
            src="/static/images/avatar.png"
            alt="Blake Shea"
            width={112}
            height={112}
            className="object-cover w-full h-full scale-x-[-1]"
            priority
          />
        </div>
        <div className="min-w-0">
          <h1 className="text-3xl font-bold mb-1">Blake Shea</h1>
          <p className="text-lg text-gray-400 mb-3">
            Software Engineer & Full Stack Developer
          </p>
          {/* Always-visible social icons (LEFT): GitHub, LinkedIn, Email, Resume */}
          <div className="flex flex-wrap gap-4 text-2xl">
            <a
              href="https://github.com/BlakeIvor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/blake27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="mailto:blakeivorshea@gmail.com">
              <FaEnvelope className="hover:text-blue-400 transition" />
            </a>
            <a
              href="/static/documents/Shea_Blake_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              title="Resume"
            >
              <HiDocumentText className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (hidden on mobile, shown from md+) */}
      <div className="hidden md:flex gap-4 flex-wrap">
        {/* Work Experience button */}
        <a
          href="#work-experience"
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <FaBriefcase className="text-lg" />
          Work Experience
        </a>
        {/* Resume button */}
        <a
          href="/static/documents/Shea_Blake_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <HiDocumentText className="text-lg" />
          Resume
        </a>
        {/* Contact button */}
        <a
          href="#contact"
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <FaEnvelope className="text-lg" />
          Contact
        </a>
      </div>
    </header>
  );
}
