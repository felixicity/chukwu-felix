import Image from "next/image";
import Link from "next/link";
import { NameSVG } from "./components/NameSvg";
import { ProjectCarousel } from "./components/WorkCarousel";
import RecentArticles from "./components/RecentArticles";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "./lib/mdx";
import "./globals.css";

const projects = [
      {
            title: "Kazafi",
            img: "/Screenshot_Kazafi.png",
            description:
                  "Engineered a custom Next.js platform that unifies Paystack's secure payment orchestration with a bespoke Node.js analytics dashboard, giving stakeholders full visibility into revenue data.",
            tech: ["next.js", "typescript", "node.js"],
            link: "projects/kazafi",
      },
      {
            title: "Felix",
            img: "/image.png",
            description:
                  "Engineered a custom Next.js platform that unifies Paystack's secure payment orchestration with a bespoke Node.js analytics dashboard, giving stakeholders full visibility into revenue data.",
            tech: ["next.js", "typescript", "node.js"],
            link: "projects/kazafi",
      },
];

export default async function App() {
      const posts = await getAllPosts();
      return (
            <>
                  <div className="text-center w-full my-6 mx-auto gap-10 flex flex-col items-center border-b-1 border-gray-200 py-2 px-8 lg:px-20">
                        <NameSVG />
                  </div>
                  <main className="flex flex-col md:flex-row gap-6 px-8 py-4 lg:gap-8  lg:px-20">
                        <div className="flex items-center max-w-lg">
                              <Image src="/image.png" width={5000} height={5000} alt="felix" className="w-full" />
                        </div>
                        <div>
                              <h2 className="inline-block font-bold uppercase font-mono text-lg lg:text-2xl bg-[var(--on-accent)] text-[var(--reversed-text)] tracking-wide">
                                    About me
                              </h2>
                              <p className="py-2 text-[var(--accent)]">
                                    {"I'm a Software Engineer based in Lagos, Nigeria."}
                              </p>
                              <p className="pb-2 text-sm text-balance leading-6">
                                    {
                                          "I'm a Full-stack Engineer with a passion for building robust, scalable applications that solve real-world problems. For the past [Number] years, I've specialized in the Node.js ecosystem, moving beyond just writing code to designing architectures that stand the test of time."
                                    }
                              </p>
                              <p className="pb-2 text-sm text-balance leading-6">
                                    {
                                          "My philosophy is simple: Code is for humans, not just machines. Whether I'm optimizing a PostgreSQL query, fine-tuning a Next.js frontend, or documenting my journey, I focus on clarity, performance, and maintainability."
                                    }
                              </p>
                              <div className="mt-4">
                                    <p className="py-2 text-[var(--accent)]">{"When I'm not in the IDE:"}</p>
                                    <p className="pb-2 text-sm text-balance leading-6">
                                          {
                                                "I'm likely diving into the latest tech stacks, sharing my journey through my Daily Logs, or listening to some classic reggae to clear my head. I believe that being a great engineer means being a lifelong student, and Ibring that curiosity to every project I touch."
                                          }
                                    </p>
                              </div>
                        </div>
                  </main>

                  <section className="space-y-12 py-20 px-8">
                        <h2 className="text-3xl lg:text-5xl font-bold px-12">Featured Work</h2>
                        <ProjectCarousel projects={projects} />
                  </section>

                  <section className="py-24 border-t border-white/5 px-8 lg:px-20">
                        <div className="flex items-baseline justify-between mb-12">
                              <div>
                                    <h2 className="text-3xl font-display font-bold tracking-tight">Recent Logs</h2>
                                    <p className="text-[var(--neutral)] mt-2">
                                          Thoughts on architecture, DX, and building in public.
                                    </p>
                              </div>
                              <Link
                                    href="/blog"
                                    className="group flex items-center gap-2 text-sm font-medium text-[var(--accent)]"
                              >
                                    View Archive{" "}
                                    <ArrowRight
                                          size={16}
                                          className="hidden md:inline-block group-hover:translate-x-1 transition-transform"
                                    />
                              </Link>
                        </div>
                        <RecentArticles posts={posts} />
                  </section>
            </>
      );
}
