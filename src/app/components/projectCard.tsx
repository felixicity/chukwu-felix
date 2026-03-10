import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Project {
      slug?: string;
      title: string;
      img: string;
      description: string;
      tech: string[];
      link?: string;
      year?: string;
      tagline?: string;
      challengeText?: string;
      solutionText?: string;
      live?: string;
      repo?: string;
}

export const ProjectCard = ({ project }: { project: Project }) => (
      <Link href={`/projects/${project.slug}`} className="group block rounded-xl shadow-[var(--card-shadow)]">
            <div className="relative aspect-[16/10] rounded-t-xl overflow-hidden mb-4">
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <span className="text-white font-medium flex items-center gap-2">
                              View Case Study <ArrowUpRight size={18} />
                        </span>
                  </div>

                  <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
            </div>

            <div className="space-y-2 px-4 pb-4">
                  <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                              {project.title}
                        </h3>
                        <span className="text-[10px] font-mono border border-[var(--accent)]/30 text-[var(--accent)] px-2 py-0.5 rounded uppercase">
                              {project.year || "2024"}
                        </span>
                  </div>
                  <p className="text-sm text-[var(--neutral)] line-clamp-2 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 3).map((t: string) => (
                              <span
                                    key={t}
                                    className="text-[10px] font-mono text-[var(--neutral)] uppercase tracking-wider"
                              >
                                    #{t}
                              </span>
                        ))}
                  </div>
            </div>
      </Link>
);
