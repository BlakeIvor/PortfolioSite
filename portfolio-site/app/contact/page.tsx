export default function ContactPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Interested in working together? Let’s talk!
      </p>
      <ul className="mt-4 space-y-2">
        <li>
          <a href="mailto:blakeivorshea@gmail.com" className="text-blue-600 hover:underline">
            blakeivorshea@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/BlakeIvor" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/blake27" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
