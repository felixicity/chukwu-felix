"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/app/components/ProjectCard";
import { useParams } from "next/navigation";
import { projects } from "@/app/lib/projectData";

export default function SingleProject() {
      const projectName = useParams().id;

      const project: Project | undefined = projects.find(
            (p: Project) => p.title.toLowerCase().replace(/\s+/g, "-") === projectName,
      );

      const projectImage = project?.img ? project.img : "/placeholder.png";

      return (
            <main className="max-w-7xl mx-auto px-6 py-20">
                  {/* 1. HERO SECTION */}
                  <header className="mb-16 space-y-6">
                        <div className="flex items-center gap-2 text-[var(--accent)] font-mono text-sm uppercase tracking-widest">
                              <Link href="/projects" className="hover:underline">
                                    Projects
                              </Link>
                              <span>/</span>
                              <span>{project?.title}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">{project?.title}</h1>
                        {/* <p className="text-xl text-[var(--neutral)] max-w-3xl leading-relaxed">{project.tagline}</p> */}
                  </header>

                  {/* 2. THE MAIN GRID */}
                  <div className="grid lg:grid-cols-[1fr_300px] gap-16">
                        {/* LEFT COLUMN: The Narrative */}
                        <div className="space-y-20">
                              {/* Big Feature Image */}
                              <section className="rounded-2xl overflow-hidden border border-white/10 bg-[#121214] p-2">
                                    <Image
                                          src={projectImage}
                                          alt="Cover"
                                          width={1200}
                                          height={675}
                                          className="rounded-xl"
                                          priority
                                    />
                              </section>

                              {/* The Content (Use your themed Prose class here) */}
                              <article className="prose max-w-none">
                                    <h2>The Challenge</h2>
                                    <p>{project?.challengeText}</p>

                                    <div className="grid md:grid-cols-2 gap-8 my-12">
                                          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                                <h4 className="text-[var(--accent)] mt-0">Technical Bottleneck</h4>
                                                <p className="text-sm mb-0">
                                                      High latency in payment webhooks causing database desync.
                                                </p>
                                          </div>
                                          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                                <h4 className="text-[var(--accent)] mt-0">Business Constraint</h4>
                                                <p className="text-sm mb-0">
                                                      Requirement for 99.9% uptime during peak holiday traffic.
                                                </p>
                                          </div>
                                    </div>

                                    <h2>The Solution</h2>
                                    <p>{project?.solutionText}</p>

                                    {/* Code Snippet Example */}
                                    <pre className="not-prose">{/* Your Custom CodeBlock component goes here */}</pre>
                              </article>
                        </div>

                        {/* RIGHT COLUMN: The Sticky Specs */}
                        <aside className="space-y-8">
                              <div className="sticky top-24 p-8 rounded-2xl border border-white/10 bg-[var(--reversed-text)] space-y-8">
                                    <div>
                                          <h4 className="text-xs uppercase tracking-widest text-[var(--neutral)] mb-4">
                                                Tech Stack
                                          </h4>
                                          <div className="flex flex-wrap gap-2">
                                                {project?.tech.map((tech: string) => (
                                                      <span
                                                            key={tech}
                                                            className="px-3 py-1 rounded-full bg-white/5 border border-[var(--neutral)] text-xs font-mono text-[var(--accent)]"
                                                      >
                                                            {tech}
                                                      </span>
                                                ))}
                                                {/* {project?.tech.map(t => <Badge key={t} text={t} />)} */}
                                          </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/5">
                                          <h4 className="text-xs uppercase tracking-widest text-[var(--neutral)] mb-4">
                                                Links
                                          </h4>
                                          <div className="flex flex-col gap-3">
                                                <a
                                                      href={project?.live}
                                                      className="flex items-center justify-between group text-sm hover:text-[var(--accent)]"
                                                >
                                                      Live Demo{" "}
                                                      <ExternalLink
                                                            size={16}
                                                            className="opacity-50 group-hover:opacity-100"
                                                      />
                                                </a>
                                                <a
                                                      href={project?.repo}
                                                      className="flex items-center justify-between group text-sm hover:text-green-700"
                                                >
                                                      Source Code{" "}
                                                      <Github
                                                            size={16}
                                                            className="opacity-50 group-hover:opacity-100"
                                                      />
                                                </a>
                                          </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/5">
                                          <h4 className="text-xs uppercase tracking-widest text-[var(--neutral)] mb-2">
                                                Role
                                          </h4>
                                          <p className="text-sm text-[var(--text-primary)]">
                                                Lead Full-stack Developer
                                          </p>
                                    </div>
                              </div>
                        </aside>
                  </div>
            </main>
      );
}
