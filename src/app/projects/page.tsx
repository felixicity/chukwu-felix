"use client";

import { useState } from "react";
import { ProjectCard } from "../components/projectCard";
import { projects } from "../lib/projectData";

const Page = () => {
      const [filter, setFilter] = useState("All");

      const filteredProjects =
            filter === "All"
                  ? projects
                  : projects.filter((project) => project.category.toLowerCase() === filter.toLowerCase());

      return (
            <main className="max-w-7xl mx-auto px-6 py-20">
                  {/* Header: Setting the Stage */}
                  <header className="mb-16 border-b border-white/5 pb-12">
                        <h1 className="text-5xl font-display font-bold mb-4">Archive</h1>
                        <p className="text-[var(--neutral)] max-w-2xl text-lg">
                              A collection of professional works, open-source experiments, and technical deep-dives
                              I&apos;ve built over the years.
                        </p>
                  </header>

                  {/* 1. FILTER BAR: Senior UX for easy navigation */}
                  <div className="flex gap-4 mb-12 overflow-x-auto pb-2 scrollbar-hide">
                        {["All", "Fullstack", "Frontend", "Backend", "Tools"].map((category) => (
                              <button
                                    key={category}
                                    className={`px-3 py-2 md:px-3 md:py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all whitespace-nowrap ${filter === category ? "border-white/10 dark:!border-amber-400 font-bold" : ""}`}
                                    onClick={() => setFilter(category)}
                              >
                                    {category}
                              </button>
                        ))}
                  </div>

                  {/* 2. THE GRID */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length === 0 ? (
                              <div> No projects in &ldquo;{filter}`&rdquo; category</div>
                        ) : (
                              filteredProjects.map((project, i) => <ProjectCard key={i + 1} project={project} />)
                        )}
                  </div>
            </main>
      );
};

export default Page;
