import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

export function ProjectCard({ title, description, liveLink, githubLink }: ProjectCardProps) {
  return (
    <div className="group border border-black/10 p-8 hover:border-black/30 transition-all duration-300 hover:shadow-lg bg-white/50 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300"
        >
          <ExternalLink className="size-4" />
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm border border-black/20 px-4 py-2 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          <Github className="size-4" />
          GitHub
        </a>
      </div>
    </div>
  );
}