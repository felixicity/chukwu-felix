"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function ProjectCarousel({
      projects,
}: {
      projects: { title: string; img: string; description: string; tech: string[]; link?: string }[];
}) {
      const [index, setIndex] = useState(0);
      const [isPaused, setIsPaused] = useState(false);

      useEffect(() => {
            if (!isPaused) {
                  const timer = setInterval(() => {
                        setIndex((prev) => (prev + 1) % projects.length);
                  }, 5000);
                  return () => clearInterval(timer);
            }
      }, [isPaused, projects.length]);

      const project = projects[index];

      return (
            <div
                  className="grid md:grid-cols-2 gap-12 items-center"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
            >
                  {/* 1. THE STATIC FRAME: This div never moves */}
                  <div className="bg-[#121214] rounded-2xl p-4 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden relative">
                              <AnimatePresence mode="popLayout">
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
                                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                          exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                                          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                          className="absolute inset-0"
                                    >
                                          <Image
                                                src={project.img}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                priority
                                          />
                                    </motion.div>
                              </AnimatePresence>
                        </div>
                  </div>

                  {/* 2. THE DYNAMIC CONTENT: Only the text switches */}
                  <div className="flex flex-col justify-center min-h-[300px]">
                        <AnimatePresence mode="wait">
                              <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="space-y-6"
                              >
                                    <div>
                                          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)] mb-2 block">
                                                Featured Project 0{index + 1}
                                          </span>
                                          <h3 className="text-4xl font-display font-bold text-[var(--text-primary)]">
                                                {project.title}
                                          </h3>
                                    </div>

                                    <p className="text-[var(--neutral)] text-lg leading-relaxed">
                                          {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                          {project.tech.map((tech: string) => (
                                                <span
                                                      key={tech}
                                                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[var(--accent)]"
                                                >
                                                      {tech}
                                                </span>
                                          ))}
                                    </div>

                                    <div className="pt-4">
                                          <a
                                                href={project.link}
                                                className="group inline-flex items-center gap-2 text-[var(--accent)] font-medium"
                                          >
                                                Detailed Case Study
                                                <span className="group-hover:translate-x-1 transition-transform">
                                                      →
                                                </span>
                                          </a>
                                    </div>
                              </motion.div>
                        </AnimatePresence>

                        {/* 3. PROGRESS INDICATORS */}
                        <div className="flex gap-3 mt-12">
                              {projects.map((_, i) => (
                                    <button
                                          key={i}
                                          onClick={() => setIndex(i)}
                                          className={`relative h-1 transition-all duration-500 rounded-full overflow-hidden ${
                                                i === index ? "w-12 bg-white/20" : "w-3 bg-white/5"
                                          }`}
                                    >
                                          {i === index && (
                                                <motion.div
                                                      layoutId="activeProgress"
                                                      initial={{ width: "0%" }}
                                                      animate={{ width: isPaused ? "100%" : "100%" }}
                                                      transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                                                      className="absolute inset-0 bg-[var(--accent)]"
                                                />
                                          )}
                                    </button>
                              ))}
                        </div>
                  </div>
            </div>
      );
}
