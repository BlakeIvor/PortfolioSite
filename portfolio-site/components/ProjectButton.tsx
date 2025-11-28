import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';

interface ProjectButtonProps {
  href: string;
  children: React.ReactNode;
  type?: 'demo' | 'github' | 'external';
  target?: '_blank' | '_self';
  className?: string;
}

export function ProjectButton({ 
  href, 
  children, 
  type = 'external',
  target = '_blank',
  className = '' 
}: ProjectButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] border mb-6";
  
  const typeClasses = {
    demo: "bg-gray-800 hover:bg-gray-700 text-white border-gray-700 hover:border-gray-600",
    github: "bg-gray-800 hover:bg-gray-700 text-white border-gray-700 hover:border-gray-600",
    external: "bg-gray-800 hover:bg-gray-700 text-white border-gray-700 hover:border-gray-600"
  };

  const icons = {
    demo: <FaPlay className="text-xs flex-shrink-0" />,
    github: <FaGithub className="text-sm flex-shrink-0" />,
    external: <FaExternalLinkAlt className="text-xs flex-shrink-0" />
  };

  const combinedClasses = `${baseClasses} ${typeClasses[type]} ${className}`;

  if (target === '_blank') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {icons[type]}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {icons[type]}
      {children}
    </Link>
  );
}