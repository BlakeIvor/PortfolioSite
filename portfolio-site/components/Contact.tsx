import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="mt-16 mb-16">
      <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700 mb-12"></hr>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">Let's Connect</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
         Feel free to reach out to me at the following:
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:blakeivorshea@gmail.com"
            className="border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors bg-gray-800 text-center group"
          >
            <div className="mb-4">
              <FaEnvelope className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors mx-auto" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-300 text-sm mb-2">Drop me a line</p>
            <span className="text-blue-400 text-sm">blakeivorshea@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/blake27/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors bg-gray-800 text-center group"
          >
            <div className="mb-4">
              <FaLinkedin className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors mx-auto" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">LinkedIn</h3>
            <p className="text-gray-300 text-sm mb-2">Professional network</p>
            <span className="text-blue-400 text-sm">Connect with me</span>
          </a>

          <a
            href="https://github.com/BlakeIvor"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors bg-gray-800 text-center group"
          >
            <div className="mb-4">
              <FaGithub className="text-2xl text-gray-400 group-hover:text-blue-400 transition-colors mx-auto" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">GitHub</h3>
            <p className="text-gray-300 text-sm mb-2">Code & projects</p>
            <span className="text-blue-400 text-sm">View repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}