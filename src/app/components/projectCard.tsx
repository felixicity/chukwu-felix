import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({
      project,
}: {
      project: {
            slug?: string;
            title: string;
            img: string;
            description: string;
            tech: string[];
            link?: string;
            year?: string;
      };
}) => (
      <Link href={`/projects/${project.slug}`} className="group block">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#121214] mb-4">
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

            <div className="space-y-2">
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
