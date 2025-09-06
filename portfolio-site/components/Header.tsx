import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import { HiDocument } from "react-icons/hi";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-8 bg-gray-900 text-white shadow-lg">
      <div className="flex items-center gap-8">
        <div className="rounded-full overflow-hidden border-4 border-gray-700 w-36 h-36 bg-gray-800">
          <Image
            src="/static/images/avatar.png"
            alt="Blake Shea"
            width={140}
            height={140}
            className="object-cover w-full h-full scale-x-[-1]"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">Blake Shea</h1>
          <p className="text-xl text-gray-400 mb-4">Software Engineer & Full-Stack Developer</p>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/BlakeIvor" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com/in/blakeivor" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="mailto:your@email.com">
              <FaEnvelope className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:your@email.com"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <FaEnvelope className="text-xl" />
          Mail
        </a>
        <a
          href="https://github.com/BlakeIvor"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>
        <a
          href="/static/files/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <HiDocument className="text-xl" />
          Resume
        </a>
        <a
          href="https://blaika.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
        >
          <SiItchdotio className="text-xl" />
          itch.io
        </a>
      </div>
    </header>
  );
}
