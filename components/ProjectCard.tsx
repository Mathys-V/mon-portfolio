import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  slug: string; // pour la page dédiée
  github?: string; // URL du repo GitHub
}

export default function ProjectCard({
  title,
  description,
  image,
  slug,
  github,
}: ProjectProps) {
  return (
    <div className="project-card bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all p-4">
      <div className="mb-3 rounded-lg overflow-hidden w-full aspect-[16/9] relative">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }} // maintient le ratio sans étirer
        />
      </div>

      <h3 className="text-gray-900 dark:text-gray-100 font-semibold">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>

      <div className="flex gap-2">
        <Link
          href={`/projets/${slug}`}
          className="btn bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900"
        >
          Voir le projet
        </Link>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
