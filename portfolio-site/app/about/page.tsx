export default function AboutPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        I’m Blake Shea, a software engineer with experience in AR/VR, backend systems,
        and full-stack web development. I enjoy building interactive experiences and
        performant applications.
      </p>
      <a
        href="/resume.pdf"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
}
