import Image from "next/image";
import Link from "next/link";
import { NameSVG } from "../components/nameSvg";
import { ProjectCarousel } from "../components/featured-work-carousel";
import RecentArticles from "../components/recent-articles";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "../lib/mdx";

export const projects = [
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

export default async function Homepage() {
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
                              <h2 className="inline-block font-bold uppercase font-mono text-lg lg:text-2xl dark:bg-yellow-400 p-2 dark:text-black text-white bg-black">
                                    About me
                              </h2>
                              <p className="py-2 text-[var(--accent)]">
                                    I&apos;m a Software Engineer based in Lagos, Nigeria.
                              </p>
                              <p className="pb-2 text-sm text-balance leading-6">
                                    I&apos;ve spent the last 5+ years building clean, functional applications for web
                                    and, more recently, mobile. I focus on creating products that drive business value
                                    while being a joy to use. My work has spanned Healthcare, Financial Services,
                                    Identity Management, and AgriTech.
                              </p>
                              <p className="pb-2 text-sm text-balance leading-6">
                                    I&apos;m driven by curiosity and a genuine love for learning. Whether it&apos;s
                                    solving a tricky UI challenge, or exploring a new framework, I&apos;m always excited
                                    to dive in. What matters most to me is crafting applications that are both
                                    delightful to use and rock-solid in functionality.
                              </p>
                        </div>
                  </main>
                  {/* <div className="px-8 py-8 lg:px-20"> */}
                  {/* Example structure for the Featured Section */}
                  <section className="space-y-12 py-20 px-8">
                        <h2 className="text-3xl lg:text-5xl font-bold px-12">Featured Work</h2>
                        <ProjectCarousel projects={projects} />
                  </section>
                  {/* <span className="absolute -top-3 -right-1 text-6xl text-[var(--on-accent)]">
                                          #09
                                    </span> */}

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
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                        </div>
                        <RecentArticles posts={posts} />
                  </section>
            </>
      );
}
